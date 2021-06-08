import React from 'react';


const ErrorExample = () => {
  let title= 'Random title'

  const handleClick = ()=> {
    title= 'Change Title'
    console.log(title);
    
  }
  return (
    <React.Fragment>
    <h2>{title}</h2>
    <button type="button" className='btn' onClick={handleClick}>Change text</button>
    
    </React.Fragment>
  )
};

export default ErrorExample;
