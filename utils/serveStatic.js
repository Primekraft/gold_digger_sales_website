import { sendResponse } from "../utils/sendResponse.js";
import path from 'node:path'
import fs from 'node:fs/promises'
import { getContentType } from "../utils/getContentType.js";

export async function serveStatic(req, res, rootPath) {
  try {
    const publicPath = path.join(rootPath, "public")
    const url = new URL(req.url, 'http://localhost')
       const pathname = decodeURIComponent(url.pathname)
    const filePath = path.join(publicPath,
      pathname  === "/" ?
        "index.html"
        : pathname.slice(1))
    const ext = path.extname(filePath)
    const contentType = getContentType(ext)

    if (req.url.startsWith("/")) {
      const content = await fs.readFile(filePath)
      sendResponse(res, 200, contentType, content)
    }
  }
   catch (error) {
    if (error.code === "ENOENT") {
      const filePath = path.join("public", "404.html")
      const content = await fs.readFile(filePath, 'utf8')
      console.log(content )
      sendResponse(res, 404, "text/html", JSON.stringify(content))
    }
}
 }


    // if {
    //   const filePath = path.join(publicPath, "404.html")

    //   const content = await fs.readFile(filePath, 'utf-8')
    //   const ext = path.extname(filePath)
    //
    //   sendResponse(res, 404, contentType, content)
    // }
