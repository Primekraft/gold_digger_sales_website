export async function parseBody(req) {
  let body = ''

  for await (const chunk of req) {
    body += chunk
  }

  try {
      return JSON.parse(body)
  }

  catch (error) {
    console.log(`Invalid JSON Format, ${error}`)
    throw error
  }
}
