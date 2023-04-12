import { BrowserRouter as Router ,Routes , Route } from 'react-router-dom';
import Login  from './component/Login';
import styled from 'styled-components';
import Signup from './component/Signup';
import Home from './component/Home';
import Notification from './component/Notification';
import Profile from './component/Profile';
import Activity from './component/Activity';
import Add from './component/Add';
import Aboutus from './component/Aboutus';
import Details from './component/Details';

function App() {
  return (
      <Router >
        <Container>
            <Routes>
              <Route path='/' exact element={<Login/>} />
              <Route path='/home' exact element={<Home/>} />
              <Route path='/signUp' exact element={<Signup/>} />
              <Route path='/notification' exact element={<Notification/>} />
              <Route path='/profile' exact element={<Profile/>} />
              <Route path='/yourActivity' exact element={<Activity/>} />
              <Route path='/addCase' exact element={<Add/>} />
              <Route path='/aboutUs' exact element={<Aboutus/>} />
              <Route path='/detail' exact element={<Details/>} />
              
            </Routes>

        </Container>
      </Router>

  );
}

const Container = styled.div``;

export default App;
