import Container from 'react-bootstrap/Container';

function Rodape() {
    return (
        <section className="pt-5">
  {/* Footer */}
  <footer className="bg-dark text-center text-white">

    {/* Grid container */}
    <div className="container p-4 pb-0">
      {/* Section: CTA */}
      <section className="">
        <p className="d-flex justify-content-center align-items-center">
          <span className="me-3">Register for free</span>
          <button type="button" className="btn btn-outline-light btn-rounded">
            Sign up!
          </button>
        </p>
      </section>
      {/* Section: CTA */}
    </div>
    {/* Grid container */}
    {/* Copyright */}
    <div
      className="text-center p-3"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      © 2023 Copyright:
      <a className="text-white" href="https://mdbootstrap.com/">
        DevPlayTV
      </a>
    </div>
    {/* Copyright */}
  </footer>
  {/* Footer */}
</section>

    );
}

export default Rodape