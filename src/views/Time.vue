<template>
  <div class="home">
    <HelloWorld :msg="message"/>
    <label>Hour: <input type="text" v-model="hour"/> </label>
    <label>Minut: <input type="text" v-model="minute"/> </label>
    <label>Second: <input type="text" v-model="second"/> </label>
  </div>
</template>
<script>

export default {
  name: 'time',
   data(){
    return {
      hour: 0,
      minute:0,
      second: 0,
    }
  },
  methods: { 
    handelClick(){
      alert(this.message)
    }
  },
  watch: {
    hour: function(v) {
     this.minute = v*60;
    },
    minute: function(v) {
     this.second = v*60;
     this.hour= v/60;
    },
    second: function(v) {
     this.minute = v/60;
    }
  }
}
</script>
