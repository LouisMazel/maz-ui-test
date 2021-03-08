<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <br />
    <br />

    <!-- <MazGallery :images="[]" /> -->

    <br />
    <br />

    <MazBtn>
      Primary Button
    </MazBtn>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      value: false
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
