import http from "node:http"

import { serveStatic } from "./utils/serveStatic.js";
import { handleGet } from "./route/handleRoute.js";
import { handlePost } from "./route/handleRoute.js"
const __dirname = import.meta.dirname
const PORT = 500

const server = http.createServer(async (req, res) => {
    console.log('Incoming request:', req.method, req.url);
  if (!req.url.startsWith('/api')) {
    return serveStatic(req, res, __dirname)
  }

  else if (req.url.startsWith('/api')) {
    if (req.method === "GET") {
      return await handleGet(req, res, __dirname)
    }

    else if (req.method === "POST") {
      return await handlePost(req, res)
    }
  }
  })


server.listen(PORT, ()=>{console.log(`Server is running on  PORT ${PORT}`)})
