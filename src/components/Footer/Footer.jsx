import "./Footer.css";

export const Footer = () => {
  return (
      <footer className="footer">
        <div className="container">
          <div className="row">
          <div class="col-md-6 mb-3 mt-4">
            <h5>Sobre Nosotros</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis quam tristique convallis.</p>
          </div>
          <div class="col-md-6 text-center mt-4">
              <h5>Seguinos</h5>
              <ul class="list-inline">
                <li class="list-inline-item"><a href="#" class="text-black">Facebook</a></li>
              <li class="list-inline-item"><a href="#" class="text-black">X</a></li>
              <li class="list-inline-item"><a href="#" class="text-black">Instagram</a></li>
              </ul>
            </div>
          </div>
          <hr class="mb-4"/>
          <div class="row">
            <div class="col-md-12 text-center">
              <p>&copy; 2026 Herrerman Parrillas. Pre-Entrega por Ivan Ibarra</p>
            </div>
          </div>
        </div>
      </footer>
  );
};