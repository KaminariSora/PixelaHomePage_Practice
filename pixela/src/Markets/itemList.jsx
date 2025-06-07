import './itemList.css'

const ItemList = () => {
    return (
        <div className='item-container'>
            <div className="item-box">
                <img src='./Images/Debirun_1.jpg'></img>
            </div>
            <div id='item-text'>
                <h4 className='quicksand'>Text</h4>
            </div>
        </div>
    );
}

export default ItemList