import { useEffect, useRef, useState, type CSSProperties, type FocusEvent, type KeyboardEvent } from "react";
import {
  MapPin, Gauge, Check, Phone, UserX, Hourglass, Clock, CheckCircle2, Moon, Sun, ArrowUp,
} from "lucide-react";
import "./landing-isp.css";

// Landing de campaña Meta Ads: Lucky Net Finder para ISPs y wisperos (Veracruz).
// La conversión de la campaña es el clic a WhatsApp (evento Contact del pixel).
// Diseño: Hallmark, tema Dusk en papel claro con la paleta de Lucky (estilos en ./landing-isp.css, con alcance .hm).
// Fotos: generadas con IA (Magnific) como sustitutos, en /public/landing-isp; se cambian por fotos reales.
const WHATSAPP_NUMBER = "522299124066"; // Wicho
const WHATSAPP_MESSAGE = "Hola, vi el anuncio de Lucky Net Finder. Quiero checar cobertura en: ";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
const PHONE_DISPLAY = "229 912 4066";
const PHONE_TEL = "+522299124066";
const CTA_LABEL = "Verificar cobertura gratis";
const IMG = "/landing-isp";
const LOGO = "/lovable-uploads/610b27c6-0be9-43b4-b228-49811a215cec.png";
const FONTS_HREF =
  "https://fonts.googleapis.com/css2?family=Wix+Madefor+Display:wght@600;700&family=Wix+Madefor+Text:wght@400;600&display=swap";
const THEME_KEY = "lnf-isp-theme";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const trackContact = (placement: string) => {
  window.fbq?.("track", "Contact", {
    content_name: "Lucky Net Finder ISP",
    content_category: placement,
  });
};

// Logo oficial de WhatsApp (trazo de Simple Icons, CC0); toma el color del texto del botón.
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const WhatsAppButton = ({ placement }: { placement: string }) => (
  <a
    className="hm-btn"
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => trackContact(placement)}
  >
    <WhatsAppIcon />
    {CTA_LABEL}
  </a>
);

const steps = [
  { title: "Manda la ubicación de tu cliente", line: "El pin o la dirección, y cuántos megas necesita." },
  { title: "Cobertura en 1 minuto", line: "Si hay servicio, en cuánto se instala y cuánto sale." },
  { title: "Vendes con tu marca", line: "Se lo ofreces como si fuera tu red." },
];

const pains = [
  { icon: UserX, text: "Te piden servicio fuera de tu zona y lo dejas ir" },
  { icon: Hourglass, text: "Saber si hay factibilidad te toma horas o días" },
  { icon: MapPin, text: "Abrir la laptop, Google Earth, cargar el KMZ... 40 minutos o más" },
  { icon: Clock, text: "Cuando por fin contestas, el cliente ya contrató con otro" },
];

const reasons = [
  { title: "Un solo contrato", text: "Firmas con Lucky y tienes acceso a toda la red. Sin buscar ni negociar con cada proveedor." },
  { title: "Mejores condiciones", text: "Negociamos por volumen con toda la red. Condiciones que difícilmente consigues solo." },
  { title: "Un solo contacto", text: "Si algo pasa con un enlace, le hablas a Lucky. No persigues a nadie." },
  { title: "Respuesta en 1 minuto", text: "Cada consulta nueva se resuelve igual de rápido, desde tu celular." },
];

const faqs = [
  { q: "¿El cliente sigue siendo mío?", a: "Sí. El contacto con el cliente es tuyo y el aliado lo respeta por contrato." },
  { q: "¿Se vende con mi marca?", a: "Sí. Le ofreces el servicio a tu cliente con tu marca, como si fuera tu red. El aliado da el servicio y tú conservas la relación con el cliente." },
  { q: "¿Qué pasa si no hay cobertura?", a: "Te lo decimos en la misma consulta, sin hacerte esperar. Si el caso lo pide, un asesor de Lucky revisa otras opciones contigo." },
  { q: "¿Cuánto cuesta usar Net Finder?", a: "Verificar cobertura es gratis. El precio del enlace depende de la zona y de la capacidad que necesita tu cliente, y Net Finder te lo da en la misma respuesta." },
  { q: "¿Con quién firmo?", a: "Con Lucky Intelligence. Un solo contrato y un solo contacto para toda la red de aliados." },
  { q: "¿Para qué tipo de clientes es?", a: "Para clientes de negocio: pymes, sucursales, bodegas, escuelas y empresas que necesitan internet dedicado. No es para servicio residencial." },
];

