import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { message } = await request.json();
    const msg = message.toLowerCase();
    
    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 1200));

    let reply = "I am currently running in **Offline Mode**. I can assist you with your LifeOS interface and local tasks, but my cloud neural network is disconnected right now.";

    if (msg.includes("python") || msg.includes("code")) {
      reply = "Here is a quick Python snippet to get you started:\n\n```python\nimport asyncio\n\nasync def boot_life_os():\n    print('Initializing core systems...')\n    await asyncio.sleep(1)\n    print('Cinematic UI loaded. Welcome back.')\n\nasyncio.run(boot_life_os())\n```\nLet me know if you need any specific algorithms!";
    } else if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey")) {
      reply = "Hello! I am your **LifeOS Central AI**. I am currently running securely on your local network. How can I optimize your workflow today?";
    } else if (msg.includes("who are you") || msg.includes("what are you")) {
       reply = "I am the LifeOS Intelligence system. A highly secure, localized AI designed to manage your flights, cargo, gym metrics, and daily productivity without relying on external cloud APIs.";
    } else if (msg.includes("weather") || msg.includes("news")) {
       reply = "My live data modules are currently restricted. Please check the Cargo or Flight modules for live tracking data!";
    }

    return NextResponse.json({ reply });
  } catch (error: any) {
    return NextResponse.json({ error: "System malfunction. Please reboot." }, { status: 500 });
  }
}
