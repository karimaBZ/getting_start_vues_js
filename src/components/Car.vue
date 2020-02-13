<template>
  <div>
    <label>Car Name</label>
    <input type="text" v-model="name" />
    <label>Car Model</label>
    <input type="text" v-model="model" />
    <label>Car Year</label>
    <input type="text" v-model="year" />
    <label>Car Price en DT</label>
    <input type="text" v-model="price" />
    <p>{{validatePrice}}</p>
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
      year: "",
      price: 0
    };
  },
  methods: {
    handelClick() {
      this.$emit("clicked", {
        name: this.name,
        model: this.model,
        year: this.year,
        price: this.price
      });
    }
  },
  computed: {
    validatePrice() {
      // eslint-disable-next-line no-useless-escape
      const valid = /^d*.?d*$/;
      if (valid.test(this.price)) {
        return this.price;
      } else return 0;
    }
  }
};
</script>


