<template>
    <div>
        <!-- <H3>Current Rotation</H3> -->
          <transition-group
            appear
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:leave="leave"
            v-bind:css="false"
            mode="out-in"
            >
            <AlbumList v-for="(album, index) in currentAlbums" 
            :key="album.id"
            v-bind="album"
            v-bind:data-index="index"
            />
          </transition-group>
    </div>
</template>

<script>
import Velocity from 'velocity-animate'

// import { H3 } from '../typography'
import AlbumList from '../AlbumList'

import { database } from '../../database'

export default {
  name: 'CurrentRotation',
  components: {
    // H3,
    AlbumList
    },
    data() {
        return {
            currentAlbums: [],
        }
    },
    props: {
      routing: String
    },
  firestore: {
    currentAlbums: database
      .collection('album-collections')
      .doc('current-rotation')
      .collection('albums'),
  },
  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0
    },
    enter: function (el, done) {
      var delay = el.dataset.index * 50
      setTimeout(function () {
        Velocity(el, { translateX: '-10px' }, { duration: 50 })
        Velocity(
          el,
          { opacity: 1, translateX: 0 },
          { complete: done }
        )
      }, delay)
    },
    leave: function (el, done) {
      var delay = el.dataset.index * 150
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 0, translateX: '-10px' },
          { complete: done }
        )
      }, delay)
    }
  }
}
</script>