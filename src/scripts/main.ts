function initList(list: HTMLUListElement) {
  const headerItem = list.firstElementChild

  headerItem.addEventListener('click', () => {
    list.classList.toggle('list_visible')
  })
}

function updateDropdownPosition() {
  const header = document.querySelector('.header-wrapper')
  const dropdownMenu = document.querySelector<HTMLElement>('.dropdown-menu')

  const headerHeight = header.getBoundingClientRect().height
  dropdownMenu.style.top = `${headerHeight}px`
  dropdownMenu.style.height = `${
    document.documentElement.clientHeight - headerHeight + document.documentElement.scrollTop
  }px`
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('ul.list').forEach((list) => initList(<HTMLUListElement>list))

  const dropdownMenu = document.querySelector<HTMLElement>('.dropdown-menu')
  const dropdownMenuTrigger = document.querySelectorAll('.catalog-btn')

  dropdownMenuTrigger.forEach((btn) =>
    btn.addEventListener('click', () => {
      const isVisible = dropdownMenu.classList.contains('dropdown-menu_visible')

      if (!isVisible) {
        updateDropdownPosition()
      }

      dropdownMenu.classList.toggle('dropdown-menu_visible')
      document.body.style.overflowY = isVisible ? 'auto' : 'hidden'
    }),
  )
})

window.addEventListener('load', () => {
  updateDropdownPosition()
})
