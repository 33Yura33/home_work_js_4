var countclick=0;

	function funcChislo(){

		var chislo = $("#chislo").val();

		if(chislo.trim() == "")
			return;

		chislo = parseInt(chislo);
		if(!chislo)
			return false;


		alert("Число: " + zadanie10(chislo));
	}

	function funcAge(){
		var age = $("#age").val();

		if(age.trim() == "")
			return;

		age = parseInt(age);
		if(!age)
			return false;

		Vozrast(age);

	}
	function tagBorder() {
		var tag = $("#tag").val();
		if(tag.trim() == "")
			return;
		PodcherknutTag(tag);

	}
	function SetPRed() { //1
		$("p").css('background-color', 'red');
	}
	function SetShadow() { //2
		$("img").css('box-shadow', '10px 10px 5px #888');
	}
	function NumberP() {//3
		$('p').each(function(i,elem) {
			var info=$(elem).text();
			$(elem).text(i+") "+info);
		});
	}
	  function ClickCount(){ //4
	  		countclick++;
	  		$("#countclick").text("Колицество кликов = "+countclick);
	  }
	  function stepen(chislo,stepen){//5
	  	alert(Math.pow(chislo,stepen));
	  }
	  function CountStepen(){//5
	  		stepen($("#chislodliastepeni").val(),$("#stepen").val());
	  }
	  function PodcherknutTag(tag){ //6
	  	$(tag).css('text-decoration', 'underline');
	  }
	  function Vozrast(age){	//8,7
	  	if(age==null)
	  	{
	  		alert("Введите возраст");
	  	}
	  	else
	  	{
	  		if(age>16)
	  			alert("Добро пожаловать");
	  		else
	  			alert("Вы еще молоды");
	  	}
	
	  }
	  var array = new Array(1,2,3,4,4);
	  function ArrayLength(arr){	//9
	  		if(arr!=null)
	  			return arr.length;
	  		else
	  			return "Аргумент не задан";
	  }
	  function zadanie10(chislo)//10
	  {
	  	if(chislo>10)
	  		return Math.pow(chislo,2);
	  	if(chislo<7)
	  		return "Число меньше 7";
	  	if(chislo==8)
	  		return 7;
	  	if(chislo==9)
	  		return 8;
	  }

	  ////////////11
	  var zagadchislo=Math.floor(Math.random() * 11); 
	  var countpopytok=0;
 	function OtgadaiChislo(){
 		if($("#enterchislo").val()!=zagadchislo)
 		{
 			countpopytok++;
 			if(zagadchislo>$("#enterchislo").val())
 				alert("Загаданое число больше введеного");
 			if(zagadchislo<$("#enterchislo").val())
 				alert("Загаданое число меньше введеного");
 			$("#kolpopytok").text("Количество попыток = "+countpopytok);
 		}
 		else if($("#enterchislo").val()==zagadchislo)
 		{
 			alert("Ура ви отгадали");
 			zagadchislo=Math.floor(Math.random() * 11); 
 			countpopytok=0;
 			$("#kolpopytok").text("Количество попыток = "+countpopytok);
 		}
 		if(countpopytok==3)
 		{
 			alert("Вы проиграли");
 			zagadchislo=Math.floor(Math.random() * 11);
 			countpopytok=0;
 			$("#kolpopytok").text("Количество попыток = "+countpopytok);
 		}
 	}
	 

		NumberP(); 

		