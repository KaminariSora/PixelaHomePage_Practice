import './navBar.css'
import './body.css'
import './footer.css'
import { useState, useEffect } from 'react';

const home = () => {
    return (
        <div className='wrap'>
            <header className='header'>
                <a href='/' className='logo'><img src='./Images/Pixela.png'></img></a>
                <nav className='navBar'>
                    <a href='' className='quicksand'>Home</a>
                    <a href='' className='quicksand'>Member</a>
                    <a href='' className='quicksand'>Song</a>
                    <a href='' className='quicksand'>Market</a>
                    <a href='' className='quicksand'>Company</a>
                    <a href='' className='quicksand'>Contact</a>
                </nav>
            </header>
            <div className='container'>
                <div className='video-wrapper' id='container-1'>
                    <video autoPlay muted loop playsInline className="background-video">
                        <source src="/Video/file.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className='innerContainer' id='container-2'>
                    <div className="box">
                        <h1 className='quicksand'>Pixela Project คือ?</h1>
                        <h6 className='quicksand' id='description'>Pixela Official Co., Ltd. was founded in 2021 with the vision to make 
                            virtual characters and virtual influencers (vtubers) that combine the cuteness, funniness 
                            and talents with the easy to enjoy anime style avatar.</h6>
                        <h6 className='quicksand' id='description'>Right now, we have 29 Vtubers in our company with more than 1 million 
                            followers in Thailand!</h6>
                    </div>
                    <div className="box" id='box-2'>
                        <img src='./Images/X.png'></img>
                        <h6>ติดตามข่าวสารได้ที่ (Twitter) หลัก Pixela</h6>
                        <a href='#'>@PixelaProject</a>
                    </div>
                    <div className="box" id='box-3'>
                        <div className='image-wrapper'>
                            <img src='./Images/Debirun_1.jpg'></img>
                        </div>
                        <h6 className='quicksand'>รูปภาพโฆษณาสินค้า</h6>
                        <a href='#' className='anonymous-pro-regular'>ไปหน้าร้านค้า &gt;</a>
                    </div>
                    <div className="box" id='box-4'>
                        <div className='image-wrapper'>
                            <img src='./Images/Debirun_2.jpg'></img>
                        </div>
                        <h6 className='quicksand'>รูปภาพโฆษณาสินค้า</h6>
                        <a href='#' className='anonymous-pro-regular'>ไปหน้าร้านค้า &gt;</a>
                    </div>
                </div>
                
            </div>
            <footer className='footer'>
                <div className='footer-container'>1</div>
                <div className='footer-container'>2</div>
                <div className='footer-container'>3</div>
            </footer>
        </div>
    )
}

export default home