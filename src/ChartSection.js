import React from 'react';
import BarItem from './BarItem';
import chartData from './data';
import TotalRender from './TotalRender';
import ItemName from './ItemName';

const ChartSection = () => {
 const checker = () => {

    let max = 0;
    //let newObject;
    for(let i = 0; i < chartData.length; i++){

        if(chartData[i].amount > max){

            max = chartData[i].amount;
            //newObject = chartData[i];
        }
    }

    return max;

 }
 return(

    
    
    <div className="chart-section">

         <p className="chart-title">
           Spending - Last 7 days
         </p>

         <div className="bar-chart">
           
           {/* {chartData.map(item => 
              
               
             <BarItem key={item.day} heightCalc={item.amount} name={item.day}/>
            )} */}


            {chartData.map(item => {

                if(item.amount === checker()){
                    return <BarItem key={item.day} heightCalc={item.amount} name={item.day} backgroundColor = {"hsl(186, 34%, 60%)"}/>

                }

                else{


                    return  <BarItem key={item.day} heightCalc={item.amount} name={item.day}/>
                }
            }
                
                
            )}


           

           
            
         </div>

         <div className="names-list">

         {chartData.map(item => 
              
               
              <ItemName key={item.day} name={item.day}/>
             )}

         
        </div>
         

         <p className="liner"></p>

         <TotalRender />

    </div>
 )


}


export default ChartSection;