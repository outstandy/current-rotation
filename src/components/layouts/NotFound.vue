<template>
    <div>
        <H2>404</H2>
        <P>Hmmm, maybe double-check that URL?</P>
    </div>
</template>

<script>
import { H2, P } from '../typography'

export default {
    name: 'NotFound',
    components: {
        H2,
       P
    },
}
</script>