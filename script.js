// Model: dados dos exercícios
const exercicios = {
  peito: [
    "Supino reto com barra",
    "Supino inclinado com halteres",
    "Crossover no cabo",
    "Flexão de braço"
  ],
  costas: [
    "Puxada na polia",
    "Remada baixa",
    "Remada unilateral",
    "Pull-over com halter"
  ],
  pernas: [
    "Agachamento livre",
    "Leg press",
    "Cadeira extensora",
    "Mesa flexora",
    "Panturrilha em pé"
  ],
  ombros: [
    "Desenvolvimento com halteres",
    "Elevação lateral",
    "Elevação frontal",
    "Remada alta"
  ],
  biceps: [
    "Rosca direta",
    "Rosca alternada",
    "Rosca martelo"
  ],
  triceps: [
    "Tríceps pulley",
    "Tríceps banco",
    "Tríceps testa"
  ],
  abdomen: [
    "Abdominal infra",
    "Elevação de pernas",
    "Prancha isométrica"
  ]
};

// Presenter: manipula a view com base no model
const grupoMuscularSelect = document.getElementById('grupoMuscular');
const listaExercicios = document.getElementById('listaExercicios');

grupoMuscularSelect.addEventListener('change', () => {
  const grupo = grupoMuscularSelect.value;
  listaExercicios.innerHTML = '';

  if (exercicios[grupo]) {
    exercicios[grupo].forEach(exercicio => {
      const li = document.createElement('li');
      li.textContent = exercicio;
      listaExercicios.appendChild(li);
    });
  }
});
