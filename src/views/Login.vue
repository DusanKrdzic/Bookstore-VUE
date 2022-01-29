

<template>
  <div class="home">
    <Navigation></Navigation>
    <Background> </Background>

    <div class="center">
      <table>
        <tr>
          <td class="label">Username:</td>
          <td>
            <input type="text" name="username" v-model="id" />
          </td>
        </tr>
        <tr>
          <td class="label">Password:</td>
          <td>
            <input type="text" name="password" v-model="naziv" />
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <button class="btn" @click="dodaj()">Login</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style>
.center {
  position: static;
  height: 75vh;
  min-height: 25rem;
  width: 100%;
  overflow: hidden;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
}

.btn {
  background-color: burlywood;
}

.label{
    color: burlywood;
}
</style>

<script>
// @ is an alias to /src
import Background from "../components/Background.vue";
import Navigation from "../components/Navigation.vue";

export default {
  name: "Login",
  components: {
    Background,
    Navigation,
  },
};
</script>