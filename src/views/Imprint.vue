<template>
  <div class="wrapper" style="overflow-x: hidden;">
    <div class="background_wp">
      <div class="background" style="position: relative">
        <HeadNavigation style="position: absolute; bottom: 0; width: 100%"></HeadNavigation>
      </div>
    </div>
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="offset-xl-3 col-xl-3">
            <div class="head_title">
              Imprint
            </div>
            <div class="head_description">
              Transparency is our top priority
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="offset-xl-3 col-xl-3 content_handle">
            <div class="content_address">
              <span class="address_title">Address | Responsible</span>
              <div class="address_text">
                <ul style="list-style: none" id="address_list">
                  <li>Coldbird</li>
                  <li>On request</li>
                  <li>admin@coldbird.cc</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import HeadNavigation from "@/components/HeadNavigation";
import Footer from "@/components/footer";

export default {
  name: "Imprint",
  components: {
    HeadNavigation,
    Footer
  }
}
</script>

<style scoped>
@import "../assets/css/legacyd.css";
@import "../assets/css/policy.css";
</style>