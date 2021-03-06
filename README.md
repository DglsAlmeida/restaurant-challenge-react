![The San Juan Mountains are beautiful!](https://raw.githubusercontent.com/goomerdev/job-dev-frontend-interview/master/media/logo-azul.png)

## Tecnologias :computer:

- React
- TypeScript
- SASS
- Redux

## O porque utilizei algumas tecnologias :pushpin:

### TypeScript
Como era um restaurante, o typescript se torna interessante, pois precisei tipar meu código em vários momentos

### Redux
Utilizei o redux pois precisava controlar o estado do meu carrinho (Adicionar, remover e atualizar), e para fazer as alterações dos meus estados, utilizei junto ao redux, o immer, um pacote que permite trabalhar com o estado imutável de uma maneira mais conveniente.

## Funcionalidades 🚀

- [x] A aplicação está praticamente toda responsiva, ficaram poucos detalhes

### Home page
- [x] Pesquisar por um determinado restaurante
- [x] Clicar no restaurante e ser redirecionado para a página dele 

### Restaurant page
- [x] Listar as refeições por grupo e pesquisar por uma determinada comida 
- [x] Clicando em algum item, será aberto um modal e você podera adicionar um item ao carrinho

### Cart page
- [x] No componente header, ao lado do botão cart, se tiver algum item no carrinho, ele mostra a quantidade
- [x] Aumentar ou diminuir a quantidade de determinado produto
- [x] remover o produto 

## O que pode melhorar ? :test_tube:
- Mostrar se um restaurante tá aberto ou fechado com os dados que são retornado pela api, por questão de tempo, acabei não fazendo essa funcionalidade
- Seria a interessante a API retornar um stock de cada produto, porque eu conseguiria controlar a quantidade que pode ser adicionada

## Principais desafios :grimacing:

- A API não retorna descrições para os produtos, então foram mantidos os textos Lorem Ipsum como descrições.
- Em alguns casos a API não retornava a imagem, tive que colocar uma imagem por padrão.
- Apesar de não especificado no desafio ou design, uma versão mobile também foi desenvolvida.
- O mais desafiador foi implementar toda a lógica do redux.

## Como utilizar :bangbang:

Clone o repositorio
- ``git clone https://github.com/DglsAlmeida/restaurant-challenge-react.git``

Entre na raiz do repositório clonado
- Rode ``yarn`` para instalar as dependências

- Depois rode ``yarn start``

- Por padrão a aplicação vai rodar em ``http://localhost:3000``
