export async function GET(request: Request) {
  const response = await fetch(`${process.env.NEXT_SERVER_URL}/todos`);
  const todos = await response.json();

  if (!todos) {
    return new Response("Todos is not Found!", {
      status: 404,
    });
  }
  return Response.json({ todos });
}
