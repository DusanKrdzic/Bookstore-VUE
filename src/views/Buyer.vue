<template>
  <div class="home">
    <Navigation></Navigation>
    <BookList></BookList>

    <header>
      <!-- The header content -->

    </header>
  </div>
</template>



<script>
// @ is an alias to /src

import Navigation from "../components/Navigation.vue";
import BookList from "../components/BookList.vue";

export default {
  name: "Buyer",
  components: {
    Navigation,
    BookList
  },
};
</script>