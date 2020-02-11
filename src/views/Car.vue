<template>
  <div>
    <CarForm @clicked="addCar" />
    <ul v-for="car in cars" :key="car.name">
      <li>{{car.name}}</li>
      <li>{{car.model}}</li>
      <li>{{car.year}}</li>
    </ul>
    <p>Nombre de voitures : {{counter}}</p>
    <label>Recherche</label>
    <input type="text" v-model="findCar" />
    <ul>
      <li :key="car.name" v-for="car in filtredCar">{{car.name}} | {{car.model}} | {{car.year}}</li>
    </ul>
  </div>
</template>

<script>
import CarForm from "@/components/Car.vue";
export default {
  name: "car",
  components: {
    CarForm
  },
  data() {
    return {
      cars: [],
      findCar: ""
    };
  },
  methods: {
    addCar(value) {
      this.cars.push(value);
    }
  },
  computed: {
    counter() {
      return this.cars.length;
    },
    filtredCar() {
      var filtering = new RegExp(this.findCar, "i");
      return this.cars.filter(function(el) {
        return String(el).match(filtering);
      });
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