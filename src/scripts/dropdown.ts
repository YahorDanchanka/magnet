import { createPopper } from '@popperjs/core'

export function initDropdown(elem: HTMLElement) {
  const trigger = elem.querySelector<HTMLElement>('.dropdown__trigger')
  const content = elem.querySelector<HTMLElement>('.dropdown__content')

  const popperInstance = createPopper(trigger, content, {
    placement: 'bottom-start',
  })

  trigger.addEventListener('click', () => {
    popperInstance.update()
    elem.classList.toggle('dropdown_visible')
  })
}
