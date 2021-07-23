import { useState, useEffect } from 'react'
import '../styles/Cart.css'

function Cart({ cart, updateCart }) {
  const monsteraPrice = 8
  const [isOpen, setIsOpen] = useState(true)

  useEffect(()=>{
      localStorage.setItem('cart', cart)
      console.log(`cart a été modifié  ET sauvegardé et vaut mnt ${cart}`)
  })

//   useEffect(() => {
//       console.log(`a ete sauvegardé ${localStorage.getItem('cart')}`)
      
//   }, [])

  return isOpen ? (
      <div className='lmj-cart'>
          <button
              className='lmj-cart-toggle-button'
              onClick={() => setIsOpen(false)}>
              Fermer
          </button>
          <h2>Panier</h2>
          <h3>Total : {monsteraPrice * cart}€</h3>
          <button onClick={() => updateCart(0)}>Vider le panier</button>
      </div>
  ) : (
      <div className='lmj-cart-closed'>
          <button
              className='lmj-cart-toggle-button'
              onClick={() => setIsOpen(true)}
          >
              Ouvrir le Panier
          </button>
      </div>
  )
}

export default Cart