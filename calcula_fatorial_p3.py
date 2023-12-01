# Utilizando a recursividade
def fatorial(numero):
# Recebemos um número, se o número for zero, ai já conhecemos 1!
# também é a flag de parada da recursividade. 
    if numero == 0:
        return 1
# caso contrário, então eu multiplico o número pelo numero -1
    else:
        return numero * fatorial(numero - 1)

if __name__ == "__main__":
    numero = int(input("Digite um número para calcular o fatorial: "))
    resultado_fatorial = fatorial(numero)    
    print(f"O fatorial de {numero} é: {resultado_fatorial}")
