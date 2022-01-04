<template>
  <div class="footer_main" style="min-height: 20vh; background-color: #0e0e10; position: relative">
    <div class="container-fluid">
      <div class="row justify-content-md-center footer_item">
        <div class="col-xxl-3 offset-xxl-3 offset-sm-0 col-12">
          <ul id="footer_list">
            <li class="listItem">
              <div class="other_item"></div>Imprint
            </li>
            <li class="listItem">
              <div class="other_item"></div>Cookies Policy
            </li>
            <li class="listItem">
              <div class="other_item"></div>Career with us
            </li>
          </ul>
        </div>
        <div class="col-xxl-3 offset-xxl-3 col-6 offset-3 col-md-4 social">
          <div id="socialsHeader">
            ... find us on ...
          </div>
          <div id="socials" >
            <div id="twitter_icon" class="ficon">
              <img alt="Twitter Icon" src="../assets/icons/twitter.svg" style="width: 45px; pointer-events: none;">
            </div>
            <div id="facebook_icon" class="ficon">
              <img alt="Twitter Icon" src="../assets/icons/facebook.svg" style="width: 45px; pointer-events: none;">
            </div>
            <div id="instagram_icon" class="ficon">
              <img alt="Twitter Icon" src="../assets/icons/instagram.svg" style="width: 45px; pointer-events: none;">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid brights">
      <div class="row justify-content-md-center">
        <div class="col-xxl-12">
          &copy; Coldbird 2022 - All Rights reserved
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer"
}
</script>

<style scoped>
@import '../assets/global.css';
</style>