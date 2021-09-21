import React from "react";
class SmallAnimal extends React.Component {

    constructor(props) {
      super(props);
      this.state = { 
          editcolorInput: '',
          editfarmInput: ''
        };
    }

    editcolorInputHandler = (e) => {
        this.setState({
            editcolorInput: e.target.value,
        });
      }

      editfarmInputHandler = (e) => {
        this.setState({
            editfarmInput: e.target.value
        });
      }


    render() {     
    return (<div className="small-circle" style={{
        backgroundColor: this.props.color,
        borderRadius: this.props.animal == 'cow' ? '50%' : '5px'    
    }}>
        <span>{this.props.color} {this.props.farm}</span>
        <button className="input-button-small" onClick={()=>this.props.delete(this.props.id)}>Go Home</button>
        <div className="center">
            <input type = "text" value={this.state.editcolorInput} onChange={this.editcolorInputHandler}/>
            <button className="input-button-small" onClick={()=>this.props.edit(this.props.id, this.state.editcolorInput)}>Edit Color</button>
        </div>
        <div>   
            <input type = "text" value={this.state.editfarmInput} onChange={this.editfarmInputHandler}/>
            <button className="input-button-small" onClick={()=>this.props.edit(this.props.id, this.state.editfarmInput)}>Edit Farm </button>         
        </div>   
    </div>);
    }
}

export default SmallAnimal;