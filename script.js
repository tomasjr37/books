   
   
   
   // function Getbook return book information from database
   async function getBook(){   // The keyword async before a function makes the function return a promise
   let response  = await fetch("http://127.0.0.1:5000/home") // get books data from api
      // "http://127.0.0.1:5000/home"  => url from rets api hava the books data 
      // await use with async to wait data from url and assign in varible (response)
      // when git data (response) have all the data   
   let books = await response.json()  // wait the data from response and convert it as json by function .json()
   console.log(books)      // test the data in books in console to ready to display in page
   
      //for loop to display all the data comes from api        
  for (let i=0 ; i<=books.BOOKS.length ; i++){
      // id => content the element of html will display the data inside here 
   document.getElementById("content").innerHTML += `<div id="content">  <h1>${books.BOOKS[i].book_name} </h1>  <p>${books.BOOKS[i].book_price} </p>     </div> `
                       // the data come as 2 array contain an array and the second array as a book have
                       // many feature as name , title , id , price , rate 
  }
}

getBook();  // to call the function