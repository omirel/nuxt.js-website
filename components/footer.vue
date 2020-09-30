<template>
    <footer class="footer">
      <div class="footer-notes">
        <div class="col" style="float:left;width:60%;">
          <div style="margin-bottom:20px;">Our Partners<br/><a href="https://www.mirel.de" target="_blank">www.mirel.de</a></div>
        </div>
        <div class="col" style="float:left;width:40%;">
          <div style="margin-bottom:20px;">
            <a style="margin-right:20px;" href="https://github.com/tgbrains" target="_blank">
              <i class="fa fa-github social-icon"></i>
            </a>
            <a href="https://twitter.com/tgbrains" target="_blank">
              <i class="fa fa-twitter social-icon"></i>
            </a>
          </div>
          <div style="margin-bottom:20px;">&copy; {{ $config.copyright}}</div>
        </div>
        <div class="clearfix"></div>
      </div>
    </footer>
  </div>
</template>

<script>
  import config from '../config'

  export default {
    data() {
      return {
        loading: config.cosmic.bucket.slug
      }
    }
  }
</script>

<style>
.footer {
  background-color: #333;
  color: #fff;
  font-size: 18px;
  width: 100%;
}
.footer-notes {
  margin: 0 auto;
  max-width: 960px;
  padding: 15px;
  padding-bottom: 60px;
  padding-top: 40px;
}
</style>
