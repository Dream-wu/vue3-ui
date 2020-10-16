<template>
  <div class="container">
    <carousel :autoplay="true" :duration="3000" :initial="0">
      <carItem v-for="(item, index) in carData" :key="index">
        <img
          :src="require(`./assets/img/${item.imgName}`)"
          alt="这是一张图片"
        />
      </carItem>
    </carousel>
  </div>
</template>

<script>
export default {
  name: 'App',
  setup() {
    const carData = [
      {
        name: '第一张图',
        imgName: 'banner1.jpg'
      },
      {
        name: '第2张图',
        imgName: 'banner2.jpg'
      },
      {
        name: '第3张图',
        imgName: 'banner3.jpg'
      }
    ]

    return {
      carData
    }
  }
}
</script>
<style lang="css" scoped>
.container {
  width: 520px;
  height: 280px;
  margin: 0 auto;
}
</style>
