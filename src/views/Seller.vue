<template>
  <div class="home">
    <Navigation></Navigation>
    <Background> </Background>
    <div style="padding-top: 10%"></div>
    <div class="center">
      <table>
        <tr>
          <td class="label">Author:</td>
          <td>
            <input type="text" name="author" v-model="author_search" />
          </td>
        </tr>
        <tr>
          <td class="label">Book:</td>
          <td>
            <input type="text" name="book" v-model="book_search" />
          </td>
        </tr>

        <tr>
          <td colspan="2">
            <button class="btn" @click="search()">SEARCH</button>
          </td>
        </tr>
      </table>
      <br />
      <div style="padding-right: 20%"></div>
      <table>
        <tr>
          <td class="label">Author:</td>
          <td>
            <input type="text" name="author" v-model="author" />
          </td>
        </tr>
        <tr>
          <td class="label">Book:</td>
          <td>
            <input type="text" name="book" v-model="book" />
          </td>
        </tr>
        <tr>
          <td class="label">Summary:</td>
          <td>
            <textarea name="summary" v-model="summary" />
          </td>
        </tr>
        <tr>
          <td class="label">Publication year:</td>
          <td>
            <input type="text" name="year" v-model="year" />
          </td>
        </tr>
        <tr>
          <td class="label">Number of pages:</td>
          <td>
            <input type="text" name="num_pages" v-model="num_pages" />
          </td>
        </tr>
        <tr>
          <td class="label">Add image:</td>
          <td></td>
        </tr>

        <tr>
          <td colspan="2">
            <button class="btn" @click="add()">ADD</button>
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
import books from "../data/books.js";

export default {
  name: "Seller",
  components: {
    Background,
    Navigation,
  },
  data() {
    return {
      author_search: "",
      book_search: "",
      author: "",
      book: "",
      summary: "",
      year: "",
      num_pages: "",
      books: [],
    };
  },
  methods: {
    search() {
      if (this.author_search == "" || this.book_search == "") {
        alert("Author and book can't be empty for search!");
        return;
      }
      let book = this.books.find(
        (book) =>
          book.author == this.author_search && book.name == this.book_search
      );
      if (book == null) {
        alert("There is no book with this author and name!");
        return;
      }
      console.log(book);
      this.$router.push("/book_details/" + book.id);
    },
    add() {
      if (
        this.author == "" ||
        this.book == "" ||
        this.summary == "" ||
        this.year == "" ||
        this.num_pages == ""
      ) {
        alert("Fields can't be empty for search!");
        return;
      }
      let book = this.books.find(
        (book) =>
          book.author == this.author && book.name == this.book
      );
      if (book != null) {
        alert("This book already exists!");
        return;
      }
      let id = books[books.length - 1].id + 1;
      this.books.push({
        id: id,
        author: this.author,
        name: this.book,
        description: this.summary,
        published: this.year,
        pages: this.num_pages,
        promotion: "",
        users: [],
        recommendation: [],
      });
      localStorage.setItem("books", JSON.stringify(this.books));
      console.log(this.books);
    },
  },
  mounted() {
    if (localStorage.getItem("books") != null) {
      this.books = JSON.parse(localStorage.getItem("books"));
    } else {
      this.books = books;
    }
  },
};
</script>
