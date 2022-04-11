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
            <button class="btn" @click="change()">CHANGE DATA</button>
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
  name: "ChangeData",
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
      user: {},
      users: [],
    };
  },
  methods: {
    change() {
      if (
        this.name == "" &&
        this.surname == "" &&
        this.phone == "" &&
        this.address == "" &&
        this.username == "" &&
        this.password == ""
      ) {
        alert("Fields can't be empty!");
        return;
      }
      if (this.name != "") {
        this.users[this.user.id].name = this.name;
      }
      if (this.surname != "") {
        this.users[this.user.id].surname = this.surname;
      }
      if (this.phone != "") {
        this.users[this.user.id].phone = this.phone;
      }
      if (this.address != "") {
        this.users[this.user.id].address = this.address;
      }
      if (this.username != "") {
        let user_help = this.users.find(
          (user) => user.username == this.username
        );
        if (user_help != null) {
          alert("This username is already used!");
          return;
        }
        this.users[this.user.id].username = this.username;
      }
      if (this.password != "") {
        this.users[this.user.id].password = this.password;
      }
      localStorage.setItem("users", JSON.stringify(this.users));
      alert("Data is changed successfully!");
    },
  },
  mounted() {
    if (localStorage.getItem("users") != null) {
      this.users = JSON.parse(localStorage.getItem("users"));
    } else {
      this.users = users;
    }
    this.user = JSON.parse(localStorage.getItem("user"));
    this.user = this.users.find((user) => user.id == this.user.id);
  },
};
</script>