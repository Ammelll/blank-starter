document.getElementById("add").addEventListener("click",addBook)
document.getElementById("remove").addEventListener("click",checkoutBook)
document.getElementById("update").addEventListener("click",editBook)
document.getElementById("read").addEventListener("click",viewBook)
document.getElementById("all").addEventListener("click",viewAll)
let all = true
initLoad()
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
        const tds = document.querySelectorAll('td');
        tds.forEach(element => {
            element.parentNode.removeChild(element)
        });
        Array.from(document.getElementsByClassName("temp")).forEach(element => {
            element.parentNode.removeChild(element);
        });
        all = true
        return
        }
    let table = document.getElementById("display")
    for (var i = 0; i < localStorage.length; i++){
        book = localStorage.getItem(localStorage.key(i))
        tr = document.createElement("tr");
        tr.classList.add("temp");
        const title = document.createElement("td");
        const author = document.createElement("td");
        const pages = document.createElement("td");

        p = JSON.parse(book);
        title.innerText = p.title
        author.innerText = p.author
        pages.innerText = p.pages
        tr.append(title,author,pages);
        table.append(tr);
    }
}
function viewBook(){
    title = document.getElementById("titleField").value
    book = JSON.parse(localStorage.getItem(title))
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
    
data.forEach(element => {
    localStorage.setItem(element.title,JSON.stringify(element))
});
}

