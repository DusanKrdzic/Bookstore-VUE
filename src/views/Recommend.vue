<template>
  <div class="home">
    <Navigation></Navigation>
    <Background> </Background>

    <div class="center">
      <table>
        <tr v-for="elem in users" :key="elem.username">
          <td
            style="color: burlywood; font-size: 200%"
            v-if="elem.username != user.username"
          >
            {{ elem.username }}
          </td>
          <td
            colspan="2"
            style="padding-left: 50%"
            v-if="elem.username != user.username"
          >
            <button class="btn" @click="recommend(elem.username)">
              RECOMMEND
            </button>
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
import books from "../data/books.js";

export default {
  name: "Recommend",
  components: {
    Background,
    Navigation,
  },
  data() {
    return {
      users: [],
      book: {},
      user: {},
      books: [],
    };
  },
  methods: {
    recommend(to) {
      let recommend = this.books[this.book.id].recommendation.find(
        (elem) => elem.from == this.user.username && elem.to == to
      );
      if (recommend != null) {
        alert("You already recommend this book to this user!");
        return;
      }
      this.books[this.book.id].recommendation.push({
        from: this.user.username,
        to: to,
      });
      localStorage.setItem("books", JSON.stringify(this.books));
      alert("Book is succesfully recommended!");
    },
  },
  mounted() {
    if (localStorage.getItem("users") != null) {
      this.users = JSON.parse(localStorage.getItem("users"));
    } else {
      this.users = users;
    }
    if (localStorage.getItem("books") != null) {
      this.books = JSON.parse(localStorage.getItem("books"));
    } else {
      this.books = books;
    }
    this.book = JSON.parse(localStorage.getItem("book"));
    this.book = this.books.find((book) => book.id == this.book.id);
    this.user = JSON.parse(localStorage.getItem("user"));
  },
};
</script>