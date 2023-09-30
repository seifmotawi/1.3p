content<template>
  <div id="app">
    <div class="header">
      <div class="title">Seif<span class="highlight">Motawi</span></div>
      <ul class="nav-links">
        <li v-for="route in routes" :key="route.name">
          <router-link :to="route.path"><b>{{route.name}}</b></router-link>
        </li>
      </ul>
    </div>
    <router-view v-slot="{ Component }">
  <transition name="fade" mode="out-in">
    <component :is="Component" />
  </transition>
</router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        { path: '/home', name: 'Home' },
        { path: '/contact', name: 'Contact' },
        { path: '/resume', name: 'Resume' },
      ],
    };
  },
};
</script>

<style>
@import '@/assets/styles.css';

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

#app {
  transition: opacity 0.5s;
}

.header {
  display: center;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  margin-left: 50px;
}

.nav-links {
  list-style-type: none;
  width: 25%;
  display: center;
  justify-content: space-around;
  margin-right: auto;
  margin-left: auto;
  font-family: 'Raleway', sans-serif;
}

.world-clock {
  font-size: 1.5rem;
  margin-right: 50px;
}

/* For tablets and small desktops */
@media (max-width: 992px) {
  .title {
    font-size: 1.5rem;
    margin-left: 30px;
  }

  .nav-links {
    width: 70%;
  }

  .world-clock {
    font-size: 1.2rem;
    margin-right: 30px;
  }
}

/* For mobile phones */
@media (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: flex-start;
  }

  .title {
    font-size: 1.2rem;
    margin-left: 20px;
  }

  .nav-links {
    width: 100%;
    padding: 10px 0;
  }

  .world-clock {
    font-size: 1rem;
    margin-right: 20px;
  }
}

</style>