// La consulta y lo que contesta Net Finder: un ejemplo armado con el propio texto de la página, sin datos inventados.
const CoverageCheck = ({ rise = false }: { rise?: boolean }) => {
  const r = (i: number) => (rise ? { className: "hm-rise", style: { "--i": i } as CSSProperties } : {});
  return (
    <div className="hm-glass hm-check">
      <p className="hm-label">Ejemplo de consulta</p>
      <div className="hm-check__ask">
        <p {...r(0)}><span className="hm-row"><MapPin aria-hidden="true" />Pin de ubicación de tu cliente</span></p>
        <p {...r(1)}><span className="hm-row"><Gauge aria-hidden="true" />100 megas simétricos</span></p>
      </div>
      <div className="hm-check__answer">
        <p {...r(2)}>Lo que te contesta</p>
        <ul className="hm-check__rows">
          {["Si hay servicio", "En cuánto se instala", "Cuánto sale"].map((t, i) => (
            <li key={t} {...r(3 + i)}><span className="hm-row hm-row--done"><Check aria-hidden="true" />{t}</span></li>
          ))}
        </ul>
      </div>
      <p className={`hm-open${rise ? " hm-rise" : ""}`} style={rise ? ({ "--i": 6 } as CSSProperties) : undefined}>
        <span className="hm-open__dot" aria-hidden="true" />
        Tú se lo ofreces con tu marca
      </p>
    </div>
  );
};

