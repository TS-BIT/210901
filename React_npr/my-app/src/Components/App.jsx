import React from "react";
import SmallCow from './SmallCow';

class App extends React.Component {
  constructor() {
    super();
    this.state = { 
        cows: [],
        cowInput: '',
    };
  }
 
addCow = (e) => {
    const cow = {color: this.state.cowInput};
    const cows = this.state.cows.slice();
    cows.push(cow);
    this.setState({
        cows: cows
    })
    localStorage.setItem('allCows', JSON.stringify(cows));
}

cowInputHandler = (e) => {
    this.setState
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
      <div className="circle" style={{
        backgroundColor: this.state.bg, 
        width: this.state.size+'px',
        height: this.state.size+'px',
        borderRadius: this.state.shapeSquare ? '0' : '50%'
        }}>       
      <div>
      <input type = "text" value={this.state.bgIn} onChange={this.inChange}/>
        <button className="input-button" onClick={this.doColor}>Change Color</button>
      </div>
      <div>
      <input type = "text" value={this.state.sizeIn} onChange={this.inChange}/>
        <button className="input-button" onClick={this.doSize}>Change Size</button>
      </div>
      <div>
      <input type = "checkbox" value={this.state.bgIn} onChange={this.inChange}/>
        <button className="input-button" onClick={this.doColor}>Change Color</button>
      </div>

    </div>
    );
  }
}

export default App;
