# Dayana Reyes y Abogados — Sitio web corporativo

Sitio web institucional para un despacho premium especializado en **Derecho Laboral Empresarial** en la Ciudad de México. Desarrollado con **HTML5 semántico, CSS3 moderno y JavaScript vanilla** (sin frameworks ni librerías externas), con enfoque *Mobile-First*, optimización de conversión (CRO) y SEO técnico.

---

## 🗂️ Árbol de archivos

```
despacho-dayana-reyes/
│
├── index.html                      # Home: hero, servicios, casos Antes/Después, FAQ
├── contacto.html                   # Formulario de alta conversión + datos + mapa
├── aviso-de-privacidad.html        # Aviso legal (LFPDPPP) + términos + cookies
│
├── servicios/
│   ├── defensa-patronal.html       # Servicio: Defensa Patronal y Litigio Laboral
│   └── auditoria-compliance.html   # Servicio: Auditoría y Compliance Laboral
│
├── css/
│   └── style.css                   # Sistema de diseño completo (variables, mobile-first)
│
├── js/
│   └── main.js                     # Menú móvil, acordeón FAQ, validación, scroll-reveal
│
├── assets/
│   └── img/                        # (Colocar aquí: og-image.jpg, logo, fotos del equipo)
│
├── robots.txt                      # Indexación para buscadores
├── sitemap.xml                     # Mapa del sitio para Google
└── README.md                       # Este archivo
```

---

## 🚀 Cómo visualizar el sitio

Al ser un sitio **100 % estático**, no requiere compilación. Opciones:

1. **Doble clic** en `index.html` para abrirlo en el navegador, o
2. Servirlo con un servidor local (recomendado, para que funcionen rutas y mapa):
   ```powershell
   # Con Python instalado:
   python -m http.server 8000
   # Luego abrir: http://localhost:8000
   ```

---

## 🎨 Sistema de diseño

Toda la personalización visual se centraliza en las **variables CSS** (`:root` en `css/style.css`):

| Variable          | Uso                       | Valor por defecto |
|-------------------|---------------------------|-------------------|
| `--c-guinda`      | Color primario (azul marino) | `#1E3A5F`      |
| `--c-oro`         | Acentos dorados / CTA     | `#C6A35C`         |
| `--c-marino`      | Header, footer, fondos    | `#122036`         |
| `--font-serif`    | Títulos (Playfair Display)| serif elegante    |
| `--font-sans`     | Texto (Inter)             | sans legible      |

Cambie un solo valor y se actualiza todo el sitio.

---

## ⚙️ Funcionalidad JavaScript (`js/main.js`)

- **Menú móvil (hamburguesa):** accesible con `aria-expanded`, cierre con `Escape`, clic fuera y bloqueo de scroll.
- **Acordeón FAQ:** animado por altura, accesible (`aria-controls` / `region`); abre uno a la vez.
- **Header dinámico:** sombra al hacer scroll.
- **Scroll-reveal:** animaciones de entrada vía `IntersectionObserver` (respeta `prefers-reduced-motion`).
- **Validación de formulario:** en tiempo real, con mensajes de error accesibles.
- **Widget de WhatsApp (CRO):** botón con ícono oficial + globo de mensaje con llamada a la acción de urgencia. Aparece automáticamente a los ~3.5 s, muestra insignia roja "1", se cierra con la × o `Escape` y recuerda el cierre durante la sesión (`sessionStorage`). Tiempos y texto editables en `js/main.js` (sección 7) y en el bloque `.wa-widget` del HTML.
- **Año dinámico** en el footer.

---

## ✅ Antes de publicar — Lista de reemplazos

Los siguientes datos son **marcadores de posición**. Sustitúyalos por los reales (busque y reemplace en todos los archivos):

| Marcador actual                              | Reemplazar por                          |
|----------------------------------------------|-----------------------------------------|
| `+52 55 1234 5678` / `tel:+525512345678`     | Teléfono real del despacho              |
| `5215512345678` (enlaces de WhatsApp)        | Número de WhatsApp corporativo real     |
| `contacto@dayanareyesabogados.mx`            | Correo real                             |
| `privacidad@dayanareyesabogados.mx`          | Correo para derechos ARCO               |
| `Av. Paseo de la Reforma 250…`               | Domicilio fiscal/real en CDMX           |
| `https://www.dayanareyesabogados.mx/`        | Dominio definitivo (canonical, OG, schema, sitemap) |
| Cifras del hero (`+15`, `+500`, `+300`)      | Métricas reales y verificables          |
| Casos de éxito (montos y resultados)         | Casos reales **con datos anonimizados** |
| Enlaces de redes (`sameAs`, footer)          | URLs reales de LinkedIn / Facebook      |

> ⚠️ **Nota deontológica:** en publicidad de servicios legales conviene asegurar que toda métrica, porcentaje o caso de éxito sea verificable y que los casos reales se presenten de forma anonimizada y con autorización del cliente.

---

## 📨 Conectar el formulario de contacto

El formulario incluye validación de cliente y muestra un mensaje de éxito de demostración. Para recibir los envíos, elija una opción en `contacto.html` / `js/main.js`:

- **Servicio sin backend** (rápido): cree una cuenta en [Formspree](https://formspree.io) o [Web3Forms](https://web3forms.com) y añada al `<form>`:
  ```html
  <form ... action="https://formspree.io/f/SU_ID" method="POST">
  ```
- **Backend propio:** apunte el `action` a su endpoint (PHP/Node) que envíe el correo.
- **Redirigir a WhatsApp:** descomente el bloque de ejemplo en `js/main.js` (sección 5).

---

## 🔍 SEO técnico incluido

- Etiquetas `<title>` y `meta description` únicas por página, con palabras clave locales de CDMX.
- `Open Graph` y `Twitter Cards` para compartir en redes.
- `canonical`, `robots`, `lang="es-MX"` y `theme-color`.
- **Datos estructurados Schema.org**: `LegalService`, `Service` y `BreadcrumbList` (JSON-LD).
- `sitemap.xml` y `robots.txt`.
- HTML semántico, jerarquía de encabezados correcta y `alt`/`aria` en elementos clave.

**Pendiente recomendado:** agregar `assets/img/og-image.jpg` (1200×630 px) para vista previa en redes y registrar el sitio en Google Search Console.

---

## ♿ Accesibilidad y rendimiento (WPO)

- Navegación operable por teclado, foco visible y `skip-link`.
- Atributos ARIA en menú, acordeón y formulario.
- Respeto a `prefers-reduced-motion`.
- Cero librerías JS pesadas; iconos en SVG inline; fuentes con `preconnect` + `display=swap`.

---

© 2026 Dayana Reyes y Abogados. Plantilla desarrollada a la medida.
