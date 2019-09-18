<template>
    <div id = "Foo">
        {{ msg }}
    </div>
</template>

<script>
    export default {
        name: "Foo",
        data () {
            return {
                msg: 'Welcome to Foo'
            }
        }
    }
</script>

<style scoped>

</style>