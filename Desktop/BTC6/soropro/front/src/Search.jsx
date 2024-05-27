import { useEffect, useState } from "react"

export const Search =() => {
const [search, searchButton] = useState(true);
useEffect(()=> {
    fetch("/api/:")
})
    return (
        <button onClick={()=> searchButton(!search)}>検索</button>
    )
}