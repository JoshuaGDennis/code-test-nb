import React from 'react'
import STUB from '../STUB'
import Image from '../components/Image'
import { Link } from 'react-router-dom'

const ListPage = () => (
    <div className="container p-2 m-auto mt-10">
        <h1 className="text-center">The Donut Store</h1>

        <div className="container p-2 m-auto mt-5">
            {STUB.map(item => (
                <Link 
                    key={item.id} 
                    to={`/product/${item.id}`}
                    className="bg-white rounded shadow flex items-center p-5 hover:shadow-lg transition-shadow my-3 max-w-lg m-auto"
                >   
                    <Image
                        src={item.image_url} 
                        className="w-32 rounded h-20" 
                        alt={`${item.name} donut`}
                    />
                    
                    <div className="pl-5">
                        <p className="text-xl">{item.name} donut</p>
                        <p>£{item.ppu} a topping!</p>
                    </div>
                </Link>

            ))}
        </div>
    </div>
)

export default ListPage