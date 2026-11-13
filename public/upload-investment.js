


const formEl = document.getElementById('upload-investment');

const dialog = document.getElementById('outputs')
const closeEl = document.getElementById('close')

const priceDisplay = document.getElementById('price-display')

const investmentSummary = document.getElementById('investment-summary')

formEl.addEventListener('submit', async function handleSubmit(event) {

  event.preventDefault();

  console.log('Form submitted');



  // Get the investment amount
  const priceEl = Number(document.getElementById('investment-amount').value)

  const currentPrice = Number(priceDisplay.textContent)

  // calculate gold quantity
const goldQuantity = priceEl/currentPrice

investmentSummary.textContent = `You just bought ${goldQuantity} ounces (ozt) for £${priceEl}. \n You will receive documentation shortly.`

   dialog.showModal()

  // Prepare the data
  const formData = {
    investmentPrice: Number(priceEl),
    goldQuantity: Number(goldQuantity),
      pricePerOz:  Number(currentPrice)
  };

  try {

    // Send POST request
    const response = await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    console.log(currentPrice)
    console.log('Fetch completed:', response.status);



    const pdfBlob = await response.blob()

    const pdfUrl = URL.createObjectURL(pdfBlob)

    const downloadLink = document.createElement('a')
    downloadLink.href = pdfUrl
    downloadLink.download = 'investment-receipt.pdf'

    document.body.appendChild(downloadLink)
    downloadLink.click()
    downloadLink.remove()

    URL.revokeObjectURL(pdfUrl)

    // Check respons
    if (response.ok) {

      console.log('Successful POST request');


    } else {

      console.error('Server error:', result.message);

    }

  } catch (error) {

    console.error('Network or response error:', error);

  }

  closeEl.addEventListener("click", () => {
    dialog.close()
  })

});
