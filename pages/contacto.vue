<template>
  <section class="section">
    <div class="columns is-mobile">
      <card
        title="Contacto"
        icon="github"
      >
<h2> Contador: {{ counter }}</h2>

        </a>
      </card>

    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'ContactoPage',

  components: {
    Card
  },
  computed: {
    counter() {
      return this.$store.getters['getCounter'];
    }
  }
}
</script>
