import Container from 'react-bootstrap/Container';

function Rodape() {
    return (
        <section className="pt-5">
  {/* Footer */}
  <footer className="bg-dark text-center text-white mt-4">

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
