<template>
  <div id="book">
    <div class="card" style="width: 30%; background-color: burlywood">
      <img class="card-img-top" :src="'/img/img' + book.id + '.jpg'" />
      <div class="card-body">
        <h2 class="card-text">{{ book.name }}</h2>
        <h3 class="card-text">{{ book.author }}</h3>
        <h2 class="card-text" style="color: red">{{ book.promotion }}</h2>
      </div>
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
</style>

<script>
export default {
  name: "Book",
  props: ["book"],
};
</script>