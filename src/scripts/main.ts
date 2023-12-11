function initList(list: HTMLUListElement) {
  const headerItem = list.firstElementChild

  headerItem.addEventListener('click', () => {
    list.classList.toggle('list_visible')
  })
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('ul.list').forEach((list) => initList(<HTMLUListElement>list))
})
