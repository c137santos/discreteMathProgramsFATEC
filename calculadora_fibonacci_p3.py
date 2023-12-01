def main():
# recebe do usuário o index do fibonacci que deseja consultar
    try:
        enesimo = int(input("Informe qual posição de fibonacci deseja saber o número?"))
# Sabemos que index menor que 2, o fibonacci é o próprio número
        if enesimo < 2:
            return enesimo
# inicializamos duas variáveis que servirão para o calculo de F-2 e F-1
        a, b = 0, 1
# Então há um calculo de somar anterior e anterior de anterior até o enesimo número
# É importante retirar dois elementos dele
# pois os dois primeiros números de fibonacci já estão declarados como 0 e 1
        for _ in range(enesimo - 2):
# Então, há uma reatribuição de números, onde a passa ser B, e Bpassa ser soma de a + b
            a, b = b, a + b
# então vamos obter A como o F-2 e B como F-1
# B sendo resultado da soma!
        print(f"O {enesimo}-ésimo elemento da sequência de Fibonacci é: {b}")
    except ValueError:
        print("Por favor, digite um número inteiro válido.")

if __name__ == "__main__":
    main()