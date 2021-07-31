import React from 'react'

export const Footer: React.FunctionComponent = () => {
    return (
        <footer className="page-footer purple darken-2">
            <div className="footer-copyright purple darken-2">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a
                        className="grey-text text-lighten-4 right"
                        href="https://github.com/Andrey-Golubenko/react-game-shop.git"
                        target="_blank"
                        rel="noreferrer"
                    >Repo</a>
                </div>
            </div>
        </footer>
    )
};