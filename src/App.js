import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Header from './components/Common/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Common/Footer/Footer';
import Signin from './components/SignIn/Signin';
import Signup from './components/SignUp/Signup';
import List from './components/ListItems/List';
import Details from './components/DetailsItem/Details';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Route exact path="/" component={Home} />
          <Route exact path="/dangnhap" component={Signin} />
          <Route exact path="/dangky" component={Signup} />
          <Route exact path="/danhsach" component={List} />
          <Route exact path="/chitietsp" component={Details} />
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
