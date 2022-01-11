import React from 'react'
import PackageContext from "./context" 
import Provider from "./Provider"


const Happy=()=>{
  return (
    <div>
      <h1>Happy</h1>
      <Sad />
    </div>
  )
}

const Sad=()=>{
  return (
    <div>
      <h1>Sad</h1>
      <Smile/>
    </div>
  )
}
const Smile=()=>{
  return (
      <PackageContext.Consumer>
      {
         (context) => (
            <div> 
                <h1> Acessing The values</h1>
                 <p> Name of Cricketer: {context.data.name}</p>
                 <p> Wife Name: {context.data.wifeName}</p>
                 <button onClick={context.addParameter}> Click to See Wife Name</button>
                 <p> He is from : {context.data.country}</p>
                 <p> His Highestet score is : {context.data.highestScore}</p>
                 <button onClick={context.updateHighestScore}> Update High Score</button>
                 <p> Number of Matches: {context.data.matches}</p>
                 
            </div>


         )
      
      }
      </PackageContext.Consumer>
  )
}








function App() {
  return (
    <Provider> 
       <Happy />
    </Provider>
  );
}

export default App;
