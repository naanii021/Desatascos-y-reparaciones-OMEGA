import { Phone, Clock, MapPin, Wrench, Droplets, Shield, MessageCircle, Mail, Camera, Target } from "lucide-react";
import { Gallery } from "./components/gallery.jsx";
import "./index.css";

// Importación de tus fotos reales (Vite)
const galleryImages = Object.entries(
  import.meta.glob("./assets/*.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
})
)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, url]) => url);

export default function App() {
  const phoneNumber1 = "695405072";
  const phoneNumberUrgencias = "699151190";

  // Fondo hero robusto: si no hay 5 imágenes, usa la primera; si no hay ninguna, deja sin url
  const heroImage = galleryImages.at(4) ?? galleryImages.at(0) ?? "";

  // Firma en consola personal
  if (import.meta.env.DEV) {
    console.log(
      `%c
          ⣀⣠⣤⣤⣤⣤⣄⣀⠀⠀⠀⠀⠀
    ⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠀⠀
    ⠀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢿⣿⣷⡀⠀
    ⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⣴⢿⣿⣧⠀
    ⣿⣿⣿⣿⣿⡿⠛⣩⠍⠀⠀⠀⠐⠉⢠⣿⣿⡇  
    ⣿⡿⠛⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿
    ⢹⣿⣤⠄⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⡏
    ⠀⠻⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⠟⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⠟
    `,
    "color: #0f766e; font-family: monospace; font-size: 13px; font-weight: bold;"
  );
      
    console.log(
      "%c 🛠️ Desarrollado por @naanii_021 - Dev Omega %c https://github.com/naanii021 ",
      "color: white; background: #14b8a6; font-weight: bold; font-size: 14px; padding: 8px; border-radius: 5px 0 0 5px;",
      "color: #14b8a6; background: #f1f5f9; font-weight: bold; font-size: 14px; padding: 8px; border-radius: 0 5px 5px 0;"
    );
  }

  return (
    // Estructura principal de la app
    <div className="main-wrapper">
      <div className="top-bar">
        <MapPin size={14} />
        Servicio en toda Extremadura: Cáceres, Badajoz y alrededores
      </div>

      <header className="main-header">
        <div className="container header-flex">
          <div className="brand">
            <Wrench className="icon-yellow" size={40} />
            <div>
              <h1 className="logo-text italic">
                <span className="text-yellow">DESATASCOS</span> OMEGA
              </h1>
              <p className="sub-logo">Reparaciones y Mantenimiento</p>
            </div>
          </div>

          <div className="contact-actions">
            <a href={`tel:+34${phoneNumber1}`} className="btn-white" aria-label={`Llamar al ${phoneNumber1}`}>
              <Phone size={16} /> {phoneNumber1}
            </a>

            <a
              href={`tel:+34${phoneNumberUrgencias}`}
              className="btn-urgencias animate-pulse"
              aria-label={`Llamar a urgencias 24 horas: ${phoneNumberUrgencias}`}
            >
              <span className="urgencias-label text-white">⚡ URGENCIAS 24H ⚡</span>
              <span className="urgencias-phone">{phoneNumberUrgencias}</span>
            </a>
          </div>
        </div>
      </header>

      <section
        className="hero"
        style={{
          backgroundImage: heroImage
            ? `linear-gradient(rgba(0, 100, 93, 0.7), rgba(0, 100, 93, 0.7)), url(${heroImage})`
            : `linear-gradient(rgba(0, 100, 93, 0.7), rgba(0, 100, 93, 0.7))`,
        }}
      >
        
        <div className="hero-content">
          <h2 className="hero-title">SOLUCIONES INTEGRALES EN SANEAMIENTO</h2>
          <p className="hero-desc">
            Especialistas en desatascos técnicos, geolocalización y mantenimiento avanzado en toda Extremadura.
          </p>
          <div className="hero-btns">
            <a href={`tel:+34${phoneNumberUrgencias}`} className="btn-red-lg">
              LLAMAR AHORA (24H)
            </a>
            <a href="#servicios" className="btn-yellow-lg">
              NUESTROS SERVICIOS
            </a>
          </div>
        </div>
      </section>

      <section id="servicios" className="container py-64">
        <h3 className="section-title">Servicios Especializados</h3>

        <div className="services-grid">
          <div className="card border-teal">
            <Droplets className="text-teal mb-20" size={48} />
            <h4 className="card-title">Desatascos y Limpiezas</h4>
            <ul className="card-list">
              <li>• Desatascos en todo tipo de tuberías.</li>
              <li>• Limpieza de tubos y bajantes.</li>
              <li>• Maquinaria de alta presión.</li>
            </ul>
          </div>

          <div className="card border-yellow">
            <Target className="text-yellow mb-20" size={48} />
            <h4 className="card-title">Geolocalización</h4>
            <p className="card-text">
              Localización de estructuras de saneamiento tapadas como arquetas y tubos mediante tecnología avanzada.
            </p>
          </div>

          <div className="card border-teal">
            <Camera className="text-teal mb-20" size={48} />
            <h4 className="card-title">Inspección con Cámara</h4>
            <p className="card-text">
              Cámara de inspección de vídeo con posibilidad de grabación en el interior de tubos para diagnósticos precisos.
            </p>
          </div>

          <div className="card border-yellow">
            <Shield className="text-yellow mb-20" size={48} />
            <h4 className="card-title">Fosas y Pozos</h4>
            <p className="card-text">Vaciado profesional de fosas sépticas y pozos negros en toda la zona de Cáceres y Badajoz.</p>
          </div>

          <div className="card border-teal">
            <Wrench className="text-teal mb-20" size={48} />
            <h4 className="card-title">Arquetas Autolimpiables</h4>
            <p className="card-text">
              Remodelación de desagües conflictivos con terminación en arquetas autolimpiables para evitar atascos recurrentes.
            </p>
          </div>

          <div className="card card-red">
            <Clock className="text-red mb-20" size={48} />
            <h4 className="card-title text-red-dark">Bajas Presiones</h4>
            <p className="card-text text-red-dark italic font-bold">
              Limpieza desde el contador hacia el interior. Imprescindible tener seguro de vivienda.
            </p>
          </div>
        </div>
      </section>

      <Gallery images={galleryImages} />

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <h3 className="footer-logo italic font-black">DESATASCOS OMEGA</h3>
            <p className="footer-desc">Servicio profesional de saneamiento en Extremadura. Atendemos Cáceres, Badajoz y alrededores.</p>
          </div>

          <div>
            <h4 className="footer-heading">Contacto</h4>
            <ul className="footer-list">
              <li className="flex-center gap-2">
                <Phone size={16} className="text-teal" /> {phoneNumber1}
              </li>
              <li className="flex-center gap-2 text-red font-bold">
                <Clock size={16} /> Urgencias: {phoneNumberUrgencias}
              </li>
              <li className="flex-center gap-2">
                <Mail size={16} className="text-teal" />
                <a href="mailto:omegadesatascosmantenimiento@gmail.com">omegadesatascosmantenimiento@gmail.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Servicios Extra</h4>
            <ul className="footer-list">
              <li>• Localización de fugas de agua.</li>
              <li>• Reestructuración de bajantes.</li>
              <li>• Mantenimiento de arquetas.</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Desatascos Omega. Todos los derechos reservados.</p>
          <p className="signature">
            Desarrollado por <span className="text-teal">@naanii021</span>
          </p>
        </div>
      </footer>

      <a
        href={`https://wa.me/34${phoneNumber1}`}
        className="whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp para contactar"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}


