var trabajos = [{
    figure: "media/esplat.jpg",
    alt: "Descripción de la imagen",
    title: "Esplat",
    about: "Esplat es un Bowl que muele alimentos tales como paltas, papas o zapallos separándolos de su cáscara en pocos pasos. "
}, {
    figure: "media/trabajo-02-app.jpg",
    alt: "Descripción de la imagen",
    title: "Tanin",
    about: "Tanin es una pequeña barra 100% de mate deshidratado y luego prensado, por lo que posee fuertes cualidades energizantes"
}, {
    figure: "media/trabajo-03-homy.jpg",
    alt: "Descripción de la imagen",
    title: "Título de tercer trabajo",
    about: "Texto simulado de descripción de tercer trabajo"
}, {
    figure: "media/trabajo-04-editorial.jpg",
    alt: "Descripción de la imagen",
    title: "Título de cuarto trabajo",
    about: "Texto simulado de descripción de cuarto trabajo"
}, {
    figure: "media/trabajo-05-artesania.jpg",
    alt: "Descripción de la imagen",
    title: "Título de quinto trabajo",
    about: "Texto simulado de descripción de quinto trabajo"
}, {
    figure: "media/trabajo-06-textil.jpg",
    alt: "Descripción de la imagen",
    title: "Título de sexto trabajo",
    about: "Texto simulado de descripción de sexto trabajo"
}, {
    figure: "media/trabajo-07-materiales.jpg",
    alt: "Descripción de la imagen",
    title: "Título de séptimo trabajo",
    about: "Texto simulado de descripción de séptimo trabajo"
}];
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '" alt="' + trabajos[i].alt + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
