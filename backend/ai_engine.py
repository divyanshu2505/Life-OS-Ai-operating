import ollama
import json

class AIEngine:
    def __init__(self):
        # In a real scenario, we would connect to Redis here for memory persistence
        self.memory_store = {}

    def get_context(self, session_id: str):
        """Retrieve conversation history for the session."""
        if session_id not in self.memory_store:
            self.memory_store[session_id] = [
                {"role": "system", "content": "You are LifeOS, a premium, highly intelligent AI operating system. Be concise, highly competent, and structure your responses cleanly. Use markdown."}
            ]
        return self.memory_store[session_id]

    def update_context(self, session_id: str, role: str, content: str):
        """Append a new message to the session's history."""
        self.memory_store[session_id].append({"role": role, "content": content})
        
        # Keep context window manageable (e.g., last 20 messages)
        if len(self.memory_store[session_id]) > 21:
            # Keep the system prompt, but remove oldest messages
            self.memory_store[session_id] = [self.memory_store[session_id][0]] + self.memory_store[session_id][-20:]

    async def stream_chat(self, prompt: str, model: str, session_id: str):
        """Stream chat completions from local Ollama instance."""
        
        # 1. Update memory with User prompt
        self.update_context(session_id, "user", prompt)
        
        # 2. Get full context array
        messages = self.get_context(session_id)
        
        # 3. Stream from Ollama
        try:
            # We use ollama.chat with stream=True. 
            # Note: the python ollama library supports streaming out of the box.
            response_stream = ollama.chat(
                model=model,
                messages=messages,
                stream=True
            )
            
            full_response = ""
            for chunk in response_stream:
                content = chunk['message']['content']
                full_response += content
                yield content
                
            # 4. Update memory with Assistant response once stream is complete
            self.update_context(session_id, "assistant", full_response)
            
        except Exception as e:
            # Fallback if model isn't pulled or Ollama is down
            yield f"\n[System Error: {str(e)}. Please ensure Ollama is running and the model '{model}' is pulled.]"
