<template>
  <div id="book_list">
    <div class="col-sm-12">
      <div
        class="row justify-content-center"
        style="padding-top: 50px; padding-bottom: 100px"
        v-for="book in books"
        :key="book.id"
      >
        <router-link
          :to="'book_details/'+book.id"
          style="text-decoration: none"
          v-if="context == 'buyer'"
        >
          <Book :book="book" :context="context"> </Book>
        </router-link>
        <div
          v-if="context == 'recommendations'"
          style="text-decoration: none"
        >
          <Book :book="book" :context="context"> </Book>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import books from "../data/books.js";
import Book from "./Book.vue";

export default {
  name: "BookList",
  props: ["context"],
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
    if (this.context == "buyer")
      this.books = this.books.filter((book) =>
        book.users.some((username) => username == user.username)
      );
    else if (this.context == "recommendations") {
      this.books = this.books.filter((book) =>
        book.recommendation.some((val) => val.to == user.username)
      );
    }
  },
};
</script>