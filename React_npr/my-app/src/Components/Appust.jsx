import React, {useState, useEffect} from 'react';
import SmallAnimal from './smallAnimalF';
import getId from '../Shared/id';
function App() {

    const [animals, setAnimals] = useState([]);
    const [cowInput, setCowInput] = useState('');

    useEffect(() => {
        console.log('animals changed');
    }, [animals]);

    useEffect(() => {
        console.log('cowInput changed');
    }, [cowInput]);

    useEffect(() => {
        console.log('something changed');
    }, [cowInput, animals]);

    const addAnimal = (a) => {
        const animal = {id: getId(), color: cowInput, animal: a};
        const animalsCopy = animals.slice();
        animalsCopy.push(animal);
        setAnimals(animalsCopy);
        // localStorage.setItem('allAnimals', JSON.stringify(animals));
    }

    const deleteAnimal = (id) => {
        const animalsCopy = animals.slice();
        for (let i=0; i<animalsCopy.length; i++) {
            if (animalsCopy[i].id == id) {
                animalsCopy.splice(i, 1);
                break;
            }
        }
        setAnimals(animalsCopy);
        // localStorage.setItem('allAnimals', JSON.stringify(animals));
    }

    const editAnimal = (id, color) => {
        const animalsCopy = animals.slice();
        for (let i=0; i<animalsCopy.length; i++) {
            if (animalsCopy[i].id == id) {
                animalsCopy[i].color = color;
                break;
            }
        }
        setAnimals(animalsCopy);
        // localStorage.setItem('allAnimals', JSON.stringify(animals));
    }

    const cowInputHandler = (e) => {
        setCowInput(e.target.value);
    }

    // componentDidMount() {
    //     const animals = JSON.parse(localStorage.getItem('allAnimals'));
    //     if (null === animals) {
    //         return;
    //     }
    //     this.useState({
    //         animals: animals
    //     })
    // }

    return (
        <>
            {animals.map(b => <SmallAnimal key={b.id} delete={deleteAnimal} edit={editAnimal} id={b.id} color={b.color} animal={b.animal} />)}
            <div>
                <input type="text" value={cowInput} onChange={cowInputHandler}/>
                <button className="input-button" onClick={()=>addAnimal('cow')}>Add Cow</button>
                <button className="input-button" onClick={()=>addAnimal('sheep')}>Add Sheep</button>
            </div>
        </>
    );
    
}
    
export default App;

/*
    const changeFarm = (id) => {
        const animalsCopy = animals.slice();
        for (let i=0; i<animalsCopy.length; i++) {
            if (animalsCopy[i].id == id) {
                animalsCopy[i].farm1 = !animalsCopy[i].farm1;
                break;
            }
        }
        setAnimals(animalsCopy);
        localStorage.setItem('allAnimals', JSON.stringify(animalsCopy));
    }




    const cowInputHandler = (e) => {
        setCowInput(e.target.value);
    }

    // componentDidMount() {
    //     const animals = JSON.parse(localStorage.getItem('allAnimals'));
    //     if (null === animals) {
    //         return;
    //     }
    //     this.useState({
    //         animals: animals
    //     })
    // }

    return (
        <>
        <div className='field'>
            <div className='farm'>
                <h1> Farm No. 1</h1>
            {animals.map(b => <SmallAnimal farmNumber={1} key={b.id} delete={deleteAnimal} edit={editAnimal} id={b.id} color={b.color} animal={b.animal} change={changeFarm} />)}
            </div>
            <div className='farm'>
            <h1> Farm No. 2</h1>
            {animals.map(b => <SmallAnimal farmNumber={2} key={b.id} delete={deleteAnimal} edit={editAnimal} id={b.id} color={b.color} animal={b.animal} change={changeFarm} />)}
            </div>
            <div>
                <input type="text" value={cowInput} onChange={cowInputHandler}/>
                <button className="input-button" onClick={()=>addAnimal('cow')}>Add Cow</button>
                <button className="input-button" onClick={()=>addAnimal('sheep')}>Add Sheep</button>
            </div>
        </div>
        
        </>
    );
    
}
    
export default App;
*/