from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
import json
from ai_engine import AIEngine

app = FastAPI(title="LifeOS Master API")

# Setup CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For development; restrict in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

ai_engine = AIEngine()

@app.get("/")
def read_root():
    return {"status": "LifeOS AI Core Online"}

@app.websocket("/ws/chat")
async def chat_endpoint(websocket: WebSocket):
    await websocket.accept()
    # Unique session ID for the user (could be extracted from auth token later)
    session_id = "user_session_1" 
    try:
        while True:
            data = await websocket.receive_text()
            payload = json.loads(data)
            
            user_message = payload.get("message", "")
            model_name = payload.get("model", "llama3")
            
            # Stream the response back via WebSockets
            async for chunk in ai_engine.stream_chat(user_message, model_name, session_id):
                await websocket.send_text(json.dumps({
                    "type": "chunk",
                    "content": chunk
                }))
                
            await websocket.send_text(json.dumps({
                "type": "done"
            }))
            
    except WebSocketDisconnect:
        print(f"Client disconnected: {session_id}")
    except Exception as e:
        await websocket.send_text(json.dumps({
            "type": "error",
            "content": str(e)
        }))
