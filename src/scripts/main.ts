import { initDropdowns } from '@/scripts/dropdown'
import { findProduct, hasProduct, initCart } from '@/scripts/cart'

function initList(list: HTMLUListElement) {
  const headerItem = list.firstElementChild

  headerItem.addEventListener('click', () => {
    list.classList.toggle('list_visible')
  })
}

function updateDropdownPosition() {
  const header = document.querySelector('.header-wrapper')
  const dropdownMenu = document.querySelector<HTMLElement>('.dropdown-menu')

  if (!header || !dropdownMenu) {
    return
  }

  const headerHeight = header.getBoundingClientRect().height
  dropdownMenu.style.top = `${headerHeight}px`
  dropdownMenu.style.height = `${
    document.documentElement.clientHeight - headerHeight + document.documentElement.scrollTop
  }px`
}

initDropdowns()
initCart()

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('ul.list').forEach((list) => initList(<HTMLUListElement>list))

  const dropdownMenu = document.querySelector<HTMLElement>('.dropdown-menu')

  if (!dropdownMenu) {
    return
  }

  const dropdownMenuTriggers = document.querySelectorAll('.catalog-btn')

  dropdownMenuTriggers.forEach((btn) =>
    btn.addEventListener('click', () => {
      const isVisible = dropdownMenu.classList.contains('dropdown-menu_visible')

      if (!isVisible) {
        updateDropdownPosition()
      }

      dropdownMenu.classList.toggle('dropdown-menu_visible')
      document.body.style.overflowY = isVisible ? 'auto' : 'hidden'
    }),
  )

  const makeOrderForm = document.querySelector<HTMLElement>('.make-order-form')

  if (makeOrderForm) {
    const count = makeOrderForm.querySelector('.make-order-form__product-count-field')
    const price = makeOrderForm.querySelector('.make-order-form__product-price-field')
    const summary = makeOrderForm.querySelector('.make-order-form__product-summary-field')

    if (hasProduct('1')) {
      count.innerHTML = `${findProduct('1').count} товар (а)`
      price.innerHTML = `${findProduct('1').count * 375} Р`
      summary.innerHTML = `${findProduct('1').count * 375 - 1} Р`
    } else {
      makeOrderForm.style.visibility = 'hidden'
    }
  }
})

window.addEventListener('load', () => {
  updateDropdownPosition()
})
