<template>
    <div class="event-list">
        <event-container v-for="n in 10" :key="n"></event-container>
    </div>
</template>

<script>
import EventContainer from "./EventContainer.vue";
export default {
    components: { EventContainer },
};
</script>

<style>
.event-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    box-sizing: border-box;
}
</style>