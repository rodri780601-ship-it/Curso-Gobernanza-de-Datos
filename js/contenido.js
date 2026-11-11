/* =========================================================
   Contenido del curso "Gobernanza de Datos en el Estado de Chile"
   Corporación Nacional Forestal (CONAF)
   ---------------------------------------------------------
   Este archivo contiene SOLO el contenido. Para editar textos,
   preguntas o el glosario no es necesario tocar app.js.
   Cada módulo tiene:
     - id, titulo, resumen, duracion, icono
     - html: contenido de la lección (puede incluir actividades
       mediante <div data-actividad="..."></div>)
     - quiz: preguntas de verificación {p, op[], c, e}
   ========================================================= */

window.CURSO = {
  titulo: "Gobernanza de Datos en el Estado de Chile",
  actualizado: "11 de noviembre de 2026",
  aprobacionFinal: 70, // % mínimo para aprobar la evaluación final

  modulos: [
    /* ======================= MÓDULO 1 ======================= */
    {
      id: "m1",
      titulo: "¿Qué es la gobernanza de datos?",
      resumen: "Conceptos básicos explicados con analogías forestales.",
      duracion: "60 min",
      icono: "🌱",
      html: `
<p class="idea-clave">Gobernar los datos es tratarlos como un activo de la institución, igual que un vehículo, un predio o una bodega: tienen dueño, inventario, reglas de uso, mantención y un destino final.</p>

<h2>Una analogía forestal</h2>
<p>Piense en un parque nacional. Tiene un administrador responsable, límites conocidos, un plan de manejo, reglas para visitantes, guardaparques que vigilan y registros de lo que ocurre. Nadie entra a talar sin permiso.</p>
<p>Los datos de CONAF necesitan lo mismo. Una planilla de planes de manejo sin responsable, sin definiciones y copiada en diez computadores es como un parque sin administrador: nadie sabe cuál es la versión correcta ni quién puede modificarla.</p>

<h2>Gobernanza, gestión y tecnología</h2>
<div class="rejilla">
  <div class="tarjeta"><div class="icono-grande">🧭</div><h3>Gobernanza</h3><p><strong>¿Quién decide y con qué reglas?</strong></p><p>Se aprueba que el Departamento de Bosque Nativo es dueño de los datos de planes de manejo y define qué es un "plan aprobado".</p></div>
  <div class="tarjeta"><div class="icono-grande">🛠️</div><h3>Gestión</h3><p><strong>¿Cómo se hace en el día a día?</strong></p><p>Se cargan los planes en el sistema, se respaldan y se corrigen errores.</p></div>
  <div class="tarjeta"><div class="icono-grande">💻</div><h3>Tecnología</h3><p><strong>¿Con qué herramienta?</strong></p><p>Base de datos, servidor, sistema web, SIG.</p></div>
</div>
<p>La gobernanza es la <em>dirección</em>, la gestión es la <em>operación</em> y la tecnología es el <em>vehículo</em>. Comprar un software no resuelve la gobernanza, igual que comprar un camión aljibe no organiza el combate de incendios.</p>

<h2>Conceptos básicos</h2>
<p>Haga clic en cada tarjeta para ver su definición.</p>
<div class="rejilla" data-actividad="tarjetas">
  <div class="giro" tabindex="0" role="button"><div class="giro-inner"><div class="giro-cara giro-frente">Dato<small>clic para girar</small></div><div class="giro-cara giro-reverso">Un hecho registrado.<br><em>"Superficie quemada: 3,5 ha".</em></div></div></div>
  <div class="giro" tabindex="0" role="button"><div class="giro-inner"><div class="giro-cara giro-frente">Información<small>clic para girar</small></div><div class="giro-cara giro-reverso">Datos con contexto que permiten decidir.<br><em>"El incendio de la comuna X quemó 3,5 ha de bosque nativo en 40 minutos".</em></div></div></div>
  <div class="giro" tabindex="0" role="button"><div class="giro-inner"><div class="giro-cara giro-frente">Metadato<small>clic para girar</small></div><div class="giro-cara giro-reverso">El dato sobre el dato: quién lo levantó, cuándo, con qué método, en qué unidad y sistema de coordenadas.</div></div></div>
  <div class="giro" tabindex="0" role="button"><div class="giro-inner"><div class="giro-cara giro-frente">Activo de datos<small>clic para girar</small></div><div class="giro-cara giro-reverso">Conjunto de datos con valor para la institución: catastro vegetacional, registro de incendios, planes de manejo, visitantes a áreas protegidas.</div></div></div>
  <div class="giro" tabindex="0" role="button"><div class="giro-inner"><div class="giro-cara giro-frente">Dato maestro<small>clic para girar</small></div><div class="giro-cara giro-reverso">Dato que muchos sistemas comparten y debe ser uno solo: el RUT de un propietario, el rol de un predio, el código de una región.</div></div></div>
  <div class="giro" tabindex="0" role="button"><div class="giro-inner"><div class="giro-cara giro-frente">Ciclo de vida<small>clic para girar</small></div><div class="giro-cara giro-reverso">Las etapas por las que pasa un dato: desde que se planifica hasta que se archiva o elimina.</div></div></div>
</div>

<h2>El ciclo de vida del dato</h2>
<figure class="figura">
  <svg viewBox="0 0 760 330" role="img" aria-label="Ciclo de vida del dato en seis etapas">
    <defs><marker id="flecha1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#4a5a52"/></marker></defs>
    <g fill="none" stroke="#4a5a52" stroke-width="1.5">
      <path d="M240 70H272" marker-end="url(#flecha1)"/><path d="M488 70H520" marker-end="url(#flecha1)"/>
      <path d="M628 106V154" marker-end="url(#flecha1)"/><path d="M520 190H488" marker-end="url(#flecha1)"/>
      <path d="M272 190H240" marker-end="url(#flecha1)"/><path d="M132 154V106" marker-end="url(#flecha1)"/>
    </g>
    <g font-family="Roboto, Arial" text-anchor="middle">
      <g><rect x="24" y="34" width="216" height="72" rx="10" fill="#e8f3ec" stroke="#00703c" stroke-width="1.5"/><text x="132" y="62" font-weight="700" font-size="15" fill="#004a2a">1. Planificar</text><text x="132" y="84" font-size="12.5" fill="#4a5a52">Qué dato se necesita y su dueño</text></g>
      <g><rect x="272" y="34" width="216" height="72" rx="10" fill="#e8f3ec" stroke="#00703c" stroke-width="1.5"/><text x="380" y="62" font-weight="700" font-size="15" fill="#004a2a">2. Capturar</text><text x="380" y="84" font-size="12.5" fill="#4a5a52">Formulario o terreno, con validación</text></g>
      <g><rect x="520" y="34" width="216" height="72" rx="10" fill="#e8f3ec" stroke="#00703c" stroke-width="1.5"/><text x="628" y="62" font-weight="700" font-size="15" fill="#004a2a">3. Almacenar y proteger</text><text x="628" y="84" font-size="12.5" fill="#4a5a52">Respaldo y acceso por perfil</text></g>
      <g><rect x="520" y="154" width="216" height="72" rx="10" fill="#e8f3ec" stroke="#00703c" stroke-width="1.5"/><text x="628" y="182" font-weight="700" font-size="15" fill="#004a2a">4. Usar y analizar</text><text x="628" y="204" font-size="12.5" fill="#4a5a52">Reportes, mapas, indicadores</text></g>
      <g><rect x="272" y="154" width="216" height="72" rx="10" fill="#e8f3ec" stroke="#00703c" stroke-width="1.5"/><text x="380" y="182" font-weight="700" font-size="15" fill="#004a2a">5. Compartir y publicar</text><text x="380" y="204" font-size="12.5" fill="#4a5a52">Interoperabilidad, datos abiertos</text></g>
      <g><rect x="24" y="154" width="216" height="72" rx="10" fill="#e8f3ec" stroke="#00703c" stroke-width="1.5"/><text x="132" y="182" font-weight="700" font-size="15" fill="#004a2a">6. Archivar o eliminar</text><text x="132" y="204" font-size="12.5" fill="#4a5a52">Plazos y anonimización</text></g>
      <rect x="24" y="258" width="712" height="46" rx="10" fill="#00703c"/>
      <text x="380" y="287" font-weight="700" font-size="15" fill="#ffffff">Gobernanza en todas las etapas: dueño, reglas, calidad, seguridad y privacidad</text>
    </g>
  </svg>
  <figcaption>El ciclo vuelve a empezar: lo que se aprende al usar un dato mejora la planificación del siguiente.</figcaption>
</figure>

<h2>Las seis dimensiones de la calidad</h2>
<div class="tabla-envoltura"><table>
<thead><tr><th>Dimensión</th><th>Qué significa</th><th>Error típico en terreno</th></tr></thead>
<tbody>
<tr><td><strong>Exactitud</strong></td><td>El dato refleja la realidad</td><td>Coordenadas UTM ingresadas en el huso equivocado</td></tr>
<tr><td><strong>Completitud</strong></td><td>No faltan campos obligatorios</td><td>Plan de manejo sin superficie por rodal</td></tr>
<tr><td><strong>Consistencia</strong></td><td>El mismo dato coincide entre sistemas</td><td>La región se escribe "Ñuble" en uno y "Nuble" en otro</td></tr>
<tr><td><strong>Oportunidad</strong></td><td>Está disponible cuando se necesita</td><td>El parte de incendio se digita tres días después</td></tr>
<tr><td><strong>Validez</strong></td><td>Respeta el formato y las reglas</td><td>Fecha "31/02/2026" o RUT sin dígito verificador</td></tr>
<tr><td><strong>Unicidad</strong></td><td>No hay registros duplicados</td><td>El mismo propietario inscrito dos veces con distinto nombre</td></tr>
</tbody></table></div>

<div class="actividad">
  <h3>Actividad: detecte los errores</h3>
  <p>Esta es una planilla de visitantes de un área protegida. Haga clic en las <strong>celdas con problemas</strong> de calidad o privacidad. Hay 8 celdas con errores.</p>
  <div data-actividad="errores"></div>
</div>

<p class="conversar">¿Qué planilla o sistema de su unidad tiene más de una "versión verdadera"? ¿Quién decide cuál es la correcta?</p>
`,
      quiz: [
        { p: "¿Cuál es la mejor descripción de la gobernanza de datos?", op: ["Comprar un buen software de base de datos", "Decidir quién cuida cada dato, con qué reglas y para qué se usa", "Respaldar los servidores todas las noches"], c: 1, e: "La gobernanza define responsables y reglas. El software y los respaldos son tecnología y gestión." },
        { p: "Un metadato es…", op: ["Un dato muy grande", "Información que describe a otro dato", "Un dato que fue eliminado"], c: 1, e: "El metadato indica autor, fecha, método, unidad o sistema de coordenadas de un dato." },
        { p: "El mismo propietario aparece inscrito dos veces con distinto nombre. ¿Qué dimensión de calidad falla?", op: ["Oportunidad", "Unicidad", "Exactitud temporal"], c: 1, e: "Los registros duplicados afectan la unicidad." }
      ]
    },

    /* ======================= MÓDULO 2 ======================= */
    {
      id: "m2",
      titulo: "Por qué importa en el Estado y en CONAF",
      resumen: "Beneficios, riesgos y un caso real sobre incendios.",
      duracion: "45 min",
      icono: "🌳",
      html: `
<p class="idea-clave">En el Estado, un dato mal gobernado no es solo un error técnico: puede afectar derechos de las personas, decisiones de emergencia y el uso de recursos públicos.</p>

<h2>El punto de partida en Chile</h2>
<div class="rejilla">
  <div class="tarjeta" style="text-align:center"><div style="font-size:3rem;font-weight:700;color:var(--conaf-verde)">23%</div><p>de las instituciones públicas tiene un área dedicada a la gestión de datos.</p></div>
  <div class="tarjeta" style="text-align:center"><div style="font-size:3rem;font-weight:700;color:var(--gob-rojo)">10,9%</div><p>cuenta con una estrategia clara de datos.</p></div>
</div>
<p style="font-size:0.85rem;color:var(--tinta-suave)">Fuente: Estudio de Indicadores de Gobierno Digital 2024, citado en la Estrategia de Datos de la Secretaría de Gobierno Digital.</p>

<h2>Cinco razones para gobernar los datos</h2>
<div class="tabla-envoltura"><table>
<thead><tr><th>Razón</th><th>Qué gana la institución</th><th>Ejemplo CONAF</th></tr></thead>
<tbody>
<tr><td>🎯 Mejores decisiones</td><td>Cifras confiables para priorizar recursos</td><td>Ubicar brigadas según la ocurrencia histórica de incendios</td></tr>
<tr><td>⚖️ Cumplir la ley</td><td>Evitar sanciones y reclamos</td><td>Proteger los datos personales de propietarios y denunciantes</td></tr>
<tr><td>🧾 Servicios más simples</td><td>No pedir lo que el Estado ya sabe</td><td>Validar el rol del predio con el SII en vez de exigir un certificado</td></tr>
<tr><td>🔍 Transparencia</td><td>Rendir cuentas con datos verificables</td><td>Publicar estadísticas de incendios y superficie de bosque nativo</td></tr>
<tr><td>🔁 Continuidad</td><td>El conocimiento no se va con las personas</td><td>Revisar un plan de manejo aunque el evaluador original se haya ido</td></tr>
</tbody></table></div>

<h2>Caso: "¿cuántos incendios fueron intencionales?"</h2>
<div class="tarjeta">
<p>En febrero de 2023 circularon cifras distintas: CONAF informó que, en promedio, cerca del <strong>25%</strong> de los incendios eran intencionales; las estadísticas de SIDCO de esa temporada estimaban un <strong>30%</strong>; y otras autoridades daban cifras basadas solo en incendios con investigación formal.</p>
<p>Antes de seguir leyendo: ¿cuál cifra cree usted que era la correcta?</p>
<div data-actividad="caso-incendios"></div>
</div>

<h2>Lo que cuesta no gobernar los datos</h2>
<div class="rejilla">
  <div class="tarjeta"><div class="icono-grande">📑</div><strong>Duplicidad de trabajo</strong><p>Tres unidades mantienen su propia lista de predios y ninguna coincide.</p></div>
  <div class="tarjeta"><div class="icono-grande">⚠️</div><strong>Riesgo legal</strong><p>Una planilla con RUT, domicilios y teléfonos circula por correo sin control.</p></div>
  <div class="tarjeta"><div class="icono-grande">🗺️</div><strong>Decisiones erradas</strong><p>Un informe usa la superficie de un catastro desactualizado.</p></div>
  <div class="tarjeta"><div class="icono-grande">👤</div><strong>Dependencia de personas</strong><p>Solo un funcionario sabe cómo se calcula un indicador de gestión.</p></div>
</div>

<p class="conversar">Recuerde una vez en que dos reportes de CONAF dieron cifras distintas sobre el mismo tema. ¿Qué definición o responsable faltaba?</p>
`,
      quiz: [
        { p: "En el caso de los incendios intencionales, ¿cuál era el problema de fondo?", op: ["Un error de cálculo en SIDCO", "La misma palabra se usaba con dos definiciones distintas", "Falta de computadores en las regiones"], c: 1, e: "Causa referencial y causa investigada son dos definiciones distintas. La solución es un glosario con definiciones oficiales y dueños." },
        { p: "Pedir a una persona un certificado que el SII ya tiene es contrario a…", op: ["La interoperabilidad entre servicios", "Los datos abiertos", "La anonimización"], c: 0, e: "La interoperabilidad permite que el Estado consulte sus propios datos sin cargar a las personas." },
        { p: "¿Qué ocurre cuando solo un funcionario sabe calcular un indicador?", op: ["Es una buena práctica de seguridad", "Se crea dependencia de personas y riesgo de continuidad", "Mejora la calidad del dato"], c: 1, e: "La gobernanza documenta definiciones y cálculos para que el conocimiento sea institucional." }
      ]
    },

    /* ======================= MÓDULO 3 ======================= */
    {
      id: "m3",
      titulo: "Marco legal y normativo chileno",
      resumen: "Las leyes que obligan a CONAF a gestionar bien sus datos.",
      duracion: "75 min",
      icono: "⚖️",
      html: `
<p class="idea-clave">En Chile no existe (aún) una sola "ley de gobernanza de datos". Las obligaciones están repartidas en varias leyes que, juntas, obligan a CONAF a saber qué datos tiene, protegerlos, compartirlos con otros servicios y abrirlos cuando corresponde.</p>

<h2>Línea de tiempo normativa</h2>
<figure class="figura desliza">
  <svg viewBox="0 0 1160 180" role="img" aria-label="Línea de tiempo de normas chilenas relacionadas con datos, de 2003 a 2026">
    <line x1="40" y1="70" x2="1120" y2="70" stroke="#00703c" stroke-width="3"/>
    <g font-family="Roboto, Arial" font-size="13" text-anchor="middle"><circle cx="70" cy="70" r="7" fill="#00703c"/><text x="70" y="50" font-weight="700" fill="#00703c">2003</text><text x="70" y="100" font-weight="700" fill="#1d2b24">Ley 19.880</text><text x="70" y="118" fill="#4a5a52">Procedimientos</text><circle cx="170" cy="70" r="7" fill="#00703c"/><text x="170" y="50" font-weight="700" fill="#00703c">2008</text><text x="170" y="100" font-weight="700" fill="#1d2b24">Ley 20.285</text><text x="170" y="118" fill="#4a5a52">Transparencia</text><circle cx="270" cy="70" r="7" fill="#00703c"/><text x="270" y="50" font-weight="700" fill="#00703c">2008</text><text x="270" y="100" font-weight="700" fill="#1d2b24">Ley 20.283</text><text x="270" y="118" fill="#4a5a52">Bosque Nativo</text><circle cx="370" cy="70" r="7" fill="#00703c"/><text x="370" y="50" font-weight="700" fill="#00703c">2018</text><text x="370" y="100" font-weight="700" fill="#1d2b24">Ley 21.096</text><text x="370" y="118" fill="#4a5a52">Rango</text><text x="370" y="134" fill="#4a5a52">constitucional</text><circle cx="470" cy="70" r="7" fill="#00703c"/><text x="470" y="50" font-weight="700" fill="#00703c">2019</text><text x="470" y="100" font-weight="700" fill="#1d2b24">Ley 21.180</text><text x="470" y="118" fill="#4a5a52">Transformación</text><text x="470" y="134" fill="#4a5a52">Digital</text><circle cx="570" cy="70" r="7" fill="#00703c"/><text x="570" y="50" font-weight="700" fill="#00703c">2023</text><text x="570" y="100" font-weight="700" fill="#1d2b24">6 normas</text><text x="570" y="118" fill="#4a5a52">técnicas</text><text x="570" y="134" fill="#4a5a52">Ley 21.180</text><circle cx="670" cy="70" r="7" fill="#00703c"/><text x="670" y="50" font-weight="700" fill="#00703c">2024</text><text x="670" y="100" font-weight="700" fill="#1d2b24">Ley 21.658</text><text x="670" y="118" fill="#4a5a52">Secretaría de</text><text x="670" y="134" fill="#4a5a52">Gobierno Digital</text><circle cx="770" cy="70" r="7" fill="#00703c"/><text x="770" y="50" font-weight="700" fill="#00703c">2024</text><text x="770" y="100" font-weight="700" fill="#1d2b24">Ley 21.663</text><text x="770" y="118" fill="#4a5a52">Ciberseguridad</text><circle cx="870" cy="70" r="7" fill="#00703c"/><text x="870" y="50" font-weight="700" fill="#00703c">2024</text><text x="870" y="100" font-weight="700" fill="#1d2b24">Ley 21.719</text><text x="870" y="118" fill="#4a5a52">Datos</text><text x="870" y="134" fill="#4a5a52">Personales</text><circle cx="970" cy="70" r="7" fill="#00703c"/><text x="970" y="50" font-weight="700" fill="#00703c">2025</text><text x="970" y="100" font-weight="700" fill="#1d2b24">Ley 21.744</text><text x="970" y="118" fill="#4a5a52">SERNAFOR</text><circle cx="1070" cy="70" r="10" fill="#eb3c46"/><text x="1070" y="50" font-weight="700" fill="#eb3c46">1-dic-2026</text><text x="1070" y="100" font-weight="700" fill="#1d2b24">Vigencia</text><text x="1070" y="118" fill="#4a5a52">Ley 21.719*</text></g>
    <text x="40" y="166" font-family="Roboto, Arial" font-size="12" fill="#4a5a52">* Fecha legal vigente. Hay un proyecto de ley en trámite para postergarla (ver más abajo).</text>
  </svg>
  <figcaption>En pantallas pequeñas, deslice horizontalmente para ver la línea completa.</figcaption>
</figure>

<h2>Las normas que más pesan</h2>
<p>Abra cada norma para ver qué exige y qué significa para CONAF.</p>

<details class="acordeon"><summary>Ley 21.719 · Protección de Datos Personales (2024)</summary><div>
<p><strong>Qué exige:</strong> reescribe la Ley 19.628, fija principios y derechos de los titulares y crea la Agencia de Protección de Datos Personales, que fiscaliza a públicos y privados. Publicada el 13 de diciembre de 2024; vigencia legal el 1 de diciembre de 2026.</p>
<p><strong>Para CONAF:</strong> inventariar qué datos personales trata (propietarios, denunciantes, brigadistas, visitantes), con qué base legal y por cuánto tiempo.</p>
</div></details>
<details class="acordeon"><summary>Ley 21.744 · Crea el Servicio Nacional Forestal (2025)</summary><div>
<p><strong>Qué exige:</strong> crea el SERNAFOR como continuador legal de CONAF. Publicada el 23 de mayo de 2025.</p>
<p><strong>Para CONAF:</strong> los datos y sistemas pasan a un servicio 100% público. Es el momento de ordenar inventarios, dueños y calidad antes del traspaso.</p>
</div></details>
<details class="acordeon"><summary>Ley 21.663 · Marco de Ciberseguridad (2024)</summary><div>
<p><strong>Qué exige:</strong> crea la Agencia Nacional de Ciberseguridad (ANCI) y obliga a los órganos del Estado a gestionar riesgos y reportar incidentes. Publicada el 8 de abril de 2024.</p>
<p><strong>Para CONAF:</strong> medidas permanentes de seguridad y un procedimiento claro para reportar ataques o filtraciones.</p>
</div></details>
<details class="acordeon"><summary>Ley 21.658 · Crea la Secretaría de Gobierno Digital (2024)</summary><div>
<p><strong>Qué exige:</strong> radica en el Ministerio de Hacienda la coordinación del uso estratégico de datos del Estado.</p>
<p><strong>Para CONAF:</strong> la SGD es la contraparte técnica para guías, el PMG de Transformación Digital y las plataformas comunes.</p>
</div></details>
<details class="acordeon"><summary>Ley 21.180 · Transformación Digital del Estado (2019) y sus 6 normas técnicas (2023)</summary><div>
<p><strong>Qué exige:</strong> todos los procedimientos administrativos deben ser electrónicos. Publicada el 11 de noviembre de 2019, vigente desde el 9 de junio de 2022 por fases. Sus seis normas técnicas (publicadas el 17 de agosto de 2023) regulan interoperabilidad; seguridad de la información y ciberseguridad; documentos y expedientes electrónicos; notificaciones; calidad y funcionamiento; y autenticación.</p>
<p><strong>Para CONAF:</strong> planes de manejo, permisos y denuncias deben tramitarse y archivarse en formato digital, con ClaveÚnica y expediente electrónico.</p>
</div></details>
<details class="acordeon"><summary>Ley 21.096 · Protección de datos como derecho constitucional (2018)</summary><div>
<p>Eleva la protección de los datos personales a garantía constitucional (artículo 19 N° 4). La privacidad deja de ser opcional.</p>
</div></details>
<details class="acordeon"><summary>Ley 20.285 · Transparencia y acceso a la información pública (2008)</summary><div>
<p><strong>Qué exige:</strong> transparencia activa y derecho de acceso, fiscalizados por el Consejo para la Transparencia (CPLT).</p>
<p><strong>Para CONAF:</strong> responder solicitudes con datos ordenados y saber qué se puede entregar y qué no.</p>
</div></details>
<details class="acordeon"><summary>Ley 20.283 · Bosque Nativo (2008)</summary><div>
<p>Su artículo 4 da carácter público al Catastro de bosque nativo: debe ser accesible y mantenerse actualizado.</p>
</div></details>
<details class="acordeon"><summary>Ley 19.880 · Procedimientos Administrativos (2003)</summary><div>
<p>Reglas de los trámites, expedientes y notificaciones. Es la base sobre la que la Ley 21.180 construye el expediente electrónico.</p>
</div></details>

<h2>Ley 21.719: el cambio más grande</h2>
<p>La ley cambia la pregunta de "¿puedo guardar este dato?" a <strong>"¿puedo demostrar que lo trato bien?"</strong>.</p>
<div class="rejilla">
  <div class="tarjeta"><strong>🎯 Finalidad</strong><p>El dato se usa solo para el propósito con que se recogió.</p></div>
  <div class="tarjeta"><strong>✂️ Proporcionalidad</strong><p>Pedir solo lo necesario. Si basta la comuna, no pedir el domicilio.</p></div>
  <div class="tarjeta"><strong>✔️ Calidad</strong><p>Datos exactos y actualizados.</p></div>
  <div class="tarjeta"><strong>🔒 Seguridad</strong><p>Proteger contra accesos indebidos, pérdida o filtración.</p></div>
  <div class="tarjeta"><strong>📋 Responsabilidad</strong><p>Poder probar que se cumple: registros, políticas, capacitación.</p></div>
  <div class="tarjeta"><strong>🙋 Derechos</strong><p>Acceso, rectificación, supresión, oposición, portabilidad y bloqueo.</p></div>
</div>

<div class="atencion"><strong>Atención a la fecha.</strong> La vigencia legal es el 1 de diciembre de 2026. En septiembre de 2026 el Gobierno ingresó un proyecto (boletín 18.623-07) para postergarla un año, y el 5 de noviembre de 2026 la Comisión de Constitución de la Cámara lo aprobó en general, proponiendo el 15 de octubre de 2027. Mientras no se publique una ley que la modifique, rige la fecha original. Prepararse ahora no se pierde.</div>

<h2>Normas "blandas" que orientan el trabajo</h2>
<ul>
<li><strong>Marco de Gestión de Datos del Estado (MGDE):</strong> guía oficial de la SGD (2024), basada en DAMA. Se ve en el Módulo 4.</li>
<li><strong>PMG Sistema de Transformación Digital:</strong> desde 2025 los servicios diagnostican su gestión de datos con el MGDE e incluyen las brechas en un plan a 3 años.</li>
<li><strong>Estrategia de Gobierno Digital 2030:</strong> incluye poner en marcha la Estrategia de Datos del Estado.</li>
<li><strong>Política Nacional de Información Geoespacial:</strong> en elaboración por IDE Chile desde 2022.</li>
<li><strong>Guía de Formulación Ética de Proyectos de Ciencia de Datos:</strong> orientación no obligatoria para proyectos con datos e inteligencia artificial.</li>
</ul>

<div class="actividad">
  <h3>Actividad: semáforo de cumplimiento</h3>
  <p>Piense en un conjunto de datos de su unidad y marque cada pregunta en <strong>verde</strong> (cumplimos), <strong>amarillo</strong> (parcial) o <strong>rojo</strong> (no cumplimos).</p>
  <label for="semaforoNombre">Conjunto de datos evaluado:</label>
  <input type="text" id="semaforoNombre" placeholder="Ej.: registro de planes de manejo de mi provincia" style="width:100%;margin:6px 0 12px">
  <div data-actividad="semaforo"></div>
</div>
`,
      quiz: [
        { p: "¿Qué ley crea la Agencia de Protección de Datos Personales?", op: ["Ley 20.285", "Ley 21.180", "Ley 21.719"], c: 2, e: "La Ley 21.719 reforma la Ley 19.628 y crea la Agencia." },
        { p: "¿Qué ley obliga a los órganos del Estado a reportar incidentes de ciberseguridad?", op: ["Ley 21.663", "Ley 19.880", "Ley 20.283"], c: 0, e: "La Ley Marco de Ciberseguridad (21.663) creó la ANCI y el deber de reportar." },
        { p: "Según la Ley 20.283, el Catastro de bosque nativo es…", op: ["Reservado", "Público", "De uso exclusivo de CONAF"], c: 1, e: "El artículo 4 de la Ley 20.283 le da carácter público." },
        { p: "Mientras un proyecto de ley de postergación no se publique, la Ley 21.719 rige desde…", op: ["El 1 de diciembre de 2026", "El 15 de octubre de 2027", "No tiene fecha"], c: 0, e: "Un proyecto en trámite no cambia la fecha legal." }
      ]
    },

    /* ======================= MÓDULO 4 ======================= */
    {
      id: "m4",
      titulo: "Instituciones y herramientas del Estado",
      resumen: "Quién es quién, plataformas comunes y el MGDE.",
      duracion: "45 min",
      icono: "🏛️",
      html: `
<p class="idea-clave">CONAF no tiene que inventar su gobernanza de datos. El Estado ya ofrece un marco de referencia (MGDE), plataformas comunes y organismos que orientan y fiscalizan.</p>

<h2>¿Quién es quién?</h2>
<div class="tabla-envoltura"><table>
<thead><tr><th>Organismo</th><th>Rol frente a los datos</th><th>Cuándo lo encontrará CONAF</th></tr></thead>
<tbody>
<tr><td><strong>Secretaría de Gobierno Digital (SGD)</strong>, Hacienda</td><td>Rectora de la transformación digital y del uso estratégico de datos</td><td>PMG de Transformación Digital, plataformas, capacitaciones</td></tr>
<tr><td><strong>Agencia de Protección de Datos Personales</strong></td><td>Fiscalizará la Ley 21.719 y atenderá reclamos</td><td>Reclamos de titulares, auditorías</td></tr>
<tr><td><strong>ANCI y CSIRT de Gobierno</strong></td><td>Regula, fiscaliza y apoya la respuesta a incidentes</td><td>Ataques, filtraciones o caídas de sistemas</td></tr>
<tr><td><strong>Consejo para la Transparencia (CPLT)</strong></td><td>Fiscaliza el acceso a la información pública</td><td>Solicitudes de información, transparencia activa</td></tr>
<tr><td><strong>IDE Chile</strong>, Bienes Nacionales</td><td>Coordina la información geoespacial del Estado</td><td>Publicación de capas de catastro, áreas protegidas, incendios</td></tr>
<tr><td><strong>Contraloría General de la República</strong></td><td>Control de legalidad y uso de recursos</td><td>Auditorías a sistemas y procedimientos</td></tr>
</tbody></table></div>

<h2>Plataformas comunes</h2>
<div class="rejilla">
  <div class="tarjeta"><div class="icono-grande">📂</div><h4>datos.gob.cl</h4><p>Portal nacional de datos abiertos, renovado en 2024.</p></div>
  <div class="tarjeta"><div class="icono-grande">🔗</div><h4>Red de interoperabilidad (PISEE)</h4><p>Un servicio consulta datos de otro sin pedir certificados a la persona.</p></div>
  <div class="tarjeta"><div class="icono-grande">🔑</div><h4>ClaveÚnica</h4><p>Identidad digital oficial para trámites en línea.</p></div>
  <div class="tarjeta"><div class="icono-grande">✉️</div><h4>DocDigital</h4><p>Canal oficial de comunicaciones entre órganos del Estado.</p></div>
  <div class="tarjeta"><div class="icono-grande">🗺️</div><h4>IDE Chile (ide.cl)</h4><p>Catálogo de metadatos, visor y descarga de información geográfica.</p></div>
  <div class="tarjeta"><div class="icono-grande">🌲</div><h4>SIMEF</h4><p>Monitoreo de ecosistemas forestales: integra el Catastro de CONAF y el Inventario de INFOR.</p></div>
</div>

<h2>El Marco de Gestión de Datos del Estado (MGDE)</h2>
<p>El MGDE es la "regla de medir" oficial. Lo elaboró la SGD en 2024 con el GobLab de la Universidad Adolfo Ibáñez, a partir del marco internacional <strong>DAMA</strong>, agregando aspectos legales, visión estratégica y datos abiertos. Desde 2025 forma parte del <strong>PMG Sistema de Transformación Digital</strong>: cada servicio se autoevalúa en 12 dimensiones y prioriza brechas en su plan.</p>

<div class="actividad">
  <h3>Actividad: autoevaluación rápida MGDE</h3>
  <p>Para cada dimensión, estime el nivel de su unidad: <strong>0</strong> = no existe, <strong>1</strong> = inicial, <strong>2</strong> = básico, <strong>3</strong> = medio, <strong>4</strong> = avanzado. Al final verá sus tres prioridades. Esta es una dinámica de aprendizaje, no reemplaza el instrumento oficial.</p>
  <div data-actividad="mgde"></div>
</div>
`,
      quiz: [
        { p: "¿En qué marco internacional se basa el MGDE?", op: ["ISO 9001", "DAMA", "ITIL"], c: 1, e: "El MGDE adapta el marco DAMA al sector público chileno." },
        { p: "¿Cuántas dimensiones evalúa el MGDE?", op: ["6", "12", "20"], c: 1, e: "Visión estratégica, gobernanza, arquitectura, almacenamiento, seguridad, interoperabilidad, documentos, datos maestros, analítica, calidad, datos abiertos y aspectos legales." },
        { p: "¿Qué plataforma permite que CONAF consulte datos de otro servicio sin pedir certificados?", op: ["La red de interoperabilidad del Estado", "DocDigital", "datos.gob.cl"], c: 0, e: "La interoperabilidad conecta sistemas del Estado entre sí." }
      ]
    },

    /* ======================= MÓDULO 5 ======================= */
    {
      id: "m5",
      titulo: "Roles y modelo de gobernanza en CONAF",
      resumen: "Quién decide, quién coordina y quién opera.",
      duracion: "60 min",
      icono: "👥",
      html: `
<p class="idea-clave">Los datos no son de Informática. Cada dato tiene un dueño en el área que lo genera y lo usa; Informática lo custodia y lo protege.</p>
<p>El modelo propuesto sigue la lógica del MGDE y de DAMA. Es una propuesta para discutir: los nombres de cargos deben ajustarse a la estructura vigente de CONAF y a la futura de SERNAFOR.</p>

<figure class="figura">
  <svg viewBox="0 0 760 430" role="img" aria-label="Estructura de gobernanza de datos en cuatro niveles">
    <defs><marker id="flecha2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#4a5a52"/></marker></defs>
    <g font-family="Roboto, Arial" font-size="12" font-weight="700" fill="#4a5a52"><text x="16" y="62">DECIDE</text><text x="16" y="164">COORDINA</text><text x="16" y="268">OPERA</text><text x="16" y="374">USA</text></g>
    <g fill="none" stroke="#4a5a52" stroke-width="1.5">
      <path d="M428 86V130" marker-end="url(#flecha2)"/><path d="M332 158H312"/><path d="M524 158H544"/>
      <path d="M428 186V206"/><path d="M216 206H640"/>
      <path d="M216 206V230" marker-end="url(#flecha2)"/><path d="M428 206V230" marker-end="url(#flecha2)"/><path d="M640 206V230" marker-end="url(#flecha2)"/>
      <path d="M216 302V340" marker-end="url(#flecha2)"/><path d="M428 302V340" marker-end="url(#flecha2)"/><path d="M640 302V340" marker-end="url(#flecha2)"/>
    </g>
    <g font-family="Roboto, Arial" text-anchor="middle">
      <rect x="288" y="30" width="280" height="56" rx="10" fill="#00703c"/><text x="428" y="54" font-size="15" font-weight="700" fill="#fff">Comité de Datos</text><text x="428" y="74" font-size="12.5" fill="#e8f3ec">Aprueba la política y las prioridades</text>
      <rect x="120" y="130" width="192" height="56" rx="10" fill="#fff8e1" stroke="#f2b705" stroke-width="1.5"/><text x="216" y="154" font-size="14" font-weight="700" fill="#1d2b24">Datos personales</text><text x="216" y="174" font-size="12" fill="#4a5a52">Encargado Ley 21.719</text>
      <rect x="332" y="130" width="192" height="56" rx="10" fill="#e8f3ec" stroke="#00703c" stroke-width="1.5"/><text x="428" y="154" font-size="14" font-weight="700" fill="#004a2a">Líder de datos</text><text x="428" y="174" font-size="12" fill="#4a5a52">Conduce el programa</text>
      <rect x="544" y="130" width="192" height="56" rx="10" fill="#fff8e1" stroke="#f2b705" stroke-width="1.5"/><text x="640" y="154" font-size="14" font-weight="700" fill="#1d2b24">Ciberseguridad</text><text x="640" y="174" font-size="12" fill="#4a5a52">Encargado Ley 21.663</text>
      <rect x="120" y="230" width="192" height="72" rx="10" fill="#e8f3ec" stroke="#00703c" stroke-width="1.5"/><text x="216" y="254" font-size="14" font-weight="700" fill="#004a2a">Dueños de datos</text><text x="216" y="274" font-size="12" fill="#4a5a52">Jefaturas de Incendios,</text><text x="216" y="290" font-size="12" fill="#4a5a52">Bosque Nativo, ASP…</text>
      <rect x="332" y="230" width="192" height="72" rx="10" fill="#e8f3ec" stroke="#00703c" stroke-width="1.5"/><text x="428" y="254" font-size="14" font-weight="700" fill="#004a2a">Administradores</text><text x="428" y="274" font-size="12" fill="#4a5a52">Cuidan definiciones</text><text x="428" y="290" font-size="12" fill="#4a5a52">y calidad día a día</text>
      <rect x="544" y="230" width="192" height="72" rx="10" fill="#e8f3ec" stroke="#00703c" stroke-width="1.5"/><text x="640" y="254" font-size="14" font-weight="700" fill="#004a2a">Custodio técnico</text><text x="640" y="274" font-size="12" fill="#4a5a52">Informática: almacena,</text><text x="640" y="290" font-size="12" fill="#4a5a52">respalda y da acceso</text>
      <rect x="120" y="340" width="616" height="56" rx="10" fill="#fff" stroke="#4a5a52" stroke-width="1.5"/><text x="428" y="364" font-size="14" font-weight="700" fill="#1d2b24">Usuarios de datos</text><text x="428" y="384" font-size="12" fill="#4a5a52">Todo funcionario que registra o consulta datos y reporta errores</text>
    </g>
  </svg>
  <figcaption>El Comité fija las reglas, el Líder las coordina y las áreas las aplican sobre cada conjunto de datos.</figcaption>
</figure>

<h2>Los roles, con una analogía</h2>
<div class="tabla-envoltura"><table>
<thead><tr><th>Rol</th><th>Analogía</th><th>Qué hace</th><th>Quién podría ser en CONAF</th></tr></thead>
<tbody>
<tr><td><strong>Comité de Datos</strong></td><td>Consejo del parque</td><td>Aprueba la política, prioriza, resuelve conflictos</td><td>Comité de Transformación Digital ampliado</td></tr>
<tr><td><strong>Líder de datos</strong></td><td>Administrador del parque</td><td>Coordina el programa y reporta avances</td><td>Profesional con dedicación formal</td></tr>
<tr><td><strong>Dueño de datos</strong></td><td>Propietario del predio</td><td>Decide qué significa el dato, quién lo usa y con qué calidad</td><td>Jefatura del área que genera el dato</td></tr>
<tr><td><strong>Administrador de datos</strong></td><td>Guardaparque</td><td>Cuida definiciones, calidad y corrección de errores</td><td>Profesional que más conoce el dato</td></tr>
<tr><td><strong>Custodio técnico</strong></td><td>Brigada de mantención</td><td>Almacena, respalda, da acceso y protege</td><td>Departamento de Informática</td></tr>
<tr><td><strong>Encargado de datos personales</strong></td><td>Fiscalizador interno</td><td>Vela por la Ley 21.719</td><td>Fiscalía o Jurídica con apoyo de TI</td></tr>
<tr><td><strong>Encargado de seguridad</strong></td><td>Jefe de prevención de riesgos</td><td>Gestiona riesgos e incidentes (Ley 21.663)</td><td>Encargado de ciberseguridad</td></tr>
<tr><td><strong>Usuario de datos</strong></td><td>Visitante con reglas</td><td>Usa los datos según su perfil y reporta errores</td><td>Cualquier funcionario</td></tr>
</tbody></table></div>

<div class="actividad">
  <h3>Actividad: ¿quién lo hace?</h3>
  <p>Para el registro de incendios forestales, elija qué rol es <strong>responsable de realizar</strong> cada tarea.</p>
  <div data-actividad="roles"></div>
</div>

<p class="conversar">En el conjunto de datos que eligió en el Módulo 3, ¿quién es hoy el dueño? ¿Está escrito en algún documento?</p>
`,
      quiz: [
        { p: "¿Quién debería definir qué significa \"incendio intencional\" en los registros?", op: ["Informática", "El dueño de los datos (Gerencia de Protección) con su administrador de datos", "Cada brigada según su criterio"], c: 1, e: "Las definiciones de negocio las decide el área dueña; Informática las implementa." },
        { p: "El custodio técnico de los datos es habitualmente…", op: ["El Departamento de Informática", "El Comité de Datos", "El usuario final"], c: 0, e: "El custodio almacena, respalda y protege, pero no decide el significado del dato." },
        { p: "Un rol de gobernanza es más efectivo cuando…", op: ["Se asume de manera informal", "Está asignado por escrito, con responsabilidades claras", "Lo ejerce siempre la misma persona en toda la institución"], c: 1, e: "La formalización (resolución, correo formal) da continuidad y legitimidad." }
      ]
    },

    /* ======================= MÓDULO 6 ======================= */
    {
      id: "m6",
      titulo: "Ejemplos prácticos en CONAF",
      resumen: "Seis casos reales del quehacer institucional.",
      duracion: "75 min",
      icono: "🔥",
      html: `
<p class="idea-clave">La gobernanza de datos se aprende con casos concretos. Cada caso muestra una situación habitual, el problema de fondo y lo que cambia cuando hay reglas y responsables.</p>

<details class="acordeon" open><summary>🌲 Caso 1 · Planes de manejo de bosque nativo</summary><div>
<p><strong>Situación:</strong> un propietario presenta un plan de manejo con cartografía, datos del predio y sus datos personales. El plan pasa por la oficina provincial, la evaluación técnica y la resolución.</p>
<div class="tabla-envoltura"><table><thead><tr><th>Sin gobernanza</th><th>Con gobernanza</th></tr></thead><tbody>
<tr><td>Cada oficina guarda la cartografía en su propio formato y sistema de coordenadas</td><td>Estándar único de cartografía (datum, huso, formato) validado al ingresar</td></tr>
<tr><td>Se pide el certificado de rol aunque el SII ya lo tiene</td><td>El sistema consulta el rol vía interoperabilidad</td></tr>
<tr><td>RUT y teléfono del propietario copiados en planillas de seguimiento</td><td>Datos personales solo en el sistema, con acceso por perfil</td></tr>
<tr><td>Cada región usa estados de trámite distintos</td><td>Catálogo único de estados, definido por el dueño del dato</td></tr>
</tbody></table></div>
</div></details>

<details class="acordeon"><summary>🔥 Caso 2 · Registro de incendios forestales (SIDCO)</summary><div>
<p><strong>Situación:</strong> SIDCO es el sistema de CONAF para el registro digital de las operaciones de incendios. Sus datos alimentan el resumen público de incendios y los indicadores de desempeño que CONAF reporta a DIPRES, como el porcentaje de incendios con primer ataque en 30 minutos o menos.</p>
<p><strong>Por qué importa:</strong> si una hora de despacho se digita mal, el indicador cambia. Si "primer ataque" se interpreta distinto en dos regiones, las cifras no son comparables.</p>
<ul>
<li>Diccionario de datos con la definición oficial de cada campo (aviso, despacho, llegada, control).</li>
<li>Validación automática: la hora de llegada no puede ser anterior al aviso.</li>
<li>Causa referencial y causa investigada en campos distintos.</li>
<li>Un administrador de datos que revise duplicados e incompletos cada semana en temporada.</li>
</ul>
</div></details>

<details class="acordeon"><summary>🗺️ Caso 3 · Catastro vegetacional y cartografía</summary><div>
<p><strong>Situación:</strong> la Ley 20.283 da carácter público al catastro, que CONAF pone a disposición mediante el Sistema de Información Territorial (SIT-CONAF). SIMEF reutiliza esa información en sus fichas regionales.</p>
<p><strong>Lección:</strong> un dato publicado sin metadatos genera errores aguas abajo. Si una ficha muestra superficies de distintos años sin indicarlo claramente, confunde al lector. Toda capa publicada debe llevar fecha de actualización, escala, método, sistema de coordenadas y responsable, idealmente en el catálogo de IDE Chile.</p>
</div></details>

<details class="acordeon"><summary>🏞️ Caso 4 · Visitantes de áreas silvestres protegidas</summary><div>
<p><strong>Situación:</strong> las reservas en línea registran nombre, RUT o pasaporte, correo y, a veces, datos de salud o contacto de emergencia.</p>
<ol>
<li>¿Para qué se pide cada dato? Si es para seguridad en ruta, no se usa para marketing.</li>
<li>¿Cuánto tiempo se guarda? Definir un plazo y eliminar o anonimizar después.</li>
<li>¿Quién accede? El guardaparque ve la lista del día, no el historial completo.</li>
<li>¿Qué pasa con estos datos cuando las áreas protegidas se traspasen al Servicio de Biodiversidad y Áreas Protegidas (Ley 21.600)? Debe existir un acta de traspaso de datos con inventario y responsables.</li>
</ol>
</div></details>

<details class="acordeon"><summary>🪓 Caso 5 · Denuncias y fiscalización forestal</summary><div>
<p><strong>Situación:</strong> una persona denuncia una corta ilegal. El expediente contiene su identidad, fotografías, coordenadas e información del presunto infractor.</p>
<p><strong>Riesgo:</strong> si el expediente se comparte completo por correo, se expone al denunciante.</p>
<p><strong>Regla:</strong> la identidad del denunciante se guarda en un campo de acceso restringido y se omite en las copias de trabajo; las fotografías georreferenciadas van al expediente electrónico, no a teléfonos personales.</p>
</div></details>

<details class="acordeon"><summary>🏛️ Caso 6 · La transición a SERNAFOR</summary><div>
<p>El cambio institucional es la mejor oportunidad para ordenar los datos. Antes del traspaso conviene tener:</p>
<ul>
<li>Inventario de sistemas y bases de datos, con dueño y custodio.</li>
<li>Lista de datos personales tratados y su finalidad.</li>
<li>Datos maestros depurados: predios, propietarios, especies, unidades territoriales.</li>
<li>Acuerdos para los datos que se comparten con el SBAP y otros servicios.</li>
<li>Plan de migración que no pierda el historial de incendios ni de planes de manejo.</li>
</ul>
</div></details>

<div class="actividad">
  <h3>Actividad: ¿qué haría usted?</h3>
  <p>Lea cada situación y elija la mejor respuesta. Recibirá retroalimentación inmediata.</p>
  <div data-actividad="decisiones"></div>
</div>
`,
      quiz: [
        { p: "Un evaluador quiere enviar por correo el expediente completo de una denuncia a un colega de otra región. ¿Qué corresponde?", op: ["Enviarlo, porque ambos son funcionarios", "Compartir el acceso al expediente electrónico según perfil, sin la identidad del denunciante", "Imprimirlo y enviarlo por valija"], c: 1, e: "La identidad del denunciante debe estar protegida y el acceso debe ser por perfil." },
        { p: "¿Qué debe acompañar a una capa cartográfica publicada?", op: ["Solo el nombre del archivo", "Metadatos: fecha, escala, método, sistema de coordenadas y responsable", "Una contraseña"], c: 1, e: "Sin metadatos, el usuario no sabe si el dato sirve para su propósito." },
        { p: "¿Por qué la transición a SERNAFOR es una oportunidad para la gobernanza de datos?", op: ["Porque se pueden borrar los datos antiguos", "Porque obliga a inventariar, depurar y asignar responsables antes del traspaso", "Porque cambia el logo"], c: 1, e: "Una migración ordenada exige saber qué datos existen, de quién son y en qué estado están." }
      ]
    },

    /* ======================= MÓDULO 7 ======================= */
    {
      id: "m7",
      titulo: "Hoja de ruta: cómo empezar",
      resumen: "Un plan de 90 días para su unidad.",
      duracion: "45 min",
      icono: "🗺️",
      html: `
<p class="idea-clave">Empezar pequeño. Un solo conjunto de datos bien gobernado enseña más que una política perfecta que nadie aplica.</p>

<h2>Plan de 90 días</h2>
<figure class="figura">
  <svg viewBox="0 0 760 170" role="img" aria-label="Plan de 90 días en siete pasos">
    <g font-family="Roboto, Arial" text-anchor="middle">
      <rect x="20" y="62" width="720" height="10" rx="5" fill="#e8f3ec"/>
      <rect x="20" y="62" width="720" height="10" rx="5" fill="url(#gradPlan)"/>
      <defs><linearGradient id="gradPlan"><stop offset="0" stop-color="#00703c"/><stop offset="1" stop-color="#8cc63f"/></linearGradient></defs>
      <g font-size="11.5" fill="#4a5a52">
        <circle cx="60" cy="67" r="16" fill="#00703c"/><text x="60" y="72" fill="#fff" font-weight="700" font-size="13">1</text><text x="60" y="34">Sem. 1-2</text><text x="60" y="106" fill="#1d2b24" font-weight="700">Elegir</text><text x="60" y="122">un dato crítico</text>
        <circle cx="166" cy="67" r="16" fill="#00703c"/><text x="166" y="72" fill="#fff" font-weight="700" font-size="13">2</text><text x="166" y="34">Sem. 3-4</text><text x="166" y="106" fill="#1d2b24" font-weight="700">Nombrar</text><text x="166" y="122">responsables</text>
        <circle cx="272" cy="67" r="16" fill="#00703c"/><text x="272" y="72" fill="#fff" font-weight="700" font-size="13">3</text><text x="272" y="34">Sem. 5-7</text><text x="272" y="106" fill="#1d2b24" font-weight="700">Documentar</text><text x="272" y="122">ficha y diccionario</text>
        <circle cx="378" cy="67" r="16" fill="#2e8b57"/><text x="378" y="72" fill="#fff" font-weight="700" font-size="13">4</text><text x="378" y="34">Sem. 8-9</text><text x="378" y="106" fill="#1d2b24" font-weight="700">Medir</text><text x="378" y="122">la calidad</text>
        <circle cx="484" cy="67" r="16" fill="#2e8b57"/><text x="484" y="72" fill="#fff" font-weight="700" font-size="13">5</text><text x="484" y="34">Sem. 10-11</text><text x="484" y="106" fill="#1d2b24" font-weight="700">Corregir</text><text x="484" y="122">y prevenir</text>
        <circle cx="590" cy="67" r="16" fill="#6aa84f"/><text x="590" y="72" fill="#fff" font-weight="700" font-size="13">6</text><text x="590" y="34">Sem. 12-13</text><text x="590" y="106" fill="#1d2b24" font-weight="700">Proteger</text><text x="590" y="122">y compartir</text>
        <circle cx="696" cy="67" r="16" fill="#f2b705"/><text x="696" y="72" fill="#1d2b24" font-weight="700" font-size="13">7</text><text x="696" y="34">Cierre</text><text x="696" y="106" fill="#1d2b24" font-weight="700">Presentar</text><text x="696" y="122">resultados</text>
      </g>
    </g>
  </svg>
</figure>

<ol>
<li><strong>Elegir un conjunto de datos crítico</strong>, uno que se use para decidir o reportar.</li>
<li><strong>Nombrar responsables</strong> por escrito: dueño, administrador de datos y custodio técnico.</li>
<li><strong>Documentar</strong> la ficha del activo de datos y un diccionario con la definición de cada campo.</li>
<li><strong>Medir la calidad:</strong> contar incompletos, duplicados y fuera de rango. Anotar la línea base.</li>
<li><strong>Corregir y prevenir:</strong> limpiar errores y agregar reglas (listas desplegables, validaciones, campos obligatorios).</li>
<li><strong>Proteger y compartir:</strong> revisar accesos y decidir qué parte puede publicarse como dato abierto.</li>
<li><strong>Presentar resultados</strong> al comité y proponer el siguiente conjunto de datos.</li>
</ol>

<h2>Errores comunes al empezar</h2>
<div class="rejilla">
  <div class="tarjeta">❌ Creer que es un proyecto de Informática y no involucrar a las áreas dueñas.</div>
  <div class="tarjeta">❌ Escribir una política de 40 páginas antes de probar con un caso real.</div>
  <div class="tarjeta">❌ Querer gobernar todos los datos a la vez.</div>
  <div class="tarjeta">❌ No medir la calidad antes y después.</div>
  <div class="tarjeta">❌ Olvidar la gestión del cambio: sin un "para qué", vuelve la planilla paralela.</div>
</div>

<div class="actividad">
  <h3>Actividad: mi ficha de activo de datos</h3>
  <p>Complete la ficha de un conjunto de datos de su unidad. Al final puede <strong>descargarla</strong> como archivo de texto para compartirla con su jefatura. Lo que escriba se guarda solo en este navegador.</p>
  <div data-actividad="ficha"></div>
</div>
`,
      quiz: [
        { p: "¿Cuál es el primer paso recomendado para empezar?", op: ["Comprar un software de gobierno de datos", "Elegir un solo conjunto de datos crítico", "Redactar una política institucional completa"], c: 1, e: "Empezar pequeño permite aprender y mostrar resultados rápido." },
        { p: "¿Por qué medir la calidad antes de corregir?", op: ["Para tener una línea base y demostrar la mejora", "Porque lo exige el SII", "No es necesario medir"], c: 0, e: "Sin línea base no hay evidencia del avance." },
        { p: "¿Qué evita que los errores se repitan?", op: ["Corregirlos manualmente cada mes", "Agregar reglas de validación en la captura del dato", "Pedir a los usuarios que tengan cuidado"], c: 1, e: "Prevenir en el origen es más eficaz que corregir después." }
      ]
    }
  ],

  /* ======================= EVALUACIÓN FINAL ======================= */
  evaluacionFinal: [
    { p: "La gobernanza de datos es principalmente responsabilidad de…", op: ["Informática", "Las áreas dueñas de los datos con apoyo de Informática", "La empresa proveedora del software"], c: 1, e: "Los datos pertenecen al negocio; Informática los custodia." },
    { p: "¿Qué ley crea la Agencia de Protección de Datos Personales?", op: ["Ley 20.285", "Ley 21.180", "Ley 21.719"], c: 2, e: "Ley 21.719, publicada el 13 de diciembre de 2024." },
    { p: "El marco oficial para evaluar la gestión de datos en el Estado se llama…", op: ["MGDE", "ISO 9001", "SIMEF"], c: 0, e: "Marco de Gestión de Datos del Estado, de la SGD." },
    { p: "Pedir a un propietario un certificado que el SII ya tiene contradice el principio de…", op: ["Interoperabilidad", "Datos abiertos", "Anonimización"], c: 0, e: "El Estado debe consultar sus propios datos." },
    { p: "Un metadato es…", op: ["Un dato muy grande", "Información que describe a otro dato", "Un dato borrado"], c: 1, e: "Describe autor, fecha, método, formato o escala." },
    { p: "¿Qué ley obliga a los órganos del Estado a reportar incidentes de ciberseguridad?", op: ["Ley 21.663", "Ley 19.880", "Ley 20.283"], c: 0, e: "Ley Marco de Ciberseguridad." },
    { p: "La región aparece como \"Ñuble\" en un sistema y \"Nuble\" en otro. ¿Qué dimensión de calidad falla?", op: ["Consistencia", "Oportunidad", "Completitud"], c: 0, e: "El mismo dato no coincide entre sistemas." },
    { p: "¿Qué principio de la Ley 21.719 se infringe al usar el teléfono de un propietario para una encuesta sin base legal?", op: ["Finalidad", "Portabilidad", "Exactitud"], c: 0, e: "El dato se usa solo para el propósito con que se recogió." },
    { p: "¿Qué ley crea el Servicio Nacional Forestal, continuador legal de CONAF?", op: ["Ley 21.600", "Ley 21.744", "Ley 21.658"], c: 1, e: "Ley 21.744, publicada el 23 de mayo de 2025. La 21.600 crea el SBAP." },
    { p: "¿Quién debería aprobar la definición oficial de un indicador de incendios?", op: ["El dueño de los datos del área de Protección contra Incendios", "El proveedor del sistema", "Cualquier usuario que lo necesite"], c: 0, e: "El dueño del dato decide su significado y calidad." }
  ],

  /* ======================= GLOSARIO ======================= */
  glosario: [
    ["Activo de datos", "Conjunto de datos con valor para la institución."],
    ["Anonimización", "Proceso que impide identificar a la persona a quien pertenecen los datos."],
    ["Calidad de datos", "Grado en que un dato es exacto, completo, consistente, oportuno, válido y único."],
    ["Catálogo de datos", "Inventario que describe qué datos existen, dónde están y quién responde por ellos."],
    ["ClaveÚnica", "Identidad digital oficial del Estado de Chile para trámites en línea."],
    ["Custodio técnico", "Quien almacena, respalda y protege los datos (habitualmente Informática)."],
    ["DAMA", "Asociación internacional cuyo marco DAMA-DMBOK es la base del MGDE."],
    ["Datos abiertos", "Datos públicos publicados en formatos reutilizables y con licencia libre."],
    ["Dato maestro", "Dato compartido por muchos sistemas que debe existir en una sola versión oficial."],
    ["Dato personal", "Información de una persona natural identificada o identificable."],
    ["Dato sensible", "Dato personal que revela salud, origen étnico, creencias, vida sexual u otros aspectos íntimos."],
    ["Diccionario de datos", "Documento con la definición de cada campo de una base de datos."],
    ["Dueño de datos", "Jefatura que decide sobre el significado, uso y calidad de un dato."],
    ["Gobernanza de datos", "Conjunto de decisiones, roles y reglas sobre quién cuida cada dato, cómo y para qué."],
    ["IDE Chile", "Infraestructura de Datos Geoespaciales de Chile, coordinada por el Ministerio de Bienes Nacionales."],
    ["Interoperabilidad", "Capacidad de los sistemas de intercambiar datos y usarlos sin intervención manual."],
    ["Linaje", "Recorrido de un dato desde su origen hasta el reporte donde aparece."],
    ["Metadato", "Información que describe un dato: autor, fecha, método, formato, escala."],
    ["MGDE", "Marco de Gestión de Datos del Estado, guía oficial de la Secretaría de Gobierno Digital."],
    ["PMG", "Programa de Mejoramiento de la Gestión, que vincula metas de gestión con incentivos."],
    ["SGD", "Secretaría de Gobierno Digital del Ministerio de Hacienda."],
    ["SIDCO", "Sistema de CONAF para el registro digital de las operaciones de incendios forestales."],
    ["SIT-CONAF", "Sistema de Información Territorial de CONAF, que publica el catastro y otras capas."]
  ],

  /* ======================= FUENTES ======================= */
  fuentes: [
    ["Estrategia de Datos de la Administración del Estado — SGD", "https://wikiguias.digital.gob.cl/Estrategias/Estrategia_Datos"],
    ["Guía técnica del MGDE — SGD", "https://wikiguias.digital.gob.cl/es/guias/Guía_MGDE"],
    ["Presentación del MGDE — GobLab UAI", "https://goblab.uai.cl/gobierno-digital-presento-el-marco-de-gestion-de-datos-del-estado-de-chile-elaborado-con-goblab-uai/"],
    ["10 iniciativas de gestión de datos 2024 — Ministerio de Hacienda", "https://www.hacienda.cl/noticias-y-eventos/noticias/sgd-llevo-adelante-10-iniciativas-en-gestion-de-datos-en-el-estado-en-2024"],
    ["Ejemplo de Plan de Transformación Digital PMG 2025 con diagnóstico MGDE", "https://www.goreloslagos.cl/resources/descargas/acerca_de_gore/doc_gestion/2025/Plan_TD_GORELOSLAGOS_2025.pdf"],
    ["Estrategia de Gobierno Digital 2030 — SGD", "https://wikiguias.digital.gob.cl/Estrategias/Estrategia-2030"],
    ["Ley 21.180 de Transformación Digital del Estado (presentación 2026)", "https://www.achm.cl/wp-content/uploads/2025/12/Ley-N°21.180.pdf"],
    ["Modelo de interoperabilidad y normas técnicas — SGD", "https://wikiguias.digital.gob.cl/Manuales/modelo-de-interoperabilidad"],
    ["Norma Técnica de Seguridad de la Información y Ciberseguridad (DS 7)", "https://www.diariooficial.interior.gob.cl/publicaciones/2023/08/17/43629/01/2361371.pdf"],
    ["Ley 21.663 Marco de Ciberseguridad — Diario Oficial", "https://www.diariooficial.interior.gob.cl/publicaciones/2024/04/08/43820/01/2475674.pdf"],
    ["Guía práctica de la nueva Ley de Datos Personales — SGD", "https://wikiguias.digital.gob.cl/datos-personales/guia-practica-implementacion-nueva-ley-datos-personales"],
    ["Proyecto que posterga la Ley 21.719 — Garrigues", "https://www.garrigues.com/es_ES/noticia/chile-ejecutivo-presenta-proyecto-postergar-entrada-vigor-nueva-ley-proteccion-datos"],
    ["Comisión de la Cámara aprueba postergar la Ley 21.719 — Portal Innova", "https://portalinnova.cl/proteccion-de-datos-personales-comision-de-la-camara-aprueba-postergar-la-entrada-en-vigencia-de-la-ley-21-719-hasta-octubre-de-2027/"],
    ["Ley 21.744 que crea el SERNAFOR — Cariola", "https://www.cariola.cl/app/uploads/2025/06/AlertaLegal206_SERNAFOR-1.pdf"],
    ["Indicadores de desempeño CONAF (medio de verificación SIDCO) — DIPRES", "https://www.dipres.gob.cl/597/articles-144615_doc_pdf.pdf"],
    ["Causa de incendios intencionales — BioBioChile (2023)", "https://www.biobiochile.cl/noticias/nacional/chile/2023/02/20/amp/conaf-revela-que-un-25-de-los-incendios-forestales-serian-intencionales.shtml"],
    ["Sistema de Información Territorial SIT-CONAF — CEPAL", "https://www.cepal.org/sites/default/files/events/files/rio_12.2013_hugo.rivera.sit_conaf.esp_.pdf"],
    ["SIMEF, información de bosques de Chile", "https://simef.minagri.gob.cl/herramientas/informacion-de-bosques-de-chile/pdf/07"],
    ["Política Nacional de Información Geoespacial — Bienes Nacionales", "https://www.bienesnacionales.cl/wp-content/uploads/2023/11/Reporte-Resultados-Participacion-Ciudadana-Politica-Nacional-de-Informacion-Geoespacial-2023.pdf"]
  ]
};
