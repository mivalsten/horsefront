<template>
    <main>
        <router-view />
    </main>
</template>

<script>
export default {};
</script>

<style>
@media screen {
    main {
        padding: 0.5em;
    }
}
@media screen and (min-width: 660px) {
    main {
        padding: 0.5em;
    }
}

@media screen and (min-width: 900px) {
    main {
        padding: 1.5em;
    }
}

@media screen and (min-width: 1600px) {
    main {
        padding: 1em 3em;
    }
}
</style>