# Desafio Módulo 2 - BootCamp Agilizei T6

O desafio consiste em executar testes de front end no ambiente [http://demo.realworld.io/](http://demo.realworld.io/).
Os testes são feitos nos módulos de Cadastro, Login e Postagem de Artigo.
Para a organização do projeto foi utilizado o padrão Page Objects e AAA ([Arrange Act Assert](https://github.com/testdouble/contributing-tests/wiki/Arrange-Act-Assert))

## Configuração (cypress.json)

Neste arquivo estão algumas configurações utilizadas durante os testes, como url's, usuário e título do artigo a ser publicado, pois interfere nas rotas.

## Arquivos dos módulos

Cada módulo testado possui seu diretório em Pages, cada módulo possui os arquivos index.js e elements.js

index.js: neste arquivo são criados os métodos que serão chamados pelas SPEC's
em alguns arquivos, foi utilizado o faker para gerar dados aleatórios.

elements.js: neste arquivo estão definidos os elementos que serão utilizados pelos métodos do index.js

## Relatório

Foi utilizado o junit reporter para geração dos relatórios, os relatórios devem ser acessados pelo Azure Pipelines (mas até o momento não tive acesso a plataforma)
