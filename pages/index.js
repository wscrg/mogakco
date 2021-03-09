import React from 'react';
import EmoEx from '../components/EmoEx';
import CounterContainer from '../container/CounterContainer';
import TodosContainer from '../container/TodosContainer';

const App = () => {
  return (
    <div>
      <h1>Index page</h1>
      <EmoEx />
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
};

export default App;
