import React , {Component}  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import Azhar_logo from '../images/Azhar_logo.png';


class Header extends Component
{
    render(){
       return(
        <header className="jumbotron">
            <div className="logo">
                <a className="theLogo" href="#">
                    <img  src={Azhar_logo} alt="logo" />
                </a>
            </div>
           <nav className="navbar navbar-expand-lg">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                         <li className="nav-item">
                            <a className="nav-link" href="#">اتصل بنا</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">مؤتمر الكليه</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link about" href="#">مجلة الكليه</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">المركز الاعلامى</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">الاداره</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">الاقسام</a>
                        </li>
                        <li className="nav-item active">
                            <a className="navbar-brand about" href="#">عن الكليه</a>
                            <div className="menu">
                                <a href="#">كلمة العميد</a>
                                <a href="#">كلمة وكيل الكليه للدراسات العليا</a>
                                <a href="#">كلمةوكيل شئون الطلاب والتعليم</a>
                                <a href="#">الرؤيه والرساله والاهداف</a>
                                <a href="#">الهيكل التنظيمى</a>
                                <a href="#">دليل الكليه</a>
                                <a href="#">قرارات مجلس الكليه</a>
                            </div>
                        </li>
                        <li className="nav-item active">
                            <a href="#" className="navbar-brand about">الصفحه الرئيسيه</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
       )
    }
}

export default Header;