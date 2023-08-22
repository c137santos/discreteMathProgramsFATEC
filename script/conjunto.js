// Esse programa é voltado a crianças para Diagramas de Venn de intersecção.

// Função venceuJogo() dispara confetis na tela quando os elementos são organizados corretamente no diagrama.
function venceuJogo() {
    let contador = 0
    startConfetti();
    setInterval(function () {
        if (contador == 5) {
            stopConfetti()
        }
        contador++
    }, 1000)
    return
}

// Função fimDeJogo() dispara um alert e um reload da página quando os elementos não são organizados corretamente no driagrama
function fimDeJogo() {
  alert("Essa não é organização correta. Tente de novo")
  window.location.reload(true);
}

//A função verificaRespostas() utiliza uma estrutura de dicionário para classificar e comparar elementos de círculos de diferentes cores (lilás e amarelo) com um gabarito predefinido. Ela segue uma abordagem eficiente, priorizando comparações rápidas e fáceis para evitar gastos desnecessários de tempo de execução quando já compara tamanho dos arrays e o gabarito da intersecção.
function verificaRespostas(elementosLilais, elementosAmarelos, elementosIntersecao) {
    const CLASSIFICADOS = {
        'figurinha-aeronave': 'transporte',
        'figurinha-balao': 'transporte',
        'figurinha-helicoptero': 'transporte',
        'figurinha-coruja': 'ave',
        'figurinha-aguia': 'ave',
        'figurinha-pombo': 'ave',
        'figurinha-gato': 'mamifero',
        'figurinha-urso': 'mamifero'
    }

    const GABARITO = {
        'transporte': ['figurinha-aeronave', 'figurinha-balao', 'figurinha-helicoptero'],
        'mamifero': ['figurinha-gato', 'figurinha-urso'],
        'ave': ['figurinha-coruja', 'figurinha-aguia', 'figurinha-pombo']
    }

    if (elementosLilais && elementosAmarelos) {
    const amostraLilais = CLASSIFICADOS[elementosLilais[0]]
    const amostraAmarela = CLASSIFICADOS[elementosAmarelos[0]]
    const gabaritoLilais = GABARITO[amostraLilais]
    const gabaritoAmarelo = GABARITO[amostraAmarela]
      if (elementosIntersecao.length !== GABARITO['ave'].length || elementosLilais.length !== gabaritoLilais.length || elementosAmarelos.length !== gabaritoAmarelo.length) {
        return false
      }
    for (const element of GABARITO['ave']) {
        if (!elementosIntersecao.includes(element)) {
            return false
        }
    }
    for (const element of elementosLilais) {
        if (!gabaritoLilais.includes(element)) {
            return false
        }
    }

    for (const element of elementosAmarelos) {
        if (!gabaritoAmarelo.includes(element)) {
            return false
        }
    }
    return true
  }
}


// Essa função reuneElementos extrai e organiza os IDs dos elementos filhos de três círculos HTML diferentes: circuloAmarelo, circuloLilais e intercessao.

function reuneElementos(circuloAmarelo, circuloLilais, intercessao) {
  let elementosLilais = []
  let elementosAmarelos = []
  let elementosIntercessao = []

// Loop para extrair os IDs dos elementos filhos do círculo amarelo.
  for (const child of circuloAmarelo.children) {
  elementosAmarelos.push(child.id);
  }

// Loop para extrair os IDs dos elementos filhos do círculo lilás.
  for (const child of circuloLilais.children) {
  elementosLilais.push(child.id);
  }

// Loop para extrair os IDs dos elementos filhos do intercessão.
  for (const child of intercessao.children) {
  elementosIntercessao.push(child.id)
  }

// Organiza os IDs extraídos em um objeto.
  const elementosReunidos = {
    'lilais': elementosLilais,
    'amarelo': elementosAmarelos,
    'intercessao': elementosIntercessao

  }

// Retorna o objeto com os arrays de IDs reunidos.
  return elementosReunidos
}

//Verifica se o jogo chegou ao fim e se é hora de verificar o gabarito.
function jaAcabou() {
// Obtém o elemento HTML que representa o cercadinho, onde existem todos os elementos a serem distribuídos.
  CERCADINHO = document.getElementById("cercado")
// Verifica se o cercado não possui mais elementos filhos. Ou seja, se tudo já foi distribuído.
  if (CERCADINHO.childElementCount == 0) {
    let elementos = []
// Obtém os elementos dos círculos lilás, amarelo e da intercessão.
      CIRCULOLILAIS = document.getElementById("first")
      CIRCULOAMARELO = document.getElementById("second")
      INTERCESSAO = document.getElementById("medium")
// Reúne os elementos dos círculos em um objeto.
      elementosReunidos = reuneElementos(CIRCULOAMARELO, CIRCULOLILAIS, INTERCESSAO)
// Verifica se os arrays de elementos possuem tamanho maior que zero. Pois, nem caso de circulo de intercesao não pode haver circulos vazios.
    if (elementosReunidos['lilais'].length && elementosReunidos['amarelo'].length && elementosReunidos['intercessao'].length > 0) {
// Chama a função verificaResposta() passando os elementos de cada círculo
      if(verificaRespostas(elementosReunidos['lilais'], elementosReunidos['amarelo'], elementosReunidos['intercessao'])) {
// Caso positivo, é disparado a função de venceuJogo()
          venceuJogo()
        }
// Caso negativo, é disparado a função de fimDeJogo()
        else {
            fimDeJogo()
        }
    }
  }
  return false
}

// Essa função é ativada quanto um elemento começa a ser arrastrado pela tela.
function onDragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.id);
// event.dataTransfer.setData('text/plain', event.target.id); define os dados que serão transferidos durante o arrastar. Nesse caso, o ID do elemento alvo é definido como um dado de texto. Isso permite que outros elementos ou áreas do documento reconheçam o dado quando o elemento for solto (drop) durante o arrastar.
  const target = event.currentTarget;
}

// onDragOver() é função que recebe o parametro event, ativada quando o elemento é arrastado de destino. O preventDefault permite que o elemento seja solto sob a área permitida, impedindo o comportamento padrão do navegador de jogar o elemento de volta ao seu lugar de origem. 
function onDragOver(event) {
// Isso permite que o elemento seja solto na área de destino.
    event.preventDefault()
}

// Função ativada quando um elemento é solto sobre uma área de destino durante uma operação de arrastar e soltar. Essa função gerencia o posicionamento do elemento solto e executa ações adicionais, como verificar se o jogo acabou.

function onDrop(event) {
// Obtém o ID do elemento arrastado.
    const id = event.dataTransfer.getData('text/plain')

// Obtém o elemento arrastado pelo ID.
    const draggableElement = document.getElementById(id)

// Obtém a área de destino onde o elemento foi solto.
    const dropzone = event.target;

// Calcula a posição do elemento solto em relação à área de destino.
    const left = event.clientX - dropzone.getBoundingClientRect().left
    const top = event.clientY - dropzone.getBoundingClientRect().top

// Define a posição absoluta do elemento solto.
    draggableElement.style.position = 'absolute'
    draggableElement.style.left = left + 'px'
    draggableElement.style.top = top + 'px'

// Adiciona o elemento solto à área de destino.
    dropzone.appendChild(draggableElement)

// Limpa os dados de transferência.
    event.dataTransfer.clearData()

// Verifica se o jogo acabou.
    jaAcabou()
}

