import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import HomeImg from '../../imgs/avataaars.svg'


export default class Home extends Component {
render() {
    return (
        <div>
            <>
            
            <section className='bg-info d-flex justify-content-center align-items-center text-white' style={{padding:'120px'}}>
                <div className=''>
                    <div className='m-auto mb-5' style={{height:'180px',width:'200px'}}>
                        <img className='w-100 h-100' src={HomeImg} alt="photo" />
                    </div>
                    <h2 className='mb-3 fs-1'>START FRAMEWORK</h2> 
                    <div className='d-flex justify-content-center align-items-center mb-3'>
                        <div style={{width: '80px',height: '4px',backgroundColor: 'white',marginRight: '20px'}}></div>
                        <div><i class="fa-solid fa-star"></i></div>
                        <div style={{width: '80px',height: '4px',backgroundColor: 'white',marginLeft: '20px'}}></div>
                    </div>
                    <p className='text-center'>Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </section>
            <Footer/>
        </>
        </div>
    )
}
}
