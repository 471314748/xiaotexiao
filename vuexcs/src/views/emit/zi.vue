<template>
<div>
  <h4>{{age}}</h4>
  <button @click="get">点击</button>
</div>
  
</template>

<script>
export default {
data() {
  return {
    age: 18
  }
},
methods: {
  get(){
    this.$emit('fuff')
  }
},
}
</script>

<style>

</style>