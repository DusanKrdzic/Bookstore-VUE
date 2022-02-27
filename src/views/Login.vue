<template>
  <div class="home">
    <Navigation></Navigation>
    <Background> </Background>

    <div class="center">
      <table>
        <tr>
          <td class="label">Username:</td>
          <td>
            <input type="text" name="username" v-model="username" />
          </td>
        </tr>
        <tr>
          <td class="label">Password:</td>
          <td>
            <input type="text" name="password" v-model="password" />
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <button class="btn" @click="login()">LOGIN</button>
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
  name: "Login",
  components: {
    Background,
    Navigation,
  },
  data() {
    return {
      username: "",
      password: "",
      type: "",
      users: [],
    };
  },
  methods: {
    login() {
      let user = this.users.find(
        (user) =>
          user.username == this.username && user.password == this.password
      );

      if (user == null) {
        alert("There is no user with this credential!");
        return;
      }
      if (this.username == "" || this.password == "") {
        alert("Field can't be empty!");
        return;
      }

      localStorage.setItem("user", JSON.stringify(user));

      this.$router.push(user.type);
    },
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
