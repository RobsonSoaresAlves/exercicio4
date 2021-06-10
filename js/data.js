function Conferir(){

    var dia=parseInt(document.getElementById("dia").value);

    var mes=parseInt(document.getElementById("mes").value);

    var ano=parseInt(document.getElementById("ano").value);

    var t1 = document.getElementById("t1");

    var t2 = document.getElementById("t2");

    var t3 = document.getElementById("t3");


   if(dia >= 1 && dia<=31){
       t1.innerHTML ="ok";
   }
   else {
    t1.innerHTML ="digite valor entre 1 e 31";
}
  


   if(mes >=1  && mes<=12){
       t2.innerHTML = "ok";
   }
   else{
       t2.innerHTML = "digite o valor entre 1 e 12";
   }


   if(ano <=2021){
       t3.innerHTML = "ok";
    }

    else{
        t3.innerHTML = "digite o valor até 2021";
    }
    

   
   }
