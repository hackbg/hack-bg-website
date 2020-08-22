<template>
  <div id="respond" class="comment-respond">
    <b-form id="commentForm" @submit.prevent="submit">
      <h3 id="reply-title">
        Leave a Reply
        <small>
          <b-link @click="cancelReply" color="primary" :class="{'cancel':parent==='0'}">Cancel reply</b-link>
        </small>
      </h3>
      <p>Your email address will not be published. Required fields are marked *</p>
      <label for="comment">Comment</label>
      <b-form-textarea
        id="comment"
        v-model="content"
        cols="45"
        rows="8"
        maxlength="65525"
        required
        class="comment-textarea mb-4"
      ></b-form-textarea>
      <label for="author">Name *</label>
      <b-form-input
        id="author"
        v-model="author"
        maxlength="245"
        required
        class="comment-input mb-4"
      />
      <label for="email">Email *</label>
      <b-form-input
        class="comment-input mb-4"
        id="email"
        v-model="email"
        maxlength="100"
        required
        type="email"
      />
      <b-button variant="primary" type="submit">Post Comment</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    post: {
      type: String,
      required: true,
    },
    parent: {
      type: String,
    },
  },
  data() {
    return {
      content: "",
      author: "",
      email: "",
    };
  },
  methods: {
    async submit() {
      const data = {
        post: +this.post,
        parent: +this.parent,
        author_name: this.author,
        author_email: this.email,
        content: this.conten,
      };
      axios({
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        url: "https://hack.bg/wp-json/wp/v2/comments",
        data: JSON.stringify(data),
      })
        .then((response) => {
          console.log(response.message);
        })
        .catch((error) => console.log(error.message));
    },
    cancelReply() {
      this.$emit("reply-to", "0");
    },
  },
};
</script>

<style scoped>
.comment-input,
.comment-textarea {
  border: 2px dashed #9013fe;
  border-radius: 2px;
}

.comment-input {
  max-width: 350px;
}

.cancel {
  display: none;
}
</style>