import { Link } from "react-router-dom";
import Header from "../Components/header"
import Footer from "../Components/footer"
import "./company.css"

const Company = () => {
    return (
        <div>
            <Header />
            <div className="company-container">
                <div className="company-first-section">
                    <img src='./Images/Pixela.png' alt='Pixela'></img>
                    <h3 className="quicksand company-text">About Pixela</h3>
                    <br></br>
                </div>
                <div className="company-second-section">
                    <div className="company-left">
                        <h1 className="quicksand bold">What is Pixela</h1>
                        <br></br>
                        <h4 className='quicksand' id='description'>Pixela Official Co., Ltd. was founded in 2021 with the vision to make
                            virtual characters and virtual influencers (vtubers) that combine the cuteness, funniness
                            and talents with the easy to enjoy anime style avatar.</h4>
                        <br></br>
                        <h4 className='quicksand' id='description'>Right now, we have 29 Vtubers in our company with more than 1 million
                            followers in Thailand!</h4>
                    </div>
                    <div className="company-right">
                        <h1 className="quicksand bold">Our services</h1>
                        <br></br>
                        <li className="quicksand">Get consultation to create a Virtual YouTuber in the way you want.</li>
                        <li className="quicksand">Accepting the creation of unique and original songs.</li>
                        <br></br>
                        <Link to="/Contact" className="quicksand underline">Contact &gt;</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Company