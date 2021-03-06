import React from 'react'
import STUB from '../STUB.json'
import Image from '../components/Image'
import Topping from '../components/Topping'
import { Link, useParams, useHistory } from 'react-router-dom'

const ProductPage = () => {
    const { id } = useParams()
    const history = useHistory()

    const item = STUB.find(item => item.id === +id)

    if (!item) return (
        <div className="container p-2 m-auto mt-20 text-center">
            <h1 className="my-2 text-8xl mb-5">Woops!</h1>
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
                <Image
                   className="w-full md:w-1/2 rounded mb-5 max-h-96 mx-auto flex-1"
                   src={item.image_url} alt={`${item.name} donut`}
                   style={{ minHeight: '10rem' }}
                />
                <div className="lg:ml-5 m-0 w-full flex-1">
                    <div className="bg-white p-5 rounded shadow">
                        <h1>{item.name} donut</h1>
                        <p className="mt-5 tracking-wider font-bold text-gray-400">BATTERS</p>

                        <div className="pl-5">
                            {item.batters.batter.map(item => <Topping key={item.id} {...item} />)}
                        </div>

                        <p className="mt-5 tracking-wider font-bold text-gray-400">TOPPINGS</p>

                        <div className="pl-5">
                            {item.topping.map(item => <Topping key={item.id} {...item} />)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage