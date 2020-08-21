<template>
  <div id="comments" class="comments-area">
    <h2 v-if="comments.length" class="comments-title">{{comments.length}} Comments</h2>
    <ol class="comment-list">
      <Comment v-for="{node} in comments" :key="node.id" :comment="node" />
    </ol>
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
import Comment from "~/components/Comment.vue";

export default {
  props: {
    post: {
      type: String,
      required: true,
    },
  },
  components: { Comment },
  computed: {
    comments() {
      return this.$static.comments.edges.filter(
        (e) => this.post === e.node.post.toString()
      );
    },
  },
};
</script>