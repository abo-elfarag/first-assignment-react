import React, { Component } from 'react'


export default class Contact extends Component {
render() {
    return (
        <div>
            <section className=' text-white text-center' style={{padding:'100px'}}>
                <h2 style={{color:'#2C3E50'}} className='fs-1 fw-bolder mb-3'>CONTACT SECTION</h2>
                <div className='d-flex justify-content-center align-items-center mb-5'>
                        <div style={{width: '80px',height: '4px',backgroundColor: '#2C3E50',marginRight: '20px'}}></div>
                        <div style={{color:'#2C3E50'}}><i class="fa-solid fa-star"></i></div>
                        <div style={{width: '80px',height: '4px',backgroundColor: '#2C3E50',marginLeft: '20px'}}></div>
                </div>
                <div className="container">
                <form className='w-50 m-auto'>
                    <label className=' text-start overflow-hidden ' style={{color:'#1ABC9C'}} htmlFor="userName">User Name :</label>
                    <input type="text" id='userName' placeholder='User Name' className='form-control border-0 border-bottom py-3 mb-4'/>
                    <label className='text-start' style={{color:'#1ABC9C'}} htmlFor="userAge">User Age :</label>
                    <input type="text" id='userAge' placeholder='User Age' className='form-control border-0 border-bottom py-3 mb-4'/>
                    <label className='text-start' style={{color:'#1ABC9C'}} htmlFor="userEmail">User Email :</label>
                    <input type="text" id='userEmail' placeholder='Use rEmail' className='form-control border-0 border-bottom py-3 mb-4'/>
                    <label className='text-start' style={{color:'#1ABC9C'}} htmlFor="userPassword">User Password :</label>
                    <input type="text" id='userPassword' placeholder='User Password' className='form-control border-0 border-bottom py-3 mb-4'/>
                    <button className='btn text-white ms-0' style={{backgroundColor:'#1ABC9C'}}>Send Massage</button>
                </form>
                </div>
            </section>
        </div>
    )
}
}
