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
          <div class="offset-xl-3 col-xl-3 offset-2">
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
          <div class="offset-xl-3 col-xl-6 offset-1 content_handle">
            <div class="content_address">
              <span class="address_title">Privacy Policy</span>
              <div class="address_text">
                <policy_text></policy_text>
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
import policy_text from "@/components/policy_text";
export default {
  name: "Policy",
  components: {
    HeadNavigation,
    policy_text,
    Footer
  }
}
</script>

<style scoped>
@import "../assets/css/policy.css";
</style>