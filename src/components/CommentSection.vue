<template>
  <b-row class="mt-2">
    <b-col id="comments" class="comments-area">
      <h2 v-if="postComments.length" class="comments-title">{{postComments.length}} Comments</h2>
      <ol class="comment-list p-0">
        <Comment
          v-for="comment in comments"
          :key="comment.id"
          :comment="comment"
          :parent="true"
          :post="post"
          @reply-to="replyTo"
        >
          <ol v-if="comment.children.length" class="children">
            <Comment
              v-for="childComment in comment.children"
              :key="childComment.id"
              :comment="childComment"
              class="mb-4"
              :post="post"
              @reply-to="replyTo"
            />
          </ol>
        </Comment>
      </ol>
      <CommentForm :post="post" :parent="parentCommentId" @reply-to="replyTo" />
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
import CommentForm from "~/components/CommentForm.vue";

export default {
  props: {
    post: {
      type: String,
      required: true,
    },
  },
  data() {
    return { parentCommentId: "0" };
  },
  components: { Comment, CommentForm },
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
  methods: {
    replyTo(id) {
      this.parentCommentId = id;
    },
  },
};
</script>