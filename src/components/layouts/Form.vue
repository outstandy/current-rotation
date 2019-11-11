<template>
    <div>
        <form>
            <input v-model="title" name="title" type="text" />
            <input v-model="artist" name="artist" type="text" />
            <input v-model="genre" name="grenre" type="text" />
            <input v-model="subgenre" name="subgrenre" type="text" />
            <input v-model="year" name="year" type="text" />
            <input v-model="length" name="length" type="text" />
            <input v-model="collection" name="collection" type="text" />
            <button>Add</button>
        </form>
    </div>
</template>

<script>

export default {
    name: 'Form'
}
</script>