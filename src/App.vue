<template>
  <div id="app">
        <div class="columns is-fullheight">
      <div class="column is-2 is-sidebar-menu">
        <aside class="menu">
          <p class="menu-label">
            General
          </p>
          <ul class="menu-list">
            <router-link tag="li" to="/"><a>Home</a></router-link>
             <router-link tag="li" to="/history"><a>History</a></router-link>
          </ul>
        </aside>
      </div>
      <div class="column is-main-content">

            <transition name="slide-fade"><router-view /></transition>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.slide-fade-enter-active {
  transition: all .8s ease;
}

.slide-fade-enter
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(1000px);
  opacity: 0;
}
</style>
