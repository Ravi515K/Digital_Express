
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Inspiration from './Pages/Inspiration';
import Landing from './Pages/Landing';
import Login from './Pages/Login';
import MarketingPlatform from './Pages/MarketingPlatform';
import Products from './Pages/Products';
import Resources from './Pages/Resources';
import SignUp from './Pages/SignUp';
import Transaction from './Pages/Transaction';
import Websites from './Pages/Websites';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <AllRoutes />
        {/* <Navbar/> */}
       {/* <Landing/>  */}
       {/* <SignUp/> */}
       {/* <Login /> */}
       {/* <Footer /> */}
       {/* <Products /> */}
       {/* <Resources /> */}
       {/* <Inspiration /> */}
       {/* <MarketingPlatform /> */}
       {/* <Websites/> */}
       {/* <Transaction /> */}
    </div>
  );
}

export default App;
