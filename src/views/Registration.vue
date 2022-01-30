<template>
  <div class="home">
    <Navigation></Navigation>
    <Background> </Background>

    <div class="center">
      <table>
        <tr>
          <td class="label">Name:</td>
          <td>
            <input type="text" name="Name" v-model="name" />
          </td>
        </tr>
        <tr>
          <td class="label">Surname:</td>
          <td>
            <input type="text" name="surname" v-model="surname" />
          </td>
        </tr>
        <tr>
          <td class="label">Phone:</td>
          <td>
            <input type="text" name="phone" v-model="phone" />
          </td>
        </tr>
        <tr>
          <td class="label">Address:</td>
          <td>
            <input type="text" name="address" v-model="address" />
          </td>
        </tr>
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
            <button class="btn" @click="register()">REGISTER</button>
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
  name: "Registration",
  components: {
    Background,
    Navigation,
  },
  data() {
    return {
      name: "",
      surname: "",
      phone: "",
      address: "",
      username: "",
      password: "",
      users: [],
    };
  },
  methods: {
    register() {
      let user = this.users.find(
        (user) =>
          user.username == this.username || user.password == this.password
      );
      if (user != null) {
        alert("This user already exists, try again!");
        return;
      }
      if (
        this.name == "" ||
        this.surname == "" ||
        this.phone == "" ||
        this.address == "" ||
        this.username == "" ||
        this.password == ""
      ) {
        alert("Field can't be empty!");
        return;
      }
      this.users.push({
        name: this.name,
        surname: this.surname,
        phone: this.phone,
        address: this.address,
        username: this.usernam,
        password: this.password,
      });

      localStorage.setItem("users", JSON.stringify(this.users));
      localStorage.setItem("success_message",JSON.stringify("REGISTRATION SUCCESS!"))
      this.$router.push('success')
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
