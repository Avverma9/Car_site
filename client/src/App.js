import './App.css';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Header from './Components/Header/Header.jsx'
import SignIn from './Components/SignIn/SignIn.jsx';
import SignUp from './Components/SignUp/SignUp.jsx'
import Homepage from './Components/Homepage/Homepage.jsx';
import Carpage from './Components/Carpage/Carpage.jsx';
import Footer from './Components/Footer/Footer';
import CarHomepage from './Components/CarHomepage/CarHomepage.jsx'
import Buypage from './Components/BuyPage/BuyPage';
import Auction from './Components/Auction/Auction';
import CarCatalog from './Components/homeCarPage/CarCatalog';


function App() {
  return (
   <Router>
    <Header/>
  
    <Homepage/>

    <Carpage/>
    <Footer/>
    <Routes>
    <Route path='/' Component={CarHomepage}/>
    <Route path='/h'  Component={CarCatalog}/>
      <Route path='/signin' Component={SignIn}/>
      <Route path='/signup' Component={SignUp}/>
      <Route path='/buy' Component={Buypage}/>
      <Route path='/auction' Component={Auction}/>
   </Routes>
   </Router>
  );
}

export default App;
