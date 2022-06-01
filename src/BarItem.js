import React from 'react';

const BarItem = ({heightCalc, backgroundColor}) => {

  return (


    <>
    <div style={{ height: `${3*heightCalc}px`, backgroundColor: `${backgroundColor}`}} className='bar-item'>
      
        
       
    
    </div>
    {/* <p>{name}</p> */}
    </>




  )

}

export default BarItem;

// transform: 'rotateY(180px)'