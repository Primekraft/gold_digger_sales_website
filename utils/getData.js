import path from "node:path"

import fs from "node:fs/promises"

export async function getData() {

  try {
    const dataFilePath = path.join("data", "data.json")
    const content = await fs.readFile(dataFilePath, 'utf8')

    const parsedData = JSON.parse(content)
    return parsedData
  }

  catch (error) {
    return []
}

}
