import Header from "../Components/header"
import Footer from "../Components/footer"
import ItemList from "./itemList"
import './market.css'

const Market = () => {
    return (
        <div className="market-body">
            <Header/>
            <div className="market-container">
                <h1 className="mitr-regular" id="market-heading">สินค้าทั้งหมด</h1>
                <div className="market-list">
                    <ItemList src="./Images/Debirun_1.jpg" text="Debirun 1st Anniversary" price="100.00"/>
                    <ItemList src="./Images/Debirun_2.jpg" text="Debirun 1st Anniversary" price="100.00"/>
                    <ItemList src="./Images/Debirun_2.jpg" text="Debirun 1st Anniversary" price="100.00"/>
                    <ItemList src="./Images/Debirun_2.jpg" text="Debirun 1st Anniversary" price="100.00"/>
                    <ItemList src="./Images/Debirun_2.jpg" text="Debirun 1st Anniversary" price="100.00"/>
                    <ItemList src="./Images/Debirun_2.jpg" text="Debirun 1st Anniversary" price="100.00"/>
                    <ItemList src="./Images/Debirun_2.jpg" text="Debirun 1st Anniversary" price="100.00"/>
                    <ItemList src="./Images/Debirun_2.jpg" text="Debirun 1st Anniversary" price="100.00"/>
                    <ItemList src="./Images/Debirun_2.jpg" text="Debirun 1st Anniversary" price="100.00"/>
                    <ItemList src="./Images/Debirun_2.jpg" text="Debirun 1st Anniversary" price="100.00"/>
                    <ItemList src="./Images/Debirun_2.jpg" text="Debirun 1st Anniversary" price="100.00"/>
                    <ItemList src="./Images/Debirun_2.jpg" text="Debirun 1st Anniversary" price="100.00"/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Market