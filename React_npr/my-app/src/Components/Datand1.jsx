import Vaizdasnd1 from './Vaizdasnd1';

const data = [
    ['./nd1/img/01.jpg', 'Papa smurf cleans train.'],
    ['./nd1/img/02.jpg', 'X4449 on the route.' ],
    ['./nd1/img/03.jpg', 'Big black-red beast.' ],
    ['./nd1/img/04.jpg', 'Green arrow starts engine.' ],
    ['./nd1/img/05.jpg', 'Long way home.' ],
    ['./nd1/img/06.jpg', 'Montain Daytrip in Switzerland.' ],
    ['./nd1/img/07.jpg', 'Red Darf at work.' ],
    ['./nd1/img/08.jpg', 'Funny blue train on bridge.' ],
    ['./nd1/img/09.jpg', 'Still working in Alaska mine.' ],
    ['./nd1/img/10.jpg', 'Water and train- both green.' ],
    ['./nd1/img/011.jpg', 'Rainy day in nowhere.' ],
    ['./nd1/img/12.jpg', 'Star train waiting for passengers.' ],
];

function Datand1(props) {
    return (<>
        {data.map((b, i) => <Vaizdasnd1 key={i} tekstas={b[0]}/>)}
{/* {data.map((b, i) => <Trains key={t} ={b} />)} */}
    </>);

}

export default Datand1;
