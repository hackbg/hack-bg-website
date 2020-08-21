<template>
  <Layout>
    <b-row class="align-items-start">
      <transition name="fade" appear>
        <b-col tag="main" cols="12" lg="12" class="bg-white p-0 rounded shadow-lg">
          <div class="overflow-hidden p-4 p-sm-5 ">
            <h1 class="mb-5">{{ $page.page.title }}</h1>
            <div class="page-content" v-html="$page.page.content" />
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
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.page.title,
    }
  },
}
</script>
