import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => (
    <div className="container mt-20 mx-auto text-center">
        <h1 className="text-8xl">404</h1>
        <p className="mb-5">This page doesn't exist!</p>
        <Link to="/" className="p-2 rounded bg-green-400 hover:bg-green-600 transition-all shadow-sm hover:shadow text-white">Take me home</Link>
    </div>
)

export default NotFound