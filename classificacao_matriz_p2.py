import numpy as np

def is_injective(matrix):
    # Verifica se a matriz é injetora (núcleo trivial)
    kernel_dimension = np.count_nonzero(matrix == 0)
    return kernel_dimension == 0

def is_subjective(matrix):
    # Verifica se a matriz é quadrada
    if matrix.shape[0] != matrix.shape[1]:
        return False

    # Percorre o espaço de chegada
    for v in np.arange(matrix.shape[1]):
        # Tenta encontrar um vetor no espaço de origem que mapeie para v
        found = False
        for u in np.arange(matrix.shape[0]):
            if matrix[u, v] != 0:
                found = True
                break

        # Se não encontrar nenhum vetor, a matriz não é subjetora
        if not found:
            return False

    return True

# Exemplo de uso!
matrix = np.array([[1, 2], [3, 4]])

if is_injective(matrix):
    print("A matriz fornecida é injetora!")
else:
    print("Não é injetora!")
if is_subjective(matrix):
    print("A matriz fornecida é sobrejetora!")
else: 
    print("Não é sobrejetora")
if is_injective and is_subjective:
    print("Ela é sobrejetora")
else:
    print("Ela não é sobrejetora")