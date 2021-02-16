<template>
    <ul class="card-body-list">
        <li>Liczba miejsc: {{ places }}/{{ max }}</li>
        <li>Data: {{ date }}</li>
        <li>Godzina: {{ time }}</li>
    </ul>
</template>

<script>
export default {
    props: ["max", "date", "time", "places"],

    data() {
        return {};
    },
};
</script>

<style>
.card-body-list {
    list-style-type: none;
    list-style-position: outside;
    padding-inline: 0;
    line-height: 1.5em;
    padding-bottom: 1em;
}
</style>