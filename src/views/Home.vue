<template>
  <div class="home" style="overflow-x: hidden;">
    <MainPage></MainPage>
    <FeaturePage></FeaturePage>
  </div>
</template>

<script>
// @ is an alias to /src
import MainPage from '@/components/MainPage.vue'
import FeaturePage from "@/components/FeaturePage";

export default {
  name: 'Home',
  components: {
    FeaturePage,
    MainPage
  }
}
</script>
