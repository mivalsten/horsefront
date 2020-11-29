<template>
    <header class="card-header">
        {{ value }}
    </header>
</template>

<script>
export default {
    props: ["value"],
};
</script>

<style>
.card-header {
    font-weight: bold;
    font-size: 1.2em;
    height: 1.5em;
    border-bottom: 0.5px solid teal;
}
</style>