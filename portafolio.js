var trabajos = [{

    figure: "media/mapochito.png",
    alt: "Descripción de la imagen",
    title: "Dakobujos",
    about: "Cuenta de ilustraciones, caricaturas y proyectos",
    autor: "Luciano Caprile",
    url: "https://www.instagram.com/dakobujos/"


}, {
      figure: "media/avstract.png",
      alt: "Descripción de la imagen",
      title: "Avstrakt",
      about: "Ilustraciones psicodélicas y abstractas",
      autor: "Tomás Salvador",
      url: "https://www.instagram.com/avstrak.t/"
}, {
    figure: "media/byfranto.jpg",
    alt: "Descripción de la imagen",
    title: "By Franto",
    about: "Recopilación de ilustraciones",
    autor: "Francisca Torres",
    url: "https://www.instagram.com/byfranto/"
}, {
    figure: "media/1d.jpg",
    alt: "Descripción de la imagen",
    title: "1Día tablas",
    about: "Propuesta visual aplicada a lijas de tablas de skate y bolso de transporte. TIDE 2018",
    autor: "Tomás Salvador",
    url: "https://www.youtube.com/watch?v=GQ-zlgB14oo&feature=youtu.be"
}, {
    figure: "media/TANIN.png",
    alt: "Descripción de la imagen",
    title: "Tanin",
    about: "Producto alimenticio hecho 100% de mate. Creado para la Feria Gastronómica de Taller: Producto, 2018.",
    autor: "Francisca Torres y Luciano Caprile",
}, {
    figure: "media/esplat.png",
    alt: "Descripción de la imagen",
    title: "Esplat",
    about: "Prensador de alimentos para Ilko, muele paltas, papas y otras verduras hervidas separándolas de su cáscara. TIDE, 2019. ",
    autor: "Francisca Torres y Luciano Caprile",
    url:"https://www.youtube.com/watch?v=MBFTqAlNHzg&feature=youtu.be"
}, {
    figure: "media/wako.png",
    alt: "Descripción de la imagen",
    title: "Wako",
    about: "Wako es un lavatorio/mudador para bebés. Es portátil y plegable, pensado para un contexto de emergencia. Taller: Producto 2018.",
    autor: "Francisca Torres y Luciano Caprile",
    url:"https://www.youtube.com/watch?v=WoQnWIaZv_s&feature=youtu.be"
}, {
    figure: "media/eclipse.png",
    alt: "Descripción de la imagen",
    title: "Eclipse",
    about: "Luminaria experimental creada a partir de madera noble y clavos. Examen Iluminación. ",
    autor: "Tomás Salvador",
    url: "https://www.instagram.com/avstrak.t/"
}, {
    figure: "media/mantis.png",
    alt: "Descripción de la imagen",
    title: "Mantis",
    about: "Mantis es un equipo desarrollado para jugar Coreball, un nuevo deporte el cual ayuda a fortalecer la zona de los estabilizadores del cuerpo. Taller: Producto, 2018.",
    autor: "Francisca Torres",
    url:"https://youtu.be/wnWEpwL90YI"
}, {
    figure: "media/moviles.png",
    alt: "Descripción de la imagen",
    title: "Móviles",
    about: "Móviles, la nueva línea de de Magia y Cartón presenta Rola: el auto. Este juguete busca fomentar la creatividad y fortalecer el lazo con los padres. TIDE, 2019",
    autor: "Francisca Torres y Luciano Caprile",
    url:"https://www.youtube.com/watch?v=9gdR-9AKXEQ&feature=youtu.be"






}];
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '" alt="' + trabajos[i].alt + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    var cuatro = '<div class="vermas"> <p><a  href= "' + trabajos[i].url +'" >Ver mas</a><p></div>';
    var cinco = '<div class="autor"><p>' + trabajos[i].autor + '</p></div>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + cinco + cuatro +'</div>')

});
