<template>
  <div class="home">
    <Navigation></Navigation>

    <div class="book">
      <div class="card" style="width: 30%; background-color: burlywood">
        <img class="card-img-top" :src="'/img/img' + book.id + '.jpg'" />
        <div class="card-body">
          <h2 class="card-text">{{ book.name }}</h2>
          <h3 class="card-text">{{ book.author }}</h3>
          <h2 class="card-text" style="color: red">{{ book.promotion }}</h2>
          <h3 class="card-text">{{ book.description }}</h3>
        </div>
      </div>
    </div>
    <div class="center">
      <table>
        <tr>
          <td class="label">RATE:</td>
          <td>
            <input type="text" name="rate" placeholder="1-5" v-model="rate" />
          </td>
          <td colspan="2">
            <button class="btn" @click="rate_meth()">RATE</button>
          </td>
        </tr>

        <tr>
          <td class="label">COMMENT:</td>
          <td>
            <textarea name="comment" v-model="comment" />
          </td>
          <td colspan="2">
            <button class="btn" @click="comment_meth()">COMMENT</button>
          </td>
        </tr>
        <tr>
          <td colspan="4">
            <button class="btn" @click="recommend_meth()" style="width: 100%">
              RECOMMEND
            </button>
          </td>
        </tr>
      </table>
    </div>

    <div
      class="card"
      style="width: 18rem"
      v-for="comment in comments"
      :key="comment.id"
    >
      <div class="card-header" style="background-color: #d4f3f4">COMMENT</div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item" style="background-color: burlywood">
          USER: {{ comment.username }}
        </li>
        <li class="list-group-item" style="background-color: burlywood">
          COMMENT: {{ comment.comment }}
        </li>
        <li class="list-group-item" style="background-color: burlywood">
          RATE: {{ comment.rate }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.card-text {
  color: black;
  font-size: 100%;
}

.card {
  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */
}

.book {
  padding-top: 10%;
}

.btn {
  background-color: burlywood;
}

.label {
  color: white;
  font-weight: bold;
}

.center {
  position: static;
  height: 50%;
  min-height: 25rem;
  width: 100%;
  overflow: hidden;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
}
</style>

<script>
import books from "../data/books.js";
import Navigation from "../components/Navigation.vue";
import comments from "../data/comments";

export default {
  name: "BookDetails",
  components: {
    Navigation,
  },
  data() {
    return {
      books: [],
      book: {},
      rate: "",
      comment: "",
      comments: [],
    };
  },
  methods: {
    rate_meth() {
        let user = JSON.parse(localStorage.getItem("user"));
        let new_comment = this.comments.filter(
      (comment) => comment.username == user.username
    );

    if (new_comment == null){
        comments.push({id:5,book:this.book.id, comment:"", rate:this.rate})
    }
        
    },
    comment_meth(){

    },
    recommend_meth(){

    },
  },
  mounted() {
    let book_id = this.$route.params.id;
    if (localStorage.getItem("books") != null) {
      this.books = JSON.parse(localStorage.getItem("books"));
    } else {
      this.books = books;
    }
    if (localStorage.getItem("comments") != null) {
      this.comments = JSON.parse(localStorage.getItem("comments"));
    } else {
      this.comments = comments;
    }

    this.book = this.books.find((book) => book.id == book_id);
    this.comments = this.comments.filter(
      (comment) => comment.book == this.book.id
    );
    console.table(this.comments);
  },
};
</script>