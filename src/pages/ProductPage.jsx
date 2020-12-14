import STUB from '../STUB.json'
import React, { useState } from 'react'
import Ingredient from '../components/Ingredient'
import { Link, useParams } from 'react-router-dom'

const ProductPage = () => {
    const { id } = useParams()

    const item = STUB.find(item => item.id === +id)

    const [ value, setValue ] = useState(1)
    const [ topping, setTopping ] = useState('none')
    const [ batter, setBatter ] = useState('none')

    const onToppingClick = (t) => {
        if (topping !== t) {
            setTopping(t)
            setValue(v => t === 'none' ? (v - item.ppu) : (v + item.ppu))
        }
    }

    const onBatterClick = (b) => {
        if (batter !== b) {
            setBatter(b)
            setValue(v => b === 'none' ? (v - item.ppu) : (v + item.ppu))
        }
    }

    const onPurchase = () => {
        alert(`You bought a ${batter !== 'none' ? batter : ''} ${topping !== 'none' ? topping : ''} ${item.name} donut for £${value}!!`)
    }

    return (
        <div className="container p-2 m-auto mt-5">
            <Link to="/">Back to products</Link>
            <div className="flex mt-5">

                <img className="w-1/2 rounded" src={item.image_url} alt={`${item.name} donut`} />
                
                <div className="ml-5 w-full">
                    <div className="bg-white p-5 rounded shadow">
                        <h1>{item.name} donut</h1>
                        <p className="mt-5 tracking-wider font-bold">BATTERS</p>

                        <div className="pl-5">
                            {item.batters.batter.map(({ id, type }) => (
                                <Ingredient key={id} name={type} onClick={onBatterClick} selected={batter} />
                            ))}
                        </div>

                        <p className="mt-5 tracking-wider font-bold">TOPPINGS</p>

                        <div className="pl-5">
                            {item.topping.map(({ id, type }) => (
                                <Ingredient key={id} name={type} onClick={onToppingClick} selected={topping} />
                            ))}
                        </div>
                    </div>

                    <div className="bg-white mt-5 p-5 rounded shadow flex justify-between">
                        <p className="font-bold">Price: £{value}</p>
                        <button className="bg-green-400 p-2 rounded shadow text-white hover:shadow-md transition-shadow" onClick={onPurchase}>Purchase</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ProductPage