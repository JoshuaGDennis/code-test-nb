import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ListItem = ({ id, name, image, price }) => (
    <Link className="bg-white rounded shadow flex items-center p-5 hover:shadow-lg transition-shadow" to={`/product/${id}`}>
        <img className="w-32 rounded" src={image} alt={`${name} donut`} />
        <div className="pl-5">
            <p className="text-xl">{name} donut</p>
            <p>{price}p each</p>
        </div>
    </Link>
)

ListItem.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number
}

export default ListItem