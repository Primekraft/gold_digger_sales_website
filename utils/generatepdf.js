import PDFDocument from 'pdfkit'

import fs from "node:fs"

export  function generatepdf(userPurchase, res) {
  const receiptsFolder = './receipts'

  fs.mkdirSync(receiptsFolder, {recursive: true})
  const receiptId = Date.now()
  const fileName = `${receiptsFolder}/receipt-${receiptId}.pdf`
  const doc = new PDFDocument()

  res.setHeader('ContentType', "application/pdf")
  res.setHeader(
      'Content-Disposition',
      `attachment; filename="${fileName}"`
    )
  doc.pipe( fs.createWriteStream(fileName))
 doc.pipe(res)
  doc.fontSize(25).text('GoldDigger')
  doc.moveDown()
  doc.fontSize(18).text('Investment Receipt')
  doc.moveDown()
  doc.fontSize(12)
  doc.text(`Date of purchase: ${new Date().toLocaleDateString()}`)
  doc.moveDown()

  doc.text(`Amount paid: ${userPurchase.investmentPrice}`)
  doc.moveDown()

  doc.text(`Price per oz: £${userPurchase.pricePerOz}`)

  doc.moveDown()

  doc.text(`Gold sold: ${userPurchase.goldQuantity} oz`)

  doc.end()

}
