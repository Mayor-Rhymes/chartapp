import React from 'react';


const TotalRender = () => {
    return ( 


        <div className="total-section">
           

           <section className="section-column black">

             <p>Total this month</p>

             <p style={{ color:  'hsl(25, 47%, 15%)', fontWeight: 700 }}>$478.33</p>

           </section>

           <section>

               <p style={{ textAlign: 'right' }}>+2.4%</p>
               <p style={{ color: 'grey' }}>from last month</p>
           </section>


        </div>
     );
}
 
export default TotalRender;