let nomeusuario = (prompt("Qual seu nome?"))
let pergunta = (prompt('Quer começar ' + nomeusuario + '?' + '\n'  + ' 1 - para Sim ' + '\n' + '2 - para Não'))
document.getElementById('tabela').style.visibility = 'block';

if (pergunta == '1'){
    
    window.alert('Vamos começar!');
    let prompt1 = (prompt('Quanto é 2 + 2? ' + '\n' + 'Responda: ' + '\n' + '1 para "4"' + '\n' + '2 para "6" ou' + '\n' + '3 para "7" '));
    let prompt2 = (prompt('Quanto é 4 + 2? ' + '\n' + 'Responda: ' + '\n' + '1 para "4"' + '\n' + '2 para "6" ou' + '\n' + '3 para "7" '));
    let prompt3 = (prompt('Quanto é 3 + 4? ' + '\n' + 'Responda: ' + '\n' + '1 para "4"' + '\n' + '2 para "6" ou' + '\n' + '3 para "7" '));

    document.getElementById('resultado').textContent = 'SEU RESULTADO ' + nomeusuario ;
    document.getElementById('tabela').style.visibility = 'hiden';

    function changeColorRed(td){
        td.style.backgroundColor = "#c516168a";
    };
    function changeColorGreen(td){
        td.style.backgroundColor = "#3fd43f9b";
    };
    
     if (prompt1 == 1){
        document.getElementById('resul1').innerHTML = 'Certa';
        changeColorGreen(resul1)
     } else {
        document.getElementById('resul1').innerHTML = 'Errada';
        changeColorRed(resul1)
     }
     if (prompt2 == 2){
        document.getElementById('resul2').innerHTML = 'Certa';
        changeColorGreen(resul2)
      } else {
        document.getElementById('resul2').innerHTML = 'Errada';
        changeColorRed(resul2)
      }
      if (prompt3 == 3){
        document.getElementById('resul3').innerHTML = 'Certa';
        changeColorGreen(resul3)
      } else {
        document.getElementById('resul3').innerHTML = 'Errada';
        changeColorRed(resul3)
      }
    } else {
    window.alert('Muito obrigada!') 
}
