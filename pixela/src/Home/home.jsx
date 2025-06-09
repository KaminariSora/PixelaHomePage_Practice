import './body.css'
import { Link } from "react-router-dom";
import Header from '../Components/header';
import Footer from '../Components/footer';


const Home = () => {
    return (
        <div className='wrap'>
            <Header/>
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
                        <img src='./Images/X.png' alt='X'></img>
                        <h6 className='mitr-regular'>ติดตามข่าวสารได้ที่ (Twitter) หลัก Pixela</h6>
                        <a href='https://x.com/PixelaProject' target="_blank" className='quicksand'>@PixelaProject</a>
                    </div>
                    <div className="box" id='box-3'>
                        <div className='image-wrapper'>
                            <img src='./Images/Debirun_1.jpg'></img>
                        </div>
                        <h6 className='mitr-regular'>รูปภาพโฆษณาสินค้า</h6>
                        <Link to="/Market" className='mitr-regular'>ไปหน้าร้านค้า &gt;</Link>
                    </div>
                    <div className="box" id='box-4'>
                        <div className='image-wrapper'>
                            <img src='./Images/Debirun_2.jpg'></img>
                        </div>
                        <h6 className='mitr-regular'>รูปภาพโฆษณาสินค้า</h6>
                        <Link to="/Market" className='mitr-regular'>ไปหน้าร้านค้า &gt;</Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home