export default function handler(req: Request): Response {
  const url = new URL(req.url);
  
  if (url.pathname === "/") {
    return new Response("Hello!", {
      status: 200,
      headers: { "content-type": "text/plain" },
    });
  }
  
  return new Response("Not Found", { status: 404 });
}