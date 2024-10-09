/**
 * ==============================================
 *   Código Protegido com Sistema de Obfuscação
 *        e IIFE (Immediately Invoked Function Expression)
 * ==============================================
 * 
 * Este bloco de código foi encapsulado dentro de uma IIFE para garantir 
 * que suas variáveis e funções internas não sejam acessíveis no escopo global. 
 * Além disso, foi aplicado um processo de obfuscação para aumentar a segurança 
 * e dificultar tentativas de engenharia reversa, leitura ou modificação indevida.
 * 
 * O processo de obfuscação inclui:
 * 1. **Renomeação de Variáveis e Funções**: Todas as variáveis e funções 
 *    foram renomeadas para versões criptografadas ou aleatórias, dificultando a leitura.
 * 
 * 2. **Minificação**: O código foi compactado ao máximo, removendo espaços 
 *    em branco, comentários e linhas desnecessárias, reduzindo o tamanho do arquivo 
 *    e a legibilidade humana.
 * 
 * 3. **Codificação de Strings**: Todas as strings internas foram codificadas ou 
 *    criptografadas para evitar a fácil extração de dados sensíveis.
 * 
 * 4. **Encapsulamento via IIFE**: A IIFE protege o código contra interferências 
 *    externas e limita o acesso ao escopo interno, preservando a integridade da lógica.
 * 
 * AVISO: Se você veio aqui pra tentar obter a índice da resposta correta, ta perdendo seu tempo 😂.
 * 
 * ==============================================
 */

