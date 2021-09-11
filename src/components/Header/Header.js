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
                            <div className="dropdown">
                                <button className="dropbtn">المركز الاعلامى</button>
                                <div className="menu dropdown-content">
                                    <a href="#">الاخبار</a>
                                    <a href="#">الفعاليات</a>
                                    <a href="#">الاعلانات</a>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                        <div className="dropdown">
                                <button className="dropbtn">الاداره</button>
                                <div className="menu dropdown-content">
                                    <a href="#">وكالة الكليه للدراسات العليا</a>
                                    <a href="#">وكالة الكليه لشئون الطلاب و التعليم</a>
                                    <a href="#">شئون الطلاب</a>
                                    <a href="#">البحث العلمى</a>
                                    <a href="#">وحدة الجوده</a>
                                    <a href="#">وحدة التدريب</a>
                                    <a href="#">خدمة المجتمع</a>
                                    <a href="#">وحدة التعلم الالكترونى</a>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item active">
                            <div className="dropdown">
                                <button className="dropbtn">الاقسام العلميه</button>
                                <div className="menu dropdown-content">
                                    <a href="#">هندسة النظم و الحاسبات</a>
                                    <a href="#">هندسة التخطيط العمرانى</a>
                                    <a href="#">الهندسه الكهربيه</a>
                                    <a href="#">هندسة التعدين والبترول</a>
                                    <a href="#">الهندسه الميكانيكيه</a>
                                    <a href="#">الهندسه المدنيه</a>
                                    <a href="#">قرارات مجلس الكليه</a>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item active">
                            <div className="dropdown">
                                <button className="dropbtn">عن الكليه</button>
                                <div className="menu dropdown-content">
                                    <a href="#">كلمة العميد</a>
                                    <a href="#">كلمة وكيل الكليه للدراسات العليا</a>
                                    <a href="#">كلمةوكيل شئون الطلاب والتعليم</a>
                                    <a href="#">الرؤيه والرساله والاهداف</a>
                                    <a href="#">الهيكل التنظيمى</a>
                                    <a href="#">دليل الكليه</a>
                                    <a href="#">قرارات مجلس الكليه</a>
                                </div>
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