<template>
  <h1>
    Pokemon: <span>#{{ id }}</span>
  </h1>
  <div v-if="pokemon">
    <img :src="pokemon.sprites.front_default" alt="pokemon.name">
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      //id: null,
      pokemon: null,
    };
  },

  created() {
    /*  console.log(this.$route);
    const { id } = this.$route.params;
    this.id = id; */
    this.getPokemon();
  },

  methods: {
    async getPokemon() {
      try {
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then((res) => res.json());
        console.log(pokemon);
        this.pokemon = pokemon;
      } catch (error) {
        this.$router.push('/');
        console.log('We cant see this page');
      }
    },
  },

  watch: {
    id() {
      this.getPokemon();
    },
  },
};
</script>

<style></style>
