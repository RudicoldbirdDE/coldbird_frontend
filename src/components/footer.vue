<template>
  <div class="footer_main" style="min-height: 20vh; background-color: #0e0e10; position: relative">
    <div class="container-fluid">
      <div class="row justify-content-md-center footer_item">
        <div class="offset-lg-0 col-lg-3 offset-md-0 col-md-4 offset-sm-0 col-sm-5 footeri">
          <ul id="footer_list">
            <li class="listItem">
              <router-link to="/imprint">
                <div class="other_item"></div>Imprint
              </router-link>
            </li>
            <li class="listItem">
              <router-link to="/policy">
                <div class="other_item"></div>Cookies Policy
              </router-link>
            </li>
            <li class="listItem">
              <router-link to="/carrers">
                <div class="other_item"></div>Career with us
              </router-link>
            </li>
          </ul>
        </div>
        <div class="offset-lg-4 col-lg-3 offset-md-2 col-md-4 offset-sm-1 col-sm-5 social">
          <div id="socialsHeader">
            ... find us on ...
          </div>
          <div id="socials">
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
@import '../assets/css/global.css';
</style>