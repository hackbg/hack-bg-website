<template>
  <Layout>
    <b-row class="align-items-start">
      <transition name="fade" appear>
        <b-col tag="main" cols="12" lg="9" class="bg-white p-0 rounded shadow-lg">
          <div class="overflow-hidden p-4 p-sm-5">
            <h1 class="text-center text-uppercase h5 font-family-sans-serif mb-5">Latest Stories</h1>
            <Post :post="node" v-for="{ node } in $page.allWordPressPost.edges" :key="node.id" />
            <Pagination :info="$page.allWordPressPost.pageInfo" />
          </div>
        </b-col>
      </transition>
      <site-sidebar />
    </b-row>
  </Layout>
</template>

<page-query>
query Home($page: Int) {
  allWordPressPost(page: $page, perPage: 10) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        date
        id
        title
        path
        content
        excerpt
        categories {
          id
          title
          path
        }
        author {
          name
          path
        }
        featuredMedia {
          sourceUrl
          altText
        }
      }
    }
  }
}
</page-query>

<script>
import Post from "~/components/Post.vue";
import Pagination from "~/components/Pagination.vue";
import SiteSidebar from "~/components/SiteSidebar.vue";

export default {
  components: {
    Post,
    Pagination,
    SiteSidebar,
  },
  metaInfo: {
    title: "Latest Stories",
  },
};
</script>
