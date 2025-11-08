function Contact() {
    return(<>
    <h1 className="fw-bold fs-1 text-center mt-5">Get in our touch</h1>
     <section class="py-5 bg-primary container mt-4">
	<div class="container">
		<div class="row align-items-center justify-content-between">
			<div class="col-lg-6 bg-white p-5">
				<h2 class="display-6 fw-bold text-center mb-4">Contact Us</h2>
				<form>
					<div class="row">
						<div class="col-md-6">
							<div class="mb-3">
								<input class="form-control bg-light" placeholder="First name" type="text"/>
							</div>
						</div>
						<div class="col-md-6">
							<div class="mb-3">
								<input class="form-control bg-light" placeholder="Last name" type="text"/>
							</div>
						</div>
						<div class="col-md-6">
							<div class="mb-3">
								<input class="form-control bg-light" placeholder="Email address" type="text"/>
							</div>
						</div>
						<div class="col-md-6">
							<div class="mb-3">
								<input class="form-control bg-light" placeholder="Phone number" type="text"/>
							</div>
						</div>
						<div class="col-md-12">
							<div class="mb-3">
								<textarea class="form-control bg-light" placeholder="Your message" rows="4"></textarea>
							</div>
						</div>
						<div class="col-md-4">
							<div class="d-grid">
								<button class="btn btn-primary" type="submit">Send message</button>
							</div>
						</div>
					</div>
				</form>
			</div>
			<div class="col-lg-5 text-white mt-5 mt-lg-4">
				<div class="mb-4">
					<div>
						Address
					</div>
					<div class="display-6 fw-semibold">
						123 Ahembabad View, Guajrat, India
					</div>
				</div>
				<div class="mb-4">
					<div>
						Phone
					</div>
					<div class="display-6 fw-semibold">
						+915645254600
					</div>
				</div>
				<div class="mb-4">
					<div>
						Email
					</div>
					<div class="display-6 fw-semibold text-break">
						<a class="text-link text-white text-decoration-none" href="#">hello@yourdomain.com</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

    
    </>)
}
export default Contact;