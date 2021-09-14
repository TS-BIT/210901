import React from "react";
//import Mygtukas from './Mygtukas';
import ChangeColorButton from './ChangeColorButton';
import ChangeColorButt from './ChangeColorButt';

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

  render() {
    return (
      <div className="circle" style={{ backgroundColor: this.state.bg }}>
        <ChangeColorButton clickToChangeColor={this.changeColor}></ChangeColorButton>
        <ChangeColorButt clickToChangeColor={this.changeColor}></ChangeColorButt>
      </div>
    );
  }
}

export default App;
