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
                            <a className="nav-link" href="#">أعضاء هيئة التدريس</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">مجلة الكليه</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">المؤتمر القادم</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">مجلدات المؤتمرات السابقه</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">عن مؤتمرات الكليه السابقه</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">مؤتمرات الكليه</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">خدمة المجتمع</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">وحدة التدريب</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">وحدة الجوده</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">البحث العلمى</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">شئون الدراسات العليا</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">شئون الطلاب و الخريجين</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">شئون الدراسه</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">الاقسام</a>
                        </li>
                        <li className="nav-item active">
                            <a className="navbar-brand about" href="#">عن الكليه</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
       )
    }
}

export default Header;