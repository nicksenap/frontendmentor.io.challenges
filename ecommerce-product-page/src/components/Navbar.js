import React from 'react'
import { ReactComponent as Logo } from '../assets/logo.svg'
import { ReactComponent as Cart } from '../assets/icon-cart.svg'
import avatar from '../assets/image-avatar.png'

export const Navbar = () => {
    return (
        <div className="flex w-screen items-center bg-white">
            <div className="flex p-6 gap-2 flex-1">
                <button class="outline-none mobile-menu-button">
                    <svg
                        class=" w-6 h-6 text-gray-500 hover:text-green-500 "
                        x-show="!showMenu"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                <Logo></Logo>
            </div>
            <div className="flex p-6 justify-end flex-row flex-1 items-center gap-6">
                <Cart></Cart>
                <img src={avatar} alt="some example" className="h-8 w-8" />
            </div>
        </div>
    )
}
