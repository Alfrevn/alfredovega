/* ============================================================
   DATOS EDITABLES DEL SITIO
   Cambie solo el texto que está entre comillas.
   No borre las comillas, las comas ni los nombres de la izquierda.
   ============================================================ */
const SITIO = {
  // Nombre de la consultora
  nombre: "[Nombre]",

  // Logo: suba el archivo a la carpeta img y escriba aquí su ruta, por ejemplo "img/logo.png".
  // Si queda vacío, el encabezado muestra el nombre.
  logo: "",

  // Contacto
  correo: "contacto@ejemplo.com",
  whatsappNumero: "5491100000000",          // solo números: país + número, sin signos ni espacios
  whatsappVisible: "+54 9 11 0000-0000",    // como se muestra en el sitio

  // Valores que aparecen en los textos
  precioDiagnostico: "$ 1.500.000",
  duracionChequeo: "10 minutos",
  equipoMinimo: "menos de 5 personas",

  // Quiénes somos. foto: ruta de la imagen, por ejemplo "img/socio1.jpg". Vacío = sin foto.
  socios: [
    { nombre: "[Nombre y apellido]", titulo: "Ingeniero industrial", trayectoria: "[Trayectoria en dos o tres líneas.]", foto: "" },
    { nombre: "[Nombre y apellido]", titulo: "Licenciado en administración", trayectoria: "[Trayectoria en dos o tres líneas.]", foto: "" }
  ],

  // Chequeo: enlace del formulario de Google (el que termina en /viewform)
  formularioUrl: "",

  // Reunión: enlace de la página de reservas del Calendario de Google
  agendaUrl: "",

  // Página Privacidad
  responsable: "[Nombre y apellido del responsable]",
  domicilio: "[Domicilio]",
  plazoDatos: "12 meses"
};
