<template>
  <div class="home">
    <Navigation></Navigation>
    <Background> </Background>

    <div class="center">
      <table>
        <tr v-for="user in users" :key="user.username">
          <td>
            {{ user.username }}
          </td>
          <td colspan="2">
            <button class="btn" @click="recommend()">RECOMMEND</button>
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

.label {
  color: burlywood;
}
</style>
<script>
// @ is an alias to /src
import Background from "../components/Background.vue";
import Navigation from "../components/Navigation.vue";
import users from "../data/users.js";

export default {
  name: "Recommend",
  components: {
    Background,
    Navigation,
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    recommend() {/*TODO*/},
  },
  mounted() {
    if (localStorage.getItem("users") != null) {
      this.users = JSON.parse(localStorage.getItem("users"));
    } else {
      this.users = users;
    }
  },
};
</script>