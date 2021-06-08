import React, { useState } from 'react';
//useState - func

//

const UseStateBasics = () => {
  // console.log(useState('Hello world'));
  // const value = useState(1)[0]
  // const handler = useState(1)[1]
  // console.log(value, handler);

  const [text, setText] = useState('random title')

  const handleClick =()=> {
    if(text === 'random title'){
      setText('hello World')
    }else{
      setText('random title')
    }
    
  }
  

  return (
    <React.Fragment>
    <h1>{text}</h1>
    <button className="btn" type="button" onClick={handleClick}>Change text</button>
    </React.Fragment>
  )
};

export default UseStateBasics;
