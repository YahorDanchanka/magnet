import '@/cart.sass'
import '@/scripts/main'
import { clearCart, editProduct, hasProduct, findProduct } from '@/scripts/cart'

document.addEventListener('DOMContentLoaded', () => {
  const product = document.querySelector<HTMLElement>('.cart__item')
  const cartClearBtn = document.querySelector('.cart__clear-btn')

  if (cartClearBtn) {
    cartClearBtn.addEventListener('click', () => {
      clearCart()
      window.location.reload()
    })
  }

  product.style.display = hasProduct('1') ? 'grid' : 'none'

  const minusBtn = document.querySelector('.minus')
  const plusBtn = document.querySelector('.plus')

  minusBtn.addEventListener('click', () => {
    if (findProduct('1').count <= 1) return
    editProduct('1', findProduct('1').count - 1)
    window.location.reload()
  })

  plusBtn.addEventListener('click', () => {
    editProduct('1', findProduct('1').count + 1)
    window.location.reload()
  })

  const productCounter = document.querySelector('.cart-item__count')

  if (productCounter) {
    productCounter.innerHTML = `${findProduct('1')?.count || '0'} шт`
  }
})
