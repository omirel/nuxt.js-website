<template>
  <div class="hero-unit" :style="style">
    <h1>{{ page.metadata.headline }}</h1>
  </div>
</template>

<script>
export default {
  props: ['page'],
  computed: {
    style () {
      return {
        background: `linear-gradient(140deg,${this.page.metadata.hero_gradient_color_hex_start} 10%, ${this.page.metadata.hero_gradient_color_hex_end} 90%) center/cover no-repeat`
      }
    }
  }
}
</script>

    const page = this.props.page
    return (
    )
  }
}
<style>
.hero-unit {
  background-position: center;
  background-size: cover;
  position: relative;
  width: 100%;
}
.hero-unit h1 {
  color: #fff;
  position: absolute;
  text-align: center;
  top: 35%;
  width: 100%;
}
</style>
