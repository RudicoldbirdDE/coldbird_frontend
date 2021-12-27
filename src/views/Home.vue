<template>
  <div class="home" style="overflow-x: hidden;">
    <MainPage></MainPage>
    <FeaturePage></FeaturePage>
    <Team></Team>
  </div>
</template>

<script>
// @ is an alias to /src
import MainPage from '@/components/MainPage.vue'
import FeaturePage from "@/components/FeaturePage";
import Team from "@/components/Team";

export default {
  name: 'Home',
  components: {
    FeaturePage,
    MainPage,
    Team
  }
}
</script>
