<template>
  <Layout>
    <b-row class="align-items-start">
      <transition name="fade" appear>
        <b-col tag="main" cols="12" lg="12" class="p-0 rounded">
          <div class="overflow-hidden p-4 p-sm-5 ">
            <h1 class="mb-5">Case Studies</h1>
            <p>Case studies to be listed here</p>
          </div>
        </b-col>
      </transition>
    </b-row>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Case studies',
  },
};
</script>
