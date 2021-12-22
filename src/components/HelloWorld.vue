<template>
  <div id="HeaderWrapper" @scroll="handleFoo">
    <div id="HeaderBackgroundWrapper">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-xl-7 col-10 offset-1" id="title">
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
      <div class="container">
        <div class="row justify-content-md-center">
          <span id="scrollDownButton" @click="scroll('FeaturesWrapper')">
              <img alt="Scroll Down Icon" id="scrollDownIcon"  src="../assets/icons/chevron-circle-down.svg">
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MainPage',
  methods: {
    scroll(id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth"
      });
    }
  },
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
  height: 100%;
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
  background-attachment: fixed;
}
#scrollDownButton {
  position: absolute;
  bottom: 50px;
  text-align: center;
  filter: invert(12%) sepia(77%) saturate(3996%) hue-rotate(208deg) brightness(98%) contrast(104%);
}
#scrollDownIcon {
  width: 35px;
  height: 35px;
}
#scrollDownIcon:hover {
  width: 45px;
  height: 45px;
  transition: 0.5s;
  cursor: pointer;
}
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
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
