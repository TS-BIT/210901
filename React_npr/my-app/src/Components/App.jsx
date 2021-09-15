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
        bg: "yellow",
        in: "ND"
    };
    this.state1 = { 
        width: 600,
        height: 600,
        in: 600
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
    });
 };

 changeNumber = (number) => {
    this.setState1 ({
        width: 600,
        height: 600,
    });
 };

 inChange = (e) => {
    this.setState({
        in: e.target.value,
    });

 }
 inChange1 = (e) => {
    this.setState1({
        in: e.target.value,
    });

 }


 doColor = () => {
     this.setState(state => ({bg: state.in}));
 };

 doNumber = () => {
    this.setState1(state1 => ({width: state1.in}, {height: state1.in}));
};



  render() {

    return (
      <div className="circle" style={{backgroundColor: this.state.bg}}>       
        <input type = "text" value={this.state.in} onChange={this.inChange}/>
        <button className="input-button" onClick={this.doColor}>Change Color</button>
      </div>,
      <div className="circle" style={{width: this.state1.width}, {height: this.state1.height}}>       
      <input type = "number" value={this.state1.in} onChange={this.inChange1}/>
      <button className="input-button" onClick={this.doNumber}>Change Color</button>
    </div>
    );
  }
}

export default App;
