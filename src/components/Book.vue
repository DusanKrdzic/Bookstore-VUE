<template>
  <div id="book">
    <div class="card" style="width: 30%; background-color: burlywood">
      <img class="card-img-top" :src="'/img/img' + book.id + '.jpg'" />
      <div class="card-body">
        <h2 class="card-text">{{ book.name }}</h2>
        <h3 class="card-text">{{ book.author }}</h3>
        <h2 class="card-text" style="color: red" v-if="this.context == 'buyer'">
          {{ book.promotion }}
        </h2>
        <h2 class="card-text" v-if="context == 'recommendations'">
          Recommended from:
          <li v-for="elem in recommendation" :key="elem.from">
            {{ elem }}
          </li>
        </h2>
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
  props: ["book", "context"],
  data() {
    return {
      recommendation: [],
    };
  },
  mounted() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (this.context == "recommendations") {
      let recommendations = this.book.recommendation.filter(
        (val) => val.to == user.username
      );
      recommendations.forEach((element) => {
        this.recommendation.push(element.from);
      });
    }
  },
};
</script>