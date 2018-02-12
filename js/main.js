$(document).ready(function(){
	var body = $("body"),
      universe = $("#universe"),
      solarsys = $("#solar-system");

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
    e.preventDefault();
  });

  // $(".set-view").click(function() { body.toggleClass("view-3D view-2D"); });
  $(".set-zoom").click(function() { body.toggleClass("zoom-large zoom-close"); });
  $(".set-speed").click(function() { setView("scale-stretched set-speed"); });
  $(".set-size").click(function() { setView("scale-s set-size"); });
  $(".set-distance").click(function() { setView("scale-d set-distance"); });

  init();

	$("#earth").click(function(){
		console.log("Tierra");
	});

	$(".mute").click(function(){
		var bool = $("audio").prop("muted");
    $("audio").prop("muted", !bool);
    if (bool == false) {
      $(".icono-mute").removeClass("zmdi-volume-up").addClass("zmdi-volume-off")
    }else{
      $(".icono-mute").removeClass("zmdi-volume-off").addClass("zmdi-volume-up")
    }
	});

  $(".cerrar").click(function(event){
    event.preventDefault();
    $("#info-planeta").animate({opacity: 0}, {duration:1000, complete:function(){
      this.css("visibility", "hidden");
    }});
  })


  var datos = [{
  	"planeta":"Tierra",
  	"Tamaño":"120km",
  	"Descripción":"Lorem"
  },
  {
  	"planeta":"Tierra",
  	"Tamaño":"120km",
  	"Descripción":"Lorem"
  },
  {
  	"planeta":"Tierra",
  	"Tamaño":"120km",
  	"Descripción":"Lorem"
  },
  {
  	"planeta":"Tierra",
  	"Tamaño":"120km",
  	"Descripción":"Lorem"
  },
  {
  	"planeta":"Tierra",
  	"Tamaño":"120km",
  	"Descripción":"Lorem"
  },
  {
  	"planeta":"Tierra",
  	"Tamaño":"120km",
  	"Descripción":"Lorem"
  },
  {
  	"planeta":"Tierra",
  	"Tamaño":"120km",
  	"Descripción":"Lorem"
  },
  {
  	"planeta":"Tierra",
  	"Tamaño":"120km",
  	"Descripción":"Lorem"
  },
  {
  	"planeta":"Tierra",
  	"Tamaño":"120km",
  	"Descripción":"Lorem"
  },]

  console.log(datos);

});