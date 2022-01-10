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
              Career
            </div>
            <div class="head_description">
              Make a career with us
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid career_content">
        <div class="row">
          <div class="offset-xl-3 col-xl-6 carrer_handle">
            <div class="container">
              <div class="row">
                <div class="offset-xl-1 col-xl-4 noJobsImage">
                  <img alt="No Jobs Available" src="../assets/icons/job_false.svg" style="width: 100%;">
                </div>
                <div class="offset-xl-1 col-xl-6 noJobs">
                  Unfortunately, there are currently no new positions available with us.
                  As soon as new positions are available, we will post them here. 
                </div>
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
@import "../assets/css/carrers.css";
</style>