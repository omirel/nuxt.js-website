<template>
	<div class="slider-container bg-color-dark rev_slider_wrapper p-relative overflow-hidden" style="height: 991px;">
		<span class="custom-circle custom-circle-1 bg-color-light custom-circle-blur appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="100"></span>
		<span class="custom-circle custom-circle-2 bg-color-primary appear-animation" data-appear-animation="zoomIn" data-appear-animation-delay="200"></span>
		<span class="custom-circle custom-circle-3 bg-color-primary appear-animation" data-appear-animation="zoomIn" data-appear-animation-delay="300"></span>
		<span class="custom-circle custom-circle-1 bg-color-light custom-circle-blur appear-animation" data-appear-animation="fadeInLeftShorter" data-appear-animation-delay="400"></span>
		<span class="custom-circle custom-circle-2 bg-color-primary appear-animation" data-appear-animation="zoomIn" data-appear-animation-delay="500"></span>
		<span class="custom-circle custom-circle-3 bg-color-primary appear-animation" data-appear-animation="zoomIn" data-appear-animation-delay="600"></span>
		<div id="revolutionSlider" class="slider rev_slider manual" data-version="5.4.8" style="height: 991px;">
			<ul>
				<li data-transition="fade">
					<img src="/img/demos/digital-agency-2/bg/bg-1.jpg"
						 alt=""
						 data-bgposition="center center"
						 data-bgfit="cover"
						 data-bgrepeat="no-repeat"
						 data-kenburns="on"
						 data-duration="20000"
						 data-ease="Linear.easeNone"
						 data-scalestart="110"
						 data-scaleend="100"
						 data-offsetstart="250 100"
						 class="rev-slidebg">

					<div class="tp-caption main-label shadow-none custom-title-with-icon custom-title-with-icon-primary"
						 data-x="['left','left','left','center']"
						 data-y="center"
						 data-start="700"
						 data-hoffset="['0','0','0','0']"
						 data-voffset="['-210','-80','-80','-75']"
						 data-width="['auto']"
						 data-height="['auto']"
						 data-transform_in="y:[100%];opacity:0;s:500;"
						 data-fontsize="['22','20','20','18']"
						 data-lineheight="27"
						 style="font-weight: 400; color: #777; text-shadow: none;" v-html="data.metadata.subline"></div>

					<div class="tp-caption main-label text-center text-md-left text-color-light"
						 data-x="['left','left','left','center']"
						 data-y="center"
						 data-start="800"
						 data-hoffset="['0','0','0','0']"
						 data-voffset="['-120','0','0','0']"
						 data-width="['auto']"
						 data-height="['auto']"
						 data-transform_in="y:[50%];opacity:0;s:500;"
						 data-fontsize="['55','51','51','40']"
						 data-lineheight="['65','60','60','50']"
						 style="text-shadow: none; z-index: 5; font-weight: 700;" v-html="data.metadata.headline"></div>

					<a class="btn btn-outline custom-btn-outline btn-primary rounded-0 tp-caption text-center text-decoration-none font-weight-semibold text-color-light bg-color-hover-primary px-4 py-3 custom-btn-with-arrow"
					   data-hash
					   data-hash-offset="100"
					   href="#intro"
					   data-x="['left','left','left','center']"
					   data-y="center"
					   data-start="900"
					   data-hoffset="['0','0','0','0']"
					   data-voffset="['10','130','130','120']"
					   data-width="['auto']"
					   data-height="['auto']"
					   data-fontsize="['16','16','16','16']"
					   data-transform_in="y:[100%];opacity:0;s:500;">Get Started</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['data']
	}
</script>
