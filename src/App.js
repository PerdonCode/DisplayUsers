import React, {useState} from 'react';
import Form from './components/form/form';
import ShowFormOutput from './components/showFormOutput/showFormOutput';


function App() {
  const [userInput, setUserInput] = useState(null);
  // get props and set it to userInput
  const useData = (userInput) => {
    setUserInput(userInput);
  }
  console.log("usedata", userInput);
  return (
    <div className='main'>
      <Form getData={useData}/>
      <ShowFormOutput data={userInput}/>
    </div>
  );
}

export default App;
