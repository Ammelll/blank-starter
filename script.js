document.getElementById("push").addEventListener("click",push);
document.getElementById("pull").addEventListener("click",pull);

// function push(){
//     let value = document.getElementById("text").value
//     let object = {t: value}
//     localStorage.setItem("textField",JSON.stringify(object))
// }

// function pull(){
//     p = JSON.parse(localStorage.getItem("textField")).t;
//     document.getElementById("outputtext").innerHTML = p;
//     console.log(p)
// }
function addBook(){
    title = document.getElementById("titleFieldAdd").innerHTML
    author = document.getElementById("authorFieldAdd").innerHTML
    pages = document.getElementById("pagesFieldAdd").innerHTML
    localStorage.setItem(title,JSON.stringify(
        {
            title:title,
            author:author,
            pages:pages,
        }
    ))
}
function viewBook(title){
    book = JSON.parse(localStorage.getItem(title))
    displayBook(book)
}
function checkoutBook(title){
    viewBook(title)
    localStorage.removeItem(title)
}
function editBook(title){
    document.getElementById("authorField").hidden = false;
    document.getElementById("pagesField").hidden = false;
    document.getElementById("submitEdit").hidden = false;
}
function displayBook(book){
    document.getElementById("title").innerHTML = book.title;
    document.getElementById("author").innerHTML = book.author;
    document.getElementById("pages").innerHTML = book.pages
}


