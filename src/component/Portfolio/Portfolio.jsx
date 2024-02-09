import React, { Component } from 'react'
import Img1 from '../../imgs/poert1.png'
import Img2 from '../../imgs/port2.png'
import Img3 from '../../imgs/port3.png'
import portfolioCSS from './Portfolio.module.css'

export default class Portfolio extends Component {


    sayHallo = (e) => {

        const imgSrc = e.target.parentNode.querySelector('img').getAttribute('src');

        const layerImg = document.querySelector('.layering img');
        layerImg.setAttribute('src', imgSrc);

        const layerDiv = document.querySelector('.layering');
        layerDiv.classList.remove('d-none');
        layerDiv.classList.add('d-flex');
        console.log(layerDiv)
    }

    close(){
        const layerDiv = document.querySelector('.layering');
        layerDiv.classList.remove('d-flex');
        layerDiv.classList.add('d-none');
    }


render() {
    return (
        <div>
            <section className=' text-center' style={{padding:'100px'}}>
                    <h2 className='fs-1 fw-bolder mb-3'>PORTFOLIO COMPONENT</h2>
                    <div className='d-flex justify-content-center align-items-center mb-3'>
                        <div style={{width: '80px',height: '4px',backgroundColor: '#2C3E50',marginRight: '20px'}}></div>
                        <div><i class="fa-solid fa-star"></i></div>
                        <div style={{width: '80px',height: '4px',backgroundColor: '#2C3E50',marginLeft: '20px'}}></div>
                    </div>
                    <div className="container">
                        <div className="row g-5">
                            <div className='col-md-4'>
                                <div className='rounded-3 overflow-hidden item position-relative' onClick={this.sayHallo}>
                                    <img className='w-100' src={Img1} alt="photo" />
                                    <div className={portfolioCSS.itemLayer}>
                                        <i class="fa-solid fa-plus text-white fs-1"></i>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='rounded-3 overflow-hidden item position-relative' onClick={this.sayHallo}>
                                    <img className='w-100' src={Img2} alt="photo" />
                                    <div className={portfolioCSS.itemLayer}>
                                        <i class="fa-solid fa-plus text-white fs-1"></i>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='rounded-3 overflow-hidden item position-relative' onClick={this.sayHallo}>
                                    <img className='w-100' src={Img3} alt="photo" />
                                    <div className={portfolioCSS.itemLayer}>
                                        <i class="fa-solid fa-plus text-white fs-1"></i>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='rounded-3 overflow-hidden item position-relative' onClick={this.sayHallo}>
                                    <img className='w-100' src={Img1} alt="photo" />
                                    <div className={portfolioCSS.itemLayer}>
                                        <i class="fa-solid fa-plus text-white fs-1"></i>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='rounded-3 overflow-hidden item position-relative' onClick={this.sayHallo}>
                                    <img className='w-100' src={Img2} alt="photo" />
                                    <div className={portfolioCSS.itemLayer}>
                                        <i class="fa-solid fa-plus text-white fs-1"></i>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='rounded-3 overflow-hidden item position-relative' onClick={this.sayHallo}>
                                    <img className='w-100' src={Img3} alt="photo" />
                                    <div className={portfolioCSS.itemLayer}>
                                        <i class="fa-solid fa-plus text-white fs-1"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>

            <div className="layering bg-info position-absolute top-0 start-0 end-0 bottom-0 bg-opacity-25 d-none align-items-center justify-content-center z-1" onClick={this.close}>
                <div className='w-50 d-flex align-items-center justify-content-center'>
                    <img className='w-75' src="" alt="model photo" />
                </div>
            </div>
        </div>
    )
}
}
