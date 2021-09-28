import { useParams } from "react-router-dom";
import Todo from './Todo';
import UserLink from './UserLink';
import { useState } from 'react';
import { Route, Switch } from 'react-router';


function TodoLink() {

    const [animals, setAnimals] = useState(list);
    
    
        return (
            <div className="zoo">
                <h1> Welcome to the ZOO </h1>
                <Switch>
                    <Route path={'/:id'}>
                        <Animal></Animal>
                    </Route>
                    <Route path={'/'}>
                        <ul>
                        {animals.map(animal => <AnimalLink key={animal.id} animal={animal}/> )}
                        </ul>
                    </Route>
                </Switch>
            </div>
        )
    
    }
    
    export default Zoo