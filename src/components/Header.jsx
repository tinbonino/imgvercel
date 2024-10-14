


import React from 'react'
import logo from "../assets/logo.jpeg"

function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-10 h-10" />
        <h1 className="ml-2 text-xl font-semibold">React Store</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-900">Nosotros</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-900">Contacto</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
