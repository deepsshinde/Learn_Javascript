// create a function using function keyword that takes a string as an argument & returns the number of vowels in the string

function countVowels(str){
  let count = 0;
  for(let i = 0; i<=str.length; i++)
    {
      if(str[i] ==='a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] ==='u')
      {
        count++;
      }
    }
  return count;
}
countVowels("deeptii")


//same using arrow function

const countVowels = (str) =>{
         let count = 0;
  for(let i = 0; i<=str.length; i++)
    {
      if(str[i] ==='a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] ==='u')
      {
        count++;
      }
    }
  return count;
}
 countVowels("deeptii")
