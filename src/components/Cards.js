function Cards() {
  return (
    <section
      className="p-5
  "
    >
      <div className="container">
        <div className="row text-center g-3">
          <div className="col-md">
            <div className="card bg-dark text-light">
              <div className="card-body text-center">
                <div className="h1 mb-3">
                  <i className="bi bi-laptop" />
                </div>
                <h3 className="card-title mp-3">Virtual</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  deserunt rem ea unde necessitatibus velit.
                </p>
                <a href="/virtual" className="btn btn-primary ">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card bg-secondary text-light">
              <div className="card-body text-center">
                <div className="h1 mb-3">
                  <i className="bi bi-person-square" />
                </div>
                <h3 className="card-title mp-3">Hybrid</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  deserunt rem ea unde necessitatibus velit.
                </p>
                <a href="/hybrid" className="btn btn-dark ">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card bg-dark text-light">
              <div className="card-body text-center">
                <div className="h1 mb-3">
                  <i className="bi bi-people" />
                </div>
                <h3 className="card-title mp-3">In Person</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  deserunt rem ea unde necessitatibus velit.
                </p>
                <a href="/virtual" className="btn btn-primary ">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cards;
