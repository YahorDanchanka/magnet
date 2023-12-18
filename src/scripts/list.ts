export function initList(list: HTMLUListElement) {
  const headerItem = list.firstElementChild

  headerItem.addEventListener('click', () => {
    list.classList.toggle('list_visible')
  })
}
