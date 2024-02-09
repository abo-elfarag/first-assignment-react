import React, { Component } from 'react'

export default class About extends Component {
render() {
    return (
        <div>
            <section className='bg-info py-5 text-white text-center' style={{padding:'100px'}}>
                    <div className="container py-5">
                    <h2 className='mb-3 fs-1 pt-5'>ABOUT COMPONENT</h2>
                    <div className='d-flex justify-content-center align-items-center mb-3'>
                        <div style={{width: '80px',height: '4px',backgroundColor: 'white',marginRight: '20px'}}></div>
                        <div><i class="fa-solid fa-star"></i></div>
                        <div style={{width: '80px',height: '4px',backgroundColor: 'white',marginLeft: '20px'}}></div>
                    </div>
                    <div className='row pb-5'>
                        <div className='col-md-6'>
                            <div className='px-4 pb-5'>
                                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='px-4'>
                                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>
        </div>
    )
}
}
