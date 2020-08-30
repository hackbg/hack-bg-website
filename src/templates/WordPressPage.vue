<template>
  <Layout>
    <b-row class="align-items-start">
      <transition name="fade" appear>
        <b-col tag="main" cols="12" lg="12" class="bg-white p-0 rounded shadow-lg">
          <div class="overflow-hidden p-4 p-sm-5">
            <h1 class="mb-3">{{ $page.page.title }}</h1>
            <h5 class=" mb-5">
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
    return {
      title: this.$page.page.title,
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
