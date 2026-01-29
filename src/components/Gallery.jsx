import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./gallery.css";

export function Gallery({ images = [], intervalMs = 1800 }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);


  const SLIDE_W = 300; 
  const GAP = 20;      

  // Imágenes para el loop infinito
  const loopImages = useMemo(() => {
    if (!images.length) return [];

    // Si hay pocas imágenes, duplicamos para que el loop sea suave
    const minNeeded = images.length < 6 ? 18 : images.length * 2;
    const out = [];
    while (out.length < minNeeded) out.push(...images);
    return out;
  }, [images]);

  // Cálculo de cuántas imágenes son visibles según el ancho
  const [visible, setVisible] = useState(1);

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      const usable = Math.min(1120, w - 36);
      const per = SLIDE_W + GAP;
      return Math.max(1, Math.floor(usable / per));
    };

    const update = () => setVisible(compute());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, loopImages.length - visible);

  const next = useCallback(() => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Ajuste si cambia visible o imágenes (evita que se quede index fuera de rango)
  useEffect(() => {
    setIndex((prev) => Math.max(0, Math.min(prev, maxIndex)));
  }, [maxIndex]);

  // Autoplay
  useEffect(() => {
    if (!loopImages.length || paused || maxIndex === 0) return;

    timerRef.current = setInterval(next, intervalMs);
    return () => clearInterval(timerRef.current);
  }, [loopImages.length, paused, maxIndex, intervalMs, next]);

  if (!loopImages.length) return null;

  const translatePx = index * (SLIDE_W + GAP);

  return (
    <section className="galleryWrap">
      <div className="container">
        <div className="galleryHead">
          <h3 className="section-title">Galería de Trabajos Realizados</h3>
          <p className="gallerySub">
            Imágenes reales de desatascos, limpiezas e inspecciones técnicas.
          </p>
        </div>

        <div
          className="carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <button className="carBtn left" onClick={prev} aria-label="Anterior" type="button">
            <ChevronLeft size={22} />
          </button>

          <div className="viewport">
            <div
              className="track"
              style={{
                transform: `translateX(-${translatePx}px)`,
              }}
            >
              {loopImages.map((src, i) => (
                <article className="slide" key={`${src}-${i}`}>
                  <div className="shot">
                    <img src={src} alt={`Trabajo ${i + 1}`} loading="lazy" />
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button className="carBtn right" onClick={next} aria-label="Siguiente" type="button">
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
