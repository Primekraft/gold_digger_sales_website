const priceEl = document.getElementById('price-display')





async function getLivePrice() {
  try {
    const response = await fetch('/api')
    const data = await response.json()
    if (!response.ok) {
      console.log(`response status:`, response.status)

    }
   renderLiveprice(data)

  }
  catch (error) {
    console.log(`something happened and it was: ${error}`)
  }
}

function renderLiveprice(livePrices) {
  const randomIndex =  Math.floor(Math.random() * livePrices.length - 1)
  let livePriceHtml = ''

  livePriceHtml += ` ${livePrices[randomIndex]}`


  priceEl.textContent = livePriceHtml
}

setInterval(()=>{getLivePrice()}, 2000)
