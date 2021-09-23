import React, {useState, useEffect} from 'react';
import axios from 'axios';
import BookList from './BookList';

// Gražiais su CSS padaryti prekių sąrašą. Pridėti mygtuką pirkti.
// https://in3.dev/knygos/



function App() {

    const [BookList, setBookList] = useState([]);

    useEffect(()=>{
        console.log('Start');
        axios.get('https://in3.dev/knygos/')
        .then(function (response) {
            console.log(response.data);
            setBookList(response.data);
        })
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