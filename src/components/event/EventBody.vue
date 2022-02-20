<template>
  <ul class="card-body-list">
    <li>Data: {{ date }}</li>
    <li>Godzina: {{ time }}</li>
    <li>System: {{ game }}</li>
    <li>Wolnych miejsc: {{ freePlaces }}</li>
    <li>MG: {{ organizer }}</li>
  </ul>
</template>

<script setup>
const props = defineProps({
  date: String,
  time: String,
  places: Number,
  game: String,
  freePlaces: Number,
  organizer: String,
  id: Number,
});
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