const LuckyNetFinderISP = () => {
  const [step, setStep] = useState(0);
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    try { return localStorage.getItem(THEME_KEY) === "dark" ? "dark" : "light"; } catch { return "light"; }
  });

  // El tema vive en <html> mientras la landing está abierta (así también toma la barra de scroll), y se quita al salir.
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem(THEME_KEY, theme); } catch { /* sin almacenamiento: solo dura esta visita */ }
    return () => { delete document.documentElement.dataset.theme; };
  }, [theme]);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    document.title = "Lucky Net Finder para ISPs y wisperos de Veracruz | Lucky Intelligence";
    if (!document.getElementById("hm-fonts")) {
      const link = document.createElement("link");
      link.id = "hm-fonts";
      link.rel = "stylesheet";
      link.href = FONTS_HREF;
      document.head.appendChild(link);
    }
    if (window.location.hash) {
      setTimeout(() => {
        document.querySelector(window.location.hash)?.scrollIntoView({ block: "start" });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  // Volver arriba: CSS lo muestra con scroll-state donde existe; si no, un IntersectionObserver sobre el hero.
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    if (CSS.supports("container-type", "scroll-state")) return;
    const hero = document.getElementById("inicio");
    if (!hero) return;
    const io = new IntersectionObserver(([e]) => setScrolled(!e.isIntersecting));
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  const scrollToTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    document.getElementById("inicio")?.focus({ preventScroll: true });
  };

  // Si el botón se oculta con el foco encima (Inicio, Re Pág), el foco pasa al inicio en vez de perderse.
  const onTopBlur = (e: FocusEvent<HTMLButtonElement>) => {
    if (!e.relatedTarget && getComputedStyle(e.currentTarget).visibility === "hidden") {
      document.getElementById("inicio")?.focus({ preventScroll: true });
    }
  };

  // Pestañas: la selección sigue al foco; flechas, Inicio y Fin.
  const onTabKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    const last = steps.length - 1;
    const next =
      e.key === "ArrowDown" || e.key === "ArrowRight" ? (step === last ? 0 : step + 1)
      : e.key === "ArrowUp" || e.key === "ArrowLeft" ? (step === 0 ? last : step - 1)
      : e.key === "Home" ? 0
      : e.key === "End" ? last
      : null;
    if (next === null) return;
    e.preventDefault();
    setStep(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className={`hm${scrolled ? " is-scrolled" : ""}`}>
      {/* Encabezado: el logo a la izquierda; el cambio de tema y la acción a la derecha */}
      <header className="hm-mast">
        <div className="hm-wrap hm-mast__row">
          <img src={theme === "dark" ? `${IMG}/logo-claro.png` : LOGO} alt="Lucky Intelligence" width={874} height={257} />
          <div className="hm-mast__end">
            <button
              type="button"
              className="hm-theme"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              aria-label={theme === "light" ? "Cambiar a tema oscuro" : "Cambiar a tema claro"}
            >
              {theme === "light" ? <Moon aria-hidden="true" /> : <Sun aria-hidden="true" />}
            </button>
            <div className="hm-mast__action"><WhatsAppButton placement="header" /></div>
          </div>
        </div>
      </header>

      {/* Hero: Settled */}
      <section id="inicio" className="hm-hero" tabIndex={-1}>
        <div className="hm-wrap hm-hero__grid">
          <div className="hm-hero__text">
            <h1>¿Te piden servicio donde tu red no llega?</h1>
            <p className="lead">ISPs y wisperos de Veracruz: checa cobertura en 1 minuto y vende con tu marca.</p>
            <WhatsAppButton placement="hero" />
          </div>
          <div className="hm-hero__visual">
            <figure className="hm-hero__photo" data-slot="hero" data-alt="Un técnico de tu red revisando su celular en una azotea con antenas, al atardecer">
              <img
                src={`${IMG}/hero-1920.webp`}
                srcSet={`${IMG}/hero-960.webp 960w, ${IMG}/hero-1920.webp 1920w`}
                sizes="(min-width: 60rem) 58vw, 100vw"
                alt="Técnico de un ISP revisa su celular junto a una torre con antenas en una azotea de Veracruz, al atardecer"
                width={1920}
                height={1086}
                {...({ fetchpriority: "high" } as Record<string, string>)}
              />
            </figure>
            <CoverageCheck rise />
          </div>
        </div>
      </section>

      {/* Así de fácil: la lista de pasos junto a un panel que cambia con ella */}
      <section id="como-funciona" className="hm-sec">
        <div className="hm-wrap hm-split">
          <div>
            <h2>Así de fácil</h2>
            <p className="lead">Le escribes a Lucky Net Finder por WhatsApp, como le escribes a cualquiera.</p>
            <div className="hm-tabs" role="tablist" aria-label="Cómo funciona" aria-orientation="vertical">
              {steps.map((s, i) => (
                <button
                  key={s.title}
                  ref={(el) => { tabRefs.current[i] = el; }}
                  type="button"
                  role="tab"
                  id={`hm-tab-${i}`}
                  aria-selected={step === i}
                  tabIndex={step === i ? 0 : -1}
                  className="hm-tab"
                  onClick={() => setStep(i)}
                  onKeyDown={onTabKey}
                >
                  <span className="hm-tab__dot" aria-hidden="true" />
                  <span className="hm-tab__title">{s.title}</span>
                  <span className="hm-tab__line">{s.line}</span>
                </button>
              ))}
            </div>
            <div className="hm-tour__action"><WhatsAppButton placement="como-funciona" /></div>
          </div>

          <div className="hm-tour__panels">
            <div role="tabpanel" id="hm-panel-0" aria-labelledby="hm-tab-0" hidden={step !== 0}>
              <div className="hm-pane">
                <figure className="hm-pane__photo" data-slot="paso-1" data-alt="Un celular mandando el pin de ubicación de un cliente por WhatsApp">
                  <img src={`${IMG}/telefono.webp`} alt="Mano sosteniendo un celular con un mapa y un pin de ubicación, con antenas de fondo" width={900} height={1117} loading="lazy" />
                </figure>
              </div>
            </div>
            <div role="tabpanel" id="hm-panel-1" aria-labelledby="hm-tab-1" hidden={step !== 1}>
              <div className="hm-pane">
                <div className="hm-panel hm-answer">
                  <p className="hm-figure">1 min</p>
                  <p className="hm-label">para saber si hay cobertura</p>
                  <ul className="hm-answer__rows">
                    <li><span>¿Hay servicio?</span><span><Check aria-hidden="true" />Te lo decimos</span></li>
                    <li><span>Instalación</span><span><Check aria-hidden="true" />En cuánto tiempo</span></li>
                    <li><span>Precio</span><span><Check aria-hidden="true" />Cuánto sale</span></li>
                  </ul>
                </div>
              </div>
            </div>
            <div role="tabpanel" id="hm-panel-2" aria-labelledby="hm-tab-2" hidden={step !== 2}>
              <div className="hm-pane">
                <div className="hm-well">
                  <div className="hm-offer">
                    <h3>Internet dedicado para tu negocio</h3>
                    <dl>
                      <dt>Capacidad</dt><dd>100 megas simétricos</dd>
                      <dt>Proveedor</dt><dd>Tu marca</dd>
                    </dl>
                    <p className="hm-label hm-offer__note">Ejemplo de propuesta</p>
                  </div>
                </div>
                <div className="hm-caption">
                  <p>Vendes con tu marca</p>
                  <p>El cliente sigue siendo tuyo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Antes y después */}
      <section id="problema" className="hm-sec hm-sec--s">
        <div className="hm-wrap hm-split hm-split--even">
          <div>
            <h2>Así se te van los clientes</h2>
            <p className="lead">Un negocio te pide internet y no sabes si llegas. Para cuando contestas, ya se fue con otro.</p>
            <ul className="hm-pains">
              {pains.map(({ icon: Icon, text }) => (
                <li key={text}><Icon aria-hidden="true" />{text}</li>
              ))}
            </ul>
          </div>
          <div>
            <figure className="hm-photo hm-photo--4x3" data-slot="antes" data-alt="El dueño de un ISP revisando factibilidad de noche, a mano">
              <img src={`${IMG}/problema.webp`} alt="Dueño de un ISP cansado frente a su laptop con un mapa satelital, de noche en su oficina" width={1200} height={900} loading="lazy" />
            </figure>
            <div className="hm-tally">
              <div><p className="hm-label">Antes</p><span className="hm-figure">Horas o días</span></div>
              <div><p className="hm-label">Con Lucky Net Finder</p><span className="hm-figure is-now">1 minuto</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué con Lucky */}
      <section id="por-que" className="hm-sec">
        <div className="hm-wrap hm-rows">
          <div>
            <h2>¿Por qué con Lucky?</h2>
            <p className="lead">Un socio estratégico para ISPs, no solo un proveedor.</p>
          </div>
          <ul className="hm-rows__list">
            {reasons.map((r) => (
              <li key={r.title}><h3>{r.title}</h3><p>{r.text}</p></li>
            ))}
          </ul>
        </div>
      </section>

      {/* La red de aliados */}
      <section id="red" className="hm-sec hm-sec--l">
        <div className="hm-wrap hm-split hm-split--mirror">
          <div>
            <h2>Donde tú no llegas, llega la red</h2>
            <p className="lead">Cuando tu cliente está fuera de tu cobertura, un aliado de la red le da el servicio y tú se lo vendes con tu marca.</p>
            <ul className="hm-checks">
              {["El cliente es tuyo: el aliado lo respeta por contrato", "Vendes con tu marca, como si fuera tu red", "Creces sin poner una sola torre"].map((t) => (
                <li key={t}><CheckCircle2 aria-hidden="true" />{t}</li>
              ))}
            </ul>
            <div className="hm-tally">
              <div><span className="hm-figure">300+</span><p className="hm-label">aliados en la red</p></div>
              <div><span className="hm-figure">25+</span><p className="hm-label">años de experiencia</p></div>
            </div>
          </div>
          <figure className="hm-photo hm-photo--5x4" data-slot="red" data-alt="Técnicos de un aliado instalando una antena en el techo de un negocio">
            <img src={`${IMG}/instalacion.webp`} alt="Dos técnicos instalan una antena en el techo de un negocio en Veracruz" width={1600} height={905} loading="lazy" />
          </figure>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section id="preguntas" className="hm-sec" aria-labelledby="hm-faq-title">
        <div className="hm-wrap hm-rows">
          <h2 id="hm-faq-title">Preguntas frecuentes</h2>
          <div className="hm-faq">
            {faqs.map(({ q, a }) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Cierre: la misma hora, detrás de la acción */}
      <section id="contacto" className="hm-close">
        <figure className="hm-close__bg" data-slot="cierre" data-alt="Una torre de tu red al anochecer">
          <picture>
            <source media="(max-width: 47.99rem)" srcSet={`${IMG}/torre-movil.webp`} />
            <img src={`${IMG}/torre-1920.webp`} alt="" width={1920} height={960} loading="lazy" />
          </picture>
        </figure>
        <div className="hm-wrap">
          <h2>¿Tienes un cliente esperando?</h2>
          <p className="lead">Mándanos su ubicación por WhatsApp y en 1 minuto sabes si hay servicio. Nunca más le digas “ahí no llegamos”.</p>
          <div className="hm-close__actions">
            <WhatsAppButton placement="cta-final" />
            <a className="hm-btn hm-btn--quiet" href={`tel:${PHONE_TEL}`} onClick={() => trackContact("telefono")}>
              <Phone aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Footer: statement */}
      <footer className="hm-foot">
        <div className="hm-wrap">
          <p className="hm-foot__statement">Hacemos que las cosas sucedan.</p>
          <div className="hm-foot__meta">
            <img src={theme === "dark" ? `${IMG}/logo-claro.png` : LOGO} alt="Lucky Intelligence" width={874} height={257} loading="lazy" />
            <p>© {new Date().getFullYear()} Lucky Intelligence. 25+ años en telecomunicaciones.</p>
            <a href="/policies/privacy">Política de privacidad</a>
          </div>
        </div>
      </footer>

      {/* Flotantes: volver arriba (aparece al bajar) y WhatsApp siempre a la mano */}
      <div className="hm-float">
        <button type="button" className="hm-top" onClick={scrollToTop} onBlur={onTopBlur} aria-label="Volver arriba">
          <ArrowUp aria-hidden="true" />
        </button>
        <a
          className="hm-fab"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackContact("flotante")}
          aria-label={`${CTA_LABEL} por WhatsApp`}
          title={CTA_LABEL}
        >
          <WhatsAppIcon />
        </a>
      </div>
    </div>
  );
};

export default LuckyNetFinderISP;
