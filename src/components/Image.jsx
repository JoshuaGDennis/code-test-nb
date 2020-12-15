import PropTypes from 'prop-types'
import React, { useState } from 'react'

const Image = ({ className, src, alt, ...props }) => {
    const [ error, setError ] = useState(false)

    if (error) return (
        <div {...props} className={`${className || ''} bg-gray-400`} />
    )

    return (
        <img {...props} src={src} alt={alt} className={`${className || ''}`} onError={() => setError(true)} />
    )
}

Image.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

export default Image