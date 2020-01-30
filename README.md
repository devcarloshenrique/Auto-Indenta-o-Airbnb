
# Prê-configurações VsCode.

Este repositório foi criado com o objetivo de registrar **ás configurações** necessárias para á auto indentação no padão Airbnb.

### Passo a passo

- #### Gerenciador de pacotes

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

- prettier e eslint | Responsável por verificar se o código segue o padrão determinado.

		
 #### Plugins
	
- EditorConfig for vs Code
- ESlint 

 #### Configurando vscode
	
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




   ### Autor
   
| [<img src="https://avatars2.githubusercontent.com/u/57951744?s=180&v=4"><br><sub>@devcarloshenrique</sub>](https://github.com/devcarloshenrique) |
| :---: |
