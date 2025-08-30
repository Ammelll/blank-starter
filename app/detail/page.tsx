'use client'

import { useSearchParams } from "next/navigation"

export default function BookDisplay(){
    const book = JSON.parse(localStorage.getItem(useSearchParams()?.get('id') ?? '') ?? '{}');
    return (<div>
    <div>Title: {book?.title}</div>
    <div>Author: {book?.author}</div>
    <p>Description: {book?.description}</p>
    </div>
    )
    }