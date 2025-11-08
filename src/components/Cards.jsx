

function Cards() {
  return (
    <>
      <main className="container py-5 mt-5">
        <h1 className="display-5 fw-bold mb-5">Our Services</h1>
        <div className="row gap-6">
          
          <div className="col-md-4 mt-3">
            <div className="card h-100 shadow">
              <img
                src="https://images.unsplash.com/photo-1646470742514-b7f676c7110b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
                alt="Web Development"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Web Development</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card’s content.
                </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-3">
            <div className="card h-100 shadow">
              <img
                src="https://images.unsplash.com/photo-1616440347437-b1c73416efc2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="UI/UX Designer"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">UI/UX Designer</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card’s content.
                </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-3">
            <div className="card h-100 shadow">
              <img
                src="https://media.istockphoto.com/id/1337612033/photo/seo-search-engine-optimization-concept-for-promoting-ranking-traffic-on-website-optimizing.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwVZEi78cxxga4acdsY8uE_W8o0wM4t9LXEyW0c4wi0="
                alt="SEO Development"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">SEO Development</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card’s content.
                </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}

export default Cards;
