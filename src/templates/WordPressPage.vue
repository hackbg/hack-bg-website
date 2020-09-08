<template>
  <Layout>
    <b-row class="align-items-start">
      <transition name="fade" appear>
        <b-col tag="main" cols="12" lg="12" class="bg-white p-0 rounded shadow-lg">
          <div class="overflow-hidden p-4 p-sm-5">
            <h1 class="mb-3">{{ $page.page.title }}</h1>
            <h5 class="mb-5">
              <span
                v-for="tag in $page.page.tags"
                :key="tag.id"
                class="badge badge-hack-light m-1"
              >{{tag.title}}</span>
            </h5>
            <div class="page-content" v-html="$page.page.content" />
            <PageChildrenList v-if="!$page.page.content" :parentId="$page.page.id" />
          </div>
        </b-col>
      </transition>
    </b-row>
  </Layout>
</template>

<page-query>
query($path: String) {
  page: wordPressPage(path: $path) {
    title
    content
    id
    parent
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
    tags{
      title
      id
      slug
    }
  }
}
</page-query>

<script>
import PageChildrenList from "~/components/PageChildrenList.vue";

export default {
  components: { PageChildrenList },
  metaInfo() {
    const ogMetaTags = [
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:title", content: this.$page.page.title },
      {
        property: "og:description",
        content: this.$page.page.excerpt.slice(3, -5),
      },
      {
        property: "og:url",
        content: this.$page.page.link,
      },
      { property: "og:updated_time", content: this.$page.page.modified },
    ];
    const ogMetaTagsFeaturedMedia = this.$page.page.featuredMedia
      ? [
          {
            property: "og:image",
            content: this.$page.page.featuredMedia.sourceUrl,
          },
          {
            property: "og:image:secure_url",
            content: this.$page.page.featuredMedia.sourceUrl,
          },
          {
            property: "og:image:width",
            content: this.$page.page.featuredMedia.mediaDetails.width,
          },
          {
            property: "og:image:height",
            content: this.$page.page.featuredMedia.mediaDetails.height,
          },
          {
            property: "og:image:alt",
            content: this.$page.page.featuredMedia.altText,
          },
          {
            property: "og:image:type",
            content: this.$page.page.featuredMedia.mimeType,
          },
        ]
      : [];
    const articleMetaTags = [
      { property: "article:published_time", content: this.$page.page.date },
      { property: "article:modified_time", content: this.$page.page.modified },
    ];
    const articleMetaTagsTagsList = this.$page.page.tags
      ? this.$page.page.tags.map((t) => ({
          property: "article:tag",
          content: t.title,
        }))
      : [];
    const twitterMetaTags = [
      { name: "twitter:title", content: this.$page.page.title },
      {
        name: "twitter:description",
        content: this.$page.page.excerpt.slice(3, -5),
      },
      {
        name: "twitter:image",
        content: this.$page.page.featuredMedia
          ? this.$page.page.featuredMedia.sourceUrl
          : "",
      },
    ];
    return {
      title: this.$page.page.title,
      meta: [
        ...ogMetaTags,
        ...ogMetaTagsFeaturedMedia,
        ...articleMetaTags,
        ...articleMetaTagsTagsList,
        ...twitterMetaTags,
      ],
    };
  },
};
</script>

<style scoped>
.badge-hack-light {
  color: #9013fe;
  background-color: #c318d81a;
}
</style>
