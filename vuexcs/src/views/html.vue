<template>
  <h2>{{$store.state.name}}</h2>
</template>

<script>
export default {
data() {
  return {
    age:18
  }
},
created() {
  this.$store.commit('setAge',this.age)
},
}
</script>

<style>

</style>