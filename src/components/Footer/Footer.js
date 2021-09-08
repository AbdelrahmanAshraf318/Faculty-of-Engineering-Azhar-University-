import React , {Component}  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';

class Footer extends Component
{
    render(){
        return(
            <footer>
                <div className="footer">
                    <div className="container">
                        <div className="row"> 
                            
                            <div className="col-6 content-1">
                                <div className="text-center">
                                    <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                                    <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                                    <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                                    <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                                </div>
                            </div>

                            <div className="col-6 content-2">
                                <h5>اتصل بنا</h5>
                                <address>
                                البريد الالكتروني للكلية<br />
                                eng.b@azhar.edu.eg <br />
                                </address>
                            </div>

                        </div>
                        <div className="row row-2">             
                            <div className="copy col-auto">
                                <p>© Copyright 2021 by Al-Azhar Al-Sharif</p>
                            </div>
                        </div>
                    </div>
                </div>    
            </footer>
        )
    }
}

export default Footer;