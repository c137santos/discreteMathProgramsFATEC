from random import random
from math import floor
import time, os


# Classe que representa o jogo da vida
class Game():
    def __init__(self, linhas, colunas, vivos) -> None:
        self.linhas = linhas
        self.colunas = colunas
        # Inicializa a matriz com células vivas e mortas com base na porcentagem fornecida!
        self.celulas = [False if random() > (vivos/100) else True for _ in range(linhas * colunas)] 
    
    def __repr__(self) -> str:
        gridizinho = ''
         # Gera as celulas vivas como # e celular morte ' . '
        for y in range(self.linhas):
            for x in range(self.colunas): 
                gridizinho += '#' if self.celulas[y * self.colunas + x] else '.' 
                gridizinho +=' ' 
            gridizinho +='\n'
        return gridizinho

    def update(self) -> list:
        new_grid = [x for x in self.celulas]
        for pos, val in enumerate(self.celulas):
            alive_n = self.__alive_nbs(pos)
            if val:
                # Aplica as regras do Jogo da Vida para células vivas!
                if alive_n < 2:
                    # Regra 1: Qualquer célula viva com menos de 2 vizinhos vivos morre de solidão.
                    # Dois True gera uma celula em True
                    new_grid[pos] = False
                elif alive_n > 3:
                    # Regra 2: Qualquer célula viva com mais de 3 vizinhos vivos morre de superpopulação.
                    # Três True gera uma celula em False
                    new_grid[pos] = False
            else:
                # Aplica as regras do Jogo da Vida para células mortas
                if alive_n == 3:
                    # Regra 3: Qualquer célula morta com exatamente 3 vizinhos vivos se torna uma célula viva
                    # Ou seja, três False gera uma celula True
                    new_grid[pos] = True
        self.celulas = new_grid


    def __into_to_coord(self, pos):
        # Esta função converte uma posição 1D (índice) em coordenadas 2D (x, y) na grade.
        # Calcula a coordenada x (coluna) usando o operador de módulo (%) para obter o resto da divisão
        x = pos % self.colunas
        # Calcula a coordenada y (linha) usando a função floor() para arredondar para baixo
        # o resultado da divisão inteira de pos pelo número de colunas
        y = floor(pos / self.colunas)
        # Retorna as coordenadas 2D resultantes (x, y)
        return x, y


    def __alive_nbs(self, pos):
        # Calcula o número de vizinhos vivos de uma célula em uma posição dada (pos).
        # Converte a posição 1D (índice) em coordenadas 2D (x, y)
        par_ordenado = self.__into_to_coord(pos)
        # Inicializa a variável count para contar o número de vizinhos vivos
        count = 0
        # Inicializa uma lista para armazenar as coordenadas dos vizinhos
        vizinhos = []
        # Itera sobre uma vizinhança de 3x3 centrada na célula atual
        for linha in range(par_ordenado[1] - 1, par_ordenado[1] + 2): 
            for coluna in range(par_ordenado[0] - 1, par_ordenado[0] + 2):
                # Verifica se a linha ou coluna está fora dos limites da grade
                if linha < 0 or linha >= self.linhas or coluna >= self.colunas or coluna < 0:
                    continue
                # Verifica se a célula atual é a mesma da célula central (par_ordenado)
                if (coluna, linha) == par_ordenado:
                    continue
                # Adiciona as coordenadas dos vizinhos válidos à lista vizinhos
                vizinhos.append((linha, coluna))
        # Inicializa uma lista r para armazenar as posições 1D dos vizinhos
        r = []
        # Converte as coordenadas dos vizinhos de volta em posições 1D
        for v in vizinhos:
            r.append(v[0] * self.colunas + v[1])
        # Itera sobre as posições 1D dos vizinhos e verifica se as células estão vivas
        for p in r:
            if self.celulas[p]:
                # Se a célula estiver viva, incrementa o contador count
                count += 1
        # Retorna o número de vizinhos vivos da célula na posição pos
        return count


       

if __name__ ==  '__main__':
    while True:
        try:
            matriz_size = int((input('Qual será o tamaho da Matriz? Se por número quebrado eu vou arrendodar. To logo avisando! Sugestão 0 - 100: ')))
            break
        except:
            print("Vamos lá, você não está querendo colaborar. É UM NÚMERO")
    alives = 0
    while True:
        try:
            alives = int((input('Quantos percentos de vivos você deseja? 0 - 100. Vai: ')))
            if (alives > 100) or (alives < 0):
                print("Precisa ser de ZERO a CEM. Para de bagunçar o jogo! Vai: ")
            else:
                break
        except:
            print("Vamos lá, você não está querendo colaborar. É UM NÚMERO")
    grid = Game(matriz_size, matriz_size, alives)
    while True:
        print(grid)
        grid.update()
        time.sleep(0.5)
        os.system('clear')
