propmt function is used to take input form the user.
Synatx:
       let name = prompt("Enter Your Name");
       console.log(name);

//checking if a number is multiple of 5
        let n = prompt("Enter Any Number");
        if(n % 5 === 0)
        {
            console.log(n, "is multiple of 5");
        }else
        {
       console.log("not");
        }

//write a code which can give grades to students according to their scores

        let marks = prompt("Enter Your Marks");
        let Grade;
        if(marks>=80 && marks<=100)
        {
            Grade = "A";
        }
        else if(marks>=70 && marks<=89)
        {
             Grade = "B";
        }
        else if(marks>=60 && marks<=69)
        {
           Grade = "C";
        }
        else if(marks>=50 && marks<=59)
        {
            Grade = "D";
        }
        else{
             Grade = "F";
        }

    console.log("Your Grade Is:", Grade);

