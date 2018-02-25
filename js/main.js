$(document).ready(function() {
    var body = $("body"),
        universe = $("#universe"),
        solarsys = $("#solar-system"),
        video = $("video");
    var datos = [{
            "planeta": "Sol",
            "tam": "120km",
            "descripcion": "El Sol es una estrella de tipo-G de la secuencia principal y clase de luminosidad V que se encuentra en el centro del sistema solar y constituye la mayor fuente de radiación electromagnética de este sistema planetario."
        },
        {
            "planeta": "Mercurio",
            "tam": "120km",
            "descripcion": "Mercurio es el planeta del sistema solar más próximo al Sol y el más pequeño. Forma parte de los denominados planetas interiores o terrestres y carece de satélites naturales al igual que Venus."
        },
        {
            "planeta": "Venus",
            "tam": "120km",
            "descripcion": "Venus es el segundo planeta del sistema solar en orden de distancia desde el Sol, el sexto en cuanto a tamaño, ordenados de mayor a menor. Al igual que Mercurio, carece de satélites naturales. Recibe su nombre en honor a Venus, la diosa romana del amor."
        },
        {
            "planeta": "Tierra",
            "tam": "120km",
            "descripcion": "La Tierra es un planeta del sistema solar que gira alrededor de su estrella —el Sol— en la tercera órbita más interna. Es el más denso y el quinto mayor de los ocho planetas del sistema solar. También es el mayor de los cuatro terrestres o rocosos."
        },
        {
            "planeta": "Marte",
            "tam": "120km",
            "descripcion": "Marte es el cuarto planeta en orden de distancia al Sol y el segundo más pequeño del sistema solar, después de Mercurio. Recibió su nombre en homenaje al dios de la guerra de la mitología romana, y es también conocido como el planeta rojo​ debido a la apariencia rojiza que le confiere el óxido de hierro predominante en su superficie."
        },
        {
            "planeta": "Júpiter",
            "tam": "120km",
            "descripcion": "Júpiter es el quinto planeta del sistema solar. Forma parte de los denominados planetas exteriores o gaseosos. Recibe su nombre del dios romano Júpiter (Zeus en la mitología griega).Se trata del planeta que ofrece un mayor brillo a lo largo del año dependiendo de su fase."
        },
        {
            "planeta": "Saturno",
            "tam": "120km",
            "descripcion": "Saturno es el sexto planeta del sistema solar, el segundo en tamaño y masa después de Júpiter y el único con un sistema de anillos visible desde nuestro planeta. Su nombre proviene del dios romano Saturno. Forma parte de los denominados planetas exteriores o gaseosos."
        },
        {
            "planeta": "Urano",
            "tam": "120km",
            "descripcion": "Urano es el séptimo planeta del sistema solar, el tercero de mayor tamaño, y el cuarto más masivo. Se llama así en honor de la divinidad griega del cielo Urano (del griego antiguo «Οὐρανός»), el padre de Crono (Saturno) y el abuelo de Zeus (Júpiter)."
        },
        {
            "planeta": "Neptuno",
            "tam": "120km",
            "descripcion": "Neptuno es el octavo planeta en distancia respecto al Sol y el más lejano del sistema solar. Forma parte de los denominados planetas exteriores o gigantes gaseosos, y es el primero que fue descubierto gracias a predicciones matemáticas."
        }
    ];
    $("#info-planeta").hide()

    var init = function() {
        body.removeClass('opening').delay(2000).queue(function() {
            $(this).removeClass('hide-UI').addClass("set-speed");
            $(this).dequeue();
        });
    };

    var setView = function(view) { universe.removeClass().addClass(view); };

    $("#toggle-data").click(function(e) {
        body.toggleClass("data-open data-close");
        e.preventDefault();
    });

    $("#toggle-controls").click(function(e) {
        body.toggleClass("controls-open controls-close");
        e.preventDefault();
    });

    $("#data a").click(function(e) {
        var ref = $(this).attr("class");
        solarsys.removeClass().addClass(ref);
        $(this).parent().find('a').removeClass('active');
        $(this).addClass('active');
        $("#info-planeta").show().animate({ opacity: 1 }, { duration: 1000 });
        var id = $(this).attr("id");
        id = id.substr(id.length - 1);
        $("#info-planeta #nombre").text("Nombre: " + datos[id]["planeta"]);
        $("#info-planeta #desc").text("Descripción: " + datos[id]["descripcion"]);
        e.preventDefault();
    });

    // $(".set-view").click(function() { body.toggleClass("view-3D view-2D"); });
    $(".set-zoom").click(function() { body.toggleClass("zoom-large zoom-close"); });
    $(".set-speed").click(function() { setView("scale-stretched set-speed"); });
    $(".set-size").click(function() { setView("scale-s set-size"); });
    $(".set-distance").click(function() { setView("scale-d set-distance"); });

    init();

    $("#earth").click(function() {
        console.log("Tierra");
    });

    $(".mute").click(function() {
        var bool = $("audio").prop("muted");
        $("audio").prop("muted", !bool);
        if (bool == false) {
            $(".icono-mute").removeClass("zmdi-volume-up").addClass("zmdi-volume-off")
        } else {
            $(".icono-mute").removeClass("zmdi-volume-off").addClass("zmdi-volume-up")
        }
    });

    $(".cerrar").click(function(event) {
        event.preventDefault();
        $(this).parent().animate({ opacity: 0 }, {
            duration: 1000,
            complete: function() {
                $(this).hide();
            }
        });
    });

    $("#cerrarVideo").click(function(event) {
        event.preventDefault();
        $("#inicio").animate({ opacity: 0 }, {
            duration: 1000,
            complete: function() {
                $("#inicio").hide();
                video.pause;
            }
        });
    });

    $('video').click(function() {
        this[this.paused ? 'play' : 'pause']();
    });
    console.log(datos);

});