import Kvadratas from './Kvadratas';
//import Trains from './Datand1';

const data = ['Rudasis', 'Juodasis', 'Brigadininkas'];


function App(props) {
    return (<>
        {data.map((b, i) => <Kvadratas key={i} bebras={b} />)}
{/* {data.map((b, i) => <Trains key={t} ={b} />)} */}
    </>);

}

export default App;