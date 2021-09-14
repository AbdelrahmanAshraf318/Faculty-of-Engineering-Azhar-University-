import React , {Component}  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img_avatar2 from '../images/img_avatar2.png';
import "./Login.css";

class Login extends Component
{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <form  method="post">
                    <div class="imgcontainer">
                        <img src={img_avatar2} alt="Avatar" class="avatar" />
                    </div>

                    <div class="container">
                        <label for="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required />

                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required />

                        <button type="submit">Login</button>
                        <label>
                        <input type="checkbox" checked="checked" name="remember" /> Remember me
                        </label>
                    </div>

                    <div class="container-2 container">
                        <button type="button" class="cancelbtn">Cancel</button>
                        <span class="psw">Forgot <a href="#">password?</a></span>
                    </div>
                </form>
            </div>
        )
    }
}   

export default Login;