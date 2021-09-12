import React , {Component}  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DeanWord.css';
import dean from '../images/dean.jpg';

class DeanWord extends Component
{
    render(){
        return(
            <div className="dean">
                <div className="theImg">
                        <img src={dean} alt="Snow" />
                        <div class="bottom-left">كلمة الأستاذ عميد الكليه</div>
                </div>
                <div className="box">
                    <img src={dean} alt="Snow" />
                    <p>كلمة الأستاذ عميد الكليه</p>
                </div>
            </div>
        )
    }
}

export default DeanWord;