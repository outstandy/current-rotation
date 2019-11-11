<template>
    <div>
        <Hero>
            <Lockup>
                <transition
                    appear
                    name="slide-in-1"
                    mode="out-in">
                <H3>
                    {{this.album.genre}} · {{this.album.subgenre}}
                </H3>
                </transition>
                <transition
                    appear
                    name="slide-in-2"
                    mode="out-in">
                        <a :href="this.album.link">
                            <H2>{{this.album.title}}</H2>
                        </a>
                </transition>
                <transition
                    appear
                    name="slide-in-3"
                    mode="out-in">
                        <P>{{this.album.artist}}</P>
                </transition>
                <transition
                    appear
                    name="slide-in-4"
                    mode="out-in">
                        <Detail>{{this.album.year}} · {{this.album.length}} minutes</Detail>
                </transition>
            </Lockup>
        </Hero>
        <transition
                appear
                name="slide-in-5"
                mode="out-in">
            <Information>
                <P>{{this.album.opinion}}</P>
            </Information>
        </transition>
    </div>
</template>
<script>
import styled, { keyframes } from 'vue-styled-components'
import { database } from '../../database'
import { H2, H3, P, Detail } from '../typography'
import { gradients } from '../variables'

const slideBar = keyframes`
    from {
        opacity: 0;
        width: 0;
    }

    to {
        opacity: 1;
        width: 100%;
    }
`;

const Hero = styled.div`
    position: relative;
    margin-bottom: 2rem;
    &:after {
        animation: ${slideBar} 0.24s linear forwards;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 1px;
        width: 400px;
        background: ${gradients.indie};
    }
`;

const Lockup = styled.div`
    padding: 2rem 0 0 0;
    width: 100%;
    * {
        margin-bottom: 0.5rem;
    }
`;

const Information = styled.div`
    padding: 0 4rem 0 0;
    p {
        margin-bottom: 1rem;
    }
`;

export default {
    name: 'AlbumView',
    components: {
        H2,
        H3,
        P,
        Detail,
        Hero,
        Lockup,
        Information,
    },
    data() {
        return {
            loading: false,
            album: null,
            error: null
        }
    },
    created() {
        this.fetchData();
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData() {
            /* eslint-disable no-console */
            /* eslint-enable no-console */
            this.error = this.album = null
            this.loading = true
            database
                .collection('album-collections')
                .doc(this.$route.params.collectionId)
                .collection('albums')
                .doc(this.$route.params.albumId)
                .get()
                .then(
                    snapshot => {
                        const viewedAlbum = snapshot.data()
                        this.album = viewedAlbum
            })
        }
    }
}
</script>

<style scoped>

.slide-in-1-enter-active,
.slide-in-2-enter-active,
.slide-in-3-enter-active,
.slide-in-4-enter-active,
.slide-in-5-enter-active,
.slide-in-1-leave-active,
.slide-in-2-leave-active,
.slide-in-3-leave-active,
.slide-in-4-leave-active,
.slide-in-5-leave-active  {
  transition-duration: 0.4s;
  transition-property: transform opacity;
  transition-timing-function: ease;
}

.slide-in-1-enter-active {
    transition-delay: 0.15s;
}

.slide-in-2-enter-active {
    transition-delay: 0.25s;
}
.slide-in-3-enter-active {
    transition-delay: 0.35s;
}
.slide-in-4-enter-active {
    transition-delay: 0.5s;
}

.slide-in-5-enter-active {
    transition-delay: 0.75s;
}


.slide-in-1-enter,
.slide-in-2-enter,
.slide-in-3-enter,
.slide-in-4-enter
.slide-in-5-enter{ 
  transform: translateX(-10px);
  opacity: 0;
}
.slide-in-1-leave-active,
.slide-in-2-leave-active,
.slide-in-3-leave-active,
.slide-in-4-leave-active,
.slide-in-5-leave-active {
  transform: translateX(0px);
  opacity: 1;
}
</style>