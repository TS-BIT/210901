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
    {this.state.cows.map((b, i) => <SmallCow key={i} color={b.color} />)}
    <div>
      <input type = "text" value={this.state.cowInput} onChange={this.cowInputHandler}/>
      <button className="input-button" onClick={this.addCow}>Add Cowe</button>
    </div>
    </>
    );
  }
}

export default App;
