<template>
  <h1>About page</h1>
  <h2>{{ name }}</h2>
  <button @click="onChangeName">change name</button>
</template>

<script>
export default {
  data() {
    return {
      name: 'Sebastian',
    };
  },

  methods: {
    onChangeName() {
      this.name = 'Eren';
    },
  },

  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
    // Aqui se deben realizar los despachos http
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('Update');
  },
  activated() {
    console.log('activated');
  },
  deactivated() {
    console.log('deactivated');
  },
  beforeUnmount() {
    console.log('beforeUnmount');
  },
  unmounted() {
    console.log('unmounted');
  },
  errorCaptured() {
    console.log('errorCaptured');
  },
  renderTracked() {
    console.log('renderTracked');
  },
  renderTriggered() {
    console.log('renderTriggered');
  },
};
</script>

<style></style>
