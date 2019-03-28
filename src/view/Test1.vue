<template>
    <div>
        <Input v-model="pay.paymentofcash" size="large" placeholder="large size" @on-change="change"/>
    </div>
</template>

<script>
  export default {
    name: 'test1',
    components: {},
    data () {
      return {
        pay: {
          paymentofcash: 0
        }
      }
    },
    methods: {
      change (p) {
        console.log('p1', this.pay.paymentofcash)
        _.delay(() => {
          this.$set(this.pay, 'paymentofcash',0)
          console.log('p2', this.pay.paymentofcash)
        }, 1)
      }
    },
    computed: {}
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
