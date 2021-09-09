import Bebras from './Bebras';
//import Trains from './Datand1';

function Kvadratas(props) {
    if ('Brigadininkas' === props.bebras) {
    return ( 
    <div className="kvadratas br">
    <b><Bebras bebras={props.bebras}/></b>
    </div>
    );
}
return (
    <div className="kvadratas">
    <Bebras bebras={props.bebras}/>
    </div>
    );
}   
export default Kvadratas;