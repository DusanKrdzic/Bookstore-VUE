<template>
  <!-- This div is  intentionally blank. It creates the transparent black overlay over the video which you can modify in the CSS -->
  <div class="overlay"></div>
</template>

<style>
body {
  background: url("../assets/book_feather.jpg");
  height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.overlay {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.5;
  z-index: 1;
}
</style> 

<script>
// @ is an alias to /src

export default {
  name: "Background",
};
</script>