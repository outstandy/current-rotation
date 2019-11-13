<template>
  <div id="app">
    <Section>
      <Flex>
        <transition appear name="slide-up" mode="out-in">
          <Title />
        </transition>
        <ContentFlex>
          <Nav />
          <transition 
            appear 
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:leave="leave"
            v-bind:css="false"
            mode="out-in"
            >
            <router-view />
          </transition>
        </ContentFlex>
      </Flex>
    </Section>
  </div>
</template>
<script>
import Velocity from 'velocity-animate'
import { Section, Flex, ContentFlex } from "./components/layouts/layout"
import Title from "./components/layouts/Title"
import Nav from "./components/Nav"

export default {
  name: 'app',
  components: {
    Section,
    Flex,
    ContentFlex,
    Title,
    Nav
  },
  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0
    },
    enter: function (el, done) {
      Velocity(el, { translateX: '-30px' }, { duration: 50 })
      Velocity(el, { opacity: 1, translateX: '0px' }, { duration: 300 }, { complete: done })
    },
    leave: function (el, done) {
        Velocity(el, 
                { opacity: 0, translateX: '-30px' },
                { complete: done })
    },
  }
}
</script>

<style>
html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #1A1B1E;
  color: #F3F9FC;
  font-size: 10px;
  height: 100%;
}
@media screen and (min-width: 320px) {
  html {
    font-size: calc(10px + 4 * ((100vw - 320px) / 900));
  }
}
@media screen and (min-width: 1000px) {
  html {
    font-size: 14px;
  }
}

a {
  color: white;
  text-decoration: none;
}

/* Animations */

.slide-out-enter-active,
.slide-out-leave-active  {
  transition-duration: 0.3s;
  transition-property: transform opacity;
  transition-timing-function: ease;
}

.slide-out-enter {
  transform: translateX(0px);
  opacity: 1;
}
.slide-out-leave-active {
  transform: translateX(3rem);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

</style>
