import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import "../../css/instructors.css"
import arrowRight from "../../images/right-arrow.svg"
import arrowLeft from "../../images/left-arrow.svg"
import rosePic from "../../images/slide-1.jpg"
import jasminePic from "../../images/slide-2.jpg"
import rubyPic from "../../images/slide-3.jpg"
import king from "../../images/sds.png"
import king2 from "../../images/sds2.png"
import king3 from "../../images/sds3.png"

class Instructors extends React.Component {
    



    render() {
        
        


        return (
            <div>
                <section className="home">
                    <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-controls">
                            <ol className="carousel-indicators">
                                <li data-bs-target="#carousel" data-bs-slide-to="0"  className="active" style={{backgroundImage: `url(${king})`}} ></li>
                                <li data-bs-target="#carousel" data-bs-slide-to="1"  style={{backgroundImage: `url(${king2})`}} ></li>
                                <li data-bs-target="#carousel" data-bs-slide-to="2"  style={{backgroundImage: `url(${king3})`}} ></li>
                                <li data-bs-target="#carousel" data-bs-slide-to="3"  style={{backgroundImage: `url(${rubyPic})`}} ></li>

                            </ol>
                            <a className="carousel-control-prev" href="#carousel" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                                <img src={arrowLeft} alt="Prev"></img>
                            </a>
                            <a className="carousel-control-next" href="#carousel" type="button" data-bs-target="#carousel" data-bs-slide="next">
                                <img src={arrowRight} alt="Next"></img>
                            </a>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="5000" style={{backgroundImage:`url(${king})`}}>
                                <div className="container">
                                    <h2>I'm Doctor1</h2>
                                    <p>Web Developer</p>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="5000" style={{backgroundImage: `url(${king2})`}} >
                                <div className="container">
                                    <h2>I'm Doctor2</h2>
                                    <p>Web Developer</p>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="5000" style={{backgroundImage: `url(${king3})`}} >
                                <div className="container">
                                    <h2>I'm Doctor3</h2>
                                    <p>Web Developer</p>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="5000" style={{backgroundImage: `url(${rubyPic})`}} >
                                <div className="container">
                                    <h2>I'm Doctor4</h2>
                                    <p>Web Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
            </div>
            

        )




    }


}
export default Instructors