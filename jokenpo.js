/*

* JS - AULA 12-
@UTHOR IVAN RODRIGUES
*
*

*/

function jogar(){

      //alert("definida");
     
      //estrutura de validaçao de seleçao pra checar se alguma opçao foi selecionada

      if (
           document.getElementById("pedra").checked   == false &&
           document.getElementById("papel").checked   == false &&
           document.getElementById("tesoura").checked == false 
        
         ) {
           alert("Selecione uma das Opções");


           } else {

          // alert("selecionada");

          // logica principal do jogo
          // A logica principal do jogo consiste em comparar o numero
          // que o jogador escolheu com o numero sorteado pelo computador
          // para definir quem ganhou ou perdeu ou se a partida empatou
          // sera associado o numero para o pc sendo 
          //0 pedra
          //1 papel
          //2 Tesoura

          //logica do empate
          //  jogador pedra   - PC 0
          //  jogador papel   - PC 1
          //  jogador Tesoura - PC 2

          //logica vitoria do computador
          //  jogador pedra   - PC 1
          //  jogador papel   - PC 2
          //  jogador Tesoura - PC 0

          //logica da vitoria do jogador
          //  jogador pedra   - PC 2
          //  jogador papel   - PC 0
          //  jogador Tesoura - PC 1

          var sorteio = Math.floor(Math.random() * 3);

          switch(sorteio){
              case 0:
                 document.getElementById("pc").src="pcpedra.png";
              case 1:
                  document.getElementById("pc").src="pcpapel.png";
              case 2:
                   document.getElementById("pc").src="pctesoura.png";
              break;
                         }

           //logica do empate
          //  jogador pedra   - PC 0
          //  jogador papel   - PC 1
          //  jogador Tesoura - PC 2       
           
           if(
              (document.getElementById("pedra").checked   ==   true && sorteio == 0)
                                                  ||
              (document.getElementById("papel").checked   ==   true && sorteio == 1)
                                                  ||
              (document.getElementById("tesoura").checked ==   true && sorteio == 2)
               
             ){
           	  //resultado 
           	  document.getElementById("placar").innerHTML = "empate";


             }

             else if(
             //logica da vitoria do jogador
            //  jogador pedra   - PC 2
           //  jogador papel   - PC 0
          //  jogador Tesoura - PC 1

              




              (document.getElementById("pedra").checked   ==   true && sorteio == 2)
                                                  ||
              (document.getElementById("papel").checked   ==   true && sorteio == 0)
                                                  ||
              (document.getElementById("tesoura").checked ==   true && sorteio == 1)

               
             ){
           	  //resultado 
           	  document.getElementById("placar").innerHTML = "jogador venceu";


            
             }else{


             	 document.getElementById("placar").innerHTML = "PC venceu";
             }






             	









              













           }



}










function resetar(){

	// alert("definida");
     
    document.getElementById("pc").src="pc.png";
    document.getElementById("placar").innerHTML="";

}
