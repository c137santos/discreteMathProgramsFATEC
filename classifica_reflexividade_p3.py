# Conjunto de pessoas
conjunto_exemplo = {"Alice", "Bob", "Charlie", "David"}

# Exemplo de relação reflexiva e simétrica: "Se relacionam com"
relacao_exemplo = [
    ("Alice", "Alice"),  # Reflexividade
    ("Bob", "Bob"),      # Reflexividade
    ("Charlie", "Charlie"),  # Reflexividade
    ("David", "David"),  # Reflexividade
    ("Bob", "Charlie"),  # Simetria
    ("Charlie", "Bob"),  # Simetria
    ("Alice", "David"),  # Transitividade
    ("David", "Bob")     # Transitividade
]

def verifica_reflexividade(conjunto, relacao):
    return all((elemento, elemento) in relacao for elemento in conjunto)

def verifica_simetria(relacao):
    return all((par[1], par[0]) in relacao or par in relacao for par in relacao)

# Verificação de reflexividade
if verifica_reflexividade(conjunto_exemplo, relacao_exemplo):
    print("A relação é reflexiva.")
else:
    print("A relação não é reflexiva.")

# Verificação de simetria
if verifica_simetria(relacao_exemplo):
    print("A relação é simétrica.")
else:
    print("A relação não é simétrica.")
