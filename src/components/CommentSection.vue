<template>
  <b-row class="mt-2">
    <b-col id="comments" class="comments-area">
      <h2 v-if="postComments.length" class="comments-title">{{postComments.length}} Comments</h2>
      <ol class="comment-list">
        <Comment v-for="comment in comments" :key="comment.id" :comment="comment" :parent="true">
          <ol class="children">
            <Comment
              v-for="childComment in comment.children"
              :key="childComment.id"
              :comment="childComment"
              class="mb-4"
            />
          </ol>
        </Comment>
      </ol>
    </b-col>
  </b-row>
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
    postComments() {
      return this.$static.comments.edges
        .filter((e) => this.post === e.node.post.toString())
        .map((c) => c.node);
    },
    comments() {
      const parentComments = this.postComments.filter((c) => !c.parent);
      const childrenComments = this.postComments.filter((c) => !!c.parent);
      let comments = Array.from(parentComments);
      comments.forEach(
        (e) =>
          (e.children = childrenComments.filter(
            (c) => c.parent.toString() === e.id
          ))
      );
      return comments;
    },
  },
};
</script>