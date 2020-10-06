<template>
  <footer id="footer" class="mt-0 py-5">
    <div class="container py-5">
      <div class="row justify-content-between">
        <div class="col-sm-12 col-lg-6 col-xl-6">
          <div class="appear-animation" data-appear-animation="fadeIn" data-appear-animation-delay="100">
            <label for="newsletterEmail" class="custom-font-primary custom-newsletter-title font-weight-bold mb-4 custom-text-7">Join for Company Updates</label>
            <div class="alert alert-success d-none" id="newsletterSuccess">
              <strong>Success!</strong> You've been added to our email list.
            </div>
            <div class="alert alert-danger d-none" id="newsletterError"></div>
            <form id="newsletterForm" action="php/newsletter-subscribe.php" method="POST"
                  class="mr-0 mb-3 mb-md-0 opacity-10">
              <div class="input-group custom-newsletter">
                <input class="form-control form-control-sm custom-newsletter-input rounded-0 bg-transparent border-0 pl-0 custom-text-2 text-color-light box-shadow-none"
                       placeholder="Your E-mail Address" name="newsletterEmail" id="newsletterEmail" type="text">
                <span class="input-group-append">
                  <button class="btn text-color-light custom-text-4 font-weight-semibold custom-btn-with-arrow custom-btn-with-arrow-light"
                    type="submit">Sign Up</button>
                </span>
              </div>
            </form>
          </div>
        </div>
        <div class="col-sm-12 col-lg-6 col-xl-4 col-info-footer mt-4 mt-sm-5 mt-lg-0">
          <div class="row">
            <div class="col-md-6">
              <span class="d-block text-left text-lg-right text-color-light font-weight-semibold text-5 pb-2 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="100">{{offices[0].title}}</span>
              <p class="mb-0 text-left text-lg-right text-4 font-weight-medium appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="150">{{offices[0].metadata.city}}</p>
              <p class="mb-0 text-left text-lg-right text-4 font-weight-medium appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="200">{{offices[0].metadata.street}}</p>
              <p class="mb-0 text-left text-lg-right text-4 font-weight-medium appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="250"><a :href="'tel:' + offices[0].metadata.phone" class="text-color-default">{{offices[0].metadata.phone}}</a></p>
            </div>
            <div class="col-md-6 mt-3 mt-md-0">
              <span class="d-block text-left text-lg-right text-color-light font-weight-semibold text-5 pb-2 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="100">{{offices[1].title}}</span>
              <p class="mb-0 text-left text-lg-right text-4 font-weight-medium appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="150">{{offices[1].metadata.city}}</p>
              <p class="mb-0 text-left text-lg-right text-4 font-weight-medium appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="200">{{offices[1].metadata.street}}</p>
              <p class="mb-0 text-left text-lg-right text-4 font-weight-medium appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="250"><a :href="'tel:' + offices[1].metadata.phone" class="text-color-default">{{offices[1].metadata.phone}}</a></p>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-between">
        <div class="col-sm-12 col-lg-7 col-xl-6 d-none d-sm-flex">
          <div class="nav-footer w-100 pt-5 mt-0 mt-lg-4">
            <div class="row justify-content-between">
              <div class="col-auto mr-auto">
                <div class="appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="200">
                  <div class="footer-nav footer-nav-links">
                    <nav>
                      <ul class="nav" id="footerNav">
                        <li>
                          <nuxt-link class="text-color-hover-primary font-weight-semibold custom-text-2 text-capitalize" to="/services">Our Services</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link class="text-color-hover-primary font-weight-semibold custom-text-2 text-capitalize" to="/work">Our Work</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link class="text-color-hover-primary font-weight-semibold custom-text-2 text-capitalize" to="/contact">Contact Us</nuxt-link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div class="col-auto">
                <div class="appear-animation" data-appear-animation="fadeIn" data-appear-animation-delay="100">
                  <ul class="header-social-icons social-icons social-icons-clean social-icons-icon-light social-icons-big d-none d-lg-block m-0 p-relative bottom-10">
                    <li class="social-icons-instagram"><a rel="noreferrer" href="http://www.instagram.com/" target="_blank" class="text-4" title="Instagram"><i class="fab fa-instagram"></i></a></li>
                    <li class="social-icons-twitter"><a rel="noreferrer" href="http://www.twitter.com/" target="_blank" class="text-4" title="Twitter"><i class="fab fa-twitter"></i></a></li>
                    <li class="social-icons-facebook"><a rel="noreferrer" href="http://www.facebook.com/" target="_blank" class="text-4" title="Facebook"><i class="fab fa-facebook-f"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-lg-5 col-xl-6">
          <div class="d-flex justify-content-end custom-footer-copywriting pt-5 mt-0 mt-lg-4">
            <p class="mb-0 text-left text-lg-right d-block w-100 appear-animation" data-appear-animation="fadeIn" data-appear-animation-delay="300">Porto Digital Agency. &copy; {{ $config.copyright}}</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    props: ['offices']
  }
</script>
