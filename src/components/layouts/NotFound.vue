<template>
    <Centered>
        <H1>404</H1>
        <Detail>Hmmm, maybe double-check that URL?</Detail>
    </Centered>
</template>

<script>
import styled from 'vue-styled-components'
import { H1, Detail } from '../typography'

const Centered = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: center;
    text-align: center;
    justify-content: center;
`;

export default {
    name: 'NotFound',
    components: {
        H1,
       Detail,
       Centered
    },
}

</script>