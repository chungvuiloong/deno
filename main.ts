import { serve } from "https://deno.land/std@0.208.0/http/server.ts";

function handler(req: Request): Response {
  const url = new URL(req.url);
  
  if (url.pathname === "/") {
    return new Response("Hello!", {
      status: 200,
      headers: { "content-type": "text/plain" },
    });
  }
  
  return new Response("Not Found", { status: 404 });
}

console.log("Server running on http://localhost:8000");
serve(handler, { port: 8000 });