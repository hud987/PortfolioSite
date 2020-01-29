import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'reactstrap'

import Homepage from './components/Homepage'

function App() {

  useEffect(() => {
    document.body.style.background = 'linear-gradient(to right, #6600cc, #cc00cc)'
  }, []);
  
  return (
    <div>
      <Router>
        <Container>
          <Route path="/" exact component={Homepage}/>
        </Container>
      </Router>
    </div>
  );
}

export default App;