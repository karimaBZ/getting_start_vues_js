<template>
  <div class="home">
    <HelloWorld :msg="message"/>
    <label>Message: <input type="text" v-model="message"/> </label>
    <button @click="handelClick(message)">Alert</button>
    <!-- to edit our message data property with this text input -->
    <!-- @click => v-on:click -->
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
  //typed way to declare props
  // props: { 
  //   msg: String
  // } 
  // typless way 
  // props: ['msg'],
  //using data
   data(){
    return {
      message: 'Hello',
    }
  },
  methods: {
    handelClick: (message)=> {
      alert(message)
    }
  }
}
</script>
