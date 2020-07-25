<template>
  <div>
    <h2>{{name}}</h2>
    <zi @fuff='set'></zi>
  </div>
</template>

<script>
import zi from './zi'
export default {
components: {
  zi
},
data() {
  return {
    name: 'xxf'
  }
},
methods: {
  set() {
    this.name='01234'
  }
},
}
</script>

<style>

</style>