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
        :disabled="loading"
      ></b-form-textarea>
      <label for="author">Name *</label>
      <b-form-input
        id="author"
        v-model="author"
        maxlength="245"
        required
        class="comment-input mb-4"
        :disabled="loading"
      />
      <label for="email">Email *</label>
      <b-form-input
        class="comment-input mb-4"
        id="email"
        v-model="email"
        maxlength="100"
        required
        type="email"
        :disabled="loading"
      />
      <b-button variant="primary" type="submit" :disabled="loading">Post Comment</b-button>
      <b-progress class="my-1" v-if="loading" variant="primary" :value="100" animated></b-progress>
      <div v-if="success">Thanks for your comment! It will be visible after approval.</div>
      <div v-if="error" class="form-error">Something went wrong! Please, try again later!</div>
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
      loading: false,
      success: false,
      error: false,
      content: "",
      author: "",
      email: "",
    };
  },
  methods: {
    onSuccess() {
      this.loading = false;
      this.success = true;
      this.error = false;
      this.content = "";
      this.author = "";
      this.email = "";
    },
    onError() {
      this.loading = false;
      this.success = false;
      this.error = true;
    },
    submit() {
      this.loading = true;
      const data = {
        post: +this.post,
        parent: +this.parent,
        author_name: this.author,
        author_email: this.email,
        content: this.content,
      };
      axios({
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        url: process.env.GRIDSOME_COMMENT_POST_URL,
        data,
      })
        .then((response) => {
          this.onSuccess();
        })
        .catch((error) => {
          this.onError();
          console.error("Error:", error);
        });
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

.form-error {
  color: #ff0000;
}
</style>