<template>
  <div>
    <section class="hero is-primary is-fullheight">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
        Open Syllabus
      </h1>
          <h2 class="subtitle">
        Curated reading list from 0 to hero, sorted by you...
      </h2>
          <br>
          <nav class="level">
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Categories</p>
                <p class="title">6</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Books</p>
                <p class="title">600</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Voters</p>
                <p class="title">229k</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Cost</p>
                <p class="title">$0</p>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      location: 'Home'
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

section.nav-section {
  width: 300px;
  height: 100vh;
}

</style>
