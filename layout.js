/* =================================================================
   DAYANA REYES Y ABOGADOS — Layout compartido del NUEVO SITIO
   -----------------------------------------------------------------
   Inyecta el header (con menús desplegables y megamenús) y el footer
   en todas las páginas internas de /sitio/, para no duplicar el
   menú en cada archivo mientras la estructura está en desarrollo.

   · Megamenú minimalista en escritorio (Práctica / Actualidad)
   · En móvil, todo colapsa al acordeón del panel lateral
   · Marca el enlace activo según <body data-page="...">
   NOTA: en producción este header puede "hornearse" en HTML estático
   para SEO óptimo (hoy va noindex).
   ================================================================= */
(function () {
  'use strict';

  var WA = 'https://wa.me/525640063748?text=Hola%2C%20deseo%20agendar%20una%20consulta%20legal%20laboral.';
  var CHEVRON = '<svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';

  /* ---------- HEADER ---------- */
  var header = ''
    + '<a class="skip-link" href="#main">Saltar al contenido principal</a>'
    + '<header class="site-header">'
    + '  <div class="container site-header__inner">'
    + '    <a class="logo" href="index.html" aria-label="Dayana Reyes y Abogados — Inicio">'
    + '      <img src="assets/logo34.png" alt="Dayana Reyes y Abogados" class="logo__img">'
    + '    </a>'
    + '    <button class="nav-toggle" type="button" aria-label="Abrir menú de navegación" aria-expanded="false" aria-controls="site-nav">'
    + '      <span class="nav-toggle__bar" aria-hidden="true"></span>'
    + '      <span class="nav-toggle__bar" aria-hidden="true"></span>'
    + '      <span class="nav-toggle__bar" aria-hidden="true"></span>'
    + '    </button>'
    + '    <nav class="nav" id="site-nav" aria-label="Navegación principal">'
    + '      <ul class="nav__list">'

    + '        <li><a class="nav__link" data-nav="inicio" href="index.html">Inicio</a></li>'

    /* La Firma — desplegable simple */
    + '        <li class="nav__item">'
    + '          <button class="nav__link nav__dropdown-toggle" type="button" data-nav="la-firma" aria-haspopup="true" aria-expanded="false">La Firma ' + CHEVRON + '</button>'
    + '          <ul class="nav__submenu">'
    + '            <li><a href="la-firma.html#acerca">Acerca de la firma</a></li>'
    + '            <li><a href="la-firma.html#vision">Nuestra visión</a></li>'
    + '            <li><a href="la-firma.html#mision">Nuestra misión</a></li>'
    + '            <li><a href="la-firma.html#valores">Nuestros valores</a></li>'
    + '          </ul>'
    + '        </li>'

    /* Nuestro Equipo — desplegable simple */
    + '        <li class="nav__item">'
    + '          <button class="nav__link nav__dropdown-toggle" type="button" data-nav="equipo" aria-haspopup="true" aria-expanded="false">Nuestro Equipo ' + CHEVRON + '</button>'
    + '          <ul class="nav__submenu">'
    + '            <li><a href="nuestro-equipo.html#socios">Socios</a></li>'
    + '            <li><a href="nuestro-equipo.html#aliados">Red de aliados estratégicos</a></li>'
    + '          </ul>'
    + '        </li>'

    /* Práctica Legal — MEGAMENÚ (2 áreas con servicios) */
    + '        <li class="nav__item">'
    + '          <button class="nav__link nav__dropdown-toggle" type="button" data-nav="practica" aria-haspopup="true" aria-expanded="false">Práctica Legal ' + CHEVRON + '</button>'
    + '          <div class="nav__submenu nav__submenu--mega">'
    + '            <div class="mega-col">'
    + '              <a class="mega-col__title" href="practica-legal.html#area-laboral">Derecho Laboral Empresarial</a>'
    + '              <ul>'
    + '                <li><a href="practica-legal.html#lab-consultoria-individual">Consultoría laboral individual</a></li>'
    + '                <li><a href="practica-legal.html#lab-consultoria-colectiva">Consultoría laboral colectiva</a></li>'
    + '                <li><a href="practica-legal.html#lab-cumplimiento">Cumplimiento normativo y prevención de riesgos</a></li>'
    + '                <li><a href="practica-legal.html#lab-auditorias">Auditorías laborales</a></li>'
    + '                <li><a href="practica-legal.html#lab-inspecciones">Atención de inspecciones laborales</a></li>'
    + '                <li><a href="practica-legal.html#lab-litigio">Litigio laboral individual y colectivo</a></li>'
    + '                <li><a href="practica-legal.html#lab-amparo">Amparo en materia laboral</a></li>'
    + '              </ul>'
    + '            </div>'
    + '            <div class="mega-col">'
    + '              <a class="mega-col__title" href="practica-legal.html#area-administrativo">Derecho Constitucional, Administrativo y Regulatorio</a>'
    + '              <ul>'
    + '                <li><a href="practica-legal.html#adm-consultoria">Consultoría administrativa y regulatoria</a></li>'
    + '                <li><a href="practica-legal.html#adm-cumplimiento">Cumplimiento normativo y prevención de riesgos</a></li>'
    + '                <li><a href="practica-legal.html#adm-defensa">Defensa frente a actos de autoridad</a></li>'
    + '                <li><a href="practica-legal.html#adm-litigio">Litigio constitucional y administrativo</a></li>'
    + '                <li><a href="practica-legal.html#adm-amparo">Amparo administrativo y regulatorio</a></li>'
    + '              </ul>'
    + '            </div>'
    + '          </div>'
    + '        </li>'

    /* Actualidad Legal — MEGAMENÚ (11 tipos de contenido) */
    + '        <li class="nav__item">'
    + '          <button class="nav__link nav__dropdown-toggle" type="button" data-nav="actualidad" aria-haspopup="true" aria-expanded="false">Actualidad Legal ' + CHEVRON + '</button>'
    + '          <div class="nav__submenu nav__submenu--mega">'
    + '            <div class="mega-col">'
    + '              <span class="mega-col__title">Contenidos</span>'
    + '              <ul>'
    + '                <li><a href="actualidad-legal.html#boletin">Boletín laboral</a></li>'
    + '                <li><a href="publicaciones.html">Publicaciones</a></li>'
    + '                <li><a href="entrevistas.html">Entrevistas</a></li>'
    + '                <li><a href="conferencias-presenciales.html">Conferencias presenciales</a></li>'
    + '                <li><a href="conferencias-virtuales.html">Conferencias virtuales</a></li>'
    + '                <li><a href="mesas-debate.html">Mesas de discusión y debate</a></li>'
    + '              </ul>'
    + '            </div>'
    + '            <div class="mega-col">'
    + '              <span class="mega-col__title">Eventos y medios</span>'
    + '              <ul>'
    + '                <li><a href="mesas-redondas.html">Mesas redondas</a></li>'
    + '                <li><a href="seminarios.html">Seminarios presenciales</a></li>'
    + '                <li><a href="talleres.html">Talleres presenciales</a></li>'
    + '                <li><a href="podcasts.html">Podcasts</a></li>'
    + '                <li><a href="blog.html">Notas periodísticas</a></li>'
    + '              </ul>'
    + '            </div>'
    + '          </div>'
    + '        </li>'

    + '        <li><a class="nav__link" data-nav="contacto" href="contacto.html">Contacto</a></li>'

    + '      </ul>'
    + '      <div class="nav__cta"><a class="btn btn--gold" href="contacto.html">Agendar Consulta Legal</a></div>'
    + '    </nav>'
    + '  </div>'
    + '</header>'
    + '<div class="nav-backdrop" aria-hidden="true"></div>';

  /* ---------- FOOTER ---------- */
  var footer = ''
    + '<footer class="site-footer" aria-label="Pie de página">'
    + '  <div class="container">'
    + '    <div class="footer__grid">'
    + '      <div class="footer__brand">'
    + '        <a class="logo" href="index.html" aria-label="Dayana Reyes y Abogados — Inicio">'
    + '          <img src="assets/logo34.png" alt="Dayana Reyes y Abogados" class="logo__img">'
    + '        </a>'
    + '        <p class="footer__about">Despacho de abogados en la Ciudad de México, especializado en derecho laboral empresarial y derecho constitucional, administrativo y regulatorio.</p>'
    + '      </div>'
    + '      <nav class="footer__col" aria-label="La Firma">'
    + '        <h4>La Firma</h4>'
    + '        <ul>'
    + '          <li><a href="la-firma.html#acerca">Acerca de la firma</a></li>'
    + '          <li><a href="la-firma.html#vision">Visión</a></li>'
    + '          <li><a href="la-firma.html#mision">Misión</a></li>'
    + '          <li><a href="la-firma.html#valores">Valores</a></li>'
    + '          <li><a href="nuestro-equipo.html#socios">Nuestro Equipo</a></li>'
    + '        </ul>'
    + '      </nav>'
    + '      <nav class="footer__col" aria-label="Práctica Legal">'
    + '        <h4>Práctica Legal</h4>'
    + '        <ul>'
    + '          <li><a href="practica-legal.html#area-laboral">Derecho Laboral Empresarial</a></li>'
    + '          <li><a href="practica-legal.html#area-administrativo">Constitucional, Administrativo y Regulatorio</a></li>'
    + '        </ul>'
    + '      </nav>'
    + '      <nav class="footer__col" aria-label="Más">'
    + '        <h4>Más</h4>'
    + '        <ul>'
    + '          <li><a href="actualidad-legal.html">Actualidad Legal</a></li>'
    + '        </ul>'
    + '      </nav>'
    + '      <div class="footer__col">'
    + '        <h4>Contacto</h4>'
    + '        <p class="footer__contact-line"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> Ciudad de México</p>'
    + '        <p class="footer__contact-line"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg> <a href="tel:+525640063748">+52 56 4006 3748</a></p>'
    + '        <p class="footer__contact-line"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg> <a href="mailto:contacto@dayanareyesabogados.com">contacto@dayanareyesabogados.com</a></p>'
    + '      </div>'
    + '    </div>'
    + '    <div class="footer__bottom">'
    + '      <p>&copy; <span id="current-year">2026</span> Dayana Reyes y Abogados. Todos los derechos reservados.</p>'
    + '      <nav class="footer__legal-links" aria-label="Enlaces legales">'
    + '        <a href="aviso-de-privacidad.html">Aviso de Privacidad</a>'
    + '      </nav>'
    + '    </div>'
    + '  </div>'
    + '</footer>';

  /* Widget flotante de WhatsApp (botón con globo de captación) */
  var wa = ''
    + '<div class="wa-widget" id="wa-widget">'
    + '  <div class="wa-bubble" id="wa-bubble" role="dialog" aria-label="Atención inmediata por WhatsApp">'
    + '    <button class="wa-bubble__close" id="wa-bubble-close" type="button" aria-label="Cerrar mensaje">'
    + '      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>'
    + '    </button>'
    + '    <a class="wa-bubble__link" href="' + WA + '" target="_blank" rel="noopener">'
    + '      <span class="wa-bubble__head">'
    + '        <span class="wa-bubble__avatar" aria-hidden="true">DR</span>'
    + '        <span class="wa-bubble__meta"><strong>Mtra. Dayana Reyes</strong><span class="wa-bubble__status"><span class="wa-dot" aria-hidden="true"></span> En línea ahora</span></span>'
    + '      </span>'
    + '      <span class="wa-bubble__msg">⚠️ ¿Su empresa enfrenta una demanda o inspección? <strong>Los plazos legales corren en su contra</strong> y cada día cuenta. No arriesgue su patrimonio: reciba atención hoy mismo.</span>'
    + '      <span class="wa-bubble__cta">Chatear ahora <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>'
    + '    </a>'
    + '  </div>'
    + '  <a class="whatsapp-float" id="whatsapp-float" href="' + WA + '" target="_blank" rel="noopener" aria-label="Escríbanos por WhatsApp">'
    + '    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>'
    + '    <span class="wa-badge" aria-hidden="true">1</span>'
    + '  </a>'
    + '</div>';

  // Inyección en el DOM (defer garantiza que el <main> ya existe)
  document.body.insertAdjacentHTML('afterbegin', header);
  document.body.insertAdjacentHTML('beforeend', footer + wa);

  // Marcar el enlace activo según data-page del <body>
  var page = document.body.getAttribute('data-page');
  if (page) {
    var active = document.querySelector('.nav__link[data-nav="' + page + '"]');
    if (active) active.setAttribute('aria-current', 'page');
  }

  // Desplegables / megamenús (clic — móvil y accesibilidad por teclado)
  var toggles = document.querySelectorAll('.nav__dropdown-toggle');
  toggles.forEach(function (t) {
    t.addEventListener('click', function (e) {
      e.preventDefault();
      var item = t.closest('.nav__item');
      var open = item.classList.toggle('is-open');
      t.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });

  // Año dinámico (por si la página no carga main.js)
  var y = document.getElementById('current-year');
  if (y) y.textContent = new Date().getFullYear();
})();
