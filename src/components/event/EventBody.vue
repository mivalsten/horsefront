<template>
    <ul class="card-body-list">
        <li>Liczba uczestników: {{ places }}/{{ max }}</li>
        <li>Data: {{ date }}</li>
        <li>Godzina: {{ time }}</li>
        <li>System: {{ system }}</li>
        <li>Mistrz Gry: {{ organizer }}</li>
    </ul>
</template>

<script>
export default {
    props: ["max", "date", "time", "places", "system", "organizer"],

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