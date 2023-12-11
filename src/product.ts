import '@/product.sass'
import '@/scripts/main'
import Swiper from 'swiper'
import { Thumbs } from 'swiper/modules'
import 'swiper/css'

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
})
