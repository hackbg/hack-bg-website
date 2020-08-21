<template>
  <div>
    <ul>
      <li v-for="{node} in comments" :key="node.id">{{node}}</li>
    </ul>
    <!-- <ul>
      <li v-for="comment in getComments(post)" :key=""></li>
    </ul>-->
  </div>
</template>

<static-query>
    query {
  comments: allWordPressComment(
    sortBy: "date"
    order: ASC
  ) {
      edges {
        node {
        id
        post
        parent
        author
        authorName
        authorUrl
        date
        dateGmt
        content
        link
        status
        type
        authorAvatarUrls {
          _96
          }
        }
      }
    }
  }
</static-query>

<script>
export default {
  props: {
    post: {
      type: String,
      required: true,
    },
  },
  computed: {
    comments() {
      return this.$static.comments.edges.filter(
        (e) => this.post === e.node.post.toString()
      );
    },
  },
};
</script>