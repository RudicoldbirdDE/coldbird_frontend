<template>
  <div class="navigation_wrapper">
    <div class="container-fluid">
      <div class="row">
        <div class="offset-xxl-1 col-xxl-1 col-1 navigation_title">
          <router-link to="/" id="rDefault">
            <span style="color: #2a94f4">Cold</span>bird
          </router-link>
        </div>
        <div class="offset-xxl-6 col-xxl-3 offset-8 col-1 navigation_item">
          <img alt="Mobile Navigation Bar" class="mobileBar" src="../assets/icons/bars.svg" style="border-radius: 3px; border: 1px solid green; padding-right: 5px; padding-left: 5px; height: 30px; filter: invert(47%) sepia(90%) saturate(2055%) hue-rotate(188deg) brightness(97%) contrast(96%);">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeadNavigation"
}
</script>

<style scoped>
@import '../assets/css/global.css';

</style>