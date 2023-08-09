export async function GET(request) {

  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ]

  return new Response(JSON.stringify(users))
}