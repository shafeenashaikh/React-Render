import React from 'react';
import ChildData from './Child';

function ParentData(data){

   function ParentAlert(data){
       alert(data);
   }
    return(
        <div>
            <h2>Lifting State Up</h2>
            <ChildData alert={ParentAlert}/>
        </div>
    )
}
export default ParentData;