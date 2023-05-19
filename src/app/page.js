export default function HomePage() {
  return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Welcome to My Website</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod vestibulum eros, eu sagittis arcu ullamcorper ut.</p>
            <button className="btn btn-primary">Learn More</button>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Featured Content</h5>
                <p className="card-text">Some text describing the featured content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
