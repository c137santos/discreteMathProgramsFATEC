# Função para receber a entrada do usuário e retornar um conjunto
def receber_conjunto():
    entrada = input("Digite os elementos do conjunto separados por espaços: ")
    elementos = entrada.split()
    return set(elementos)

def define_conjuntos():
    # Recebe os dois conjuntos do usuário
    conjunto1 = receber_conjunto()
    conjunto2 = receber_conjunto()

    # Calcula e exibe a União dos conjuntos
    uniao = conjunto1.union(conjunto2)
    print(f"União dos conjuntos: {uniao}")

    # Calcula e exibe a Interseção dos conjuntos
    intersecao = conjunto1.intersection(conjunto2)
    print(f"Interseção dos conjuntos: {intersecao}")

    # Calcula e exibe o Conjunto Universo (a união de ambos os conjuntos)
    conjunto_universo = conjunto1.union(conjunto2)
    print(f"Conjunto Universo: {conjunto_universo}")

    # Calcula e exibe a União Disjuntiva (diferença simétrica) dos conjuntos
    uniao_disjuntiva = conjunto1.symmetric_difference(conjunto2)
    print(f"União Disjuntiva (Diferença Simétrica) dos conjuntos: {uniao_disjuntiva}")

if __name__ ==  '__main__':
    define_conjuntos()