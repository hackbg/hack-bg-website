<template>
  <b-row tag="article">
    <b-col
      :data-first="post.title ? post.title.charAt(0) : ''"
      md="3"
      class="meta-data py-md-5 text-center position-relative d-flex"
    >
      <div class="mx-auto mb-2 position-relative">
        <formated-date class="post-date font-weight-bold" :date="post.date" />
        <i class="d-none d-md-block">in:</i>
        <categories-list class="mb-0" :categories="post.categories" />
        <div v-if="post.author">
          <i>by:</i>
          <g-link :to="post.author.path" class="font-weight-bold">{{ post.author.name }}</g-link>
        </div>
      </div>
    </b-col>
    <b-col class="mb-5 py-md-5">
      <slot>
        <b-row>
          <b-col>
            <g-link :to="post.path" class="text-dark">
              <h2 class="h1 post-title text-break mb-4" v-html="post.title" />
            </g-link>
            <div class="post-excerpt text-break mb-4" v-html="post.excerpt" />
            <read-more :post="post" />
          </b-col>
          <b-col
            v-if="post.featuredMedia"
            md="5"
            class="img-col m-0 p-0"
            :style="{ backgroundImage: `url(${post.featuredMedia.sourceUrl})` }"
          ></b-col>
        </b-row>
      </slot>
    </b-col>
  </b-row>
</template>

<script>
import CategoriesList from "~/components/CategoriesList.vue";
import FormatedDate from "~/components/FormatedDate.vue";
import ReadMore from "~/components/ReadMore.vue";

export default {
  components: {
    CategoriesList,
    FormatedDate,
    ReadMore,
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.img-col {
  height: inherit;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

@media (max-width: 768px) {
  .img-col {
    height: 200px;
  }
}
</style>
