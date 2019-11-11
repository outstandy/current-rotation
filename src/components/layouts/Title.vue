<template>
    <TitleFlex>
        <transition
            appear
            name="slide-in-1"
            mode="out-in"
            >
        <H1>
            Constant <br /> Rotation
        </H1>
        </transition>
        <transition
            appear
            name="slide-in-2"
            mode="out-in"
            >
        <P class="body">
           Lately I've been real curious to look more closely at the music I listen to. What makes a particular album work for me? What are trends and patterns in what I listen to?
        </P>
        </transition>
        <transition
            appear
            name="slide-in-3"
            mode="out-in"
            >
            <P class="body">
                Anyway I wrote a bunch of stuff about albums I've been listening to lately. 
            </P>
        </transition>
         <transition
            appear
            name="slide-in-4"
            mode="out-in"
            >
            <P class="body">tl;dr I didn't wanna make a blog so I built this instead 🙃</P>
         </transition>
        <Detail>Built by <a href="https://twitter.com/outstandy">Andy Birch</a> with <a href="https://vuejs.org/">Vue</a> & <a href="https://firebase.google.com/">Firestore</a>.</Detail>
    </TitleFlex>
</template>

<script>
import { H1, P, Detail} from "../typography"
import { TitleFlex } from "./layout"
export default {
    name: 'Title',
    components: {
        TitleFlex,
        H1,
        P,
        Detail
    },
}
</script>

<style scoped>



.slide-in-1-enter-active,
.slide-in-2-enter-active,
.slide-in-3-enter-active,
.slide-in-4-enter-active,
.slide-in-1-leave-active,
.slide-in-2-leave-active,
.slide-in-3-leave-active,
.slide-in-4-leave-active  {
  transition-duration: 0.4s;
  transition-property: transform opacity;
  transition-timing-function: ease;
}

.slide-in-2-enter-active {
    transition-delay: 0.15s
}
.slide-in-3-enter-active {
    transition-delay: 0.3s
}

.slide-in-4-enter-active {
    transition-delay: 0.45s
}


.slide-in-1-enter,
.slide-in-2-enter,
.slide-in-3-enter,
.slide-in-4-enter {
  transform: translateY(10px);
  opacity: 0;
}
.slide-in-1-leave-active,
.slide-in-2-leave-active,
.slide-in-3-leave-active,
.slide-in-4-leave-active {
  transform: translateY(0px);
  opacity: 1;
}

</style>