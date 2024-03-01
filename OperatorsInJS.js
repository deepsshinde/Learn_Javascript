OPERATORS :
   Is Used to perform operation on data.
     Operators can be many types.

     1. Arithmetic Operator: (+, -, *, /)
            i. Modulus
            ii. Exponentiation
            iii. Increment  ++
            iv. Decrement --
             
         let a=5;
         let b=10;
         console.log(a + b);  //addition
         console.log(a - b);  //substraction
         console.log(a * b);  //Multiplication
         console.log(a / b);  //Division
         console.log(a % b);  // Modulus
         console.log(a ** b);  //Exponentiation 

    v. Unary Operator : 
        let a = 9;
        let b = 8;
        ++a;
        console.log("a =" +a);
        --b;
        console.log("b =" +b);

2. Assignment Operator:
    i. =  - a = b  means that the value of a is equal to value of b
   ii. += -  a+=1 means that a = a + 1
  iii. -= -  a-=1 means that a = a - 1
   iv. *= -  a*=1 means that a = a * 1
    v. /= -  a=/1 means that a = a / 1
   vi. **= -  a**=1 means that a = a ** 1


3. Comparision Operator :
    i. Equal to ==    
            let a = 2;
            let b = 3;
            console.log("a == b", a == b);

   ii. Equal to & type ===
            let a = 2;
            let b = 2;
            console.log("a === b", a === b);

  iii. Not Equal to !=
            let a = 2;
            let b = 6;
            console.log("a != b", a != b);
   iv. Not Equal to & type !==
            let a = 2;
            let b = 6;
            console.log("a !== b", a !== b);
    
    v. > Is greater than Operator
            let a = 2;
            let b = 6;
            console.log("a > b", a > b);

   vi. >=  Is greater  than equalto Operator
            let a = 12;
            let b = 6;
            console.log("a >= b", a >= b);

  vii. <  Is less than Operator
            let a = 12;
            let b = 6;
            console.log("a < b", a < b);

 viii. <=  Is less than equalto  Operator
            let a = 12;
            let b = 6;
            console.log("a <= b", a <= b);


4. Logical Operator:
    i. Logical AND &&   -  both the conditions should be true
 ------------------------------------    
        Cond 1 | Cons=d 2 | Res
         T     |   T      |   T
         T     |   F      |   F 
         F     |   T      |   F
         F     |   F      |   F
--------------------------------------
    
   ii. Logical OR ||    - one of any condition should be true
 ------------------------------------    
        Cond 1 | Cons=d 2 | Res
         T     |   T      |   T
         T     |   F      |   T 
         F     |   T      |   T
         F     |   F      |   F
--------------------------------------
    
  iii. Logicao NOT !   - Gives opposite result
 ------------------------------------    
        Cond 1 | Cons=d 2 | Res
         T     |   T      |   F
         T     |   F      |   F 
         F     |   T      |   F
         F     |   F      |   T
--------------------------------------
        
