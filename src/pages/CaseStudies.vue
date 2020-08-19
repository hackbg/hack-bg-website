<template>
  <Layout>
    <b-row class="align-items-start">
      <transition name="fade" appear>
        <b-col tag="main" cols="12" lg="12" class="p-0 rounded">
          <div class="overflow-hidden p-4 p-sm-5 ">
            <div class="text-center mb-5">
              <h1 class="mb-5 text-center">Case Studies</h1>
              <p>Case studies to be listed here</p>
            </div>

            <b-row>
              <!-- // TODO: conditional order-sm-2 class in order to arrange zig-zag -->
              <div class="col-xs-12 col-sm-6 order-sm-2">
                <figure class="pro-innerpage-img">
                  <img
                    src="https://dummyimage.com/500x350/000/fff"
                    class="img-fluid"
                    alt="Responsive image"
                  />
                </figure>
              </div>
              <div class="col-xs-12 col-sm-6">
                <div class="title_content">
                  <h2 class="display-5">Supply chain</h2>
                  <p class="lead">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
            </b-row>

            <b-row>
              <div class="col-xs-12 col-sm-6">
                <figure class="pro-innerpage-img">
                  <img
                    src="https://dummyimage.com/500x350/000/fff"
                    class="img-fluid"
                    alt="Responsive image"
                  />
                </figure>
              </div>
              <div class="col-xs-12 col-sm-6">
                <div class="title_content">
                  <h2 class="display-5">Gaming</h2>
                  <p class="lead">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
            </b-row>
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
