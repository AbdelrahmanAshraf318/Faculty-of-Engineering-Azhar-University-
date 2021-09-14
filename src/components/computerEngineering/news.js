import React from 'react'
import picture from '../../images/4k-wallpaper-bay-bird-s-eye-view-1698618.jpg'
import '../../css/news.css'

class News extends React.Component {

    render() {

        return (


            <div>
                <div className="row" >
                    <div className="col-md-6" style={{position: 'relative', left:'400px'}}>
                        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="parent carousel-inner">
                                <h3 className="fw-bolder newsTitle">احدث الاخبار</h3>
                                <div className="parent-3 carousel-item active" data-bs-interval="5000">
                                    <img src={picture} className="d-block w-20 rounded mx-auto" alt="..."></img>
                                    <div className="parent-2 carousel-caption d-none d-md-block">
                                        <h5>First slide label</h5>
                                        <p className='textCaroasel'>Some representative placeholder content for the first slide.</p>
                                    </div>
                                </div>
                                <div className="parent-3 carousel-item" data-bs-interval="5000">
                                    <img src={picture} className="d-block w-20 rounded mx-auto" alt="..."></img>
                                    <div className="parent-2 carousel-caption d-none d-md-block">
                                        <h5>Second slide label</h5>
                                        <p>Some representative placeholder content for the second slide.</p>
                                    </div>
                                </div>
                                <div className="parent-3 carousel-item" data-bs-interval="5000">
                                    <img src={picture} className="d-block w-20 rounded mx-auto" alt="..."></img>
                                    <div className="parent-2 carousel-caption d-none d-md-block">
                                        <h5>Third slide label</h5>
                                        <p>Some representative placeholder content for the third slide.</p>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>





                
                <br></br>
            </div>



        )



    }





}

export default News