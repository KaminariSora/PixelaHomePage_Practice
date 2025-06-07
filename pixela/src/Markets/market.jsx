import Header from "../Components/header"
import ItemList from "./itemList"
import './market.css'

const Market = () => {
    return (
        <div>
            <Header/>
            <div className="market-container">
                <h1 className="quicksand market-heading">สินค้าทั้งหมด</h1>
                <div className="market-list">
                    <ItemList/>
                    <ItemList/>
                    <ItemList/>
                    <ItemList/>
                    <ItemList/>
                    <ItemList/>
                    <ItemList/>
                    
                </div>
            </div>
        </div>
    )
}

export default Market