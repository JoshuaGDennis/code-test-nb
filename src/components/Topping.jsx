import React from 'react'

const Topping = ({ id, type }) => {
    const typeClass = () => {
        switch(id) {
            case '1001': return 'none'
            case '1004': return 'devil'
            case '5007': return 'powdered'
            case '5006': return 'chocolate'
            default: return type.toLowerCase()
        }
    }

    return (
        <p className={`inline-block p-2 rounded shadow-sm hover:shadow transition-all m-2 px-4 cursor-pointer border-2 type-${typeClass()}`}>
            {type}
        </p>
    )
}

export default Topping