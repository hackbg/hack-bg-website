<template>
  <li :id="`comment-${comment.id}`" class="comment even thread-even depth-1 parent">
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
          <b class="fn mx-1">{{comment.authorName}}</b>
          <span class="says">says:</span>
        </div>

        <div class="comment-metadata">
          <a :href="comment.link">
            <time :datetime="comment.date">{{comment.date}}</time>
          </a>
        </div>
        <!-- .comment-metadata -->
      </footer>
      <!-- .comment-meta -->

      <div class="comment-content" v-html="comment.content"></div>
      <!-- .comment-content -->

      <div class="reply">
        <a
          rel="nofollow"
          class="comment-reply-link"
          href="#comment-12"
          data-commentid="12"
          data-postid="449"
          data-belowelement="div-comment-12"
          data-respondelement="respond"
          aria-label="Reply to Nikita Fuchs"
        >Reply</a>
      </div>
    </article>
  </li>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
};
</script>
