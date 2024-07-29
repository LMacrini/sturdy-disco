import React from 'react';

export default (props) => {
    console.log('Congrats, the setup is successful!');
    console.log('Props received are: ', props);
    console.log(props?.block.main.header.title || "Hello World");

    return <p className='text-lg text-gray-700 font-bold px-4 py-2 bg-gray-100'>{props?.block.main.header.title || "Hello World"}</p>;
};
