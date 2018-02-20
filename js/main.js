$(document).ready(function() {
    var body = $("body"),
        universe = $("#universe"),
        solarsys = $("#solar-system");
    var datos = [{
            "planeta": "Sol",
            "tam": "120km",
            "descripcion": "Lorem"
        },
        {
            "planeta": "Mercurio",
            "tam": "120km",
            "descripcion": "Mercurio es el planeta del sistema solar más próximo al Sol y el más pequeño. Forma parte de los denominados planetas interiores o terrestres y carece de satélites naturales al igual que Venus. Se conocía muy poco sobre su superficie hasta que fue enviada la sonda planetaria Mariner 10 y se hicieron observaciones con radar y radiotelescopios."
        },
        {
            "planeta": "Venus",
            "tam": "120km",
            "descripcion": "Lorem"
        },
        {
            "planeta": "Tierra",
            "tam": "120km",
            "descripcion": "Lorem"
        },
        {
            "planeta": "Marte",
            "tam": "120km",
            "descripcion": "Lorem"
        },
        {
            "planeta": "Júpiter",
            "tam": "120km",
            "descripcion": "Lorem"
        },
        {
            "planeta": "Saturno",
            "tam": "120km",
            "descripcion": "Lorem"
        },
        {
            "planeta": "Urano",
            "tam": "120km",
            "descripcion": "Lorem"
        },
        {
            "planeta": "Neptuno",
            "tam": "120km",
            "descripcion": "Lorem"
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

    console.log(datos);

});