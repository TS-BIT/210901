import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Knyga from './Knyga';
import Sort from './Sort';


function App() {

    const [books, setBooks] = useState([]);
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const bookCats =JSON.parse(localStorage.getItem('cats'));
        if (bookCats !)


        localStorage.setItem('allAnimals', JSON.stringify(animals));
    }, []);

    const vBookListui = (id) => {
        const bookListCopy = bookListCopy.slice();
        for (let i = 0; i < bookListCopy.length; i++) {
            if (id === bookListCopy[i].id) {
                bookListCopy[i].completed = !bookListCopy[i].completed;
                break;
            }
        }
        setBookList(bookListCopy);
        console.log(id);
    }
        return (<div className="BookList-container">
        {BookList.map((BookList)=>(<BookList key={BookList.id} data={BookList} sniuriukas={vBookListui}></BookList>))}
    </div>);
    }
    
export default App;