/* TODO: Adición de funcionalidades para el uso de MaterializeCSS */
/**
 * Funcionalidad de menú hamburguesa.
 */
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav')
    var instances = M.Sidenav.init(elems, {})
})
/**
 * Funcionalidad de imágenes
**/
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.materialboxed')
    var instances = M.Materialbox.init(elems, {})
})

/**
 * Funcionalidad de autocompletado en formularios.
**/
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.autocomplete')
    var instances = M.Autocomplete.init(elems, {})
})