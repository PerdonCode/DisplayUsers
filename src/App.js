import React, { useState } from 'react';
import Form from './components/form/form';
import ShowFormOutput from './components/showFormOutput/showFormOutput';
import Wrapper from './components/helpers/Wrapper';

function App() {
  const [userInput, setUserInput] = useState(null);
  
  const handleData = (data) => {
    setUserInput(data); 
  };

  return (
    <Wrapper>
      <Form getData={handleData} />
      <ShowFormOutput data={userInput} />
    </Wrapper>
  );
}

export default App;
