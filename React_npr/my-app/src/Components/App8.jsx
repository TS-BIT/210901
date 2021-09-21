import React from "react";

// Sąlyga: Naujame App.jsx paleisti mygtuką 3X, kurį paspaudus jame atsirastų užrašas 6X, dar paspaudus 9X ... 12X ir t.t.
// Perkrovus puslapį turėtų rodyti seną rezultatą t.y. pvz 12X. Tam tikslui naudokite localstorage

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = { 
//         3X: []
        
//     };
//   }

fermaName = ['ferma1', 'ferma2'];
 
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
      {this.state.animals.map(b => <SmallAnimal key={b.id} delete={this.deleteAnimal} edit={this.editAnimal} id={b.id} color={b.color} fermaName={b.fermaName} animal={b.animal} />)},
    <div>
      <input type = "text" value={this.state.cowInput} onChange={this.cowInputHandler}/>
      <input type = "text" value={this.state.cowInput} onChange={this.cowInputHandler}/>
      <button className="input-button" onClick={()=>this.addAnimal('cow')}>Add Cow</button>
      <button className="input-button" onClick={()=>this.addAnimal('sheep')}>Add Sheep</button>
    </div>
    </>
    );
  }
}

export default App;
