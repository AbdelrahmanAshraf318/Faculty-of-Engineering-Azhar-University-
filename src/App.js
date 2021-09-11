import React , {Component} from "react";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SideShow from './components/SideShow/SideShow';
import './App.css'

class App extends Component
{

  
  render(){
    return(
      <body>
      
        <header>
          <Header/>
        </header>

        <SideShow />
        
        <footer>
          <Footer/>
        </footer>
      </body>   
    )
  }
}

export default App;