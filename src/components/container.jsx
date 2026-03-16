import React, { use } from 'react';
import Country from './country';

const Container = ({datapromise}) => {
    const datas = use(datapromise)
    const data = datas.countries;
    return (
        <>
        <h2>Country List : </h2>\
        <div className='container'>
            {
                data.map( Data => <Country Data = {Data}></Country>)
            }
        </div>
            
        </>
    );
};

export default Container;