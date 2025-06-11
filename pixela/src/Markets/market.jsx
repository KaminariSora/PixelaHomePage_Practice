import Header from "../Components/ui/header"
import Footer from "../Components/ui/footer"
import ItemList from "./itemList"
import './market.css'

const Market = () => {
    return (
        <div className="market-body">
            <Header />
            <div className="market-container">
                <h1 className="mitr-regular" id="market-heading">สินค้าทั้งหมด(แค่ตัวอย่างไม่ได้ขายจริง)</h1>
                <div className="market-list">
                    <ItemList src="./Market/Debirun_5.png" text="Debirun 1st Anniversary" price="142.00" />
                    <ItemList src="./Market/Debby.png" text="Debby" price="142.00" />
                    <ItemList src="./Market/Crying_Debirun.png" text="Debirun crying with Dustirion" price="142.00" />
                    <ItemList src="./Market/Debirun_4.png" text="Debirun in Goodnote6" price="142.00" />
                    <ItemList src="./Market/Debirun_identityV.png" text="Debirun in Identity V" price="142.00" />
                    <ItemList src="./Market/DebbyInMagma.png" text="Debby is real in Magma" price="142.00" />
                    <ItemList src="./Market/DebirunNight.png" text="Debirun with Sora monster" price="142.00" />
                    <ItemList src="./Market/Debirun_2.jpg" text="Debirun with sword" price="142.00" />
                    <ItemList src="./Market/WE_anniversary.png" text="World end 1st anniversary" price="142.00" />
                    <ItemList src="./Market/Debirun_1.jpg" text="Debirun 1st Anniversary" price="142.00" />
                    <ItemList src="./Market/Cat_debirun.png" text="Cat" price="142.00" />
                    <ItemList src="./Market/Sora.png" text="KaminariSora by Debirun" price="1000.00" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Market