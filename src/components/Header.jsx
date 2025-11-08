function Header() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        class="carousel slide container"
        data-bs-ride="true"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active position relative">
            <img
              src="https://plus.unsplash.com/premium_photo-1710119487743-48959c984d45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fHww"
              class="img-fluid w-100"
              alt="..."
            />
            <div class="position-absolute top-0 start-0 w-100 bg-dark opacity-50 carousel-caption d-none d-md-block text-center d-flex justify-content-center align-items-center align-content-center ">
              <h1 className="textsize">Welcome to react js</h1>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam,
                natus
              </p>
            </div>
          </div>
          <div class="carousel-item position relative">
            <img
              src="https://plus.unsplash.com/premium_photo-1710119487428-9e82a8352e39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wyfHx8ZW58MHx8fHx8"
              class="d-block w-100"
              alt="..."
            />
            <div class="position-absolute top-0 start-0 w-100 bg-dark opacity-50 carousel-caption d-none d-md-block text-center d-flex justify-content-center align-items-center align-content-center ">
              <h5 className="textsize">Welcome to react js</h5>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam,
                natus
              </p>
            </div>
          </div>
          <div class="carousel-item position relative">
            <img
              src="https://plus.unsplash.com/premium_photo-1709772918719-057a3947cf2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D"
              class="d-block w-100"
              alt="..."
            />
            <div class="position-absolute top-0 start-0 w-100 bg-dark opacity-50 carousel-caption d-none d-md-block text-center d-flex justify-content-center align-items-center align-content-center">
              <h5 className="textsize">Welcome to react js</h5>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam,
                natus
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
export default Header;
