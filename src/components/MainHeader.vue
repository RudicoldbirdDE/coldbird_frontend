<template>
  <div id="HeaderWrapper">
    <div id="HeaderBackgroundWrapper">
      <vs-row w="12">
        <vs-col offset="4" lg="4" id="title">
          Coldbird
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  props: {
    msg: String
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@300&display=swap');

#HeaderWrapper {
  background-image: url("../assets/background_main.jpg");
  width: 100%;
  height: 100%;
  background-size: cover;
}
#title {
  font-family: 'Dosis', sans-serif;
  color: #003e9a;
  font-size: 50px;
}
#HeaderBackgroundWrapper {
  background-color: rgba(0, 0, 0, 0.80);
  width: 100%;
  height: 100%;
}
@media (min-width: 790px) {
  #title {
    padding-top: 25vh;
  }
}
@media (max-width: 790px) {
  #title {
    padding-top: 10vh;
  }
}
</style>
