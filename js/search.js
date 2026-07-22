(function () {
  'use strict';

  var INDEX = [
    { url: 'index.html', title: 'Inicio', desc: 'Despacho de abogados en la Ciudad de México especializado en derecho laboral empresarial.', keys: 'inicio home despacho abogados ciudad de méxico cdmx laboral empresarial' },
    { url: 'la-firma.html', title: 'La Firma', desc: 'Acerca de Dayana Reyes y Abogados: visión, misión, valores y enfoque.', keys: 'firma acerca visión misión valores enfoque quiénes somos' },
    { url: 'nuestro-equipo.html', title: 'Nuestro Equipo', desc: 'Socios y red de aliados estratégicos del despacho.', keys: 'equipo socios aliados abogados dayana reyes césar monsalvo' },
    { url: 'practica-legal.html', title: 'Práctica Legal', desc: 'Áreas de práctica: derecho laboral empresarial, constitucional, administrativo y regulatorio.', keys: 'práctica legal servicios áreas derecho laboral constitucional administrativo regulatorio' },
    { url: 'practica-legal.html#lab-consultoria-individual', title: 'Consultoría Laboral Individual', desc: 'Asesoría en relaciones laborales individuales, contratos y rescisiones.', keys: 'consultoría laboral individual contrato rescisión despido liquidación finiquito asesoría' },
    { url: 'practica-legal.html#lab-consultoria-colectiva', title: 'Consultoría Laboral Colectiva', desc: 'Asesoría en relaciones colectivas de trabajo, sindicatos y CCT.', keys: 'consultoría colectiva sindicato contrato colectivo cct negociación huelga' },
    { url: 'practica-legal.html#lab-cumplimiento', title: 'Cumplimiento Normativo Laboral', desc: 'Prevención de riesgos y cumplimiento de la normatividad laboral.', keys: 'cumplimiento normativo prevención riesgos nom stps regulación obligaciones patronales' },
    { url: 'practica-legal.html#lab-auditorias', title: 'Auditorías Laborales', desc: 'Auditorías preventivas y correctivas para cumplimiento laboral.', keys: 'auditoría laboral preventiva correctiva revisión diagnóstico' },
    { url: 'practica-legal.html#lab-inspecciones', title: 'Inspecciones Laborales', desc: 'Atención y defensa ante inspecciones de la STPS.', keys: 'inspección laboral stps secretaría trabajo defensa multa sanción' },
    { url: 'practica-legal.html#lab-litigio-individual', title: 'Litigio Laboral Individual', desc: 'Representación en juicios laborales individuales ante tribunales.', keys: 'litigio laboral individual juicio demanda tribunal conciliación sentencia' },
    { url: 'practica-legal.html#lab-litigio-colectivo', title: 'Litigio Laboral Colectivo', desc: 'Representación en conflictos colectivos de trabajo.', keys: 'litigio colectivo huelga emplazamiento conflicto colectivo' },
    { url: 'practica-legal.html#lab-amparo', title: 'Amparo en Materia Laboral', desc: 'Juicio de amparo contra actos de autoridad en materia laboral.', keys: 'amparo laboral juicio garantías constitucional tribunal' },
    { url: 'practica-legal.html#adm-consultoria', title: 'Consultoría Administrativa', desc: 'Asesoría en derecho administrativo y regulatorio.', keys: 'consultoría administrativa regulatoria permisos licencias gobierno' },
    { url: 'practica-legal.html#adm-cumplimiento', title: 'Cumplimiento Administrativo', desc: 'Cumplimiento normativo en materia administrativa y regulatoria.', keys: 'cumplimiento administrativo regulatorio normatividad' },
    { url: 'practica-legal.html#adm-defensa', title: 'Defensa frente a Actos de Autoridad', desc: 'Defensa contra multas, clausuras y actos de autoridad.', keys: 'defensa autoridad multa clausura acto administrativo recurso' },
    { url: 'practica-legal.html#adm-litigio', title: 'Litigio Constitucional y Administrativo', desc: 'Litigio ante tribunales administrativos y constitucionales.', keys: 'litigio constitucional administrativo tribunal contencioso nulidad' },
    { url: 'practica-legal.html#adm-amparo', title: 'Amparo Administrativo', desc: 'Amparo contra actos de autoridad administrativa.', keys: 'amparo administrativo regulatorio constitucional' },
    { url: 'actualidad-legal.html', title: 'Actualidad Legal', desc: 'Publicaciones, conferencias, seminarios y contenido de actualidad en materia laboral.', keys: 'actualidad legal noticias publicaciones conferencias eventos' },
    { url: 'publicaciones.html', title: 'Publicaciones', desc: 'Artículos en revistas jurídicas: Abogacía, Foro Jurídico, Abogado Corporativo.', keys: 'publicaciones artículos revista abogacía foro jurídico uma icsoe repse vacaciones nom' },
    { url: 'entrevistas.html', title: 'Entrevistas', desc: 'Entrevistas en El Economista sobre derecho laboral.', keys: 'entrevistas economista medios utilidades desconexión digital prestaciones contrato' },
    { url: 'conferencias-presenciales.html', title: 'Conferencias Presenciales', desc: 'Ponencias presenciales ante organismos empresariales y ecosistemas de emprendimiento.', keys: 'conferencias presenciales ponencia techstars coparmex jornada laboral ley silla' },
    { url: 'conferencias-virtuales.html', title: 'Conferencias Virtuales', desc: 'Webinars y conferencias en línea sobre derecho laboral.', keys: 'conferencias virtuales webinar zoom bonfiglio nom outsourcing' },
    { url: 'mesas-debate.html', title: 'Mesas de Discusión y Debate', desc: 'Participación en mesas de discusión sobre justicia laboral y perspectiva de género.', keys: 'mesas discusión debate justicia laboral género avina equis' },
    { url: 'mesas-redondas.html', title: 'Mesas Redondas', desc: 'Mesas redondas sobre la reducción de la jornada laboral.', keys: 'mesas redondas codex jornada laboral reducción productividad' },
    { url: 'seminarios.html', title: 'Seminarios Presenciales', desc: 'Seminarios en universidades y casas de la cultura jurídica.', keys: 'seminarios presenciales universidad nayarit villahermosa tabasco repse vacaciones' },
    { url: 'talleres.html', title: 'Talleres Presenciales', desc: 'Talleres prácticos de derecho del trabajo para equipos de RH y directivos.', keys: 'talleres presenciales derecho trabajo uvm salario mínimo periodo prueba' },
    { url: 'podcasts.html', title: 'Podcasts', desc: 'Participaciones en podcasts sobre derecho laboral y seguridad social.', keys: 'podcasts audio derecho laboral seguridad social' },
    { url: 'blog.html', title: 'Notas Periodísticas', desc: 'Noticias y opiniones en medios sobre derecho laboral y empresarial.', keys: 'notas periodísticas blog noticias opinión prensa medios' },
    { url: 'educacion-continua.html', title: 'Educación Continua', desc: 'Cursos y diplomados en derecho laboral empresarial y seguridad social.', keys: 'educación continua cursos diplomados formación capacitación derecho trabajo seguridad social ipd' },
    { url: 'educacion-continua.html#cursos', title: 'Cursos', desc: 'Curso de Derecho del Trabajo y Seguridad Social con Enfoque Empresarial.', keys: 'cursos derecho trabajo seguridad social empresarial repse riesgos salario mínimo jornada' },
    { url: 'educacion-continua.html#diplomados', title: 'Diplomados', desc: 'Diplomado en Derecho de la Seguridad Social: IMSS, pensiones, AFORES, INFONAVIT.', keys: 'diplomados diplomado seguridad social imss pensiones afores infonavit icsoe sisub fiscalización' },
    { url: 'contacto.html', title: 'Contacto', desc: 'Agende una consulta legal con nuestro despacho en la Ciudad de México.', keys: 'contacto consulta cita agendar teléfono correo dirección cdmx ciudad de méxico' },
    { url: 'nota-jornada-laboral.html', title: 'Estímulos Fiscales por Jornada Laboral', desc: 'Gobierno prepara estímulos fiscales a empresas por reforma de jornada laboral de 40 horas.', keys: 'estímulos fiscales jornada laboral 40 horas mipymes stps reforma' },
    { url: 'nota-riesgos-reglas.html', title: 'Riesgos y Reglas de la Jornada de 40 Horas', desc: 'Expertos advierten riesgos de simulación y piden reglas claras para la jornada laboral.', keys: 'riesgos reglas jornada 40 horas simulación barra mexicana abogados bma' },
    { url: 'aviso-de-privacidad.html', title: 'Aviso de Privacidad', desc: 'Aviso de privacidad de Dayana Reyes y Abogados, S.C.', keys: 'aviso privacidad datos personales protección' }
  ];

  function normalize(str) {
    return str.toLowerCase()
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function search(query) {
    var q = normalize(query);
    if (q.length < 2) return [];

    var terms = q.split(' ').filter(function (t) { return t.length >= 2; });
    if (!terms.length) return [];

    var scored = [];
    INDEX.forEach(function (entry) {
      var haystack = normalize(entry.title + ' ' + entry.desc + ' ' + entry.keys);
      var score = 0;

      // Exact phrase bonus
      if (haystack.indexOf(q) !== -1) score += 10;

      terms.forEach(function (term) {
        if (haystack.indexOf(term) !== -1) score += 3;
        if (normalize(entry.title).indexOf(term) !== -1) score += 5;
        if (normalize(entry.keys).indexOf(term) !== -1) score += 2;
      });

      if (score > 0) {
        scored.push({ entry: entry, score: score });
      }
    });

    scored.sort(function (a, b) { return b.score - a.score; });
    return scored.slice(0, 4).map(function (s) { return s.entry; });
  }

  // Expose to layout
  window.__siteSearch = search;
})();
