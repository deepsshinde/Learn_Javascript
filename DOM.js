WINDOW OBJECT:.
        the window object represents an open window in a browser. it browers object( not js's) & automatically created byt the browser
        it is aglobal object with lots of prooperties & methods.
        to make changes in html without actually changing in html we can use DOM.
        
        


DOM: .
        Dom stands for Document Object Model.
        Dom has tree like structure
        Each node in tree s object.
                        Window
                          |
                          v
                        Document
                          |
                          v
                        HTML
                          /\   
                Head                              Body
        meta meta title link             div                script
                                  img h1 p duv

DOM MANIPULATION SELECTORS:.
        DOM Maniulation is nothing but the accessing the elements.
        we can access element using various ways.

        1. ID:
                to define id in css we use #.
                document.getElementById("some value")
        2. Class:
                to define the class in css file we use "."
                document.getElementByClassName("MYclass")

        3. Tag:
                document.getElementByTagName("p")

        4. Query Selector:.
                in query selector we can pass id, class, or tagname to access the element.
                document.queryselector("p")


DOM MANIPULATION PROPERTIRS:.
        1. tagName :
                It returns tag for element nodes.
        2. innerText :
                It returns text context of the element and all its childre.
        3. innerHTML :
                It returns the plain text with HTML contents in the element.
        4. textContent :
                It returns textual content even for hidden elements.


                        
