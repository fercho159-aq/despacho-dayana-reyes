/* =================================================================
   DAYANA REYES Y ABOGADOS — JavaScript principal (vanilla)
   -----------------------------------------------------------------
   1. Menú móvil (hamburguesa) accesible
   2. Acordeón de FAQ (animado y accesible)
   3. Efecto de header al hacer scroll
   4. Animaciones de entrada (IntersectionObserver)
   5. Validación de formulario de contacto
   6. Año dinámico del footer
   Sin dependencias externas — optimizado para WPO.
   ================================================================= */
(function () {
  'use strict';

  /* ---------------------------------------------------------------
     1. MENÚ MÓVIL ACCESIBLE
     --------------------------------------------------------------- */
  var navToggle  = document.querySelector('.nav-toggle');
  var nav        = document.getElementById('site-nav');
  var backdrop   = document.querySelector('.nav-backdrop');
  var body       = document.body;

  function openMenu() {
    nav.classList.add('is-open');
    if (backdrop) backdrop.classList.add('is-open');
    navToggle.setAttribute('aria-expanded', 'true');
    body.classList.add('no-scroll');
    // Mover el foco al primer enlace para navegación con teclado
    var firstLink = nav.querySelector('a, button');
    if (firstLink) firstLink.focus();
  }

  function closeMenu(returnFocus) {
    nav.classList.remove('is-open');
    if (backdrop) backdrop.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    body.classList.remove('no-scroll');
    if (returnFocus) navToggle.focus();
  }

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      isOpen ? closeMenu(true) : openMenu();
    });

    if (backdrop) {
      backdrop.addEventListener('click', function () { closeMenu(false); });
    }

    // Cerrar al hacer clic en un enlace de navegación
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { closeMenu(false); });
    });

    // Cerrar con la tecla Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        closeMenu(true);
      }
    });

    // Restablecer al pasar a escritorio (evita estados bloqueados)
    var mql = window.matchMedia('(min-width: 900px)');
    var handleViewport = function (e) { if (e.matches) closeMenu(false); };
    mql.addEventListener ? mql.addEventListener('change', handleViewport)
                         : mql.addListener(handleViewport); // compat. navegadores antiguos
  }

  /* ---------------------------------------------------------------
     2. ACORDEÓN DE FAQ
     --------------------------------------------------------------- */
  var faqItems = document.querySelectorAll('.faq__item');

  faqItems.forEach(function (item) {
    var btn    = item.querySelector('.faq__question');
    var answer = item.querySelector('.faq__answer');
    if (!btn || !answer) return;

    btn.addEventListener('click', function () {
      var isOpen = item.classList.contains('is-open');

      // Comportamiento "acordeón": cerrar los demás (quitar este bloque
      // si se desea permitir varias respuestas abiertas a la vez).
      faqItems.forEach(function (other) {
        if (other !== item && other.classList.contains('is-open')) {
          other.classList.remove('is-open');
          other.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
          other.querySelector('.faq__answer').style.maxHeight = null;
        }
      });

      if (isOpen) {
        item.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
        answer.style.maxHeight = null;
      } else {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // Recalcular altura del panel abierto al redimensionar la ventana
  window.addEventListener('resize', function () {
    document.querySelectorAll('.faq__item.is-open .faq__answer').forEach(function (a) {
      a.style.maxHeight = a.scrollHeight + 'px';
    });
  });

  /* ---------------------------------------------------------------
     3. EFECTO DE HEADER AL HACER SCROLL
     --------------------------------------------------------------- */
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 12);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------------------------------------------------------------
     4. ANIMACIONES DE ENTRADA (scroll reveal)
     --------------------------------------------------------------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    // Fallback: si no hay soporte, mostrar todo
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------------------------------------------------------------
     5. VALIDACIÓN DE FORMULARIO DE CONTACTO
     --------------------------------------------------------------- */
  var form = document.getElementById('contact-form');
  if (form) {
    var successBox = document.getElementById('form-success');

    var validators = {
      required: function (val) { return val.trim().length > 0; },
      email:    function (val) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim()); },
      tel:      function (val) { return /^[\d\s()+\-]{8,}$/.test(val.trim()); }
    };

    function setError(field, message) {
      field.classList.add('field--invalid');
      var errorEl = field.querySelector('.field__error');
      if (errorEl) errorEl.textContent = message;
      var input = field.querySelector('input, select, textarea');
      if (input) input.setAttribute('aria-invalid', 'true');
    }

    function clearError(field) {
      field.classList.remove('field--invalid');
      var errorEl = field.querySelector('.field__error');
      if (errorEl) errorEl.textContent = '';
      var input = field.querySelector('input, select, textarea');
      if (input) input.removeAttribute('aria-invalid');
    }

    function validateField(input) {
      var field = input.closest('.field');
      if (!field) return true;
      var val = input.value || '';

      if (input.hasAttribute('required') && !validators.required(val)) {
        setError(field, 'Este campo es obligatorio.');
        return false;
      }
      if (input.type === 'email' && val && !validators.email(val)) {
        setError(field, 'Introduzca un correo electrónico válido.');
        return false;
      }
      if (input.type === 'tel' && val && !validators.tel(val)) {
        setError(field, 'Introduzca un número de teléfono válido.');
        return false;
      }
      clearError(field);
      return true;
    }

    // Validación en tiempo real al salir de cada campo
    form.querySelectorAll('input, select, textarea').forEach(function (input) {
      input.addEventListener('blur', function () { validateField(input); });
      input.addEventListener('input', function () {
        if (input.closest('.field').classList.contains('field--invalid')) {
          validateField(input);
        }
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;
      var firstInvalid = null;

      form.querySelectorAll('input, select, textarea').forEach(function (input) {
        if (!validateField(input)) {
          valid = false;
          if (!firstInvalid) firstInvalid = input;
        }
      });

      // Validar consentimiento (checkbox de aviso de privacidad)
      var consent = form.querySelector('#consent');
      if (consent && !consent.checked) {
        valid = false;
        var consentField = consent.closest('.consent');
        if (consentField) consentField.style.color = '#c0392b';
        if (!firstInvalid) firstInvalid = consent;
      } else if (consent) {
        var cf = consent.closest('.consent');
        if (cf) cf.style.color = '';
      }

      if (!valid) {
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      /* --- ENVÍO ---
         Este sitio es estático. Para producción, conecte el formulario a:
         · Un endpoint propio (PHP/Node), o
         · Un servicio como Formspree/Web3Forms (cambie el atributo action),
         · o redirija a WhatsApp con los datos (ejemplo comentado abajo).
         Aquí mostramos el mensaje de éxito como demostración de UX. */

      // Ejemplo opcional: abrir WhatsApp con el mensaje precargado
      // var nombre = form.querySelector('#nombre').value;
      // var msg = encodeURIComponent('Hola, soy ' + nombre + ' y deseo agendar una consulta legal.');
      // window.open('https://wa.me/5215555555555?text=' + msg, '_blank');

      if (successBox) {
        form.querySelector('.form__body').style.display = 'none';
        successBox.classList.add('is-visible');
        successBox.setAttribute('tabindex', '-1');
        successBox.focus();
        successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        form.reset();
      }
    });
  }

  /* ---------------------------------------------------------------
     6. AÑO DINÁMICO EN EL FOOTER
     --------------------------------------------------------------- */
  var yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------------------------------------------------------
     7. WIDGET DE WHATSAPP — mensaje flotante de captación (CRO)
     --------------------------------------------------------------- */
  var waWidget = document.getElementById('wa-widget');
  if (waWidget) {
    var waClose = document.getElementById('wa-bubble-close');
    var waFloat = document.getElementById('whatsapp-float');
    var DISMISS_KEY = 'wa_bubble_dismissed';

    // Insignia roja "1" sobre el botón: aparece pronto para captar la atención
    setTimeout(function () { waWidget.classList.add('show-badge'); }, 1200);

    // ¿El usuario ya cerró el globo en esta sesión?
    var dismissed = false;
    try { dismissed = sessionStorage.getItem(DISMISS_KEY) === '1'; } catch (e) {}

    // Mostrar el globo automáticamente tras unos segundos (sin ser intrusivo)
    if (!dismissed) {
      setTimeout(function () { waWidget.classList.add('bubble-open'); }, 3500);
    }

    function closeBubble() {
      waWidget.classList.remove('bubble-open');
      try { sessionStorage.setItem(DISMISS_KEY, '1'); } catch (e) {}
    }

    // Botón de cierre del globo
    if (waClose) {
      waClose.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        closeBubble();
      });
    }

    // Al pulsar el botón flotante (abre WhatsApp) se oculta el globo
    if (waFloat) {
      waFloat.addEventListener('click', function () {
        waWidget.classList.remove('bubble-open');
      });
    }

    // Cerrar el globo con la tecla Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && waWidget.classList.contains('bubble-open')) {
        closeBubble();
      }
    });
  }

})();
