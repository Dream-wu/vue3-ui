import Carousel from './Carousel'
import CarItem from './Carousel/Item'

let mjUI = {}

mjUI.install = function(Vue) {
  Vue.component(Carousel.name, Carousel)
  Vue.component(CarItem.name, CarItem)
}

export default mjUI
