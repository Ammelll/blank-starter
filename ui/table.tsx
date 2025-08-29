class Book {
    title!: string;
    author!: string;
}
export default function BookTable(){
    const books = {...localStorage};
    return (
    <div>
      {books?.map((book: Book) => (
        <p>Title: {book.title} Author: {book.author}</p>
      ))}
    </div>
    );
}