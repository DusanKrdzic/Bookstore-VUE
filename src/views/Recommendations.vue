<template>
  <div class="home">
    <Navigation></Navigation>
    <BookList :context="'recommendations'"></BookList>
    <header></header>
  </div>
</template>

<style>
.btn {
  background-color: burlywood;
}

.btn-space {
  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 50px; /* Added */
  width: 40%;
}
</style>

<script>
// @ is an alias to /src

import Navigation from "../components/Navigation.vue";
import BookList from "../components/BookList.vue";

export default {
  name: "Recommendations",
  components: {
    Navigation,
    BookList,
  },
  data() {
    return {
      user: null,
    };
  },
  methods: {},
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
  },
};
</script>