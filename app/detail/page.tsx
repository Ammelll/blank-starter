'use client'

import { useSearchParams } from "next/navigation"
import { useState } from "react";

export default function BookDisplay(){
    const book = JSON.parse(localStorage.getItem(useSearchParams()?.get('id') ?? '') ?? '{}');
    let button = <button onClick={addBook}>Add Book</button>;
    if(!book){button = <div></div>}
    console.log(book)

    return (<div>
    <div>Title: {book.title || <input></input>}</div>
    <div>Author: {book.author || <input></input>}</div>
    <p>Description: {book.description || <input></input>}</p>
    {button}
    </div>
    )
    }
function addBook(){

}