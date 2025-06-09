import './itemList.css'

const ItemList = ({src, text, price}) => {
    return (
        <div className='item-container'>
            <div className="item-box">
                <img src={src}></img>
            </div>
            <div id='item-text'>
                <h4 className='quicksand title'>{text}</h4>
                <br></br>
                <h4 className='quicksand'>{price} ฿ THB</h4>
            </div>
        </div>
    );
}

export default ItemList