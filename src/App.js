import React from 'react';
import Scoreboard from './Components/Scoreboard';
import { Provider } from './Components/Context';

function App() {
  return (
      <Provider>
        <Scoreboard />
      </Provider>
  );
}

export default App;