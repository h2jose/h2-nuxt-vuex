<template>
  <section class="section">
    <div class="columns is-mobile">
      <card
        title="Blog"
        icon="github"
      >
        <h2>Total Posts: {{ total }}</h2>
        <div v-for="item in posts" :key="item.id">
          <h2 class="has-text-weight-semibold">{{item.title}}</h2>
          <p>{{ item.body}}</p>
          <hr/>
        </div>

        </a>
      </card>

    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'

import { mapGetters } from 'vuex'

export default {
  name: 'HomePage',
  // se comenta al estar usando nuxtServerInit
  // created(){
  //   this.$store.dispatch('posts/loadPosts')
  // },
  components: {
    Card
  },
  computed: {
    // sin usar map
    // posts() {
    //   return this.$store.getters['posts/getPosts']
    // },

    ...mapGetters({
      posts: 'posts/getPosts',
      total: 'posts/getTotal'
    })

  }
}
</script>
