import { initDropdown } from '@/scripts/dropdown'
import { initCart } from '@/scripts/cart'
import { updateMakeOrderForm } from '@/scripts/make-order-form'
import { bem } from '@/scripts/bem'
import { initList } from '@/scripts/list'

function updateDropdownMenuPosition() {
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

bem('ul.list', initList)
bem('.dropdown', initDropdown)

initCart()

document.addEventListener('DOMContentLoaded', () => {
  const dropdownMenu = document.querySelector<HTMLElement>('.dropdown-menu')

  if (!dropdownMenu) {
    return
  }

  const dropdownMenuTriggers = document.querySelectorAll('.catalog-btn')

  dropdownMenuTriggers.forEach((btn) =>
    btn.addEventListener('click', () => {
      const isVisible = dropdownMenu.classList.contains('dropdown-menu_visible')

      if (!isVisible) {
        updateDropdownMenuPosition()
      }

      dropdownMenu.classList.toggle('dropdown-menu_visible')
      document.body.style.overflowY = isVisible ? 'auto' : 'hidden'
    }),
  )

  updateMakeOrderForm()
})

window.addEventListener('load', () => {
  updateDropdownMenuPosition()
})
