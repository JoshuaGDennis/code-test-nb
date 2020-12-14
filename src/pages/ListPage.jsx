import React from 'react'
import STUB from '../STUB'
import { Link } from 'react-router-dom'

const ListPage = () => (
    <div className="container p-2 m-auto mt-10">
        <h1 className="text-center">The Donut Store</h1>

        <div className="container p-2 m-auto mt-5">
            {STUB.map(item => (
                <Link key={item.id} className="bg-white rounded shadow flex items-center p-5 hover:shadow-lg transition-shadow my-3 max-w-lg m-auto" to={`/product/${item.id}`}>
                    <img className="w-32 rounded" src={item.image_url} alt={`${item.name} donut`} />
                    <div className="pl-5">
                        <p className="text-xl">{item.name} donut</p>
                        <p>{item.ppu}p each</p>
                    </div>
                </Link>

            ))}
        </div>
    </div>
)

export default ListPage