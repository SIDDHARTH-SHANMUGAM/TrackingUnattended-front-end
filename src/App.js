import { BrowserRouter as Router ,Routes , Route } from 'react-router-dom';
import Login  from './component/Login';
import styled from 'styled-components';
import Signup from './component/Signup';
import Home from './component/Home';

function App() {
  return (
      <Router >
        <Container>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/signup' element={<Signup/>} />
            </Routes>

        </Container>
      </Router>

  );
}

const Container = styled.div``;

export default App;
