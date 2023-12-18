/**
 * Run a BEM component
 */
export function bem(selector: string, component: (elem: HTMLElement) => void) {
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll(selector).forEach(component)
  })
}
