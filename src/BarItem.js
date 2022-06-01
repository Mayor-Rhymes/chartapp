import React from 'react';

const BarItem = ({heightCalc, backgroundColor, amount}) => {

  return (


    <>
    <div className='bar-item' style={{ height: `${3*heightCalc}px`, backgroundColor: `${backgroundColor}`}} title={amount}>
      
        
       
    
    </div>
    {/* <p>{name}</p> */}
    </>




  )

}

export default BarItem;

// transform: 'rotateY(180px)'