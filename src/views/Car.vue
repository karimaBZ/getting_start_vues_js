<template>
  <div>
    <CarForm  @clicked="addCar"/>
    <ul v-for="car in cars" :key="car.name">
      <li>{{car.name}}</li>
      <li>{{car.model}}</li>
      <li>{{car.year}}</li>
    </ul>
    
    <p>Nombre de voitures : {{counter}}</p>
  </div>
</template>

<script>
import CarForm from '@/components/Car.vue'
export default {
  name: "car",
  components: {
    CarForm
  },
  data() {
    return {
      cars: []
    };
  },
  methods: {
    addCar (value) {
      this.cars.push(value);
    }
  },
  computed: {
    counter() {
      return this.cars.length;
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
list-style-type: square;
}
</style>