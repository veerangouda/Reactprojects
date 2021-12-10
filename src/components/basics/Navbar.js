import React from 'react'

const Navbar = ({ filterItem, menuList }) => {
    return (
        <div>
            <nav classname="navbar">
                <div className="btn-group">
                    {
                        menuList.map((curElem) => {
                            return (
                                <button className="btn-group__item"
                                    onClick={() => filterItem(curElem)}>
                                    {curElem}
                                </button>
                            )  
                        })
                    }
                </div>
            </nav>
        </div>
    )
}

export default Navbar
