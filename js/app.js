/* =========================================================
   Curso "Gobernanza de Datos en el Estado de Chile" — CONAF
   Lógica de la aplicación (navegación, progreso, actividades)
   Sin dependencias externas. Funciona abriendo index.html
   directamente o publicado en cualquier servidor web.
   ========================================================= */
(function () {
  "use strict";

  var C = window.CURSO;
  var CLAVE = "curso-gobernanza-datos-conaf-v1";
  var vista = document.getElementById("vista");

  /* ---------------- Estado y persistencia ---------------- */
  var estado = cargar();

  function estadoVacio() {
    return { completados: {}, quizzes: {}, final: null, nombre: "", semaforo: {}, mgde: {}, ficha: {}, visitados: {} };
  }
  function cargar() {
    try {
      var s = JSON.parse(localStorage.getItem(CLAVE));
      if (s && typeof s === "object") return Object.assign(estadoVacio(), s);
    } catch (e) { /* almacenamiento no disponible */ }
    return estadoVacio();
  }
  function guardar() {
    try { localStorage.setItem(CLAVE, JSON.stringify(estado)); } catch (e) { /* sin persistencia */ }
    actualizarProgreso();
    pintarMenu();
  }

  /* ---------------- Utilidades ---------------- */
  function el(tag, attrs, html) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === "class") n.className = attrs[k];
      else if (k.indexOf("on") === 0) n.addEventListener(k.slice(2), attrs[k]);
      else n.setAttribute(k, attrs[k]);
    });
    if (html != null) n.innerHTML = html;
    return n;
  }
  function esc(t) {
    return String(t == null ? "" : t).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function totalModulos() { return C.modulos.length; }
  function nCompletados() { return C.modulos.filter(function (m) { return estado.completados[m.id]; }).length; }
  function finalAprobado() { return estado.final != null && estado.final >= C.aprobacionFinal; }
  function retro(div, tipo, html) { div.className = "retro visible " + tipo; div.innerHTML = html; }

  /* ---------------- Logo con respaldo ---------------- */
  (function logo() {
    var img = document.getElementById("logoImg");
    var cont = document.getElementById("logo");
    var intento = 0;
    function fallo() {
      intento++;
      if (intento === 1 && img.dataset.respaldo) img.src = img.dataset.respaldo;
      else cont.classList.add("sin-imagen");
    }
    img.addEventListener("error", fallo);
    if (img.complete && img.naturalWidth === 0) fallo();
  })();

  /* ---------------- Menú lateral ---------------- */
  var menu = document.getElementById("menu");
  var velo = document.getElementById("velo");
  var btnMenu = document.getElementById("btnMenu");
  function cerrarMenu() { menu.classList.remove("abierto"); velo.classList.remove("visible"); btnMenu.setAttribute("aria-expanded", "false"); }
  btnMenu.addEventListener("click", function () {
    var ab = menu.classList.toggle("abierto");
    velo.classList.toggle("visible", ab);
    btnMenu.setAttribute("aria-expanded", ab ? "true" : "false");
  });
  velo.addEventListener("click", cerrarMenu);

  function enlace(href, num, texto, clases) {
    return '<li><a href="#' + href + '" class="' + (clases || "") + '" data-ruta="' + href + '"><span class="num">' + num + "</span><span>" + texto + "</span></a></li>";
  }
  function pintarMenu() {
    var ruta = rutaActual();
    document.getElementById("menuInicio").innerHTML = enlace("inicio", "⌂", "Inicio y objetivos");
    document.getElementById("menuModulos").innerHTML = C.modulos.map(function (m, i) {
      return enlace(m.id, estado.completados[m.id] ? "✓" : i + 1, m.titulo, estado.completados[m.id] ? "hecho" : "");
    }).join("");
    var todos = nCompletados() === totalModulos();
    document.getElementById("menuCierre").innerHTML =
      enlace("evaluacion", finalAprobado() ? "✓" : "★", "Evaluación final", (finalAprobado() ? "hecho " : "") + (todos ? "" : "bloqueado")) +
      enlace("certificado", "🎓", "Certificado", finalAprobado() ? "" : "bloqueado") +
      enlace("glosario", "A", "Glosario") +
      enlace("fuentes", "§", "Fuentes y recursos");
    menu.querySelectorAll("a").forEach(function (a) { if (a.dataset.ruta === ruta) { a.classList.add("activo"); a.setAttribute("aria-current", "page"); } });
  }

  function actualizarProgreso() {
    var pasos = totalModulos() + 1;
    var hechos = nCompletados() + (finalAprobado() ? 1 : 0);
    var pct = Math.round((hechos / pasos) * 100);
    document.getElementById("textoProgreso").textContent = "Avance: " + pct + "%";
    var b = document.getElementById("barraProgreso");
    b.setAttribute("aria-valuenow", pct);
    b.firstElementChild.style.width = pct + "%";
  }

  /* ---------------- Enrutador ---------------- */
  function rutaActual() { return (location.hash || "#inicio").slice(1) || "inicio"; }

  function navegar() {
    var r = rutaActual();
    var idx = C.modulos.findIndex(function (m) { return m.id === r; });
    vista.innerHTML = "";
    if (idx >= 0) vistaModulo(idx);
    else if (r === "evaluacion") vistaEvaluacion();
    else if (r === "certificado") vistaCertificado();
    else if (r === "glosario") vistaGlosario();
    else if (r === "fuentes") vistaFuentes();
    else vistaInicio();
    pintarMenu();
    cerrarMenu();
    window.scrollTo(0, 0);
    document.getElementById("contenido").focus({ preventScroll: true });
  }
  window.addEventListener("hashchange", navegar);

  /* ---------------- Vista: inicio ---------------- */
  function vistaInicio() {
    var arboles = '<svg class="arboles" viewBox="0 0 300 160" aria-hidden="true"><g fill="#fff">' +
      '<polygon points="40,160 70,40 100,160"/><polygon points="90,160 130,10 170,160"/><polygon points="150,160 185,55 220,160"/>' +
      '<polygon points="200,160 245,20 290,160"/></g></svg>';
    var siguiente = C.modulos.find(function (m) { return !estado.completados[m.id]; });
    var html =
      '<section class="portada">' + arboles +
      '<span class="etiqueta">Curso online · 6 a 8 horas</span>' +
      "<h1>" + esc(C.titulo) + "</h1>" +
      "<p>Aprenda qué es la gobernanza de datos, por qué es obligatoria en el Estado y cómo aplicarla en su trabajo diario en CONAF. No necesita conocimientos de informática.</p>" +
      '<div class="btn-fila"><a class="btn amarillo" href="#' + (siguiente ? siguiente.id : "evaluacion") + '">' +
      (nCompletados() ? "Continuar curso →" : "Comenzar curso →") + "</a></div></section>" +

      "<h2>Al terminar, usted podrá</h2><ol>" +
      "<li>Explicar con sus palabras qué es la gobernanza de datos y por qué no es \"un tema de TI\".</li>" +
      "<li>Reconocer las leyes y normas chilenas que obligan a CONAF a gestionar bien sus datos.</li>" +
      "<li>Identificar su propio rol frente a los datos que usa: dueño, custodio o usuario.</li>" +
      "<li>Detectar problemas de calidad, seguridad o privacidad en datos reales.</li>" +
      "<li>Proponer una mejora concreta para un conjunto de datos de su unidad.</li></ol>" +

      "<h2>Cómo funciona</h2>" +
      '<div class="rejilla">' +
      '<div class="tarjeta"><div class="icono-grande">📖</div><strong>7 módulos</strong><p>Cada uno con idea clave, ejemplos forestales y una actividad práctica.</p></div>' +
      '<div class="tarjeta"><div class="icono-grande">✅</div><strong>Preguntas de control</strong><p>Al final de cada módulo. Apruebe para marcarlo como completado.</p></div>' +
      '<div class="tarjeta"><div class="icono-grande">🎓</div><strong>Evaluación y certificado</strong><p>Con ' + C.aprobacionFinal + "% o más en la evaluación final obtiene su certificado.</p></div>" +
      "</div>" +

      "<h2>Contenidos</h2>" +
      '<div class="tabla-envoltura"><table><thead><tr><th>#</th><th>Módulo</th><th>Duración</th><th>Estado</th></tr></thead><tbody>' +
      C.modulos.map(function (m, i) {
        return "<tr><td>" + m.icono + " " + (i + 1) + '</td><td><a href="#' + m.id + '"><strong>' + esc(m.titulo) + "</strong></a><br><small>" + esc(m.resumen) + "</small></td><td>" + m.duracion + "</td><td>" +
          (estado.completados[m.id] ? '<span style="color:var(--ok);font-weight:700">Completado</span>' : "Pendiente") + "</td></tr>";
      }).join("") +
      "</tbody></table></div>" +
      '<p style="font-size:0.9rem;color:var(--tinta-suave)">Su avance se guarda en este navegador. Contenido actualizado al ' + esc(C.actualizado) + ".</p>";
    vista.innerHTML = html;
    var reiniciar = el("button", { class: "btn secundario no-imprimir", type: "button", onclick: function () {
      if (confirm("¿Desea borrar todo su avance en este navegador? Esta acción no se puede deshacer.")) { estado = estadoVacio(); guardar(); navegar(); }
    } }, "Reiniciar mi avance");
    vista.appendChild(reiniciar);
  }

  /* ---------------- Vista: módulo ---------------- */
  function vistaModulo(i) {
    var m = C.modulos[i];
    estado.visitados[m.id] = true;
    vista.innerHTML =
      '<p style="color:var(--tinta-suave);margin:0">Módulo ' + (i + 1) + " de " + totalModulos() + " · " + m.duracion + "</p>" +
      "<h1>" + m.icono + " " + esc(m.titulo) + "</h1>" + m.html;

    // Inicializa las actividades incrustadas
    vista.querySelectorAll("[data-actividad]").forEach(function (cont) {
      var fn = ACTIVIDADES[cont.dataset.actividad];
      if (fn) fn(cont);
    });

    var q = el("section", { class: "quiz", "aria-labelledby": "quiz-" + m.id });
    vista.appendChild(q);
    renderQuiz(q, m.quiz, "Preguntas de control del módulo", m.id, 67, function (pct) {
      estado.quizzes[m.id] = pct;
      if (pct >= 67) estado.completados[m.id] = true;
      guardar();
    });

    var nav = el("nav", { class: "nav-paginas", "aria-label": "Navegación entre módulos" });
    nav.innerHTML =
      (i > 0 ? '<a class="btn secundario" href="#' + C.modulos[i - 1].id + '">← ' + esc(C.modulos[i - 1].titulo) + "</a>" : '<a class="btn secundario" href="#inicio">← Inicio</a>') +
      (i < totalModulos() - 1 ? '<a class="btn" href="#' + C.modulos[i + 1].id + '">' + esc(C.modulos[i + 1].titulo) + " →</a>" : '<a class="btn" href="#evaluacion">Evaluación final →</a>');
    vista.appendChild(nav);
  }

  /* ---------------- Quiz reutilizable ---------------- */
  function renderQuiz(cont, preguntas, titulo, clave, minimo, alTerminar) {
    var id = "quiz-" + clave;
    cont.innerHTML = '<h3 id="' + id + '">' + esc(titulo) + "</h3><p>Responda todas las preguntas y presione <strong>Revisar</strong>. Necesita " + minimo + "% o más para aprobar.</p>";
    var form = el("form", { novalidate: "" });
    preguntas.forEach(function (q, qi) {
      var f = el("fieldset", { class: "pregunta", style: "border:0;padding:0;margin:20px 0" });
      f.innerHTML = "<legend><p>" + (qi + 1) + ". " + esc(q.p) + "</p></legend>" +
        q.op.map(function (o, oi) {
          return '<label class="opcion"><input type="radio" name="' + clave + "-p" + qi + '" value="' + oi + '">' + esc(o) + "</label>";
        }).join("") + '<div class="explicacion">' + esc(q.e) + "</div>";
      form.appendChild(f);
    });
    var res = el("div", { class: "retro", role: "status", "aria-live": "polite" });
    var btn = el("button", { class: "btn", type: "submit" }, "Revisar respuestas");
    var otra = el("button", { class: "btn secundario", type: "button", style: "display:none" }, "Intentar de nuevo");
    var fila = el("div", { class: "btn-fila" });
    fila.appendChild(btn); fila.appendChild(otra);
    form.appendChild(fila);
    form.appendChild(res);
    cont.appendChild(form);

    if (estado.quizzes[clave] != null) {
      var prev = estado.quizzes[clave];
      retro(res, prev >= minimo ? "ok" : "info", "Su último resultado fue <strong>" + prev + "%</strong>." + (prev >= minimo ? " Módulo aprobado. Puede repetir las preguntas si lo desea." : ""));
    }

    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var correctas = 0, sinResponder = 0;
      preguntas.forEach(function (q, qi) {
        var marcada = form.querySelector('input[name="' + clave + "-p" + qi + '"]:checked');
        if (!marcada) sinResponder++;
      });
      if (sinResponder) { retro(res, "mal", "Le faltan " + sinResponder + " pregunta(s) por responder."); return; }
      preguntas.forEach(function (q, qi) {
        var labels = form.querySelectorAll('input[name="' + clave + "-p" + qi + '"]');
        labels.forEach(function (inp) {
          var lab = inp.parentElement;
          var v = Number(inp.value);
          if (v === q.c) lab.classList.add("correcta");
          if (inp.checked && v !== q.c) lab.classList.add("incorrecta");
          if (inp.checked && v === q.c) correctas++;
          inp.disabled = true;
        });
      });
      cont.classList.add("corregido");
      var pct = Math.round((correctas / preguntas.length) * 100);
      var ok = pct >= minimo;
      retro(res, ok ? "ok" : "mal", '<span class="puntaje">' + correctas + " de " + preguntas.length + " (" + pct + "%)</span><br>" +
        (ok ? "¡Aprobado! Revise las explicaciones bajo cada pregunta." : "Aún no alcanza el mínimo. Lea las explicaciones y vuelva a intentarlo."));
      btn.style.display = "none"; otra.style.display = "";
      alTerminar(pct);
    });
    otra.addEventListener("click", function () { renderQuiz(cont, preguntas, titulo, clave, minimo, alTerminar); cont.classList.remove("corregido"); });
  }

  /* ---------------- Vista: evaluación final ---------------- */
  function vistaEvaluacion() {
    vista.innerHTML = "<h1>★ Evaluación final</h1>";
    if (nCompletados() < totalModulos()) {
      var faltan = C.modulos.filter(function (m) { return !estado.completados[m.id]; });
      vista.innerHTML += '<div class="atencion">Para rendir la evaluación final debe aprobar las preguntas de control de todos los módulos. Le faltan:</div><ul>' +
        faltan.map(function (m) { return '<li><a href="#' + m.id + '">' + esc(m.titulo) + "</a></li>"; }).join("") + "</ul>";
      return;
    }
    vista.innerHTML += "<p>" + C.evaluacionFinal.length + " preguntas sobre todo el curso. Necesita " + C.aprobacionFinal + "% para obtener su certificado. Puede repetirla.</p>";
    var q = el("section", { class: "quiz" });
    vista.appendChild(q);
    renderQuiz(q, C.evaluacionFinal, "Evaluación final del curso", "final", C.aprobacionFinal, function (pct) {
      if (estado.final == null || pct > estado.final) estado.final = pct;
      guardar();
      if (pct >= C.aprobacionFinal) {
        var b = el("div", { class: "btn-fila" }, '<a class="btn amarillo" href="#certificado">🎓 Obtener mi certificado</a>');
        q.appendChild(b);
      }
    });
  }

  /* ---------------- Vista: certificado ---------------- */
  function vistaCertificado() {
    vista.innerHTML = "<h1 class='no-imprimir'>🎓 Certificado</h1>";
    if (!finalAprobado()) {
      vista.innerHTML += '<div class="atencion">El certificado se habilita al aprobar la <a href="#evaluacion">evaluación final</a> con ' + C.aprobacionFinal + "% o más.</div>";
      return;
    }
    var form = el("div", { class: "tarjeta no-imprimir" },
      '<label for="nombreCert">Escriba su nombre completo tal como debe aparecer:</label><br>' +
      '<input type="text" id="nombreCert" style="width:100%;margin:8px 0" value="' + esc(estado.nombre) + '">' +
      '<div class="btn-fila"><button class="btn" type="button" id="btnImprimir">Imprimir o guardar como PDF</button></div>');
    vista.appendChild(form);
    var hoy = new Date().toLocaleDateString("es-CL", { day: "numeric", month: "long", year: "numeric" });
    var cert = el("div", { class: "certificado" },
      '<img class="logo-cert" src="' + esc(document.getElementById("logoImg").src) + '" alt="CONAF" onerror="this.style.display=\'none\'">' +
      '<p style="letter-spacing:0.15em;text-transform:uppercase;color:var(--tinta-suave);margin:0">Corporación Nacional Forestal</p>' +
      "<h2>Certificado de aprobación</h2><p>Se certifica que</p>" +
      '<div class="nombre" id="certNombre">' + (esc(estado.nombre) || "&nbsp;") + "</div>" +
      "<p>aprobó el curso<br><strong style='font-size:1.25rem;color:var(--conaf-verde-oscuro)'>" + esc(C.titulo) + "</strong></p>" +
      "<p>con un resultado de <strong>" + estado.final + "%</strong> en la evaluación final.</p>" +
      '<p style="margin-top:32px;color:var(--tinta-suave)">' + hoy + "</p>");
    vista.appendChild(cert);
    var inp = document.getElementById("nombreCert");
    inp.addEventListener("input", function () {
      estado.nombre = inp.value;
      document.getElementById("certNombre").innerHTML = esc(inp.value) || "&nbsp;";
      guardar();
    });
    document.getElementById("btnImprimir").addEventListener("click", function () {
      if (!inp.value.trim()) { inp.focus(); alert("Escriba su nombre antes de imprimir."); return; }
      window.print();
    });
  }

  /* ---------------- Vista: glosario ---------------- */
  function vistaGlosario() {
    vista.innerHTML = "<h1>Glosario</h1><p>Términos clave del curso. Escriba para filtrar.</p>" +
      '<input class="buscador" type="search" id="buscaGlos" placeholder="Buscar un término…" aria-label="Buscar en el glosario">' +
      '<dl class="glosario" id="listaGlos"></dl>';
    var lista = document.getElementById("listaGlos");
    function pintar(f) {
      f = (f || "").toLowerCase();
      var items = C.glosario.filter(function (g) { return (g[0] + " " + g[1]).toLowerCase().indexOf(f) >= 0; });
      lista.innerHTML = items.length ? items.map(function (g) { return "<dt>" + esc(g[0]) + "</dt><dd>" + esc(g[1]) + "</dd>"; }).join("") : "<p>No hay términos que coincidan.</p>";
    }
    pintar("");
    document.getElementById("buscaGlos").addEventListener("input", function (e) { pintar(e.target.value); });
  }

  /* ---------------- Vista: fuentes ---------------- */
  function vistaFuentes() {
    vista.innerHTML = "<h1>Fuentes y recursos</h1><p>Documentos oficiales y artículos usados para elaborar el curso. Se abren en una pestaña nueva.</p><ul>" +
      C.fuentes.map(function (f) { return '<li><a href="' + esc(f[1]) + '" target="_blank" rel="noopener">' + esc(f[0]) + "</a></li>"; }).join("") +
      "</ul><div class='idea-clave'>Las fechas de leyes en tramitación cambian. Antes de cada versión del curso, verifique en bcn.cl y senado.cl el estado del proyecto que posterga la Ley 21.719.</div>";
  }

  /* =========================================================
     ACTIVIDADES INTERACTIVAS
     ========================================================= */
  var ACTIVIDADES = {

    /* Tarjetas que giran (Módulo 1) */
    tarjetas: function (cont) {
      cont.querySelectorAll(".giro").forEach(function (t) {
        function girar() { t.classList.toggle("volteada"); }
        t.addEventListener("click", girar);
        t.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); girar(); } });
      });
    },

    /* Detecte los errores (Módulo 1) */
    errores: function (cont) {
      var cab = ["Fecha", "Nombre", "RUT", "Región", "Personas", "Motivo"];
      var filas = [
        ["2026-01-15", "Juan Pérez", "12.345.678-5", "Araucanía", "4", "Excursión"],
        ["15/01/2026", "juan perez", "12345678-5", "Araucania", "4", "excursion"],
        ["2026-02-30", "María Soto", "", "Los Lagos", "-2", "Camping"],
        ["2026-03-01", "Pedro Rojas", "9.876.543-K", "Region 10", "3", "Diabetes; requiere insulina"]
      ];
      var errores = {
        "1-0": "Formato de fecha distinto (validez y consistencia).",
        "1-1": "Registro duplicado de Juan Pérez con otra escritura (unicidad).",
        "1-3": "\"Araucania\" sin tilde: no coincide con el nombre oficial (consistencia).",
        "2-0": "El 30 de febrero no existe (validez).",
        "2-2": "RUT vacío en un campo obligatorio (completitud).",
        "2-4": "Número de personas negativo (validez).",
        "3-3": "\"Region 10\" no es el nombre oficial: debe usarse la tabla maestra de regiones.",
        "3-5": "Dato de salud (sensible) en un campo de motivo: viola el principio de proporcionalidad."
      };
      var total = Object.keys(errores).length;
      var t = '<div class="tabla-envoltura"><table class="datos-error"><thead><tr>' + cab.map(function (c) { return "<th>" + c + "</th>"; }).join("") + "</tr></thead><tbody>" +
        filas.map(function (f, fi) {
          return "<tr>" + f.map(function (v, ci) { return '<td tabindex="0" data-k="' + fi + "-" + ci + '">' + (esc(v) || "<em style='color:#999'>(vacío)</em>") + "</td>"; }).join("") + "</tr>";
        }).join("") + "</tbody></table></div>";
      cont.innerHTML = t + '<div class="btn-fila"><button class="btn" type="button">Revisar</button><span style="align-self:center" class="contador">Marcadas: 0</span></div><div class="retro"></div>';
      var marcadas = {};
      var contador = cont.querySelector(".contador");
      cont.querySelectorAll("td").forEach(function (td) {
        function toggle() {
          var k = td.dataset.k;
          if (marcadas[k]) { delete marcadas[k]; td.classList.remove("marcada-ok", "marcada-mal"); td.style.outline = ""; }
          else { marcadas[k] = true; td.style.outline = "3px solid var(--conaf-amarillo)"; }
          contador.textContent = "Marcadas: " + Object.keys(marcadas).length;
        }
        td.addEventListener("click", toggle);
        td.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } });
      });
      cont.querySelector("button").addEventListener("click", function () {
        var aciertos = 0, falsos = 0;
        cont.querySelectorAll("td").forEach(function (td) {
          var k = td.dataset.k;
          td.style.outline = "";
          td.classList.remove("marcada-ok", "marcada-mal");
          if (errores[k]) { td.classList.add("marcada-ok"); td.title = errores[k]; if (marcadas[k]) aciertos++; }
          else if (marcadas[k]) { td.classList.add("marcada-mal"); falsos++; }
        });
        var lista = "<ul>" + Object.keys(errores).map(function (k) {
          var p = k.split("-");
          return "<li><strong>Fila " + (Number(p[0]) + 1) + ", " + cab[p[1]] + ":</strong> " + esc(errores[k]) + "</li>";
        }).join("") + "</ul>";
        retro(cont.querySelector(".retro"), aciertos === total && !falsos ? "ok" : "info",
          "Encontró <strong>" + aciertos + " de " + total + "</strong> errores" + (falsos ? " y marcó " + falsos + " celda(s) correcta(s) como error" : "") + ". En verde se muestran todos los errores:" + lista);
      });
    },

    /* Caso incendios intencionales (Módulo 2) */
    "caso-incendios": function (cont) {
      cont.innerHTML = '<div class="btn-fila"><button class="btn secundario" type="button" data-r="a">El 25%</button><button class="btn secundario" type="button" data-r="b">El 30%</button><button class="btn secundario" type="button" data-r="c">Depende de la definición</button></div><div class="retro"></div>';
      var expl = "Ninguna cifra era \"falsa\". Medían cosas distintas: la <strong>causa referencial</strong>, que estima el primer combatiente en terreno, y la <strong>causa investigada</strong>, que surge de un proceso formal. Es un problema clásico de gobernanza: <strong>una misma palabra con dos definiciones</strong>. La solución no es tecnológica: es acordar y publicar un glosario donde cada indicador tenga definición, dueño y fuente oficial.";
      cont.querySelectorAll("button").forEach(function (b) {
        b.addEventListener("click", function () {
          var ok = b.dataset.r === "c";
          retro(cont.querySelector(".retro"), ok ? "ok" : "info", (ok ? "<strong>¡Exacto!</strong> " : "<strong>No exactamente.</strong> ") + expl);
        });
      });
    },

    /* Semáforo de cumplimiento (Módulo 3) */
    semaforo: function (cont) {
      var preguntas = [
        ["¿Sabemos qué datos personales contiene y para qué?", "Ley 21.719"],
        ["¿Hay una persona responsable formalmente designada?", "MGDE / PMG"],
        ["¿Está protegido con usuario, clave y respaldo?", "Ley 21.663 y NT de Seguridad"],
        ["¿Se tramita en formato electrónico?", "Ley 21.180"],
        ["¿Podríamos entregarlo rápido ante una solicitud de transparencia?", "Ley 20.285"],
        ["¿Otro servicio podría consumirlo sin pedir planillas por correo?", "NT de Interoperabilidad"]
      ];
      var nombre = document.getElementById("semaforoNombre");
      if (nombre) {
        nombre.value = estado.semaforo.nombre || "";
        nombre.addEventListener("input", function () { estado.semaforo.nombre = nombre.value; guardar(); });
      }
      cont.innerHTML = '<div class="tabla-envoltura"><table><thead><tr><th>Pregunta</th><th>Norma</th><th>Estado</th></tr></thead><tbody>' +
        preguntas.map(function (p, i) {
          return "<tr><td>" + esc(p[0]) + "</td><td>" + esc(p[1]) + '</td><td><div class="semaforo" role="radiogroup" aria-label="Estado">' +
            '<button type="button" class="v" data-i="' + i + '" data-v="v" aria-label="Verde"></button>' +
            '<button type="button" class="a" data-i="' + i + '" data-v="a" aria-label="Amarillo"></button>' +
            '<button type="button" class="r" data-i="' + i + '" data-v="r" aria-label="Rojo"></button></div></td></tr>';
        }).join("") + '</tbody></table></div><div class="retro"></div>';
      var res = cont.querySelector(".retro");
      function pintar() {
        cont.querySelectorAll(".semaforo button").forEach(function (b) {
          var sel = estado.semaforo[b.dataset.i] === b.dataset.v;
          b.classList.toggle("sel", sel);
          b.setAttribute("aria-pressed", sel ? "true" : "false");
        });
        var n = { v: 0, a: 0, r: 0 }, cuenta = 0;
        preguntas.forEach(function (_, i) { var v = estado.semaforo[i]; if (v) { n[v]++; cuenta++; } });
        if (cuenta < preguntas.length) { retro(res, "info", "Respondidas " + cuenta + " de " + preguntas.length + "."); return; }
        var rojos = preguntas.filter(function (_, i) { return estado.semaforo[i] === "r"; }).map(function (p) { return p[0]; });
        retro(res, n.r ? "mal" : (n.a ? "info" : "ok"),
          "🟢 " + n.v + " · 🟡 " + n.a + " · 🔴 " + n.r + "<br>" +
          (n.r ? "Priorice los puntos en rojo: <ul><li>" + rojos.map(esc).join("</li><li>") + "</li></ul>Llévelos a su plan de 90 días (Módulo 7)." :
            n.a ? "Buen punto de partida. Convierta los amarillos en tareas concretas con responsable y fecha." : "¡Excelente! Documente cómo lo logró para replicarlo en otros conjuntos de datos."));
      }
      cont.querySelectorAll(".semaforo button").forEach(function (b) {
        b.addEventListener("click", function () { estado.semaforo[b.dataset.i] = b.dataset.v; guardar(); pintar(); });
      });
      pintar();
    },

    /* Autoevaluación MGDE (Módulo 4) */
    mgde: function (cont) {
      var dims = [
        ["Visión estratégica", "Incluya metas de datos en la planificación anual de su unidad."],
        ["Gobernanza", "Designe por escrito un dueño y un administrador para cada conjunto de datos crítico."],
        ["Arquitectura, diseño y documentación", "Haga un inventario simple de sistemas y planillas con su descripción."],
        ["Almacenamiento y operación", "Saque las planillas de los computadores personales y lléveles a un repositorio con respaldo."],
        ["Seguridad y ciberseguridad de datos", "Revise quién tiene acceso a cada sistema y retire los accesos que sobran."],
        ["Integración e interoperabilidad", "Identifique qué datos pide a las personas que otro servicio ya tiene."],
        ["Documentos y contenidos", "Lleve los expedientes al formato electrónico que exige la Ley 21.180."],
        ["Datos maestros y de referencia", "Use una sola tabla oficial de regiones, comunas, especies y predios."],
        ["Analítica e inteligencia de negocios", "Construya un tablero sencillo con los 3 indicadores que más usa."],
        ["Calidad de datos", "Mida incompletos y duplicados una vez al mes y agregue validaciones."],
        ["Datos abiertos", "Publique en datos.gob.cl las estadísticas agregadas que ya son públicas."],
        ["Aspectos legales y normativos", "Registre qué datos personales trata, con qué finalidad y por cuánto tiempo."]
      ];
      var etiquetas = ["No existe", "Inicial", "Básico", "Medio", "Avanzado"];
      cont.innerHTML = dims.map(function (d, i) {
        var v = estado.mgde[i] != null ? estado.mgde[i] : 1;
        return '<div class="mgde-fila"><label for="mg' + i + '">' + (i + 1) + ". " + esc(d[0]) + '</label><input type="range" min="0" max="4" step="1" id="mg' + i + '" data-i="' + i + '" value="' + v + '"><output for="mg' + i + '" title="' + etiquetas[v] + '">' + v + "</output></div>";
      }).join("") + '<div class="btn-fila"><button class="btn" type="button">Ver mis prioridades</button></div><div class="retro"></div>';
      cont.querySelectorAll("input[type=range]").forEach(function (r) {
        r.addEventListener("input", function () {
          var o = r.nextElementSibling; o.textContent = r.value; o.title = etiquetas[r.value];
          estado.mgde[r.dataset.i] = Number(r.value); guardar();
        });
      });
      cont.querySelector("button").addEventListener("click", function () {
        var vals = dims.map(function (d, i) { return { i: i, d: d, v: estado.mgde[i] != null ? estado.mgde[i] : 1 }; });
        var prom = vals.reduce(function (s, x) { return s + x.v; }, 0) / vals.length;
        var top = vals.slice().sort(function (a, b) { return a.v - b.v || a.i - b.i; }).slice(0, 3);
        var barras = '<div class="mgde-barras">' + vals.map(function (x) {
          return '<div style="display:grid;grid-template-columns:200px 1fr 30px;gap:8px;align-items:center;font-size:0.85rem;margin:3px 0"><span>' + esc(x.d[0]) +
            '</span><div class="barra" style="height:12px"><span style="width:' + (x.v * 25) + "%;background:" + (x.v <= 1 ? "var(--error)" : x.v === 2 ? "var(--alerta)" : "var(--ok)") + '"></span></div><b>' + x.v + "</b></div>";
        }).join("") + "</div>";
        retro(cont.querySelector(".retro"), "info",
          "Nivel promedio estimado: <strong>" + prom.toFixed(1) + " (" + etiquetas[Math.round(prom)] + ")</strong>" + barras +
          "<p><strong>Sus 3 prioridades sugeridas:</strong></p><ol>" + top.map(function (x) { return "<li><strong>" + esc(x.d[0]) + ":</strong> " + esc(x.d[1]) + "</li>"; }).join("") + "</ol>");
      });
    },

    /* ¿Quién lo hace? (Módulo 5) */
    roles: function (cont) {
      var opciones = ["Dueño de datos", "Administrador de datos", "Custodio técnico (Informática)", "Brigadas y centrales", "Líder de datos"];
      var tareas = [
        ["Redactar la definición de \"incendio intencional\" para el glosario", 1, "El administrador de datos la redacta; el dueño la aprueba."],
        ["Registrar el incendio en el sistema", 3, "Quien está en la operación registra el dato en el origen."],
        ["Revisar duplicados y errores cada semana", 1, "El cuidado diario de la calidad es del administrador de datos."],
        ["Crear la cuenta de un nuevo usuario con su perfil", 2, "Informática ejecuta, según lo que autorice el dueño."],
        ["Aprobar qué estadísticas se publican como datos abiertos", 0, "La decisión sobre el uso y apertura es del dueño del dato."],
        ["Informar al comité el avance del programa de gobernanza", 4, "El líder de datos coordina y reporta."]
      ];
      cont.innerHTML = '<div class="tabla-envoltura"><table><thead><tr><th>Tarea</th><th>¿Quién la realiza?</th></tr></thead><tbody>' +
        tareas.map(function (t, i) {
          return "<tr><td>" + esc(t[0]) + '<div class="explicacion" style="display:none"></div></td><td><select data-i="' + i + '" aria-label="Rol para: ' + esc(t[0]) + '"><option value="">Elegir…</option>' +
            opciones.map(function (o, oi) { return '<option value="' + oi + '">' + esc(o) + "</option>"; }).join("") + "</select></td></tr>";
        }).join("") + '</tbody></table></div><div class="btn-fila"><button class="btn" type="button">Revisar</button></div><div class="retro"></div>';
      cont.querySelector("button").addEventListener("click", function () {
        var bien = 0;
        cont.querySelectorAll("select").forEach(function (s) {
          var t = tareas[s.dataset.i];
          var ok = Number(s.value) === t[1] && s.value !== "";
          if (ok) bien++;
          s.style.borderColor = ok ? "var(--ok)" : "var(--error)";
          s.style.borderWidth = "2px";
          var ex = s.closest("tr").querySelector(".explicacion");
          ex.style.display = "block";
          ex.innerHTML = (ok ? "✔ " : "✘ Correcto: <strong>" + esc(opciones[t[1]]) + "</strong>. ") + esc(t[2]);
        });
        retro(cont.querySelector(".retro"), bien === tareas.length ? "ok" : "info", "Acertó <strong>" + bien + " de " + tareas.length + "</strong>. Recuerde: el dueño <em>decide</em>, el administrador <em>cuida</em>, el custodio <em>protege</em>.");
      });
    },

    /* ¿Qué haría usted? (Módulo 6) */
    decisiones: function (cont) {
      var casos = [
        { s: "Un colega le pide por WhatsApp la planilla con RUT y teléfonos de todos los propietarios de la provincia \"para avanzar más rápido\".",
          op: ["Se la envía, es un compañero de trabajo", "Le da acceso al sistema según su perfil o le envía solo los datos necesarios por un canal institucional", "La sube a una carpeta compartida pública"], c: 1,
          e: "Finalidad, proporcionalidad y seguridad: solo lo necesario, por canales institucionales y con acceso por perfil." },
        { s: "Detecta que dos regiones registran la hora de \"primer ataque\" con criterios distintos.",
          op: ["Corrige los datos de la otra región usando su criterio", "Lo informa al administrador de datos para que el dueño fije una definición única", "No hace nada: es un detalle menor"], c: 1,
          e: "Las definiciones las fija el dueño del dato. Sin definición única, los indicadores no son comparables." },
        { s: "Una universidad solicita la capa del catastro vegetacional de su región para una investigación.",
          op: ["Se niega: es información interna", "Indica dónde descargarla (SIT-CONAF o IDE Chile) con sus metadatos", "Pide que presente una solicitud notarial"], c: 1,
          e: "El catastro es público por la Ley 20.283. Lo correcto es facilitar el acceso con metadatos claros." },
        { s: "Sospecha que un correo con un archivo adjunto infectó el computador donde están los registros de denuncias.",
          op: ["Apaga el equipo y espera a ver qué pasa", "Lo reporta de inmediato a Informática / encargado de seguridad según el procedimiento", "Borra el correo y sigue trabajando"], c: 1,
          e: "La Ley 21.663 exige gestionar y reportar incidentes. Reportar rápido limita el daño." }
      ];
      cont.innerHTML = casos.map(function (k, i) {
        return '<div class="tarjeta"><p><strong>Situación ' + (i + 1) + ":</strong> " + esc(k.s) + "</p>" +
          k.op.map(function (o, oi) { return '<button type="button" class="btn secundario" style="display:block;width:100%;text-align:left;margin:6px 0" data-i="' + i + '" data-o="' + oi + '">' + esc(o) + "</button>"; }).join("") +
          '<div class="retro"></div></div>';
      }).join("");
      cont.querySelectorAll("button").forEach(function (b) {
        b.addEventListener("click", function () {
          var k = casos[b.dataset.i], ok = Number(b.dataset.o) === k.c;
          retro(b.parentElement.querySelector(".retro"), ok ? "ok" : "mal", (ok ? "<strong>Correcto.</strong> " : "<strong>Mejor no.</strong> ") + esc(k.e));
        });
      });
    },

    /* Ficha de activo de datos (Módulo 7) */
    ficha: function (cont) {
      var campos = [
        ["nombre", "Nombre del conjunto de datos", "Registro de planes de manejo de bosque nativo"],
        ["descripcion", "Para qué existe", "Seguimiento de la tramitación de planes (Ley 20.283)"],
        ["dueno", "Dueño (cargo)", "Jefatura del Departamento de Bosque Nativo"],
        ["administrador", "Administrador de datos", "Profesional de evaluación de la región"],
        ["custodio", "Custodio técnico", "Departamento de Informática"],
        ["ubicacion", "Sistema o ubicación", "Sistema de planes de manejo; servidor institucional"],
        ["personales", "¿Contiene datos personales? ¿Cuáles?", "Sí: RUT, nombre, teléfono y correo del propietario"],
        ["base", "Base legal y finalidad", "Tramitación de un procedimiento administrativo"],
        ["clasificacion", "Clasificación (pública, interna, reservada)", "Interna; estadísticas agregadas públicas"],
        ["frecuencia", "Frecuencia de actualización", "Diaria"],
        ["conservacion", "Plazo de conservación", "Según normas de archivo del expediente"],
        ["usuarios", "Usuarios principales", "Evaluadores, fiscalizadores, Gerencia, DIPRES"],
        ["problemas", "Problemas conocidos", "Coordenadas en huso distinto; estados no estandarizados"],
        ["acciones", "Mis 3 acciones para los próximos 90 días", "1) Nombrar dueño por escrito 2) Diccionario de datos 3) Medir duplicados"]
      ];
      cont.innerHTML = campos.map(function (c) {
        var tag = c[0] === "acciones" || c[0] === "problemas" ? "textarea" : "input";
        return '<p><label for="f-' + c[0] + '">' + esc(c[1]) + "</label><br>" +
          (tag === "textarea"
            ? '<textarea id="f-' + c[0] + '" data-k="' + c[0] + '" placeholder="Ej.: ' + esc(c[2]) + '">' + esc(estado.ficha[c[0]] || "") + "</textarea>"
            : '<input type="text" style="width:100%" id="f-' + c[0] + '" data-k="' + c[0] + '" placeholder="Ej.: ' + esc(c[2]) + '" value="' + esc(estado.ficha[c[0]] || "") + '">') + "</p>";
      }).join("") + '<div class="btn-fila"><button class="btn" type="button" id="btnFicha">⬇ Descargar mi ficha</button></div><div class="retro"></div>';
      cont.querySelectorAll("[data-k]").forEach(function (inp) {
        inp.addEventListener("input", function () { estado.ficha[inp.dataset.k] = inp.value; guardar(); });
      });
      cont.querySelector("#btnFicha").addEventListener("click", function () {
        var vacios = campos.filter(function (c) { return !(estado.ficha[c[0]] || "").trim(); }).length;
        var txt = "FICHA DE ACTIVO DE DATOS\nCurso: " + C.titulo + "\nFecha: " + new Date().toLocaleDateString("es-CL") + "\n\n" +
          campos.map(function (c) { return c[1].toUpperCase() + ":\n" + (estado.ficha[c[0]] || "(sin completar)") + "\n"; }).join("\n");
        var blob = new Blob([txt], { type: "text/plain;charset=utf-8" });
        var a = el("a", { href: URL.createObjectURL(blob), download: "ficha-activo-de-datos.txt" });
        document.body.appendChild(a); a.click(); a.remove();
        retro(cont.querySelector(".retro"), vacios ? "info" : "ok", vacios ? "Ficha descargada. Quedan " + vacios + " campo(s) sin completar." : "¡Ficha completa descargada! Compártala con su jefatura.");
      });
    }
  };

  /* ---------------- Arranque ---------------- */
  actualizarProgreso();
  navegar();
})();
