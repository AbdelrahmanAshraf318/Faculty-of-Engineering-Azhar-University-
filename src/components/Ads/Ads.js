import React , {Component}  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Ads.css';
import { Media } from 'reactstrap';

class Ads extends Component
{
    constructor(props){
       super(props);
       this.state = {
        advertisement: [
            {
              id: 0,
              date: '17 أغسطس 2021',
              description:'فتح باب التشعيب للفرق ذات الشعب 2021'                        },
           {
              id: 1,
              date: '14 أغسطس 2021',
              description:'فتح باب التظلمات 2021'                        },
           {
              id: 2,
              date: '30 يوليه 2021',
              description:'فيديو حفل يوم التميز العلمى بالكلية 7-2021'                        },
           {
              id: 3,
              date: '30 يوليه 2021',
              description:'تقرير إنجاز فترة تولي أد محمد عبدالعزيز عن فترة'                        }
           ],
        };     
    }

    render(){
        const menu = this.state.advertisement.map((dish) => {
            return (
              <div key={dish.id} className="col-12 mt-5">
                <Media tag="li">
                  <Media body className="box-content ml-5">
                    <a href="#"><p>{dish.description}</p></a>
                    <h6>{dish.date}</h6>
                  </Media>
                </Media>
              </div>
            );
        });
        
        return(
            <div className="container">
            <div className="row">
              <Media list>
                  {menu}
              </Media>
            </div>
          </div>
        );
    }
}

export default Ads;