<template>
	<section class="mt-3 mt-xl-0 py-5 p-relative z-index-2">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<h4 class="d-block w-100 text-color-dark custom-text-10 font-weight-bolder text-center mb-4 pb-3 appear-animation animated fadeInRightShorter appear-animation-visible" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="200" style="animation-delay: 200ms;">We Are Where You Are<span class="text-color-primary">.</span></h4>
					<div class="d-flex flex-row flex-wrap align-items-center justify-content-center mb-4 pb-3">
						<span class="d-flex flex-column flex-md-row text-center text-md-left px-5 px-md-0 mb-4 mb-md-0 align-items-center custom-text-5 font-weight-medium appear-animation animated fadeInRightShorter appear-animation-visible" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="400" style="animation-delay: 400ms;"><i class="far fa-envelope text-color-primary text-4 mr-2 appear-animation animated fadeInRightShorter appear-animation-visible" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="600" style="animation-delay: 600ms;"></i> <a href="mailto:mail@domain.com" class="text-color-default">porto@digitalagency.com</a></span>
						<span class="d-flex flex-column flex-md-row text-center text-md-left px-5 px-md-0 align-items-center custom-text-5 font-weight-medium appear-animation animated fadeInRightShorter appear-animation-visible" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="600" style="animation-delay: 600ms;"><i class="far fa-clock text-color-primary text-4 ml-md-4 mr-md-2"></i>Mon - Sat 9:00am - 6:00pm / Sunday - CLOSED</span>
					</div>
					<p class="custom-text-4 text-center appear-animation animated fadeInRightShorter appear-animation-visible" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="800" style="animation-delay: 800ms;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at massa quam. Maecenas et sem accumsan, dictum arcu eu, consectetur eros. Nulla tortor est, lobortis vestibulum turpis sed, mollis commodo orci.</p>
				</div>
			</div>
			<div class="row">
				<div class="col-xl-12 pt-lg-5 mt-4 p-relative where-you-are-postal-cards appear-animation animated fadeIn appear-animation-visible" data-appear-animation="fadeIn" data-appear-animation-delay="100" style="animation-delay: 100ms;">
					<span class="custom-circle custom-circle-2 bg-color-tertiary appear-animation animated" data-appear-animation="fadeInLeftShorter" data-appear-animation-delay="400"></span>
					<span class="custom-circle custom-circle-3 bg-color-tertiary appear-animation animated" data-appear-animation="fadeInLeftShorter" data-appear-animation-delay="600"></span>
					<span class="custom-circle custom-circle-3 bg-color-tertiary appear-animation animated" data-appear-animation="fadeInLeftShorter" data-appear-animation-delay="800"></span>
					<div class="row px-3">
						<div class="col-xl-6 mr-0 overflow-hidden col-where-you-are-postal">
							<div class="row justify-content-end p-relative h-100">
								<img src="img/demos/digital-agency-2/contact-us/contact-us-1.jpg" class="img-fluid">
								<div class="col-lg-6 bg-color-primary d-flex flex-column align-items-center justify-content-center col-where-you-are-postal-text py-5 py-lg-0">
									<h4 class="text-color-light custom-text-9">Los Angeles</h4>
									<p class="mb-1 text-color-light custom-text-4">123 The Main Street</p>
									<p class="mb-1 text-color-light custom-text-4">Los Angeles, CA 10000</p>
									<p class="mb-0 text-color-light custom-text-4"><a href="tel:+1234567890" class="text-color-light">(123) 456-7890</a></p>
								</div>
							</div>
						</div>
						<div class="col-xl-6 ml-0 overflow-hidden col-where-you-are-postal">
							<div class="row justify-content-end p-relative h-100">
								<img src="img/demos/digital-agency-2/contact-us/contact-us-2.jpg" class="img-fluid">
								<div class="col-lg-6 bg-color-primary d-flex flex-column align-items-center justify-content-center col-where-you-are-postal-text py-5 py-lg-0">
									<h4 class="text-color-light custom-text-9">New York</h4>
									<p class="mb-1 text-color-light custom-text-4">123 The Main Street</p>
									<p class="mb-1 text-color-light custom-text-4">New York, NY 10000</p>
									<p class="mb-0 text-color-light custom-text-4"><a href="tel:+1234567890" class="text-color-light">(123) 456-7890</a></p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-12">
					<h4 class="text-color-dark custom-text-10 font-weight-bolder text-center custom-title-with-icon-center custom-title-with-icon custom-title-with-icon-primary pt-5 mt-5 mb-5">Send us a Message</h4>
					<form class="contact-form" action="php/contact-form.php" method="POST" novalidate="novalidate" data-ol-has-click-handler="">
						<div class="contact-form-success alert alert-success d-none mt-4">
							<strong>Success!</strong> Your message has been sent to us.
						</div>

						<div class="contact-form-error alert alert-danger d-none mt-4">
							<strong>Error!</strong> There was an error sending your message.
							<span class="mail-error-message text-1 d-block"></span>
						</div>

						<div class="form-row">
							<div class="form-group col-lg-6">
								<input type="text" value="" data-msg-required="Please enter your name." maxlength="100" class="form-control py-4 px-4 rounded-0 text-color-quaternary bg-color-tertiary border-0 appear-animation animated fadeInRightShorter appear-animation-visible" name="name" id="name" placeholder="Your Name" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="200" required="" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQVQ4EaVTO26DQBD1ohQWaS2lg9JybZ+AK7hNwx2oIoVf4UPQ0Lj1FdKktevIpel8AKNUkDcWMxpgSaIEaTVv3sx7uztiTdu2s/98DywOw3Dued4Who/M2aIx5lZV1aEsy0+qiwHELyi+Ytl0PQ69SxAxkWIA4RMRTdNsKE59juMcuZd6xIAFeZ6fGCdJ8kY4y7KAuTRNGd7jyEBXsdOPE3a0QGPsniOnnYMO67LgSQN9T41F2QGrQRRFCwyzoIF2qyBuKKbcOgPXdVeY9rMWgNsjf9ccYesJhk3f5dYT1HX9gR0LLQR30TnjkUEcx2uIuS4RnI+aj6sJR0AM8AaumPaM/rRehyWhXqbFAA9kh3/8/NvHxAYGAsZ/il8IalkCLBfNVAAAAABJRU5ErkJggg==&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; animation-delay: 200ms; cursor: auto;">
							</div>
							<div class="form-group col-lg-6">
								<input type="text" value="" data-msg-required="Please enter your phone number." maxlength="100" class="form-control py-4 px-4 rounded-0 text-color-quaternary bg-color-tertiary border-0 appear-animation animated fadeInRightShorter appear-animation-visible" name="phone" id="phone" placeholder="Phone Number" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="400" required="" style="animation-delay: 400ms;">
							</div>
						</div>
						<div class="form-row">
							<div class="form-group col-lg-6">
								<input type="text" value="" data-msg-required="Please enter the email." data-msg-email="Please enter a valid email." maxlength="100" class="form-control py-4 px-4 rounded-0 text-color-quaternary bg-color-tertiary border-0 appear-animation animated fadeInRightShorter appear-animation-visible" name="email" id="email" placeholder="E-mail Address" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="200" required="" style="animation-delay: 200ms;">
							</div>
							<div class="form-group col-lg-6">
								<input type="text" value="" data-msg-required="Please enter the subject." maxlength="100" class="form-control py-4 px-4 rounded-0 text-color-quaternary bg-color-tertiary border-0 appear-animation animated fadeInRightShorter appear-animation-visible" name="subject" id="subject" placeholder="Subject" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="400" required="" style="animation-delay: 400ms;">
							</div>
						</div>
						<div class="form-row">
							<div class="form-group col">
								<textarea maxlength="5000" data-msg-required="Please enter your message." rows="8" class="form-control py-4 px-4 rounded-0 text-color-quaternary bg-color-tertiary border-0 appear-animation animated fadeInRightShorter appear-animation-visible" name="message" id="message" placeholder="Your Message" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="200" required="" style="animation-delay: 200ms;"></textarea>
							</div>
						</div>
						<div class="form-row">
							<div class="form-group col">
								<button type="submit" herf="demo-digital-agency-2-our-blog.html" class="btn btn-outline custom-btn-outline btn-primary rounded-0 text-color-dark custom-text-4 bg-color-hover-transparent text-color-hover-light font-weight-semibold custom-button-with-arrow px-4 py-3 appear-animation animated fadeInRightShorter appear-animation-visible" data-loading-text="Loading..." data-appear-animation="fadeInRightShorter" data-appear-animation-delay="600" style="animation-delay: 600ms;">Submit</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		props: ['data']
	}
</script>
