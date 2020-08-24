<template>
  <li :id="`comment-${comment.id}`" class="comment">
    <article class="comment-body">
      <footer class="comment-meta">
        <div class="comment-author vcard">
          <img
            :src="comment.authorAvatarUrls._96"
            width="50"
            height="50"
            alt="Avatar"
            class="avatar avatar-50wp-user-avatar wp-user-avatar-50 alignnone photo avatar-default"
          />
          <b class="fn mx-1">
            <a
              v-if="comment.authorUrl"
              :href="comment.authorUrl"
              rel="external nofollow ugc"
              class="url"
            >{{comment.authorName}}</a>
            <span v-else>{{comment.authorName}}</span>
          </b>
          <span class="says">says:</span>
        </div>

        <div class="comment-metadata">
          <a :href="comment.link">
            <time :datetime="comment.date">{{comment.date | commentDate}}</time>
          </a>
        </div>
        <!-- .comment-metadata -->
      </footer>
      <!-- .comment-meta -->

      <div class="comment-content" v-html="comment.content"></div>
      <!-- .comment-content -->

      <div class="reply">
        <b-link class="comment-reply-link" @click="reply">Reply</b-link>
      </div>
    </article>
    <slot></slot>
  </li>
</template>

<script>
import dateFormatMixin from "~/mixin/dateFormatMixin.js";

export default {
  props: {
    comment: {
      type: Object,
      required: true,
    },
    post: {
      type: String,
      required: true,
    },
  },
  mixins: [dateFormatMixin],
  methods: {
    reply() {
      this.$router.push({ hash: "#commentForm" }).catch((error) => {
        if (error.name != "NavigationDuplicated") {
          throw error;
        }
      });
      this.$emit(
        "reply-to",
        this.comment.parent ? this.comment.parent.toString() : this.comment.id
      );
    },
  },
};
</script>

<style scoped>
.comment-content {
  overflow-wrap: break-word;
}
</style>
