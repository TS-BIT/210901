import Mygtukas from './Mygtukas';

const data = [['Spausk', 1], ['Spaudinėk', 10], ['Klikink', 100]];


function App(props) {
    return (<>
        {data.map((b, i) => <Mygtukas key={i} tekstas={b[0]} amount={b[1]} />)}
{/* {data.map((b, i) => <Trains key={t} ={b} />)} */}
    </>);

}

export default App;