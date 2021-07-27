import React from 'react'

export const Header: React.FunctionComponent = () => {
    return <nav className="purple darken-2">
                <div className="nav-wrapper">
                    <a href="https://andrey-golubenko.github.io/react-game-shop" className="brand-logo">React Shop</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="https://github.com/Andrey-Golubenko/react-game-shop.git" target="_blank">Repo</a></li>
                    </ul>
                </div>
            </nav>
};