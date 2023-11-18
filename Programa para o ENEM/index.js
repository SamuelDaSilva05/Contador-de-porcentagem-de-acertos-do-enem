function calcularPercentualDeAcertos() {
  let acertosInput = document.getElementById('qc'); // Alterado para getElementById
  let totalQuestoes = 90; // Você pode ajustar o total de questões conforme necessário

  let acertos = parseFloat(acertosInput.value);
    
  // Verifica se os valores fornecidos são números positivos
  if (acertos < 0 || totalQuestoes < 0) {
    alert("Valores inválidos. Certifique-se de que ambos os valores sejam positivos.");
    return;
  }

  if (acertos > totalQuestoes) {
    alert("Valores inválidos. Certifique-se de que ambos os valores sejam positivos.");
    return;
  }

  // Calcula o percentual de acertos
  let percentual = (acertos / totalQuestoes) * 100;

  alert(`O percentual de acertos é de ${percentual.toFixed(2)}%`);

  if (percentual >= 50) {
    alert(`Parabéns! Você acertou ${percentual.toFixed(2)}% das questões. Você foi muito bem!`);
  } else {
    alert(`Seu percentual de acertos é de ${percentual.toFixed(2)}%. Estude mais para melhorar.`);
  }


}
