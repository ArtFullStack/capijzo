<template>
    <div class="wrapper">
        <Header/>
        <Sidebar/>
        <Snippets/>
    </div>
</template>

<script>

    import Header from '../../layouts/Header'
    import Sidebar from '../../layouts/Sidebar'
    import Snippets from "../snippet";

    export default {
        mounted() {
            console.log('Component mounted.')
        },
        components: {
            Snippets,
            Header,
            Sidebar
        },
    }
</script>

<style scoped>
    .filter-snippets .dropdown-item{
        padding: 12px 24px;
    }

    .moreCategory button{
        width: 88px;
        height: 32px;
    }
</style>
