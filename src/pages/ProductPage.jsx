import STUB from '../STUB.json'
import React, { useState } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'

const ProductPage = () => {
    const { id } = useParams()
    const history = useHistory()

    const item = STUB.find(item => item.id === +id)

    const buildItem = ({ id, type }) => (
        <p 
            key={id} 
            className={`inline-block p-2 rounded shadow-sm hover:shadow transition-all m-2 px-4 cursor-pointer border-2 type-${type.toLowerCase()}`}
        >
            {type}
        </p>
    )

    if (!item) return (
        <div className="container p-2 m-auto mt-5 text-center">
            <h1 className="my-2">Woops!</h1>
            <p className="my-2">There's no donut here!</p>
            <button 
                onClick={() => history.push('/')}
                className="p-2 my-2 rounded bg-green-400 text-white shadow-sm hover:shadow transition-shadow" 
            >
                Back to products
            </button>
        </div>
    )

    return (
        <div className="container p-2 m-auto mt-5">
            <Link to="/" className="text-blue-400 hover:text-blue-600 hover:underline transition-all">Back to products</Link>
            <div className="flex mt-5 flex-col lg:flex-row">
                <img className="w-full md:w-1/2 rounded mb-5 mx-auto" src={item.image_url} alt={`${item.name} donut`} />
                <div className="lg:ml-5 m-0 w-full ">
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
                </div>
            </div>
        </div>
    )
}

export default ProductPage