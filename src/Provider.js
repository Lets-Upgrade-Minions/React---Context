import React, {useState} from "react" 
import PackageContext from "./context"

const Provider = (props)=>{
     const [cricketer, setCricketer] = useState(
         {
                name: "Virat Kohli",
                country: "India",
                matches: "100",
                highestScore: "150",
         }
     )
     return(
     <PackageContext.Provider
      value ={
          {
              data: cricketer,
              updateHighestScore: () =>{setCricketer({...cricketer, highestScore: 180})}
          }
      } 
     > 
     {props.children}
     </PackageContext.Provider>
     )


}

export default Provider