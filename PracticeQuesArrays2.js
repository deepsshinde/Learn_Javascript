// for a given array with prices of 5 items -> [250, 645, 300, 900, 50]
// All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

let price =  [250, 645, 300, 900, 50]
let sum = 0
for(let i=0; i<price.length; i++){
  sum +=price[i]
}
console.log(`price without adding offer ${sum}`)

//applying offer
let offer = 0;
for(let i =0; i<price.length; i++)
  {
    offer = price[i] /10
    console.log(price[i])
    console.log(`${offer} at ${price[i]}`)
    price[i] -= offer
  }
console.log(price)

//after applying offer
let sum2 = 0
for(let i=0; i<price.length; i++){
  sum2 +=price[i]
}
console.log(`price without adding offer ${sum2}`)


