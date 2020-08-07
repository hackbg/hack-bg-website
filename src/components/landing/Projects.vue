<template>
  <section id="projects">
    <article class="mt-5 mb-5">
      <div class="container">
        <div class="jumbotron jumbotron-fluid no-bg">
          <div class="container">
            <h2 class="display-4 text-center hack-section-heading">
              Few of our latest
              <br />projects
            </h2>
            <p class="lead text-center hack-section-description">see what we've been doing lately</p>
          </div>
        </div>
      </div>
      <div class="container">
        <div id="carouselControls" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item" :class="{active: activeSlide === 1,'active-slide-in': activeSlide === 1}">
              <div class="row">
                <div class="col-sm-12">
                  <div class="text-center hack-project-carousel-container">
                    <h3 class="hack-mask-heading hack-project-title">ICO Token dashboard</h3>
                    <div class="hack-mask-description hack-project-description">
                      <p>Project features:</p>
                      <ul>
                        <li>User roles</li>
                        <li>User management</li>
                        <li>Web3 Integration</li>
                        <li>Bounty program</li>
                        <li>Affiliate program</li>
                        <li>Social media integration</li>
                        <li>Administrative section</li>
                        <li>KYC verification</li>
                        <li>Payment Gateway Integration</li>
                      </ul>
                    </div>
                    <div class="hack-project-technologies">
                      <p>Technologies used:</p>
                      <p>
                        <span v-b-tooltip.hover title="Ethereum Blockchain">
                          <i class="fab fa-2x fa-ethereum"></i>
                        </span>
                        <span v-b-tooltip.hover title="NodeJS">
                          <i class="fab fa-2x fa-node-js"></i>
                        </span>
                        <span v-b-tooltip.hover title="Database">
                          <i class="fas fa-2x fa-database"></i>
                        </span>
                        <span v-b-tooltip.hover title="Angular">
                          <i class="fab fa-2x fa-angular"></i>
                        </span>
                        <span v-b-tooltip.hover title="HTML5">
                          <i class="fab fa-2x fa-html5"></i>
                        </span>
                        <span v-b-tooltip.hover title="CSS3">
                          <i class="fab fa-2x fa-css3"></i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item" :class="{active: activeSlide === 2,'active-slide-in': activeSlide === 2}">
              <div class="row">
                <div class="col-sm-12">
                  <div class="text-center hack-project-carousel-container">
                    <h3 class="hack-mask-heading hack-project-title">eCommerce - Administration CMS</h3>
                    <div class="hack-mask-description hack-project-description">
                      <p>Project features:</p>
                      <ul>
                        <li>User roles</li>
                        <li>User management</li>
                        <li>WooCommerce API Integration</li>
                        <li>OpenCart Custom API + Integration</li>
                        <li>Invoicing engine</li>
                        <li>Courier (Logistics) API Integration</li>
                      </ul>
                    </div>
                    <div class="hack-project-technologies">
                      <p>Technologies used:</p>
                      <p>
                        <span v-b-tooltip.hover title="Javascript">
                          <i class="fab fa-2x fa-js"></i>
                        </span>
                        <span v-b-tooltip.hover title="PHP">
                          <i class="fab fa-2x fa-php"></i>
                        </span>
                        <span v-b-tooltip.hover title="Database">
                          <i class="fas fa-2x fa-database"></i>
                        </span>
                        <span v-b-tooltip.hover title="HTML5">
                          <i class="fab fa-2x fa-html5"></i>
                        </span>
                        <span v-b-tooltip.hover title="CSS3">
                          <i class="fab fa-2x fa-css3"></i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item" :class="{active: activeSlide === 3,'active-slide-in': activeSlide === 3}">
              <div class="row">
                <div class="col-sm-12">
                  <div class="text-center hack-project-carousel-container">
                    <h3 class="hack-mask-heading hack-project-title">eLearning platform</h3>
                    <div class="hack-mask-description hack-project-description">
                      <p>Project features:</p>
                      <ul>
                        <li>User roles</li>
                        <li>User management</li>
                        <li>Course enrollments</li>
                        <li>Certificates management</li>
                        <li>Custom HTML5 streaming video player</li>
                      </ul>
                    </div>
                    <div class="hack-project-technologies">
                      <p>Technologies used:</p>
                      <p>
                        <span v-b-tooltip.hover title="Javascript">
                          <i class="fab fa-2x fa-js"></i>
                        </span>
                        <span v-b-tooltip.hover title="PHP">
                          <i class="fab fa-2x fa-php"></i>
                        </span>
                        <span v-b-tooltip.hover title="Database">
                          <i class="fas fa-2x fa-database"></i>
                        </span>
                        <span v-b-tooltip.hover title="HTML5">
                          <i class="fab fa-2x fa-html5"></i>
                        </span>
                        <span v-b-tooltip.hover title="CSS3">
                          <i class="fab fa-2x fa-css3"></i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item" :class="{active: activeSlide === 4,'active-slide-in': activeSlide === 4}">
              <div class="row">
                <div class="col-sm-12">
                  <div class="text-center hack-project-carousel-container">
                    <h3 class="hack-mask-heading hack-project-title">Retail solution platform</h3>
                    <div class="hack-mask-description hack-project-description">
                      <p>Project features:</p>
                      <ul>
                        <li>User roles</li>
                        <li>User management</li>
                        <li>Retail turnover</li>
                        <li>Quality rating system</li>
                        <li>Google maps integration</li>
                        <li>Web & mobile</li>
                      </ul>
                    </div>
                    <div class="hack-project-technologies">
                      <p>Technologies used:</p>
                      <p>
                        <span v-b-tooltip.hover title="Android">
                          <i class="fab fa-2x fa-android"></i>
                        </span>
                        <span v-b-tooltip.hover title="Javascript">
                          <i class="fab fa-2x fa-js"></i>
                        </span>
                        <span v-b-tooltip.hover title="PHP">
                          <i class="fab fa-2x fa-php"></i>
                        </span>
                        <span v-b-tooltip.hover title="Database">
                          <i class="fas fa-2x fa-database"></i>
                        </span>
                        <span v-b-tooltip.hover title="HTML5">
                          <i class="fab fa-2x fa-html5"></i>
                        </span>
                        <span v-b-tooltip.hover title="CSS3">
                          <i class="fab fa-2x fa-css3"></i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item" :class="{active: activeSlide === 5,'active-slide-in': activeSlide === 5}">
              <div class="row">
                <div class="col-sm-12">
                  <div class="text-center hack-project-carousel-container">
                    <h3
                      class="hack-mask-heading hack-project-title"
                    >Blockchain based decentralized P2P lending system</h3>
                    <div class="hack-mask-description hack-project-description">
                      <p>Project features:</p>
                      <ul>
                        <li>Smart Contracts</li>
                        <li>Intrest management</li>
                        <li>Lending system</li>
                        <li>Web3 integration</li>
                      </ul>
                    </div>
                    <div class="hack-project-technologies">
                      <p>Technologies used:</p>
                      <p>
                        <span v-b-tooltip.hover title="Ethereum Blockchain">
                          <i class="fab fa-2x fa-ethereum"></i>
                        </span>
                        <span v-b-tooltip.hover title="NodeJS">
                          <i class="fab fa-2x fa-node-js"></i>
                        </span>
                        <span v-b-tooltip.hover title="HTML5">
                          <i class="fab fa-2x fa-html5"></i>
                        </span>
                        <span v-b-tooltip.hover title="CSS3">
                          <i class="fab fa-2x fa-css3"></i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item" :class="{active: activeSlide === 6,'active-slide-in': activeSlide === 6}">
              <div class="row">
                <div class="col-sm-12">
                  <div class="text-center hack-project-carousel-container">
                    <h3 class="hack-mask-heading hack-project-title">eLearning system</h3>
                    <div class="hack-mask-description hack-project-description">
                      <p>Project features:</p>
                      <ul>
                        <li>User roles</li>
                        <li>User management</li>
                        <li>Custom admin courses and test creation functionality</li>
                        <li>Statistics export</li>
                        <li>Cretfication system</li>
                        <li>Course reviewing and rating</li>
                      </ul>
                    </div>
                    <div class="hack-project-technologies">
                      <p>Technologies used:</p>
                      <p>
                        <span v-b-tooltip.hover title="Javascript">
                          <i class="fab fa-2x fa-js"></i>
                        </span>
                        <span v-b-tooltip.hover title="PHP">
                          <i class="fab fa-2x fa-php"></i>
                        </span>
                        <span v-b-tooltip.hover title="Database">
                          <i class="fas fa-2x fa-database"></i>
                        </span>
                        <span v-b-tooltip.hover title="HTML5">
                          <i class="fab fa-2x fa-html5"></i>
                        </span>
                        <span v-b-tooltip.hover title="CSS3">
                          <i class="fab fa-2x fa-css3"></i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item" :class="{active: activeSlide === 7,'active-slide-in': activeSlide === 7}">
              <div class="row">
                <div class="col-sm-12">
                  <div class="text-center hack-project-carousel-container">
                    <h3
                      class="hack-mask-heading hack-project-title"
                    >Blockchain based decentralized DNS Service</h3>
                    <div class="hack-mask-description hack-project-description">
                      <p>Project features:</p>
                      <ul>
                        <li>Smart Contracts</li>
                        <li>DNS functionality</li>
                        <li>Web3 integration</li>
                      </ul>
                    </div>
                    <div class="hack-project-technologies">
                      <p>Technologies used:</p>
                      <p>
                        <span v-b-tooltip.hover title="Ethereum Blockchain">
                          <i class="fab fa-2x fa-ethereum"></i>
                        </span>
                        <span v-b-tooltip.hover title="NodeJS">
                          <i class="fab fa-2x fa-node-js"></i>
                        </span>
                        <span v-b-tooltip.hover title="HTML5">
                          <i class="fab fa-2x fa-html5"></i>
                        </span>
                        <span v-b-tooltip.hover title="CSS3">
                          <i class="fab fa-2x fa-css3"></i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item" :class="{active: activeSlide === 8,'active-slide-in': activeSlide === 8}">
              <div class="row">
                <div class="col-sm-12">
                  <div class="text-center hack-project-carousel-container">
                    <h3 class="hack-mask-heading hack-project-title">eLearning system</h3>
                    <div class="hack-mask-description hack-project-description">
                      <p>Project features:</p>
                      <ul>
                        <li>User roles</li>
                        <li>User management</li>
                        <li>Custom admin courses and test creation functionality</li>
                        <li>Statistics export</li>
                        <li>Payment Gateway Integration</li>
                        <li>Course reviewing and rating</li>
                      </ul>
                    </div>
                    <div class="hack-project-technologies">
                      <p>Technologies used:</p>
                      <p>
                        <span v-b-tooltip.hover title="NodeJS">
                          <i class="fab fa-2x fa-node-js"></i>
                        </span>
                        <span v-b-tooltip.hover title="Angular">
                          <i class="fab fa-2x fa-angular"></i>
                        </span>
                        <span v-b-tooltip.hover title="Database">
                          <i class="fas fa-2x fa-database"></i>
                        </span>
                        <span v-b-tooltip.hover title="HTML5">
                          <i class="fab fa-2x fa-html5"></i>
                        </span>
                        <span v-b-tooltip.hover title="CSS3">
                          <i class="fab fa-2x fa-css3"></i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item" :class="{active: activeSlide === 9,'active-slide-in': activeSlide === 9}">
              <div class="row">
                <div class="col-sm-12">
                  <div class="text-center hack-project-carousel-container">
                    <h3 class="hack-mask-heading hack-project-title">eCommerce Chatbot</h3>
                    <div class="hack-mask-description hack-project-description">
                      <p>Project features:</p>
                      <ul>
                        <li>WooCommerce orders confirmation</li>
                        <li>Custom orders from chat</li>
                        <li>Parcel tracking</li>
                        <li>Viber Integration</li>
                      </ul>
                    </div>
                    <div class="hack-project-technologies">
                      <p>Technologies used:</p>
                      <p>
                        <span v-b-tooltip.hover title="NodeJS">
                          <i class="fab fa-2x fa-node-js"></i>
                        </span>
                        <span v-b-tooltip.hover title="Database">
                          <i class="fas fa-2x fa-database"></i>
                        </span>
                        <span v-b-tooltip.hover title="HTML5">
                          <i class="fab fa-2x fa-html5"></i>
                        </span>
                        <span v-b-tooltip.hover title="CSS3">
                          <i class="fab fa-2x fa-css3"></i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item" :class="{active: activeSlide === 10,'active-slide-in': activeSlide === 10}">
              <div class="row">
                <div class="col-sm-12">
                  <div class="text-center hack-project-carousel-container">
                    <h3 class="hack-mask-heading hack-project-title">Museums iOS App</h3>
                    <div class="hack-mask-description hack-project-description">
                      <p>Project features:</p>
                      <ul>
                        <li>Custom API server</li>
                        <li>iBeacon technology implementation</li>
                        <li>Rating system</li>
                        <li>User management system</li>
                      </ul>
                    </div>
                    <div class="hack-project-technologies">
                      <p>Technologies used:</p>
                      <p>
                        <span v-b-tooltip.hover title="NodeJS">
                          <i class="fab fa-2x fa-node-js"></i>
                        </span>
                        <span v-b-tooltip.hover title="Database">
                          <i class="fas fa-2x fa-database"></i>
                        </span>
                        <span v-b-tooltip.hover title="HTML5">
                          <i class="fab fa-2x fa-html5"></i>
                        </span>
                        <span v-b-tooltip.hover title="CSS3">
                          <i class="fab fa-2x fa-css3"></i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ol class="carousel-indicators">
              <li @click="setActive(1)" :class="{active: activeSlide === 1}"></li>
              <li @click="setActive(2)" :class="{active: activeSlide === 2}"></li>
              <li @click="setActive(3)" :class="{active: activeSlide === 3}"></li>
              <li @click="setActive(4)" :class="{active: activeSlide === 4}"></li>
              <li @click="setActive(5)" :class="{active: activeSlide === 5}"></li>
              <li @click="setActive(6)" :class="{active: activeSlide === 6}"></li>
              <li @click="setActive(7)" :class="{active: activeSlide === 7}"></li>
              <li @click="setActive(8)" :class="{active: activeSlide === 8}"></li>
              <li @click="setActive(9)" :class="{active: activeSlide === 9}"></li>
              <li @click="setActive(10)" :class="{active: activeSlide === 10}"></li>
            </ol>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 text-center">
            <b-button class="btn-hack-carousel" variant="primary" @click="setPrev">
              <i class="fas fa-angle-left"></i>
            </b-button>
            <b-button class="btn-hack-carousel" variant="primary" @click="setNext">
              <i class="fas fa-angle-right"></i>
            </b-button>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
let interval;
export default {
  data() {
    return {
      activeSlide: 1,
      prevSlide: 1,
    };
  },
  methods: {
    setActive: function (num) {
      this.prevSlide = this.activeSlide;
      this.activeSlide = num;
    },
    setPrev: function () {
      if (this.activeSlide === 1) {
        this.activeSlide = 10;
      } else {
        this.activeSlide = this.activeSlide - 1;
      }
    },
    setNext: function () {
      if (this.activeSlide === 10) {
        this.activeSlide = 1;
      } else {
        this.activeSlide = this.activeSlide + 1;
      }
    },
  },
  watch: {
    activeSlide: {
      immediate: true,
      handler(newSlide, oldSlide) {
        clearInterval(interval);
        interval = setInterval(() => {
          this.setActive(newSlide + 1);
          if (this.activeSlide > 10) {
            this.setActive(1);
          }
        }, 5000);
      },
    },
  },
};
</script>

<style scoped>
.active-slide-in {
  animation: slide-in 2s forwards;
  animation-delay: 2s;
  -webkit-animation: slide-in 2s forwards;
  overflow: hidden;
}

@keyframes slide-in {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
}

@-webkit-keyframes slide-in {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
}
</style>