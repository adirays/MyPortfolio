
## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  
  Here's every terminal command in order:

## Terminal 1 — Ollama
$env:OLLAMA_HOST="0.0.0.0:11434"
$env:OLLAMA_ORIGINS="http://localhost:5173"
ollama serve
Keep this open. Don't close it.

## Terminal 2 — Cloudflare Tunnel
cloudflared tunnel --url http://localhost:11434
Copy the new trycloudflare.com URL it gives you. Update OLLAMA_ENDPOINT in your code with it.

## Terminal 3 — Vite Dev Server
cd "F:\OLD SECTOR\Premium Interactive Portfolio Website"
npm run dev