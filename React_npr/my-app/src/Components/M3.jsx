import React from "react";


class M3 extends React.Component {
    constructor() {
      super();
      this.state = {x: 3};
    }
  
// const [x, set3X] = useState(3);
// const x = 3
// const set3X = set 3X


// const [y, setChangeY] = useState(3);  
// f setState = f set3X

// set3X = () => {
//     return x + 3;
// }


do3 = () => {
    localStorage.setItem('xxx', this)

}



componentDidMount() {
    const x = localStorage.getItem('xxx');
    if (null === x) {
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
  