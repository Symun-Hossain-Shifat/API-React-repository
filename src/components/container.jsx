import React, { use, useState } from 'react';
import Country from './country';


const Container = ({datapromise}) => {
    const datas = use(datapromise)
    const data = datas.countries;
    const [visited,setVisited] = useState([])
    function visitedcount (data) {
        
        setVisited([...visited,data])
        console.log(visited.length)
    }
    return (
        <>
        <h2>Country List :{data.length} </h2>
        <h4>Visited Count :{visited.length} </h4>
        <ol>
           {
            visited.map( country => <li>{country.name.official}</li>)
           } 
        </ol>
        <div className='container'>
            {
                data.map( Data => <Country visitedcount={visitedcount} Data = {Data}></Country>)
            }
        </div>
            
        </>
    );
};

export default Container;