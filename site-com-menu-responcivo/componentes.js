class ComponetMenu extends HTMLElement{
   constructor(){
    super()
    this.shadow = this.attachShadow({mode: 'open'})
   }

   connectedCallback(){
    const  template = `
        <style>
          #menu{
            background-color: #3CB371;
            width:auto;
            height: 70px;
            max-width: 1920px;
            text-align: center;
            padding-top:20px;
          }
          #menu ul{
            list-style: none;
          }
          #menu ul li{
            display: inline;
            margin-right:10px;
            padding:15px;
            background-color: aliceblue;
          }
          #menu a{
            text-decoration: none;
            color: black;
          }
          @media screen and (max-width: 1080px){
            #menu{
              background-color: #3CB371;
              width:auto;
              height: auto;
              max-width: 1080px;
              text-align: center;
              font-size: 50px;
              padding: 5px;
            }
            #menu ul{
              list-style: none;
              height: auto;
            }
            #menu ul li{
              display: block;
              margin-right:10px;
              padding:15px;
            }
            #menu a{
              text-decoration: none;
              color: black;
            }
          }
        </style>

        <slot>
          <nav id="menu">
            <ul type="square">
              <a href="pgHTML.html" title="HTML"><li>HTML</li></a>
              <a href="../css/pgCSS.html" title="CSS"><li>CSS</li></a>
              <a href="../javaScript/pgJavaScript.html" title="JavaScript"><li>JavaScript</li></a>
              <a href="../index.html" title="Pagina inicial"><li>Início</li></a>
              <a href="../pgGithub.html" title="Pagina do GitHub"><li>GitHub</li></a>
              <a href="../pgRegrasImg.html" title="Pagina de regras de imagens"><li>Regras de Imagens</li></a>
            </ul>
          </nav>
        </slot>
    `  
    this.shadow.innerHTML = template
   }
}
class ComponetMenuInicio extends HTMLElement{
   constructor(){
    super()
    this.shadow = this.attachShadow({mode: 'open'})
   }

   connectedCallback(){
    const  template = `
        <style>
          #menu{
            background-color: #3CB371;
            width:auto;
            height: 70px;
            max-width: 1920px;
            text-align: center;
            padding-top:20px;
          }
          #menu ul{
            list-style: none;
          }
          #menu ul li{
            display: inline;
            margin-right:10px;
            padding:15px;
            background-color: aliceblue;
          }
          #menu a{
            text-decoration: none;
            color: black;
          }
          @media screen and (max-width: 1080px){
            #menu{
              background-color: #3CB371;
              width:auto;
              height: auto;
              max-width: 1080px;
              text-align: center;
              font-size: 50px;
              padding: 5px;
            }
            #menu ul{
              list-style: none;
              height: auto;
            }
            #menu ul li{
              display: block;
              margin-right:10px;
              padding:15px;
            }
            #menu a{
              text-decoration: none;
              color: black;
            }
          }
        </style>

        <slot>
          <nav id="menu">
            <ul type="square">
              <a href="html/pgHTML.html" title="HTML"><li>HTML</li></a>
              <a href="css/pgCSS.html" title="CSS"><li>CSS</li></a>
              <a href="javaScript/pgJavaScript.html" title="JavaScript"><li>JavaScript</li></a>
              <a href="index.html" title="Pagina inicial"><li>Início</li></a>
              <a href="pgGithub.html" title="Pagina do GitHub"><li>GitHub</li></a>
              <a href="pgRegrasImg.html" title="Pagina de regras de imagens"><li>Regras de Imagens</li></a>
            </ul>
          </nav>
        </slot>
    `  
    this.shadow.innerHTML = template
   }
}

customElements.define('app-menu', ComponetMenu)

customElements.define('app-menu-inicio',ComponetMenuInicio)