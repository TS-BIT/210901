import React, { useState, useEffect } from 'react';

function Padariau() {
    const [x, set23X] = useState(23);
    // const [z, set7Z] = useState(7);
          
   useEffect(() => {
        console.log('La la');
    },[]);
   
    const m23 = () => {
        const newX = x + 23;
        set23X(newX);
    }

    // const do7 = () => {
    //     set7Z(z + 7);
    // }

    return (
        <>
    <button className="btn23" onClick={m23}>Padariau</button>
    {/* <button onClick={do7}>{z}Z</button> */}
    </>
    );
}
export default Padariau;
 