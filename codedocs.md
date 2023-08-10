# fetch data
  # The keyword async before a function makes the function return a promise
   async function getBook(){   
   let response  = await fetch("http://127.0.0.1:5000/home")
    # wait the data from response and convert it as json by function .json()
   let books = await response.json() 
   # test the data in books in console to ready to display in page
   console.log(books)      
   for (let i=0 ; i<=books.BOOKS.length ; i++){
      // id => content the element of html will display the data inside here 
     document.getElementById("content").innerHTML += `<div id="content">  <h1>${books.BOOKS[i].book_name} </h1>  <p>${books.BOOKS[i].book_price} </p>     </div> `
                       // the data come as 2 array contain an array and the second array as a book have
                       // many feature as name , title , id , price , rate 
  }
}


# the code




![Fetch](https://github.com/tomasjr37/books/assets/64990413/62df30b9-1ff2-4b06-b8ba-2d521e1589bd)











# the result

![api data](https://github.com/tomasjr37/books/assets/64990413/aafed6de-b72b-43ed-8382-2204f94f628c)

