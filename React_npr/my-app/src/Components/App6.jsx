import React from "react";
//import Mygtukas from './Mygtukas';
import ChangeColorButton from './ChangeColorButton';

//const data = [['Spausk', 1], ['Spaudinėk', 10], ['Klikink', 100]];
//Padaryti tris kontroliuojamus inputus du text tipo ir vienas checkbox. Vienas inputas turi keisti apskritimo spalvą, kitas 
//skersmenį ir trečias- kai pažymėtas turi pakeisti apskritimą į kvadratą

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      bg: 'palegreen',
      bgIn: '',
      size: 600,
      sizeIn: '',
      shapeSquare: false
      };
   
  }

 doColor = () => {
  this.setState(state => ({bg: state.bgIn}));
};

 inChangeColor = (e) => {
  this.setState({
    bgIn: e.target.value,
});
}

doColor = () => {
  this.setState(state => ({bg: state.bgIn}));
};

inChangeSize = (e) => {
  this.setState({
      sizeIn: e.target.value,
  });
}
doSize = () => {
  this.setState(state => ({size: state.sizeIn}));
}

inChangeShape = () => {
  //good
  this.setState(state => ({shapeSquare: (!state.shapeSquare)}));

  //wrong
  // this.setState({
  //     shapeSquare: (!this.state.shapeSquare),
  // });
}


  render() {

    return (
      <div className="circle" style={{
        backgroundColor: this.state.bg, 
        width: this.state.size+'px',
        height: this.state.size+'px',
        borderRadius: this.state.shapeSquare ? '0' : '50%'
        }}>       
      <div>
      <input type = "text" value={this.state.bgIn} onChange={this.inChangeColor}/>
        <button className="input-button" onClick={this.doColor}>Change Color</button>
      </div>
      <div>
      <input type = "text" value={this.state.sizeIn} onChange={this.inChangeSize}/>
        <button className="input-button" onClick={this.doSize}>Change Size</button>
      </div>
      <div>
      <input type="checkbox" onChange={this.inChangeShape} checked={this.state.shapeSquare}/>
      <label>Change Shape</label>
      </div>
    </div>
    );
  }
}

export default App;
