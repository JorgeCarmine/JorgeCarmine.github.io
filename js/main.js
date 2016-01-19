$(document).ready(function(){
	crearImagenes();
	setTimeout(function(){
		$(".foto").attr("src", "img/bajo.jpg")
	}, 4000);

	img1 = {
		ruta: "",
		id: ""
	};

	var img2 = {
		ruta: "",
		id: ""
	};

	var push = 0,
		intentos,
		intentosFallidos = 0,
		intentosCorrectos = 0;

	$(".foto").click(function(){
		
	if ($(this).attr("class") == "NULL") {return null};

		var foto = $(this).attr("src").split("/");
		foto = foto[foto.length - 1];

		if(foto == "bajo.jpg"){
			if (push == 0){
				img1.ruta = $(this).attr("alt").split("/");
				img1.ruta = img1.ruta[img1.ruta.length - 1];
				img1.id = $(this).attr("id");
			}else{
				img2.ruta = $(this).attr("alt").split("/");
				img2.ruta = img2.ruta[img2.ruta.length - 1];
				img2.id = $(this).attr("id");
			}

			if (push == 1){
				setTimeout(function(){
					intentos++;
					$("#intentos").text(intentos);
					if (img1.ruta != img2.ruta) {
						$("#result").text("Incorrecto");
						$(".foto").attr("src", ("img/bajo.jpg"));
						intentosFallidos++;
						$("#intentosFallidos").text(intentosFallidos);
					}else{
						$("#result").text("Correcto");
						$("#"+img1.id).attr("src", "img/like.jpg");
						$("#"+img2.id).attr("src", "img/like.jpg");
						// Si ya estan bien se 
						$("#"+img1.id).attr("class", "NULL");
						$("#"+img2.id).attr("class", "NULL");
						intentosCorrectos++;
						$("#intentosCorrectos").text(intentosCorrectos);

						if (intentosCorrectos == 9) {
							var msg = "Felicidades Ganaste :D  !! \n¿Quieres reiniciar el juego?";
							var option = confirm(msg);
							if (option) {
								window.location.reload();
							}
						}
					}
					push = 0;
				},700);
			}
			ruta = $(this).attr("alt");
			$(this).attr("src", "img/" + ruta);
			push++;
		}else{
			$(this).attr("src", "img/bajo.jpg");
			push--;
		}
	});
});

function crearImagenes(){
	var rutas = [
		["bower.jpg", 0],
		["git.jpg", 0],
		["node.jpg", 0],
		["php.jpg", 0],
		["ruby.jpg", 0],
		["react.jpg", 0],
		["unity.jpg", 0],
		["angular.jpg",0],
		["django.jpg", 0]
	];
	for (var i = 1; i <= 18; i++) {
		var num = Math.floor(Math.random()*10%9);
		if(rutas[num][1] < 2){
			$("#foto"+i).attr("alt", rutas[num][0]);
			$("#foto"+i).attr("src", "img/" + rutas[num][0]);
			rutas[num][1]++;
		}else{
			i--;
		}
	}
}