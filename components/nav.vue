<template>
  <header id="header" class="header-transparent header-effect-shrink" data-plugin-options="{'stickyEnabled': true, 'stickyEffect': 'shrink', 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': true, 'stickyChangeLogo': false, 'stickyStartAt': 1, 'stickyHeaderContainerHeight': 100}">

    <div class="header-body border-top-0 bg-color-dark box-shadow-none">
      <div class="header-container container">
        <div class="header-row">
          <div class="header-column header-column-logo">
            <div class="header-row">
              <div class="header-logo">
                <a href="demo-digital-agency-2.html">
                  <object class="icon-circle" data="/img/logo-white.svg" height="59" type="image/svg+xml">
                    <!-- Für Browser ohne SVG-Unterstützung -->
                    <img src="/img/logo-white.svg" height="59" alt="Top Gear Brains EOOD Logo">
                  </object>
                </a>
              </div>
            </div>
          </div>
          <div class="header-column header-column-nav-menu justify-content-end w-100">
            <div class="header-row">
              <div class="header-nav header-nav-links header-nav-dropdowns-dark header-nav-light-text order-2 order-lg-1">
                <div class="header-nav-main header-nav-main-mobile-dark header-nav-main-square header-nav-main-dropdown-no-borders header-nav-main-effect-2 header-nav-main-sub-effect-1">
                  <nav class="collapse">
                    <ul class="nav nav-pills" id="mainNav">
                      <li class="dropdown-primary">
                        <a class="nav-link text-capitalize font-weight-semibold custom-text-3" href="/">
                          Home
                        </a>
                      </li>
                      <li class="dropdown-primary">
                        <a class="nav-link text-capitalize font-weight-semibold custom-text-3" href="/about">
                          About Us
                        </a>
                      </li>
                      <li class="dropdown">
                        <a class="nav-link dropdown-toggle text-capitalize font-weight-semibold custom-text-3 dropdown-toggle" href="/services">
                          Our Services
                        </a>
                        <ul class="dropdown-menu">
                          <li v-for="row in services" :key="row.slug">
                            <nuxt-link class="dropdown-item font-weight-normal" :to="'/services/' + row.slug">
                              {{row.title}}
                            </nuxt-link>
                          </li>
                        </ul>
                      </li>
                      <li class="dropdown-primary">
                        <a class="nav-link text-capitalize font-weight-semibold custom-text-3" href="/work">
                          Our Work
                        </a>
                      </li>
<!--                      <li class="dropdown-primary">-->
<!--                        <a class="nav-link text-capitalize font-weight-semibold custom-text-3" href="/insights">-->
<!--                          Our Insights-->
<!--                        </a>-->
<!--                      </li>-->
                      <li class="dropdown-primary">
                        <a class="nav-link text-capitalize font-weight-semibold custom-text-3" href="/contact">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <button class="btn header-btn-collapse-nav" data-toggle="collapse" data-target=".header-nav-main nav">
                  <i class="fas fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="header-column justify-content-end d-none d-lg-flex">
            <div class="header-row">
              <ul class="header-social-icons social-icons social-icons-clean social-icons-icon-light social-icons-big d-lg-flex m-0 ml-lg-2">
                <li class="social-icons-instagram"><a rel="noreferrer" href="http://www.instagram.com/" target="_blank" class="text-4" title="Instagram"><i class="fab fa-instagram"></i></a></li>
                <li class="social-icons-twitter"><a rel="noreferrer" href="http://www.twitter.com/" target="_blank" class="text-4" title="Twitter"><i class="fab fa-twitter"></i></a></li>
                <li class="social-icons-facebook"><a rel="noreferrer" href="http://www.facebook.com/" target="_blank" class="text-4" title="Facebook"><i class="fab fa-facebook-f"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: ['services']
}
</script>
