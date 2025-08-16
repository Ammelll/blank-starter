document.getElementById("add").addEventListener("click",addBook)
document.getElementById("remove").addEventListener("click",checkoutBook)
document.getElementById("update").addEventListener("click",editBook)
document.getElementById("read").addEventListener("click",viewBook)
document.getElementById("all").addEventListener("click",viewAll)
initLoad()
let all = true
function addBook(){
    title = document.getElementById("titleField").value
    author = document.getElementById("authorField").value
    pages = document.getElementById("pageField").value
    localStorage.setItem(title,JSON.stringify(
        {
            title:title,
            author:author,
            pages:pages,
        }
    ))
}
function viewAll(){
    if(all){
        all = false; 
    document.getElementById("all").style.color = "green"

    }
    else{
        document.getElementById("all").style.color = "red"
        Array.from(document.getElementsByClassName("temp")).forEach(element => {
            console.log(element)
            element.parentNode.removeChild(element)
        });
        all = true
        return
        }
    for (var i = 0; i < localStorage.length; i++){
        book = localStorage.getItem(localStorage.key(i))
        const title = document.createElement("p");
        const author = document.createElement("p");
        const pages = document.createElement("p");
        title.setAttribute("class","temp")
        author.setAttribute("class","temp")
        pages.setAttribute("class","temp")

        p = JSON.parse(book);
        title.innerText = p.title
        author.innerText = p.author
        pages.innerText = p.pages
        document.body.appendChild(title);
        document.body.appendChild(author);
        document.body.appendChild(pages);
    }
}
function viewBook(){
    title = document.getElementById("titleField").value
    book = JSON.parse(localStorage.getItem(title))
    console.log(book)
    displayBook(book)
}
function checkoutBook(){
    title = document.getElementById("titleField").value
    viewBook(title)
    localStorage.removeItem(title)
}
function editBook(){
    title = document.getElementById("titleField").value
    localStorage.removeItem(title)
    addBook(title)
}
function displayBook(book){
    document.getElementById("title").innerHTML = book.title;
    document.getElementById("author").innerHTML = book.author;
    document.getElementById("pages").innerHTML = book.pages
}
function initLoad(){
    let array = [
  {
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "pages": 281
  },
  {
    "title": "1984",
    "author": "George Orwell",
    "pages": 328
  },
  {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "pages": 180
  },
  {
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "pages": 279
  },
  {
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "pages": 214
  },
  {
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "pages": 310
  },
  {
    "title": "Fahrenheit 451",
    "author": "Ray Bradbury",
    "pages": 194
  },
  {
    "title": "Brave New World",
    "author": "Aldous Huxley",
    "pages": 268
  },
  {
    "title": "Moby Dick",
    "author": "Herman Melville",
    "pages": 635
  },
  {
    "title": "The Alchemist",
    "author": "Paulo Coelho",
    "pages": 208
  }
]
array.forEach(element => {
    localStorage.setItem(element.title,JSON.stringify(element))
});
}

