<template>
  <section id="contact">
    <div class="empty-space"></div>
    <article class="mt-5 mb-5">
      <div class="container">
        <div class="jumbotron jumbotron-fluid no-bg">
          <div class="container">
            <h2 class="display-4 text-center hack-section-heading">
              Get in touch with us
            </h2>
            <p class="lead text-center hack-section-description">
              Have a project in mind?
              <br />Drop us a line and we’ll handle the rest.
            </p>
          </div>
        </div>
      </div>

      <div class="empty-space"></div>

      <div class="container">
        <form
          class="gform contactForm"
          name="contactForm"
          id="contactForm"
          method="POST"
          @submit.prevent
        >
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="name"
              name="name"
              placeholder="Your name"
              required
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="email"
              name="email"
              placeholder="Enter your email or phone number"
              required
            />
          </div>
          <div class="form-group">
            <textarea
              class="form-control"
              id="message"
              name="message"
              rows="10"
              placeholder="Tell us about your project"
            ></textarea>
          </div>
          <div class="form-group text-center">
            <button class="btn btn-hack-purple" @click="submitForm">
              Send
            </button>
          </div>
        </form>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  methods: {
    getFormData(form) {
      const elements = form.elements;
      const fields = Object.keys(elements)
        .map(k => elements[k].name || '')
        .filter((item, pos, self) => {
          return self.indexOf(item) == pos && item;
        });

      return {
        ...Object.values(fields).reduce((p, n) => {
          p[n] = elements[n].value;
          return p;
        }, {}),
        formDataNameOrder: JSON.stringify(fields),
        formGoogleSheetName: form.dataset.sheet || 'responses',
        formGoogleSendEmail: form.dataset.email || '',
      };
    },
    submitForm(event) {
      const form = event.target.form;
      const formData = this.getFormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open('POST', process.env.GRIDSOME_CONTACT_FORM_URL);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.onreadystatechange = () => {
        xhr.readyState === 4 && xhr.status === 200 ? form.reset() : '';
      };
      // url encode form data for sending as post data
      const encoded = Object.keys(formData)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(formData[k]))
        .join('&');
      xhr.send(encoded);
    },
  },
};
</script>

<style scoped>
.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-group {
  margin-bottom: 1rem;
}
</style>
