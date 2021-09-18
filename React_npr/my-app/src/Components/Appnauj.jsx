// import React from "react";
// import SmallCow from './SmallCow';
// import SmallRam from "./SmallRam";

// Reikia padaryti kad būtų du mygtukai. Vienas kuria apskritimus (karves), 
// kitas kuria keturkampius (avinus). Viskas viename masyve ir draugauja su localStorage

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = { 
//         animals: [],
//         cowInput: ''
//     };
//   }
/* 
addAnimal = (animal) => {
  const animal = {color: this.state.cowInput, animal: animal};
  const animals = this.state.animals.slice();
  animals.push(animal);
  this.setState({
    animals: animal
  })
  //console.log('iskart po irasymo:', this.state.cows);
  localStorage.setItem('allCows', JSON.stringify(animals));
}

deleteAnimal = (id) => {
  console.log(id);
  const animals = this.state.animals.slice();
  for (let i=0; i<animal.length; i++) {
    if (animals[i].id == id) {
      animals.splice(i, 1);
      break;
    }
  }
  this.setState({})

}

editAnimal = (id) => {
  console.log(id);
  const animals = this.state.animals.slice();
  for (let i=0; i<animal.length; i++) {
    if (animals[i].id == id) {
      animals.splice(i, 1);
      break;
    }
  }
  this.setState({})

}

cowInputHandler = (e) => {
  this.setState({
    animalInput: e.target.value
});
}

componentDidMount() {
  const animals = JSON.parse(localStorage.getItem('allAnimals'));
  if (null === animals) {
    return;       
  }
    this.setState({
        cows: cows
    })
}
*/
//   render() {

//     return (
//     <>
//   {/* {console.log('komponente:', this.state.cows)}; */}
//     {this.state.animals.map((b, i) => <SmallAnimal key={b.id} color={b.animal} animal={b.animal} />)},
//     <div>
//       <input type = "text" value={this.state.cowInput} onChange={this.cowInputHandler}/>
//       <button className="input-button" onClick={this.addCow}>Add Cowe</button>
//     </div>
//     <div>
//       <input type = "text" value={this.state.ramInput} onChange={this.ramInputHandler}/>
//       <button className="input-button" onClick={this.addRam}>Add Sheep</button>
//     </div>
//     </>
//     );
//   }
// }

//export default <Appnauj></Appnauj>;
