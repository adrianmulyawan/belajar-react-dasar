import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">React Study</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <a className="nav-link active" href="/">Home</a> */}
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/product" className="nav-link">Product</Link>
              </li>
              <li className="nav-item">
                <Link to="/content" className="nav-link">Content</Link>
              </li>
              <li className="nav-item">
                <Link to="/lifecycle" className="nav-link">Lifecycle</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
};

export default NavbarComponent;