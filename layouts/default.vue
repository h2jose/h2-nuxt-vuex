<template>
  <div>
    <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a
          class="navbar-item"
          href="/"
        >
          <img
            src="~assets/buefy.png"
            alt="Buefy"
            height="28"
          >
        </a>

      </div>
        <div class="navbar-end">
          <nuxt-link to="/" class="navbar-item" >
            Home
          </nuxt-link>

          <nuxt-link to="/contacto" class="navbar-item" >
            Contacto
          </nuxt-link>
          <nuxt-link to="/blog" class="navbar-item" >
            Blog
          </nuxt-link>
        </div>
    </nav>

    <section class="main-content">
      <div class="container">
        <nuxt />
      </div>

    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
