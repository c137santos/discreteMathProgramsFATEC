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

function fimDeJogo() {
  alert("Essa não é organização correta. Tente de novo")
  window.location.reload(true);
}

function verificaRespostas(elementosLilais, elementosAmarelos, elementosIntercessao) {
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
    const amostraLilais = CLASSIFICADOS[elementosLilais[0]];
    const amostraAmarela = CLASSIFICADOS[elementosAmarelos[0]];
    const gabaritoLilais = GABARITO[amostraLilais];
    const gabaritoAmarelo = GABARITO[amostraAmarela];
      if (elementosIntercessao.length !== GABARITO['ave'].length || elementosLilais.length !== gabaritoLilais.length || elementosAmarelos.length !== gabaritoAmarelo.length) {
        return false;
      }
    for (const element of GABARITO['ave']) {
        if (!elementosIntercessao.includes(element)) {
            return false
        }
    }
    for (const element of elementosLilais) {
        if (!gabaritoLilais.includes(element)) {
            return false;
        }
    }

    for (const element of elementosAmarelos) {
        if (!gabaritoAmarelo.includes(element)) {
            return false;
        }
    }
    console.log('gabaritos corretos')
    return true;
  }
}



function reuneElementos(circuloAmarelo, circuloLilais, intercessao) {
  let elementosLilais = []
  let elementosAmarelos = []
  let elementosIntercessao = []
  for (const child of circuloAmarelo.children) {
  elementosAmarelos.push(child.id);
  }
  for (const child of circuloLilais.children) {
  elementosLilais.push(child.id);
  }
  for (const child of intercessao.children) {
  elementosIntercessao.push(child.id);
  }
  const elementosReunidos = {
    'lilais': elementosLilais,
    'amarelo': elementosAmarelos,
    'intercessao': elementosIntercessao

  }
  return elementosReunidos
}

function jaAcabou() {
  CERCADINHO = document.getElementById("cercado")
  if (CERCADINHO.childElementCount == 0) {
    let elementos = []
      CIRCULOLILAIS = document.getElementById("first")
      CIRCULOAMARELO = document.getElementById("second")
      INTERCESSAO = document.getElementById("medium")
      elementosReunidos = reuneElementos(CIRCULOAMARELO, CIRCULOLILAIS, INTERCESSAO)
    if (elementosReunidos['lilais'].length && elementosReunidos['amarelo'].length && elementosReunidos['intercessao'].length > 0) {
      if(verificaRespostas(elementosReunidos['lilais'], elementosReunidos['amarelo'], elementosReunidos['intercessao'])) {
          venceuJogo()
        }
        else {
            fimDeJogo()
        }
    }
  }
  return false
}

function onDragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.id);
  const target = event.currentTarget;
}

function onDragOver(event) {
    event.preventDefault()
}

function onDrop(event) {
    const id = event.dataTransfer.getData('text/plain')
    const draggableElement = document.getElementById(id)
    const dropzone = event.target

    const left = event.clientX - dropzone.getBoundingClientRect().left;
    const top = event.clientY - dropzone.getBoundingClientRect().top;

    draggableElement.style.position = 'absolute';
    draggableElement.style.left = left + 'px';
    draggableElement.style.top = top + 'px';
    dropzone.appendChild(draggableElement)

    event.dataTransfer.clearData()

    jaAcabou()
}
