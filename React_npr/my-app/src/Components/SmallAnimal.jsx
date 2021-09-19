function SmallAnimal(props) {
    return (<div className="small-circle" style={{
        backgroundColor: props.color,
        borderRadius: props.animal == 'cow' ? '50%' : '5px'    
    }}>
        <span>{props.color}</span>
        <button className="input-button-small" onClick={()=>props.delete(props.id)}>Go Home</button>
        </div>);
}

export default SmallAnimal;