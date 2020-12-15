import STUB from '../STUB.json'
import React, { useState } from 'react'
import Ingredient from '../components/Ingredient'
import { Link, useParams } from 'react-router-dom'

const ProductPage = () => {
    const { id } = useParams()

    const item = STUB.find(item => item.id === +id)

    const buildItem = ({ id, type }) => (
        <p 
            key={id} 
            className={`inline-block p-2 rounded shadow-sm hover:shadow transition-all m-2 px-4 cursor-pointer border-2 type-${type} ${type === selected ? 'active' : ''}`}
        >
            {type}
        </p>
    )

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
                            {item.batters.batter.map(buildItem)}
                        </div>

                        <p className="mt-5 tracking-wider font-bold">TOPPINGS</p>

                        <div className="pl-5">
                            {item.topping.map(buildItem)}
                        </div>
                    </div>

                    <div className="bg-white mt-5 p-5 rounded shadow flex justify-between">
                        <p className="font-bold">Price: £{value}</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ProductPage