// botton que scroll to top
let toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
// botton modo dark
let dataStorage = window.localStorage;
let bottonTemaDark = document.getElementById("themeDark");
bottonTemaDark.addEventListener("click", function () {
  let dataStorage = window.localStorage;
  let estadoTema = dataStorage.getItem("theme");
  console.log(estadoTema);
  if (estadoTema === "themeDarkON") {
    dataStorage.removeItem("theme");
    // recargamos la pagina y se reliza el cambio de tema
    window.location.reload();
  } else {
    dataStorage.setItem("theme", $("#themeDark").val());
    // recargamos la pagina y se reliza el cambio de tema
    window.location.reload();
  }
});
// funcion que activa el modo dark 
function themeON() {
  var activeTema = dataStorage.getItem("theme");
  if (activeTema === "themeDarkON") {
    console.log("tema Dark ON");
    bottonTemaDark.checked = true;
    $("body").addClass("dark");
    // Eliminiamos la clase predeterminda de la barra de navegacion
    $("nav").removeClass("color-ins");
    // Eliminiamos la clase predeterminda de la section compras online
    $("#comprasOnline").removeClass("color-ins");
    // Eliminiamos la clase predeterminda del footer
    $("#footer").removeClass("color-ins");
    // ageregamos el tema dark al los item de los  dropdown
    $(".item").addClass("dark");
  }
}
// Funcion que nos permite desactivar el modo dark
function themeOF() {
  var activeTema = dataStorage.getItem("theme");
  if (activeTema == undefined) {
    console.log("tema Dark Of");
    $("body").removeClass("dark");
    // Eliminiamos la clase predeterminda de la barra de navegacion
    $("nav").addClass("color-ins");
    // Eliminiamos la clase predeterminda de la section compras online
    $("#comprasOnline").addClass("color-ins");
    // Eliminiamos la clase predeterminda del footer
    $("#footer").addClass("color-ins");
    $(".item").removeClass("dark");
    
  }
}
// las funciones se matiene activas segun el comportamiento del local store se ejecutan
themeOF();
themeON();

// $( ".list" ).wrapAll( "<div class='new' />");

/**
 * Funcion que obtiene el ancho del viewport
 */
function anchoViewPort() {
  dataStorage.removeItem("vwp")
  let longitudHorizontal = document.documentElement.clientWidth;
  dataStorage.setItem("vwp",longitudHorizontal);
};


var activeElementosFooter = dataStorage.getItem("vwp");
// 
// if (activeElementosFooter => 576) {
// $( ".list" ).wrapAll( "<div class='new' />");
// }