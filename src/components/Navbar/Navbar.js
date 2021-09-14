import React , {Component} from "react";
import './Navbar.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class Navbar extends Component
{
    render(){
        return(
            <div className="navbar">
                <div className="text-center">
                    <i className="fas fa-globe-europe"></i>
                    
                </div>
            </div>
        )
    }
}

export default Navbar;