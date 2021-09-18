import React from "react";
import SmallCow from './SmallCow';
import SmallRam from "./SmallRam";

// Reikia padaryti kad būtų du mygtukai. Vienas kuria apskritimus (karves), 
// kitas kuria keturkampius (avinus). Viskas viename masyve ir draugauja su localStorage

class App extends React.Component {
  constructor() {
    super();
    this.state = { 
        cows: [],
        cowInput: '',
        rams: [],
        ramInput: '',
    };
  }
 
addCow = () => {
  const cow = {color: this.state.cowInput};
  const cows = this.state.cows.slice();
  cows.push(cow);
  this.setState({
    cows: cows
  })
  //console.log('iskart po irasymo:', this.state.cows);
  localStorage.setItem('allCows', JSON.stringify(cows));
}

cowInputHandler = (e) => {
  this.setState({
    cowInput: e.target.value
});
}

addRam = () => {
    const ram = {color: this.state.ramInput};
    const rams = this.state.rams.slice();
    rams.push(ram);
    this.setState({
      rams: rams
    })
    localStorage.setItem('allRams', JSON.stringify(rams));
  }
  
  cowInputHandler = (e) => {
    this.setState({
      ramInput: e.target.value
  });
  }




componentDidMount() {
  const cows = JSON.parse(localStorage.getItem('allCows'));
  if (null === cows) {
    return;       
  }
    this.setState({
        cows: cows
    })
}

  render() {

    return (
    <>
  {/* {console.log('komponente:', this.state.cows)}; */}
    {this.state.cows.map((b, i) => <SmallCow key={i} color={b.color} />)},
    {this.state.rams.map((b, i) => <SmallRam key={i} color={b.color} />)}
    <div>
      <input type = "text" value={this.state.cowInput} onChange={this.cowInputHandler}/>
      <button className="input-button" onClick={this.addCow}>Add Cowe</button>
    </div>
    <div>
      <input type = "text" value={this.state.ramInput} onChange={this.ramInputHandler}/>
      <button className="input-button" onClick={this.addRam}>Add Ram</button>
    </div>
    </>
    );
  }
}

export default App;
