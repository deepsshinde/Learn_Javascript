//for a given array with the marks of the students -> [85,97, 44, 37, 76, 60]
//find the average marks of the entire class

let mark = [85,97, 44, 37, 76, 60]
let marsum = 0

for(let i=0; i<mark.length; i++)
  {
    marsum += mark[i]
  }
   console.log("Marks Sum:", marsum)
  //for avg
  let avg = marsum / mark.length
  console.log(avg)
