<template>
  <div class="carousel" @mouseenter="mouseenter" @mouseleave="mouseleave">
    <div class="carousel-inner">
      <CarDot
        :currentIndex="currentIndex"
        :itemLen="itemLen"
        :hasDot="hasDot"
        :dotBgColor="dotBgColor"
        @dot-click="dotClick"
      ></CarDot>
      <CarDirector dir="pre" @dir-click="dirClick"></CarDirector>
      <CarDirector dir="next" @dir-click="dirClick"></CarDirector>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import {
  reactive,
  toRefs,
  onMounted,
  onBeforeUnmount,
  getCurrentInstance
} from 'vue'
import CarDot from './Dot'
import CarDirector from './Director'
export default {
  name: 'Carousel',
  components: {
    CarDot,
    CarDirector
  },
  props: {
    autoplay: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 3000
    },
    initial: {
      type: Number,
      default: 0
    },
    hasDot: {
      type: Boolean,
      default: true
    },
    hasDirector: {
      type: Boolean,
      default: true
    },
    dotBgColor: String
  },
  setup(props) {
    const instance = getCurrentInstance()
    const state = reactive({
      currentIndex: props.initial,
      itemLen: 0
    })

    let t = null
    const autoPlay = () => {
      if (props.autoplay) {
        t = setInterval(() => {
          setIndex('next')
        }, props.duration)
      }
    }

    onMounted(() => {
      state.itemLen = instance.slots.default()[0].children.length
      autoPlay()
    })

    const setIndex = dir => {
      switch (dir) {
      case 'next':
        state.currentIndex += 1
        if (state.currentIndex === state.itemLen) {
          state.currentIndex = 0
        }
        break
      case 'pre':
        state.currentIndex -= 1
        if (state.currentIndex < 0) {
          state.currentIndex = state.itemLen - 1
        }
        break
      default:
        break
      }
    }

    const dotClick = index => {
      // console.log('dotclick', index)
      _clearIntervalFn()
      state.currentIndex = index
      autoPlay()
    }

    const dirClick = dir => {
      setIndex(dir)
    }

    const mouseenter = () => {
      _clearIntervalFn()
    }

    const mouseleave = () => {
      autoPlay()
    }

    onBeforeUnmount(() => {
      _clearIntervalFn()
    })

    function _clearIntervalFn() {
      clearInterval(t)
      t = null
    }

    return {
      ...toRefs(state),
      dotClick,
      dirClick,
      mouseenter,
      mouseleave
    }
  }
}
</script>
<style lang="css" scoped>
.carousel {
  width: 100%;
  height: 100%;
  cursor: hand;
}
.carousel-inner {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
