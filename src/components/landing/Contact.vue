<template>
  <article class="mt-5 mb-5">
    <section id="contact">
      <div class="container">
        <div class="jumbotron jumbotron-fluid no-bg">
          <div class="container">
            <h2 class="display-4 text-center hack-section-heading">Get in touch with us</h2>
            <p class="lead text-center hack-section-description">
              Have a project in mind?
              <br />Drop us a line and we’ll handle the rest.
            </p>
          </div>
        </div>
      </div>

      <div class="empty-space"></div>

      <div class="container">
        <form class="contactForm" name="contactForm" id="contactForm" method="POST">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="contactName"
              name="contactName"
              placeholder="Your name"
              required
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="contactEmailOrPhone"
              name="contactEmailOrPhone"
              placeholder="Enter your email or phone number"
              required
            />
          </div>
          <div class="form-group">
            <textarea
              class="form-control"
              id="contactMessage"
              name="contactMessage"
              rows="10"
              placeholder="Tell us about your project"
            ></textarea>
          </div>
          <div class="form-group text-center">
            <button class="btn btn-hack-purple" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  </article>
</template>

<script>
export default {}
</script>