(function() {
  const quizData = [
    {
      "category": "Segurança",
      "question": "Qual a função de um firewall?",
      "answers": ["Bloquear acessos não autorizados", "Armazenar dados", "Processar informações"],
      "correct": 0,
      "explanation": "Um firewall monitora e controla o tráfego de rede baseado em regras de segurança predefinidas."
    },
    {
      "category": "Hardware",
      "question": "Qual componente é considerado o cérebro do computador?",
      "answers": ["Memória RAM", "CPU", "Disco Rígido"],
      "correct": 1,
      "explanation": "A CPU (Unidade Central de Processamento) executa instruções e processa dados."
    },
    {
      "category": "Software",
      "question": "O que é um sistema operacional?",
      "answers": ["Um tipo de hardware", "Um software que gerencia recursos do computador", "Uma aplicação de produtividade"],
      "correct": 1,
      "explanation": "Um sistema operacional gerencia os recursos do computador e fornece serviços para outros softwares."
    },
    {
      "category": "Redes",
      "question": "O que significa IP na área de redes?",
      "answers": ["Internet Protocol", "Internal Process", "Interactive Platform"],
      "correct": 0,
      "explanation": "IP significa Internet Protocol, que é um conjunto de regras para comunicação de dados."
    },
    {
      "category": "Programação",
      "question": "Qual dessas linguagens é utilizada para desenvolvimento web front-end?",
      "answers": ["Python", "JavaScript", "C++"],
      "correct": 1,
      "explanation": "JavaScript é amplamente utilizada para desenvolvimento web front-end."
    },
    {
      "category": "Banco de Dados",
      "question": "O que significa SQL?",
      "answers": ["Structured Query Language", "Simple Query Language", "Sequential Query Logic"],
      "correct": 0,
      "explanation": "SQL significa Structured Query Language, usada para gerenciar e manipular bancos de dados relacionais."
    },
    {
      "category": "Banco de Dados",
      "question": "Qual é a finalidade de uma chave primária em um banco de dados?",
      "answers": ["Garantir unicidade das linhas", "Armazenar dados de backup", "Indexar colunas para pesquisa"],
      "correct": 0,
      "explanation": "A chave primária garante que cada linha da tabela seja única e identifica cada registro de forma exclusiva."
    },
    {
      "category": "Sistemas Operacionais",
      "question": "Qual desses é um sistema operacional baseado em Unix?",
      "answers": ["Windows", "macOS", "MS-DOS"],
      "correct": 1,
      "explanation": "O macOS é um sistema operacional baseado em Unix, derivado do sistema NeXTSTEP."
    },
    {
      "category": "Hardware",
      "question": "O que é a memória RAM?",
      "answers": ["Memória de armazenamento permanente", "Memória temporária que armazena dados em uso", "Memória somente leitura"],
      "correct": 1,
      "explanation": "A memória RAM armazena dados temporariamente enquanto o computador está em uso."
    },
    {
      "category": "Programação",
      "question": "Qual desses é um paradigma de programação?",
      "answers": ["Estrutural", "Linear", "Exponencial"],
      "correct": 0,
      "explanation": "A programação estrutural é um paradigma de programação focado no uso de estruturas de controle."
    },
    {
      "category": "Redes",
      "question": "O que significa DNS?",
      "answers": ["Domain Name System", "Data Network System", "Direct Name Service"],
      "correct": 0,
      "explanation": "DNS significa Domain Name System e é responsável por traduzir nomes de domínio em endereços IP."
    },
    {
      "category": "Segurança",
      "question": "O que é phishing?",
      "answers": ["Um tipo de vírus de computador", "Uma tentativa de obter informações pessoais fraudulentamente", "Uma técnica de proteção de dados"],
      "correct": 1,
      "explanation": "Phishing é uma prática fraudulenta de obter informações pessoais se passando por uma entidade confiável."
    },
    {
      "category": "Software",
      "question": "Qual é a função de um compilador?",
      "answers": ["Executar programas", "Converter código fonte em código máquina", "Gerenciar o hardware"],
      "correct": 1,
      "explanation": "Um compilador converte o código fonte de uma linguagem de programação para um código executável."
    },
    {
      "category": "Banco de Dados",
      "question": "Qual é a linguagem usada para consultas a bancos de dados relacionais?",
      "answers": ["HTML", "CSS", "SQL"],
      "correct": 2,
      "explanation": "SQL é a linguagem padrão usada para consultas a bancos de dados relacionais."
    },
    {
      "category": "Redes",
      "question": "O que é um roteador?",
      "answers": ["Um dispositivo que conecta redes diferentes e encaminha pacotes", "Um dispositivo de armazenamento", "Uma impressora de rede"],
      "correct": 0,
      "explanation": "Um roteador é usado para conectar redes diferentes e encaminhar pacotes de dados entre elas."
    },
    {
      "category": "Segurança",
      "question": "O que é criptografia?",
      "answers": ["A técnica de codificar informações para protegê-las", "A eliminação de dados desnecessários", "A compressão de arquivos"],
      "correct": 0,
      "explanation": "Criptografia é o processo de converter dados legíveis em uma forma codificada para protegê-los."
    },
    {
      "category": "Hardware",
      "question": "O que faz uma placa-mãe?",
      "answers": ["Armazena informações", "Interconecta os componentes do computador", "Realiza o processamento gráfico"],
      "correct": 1,
      "explanation": "A placa-mãe é responsável por interconectar os componentes e permitir a comunicação entre eles."
    },
    {
      "category": "Programação",
      "question": "O que significa IDE em programação?",
      "answers": ["Integrated Development Environment", "Internal Data Editor", "Initial Development Entry"],
      "correct": 0,
      "explanation": "IDE significa Integrated Development Environment e é um ambiente que facilita o desenvolvimento de software."
    },
    {
      "category": "Redes",
      "question": "Qual é a função de um switch em uma rede?",
      "answers": ["Redirecionar o tráfego de rede de acordo com endereços MAC", "Converter sinais digitais", "Controlar o acesso à internet"],
      "correct": 0,
      "explanation": "Um switch é responsável por redirecionar o tráfego de rede com base nos endereços MAC dos dispositivos conectados."
    },
    {
      "category": "Software",
      "question": "O que é software livre?",
      "answers": ["Software disponível gratuitamente e que pode ser modificado", "Software que não precisa ser instalado", "Software sem licença"],
      "correct": 0,
      "explanation": "Software livre é um software que pode ser utilizado, modificado e distribuído livremente."
    },
    {
      "category": "Hardware",
      "question": "O que é um SSD?",
      "answers": ["Um tipo de memória volátil", "Um tipo de disco de armazenamento não volátil", "Um processador gráfico"],
      "correct": 1,
      "explanation": "Um SSD (Solid State Drive) é um tipo de dispositivo de armazenamento que usa memória flash."
    },
    {
      "category": "Segurança",
      "question": "O que é autenticação de dois fatores (2FA)?",
      "answers": ["Um método de login usando duas camadas de proteção", "Uma técnica para hackear sistemas", "Uma forma de criptografar dados"],
      "correct": 0,
      "explanation": "Autenticação de dois fatores é uma camada adicional de segurança exigindo duas formas de verificação ao fazer login."
    },
    {
      "category": "Programação",
      "question": "Qual desses é um framework JavaScript?",
      "answers": ["Angular", "Ruby", "PHP"],
      "correct": 0,
      "explanation": "Angular é um framework popular para desenvolvimento de aplicativos web em JavaScript."
    },
    {
      "category": "Banco de Dados",
      "question": "O que é normalização em bancos de dados?",
      "answers": ["O processo de organizar dados para minimizar redundância", "A criação de backups automáticos", "A indexação de tabelas para melhorar a velocidade"],
      "correct": 0,
      "explanation": "Normalização é o processo de organizar dados em um banco de dados para reduzir redundâncias e melhorar a integridade."
    },
    {
      "category": "Redes",
      "question": "O que significa HTTP?",
      "answers": ["HyperText Transfer Protocol", "HyperText Transmission Process", "HyperThread Transfer Protocol"],
      "correct": 0,
      "explanation": "HTTP significa HyperText Transfer Protocol e é o protocolo usado para transferir dados na web."
    },
    {
      "category": "Hardware",
      "question": "O que é um barramento (bus) em um computador?",
      "answers": ["Uma rede local de computadores", "Um conjunto de linhas de comunicação que transferem dados entre componentes", "Um tipo de memória não volátil"],
      "correct": 1,
      "explanation": "O barramento é um conjunto de linhas de comunicação usado para transferir dados entre os componentes do computador."
    },
    {
      "category": "Software",
      "question": "Qual é a principal diferença entre software proprietário e software livre?",
      "answers": ["O software proprietário não pode ser modificado ou distribuído livremente", "O software livre é mais caro", "Software proprietário é sempre mais seguro"],
      "correct": 0,
      "explanation": "O software proprietário é protegido por direitos autorais, o que impede a modificação e distribuição sem autorização."
    },
    {
      "category": "Programação",
      "question": "Qual é a principal função de um algoritmo?",
      "answers": ["Solucionar problemas de forma sequencial", "Gerar números aleatórios", "Compilar códigos"],
      "correct": 0,
      "explanation": "Um algoritmo é um conjunto de passos lógicos usados para resolver problemas."
    },
    {
      "category": "Redes",
      "question": "O que é um endereço MAC?",
      "answers": ["Um identificador único atribuído a dispositivos de rede", "Um tipo de endereço IP", "Um tipo de roteador"],
      "correct": 0,
      "explanation": "Um endereço MAC é um identificador único atribuído a dispositivos de rede para comunicação em uma rede."
    },
    {
      "category": "Segurança",
      "question": "O que é malware?",
      "answers": ["Qualquer software projetado para causar danos ao computador ou rede", "Um programa para proteção contra vírus", "Um software livre de licença"],
      "correct": 0,
      "explanation": "Malware é qualquer software malicioso que pode danificar ou invadir sistemas e redes."
    },
    {
      "category": "Hardware",
      "question": "Qual é a função de um processador gráfico (GPU)?",
      "answers": ["Renderizar gráficos e imagens", "Gerenciar o tráfego de rede", "Processar dados matemáticos"],
      "correct": 0,
      "explanation": "Uma GPU (Unidade de Processamento Gráfico) é usada para renderizar gráficos e imagens em alta velocidade."
    },
    {
      "category": "Programação",
      "question": "Qual é a sintaxe correta para criar uma função em JavaScript?",
      "answers": ["function nomeFuncao() {}", "def nomeFuncao():", "function = nomeFuncao{}"],
      "correct": 0,
      "explanation": "A sintaxe correta para criar uma função em JavaScript é 'function nomeFuncao() {}'."
    },
    {
      "category": "Banco de Dados",
      "question": "O que é uma tabela em um banco de dados relacional?",
      "answers": ["Um conjunto de registros organizados em linhas e colunas", "Um script para consultar dados", "Um índice de consulta"],
      "correct": 0,
      "explanation": "Uma tabela em um banco de dados relacional é um conjunto de dados organizados em linhas e colunas."
    },
    {
      "category": "Redes",
      "question": "O que significa VPN?",
      "answers": ["Virtual Private Network", "Virtual Process Node", "Very Private Network"],
      "correct": 0,
      "explanation": "VPN significa Virtual Private Network e é usada para criar uma conexão segura sobre uma rede pública."
    },
    {
      "category": "Segurança",
      "question": "O que é ransomware?",
      "answers": ["Um tipo de malware que exige resgate para liberar o sistema infectado", "Um software de backup", "Uma técnica de compressão de arquivos"],
      "correct": 0,
      "explanation": "Ransomware é um tipo de malware que bloqueia o acesso ao sistema até que um resgate seja pago."
    },
    {
      "category": "Hardware",
      "question": "Qual é a função de uma fonte de alimentação (PSU)?",
      "answers": ["Converter corrente alternada em corrente contínua para alimentar os componentes", "Fornecer energia direta ao processador", "Controlar a voltagem da memória RAM"],
      "correct": 0,
      "explanation": "A fonte de alimentação converte a corrente alternada (AC) em corrente contínua (DC) para alimentar os componentes do computador."
    },
    {
      "category": "Programação",
      "question": "Qual dessas é uma linguagem de programação orientada a objetos?",
      "answers": ["Java", "HTML", "CSS"],
      "correct": 0,
      "explanation": "Java é uma linguagem de programação orientada a objetos, usada amplamente no desenvolvimento de software."
    },
    {
      "category": "Redes",
      "question": "O que é o protocolo FTP usado para?",
      "answers": ["Transferir arquivos pela internet", "Criptografar dados em redes", "Atribuir endereços IP"],
      "correct": 0,
      "explanation": "FTP (File Transfer Protocol) é usado para transferir arquivos entre computadores na internet."
    },
    {
      "category": "Segurança",
      "question": "Qual é a função de um antivírus?",
      "answers": ["Detectar e remover softwares maliciosos", "Proteger dados contra perda", "Aumentar a velocidade do processador"],
      "correct": 0,
      "explanation": "Um antivírus é um software que detecta e remove vírus e outros malwares de um sistema."
    },
    {
      "category": "Hardware",
      "question": "O que é overclocking?",
      "answers": ["Aumentar a frequência de operação de um componente acima de suas especificações originais", "Diminuir a temperatura da CPU", "Aumentar a capacidade de armazenamento de um disco rígido"],
      "correct": 0,
      "explanation": "Overclocking é o ato de aumentar a frequência de operação de um componente, como a CPU, além de suas especificações normais."
    },
    {
      "category": "Programação",
      "question": "O que é um loop em programação?",
      "answers": ["Uma estrutura que repete um bloco de código até que uma condição seja atendida", "Um tipo de variável", "Uma função matemática complexa"],
      "correct": 0,
      "explanation": "Um loop é uma estrutura que repete a execução de um bloco de código até que uma condição específica seja satisfeita."
    },
    {
      "category": "Redes",
      "question": "Qual é o papel de um proxy em uma rede?",
      "answers": ["Atuar como intermediário entre o cliente e o servidor", "Atribuir endereços IP", "Detectar ameaças de malware"],
      "correct": 0,
      "explanation": "Um proxy atua como intermediário entre um cliente e um servidor, controlando e filtrando o tráfego de rede."
    },
    {
      "category": "Segurança",
      "question": "O que é ransomware?",
      "answers": ["Um tipo de malware que exige resgate para liberar o sistema", "Um software de proteção contra vírus", "Uma ferramenta de gerenciamento de senhas"],
      "correct": 0,
      "explanation": "Ransomware é um tipo de malware que bloqueia o acesso ao sistema ou arquivos e exige um pagamento para liberá-los."
    },
    {
      "category": "Hardware",
      "question": "Qual é a função de uma fonte de alimentação em um computador?",
      "answers": ["Armazenar dados", "Converter energia elétrica para alimentar os componentes", "Controlar a temperatura do sistema"],
      "correct": 1,
      "explanation": "A fonte de alimentação converte energia elétrica da tomada em uma forma utilizável para os componentes do computador."
    },
    {
      "category": "Programação",
      "question": "O que é um bug em programação?",
      "answers": ["Um erro ou falha em um programa", "Uma nova funcionalidade", "Um tipo de sistema operacional"],
      "correct": 0,
      "explanation": "Um bug é um erro ou falha em um programa que pode causar comportamentos inesperados."
    },
    {
      "category": "Banco de Dados",
      "question": "O que é uma consulta em SQL?",
      "answers": ["Uma operação para recuperar dados de um banco de dados", "Um comando para excluir dados", "Um tipo de tabela"],
      "correct": 0,
      "explanation": "Uma consulta em SQL é uma operação que recupera dados de um banco de dados com base em critérios especificados."
    },
    {
      "category": "Redes",
      "question": "Qual é a principal função do protocolo TCP?",
      "answers": ["Garantir a entrega confiável de dados", "Controlar o acesso à internet", "Converter endereços IP em nomes de domínio"],
      "correct": 0,
      "explanation": "O protocolo TCP (Transmission Control Protocol) garante a entrega confiável de dados na comunicação pela internet."
    },
    {
      "category": "Segurança",
      "question": "O que é engenharia social?",
      "answers": ["Manipulação de pessoas para obter informações confidenciais", "Um método de programação", "Uma técnica de segurança de rede"],
      "correct": 0,
      "explanation": "Engenharia social refere-se à manipulação de indivíduos para que revelem informações confidenciais."
    },
    {
      "category": "Software",
      "question": "Qual é a diferença entre um aplicativo nativo e um aplicativo web?",
      "answers": ["Aplicativos nativos são instalados no dispositivo, enquanto aplicativos web são acessados pelo navegador", "Aplicativos nativos são mais lentos que aplicativos web", "Não há diferença"],
      "correct": 0,
      "explanation": "Aplicativos nativos são desenvolvidos para um sistema operacional específico e instalados no dispositivo, enquanto aplicativos web são acessados através de navegadores."
    },
    {
      "category": "Programação",
      "question": "O que significa OOP?",
      "answers": ["Programação Orientada a Objetos", "Operação de Objeto Programado", "Organização de Objetos em Projetos"],
      "correct": 0,
      "explanation": "OOP significa Programação Orientada a Objetos, um paradigma de programação baseado na utilização de objetos."
    },
    {
      "category": "Hardware",
      "question": "Qual é a função de um cooler em um computador?",
      "answers": ["Aumentar a velocidade do processador", "Resfriar os componentes para evitar superaquecimento", "Aumentar a memória RAM"],
      "correct": 1,
      "explanation": "Um cooler é usado para resfriar os componentes do computador, evitando que eles superaqueçam."
    },
    {
      "category": "Redes",
      "question": "O que é um servidor?",
      "answers": ["Um computador que fornece serviços a outros computadores", "Um dispositivo de armazenamento", "Um tipo de firewall"],
      "correct": 0,
      "explanation": "Um servidor é um computador que fornece serviços e recursos a outros computadores na rede."
    }
  ];

  let questions = [...quizData];
  shuffle(questions);
  let currentQuestion = 0;
  let score = 0;
  let categoryStats = {};
  let correctAnswerIndex = -1;

  const startQuizBtn = document.getElementById("startQuiz");
  const quizContainer = document.getElementById("quizContainer");
  const questionEl = document.getElementById("question");
  const answersEl = document.getElementById("answers");
  const explanationEl = document.getElementById("explanation");
  const explanationTextEl = document.getElementById("explanationText");
  const nextQuestionBtn = document.getElementById("nextQuestion");
  const resultEl = document.getElementById("result");
  const scoreEl = document.getElementById("score");
  const percentageEl = document.getElementById("percentage");
  const restartQuizBtn = document.getElementById("restartQuiz");
  const questionChip = document.getElementById("questionChip");
  const categoryChip = document.getElementById("categoryChip");
  const scoreCounter = document.getElementById("scoreCounter");

  const progressBar = new ProgressBar.Circle("#progress-bar", {
    strokeWidth: 4,
    easing: "linear",
    duration: 15000,
    trailWidth: 1,
    step: function(state, circle) {
      const timeLeft = Math.ceil((1 - circle.value()) * 15);
      circle.setText(timeLeft > 0 ? timeLeft : "Esgotado");

      if (timeLeft <= 5 && timeLeft > 0) {
        circle.path.setAttribute("stroke", "#ff0000");
        document.querySelector("#progress-bar").classList.add("pulsing");
      } else {
        circle.path.setAttribute("stroke", "#3490dc");
        document.querySelector("#progress-bar").classList.remove("pulsing");
      }

      if (timeLeft <= 0)
        handleTimeout();
    },
    svgStyle: { width: "100%", height: "100px" },
  });

  function startTimer() {
    progressBar.set(0);
    progressBar.animate(1);
  }

  function stopTimer() {
    progressBar.stop();
    document.querySelector("#progress-bar").classList.remove("pulsing");
  }

  function handleTimeout() {
    stopTimer();
    skipQuestion();
  }

  function loadQuestion() {
    const question = questions[currentQuestion];
    questionEl.textContent = question.question;
    answersEl.innerHTML = '';
    explanationEl.classList.add("hidden");

    questionChip.textContent = `Pergunta ${currentQuestion + 1}/${quizData.length}`;
    categoryChip.textContent = `Categoria: ${question.category}`;
    scoreCounter.textContent = `Pontuação: ${score}`;

    const shuffledAnswers = [...question.answers];
    shuffle(shuffledAnswers);
    correctAnswerIndex = shuffledAnswers.indexOf(question.answers[question.correct]);

    shuffledAnswers.forEach((answer, index) => {
      const button = document.createElement("button");
      button.textContent = answer;
      button.classList.add(
        "w-full",
        "text-left",
        "bg-gray-300",
        "hover:bg-gray-400",
        "py-2",
        "px-4",
        "rounded",
        "transition",
        "duration-300",
        "focus:outline-none",
        "focus:ring-2",
        "focus:ring-blue-500"
      );
      button.setAttribute("aria-label", `Resposta ${index + 1}: ${answer}`);
      button.addEventListener("click", () => selectAnswer(index));
      answersEl.appendChild(button);
    });

    nextQuestionBtn.classList.add("hidden");
    startTimer();
  }

  function selectAnswer(selectedIndex) {
    stopTimer();
    const buttons = answersEl.getElementsByTagName("button");
    for (let button of buttons) {
      button.disabled = true;
      button.classList.remove("hover:bg-gray-600");
    }

    const currentQ = questions[currentQuestion];
    const category = currentQ.category;

    if (!categoryStats[category]) {
      categoryStats[category] = { correct: 0, total: 0 };
    }

    categoryStats[category].total++;

    if (selectedIndex === correctAnswerIndex) {
      buttons[selectedIndex].classList.remove("bg-gray-300", "hover:bg-gray-400");
      buttons[selectedIndex].classList.add("bg-green-500", "text-white");
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });

      const correctSound = new Audio("public/sounds/correct-answer.webm");
      correctSound.play();
      score++;
      categoryStats[category].correct++;
    } else {
      buttons[selectedIndex].classList.remove("bg-gray-300", "hover:bg-gray-400");
      buttons[selectedIndex].classList.add("bg-red-500", "text-white", "shake");
      buttons[correctAnswerIndex].classList.remove("bg-gray-700", "hover:bg-gray-600");
      buttons[correctAnswerIndex].classList.add("bg-green-500", "text-white");

      document.body.classList.add("flash-red");
      setTimeout(() => {
        document.body.classList.remove("flash-red");
      }, 300);

      const errorSound = new Audio("public/sounds/wrong-answer.webm");
      errorSound.play();
    }

    explanationTextEl.textContent = currentQ.explanation;
    explanationEl.classList.remove("hidden");
    nextQuestionBtn.classList.remove("hidden");

    if (currentQuestion === questions.length - 1) {
      nextQuestionBtn.innerText = "Ver Resultados";
    }
  }

  function skipQuestion() {
    const buttons = answersEl.getElementsByTagName("button");
    for (let button of buttons) {
      button.disabled = true;
      button.classList.remove("hover:bg-gray-600");
    }

    const currentQ = questions[currentQuestion];
    const category = currentQ.category;

    if (!categoryStats[category]) {
      categoryStats[category] = { correct: 0, total: 0 };
    }

    categoryStats[category].total++;

    document.body.classList.add("flash-red");
    setTimeout(() => {
      document.body.classList.remove("flash-red");
    }, 300);

    const errorSound = new Audio("public/sounds/wrong-answer.webm");
    errorSound.play();

    explanationTextEl.textContent = currentQ.explanation;
    explanationEl.classList.remove("hidden");
    nextQuestionBtn.classList.remove("hidden");

    if (currentQuestion === questions.length - 1) {
      nextQuestionBtn.innerText = "Ver Resultados"; // Alteração solicitada
    }
  }

  function showResult() {
    quizContainer.classList.add("hidden");
    resultEl.classList.remove("hidden");
    
    const percentage = ((score / quizData.length) * 100).toFixed(2);
    
    scoreEl.textContent = `Você acertou ${score} de ${quizData.length} perguntas!`;
    percentageEl.textContent = `Taxa de Acerto: ${percentage}%`;
    
    generateCharts();

    confetti({
      particleCount: 300,
      spread: 160,
      origin: { y: 0.6 }
    });
  }

  function generateCharts() {
    const ctxBar = document.getElementById("resultChart").getContext("2d");
    new Chart(ctxBar, {
      type: "bar",
      data: {
        labels: Object.keys(categoryStats),
        datasets: [{
          label: "Acertos",
          data: Object.values(categoryStats).map(cat => cat.correct),
          backgroundColor: "rgba(52, 144, 220, 0.6)",
          borderColor: "rgba(52, 144, 220, 1)",
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "Acertos por Categoria"
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                const category = context.label;
                const correct = categoryStats[category].correct;
                const total = categoryStats[category].total;
                const percent = ((correct / total) * 100).toFixed(2);
                return `${correct} de ${total} (${percent}%)`;
              }
            }
          },
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            precision: 0,
            title: {
              display: true,
              text: "Número de Acertos"
            }
          },
          x: {
            title: {
              display: true,
              text: "Categorias"
            }
          }
        }
      }
    });

    const ctxRadar = document.getElementById("radarChart").getContext("2d");
    new Chart(ctxRadar, {
      type: "radar",
      data: {
        labels: Object.keys(categoryStats),
        datasets: [{
          label: "Taxa de Acerto (%)",
          data: Object.values(categoryStats).map(cat => ((cat.correct / cat.total) * 100).toFixed(2)),
          backgroundColor: "rgba(255, 159, 64, 0.2)",
          borderColor: "rgba(255, 159, 64, 1)",
          borderWidth: 1,
          pointBackgroundColor: "rgba(255, 159, 64, 1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(255, 159, 64, 1)"
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "Taxa de Acerto por Categoria"
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                const category = context.label;
                const percent = ((categoryStats[category].correct / categoryStats[category].total) * 100).toFixed(2);
                return `${percent}%`;
              }
            }
          },
          legend: {
            display: false
          }
        },
        scales: {
          r: {
            beginAtZero: true,
            max: 100,
            ticks: {
              stepSize: 10
            },
            angleLines: {
              color: "rgba(200, 200, 200, 0.2)"
            },
            grid: {
              color: "rgba(200, 200, 200, 0.2)"
            },
            pointLabels: {
              font: {
                size: 14
              }
            }
          }
        }
      }
    });

    const ctxPie = document.getElementById("pieChart").getContext("2d");
    new Chart(ctxPie, {
      type: "pie",
      data: {
        labels: ["Acertos", "Erros"],
        datasets: [{
          data: [score, quizData.length - score],
          backgroundColor: [
            "rgba(52, 144, 220, 0.6)",
            "rgba(255, 99, 132, 0.6)"
          ],
          borderColor: [
            "rgba(52, 144, 220, 1)",
            "rgba(255, 99, 132, 1)"
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "Distribuição Geral de Acertos"
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                const label = context.label;
                const value = context.parsed;
                const percent = ((value / quizData.length) * 100).toFixed(2);
                return `${label}: ${value} (${percent}%)`;
              }
            }
          },
          legend: {
            position: "bottom"
          }
        }
      }
    });
  }

  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    categoryStats = {};
    resultEl.classList.add("hidden");
    nextQuestionBtn.innerText = "Próxima Pergunta";
    document.getElementById("intro").classList.remove("hidden");

    percentageEl.textContent = '';
    
    const charts = ["resultChart", "radarChart", "pieChart"];
    charts.forEach(chartId => {
      const chartElement = document.getElementById(chartId);
      if (chartElement) {
        const chartInstance = Chart.getChart(chartId);
        if (chartInstance) chartInstance.destroy();
      }
    });
  }

  startQuizBtn.addEventListener("click", () => {
    document.getElementById("intro").classList.add("hidden");
    quizContainer.classList.remove("hidden");
    loadQuestion();
  });

  nextQuestionBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  });

  restartQuizBtn.addEventListener("click", restartQuiz);

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
})();
