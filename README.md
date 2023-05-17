# My Store Ultra System - Repository Pattern Edition

### Antes de começar

1. Entre na pasta `database-mystoreultrasystem-3a28727e` e abra um terminal nela.
        
2. Execute o seguinte comando para criar o banco de dados no seu computador:
        
    ```sql
    sudo bash ./create-database
    ```
        
3. Agora abra um terminal na pasta do back-end e execute o seguinte comando:
        
    ```bash
    npm i # para instalar todas as dependências
    ```
        
### Exercício

O seu sistema de gerenciamento de rotas é um sucesso e você resolveu vendê-lo para outras lojas!

Mas o exigente cliente do mercado Correfu disse que só fecharia negócio com você se o seu sistema utilizasse o Repository Pattern.

Adapte todo o controller de products para esse padrão, utilizando o arquivo `products.repository.js` para colocar as funções de acesso ao banco.