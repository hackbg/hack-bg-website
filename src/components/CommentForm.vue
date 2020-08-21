<template>
  <div id="respond" class="comment-respond">
    <b-form id="commentform" @submit.prevent="submit">
      <h3 id="reply-title">
        Leave a Reply
        <small>
          <a href="#" :class="{cancel:!dirty}">Cancel reply</a>
        </small>
      </h3>
      <p>Your email address will not be published. Required fields are marked *</p>
      <label for="comment">Comment</label>
      <b-form-textarea
        id="comment"
        v-model="form.content"
        cols="45"
        rows="8"
        maxlength="65525"
        required
        class="comment-textarea mb-4"
      ></b-form-textarea>
      <label for="author">Name *</label>
      <b-form-input
        id="author"
        v-model="form.author"
        maxlength="245"
        required
        class="comment-input mb-4"
      />
      <label for="email">Email *</label>
      <b-form-input
        class="comment-input mb-4"
        id="email"
        v-model="form.email"
        maxlength="100"
        required
        type="email"
      />
      <b-button variant="primary" type="submit">Post Comment</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        content: "",
        author: "",
        email: "",
        postId: 0,
        parrent: 0,
      },
      dirty: false,
    };
  },
  watch: {
    form: {
      handler(newVal, oldVal) {
        this.dirty = true;
      },
      deep: true,
    },
  },
  methods: {
    submit() {
      alert(this.form);
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