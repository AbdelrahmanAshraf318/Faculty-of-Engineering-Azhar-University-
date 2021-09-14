import React , {Component} from "react";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ComputerEngineering from "./components/computerEngineering/app";
import Main from './Main';


class App extends Component
{

  
  render(){
    return(
        <div>
          <Header/>

            <Main />
            
          <Footer/>
        </div>        

        
          
 

    )
  }
}

export default App;