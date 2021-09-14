import React , {Component} from "react";
import './Register.css';

class Register extends Component
{
    render(){
        return(
            <form action="action_page.php">
                <div class="container">
                    <h1>Register</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr />

                    <label for="email"><b>User Name</b></label>
                    <input type="text" placeholder="Enter username" name="username" id="username" required />


                    <label for="email"><b>Display Name</b></label>
                    <input type="text" placeholder="Enter Display Name" name="disName" id="disName" required />

                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" id="email" required />

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" id="psw" required />

                    <label for="psw-repeat"><b>Repeat Password</b></label>
                    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required />
                    
                    
                    <hr />

                   
                    <button type="submit" class="registerbtn">Register</button>
                </div>

                <div class="container signin">
                    <p>Already have an account? <a href="#">Sign in</a>.</p>
                </div>
            </form>
        )
    }
}
export default Register;