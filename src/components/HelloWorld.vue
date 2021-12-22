<template>
  <div id="HeaderWrapper">
    <div id="HeaderBackgroundWrapper">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-xl-7 col-12" id="title">
            <span id="title_name">Coldbird</span> - We code. For your projects.
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-xl-10 col-10 offset-1" id="title_description">
            Many agencies talk about digitalization and modernization. We don't talk about it, we prefer to develop code. Every day. For your projects.
            We also talk very personally with our partners and coordinate the technologies used according to their needs. Always on the pulse of time and the state of the art
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Main',
  components: {
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@300&display=swap');

#HeaderWrapper {
  background-image: url("../assets/background_main.webp");
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  background-attachment: fixed;
}
#title_name {
  color: #003e9a;
}
#title, #title_description {
  color: #9d9d9d;
  font-family: 'Dosis', sans-serif;
}
#title_description {
  font-size: 25px;
  text-align: center;
}
#title {
  text-align: center;
  font-size: 50px;
}
#HeaderBackgroundWrapper {
  background-color: rgba(0, 0, 0, 0.80);
  width: 100%;
  min-height: 100vh;
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
