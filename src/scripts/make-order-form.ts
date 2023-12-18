import { findProduct, hasProduct } from '@/scripts/cart'

export const prices = {
  product: 375,
  delivery: 1,
  discount: 125,
}

export function updateMakeOrderForm() {
  const makeOrderForm = document.querySelector<HTMLElement>('.make-order-form')

  if (makeOrderForm) {
    const count = makeOrderForm.querySelector('.make-order-form__product-count-field')
    const priceField = makeOrderForm.querySelector('.make-order-form__product-price-field')
    const summary = makeOrderForm.querySelector('.make-order-form__product-summary-field')

    if (hasProduct('1')) {
      const product = findProduct('1')
      count.innerHTML = `${product.count} товар (а)`
      priceField.innerHTML = `${product.count * prices.product} Р`
      summary.innerHTML = `${product.count * prices.product + prices.delivery - prices.discount} Р`
    } else {
      makeOrderForm.style.visibility = 'hidden'
    }
  }
}
