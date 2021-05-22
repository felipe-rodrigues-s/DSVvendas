const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
        <p className="text-light">
          App desenvolvido por{" "}
          <a
            href="https://github.com/felipe-rodrigues-s"
            target="_blank"
            rel="noreferrer"
          >
            Felipe Rodrigues
          </a>
        </p>
        <p className="text-light">
          <small>
            <strong>Semana Spring React</strong>
            <br />
            Evento promovido pela escola DevSuperior:{" "}
            <a
              href="https://www.instagram.com/felipersilvarsilva/"
              target="_blank"
              rel="noreferrer"
            >
              @felipersilvarsilva.ig
            </a>
          </small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;