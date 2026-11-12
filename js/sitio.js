(function () {
  var S = SITIO;
  var msj = "Hola. Vi el sitio de " + S.nombre + " y quiero hacer una consulta. Mi empresa es: ";
  var wa = "https://wa.me/" + S.whatsappNumero + "?text=" + encodeURIComponent(msj);
  var pagina = document.body.getAttribute("data-pagina");

  function enlace(href, texto, id) {
    return '<a href="' + href + '"' + (id === pagina ? ' aria-current="page"' : "") + ">" + texto + "</a>";
  }
  var marca = S.logo
    ? '<img src="' + S.logo + '" alt="' + S.nombre + '">'
    : "<span>" + S.nombre + "</span>";

  document.getElementById("encabezado").innerHTML =
    '<div class="ancho barra"><a class="marca" href="index.html">' + marca + "</a>" +
    '<nav aria-label="Principal">' + enlace("index.html", "Inicio", "inicio") +
    enlace("chequeo.html", "Chequeo", "chequeo") + enlace("reunion.html", "Reunión", "reunion") + "</nav></div>";

  document.getElementById("pie").innerHTML =
    '<div class="ancho pie-fila"><span><strong>' + S.nombre + "</strong> · Mejora económica y operativa</span>" +
    '<span><a href="mailto:' + S.correo + '">' + S.correo + '</a> · <a href="privacidad.html">Privacidad</a></span></div>';

  document.title = document.title.replace("[Nombre]", S.nombre);

  document.querySelectorAll("[data-c]").forEach(function (el) { el.textContent = S[el.getAttribute("data-c")]; });
  document.querySelectorAll("[data-wa]").forEach(function (el) { el.href = wa; });
  document.querySelectorAll("[data-correo]").forEach(function (el) { el.href = "mailto:" + S.correo; el.textContent = S.correo; });

  var socios = document.getElementById("socios");
  if (socios) {
    socios.innerHTML = S.socios.map(function (p) {
      var foto = p.foto ? '<img src="' + p.foto + '" alt="' + p.nombre + '">' : '<div class="sin-foto" aria-hidden="true"></div>';
      return '<article class="socio">' + foto + "<div><h3>" + p.nombre + '</h3><p class="rol">' + p.titulo + "</p><p>" + p.trayectoria + "</p></div></article>";
    }).join("");
  }

  function insertar(id, url, parametro, titulo) {
    var caja = document.getElementById(id);
    if (!caja || !url) return;
    if (url.indexOf(parametro) === -1) url += (url.indexOf("?") === -1 ? "?" : "&") + parametro;
    caja.innerHTML = '<iframe src="' + url + '" title="' + titulo + '" loading="lazy"></iframe>';
    caja.classList.add("con-marco");
  }
  insertar("formulario", S.formularioUrl, "embedded=true", "Chequeo de pérdidas");
  insertar("agenda", S.agendaUrl, "gv=true", "Agenda de reuniones");
})();
