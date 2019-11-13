<template>
    <div>
        <H2>Recommendations</H2>
        <form @submit.prevent="handleSubmit">
            <Detail>ID</Detail>
            <P>{{this.album.id}}</P>
             <Select v-model="album.collection"  name="collection">
                    <option value="" selected>Choose a collection</option>
                    <option value="current-rotation">Current Rotation</option>
                    <option value="quiet">Quiet Time</option>
                    <option value="fight-me">Fight Me</option>
            </Select>
            <Flex>
                <TextInput v-model="album.title"  placeholder="Title" name="title" type="text" />
                <TextInput v-model="album.artist"  placeholder="Artist" name="artist" type="text" />
            </Flex>
            <Flex>
                <TextInput v-model="album.genre"  placeholder="Genre" name="grenre" type="text" />
                <TextInput v-model="album.subgenre"  placeholder="Subgenre" name="subgrenre" type="text" />
            </Flex>
            <Flex>
                <TextInput v-model="album.year"  placeholder="Release Year" name="year" type="text" />
                <TextInput v-model="album.length"  placeholder="Length in minutes (just digits)" name="length" type="text" />
            </Flex>
           
            <TextInput v-model="album.link"  placeholder="Link to album" name="link" type="text" />
            <TextArea v-model="album.opinion" placeholder="What did you like about it?" name="opinion" />
            <Button>Add Album</Button>
        </form>
    </div>
</template>

<script>
import { database } from '../../database'

import { H2, P, Detail, TextInput, TextArea, Select, Button } from '../typography'
import { Flex } from './layout'

export default {
    name: 'Form',
    components: {
        H2,
        P,
        Detail,
        Flex,
        TextInput,
        Button,
        TextArea,
        Select,
    },
    data() {
        return {
            album: {
                title: '',
                artist: '',
                year: '',
                length: '',
                genre: '',
                subgenre: '',
                collection: '',
                link: '',
                opinion: '',
                id: '',
            },
        }
    },
    props: {
        margin: String
    },
    created() {
        const newID = this.generateRandomString(12)
        this.album.id = newID;
    },
    methods: {
        handleSubmit(){ database
                            .collection('album-collections')
                            .doc(this.album.collection)
                            .collection('albums')
                            .add(this.album)           
        },
        generateRandomString (length) {
            const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            let text = "";
            for (var i = 0; i < length; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text
        }
    }
}
</script>