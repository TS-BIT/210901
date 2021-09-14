import React from 'react';

class ChangeColorButton extends React.Component {

    
    render() {
        return ( 
//<button className="container" onClick={this.props.color}>Jaaa!</button>  
            <button className="container" onClick={() => this.props.clickToChangeColor(this.props.color)}>Jaaa!</button>  
            {this.props.color}
            <Reg regNumber={}
            
            );
    }

}


export default ChangeColorButton;