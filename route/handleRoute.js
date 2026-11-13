import { getData } from "../utils/getData.js";
import { sendResponse } from "../utils/sendResponse.js";
import { parseBody } from "../utils/parseBody.js";
import path from "node:path"
import { sanitizeData } from "../utils/santizeData.js";
import { purchaseEvent } from "../utils/purchaseEvents.js";

import fs from "node:fs/promises"
export async function handleGet(req, res, rootPath) {
  const data = await getData()

const content = JSON.stringify(data)
  sendResponse(res, 200, 'application/json', content)
}
export async function handlePost(req, res) {
  console.log('1. handlePost started');

  try {
    const parsedBody = await parseBody(req);


    const sanitizedBody = sanitizeData(parsedBody)

    purchaseEvent.emit("purchase-was-made", sanitizedBody, res)

    const purchase = `
      date of purchase: ${new Date().toLocaleString()}
      amount paid: ${sanitizedBody.investmentPrice},
      Price per Oz: ${sanitizedBody.pricePerOz},
      gold sold: £${sanitizedBody.goldQuantity}
      --------------------------------
      `

    const purchasetxtPath = path.join("data", "userPurchases.txt")
    await fs.appendFile(purchasetxtPath, purchase, 'utf8')

    console.log('2. Request body parsed:', sanitizedBody);

    const responseData = {
      success: true,
      message: 'Investment received successfully',
      data: sanitizedBody
    };

    console.log('3. Sending response:', responseData);

    // sendResponse(
    //   res,
    //   201,
    //   'application/json',
    //   JSON.stringify(responseData)
    // );

    // console.log('4. Response sent');

  } catch (error) {
    console.error('POST error:', error);

    if (!res.headersSent) {
      sendResponse(
        res,
        400,
        'application/json',
        JSON.stringify({
          success: false,
          message: 'Unable to process request'
        })
      );
    }
  }
}
