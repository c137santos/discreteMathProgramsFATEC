## Programa 01 - Ensino sobre Interseção em Diagrama de Venn para Crianças
Este é um pequeno programa educativo voltado para crianças, projetado para ensinar de forma interativa o conceito de interseção usando um diagrama de Venn. O programa utiliza operações de arrastar e soltar (drag-and-drop) para envolver as crianças de uma maneira divertida e envolvente.

### Funcionalidades
O programa possui as seguintes funcionalidades:

Arrastar e Soltar: As crianças podem arrastar elementos pré-definidos para círculos coloridos no diagrama de Venn.

Verificação Automática: O programa verifica automaticamente se os elementos foram colocados nos lugares corretos, ensinando os conceitos de interseção.

Indicadores de Vitória e Fim de Jogo: Quando todas as respostas estiverem corretas, o programa indica uma vitória. Se houver erros nas respostas, o programa indica o fim do jogo.

Funções Principais
O programa é construído em JavaScript e faz uso de várias funções interativas para alcançar seus objetivos educativos. Aqui estão algumas das funções principais utilizadas:

reuneElementos(circuloAmarelo, circuloLilais, intercessao):
Descrição: Essa função reúne os IDs dos elementos nos círculos amarelo, lilás e de interseção e os organiza em um objeto.
Argumentos: circuloAmarelo, circuloLilais, intercessao (elementos HTML dos círculos e interseção).
Retorna: Um objeto com arrays de IDs dos elementos de cada círculo.

verificaRespostas(elementosLilais, elementosAmarelos, elementosIntercessao):
Descrição: Verifica se os elementos estão corretamente classificados de acordo com um gabarito predefinido.
Argumentos: elementosLilais, elementosAmarelos, elementosIntercessao (arrays de IDs dos elementos).
Retorna: true se as respostas estiverem corretas, false caso contrário.

onDragStart(event):
Descrição: Prepara os dados do elemento a ser arrastado durante uma operação de arrastar e soltar.
Argumento: event (evento de arrastar).

onDragOver(event):
Descrição: Impede o comportamento padrão do navegador quando um elemento é arrastado sobre uma área de destino.
Argumento: event (evento de arrastar sobre a área de destino).

onDrop(event):
Descrição: Gerencia o posicionamento do elemento solto e executa ações adicionais, como verificar se o jogo acabou.
Argumento: event (evento de soltar o elemento na área de destino).

jaAcabou():
Descrição: Verifica se o jogo chegou ao fim, analisando os elementos nos círculos e a interseção.
Retorna: false (não possui significado funcional no retorno).
Como Usar
Inclua o HTML, CSS e JavaScript necessários em sua página.

Crie áreas de destino e elementos interativos com IDs apropriados.

Implemente as funções acima no seu código, garantindo que os elementos HTML correspondentes sejam passados como argumentos.

Personalize a aparência e a lógica do programa conforme necessário.

Divirta-se aprendendo sobre interseção em diagramas de Venn de maneira interativa e envolvente!

### Conclusão
Este programa foi criado para fornecer uma introdução interativa e educativa ao conceito de interseção em diagramas de Venn para crianças. Usando operações de arrastar e soltar, as crianças podem aprender de forma prática e divertida. Personalize o programa de acordo com suas necessidades e aproveite como uma ferramenta de ensino criativa!

### Como executar?
Execute o index.html, clicando duas vezes. O arquivo se encontra dentro da pasta conjuntos_bichinhos. 

## Programa 02 - Site de acompanhemtno das aulas
Esse site é integrado no github, a partir do momento que eu escrevo no meu local, com alguma periocidade já faz um backup e joga tudo em um site estático publicado na internet. 
Nessa versão useio Latex para imprimir as operações matematicas com mais precisão. ALém de utiliza o obsidian como meio principal. 
[Você pode visitar o site aqui](https://clarasantosmf.github.io/FATEC/FATEC/1%C2%BA%20Semestre%20(2023.2)/MMD001%20-%20Matem%C3%A1tica%20discreta/2023-08-11%20(1%C2%AA%20aula)%20Plano%20de%20aula.html)

## Programa 03 - Conjuntos.py

O programa chamado "conjunto.py" é um script Python que realiza operações com conjuntos. Ele permite que o usuário insira dois conjuntos, calcula e exibe a União, a Interseção, o Conjunto Universo e a União Disjuntiva (diferença simétrica) entre esses conjuntos. Aqui está uma descrição passo a passo de como executar e usar o programa:

Preparação: Certifique-se de que você tenha o Python instalado em seu sistema. Se você não tiver o Python instalado, você pode baixá-lo em python.org.

Criando um arquivo de script: Crie um novo arquivo Python chamado "conjunto.py" e cole o código fornecido no arquivo. Certifique-se de salvar o arquivo após a colagem do código.

### Como executar esse programa?

Abra um terminal ou prompt de comando.
Navegue para o diretório onde você salvou o arquivo "conjunto.py" usando o comando cd (por exemplo, cd /caminho/para/o/diretorio).
Execute o programa digitando python conjunto.py e pressione Enter.
Interação com o programa: Após executar o programa, ele solicitará que você insira elementos para formar dois conjuntos separados por espaços. Insira os elementos do primeiro conjunto e pressione Enter. Em seguida, insira os elementos do segundo conjunto e pressione Enter novamente.

Resultados: O programa calculará automaticamente a União, a Interseção, o Conjunto Universo e a União Disjuntiva (diferença simétrica) dos dois conjuntos e exibirá os resultados no terminal.

## Programa 04 - jogo da vida

O programa "jogo_da_vida_bool.py" implementa o "Jogo da Vida de Conway", um modelo matemático que simula a evolução de células em uma grade bidimensional. O programa utiliza a álgebra de booleana para determinar o estado de cada célula (viva ou morta) em cada geração, com base em regras simples.

### Como executar esse programa?

Abra um terminal ou prompt de comando no diretório onde você possui o arquivo "jogo_da_vida_bool.py". Você pode interromper a execução do programa a qualquer momento pressionando Ctrl + C no terminal.

## Programa 05 - Tv Programa. 


O programa "tv.html" é uma página HTML interativa que lida com tabelas verdade e testa o conhecimento do usuário sobre operações lógicas usando um modelo de tabela verdade. Aqui está uma descrição breve do programa e como executá-lo:

Descrição do Programa:

A página HTML usa o framework Petite Vue (importado via CDN) para criar interatividade. A tabela verdade é definida no código usando matrizes bidimensionais. Os usuários podem selecionar "V" (verdadeiro) ou "F" (falso) em células da tabela verdade. Ao clicar no botão "Verificar o gabarito", o programa compara as respostas do usuário com o gabarito e destaca as células corretas e incorretas com classes CSS. O botão "Ver a resposta" preenche a tabela com o gabarito correto.

### Execução:


Abra o arquivo "tv.html" em um navegador da web. A página será carregada, exibindo a tabela verdade e as opções de seleção (V/F) para cada célula.

Este programa é útil para aprender e praticar conceitos de álgebra booleana e tabelas verdade de forma interativa. Ele fornece feedback imediato sobre as respostas do usuário e ajuda a entender melhor as operações lógicas.