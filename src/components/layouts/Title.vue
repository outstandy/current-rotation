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
           I love swapping music with pals, but often I'm too self conscious to get into exactly what I listen to and why.
        </P>
        </transition>
        <transition
            appear
            name="slide-in-3"
            mode="out-in"
            >
        <P class="body">tl;dr I didn't wanna make a blog so I built this instead 🙃</P>
        </transition>
        <Detail>Made by Andy Birch</Detail>
        <Detail>Visit me on <a href="#">Twitter</a></Detail>
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
.slide-in-1-leave-active,
.slide-in-2-leave-active,
.slide-in-3-leave-active  {
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

.slide-in-1-enter,
.slide-in-2-enter,
.slide-in-3-enter {
  transform: translateY(10px);
  opacity: 0;
}
.slide-in-1-leave-active,
.slide-in-2-leave-active,
.slide-in-3-leave-active {
  transform: translateY(0px);
  opacity: 1;
}

</style>