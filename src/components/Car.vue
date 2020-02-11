<template>
  <div>
    <label>Car Name</label>
    <input type="text" v-model="name" />
    <label>Car Model</label>
    <input type="text" v-model="model" />
    <label>Car Year</label>
    <input type="text" v-model="year" />
    <button @click="handelClick()">Add Car</button>
  </div>
</template>

<script>
export default {
  name: "CarForm",
  props: {
    addCar: Function
  },
  data() {
    return {
      name: "",
      model: "",
      year: ""
    };
  },
  methods: {
    handelClick () {
      this.$emit('clicked', {
        name: this.name,
        model: this.model,
        year: this.year
      })
    }
  }
};
</script>


