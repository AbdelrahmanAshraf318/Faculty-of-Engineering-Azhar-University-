import React , {Component} from "react";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css'

class App extends Component
{

  
  render(){
    return(
      <body>
      
        <header>
          <Header/>
      </header>

      <footer>
        <Footer/>
      </footer>
      </body>   
    )
  }
}

export default App;