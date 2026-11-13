
export function sendResponse(res, statusCode, contentType, payload) {

  res.setHeader("content-Type", contentType)
  res.statusCode = statusCode
  res.end(payload)
}
