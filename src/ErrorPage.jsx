import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div>
        <h1>404</h1>
        <h2>Sorry, the page wasn't found, we apologize.</h2>
        <Link to="/">Go back home</Link>
    </div>
  )
}

export default ErrorPage