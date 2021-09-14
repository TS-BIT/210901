import React from "react";
//import Mygtukas from './Mygtukas';
import ChangeColorButton from './ChangeColorButton';
import ChangeColorButt1 from './ChangeColorButt1';
import ChangeColorButt2 from './ChangeColorButt2';
import ChangeColorButt3 from './ChangeColorButt3';

//const data = [['Spausk', 1], ['Spaudinėk', 10], ['Klikink', 100]];

class App extends React.Component {
  constructor() {
    super();
    this.state = { bg: "palegreen" };
  }

  changeColor = () => {
    // this.setState({
    //    bg: 'orangered',
    // });
    this.setState((state) => {
      let color;
      if (state.bg == "palegreen") {
        color = "orangered";
      } else if (state.bg == "orangered") {
        color = "palegreen";
      }
      return { bg: color };
    });
  };
/*
  this.setState((state) => {
    let color;
    if (state.bg == "palegreen") {
      color = "orangered";
    } else if (state.bg == "orangered") {
      color = "palegreen";
    }
    return { bg: color };
  });
};
*/


  render() {

    return (
      <div className="circle" style={{ backgroundColor: this.state.bg }}>
        <ChangeColorButton clickToChangeColor={this.changeColor}></ChangeColorButton>
        <ChangeColorButt1 clickToChangeColor={this.changeColor}></ChangeColorButt1>
        <ChangeColorButt2 clickToChangeColor={this.changeColor}></ChangeColorButt2>
        <ChangeColorButt3 clickToChangeColor={this.changeColor}></ChangeColorButt3>
      </div>
    );
  }
}

export default App;
