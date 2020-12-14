import React from 'react'
import PropTypes from 'prop-types'

const Ingredient = ({ name, selected, onClick  }) => {
    const type = name === 'Regular' ? 'none' : name.toLowerCase()
    
    return (
        <p 
            className={`inline-block p-2 rounded shadow-sm hover:shadow transition-all m-2 px-4 cursor-pointer border-2 type-${type} ${type === selected ? 'active' : ''}`}
            onClick={() => onClick(type)}
        >
            {name}
        </p>
    )
}

Ingredient.propTypes = {
    name: PropTypes.string,
    onClick: PropTypes.func,
    selected: PropTypes.string
}

export default Ingredient