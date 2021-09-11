import React from 'react';

class Mygtukas extends React.Component {

    constructor() {
        super();
        this.state = {counter: 0};
        //this.tick = this.tick.bind(this);
        //wrong
        // this.setState({
        //     counter: this.state.counter + this.props.increment,
        //   });
        
        //Correct
        this.setState(state, props) => ({counter: state.counter + props}));

    }

    activateLasers(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log(`Lazeriai ${this.props.tekstas} aktyvuoti`);
    }

    valio(e) {
        console.log(`activateLasers(e) {
            console.log(`Valio ${this.props.tekstas} aktyvuoti`);;
        
    }



    componentDidMount() {
         
        // document.querySelector('#root').
        // addEventListner('click', e => {
        //     console.log('Valio');
        // })
        

        // this.timerID = setInterval(this.tick, 1000);
        //this.timerID = setInterval(() => this.tick(), 1000);
    }


    componentWillUnmount() {
    }

 
    render() {
        return ( 
       <button>
            <div onClick={(e) => this.valio(e)>
            <a href="" className="container" onClick={(e) => this.activateLasers(e)}>
                <div className="submit-feetback">{this.props.tekstas}</div>
            </a>
            <CountDisplay digit={this.state.counter}></CountDisplay>
            </div>

       </button>
    );
    }
}





// function Bebras(props) {
//     return ( 
//      <span>{props.bebras}</span>
//     );
// }


export default Mygtukas;