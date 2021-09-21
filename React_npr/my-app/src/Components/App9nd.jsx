import React from "react";
import SmallAnimal from './SmallAnimal9nd';
import getId from "../Shared/id";

// Reikia padaryti kad būtų du mygtukai. Vienas kuria apskritimus (karves), 
// kitas kuria keturkampius (avinus). Viskas viename masyve ir draugauja su localStorage

// Reikia dviejų analogiškų fermų. Kiekvienas gyvulys fermoje turi turėti papildomą mygtuką - pereiti į kitą fermą

class App extends React.Component {
  constructor() {
    super();
    this.state = { 
        animals: [],
        cowInput: '',
        farmInput: ''
    };
  }

farm = ['farm1', 'farm2'];
 
addAnimal = (a) => {
  const animal = {id: getId(), color: this.state.cowInput, fermaName: this.state.cowInput, animal: a};
  const animals = this.state.animals.slice();
  animals.push(animal);
  this.setState({
    animals: animals
  })
  localStorage.setItem('allAnimals', JSON.stringify(animals));
}

deleteAnimal = (id) => {
  // const animal = {id: getId(), color: this.state.cowInput, animal: a};
  const animals = this.state.animals.slice();
  for(let i=0; i<animals.length; i++) {
    if(animals[i].id == id) {
        animals.splice(i, 1);
        break;
      }
  }
  this.setState({
      animals: animals
  });
  localStorage.setItem('allAnimals', JSON.stringify(animals));
}

editAnimal = (id, color, fermaName) => {
  // const animal = {id: getId(), color: this.state.cowInput, animal: a};
  const animals = this.state.animals.slice();
  for(let i=0; i<animals.length; i++) {
    if(animals[i].id == id) {
        animals[i].color = color;
        animals[i].fermaName = fermaName;
        break;
    }
  this.setState({
      animals: animals
  });
  localStorage.setItem('allAnimals', JSON.stringify(animals));
  }
}

cowInputHandler = (e) => {
  this.setState({
    cowInput: e.target.value
});
}

farmInputHandler = (e) => {
  this.setState({
    farmInput: e.target.value
});
}

componentDidMount() {
  const animals = JSON.parse(localStorage.getItem('allAnimals'));
  if (null === animals) {
    return;       
  }
    this.setState({
        animals: animals
    })
}

  render() {

    return (
    <>
      {this.state.animals.map(b => <SmallAnimal key={b.id} delete={this.deleteAnimal} edit={this.editAnimal} id={b.id} color={b.color} farm={b.farm} animal={b.animal} />)},
    <div>
      <input type = "text" value={this.state.cowInput} onChange={this.cowInputHandler}/>
      <input type = "text" value={this.state.farmInput} onChange={this.farmInputHandler}/>
      <button className="input-button" onClick={()=>this.addAnimal('cow')}>Add Cow</button>
      <button className="input-button" onClick={()=>this.addAnimal('sheep')}>Add Sheep</button>
    </div>
    </>
    );
  }
}

export default App;
