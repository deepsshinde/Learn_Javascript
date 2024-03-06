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
  


