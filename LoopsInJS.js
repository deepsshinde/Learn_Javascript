LOOPS IN JAVASCRIPT:
    Lops are used to execute a piece of code again and again.
    There are many types of loops available.
    1. for loop :
          i.     //printin 
                  for(let i=1; //initialization condition
                    i<=5; //Termination COndition
                    i++  //Increment/decrement 
                   ){
                        console.log("Deeptii");
                }
         ii.     //calculate sum of 1 to 5 
                 let sum = 0;
                 for(let n=1; n<=5; n++){
                 sum +=n;
                 }
                console.log("SUm is:", sum);
                 
    2. while loop:
            syntax:
                    while(condition){
                            //code goes here
                    }
                let i=1;
                while(i<=5){
                        console.log(i);
                        i++;
                }
    3. do while loop:
            Syntax:
                    do{
                            //do some work
                    }while(i<=5);

                let i=8;
                do{
                        console.log("Hello");
                        i++;
                }while(i<=10);
   4. for-of loop :
                it helps in initiating loops on string and arrays.
                it is used to iterate characters of a string.
               
                   let str = "deepti";
                        for(let i of str){
                        console.log(i);
                        }
                let str = "Deeptii";
                let size = 0;
                for(let i of str){
                        console.log( i);
                        size++;
                }
                console.log("String Size : ", size);

   5. for-in loop :
                this loop is used for object and arrays.

                let student = {
                        name : "Deepti",
                        cgpa:9.4,
                };
                for(let key in student)
                        {
                                console.log(key, student[key]);
                        }
  
  
