<template>
    <router-link
        tag="div"
        :to="{
            name: 'album', 
            params: { albumId: id, collectionId: collection, recommended: recommendations }}">
        <AlbumRow :class="genre">
            <AlbumInfo>
                <transition appear name="slide-in" mode="out-in">
                    <P>{{title}}</P>
                </transition>
                <Detail>{{year}} · {{length}} minutes</Detail>
            </AlbumInfo>
            <AlbumInfo>
                <P>{{artist}}</P>
            </AlbumInfo>
            <AlbumInfo>
                <P>{{genre}}</P>
                <Detail>{{subgenre}}</Detail>
            </AlbumInfo>
        </AlbumRow>
    </router-link>
</template>

<script>
import styled from 'vue-styled-components';
import { P, Detail } from "./typography"
import { colors, gradients } from "./variables"

/* eslint-disable no-console */
const AlbumRow = styled.div`
    cursor: pointer;
    display: flex;
    padding: 2em 0;
    position: relative;
    border-bottom: 1px solid ${colors.black};
    &:after {
        content: '';
        position: absolute;
        width: 0;
        height: 1px;
        left: 0;
        bottom: 0;
        transition: all 0.3s ease;
        background: ${gradients.indie};
    }
    &:hover {
        &:after {
            width: 100%;
        }
    }
`;
/* eslint-enable no-console */

const AlbumInfo = styled.div`
    width: 33%;
    padding-right: 1rem;
`;

export default {
  name: 'AlbumList',
  components: {
    P,
    Detail,
    AlbumRow,
    AlbumInfo
  },
  props: {
    id: String,
    title: String,
    artist: String,
    genre: String,
    subgenre: {
        type: String,
        default: '--'
    },
    length: {
        type: String,
        default: 'Unknown'
    },
    year: String,
    collection: String
  },
  recommendations: {
      type: Array,
      default: ['No recommendations yet.']
  }
}
</script>

<style>
    
</style>