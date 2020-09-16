<template>
  <Layout>
    <b-row class="align-items-start">
      <transition name="fade" appear>
        <b-col tag="main" cols="12" lg="12" class="bg-white p-0 rounded shadow-lg">
          <div class="overflow-hidden p-4 p-sm-5 ">
            <h1 class="mb-5">About</h1>
            <p class="lead">hack - blockchain & dlt solutions</p>
            <p>
              hack.bg ltd. is a software development company specializing in blockchain & DLT
              technology solutions. We are experts in developing distributed applications (dapps).
              Being part of the technological revolution is allowing us to build the technologies of
              the future. Our team is passionate, motivated, fully distributed international and
              fast growing.
            </p>
          </div>
        </b-col>
      </transition>
    </b-row>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About us',
  },
}
</script>
