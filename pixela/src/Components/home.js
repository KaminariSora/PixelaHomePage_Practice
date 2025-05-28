import './navBar.css'
import './body.css'
import { useState, useEffect } from 'react';

const home = () => {
    return (
        <div className='wrap'>
            <header className='header'>
                <a href='/' className='logo'><img src='./Images/Pixela.png'></img></a>
                <nav className='navBar'>
                    <a href=''>Home</a>
                    <a href=''>Member</a>
                    <a href=''>Song</a>
                    <a href=''>Market</a>
                    <a href=''>Company</a>
                    <a href=''>Contact</a>
                </nav>
            </header>
            <div className='container'>
                <div className='innerContainer' id='container-1'>
                    <h1 id='text'>Pixela Project</h1>
                </div>
                <div className='innerContainer' id='container-2'>
                    <div className="box">
                        <h1>Pixela Project คือ?</h1>
                        <h6 id='description'>Pixela Official Co., Ltd. was founded in 2021 with the vision to make virtual characters and virtual influencers (vtubers) that combine the cuteness, funniness and talents with the easy to enjoy anime style avatar.</h6>
                        <h6 id='description'>Right now, we have 29 Vtubers in our company with more than 1 million followers in Thailand!</h6>
                    </div>
                    <div className="box" id='box-2'>
                        <img src='./Images/X.png'></img>
                        <h6>ติดตามข่าวสารได้ที่ (Twitter) หลัก Pixela</h6>
                        <a href='#'>@PixelaProject</a>
                    </div>
                    <div className="box">3</div>
                    <div className="box">4</div>
                </div>
                <div className='innerContainer' id='container-3'></div>
            </div>
        </div>
    )
}

export default home