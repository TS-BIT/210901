import React from "react";
//import Mygtukas from './Mygtukas';
import ChangeColorButton from './ChangeColorButton';
// import ChangeColorButt1 from './ChangeColorButt1';
// import ChangeColorButt2 from './ChangeColorButt2';
// import ChangeColorButt3 from './ChangeColorButt3';

//const data = [['Spausk', 1], ['Spaudinėk', 10], ['Klikink', 100]];

class App extends React.Component {
  constructor() {
    super();
    this.state = { 
        bg: "palegreen",
        in: "AAA"
    };
  }

  changeColorP = () => {
    this.setState ({
      bg:  "palegreen",
      });
 };

 changeColorO = () => {
    this.setState ({
      bg:  "orangered",
      });
 };

changeColorG = () => {
    this.setState ({
      bg:  "greenyellow",
      });
 };

 changeColor = (color) => {
    this.setState ({
      bg:  color,
      in: color
      });
 };

 inChange = (e) => {
    this.setState({
        in: e.target.value,
    });

 }

 doColor = () => {
     this.setState(state => ({bg: state.in}));
 }



  render() {

    return (
      <div className="circle" style={{backgroundColor: this.state.bg}}>
        <div></div>
        <ChangeColorButton regNumber={23} color={'palegreen'} clickToChangeColor={this.changeColorP}></ChangeColorButton>
        <ChangeColorButton regNumber={53} color={'orangered'} clickToChangeColor={this.changeColorO}></ChangeColorButton>
        <ChangeColorButton regNumber={77} color={'greenyellow'} clickToChangeColor={this.changeColorG}></ChangeColorButton>
        <input type = "text" value={this.state.in} onChange={this.}/>
        <input type = "text" value={this.state.in}/>
    </div>
    );
  }
}

export default App;
