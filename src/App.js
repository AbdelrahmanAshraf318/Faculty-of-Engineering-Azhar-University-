import React , {Component} from "react";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SideShow from './components/SideShow/SideShow';
import './App.css'
import DeanWord from "./components/DeanWord/DeanWord";
import Ads from  "./components/Ads/Ads";


class App extends Component
{

  
  render(){
    return(
      <body>
      
        <header>
          <Header/>
        </header>

        <SideShow />

        <div className="parent">
            <div className="child-2">
              <Ads />
            </div>
            <div className="child-1">
              <h1>كلمة العمداء والوكلاء</h1>
              <DeanWord  />
            </div>
        </div>
        
        <footer>
          <Footer/>
        </footer>
      </body>   
    )
  }
}

export default App;