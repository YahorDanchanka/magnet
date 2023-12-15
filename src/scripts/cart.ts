type Product = { id: string; name: string; count: number }

export function getProducts(): Product[] {
  const productsStr = localStorage.getItem('products')
  return productsStr ? JSON.parse(productsStr) : []
}

export function addProduct(id: string, name: string): boolean {
  if (hasProduct(id)) {
    return false
  }

  localStorage.setItem('products', JSON.stringify([...getProducts(), { id, name, count: 1 }]))
  updateCartState()
  return true
}

export function findProduct(id: string) {
  return getProducts().find((product) => product.id === id)
}

export function hasProduct(id: string) {
  return getProducts().some((product) => product.id === id)
}

export function editProduct(id: string, count: number) {
  const products = getProducts()
  const foundProduct = findProduct(id)

  if (foundProduct) {
    foundProduct.count = count
    const index = products.findIndex((product) => product.id === id)

    if (index !== -1) {
      products[index] = foundProduct
    }
  }

  localStorage.setItem('products', JSON.stringify(products))
}

export function updateCartState() {
  const cartLink = document.querySelectorAll('.header-nav__link')[1]

  if (!cartLink) {
    return
  }

  const products = getProducts()

  if (products.length > 0) {
    cartLink.setAttribute('data-count', products.length.toString())
    cartLink.classList.add('header-nav__link_badge')
  } else {
    cartLink.classList.remove('header-nav__link_badge')
  }
}

export function clearCart() {
  localStorage.removeItem('products')
}

export function initCart() {
  document.addEventListener('DOMContentLoaded', updateCartState)
}
