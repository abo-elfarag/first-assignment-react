import React, { Component } from 'react'

export default class Footer extends Component {
render() {
    return (
        <div style={{backgroundColor:'#2C3E50'}}>
            <div className="container">
            <div className='row text-white py-5' >
                <div className='col-md-4'>
                    <div className='w-100 d-flex flex-column justify-content-center align-items-center py-4'>
                        <p className='fs-3 fw-bolder mb-0'>LOCATION</p>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='w-100 d-flex flex-column justify-content-center align-items-center py-4'>
                        <p className='fs-3 fw-bolder mb-0'>AROUND THE WEB</p>
                        <div>
                            <div className='d-flex'>
                                <div className='border border-2 d-flex justify-content-center align-items-center me-2' style={{width:'40px',height:'40px',borderRadius:'50%'}}>
                                <i class="fa-brands fa-facebook-f"></i>
                                </div>
                                <div className='border border-2 d-flex justify-content-center align-items-center me-2' style={{width:'40px',height:'40px',borderRadius:'50%'}}>
                                <i class="fa-brands fa-twitter"></i>
                                </div>
                                <div className='border border-2 d-flex justify-content-center align-items-center me-2' style={{width:'40px',height:'40px',borderRadius:'50%'}}>
                                <i class="fa-brands fa-linkedin"></i>
                                </div>
                                <div className='border border-2 d-flex justify-content-center align-items-center me-2' style={{width:'40px',height:'40px',borderRadius:'50%'}}>
                                <i class="fa-solid fa-globe"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='w-100 d-flex flex-column justify-content-center align-items-center py-4 px-5 text-center'>
                        <p className='fs-3 fw-bolder mb-0'>ABOUT FREELANCER</p>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
            </div>
            </div>
            <div className='py-3 text-white text-center' style={{backgroundColor:'#1A252F'}}>
                <p>Copyright © Your Website 2021</p>
            </div>
        </div>
    )
}
}
