<template>
  <div class="home">
    <HelloWorld :msg="message"/>
    <label>Message: <input type="text" v-model="message"/> </label>
    <br />
    <br />
    <button @click="handelClick()">Alert</button>
  </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
   data(){
    return {
      message: 'Hello',
    }
  },
  methods: { 
    handelClick(){
      alert(this.message)
    }
  }
}
</script>
