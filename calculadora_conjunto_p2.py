
# A iteração do usuário escolherá quais das opções ele quer que seja calculado
def menu():
    print("1. União de conjuntos")
    print("2. Interseção de conjuntos")
    print("3. Diferença entre conjuntos")
    print("4. Sair")

# recebe o input de conjunto do usuário
def main():
    conjunto1 = set(input("Digite os elementos do primeiro conjunto separados por espaço: ").split())
    conjunto2 = set(input("Digite os elementos do segundo conjunto separados por espaço: ").split())

# permite que o usuário faça mais de uma operação. 
    while True:
        menu()
        opcao = int(input("Escolha uma opção (1-4): "))
#de acordo com a opção, realiza a operação utilizando a lib para set. 
        if opcao == 1:
            resultado = conjunto1.union(conjunto2)
            print("União dos conjuntos:", resultado)
        elif opcao == 2:
            resultado = conjunto1.intersection(conjunto2)
            print("Interseção dos conjuntos:", resultado)
        elif opcao == 3:
            resultado = conjunto1.difference(conjunto2)
            print("Diferença entre os conjuntos (Conjunto1 - Conjunto2):", resultado)
        elif opcao == 4:
            print("Saindo do programa. Até mais!")
            break
        else:
            print("Opção inválida. Tente novamente.")

if __name__ == "__main__":
    main()