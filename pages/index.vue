<template>
  <section class="section">
    <div class="columns is-mobile">
      <card
        title="Home"
        icon="github"
      >
        <h2> Contador: {{ counter }}</h2>

        <button class="button" @click="llamarSumarDos">Sumar</button>
      </card>

    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'HomePage',

  components: {
    Card
  },
  methods: {
    llamarSumarDos() {
      this.$store.dispatch('sumarDos');
    }
  },
  computed: {
    counter() {
      return this.$store.getters['getCounter'];
    }
  }
}
</script>
