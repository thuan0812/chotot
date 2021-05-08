// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Header from './components/Common/Header/index';
import Home from './components/Home/index';
import Footer from './components/Common/Footer/index';
import Signin from './containers/signin';
// import Signin from './components/SignIn';
import Signup from './components/SignUp/index';
import List from './components/ListItems/index';
import Details from './components/DetailsItem/index';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Route exact path="/" component={Home} />
          <Route exact path="/dangnhap" component={Signin} />
          <Route exact path="/dangky" component={Signup} />
          <Route exact path="/danhsach" component={List} />
          <Route exact path="/chitietsp" component={Details}/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
