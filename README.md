

# Auto identação padrão Airbnb | VScode.

Este repositório foi criado com o objetivo de registrar **ás configurações** necessárias para á auto indentação no padão Airbnb.

### Passo a passo

  Após clonar o repositório, digite no terminal ``yarn`` para baixar as depedências.

-  #### [1° Seguir passo á passo sem clonar o repositorio](#sem-clonar).
-  #### [2° Seguir passo á passo clonando o repositorio.](#clonando).   
    

#### <a name="sem-clonar">Gerenciador de pacotes</a>

- 1° Instalar o Yarn | [ Documentação Yarn](https://legacy.yarnpkg.com/pt-BR/docs/install#windows-stable) 
	
- 2° Em seguida, já com o terminal e a pasta do projeto aberta no **vscode** comece á instalar ás dependências.
	
 #### Dependências

- Eslint | Responsável por verificar se o código segue o padrão determinado.

	``yarn add eslint -D``
	
- #### Configurando o Eslint
	- 1° Digite o comando no terminal
	
		`` yarn eslint --init ``
	
	- 2 ° Siga marcando ás seguintes alternativas:
	
		- To check syntax, find problems, and enforce code style
	
	- 2.1 Está opção varia de acordo com o padrão que estamos utilizando, como vamos utilizar o **sucrase**, marcamos a opção abaixo
		- Javascript modules (import/export)
		- None of these
		- Does your project use Typescript (Y/n) ? 
		
			 **R:** N
			 
	- 2.2 Nesta opção utilize o espaço para desmarcar e marcar apenas a opção **Node**.
		- Where does your code run ?
		- Use a popular style guide ?
				
			 **R:** Airbnb
		- Javascript 
		- Would you like to install them now with npm (Y/n)?
		
			**R:**  Y

		- As depêndencias do Airbnb base e do Eslint plugin import serão instaladas via npm, porém estamos utilizando apenas **yarn**, então apagaremos o arquivo **package-lock.json**. Para ser realizado o mapeamento das dependências via yarn, basta digitar no terminal:	
		
				yarn

	- 3° Configurando o arquivo **.eslintrc.js**, que se encontra na raiz do projeto.

	```
	rules: {

		"prettier/prettier":  "error",

	// No eslint por padrão, todo metodo de uma class precisa usar this.
		"class-methods-use-this":  "off",

	// No eslint por padrão, não é possível receber parametros e fazer alterações
		"no-param-reassign" :  "off",

	// Por padrão o eslint não permite que variáveis sejá criada desta manéira variavel_impossible
		"camelcase":  "off",

	// Por padrão o eslint não permite declarar uma variável e não utiliza-la Ele vai ignorar a variavel next, caso eu chame ela como parametro e não use-a.

		"no-unused-vars": ["error", { "argsIgnorePattern":  "next" }]
	}
	```

	- prettier e eslint | instalando a integração do eslint com o prettier, prettier responsável por verificar se o código segue um padrão bonito, se necessário ele realiza quebra de linhas.

			yarn add prettier eslint-config-prettier eslint-plugin-prettier -D

		- Configurando o prettier no arquivo **.eslintrc.js**

	```
	// Adicione esse código no extends.

	extends: [
		'airbnb-base',
		'prettier'
	],

	// Adicione o plugins logo abaixo do extends 

	plugins: ['prettier']

	// Dentro de rules adicone:

	rules: {
		"prettier/prettier": "error"
	}
	```

	- No padrão Airbnb não é permitido usar aspas duplas, porém o prettier por padrão utiliza aspas duplas, então é necessário configurar sobrescrever essas regras para ser utilizado apenas aspas simples. 

		- 1° Crie um arquivo **.prettierrc**

		-  2° Adicione os códigos abaixo.

	```
	{
		"singleQuote": true,
		"trailingComma": "es5"
	}
	```	
<hr>

 #### Plugins

- Eslint

- EditorConfig for vs Code, assim que este plugin for instalado:
	
	- 1° Clique com o botão direito na raiz do projeto e selecione **generate .editorconfig**
	
	- 2° Dentro deste arquivo, cole o seguinte código.

Garante que os editores de texto serão configurados da mesma forma  

```
root = true
[*]

indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true		
```
<hr>

 #### <a name="clonando">Configurando VScode</a>
	
- 1° Aperte  **ctrl + shift + o** e pesquise por **>json**.
	- Abra o **Preferences: Open Settings** e adicione este código.

    
```
"editor.rulers": [
	80,
	120
],
"eslint.autoFixOnSave": true,
"editor.formatOnSave": false,
"eslint.validate": [
	{
		"language": "javascript",
		"autoFix": true
	},
	{
		"language": "javascriptreact",
		"autoFix": true
	},
	{
		"language": "typescript",
		"autoFix": true
	},
	{
		"language": "typescriptreact",
		"autoFix": true
	}
]
```	

<hr>

- #### Configurando o Eslint
	- 1° Digite o comando no terminal
	
		`` yarn eslint --init ``
	
	- 2 ° Siga marcando ás seguintes alternativas:
	
		- To check syntax, find problems, and enforce code style
	
	- 2.1 Está opção varia de acordo com o padrão que estamos utilizando, como vamos utilizar o **sucrase**, marcamos a opção abaixo
		- Javascript modules (import/export)
		- None of these
		- Does your project use Typescript (Y/n) ? 
		
			 **R:** N
			 
	- 2.2 Nesta opção utilize o espaço para desmarcar e marcar apenas a opção **Node**.
		- Where does your code run ?
		- Use a popular style guide ?
				
			 **R:** Airbnb
		- Javascript 
		- Would you like to install them now with npm (Y/n)?
		
			**R:**  Y

<hr>

#### Testando se deu tudo certo:

- Abra o arquivo teste.js, tente salvar o aquivo, caso a auto indentação tenha funcionado, supimpa.
-  Em caso de erro tente repetir o passo a passo ou fechar e abrir o vscode. 

#### Identando todos os arquivos de uma única vez:

	yarn eslint --fix pastaDesejada --ext .js

<hr>

### Autor
   
| [<img src="https://avatars2.githubusercontent.com/u/57951744?s=180&v=4"><br><sub>@devcarloshenrique</sub>](https://github.com/devcarloshenrique) |
| :---: |
