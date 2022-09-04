import { useState } from "react";
import { BiCart } from "react-icons/bi";

function ItemCount({ stock, initial,  onAdd }) {

    const [count, setCount] = useState(initial)
    
    const onPlus= () => {
        if (count < stock)
            setCount(count + 1)
    }

    const onMinus = () => {
        if (count > 0)
            setCount(count - 1)
    }

    const add2Cart = () => {
        if (count > 0)
            onAdd(count)
    }

    return (
        <div className="card w-72 min-h-full bg-base-100 rounded-md shadow-xl">
            <figure className="image-cover">
                <img src="https://placeimg.com/400/225/arch" alt="Character" />
            </figure>
            <div className="card-body p-4 items-center text-center font-Poppins">
                <h2 className="card-title">NFT Name</h2>
                <p>Product details</p>
                <div className="mt-4 card-actions items-center flex flex-row flex-nowrap w-full">
                    <button className="btn btn-square btn-md text-lg font-normal grow-0" onClick={ onMinus }>-</button>
                    <p className="w-auto grow font-Poppins font-medium text-lg">{ count }</p>
                    <button className="btn btn-square btn-md text-lg font-normal grow-0" onClick={ onPlus }>+</button>
                </div>
                <button className="btn btn-md text-md w-full normal-case" onClick={ add2Cart }><BiCart size={20}/>&nbsp;Add to cart</button>
                <p className="border-solid font-semibold">Available stock: { stock }</p>
            </div>
        </div>

    )
}

export default ItemCount