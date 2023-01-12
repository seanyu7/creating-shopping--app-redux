import React from 'react'
import { useSelector } from 'react-redux'

function Navbar() {

    const {amount} = useSelector((store) => store.cart);

  return (
    <nav>
        <div className='nav-center'>
            <h3>Shopping page with Redux</h3>
            <div className='nav-container'>logo</div>
            <div className='amount-container'>
                <p className='total-amount'>0</p>
            </div>
        </div>
    </nav>
  )
}

export default Navbar