<template>
  <div class="home">
    <Navigation></Navigation>
    <Background> </Background>

    <header>
      <!-- The header content -->
      <div class="container h-100">
        <div class="d-flex h-100 text-center align-items-center">
          <div class="w-100">
            <h1 class="display-3">{{ message }}</h1>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<style>
header {
  position: static;
  height: 75vh;
  min-height: 25rem;
  width: 100%;
  overflow: hidden;
}

header .container {
  position: relative;
  z-index: 2;
}

.display-3 {
  color: burlywood;
}
</style>
<script>
// @ is an alias to /src
import Background from "../components/Background.vue";
import Navigation from "../components/Navigation.vue";

export default {
  name: "Success",
  components: {
    Background,
    Navigation,
  },
  data() {
    return {
      message: "",
    };
  },
  mounted() {
    this.message = JSON.parse(localStorage.getItem("success_message"));
    console.log(this.message);
  },
};
</script>
