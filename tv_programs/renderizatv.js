gabaritos = {
    1 : { 
        10: 'V',
        11: 'F'
    }
}

const tablado = document.getElementById("tablado")
const tbody = document.getElementsByTagName("tbody")[0]
// Nesse momento, estou apenas pegandos os elementos do HTML para iniciar a lógica de criação da tabela dinamicamente

function renderizaTabela() {
    console.log("oi")
    const numThead = document.querySelectorAll('thead th')
    const numCols = numThead.length

    const numVariaveis = document.querySelectorAll('thead th#variavel')
    const numRows = 2**numVariaveis.length

    for(var l = 1; l < (numRows+1); l++) {
        const row = document.createElement('tr')
        for(var c = 1; c < (numCols+1); c++){
            const celula = document.createElement('th')
            const select = document.createElement('select')

            const optionVazia = document.createElement('option')
            optionVazia.textContent = ""
            optionVazia.optionVazia = ""
            select.appendChild(optionVazia)

            const optionV = document.createElement('option')
            optionV.value = "V"
            optionV.textContent = "V"
            select.appendChild(optionV)

            const optionF = document.createElement('option')
            optionF.optionF = "F"
            optionF.textContent = "F"
            select.appendChild(optionF)


            select.id = l.toString() + c.toString()

            celula.appendChild(select)
            celula.id = l.toString() + c.toString()
            row.appendChild(celula)
        }
        tbody.appendChild(row)
    }
    const botaoRenderizaCampos = document.getElementById('renderizador')
    const botaoGabarito = document.getElementById('gabarito')
    botaoRenderizaCampos.disabled = true
    botaoGabarito.disabled = false
}

// function confereGabarito(questao) {
//     row = 8
//     document.getElementById()

// }

dicionario_resultados = {
    11: "True",
    12: "True",
    13: "True",
    14: "True",
    15: "True",
    16: "True",
    17: "True",
    18: "True",
    19: "True",
    21: "True",
    22: "False",
    23: "True",
    24: "True",
    25: "True",
    26: "False",
    27: "True",
    28: "False",
    29: "True",
    31: "True",
    32: "False",
    33: "False",
    34: "False",
    35: "True",
    36: "False",
    37: "False",
    38: "False",
    39: "True",
    41: "True",
    42: "False",
    43: "True",
    44: "False",
    45: "True",
    46: "False",
    47: "True",
    48: "False",
    49: "True",
    51: "True",
    52: "False",
    53: "True",
    54: "True",
    55: "True",
    56: "True",
    57: "True",
    58: "True",
    59: "True",
    61: "True",
    62: "False",
    63: "False",
    64: "False",
    65: "True",
    66: "False",
    67: "False",
    68: "False",
    69: "True",
    71: "True",
    72: "False",
    73: "True",
    74: "True",
    75: "True",
    76: "False",
    77: "True",
    78: "False",
    79: "True",
    81: "True",
    82: "False",
    83: "False",
    84: "False",
    85: "True",
    86: "False",
    87: "False",
    88: "False",
    89: "True"
}

