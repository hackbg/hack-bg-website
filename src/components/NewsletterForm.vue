<template>
  <b-row class="mt-5 p-2 newsletter">
    <b-col cols="12" sm="3" class="img-container">
      <img src="@/assets/images/hack_newsletter.png" alt="newsletter" width="90%" />
    </b-col>
    <b-col>
      <h3>Let's build the decentralized future together!</h3>
      <h4>Subscribe for updates from the blog</h4>
      <b-form inline @submit.prevent="onSubmit">
        <b-form-group :invalid-feedback="invalidFeedback">
          <b-row>
            <b-col class="mb-2 mb-md-0">
              <label class="sr-only" for="email">E-mail</label>
              <b-form-input
                id="email"
                v-model="email"
                placeholder="Your email"
                class="mb-2 mr-sm-2 w-100 h-100"
              ></b-form-input>
              <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
              <div style="position: absolute; left: -5000px;" aria-hidden="true">
                <input
                  type="text"
                  name="b_2f5135b55e33a57f177a0e158_16c540b6e8"
                  tabindex="-1"
                  value
                />
              </div>
            </b-col>
            <b-col cols="12" md="4">
              <b-button variant="primary" type="submit" class="w-100">Subscribe</b-button>
            </b-col>
          </b-row>
        </b-form-group>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>
const emailRegex = /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/;
export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    onSubmit() {
      // evt.preventDefault();
      if (this.email && !this.invalidFeedback) {
        alert(JSON.stringify(this.email));
      }
    },
  },
  computed: {
    invalidFeedback() {
      if (emailRegex.test(this.email)) {
        return "";
      } else return "Please, enter a valid email.";
    },
  },
};
</script>

<style scoped>
.newsletter {
  background-color: #ffffff;
  -webkit-box-shadow: 0 2px 40px 0 rgba(16, 16, 18, 0.06);
  box-shadow: 0 2px 40px 0 rgba(16, 16, 18, 0.06);
  -ms-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
</style>
