<template>
  <Layout>
    <b-row class="align-items-start">
      <transition name="fade" appear>
        <b-col
          tag="main"
          cols="12"
          lg="12"
          class="bg-white p-0 rounded shadow-lg"
        >
          <div class="overflow-hidden p-4 p-sm-5">
            <Post :post="$page.post">
              <header class="mb-4">
                <h1 class="text-break" v-html="$page.post.title" />
                <b-img
                  v-if="$page.post.featuredMedia"
                  :src="$page.post.featuredMedia.sourceUrl"
                  :width="$page.post.featuredMedia.mediaDetails.width"
                  :alt="$page.post.featuredMedia.altText"
                  fluid
                  class="mt-4"
                />
              </header>
              <div
                class="post-content text-break"
                v-html="$page.post.content"
              />
              <template v-if="$page.post.tags.length">
                <h2 class="font-family-sans-serif h4">
                  <i class="fa fa-folder-open"></i>Categories:
                </h2>
                <ul class="list-inline">
                  <li
                    class="list-inline-item"
                    v-for="category in $page.post.categories"
                    :key="category.id"
                  >
                    <b-button
                      class="mb-2"
                      variant="primary"
                      size="sm"
                      :to="category.path"
                      >{{ category.title }} ({{ category.count }})</b-button
                    >
                  </li>
                </ul>
                <h2 class="font-family-sans-serif h4">
                  <i class="fa fa-tags"></i>Tags:
                </h2>
                <ul class="list-inline">
                  <li
                    class="list-inline-item"
                    v-for="tag in $page.post.tags"
                    :key="tag.id"
                  >
                    <b-button
                      class="mb-2"
                      variant="primary"
                      size="sm"
                      :to="tag.path"
                      >{{ tag.title }} ({{ tag.count }})</b-button
                    >
                  </li>
                </ul>
              </template>
            </Post>
          </div>
        </b-col>
      </transition>
    </b-row>
    <AuthorSection :author="$page.post.author" />
    <NewsletterForm />
    <CommentSection :post="$page.post.id" />
  </Layout>
</template>

<page-query>
query Post($path: String!) {
  post: wordPressPost(path: $path) {
    id
    title
    date
    content
    excerpt
    link
    modified
    featuredMedia {
      sourceUrl
      altText
      mimeType
      mediaDetails {
        width
        height
      }
    }
    categories {
      id
      title
      path
      count
    }
    tags {
      id
      title
      path
      count
    }
    author {
      name
      path
      description
      avatars {
        avatar96
      }
    }
    metadata {
      postAudioId
      mediumPost
      postViewsCount
      rankMathFocusKeyword
      rankMathTitle
      rankMathDescription
    }
  }
}
</page-query>

<script>
import Post from '~/components/Post.vue';
import NewsletterForm from '~/components/NewsletterForm.vue';
import CommentSection from '~/components/CommentSection.vue';
import AuthorSection from '~/components/AuthorSection.vue';

export default {
  components: {
    Post,
    NewsletterForm,
    CommentSection,
    AuthorSection
  },
  metaInfo() {
    const metaDescription = this.$page.post.metadata
      ? [
          {
            name: 'description',
            content: this.$page.post.metadata.rankMathDescription,
          },
        ]
      : [];

    const ogMetaTags = [
      {
        property: 'og:type',
        content: 'article',
      },
      { property: 'og:title', content: this.$page.post.metadata.rankMathTitle },
      {
        property: 'og:description',
        content: this.$page.post.excerpt.slice(3, -5),
      },
      {
        property: 'og:url',
        content: this.$page.post.link,
      },
      { property: 'og:updated_time', content: this.$page.post.modified },
    ];
    const ogMetaTagsFeaturedMedia = this.$page.post.featuredMedia
      ? [
          {
            property: 'og:image',
            content: this.$page.post.featuredMedia.sourceUrl,
          },
          {
            property: 'og:image:secure_url',
            content: this.$page.post.featuredMedia.sourceUrl,
          },
          {
            property: 'og:image:width',
            content: this.$page.post.featuredMedia.mediaDetails.width,
          },
          {
            property: 'og:image:height',
            content: this.$page.post.featuredMedia.mediaDetails.height,
          },
          {
            property: 'og:image:alt',
            content: this.$page.post.featuredMedia.altText,
          },
          {
            property: 'og:image:type',
            content: this.$page.post.featuredMedia.mimeType,
          },
        ]
      : [];
    const articleMetaTagsTagsList = this.$page.post.tags
      ? this.$page.post.tags.map(t => ({
          property: 'article:tag',
          content: t.title,
        }))
      : [];
    const articleMetaTagsSections = this.$page.post.categories
      ? this.$page.post.categories.map(t => ({
          property: 'article:section',
          content: t.title,
        }))
      : [];
    const articleMetaTags = [
      { property: 'article:published_time', content: this.$page.post.date },
      { property: 'article:modified_time', content: this.$page.post.modified },
    ];
    const twitterMetaTags = [
      { name: 'twitter:title', content: this.$page.post.metadata.rankMathTitle },
      {
        name: 'twitter:description',
        content: this.$page.post.excerpt.slice(3, -5),
      },
    ];
    const twitterMetaTagsImage = this.$page.post.featuredMedia
      ? [
          {
            name: 'twitter:image',
            content: this.$page.post.featuredMedia.sourceUrl,
          },
        ]
      : [];

    return {
      title: this.$page.post.metadata.rankMathTitle,
      meta: [
        ...metaDescription,
        ...ogMetaTags,
        ...ogMetaTagsFeaturedMedia,
        ...articleMetaTags,
        ...articleMetaTagsTagsList,
        ...articleMetaTagsSections,
        ...twitterMetaTags,
        ...twitterMetaTagsImage,
      ],
    };
  },
};
</script>
