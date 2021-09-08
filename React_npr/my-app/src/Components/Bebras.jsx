import React from 'react';

class Bebras extends React.Component {

    constructor() {
        super();
        this.state = {date: new Date()};
        //this.tick = this.tick.bind(this);
    }

    tick = () => {
        this.setState( {date: new Date()} );
    //tick() {this.setState( {date: new Date()} );
    }

    componentDidMount() {
        console.log('jau', this.props.bebras);
        
        // document.querySelector('.kvadratas')
        // addEventListner('click', this.tick);
        // console.log('KLYK');
       

        this.timerID = setInterval(this.tick, 1000);
        //this.timerID = setInterval(() => this.tick(), 1000);
    }


    componentWillUnmount() {
        clearInterval(this.timerID);
    }

 
    render() {
        return ( 
       <span>
            {this.props.bebras}
<hr/>
            {this.state.date.toLocaleTimeString()}
       </span>
    );
    }
}

// function Bebras(props) {
//     return ( 
//      <span>{props.bebras}</span>
//     );
// }


export default Bebras;