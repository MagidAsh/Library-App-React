import { useState } from "react"

// Constant
import {books as bookData} from "../constants/mockData"

// Component
import BookCard from "./BookCard";
import SideCard from "./SideCard";
import SearchBox from "./SearchBox";

// Style
import styles from "./Books.module.css";

function Books() {

    const [books , setBooks] = useState(bookData);
    const [liked , setLiked] = useState([]);
    const [search , setSearch] = useState([]);

    const handleLikedList = (book , status) => {
        if (status) {
            const newLikedList = liked.filter(item => item.id !== book.id )
            setLiked(newLikedList);
        } else {
            setLiked((liked) => [...liked , book]);
        }
    }

    const searchHandler = () => {
        if(search) {
            const newBooks = bookData.filter((book) => book.title.toLowerCase().includes(search))
            setBooks(newBooks)
        } else {
            setBooks(bookData)
        }
    }

  return (
    <>
        <SearchBox search={search} setSearch={setSearch} searchHandler={searchHandler}/>
        <div className={styles.container}>
            <div className={styles.cards}>
                {books.map(book => (
                    <BookCard key={book.id} data={book} handleLikedList={handleLikedList}/>
                ))}
            </div>
            {!!liked.length && (
                <div className={styles.favorite}>
                    <h4>Favorites</h4>
                    {liked.map((book) => <SideCard key={book.id} data={book}/>)}
                </div>
                )}
        </div>
    </>
  )
}

export default Books