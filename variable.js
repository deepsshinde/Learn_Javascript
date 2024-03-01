Console.log('hello World');  //it is used to print the text on the screen

Js is a dynamically types language.
Variables are containers for data.

  Variable Rules:
    Variable names are case sensitive
    only letters, digits, underscore and $ sign is allowed \. (Spaces are not allowed).
    1st letter should be chracter or a underscore or a $ sign. (Digit not allowed)
    Reserved words cant be used an varialbe name.


    Variable Declaration:
       We can  declare a variable using 3 ways.

      1. var - variable can be re declared and updated. global score variable.
              It is the old way to declare a variable before 2015.
              There are many errors in var like we can re declare and update the variable so it will create confusion.
                var age = 20;
                var age = 21;
            like this we can redeclared many times as we want.
              
      2. let - variable cant be re declared but can be updated. a block score variable.
          Syntax:
              let name = "Deeptii";
              let age = 20;
          This is most wodely used variable declaration way.
            It cant be re declared.
              

      3. const - variable cant be re declared or updated. a block scope variable.
            constant means fixed values. hence we cant re declare and re update the values.
            const Fname= "Deeps";
        we have give any value while declaring the const.
          without initializing any value the const it will give an error.
          
    
