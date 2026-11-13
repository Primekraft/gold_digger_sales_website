import sanitize from "sanitize-html";

export function sanitizeData(data) {

  const sanitizedData = {}

  for (const [key, value] of Object.entries(data)) {
    sanitizedData[key] = sanitize(value)
  }
return sanitizedData
}
