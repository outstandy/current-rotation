<template>
    <transition appear name="fade">
        <NavBar>
            <router-link class="nav-button" to="/" tag="div">
                <NavButton>
                    <Detail>Current Rotation</Detail>
                </NavButton>       
            </router-link>
            <router-link class="nav-button" to="/quiet-time" tag="div">
                <NavButton >
                    <Detail>Quiet Time</Detail>
                </NavButton>
            </router-link>
            <router-link class="nav-button" to="/fight-me" tag="div">
                <NavButton>
                    <Detail>Fight Me</Detail>
                </NavButton>
            </router-link>
        </NavBar>
    </transition>
</template>

<script>
import styled from 'vue-styled-components';
import { colors } from './variables';
import { Detail } from './typography';

const NavBar = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 2rem;
    justify-content: center;
    @media screen and (min-width: 1000px) {
        justify-content: start;
    }
    .router-link-exact-active div {
        p {
            color: ${colors.white} !important;
        }
    }
`;

const NavButton = styled.div`
    cursor: pointer;
    background: ${colors.lessBlack};
    box-shadow: 0px 0px 8px ${colors.black};
    border-radius: 3px;
    padding: 0.5rem;
    margin-right: 0.5rem;
    text-align: center;
    padding: 0.5rem;
    position: relative;
    transition: all 0.3s ease-in-out
    &:hover {
        transform: translateY(-2px);
    }
`;


export default {
  name: 'Nav',
  components: {
     NavBar,
     NavButton,
     Detail
  },
}
</script>