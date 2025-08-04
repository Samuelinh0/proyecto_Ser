// Preguntas del quiz
const questions = [
    {
      question: "¿Qué puedes hacer si no quieres que te hagan un procedimiento médico?",
      options: [
        "Llorar muy duro.",
        "Decir 'sí' aunque no quieras.",
        "Decir 'no' y dejarlo por escrito.",
        "Irte a la casa sin avisar."
      ],
      correctIndex: 2,
      explanation: "Aceptar o rechazar procedimientos dejando constancia escrita."
    },
    {
      question: "¿Cómo deben tratarte los doctores y enfermeros?",
      options: [
        "Gritándote cuando te portas mal.",
        "Ignorándote cuando hablas.",
        "Con amabilidad, respeto y cariño.",
        "Como si fueras invisible."
      ],
      correctIndex: 2,
      explanation: "Recibir una atención humanizada, oportuna continua y con calidad."
    },
    {
      question: "¿Tienes derecho a saber qué medicina te van a dar?",
      options: [
        "Solo si es dulce.",
        "No, eso es secreto.",
        "Sí, y también cómo debes tomarla.",
        "Solo si la medicina es nueva."
      ],
      correctIndex: 2,
      explanation: "Recibir información clara, completa, oportuna y veraz sobre su estado de salud, tratamiento y riesgos."
    },
    {
      question: "¿Qué debes hacer si ensucias algo en el hospital?",
      options: [
        "Decirle a alguien o limpiarlo.",
        "Culpar a otro niño.",
        "Reírte y correr.",
        "Hacerlo otra vez para que no se note."
      ],
      correctIndex: 0,
      explanation: "Conservar el buen orden, aseo y  mobiliario de la institución."
    },
    {
      question: "¿Qué debes contarle al doctor o enfermera cuando te atienden?",
      options: [
        "Que viste una película chévere.",
        "Cómo te sientes y qué te duele.",
        "Solo tu nombre y ya.",
        "Una historia inventada para divertirte."
      ],
      correctIndex: 1,
      explanation: "Suministrar información veraz, clara y completa sobre su estado de salud."
    }
  ];
  
  // Variables
  let currentQuestion = 0;
  let score = 0;
  
  // Elementos HTML
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const gameScoreEl = document.getElementById("gameScore");
  const progressBarEl = document.getElementById("progressBar");
  const currentQEl = document.getElementById("currentQ");
  const totalQEl = document.getElementById("totalQ");
  const questionNumberEl = document.getElementById("questionNumber");
  const resultContainer = document.getElementById("resultContainer");
  const resultTitle = document.getElementById("resultTitle");
  const resultMessage = document.getElementById("resultMessage");
  const learningContent = document.getElementById("learningContent");
  
  // Cargar la primera pregunta
  window.addEventListener("DOMContentLoaded", () => {
    totalQEl.textContent = questions.length;
    loadQuestion();
  });
  
  function loadQuestion() {
    const q = questions[currentQuestion];
  
    // Actualizar UI
    questionEl.textContent = q.question;
    questionNumberEl.textContent = currentQuestion + 1;
    currentQEl.textContent = currentQuestion + 1;
    optionsEl.innerHTML = "";
    resultContainer.style.display = "none";
  
    q.options.forEach((option, index) => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.className = "btn option";
      btn.onclick = () => checkAnswer(index);
      optionsEl.appendChild(btn);
    });
  }
  
  function checkAnswer(selectedIndex) {
    const q = questions[currentQuestion];
    const isCorrect = selectedIndex === q.correctIndex;
  
    // Actualizar puntaje y progreso
    if (isCorrect) {
      score += 10;
      resultTitle.textContent = "¡Correcto! 🎉";
      resultTitle.style.color = "green";
    } else {
      resultTitle.textContent = "¡Incorrecto! ❌";
      resultTitle.style.color = "red";
    }
  
    gameScoreEl.textContent = score;
    progressBarEl.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
    resultMessage.textContent = `La respuesta correcta es: ${q.options[q.correctIndex]}`;
    learningContent.textContent = q.explanation;
    resultContainer.style.display = "block";
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showFinalResults();
    }
  }
  
  function showFinalResults() {
    questionEl.textContent = "¡Has terminado el juego!";
    optionsEl.innerHTML = "";
    resultTitle.textContent = `🎉 Puntaje final: ${score} puntos`;
    resultMessage.textContent = "¡Gracias por jugar!";
    learningContent.textContent = "";
    document.querySelector("button.btn.success").style.display = "none";
  }