import PropTypes from 'prop-types'
import React, { useState } from 'react'

const Image = ({ className, src, alt }) => {
    const [ error, setError ] = useState(false)

    if (error) return (
        <div className={`${className || ''} bg-gray-400`} />
    )

    return (
        <img src={src} alt={alt} className={`${className || ''}`} onError={() => setError(true)} />
    )
}

Image.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

export default Image