import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./instructors.css"
import arrowRight from "../images/right-arrow.svg"
import arrowLeft from "../images/left-arrow.svg"
import rosePic from "../images/slide-1.jpg"
import jasminePic from "../images/slide-2.jpg"
import rubyPic from "../images/slide-3.jpg"
import king from "../images/sds.png"


class Instructors extends Component {
    render() {
        return (
            <div>
                <section className="home">
                    <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-controls">
                            <ol className="carousel-indicators">
                                <li data-bs-target="#carousel" data-bs-slide-to="0"  className="active" style={{backgroundImage: `url(${king})`}} ></li>
                                <li data-bs-target="#carousel" data-bs-slide-to="1"  style={{backgroundImage: `url(${king})`}} ></li>
                                <li data-bs-target="#carousel" data-bs-slide-to="2"  style={{backgroundImage: `url(${king})`}} ></li>

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
                                    <h2>I'm Rose</h2>
                                    <p>Web Developer</p>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="5000" style={{backgroundImage: `url(${king})`}} >
                                <div className="container">
                                    <h2>I'm Jasmine</h2>
                                    <p>Web Developer</p>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="5000" style={{backgroundImage: `url(${king})`}} >
                                <div className="container">
                                    <h2>I'm Ruby</h2>
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