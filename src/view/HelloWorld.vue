<template>
  <div>
    <MyHead></MyHead>
    <MyNeck></MyNeck>
    <!--<Button @click="testone" size="large" type="success">点击</Button>-->
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import MyHead from '../components/myhead/myhead'
import MyNeck from '../components/myneck/myneck'
export default {
  name: 'HelloWorld',
  components: {MyHead, MyNeck},
  data () {
    return {
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
