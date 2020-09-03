<template>
  <div class="mock">
    <h2 v-for="(item, index) in list" :key="index">{{item.id}}</h2>
    <button @click="getMock">mock随机数据</button>
    <button @click="getDataFromServe">mock随机数据</button>
  </div>
</template>

<script>
import { mock, } from '../../utils/mock'
export default {
  data() {
    return {
      list: []
    }
  },
  methods: {
    getMock() {
      // console.log(JSON.stringify(mock, null, 4));
      console.log(mock.list);
      // mock()
      this.list = mock.list
    },
    getDataFromServe() {
      
    }
  },

}
</script>

<style>

</style>