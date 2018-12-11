<template>
  <div>
    <Carousel autoplay v-model="value2" loop :height="500" radius-dot>
      <CarouselItem>
       <img src="@/assets/neck_imgs/neck1.jpg" style="width: 100%"/>
      </CarouselItem>
      <CarouselItem>
        <img src="@/assets/neck_imgs/neck2.jpg" style="width: 100%"/>
      </CarouselItem>
      <CarouselItem>
       <img src="@/assets/neck_imgs/neck3.jpg" style="width: 100%"/>
      </CarouselItem>
      <CarouselItem>
       <img src="@/assets/neck_imgs/neck4.jpg" style="width: 100%"/>
      </CarouselItem>
    </Carousel>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'myneck',
  data () {
    return {
      value2: 0
    }
  },
  methods: {
    ...mapActions(['test']),
    testone () {
      this.test()
    }
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
