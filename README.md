# Desafio Módulo 2 - BootCamp Agilizei T6

![testeComplete](https://user-images.githubusercontent.com/13247837/125364463-e4296280-e348-11eb-986a-11c37bbf352b.gif)

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

Foi utilizado o jUnit reporter para geração dos relatórios, os relatórios devem ser acessados pelo Azure Pipelines.
As configurações estão no arquivo azure-pipelines.yml

OBS: ao criar a conta na Azure não obtive sucesso na execução, depois de enviar um email solicitando acesso free à plataforma, consegue executar os testes.
os erros reportados no relatório foram erros de resposta do servidor de teste, não foram erro de algoritmo.

![azure](https://user-images.githubusercontent.com/13247837/125363698-7cbee300-e347-11eb-9058-462f519b5a4d.gif)
