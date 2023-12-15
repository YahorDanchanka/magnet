import '@/product.sass'
import '@/scripts/main'
import Swiper from 'swiper'
import { Thumbs } from 'swiper/modules'
import 'swiper/css'
import { addProduct, hasProduct } from '@/scripts/cart'

function initProductSlider(slider: HTMLElement) {
  const sliders = {
    main: slider.querySelector('.product-slider__main'),
    thumbs: slider.querySelector('.product-slider__thumbs'),
  }

  const thumbsGallery = new Swiper(<HTMLElement>sliders.thumbs, {
    slidesPerView: 5,
    freeMode: true,
  })

  new Swiper(<HTMLElement>sliders.main, {
    modules: [Thumbs],
    thumbs: {
      swiper: thumbsGallery,
    },
  })
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.product-slider').forEach((slider) => initProductSlider(<HTMLElement>slider))

  const addToCartBtn = document.querySelector('.add-to-cart__btn')

  if (!addToCartBtn) {
    return
  }

  if (hasProduct('1')) {
    addToCartBtn.classList.add('add-to-cart__btn_disabled')
    addToCartBtn.setAttribute('disabled', 'disabled')
  }

  addToCartBtn.addEventListener('click', () => {
    if (addProduct('1', 'Макароны Barilla Spaghetti №5 спагетти 450г')) {
      addToCartBtn.classList.add('add-to-cart__btn_disabled')
      addToCartBtn.setAttribute('disabled', 'disabled')
    }
  })
})
