export async function GET(request: Request) {
  const response = await fetch(`${process.env.NEXT_SERVER_URL}/companyInfo`);
  const company = await response.json();

  if (!company) {
    return new Response("Company is not Found!", {
      status: 404,
    });
  }
  return Response.json({ company });
}
