<template>

  <div id="book_list">
    <div class="col justify-content-right">
      <div class='row-sm-5' v-for="book in books" :key="book.id">
        <router-link :to="/book_details/ + book.id">
          <Book :book="book"></Book>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import books from "../data/books.js";
import Book from "./Book.vue";

export default {
  name: "BookList",
  components: {
    Book,
  },
  data() {
    return {
      books: [],
    };
  },
  mounted() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (localStorage.getItem("books") != null) {
      this.books = JSON.parse(localStorage.getItem("books"));
    } else {
      this.books = books;
    }
console.log(this.books);
    this.books = this.books.filter((book) => book.user == user.username);
    console.log(user.username)
    console.log(this.books);
  },
};
</script>