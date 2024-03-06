STRING IN JAVASCRIPT:
  String is a sequence of characters used to represent text.
  whenever we want to write the text or name we use stirng.
  we can write string using " " or ' ' 

  let str = "deeptii";
  let str = 'deeptii'; 

  String has inbuilt properties and functions.

    PROPERTIES :
      1. Length Property :   It is used to give length of a string
                        the positions of any string start from 0.
                        that position is known as index (indices).
                            
          syntax  - 
              let str = "deeptii";
              str.length
              console.log(str[4]);  //printing charactrr present at index 4 i. e. 't'

      2. Template Literals :
            it is a special type of a string.
          In templare literals we can write variable name along with any string
            this type of string is created using ` ` and we can embeded expression in it. 
        Synatx : `string text ${expression} string text `

        In template literals there are escape characters.
            1. \n  : is used to print the text on next line.
                        console.log("Deeptii  \n Shinde")
            2. \t : is used give space in between the strings or characters
                        console.log("Deeptii\tShinde")
            The length of escape characters are always count as 1. even though it is 2 character.

let obj = {
    item:"pen",
    price : 20,
};
console.log("The Item is", obj.item, "and the price is ", obj.price);  // in this line whenever we want to print the object we have again give " " and , but in template literal helps in this.

// so to avoid this and our code more efficient we use template literals.
console.log(`the item is ${obj.item} and the price is ${obj.price}`);



String Methods In JS:
        string methods are nothing but the string fucntions.
        there are variour methods in stings.
        Strings in JS are immutable // this means it cant be changed

    1. toUpperCase()
            used to convert all the characters of a string in upper case
            Syntax: 
                    let str = "deeptii"
                   console.log( str.toUpperCase())  //we can print like this or
                    str.toUpperCase() //this

    2. toLowerCase()
            used to convert all the characters of a string in lower case
            Syntax:
                let str = "deeptii"
                   console.log( str.toLowerCase())  //we can print like this or   hya madhe jr print kel tr te string la " " yet nahi 
                    str.toLowerCase() //this ani hyamadhe output 'Deeptii' as print hot

    3. trim()
            used to remove the white spaces 
          It trims the starting an ending white spaces

    Syntax : 
        str.trim()

    4. slice(start, end):
            returns the specific part of the string which we wanted to print
            the ending value is not included in the output.
            syntax:
                let str = "1234567897654"
                    console.log(str.slice(2, 8));

    5. str1.concat(str2):
            joins str2 with str1

            let str1 = "Deeptii"
            let str2 = "SHinde"
            //console.log(str1.concat(str2))
            let str3 = str1 + str2;
            console.log(str3)


    6. str1.replace(searchval, newval):
            replaces the old value with new one.
                replace ni fakt ek value replace hoil ani replaceall ni string madhlya sglya matching values replace hoil.

                let str = "Mummy"
                console.log(str.replace('M' , 'T'))

    7. str.charAt(index)
        let str = "Deeptii"
        console.log(str.charAt(2))


and many more...
        


        
    
