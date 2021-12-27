<template>
  <div id="HeaderWrapper">
    <div id="HeaderBackgroundWrapper" class="dFont">
      <HeadNavigation></HeadNavigation>
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-xl-7 col-10 offset-1 darkThemeTextColor text_center fonts_50 title_top25BG_top10SM">
            <span class="colorHighlight">Coldbird</span> - We code. For your projects.
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-xl-10 col-10 offset-1 darkThemeTextColor text_center fonts_25">
            Many agencies talk about digitalization and modernization. We don't talk about it, we prefer to develop code. Every day. For your projects.
            We also talk very personally with our partners and coordinate the technologies used according to their needs. Always on the pulse of time and the state of the art
          </div>
        </div>
      </div>
      <span class="scrollDownButton hideItem304" style="width: 100%;" @click="scroll('sFeatures')">
              <img alt="Scroll Down Icon" class="scrollDownIcon"  src="../assets/icons/chevron-circle-down.svg">
          </span>
    </div>
  </div>
</template>

<script>
import HeadNavigation from "@/components/HeadNavigation";
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
    HeadNavigation
  }
}
</script>

<style scoped>
@import '../assets/global.css';
#HeaderWrapper {
  background-image: url("../assets/background_main.webp");
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-attachment: fixed;
  background-size: cover;
}
#HeaderBackgroundWrapper {
  background-color: rgba(0, 0, 0, 0.80);
  width: 100%;
  min-height: 100vh;
  background-attachment: fixed;
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
