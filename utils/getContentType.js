export function getContentType(ext) {
  const types = {


        '.js': 'application/javascript',
        '.mjs': 'application/javascript',
        '.json': 'application/json',
        '.xml': 'application/xml',
        '.txt': 'text/plain',

        // Images
    '.png': 'image/png',
        '.css': 'text/css',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.webp': 'image/webp',
        // '.ico': 'image/x-icon',

  }

  return types[ext.toLowerCase()] || "text/html"
}
