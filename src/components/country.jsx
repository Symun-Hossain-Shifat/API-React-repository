import React, { useState } from 'react';

const Country = ({Data}) => {
    console.log(Data);
    const population = Data.population.population;
    const area = Data.area.area;
    const [value,setvalue] = useState(false)
    function showhide () {
     setvalue(value?false:true);
    }
    return (
        <div className={value?'visited':'notvisited'}>
            <h3>Name : {Data.name.official}</h3>
            <img src={Data.flags.flags.png} alt={Data.flags.flags.alt} />
            <h4> Population : {population} {population>4000000?'(Populated Country)':'(Perfect population)'}</h4>
            <h4> Area : {area}</h4>
            <button onClick = {showhide}>
                {
                    value?'visited':'Not visited'
                }
            </button>
        </div>
    );
};

export default Country;