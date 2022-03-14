document.addEventListener('DOMContentLoaded', function() {
     
    
    botoes = document.querySelectorAll("button")
    var um = document.getElementById("1")
    var dois = document.getElementById("2")
    var tres = document.getElementById("3")
    var quatro = document.getElementById("4")
    var cinco = document.getElementById("5")
    var seis = document.getElementById("6")
    var sete = document.getElementById("7")
    var oito = document.getElementById("8")
    var nove = document.getElementById("9")
    var zero = document.getElementById("0")
    var del = document.getElementById("del")
    var ac = document.getElementById("ac")
    var soma = document.getElementById("soma")
    var divisao = document.getElementById("divisao")
    var multiplicao = document.getElementById("multiplicacao")
    var subtracao = document.getElementById("subtracao")
    var ponto = document.getElementById("ponto")
    var pi = document.getElementById("pi")
    var resto_da_div = document.getElementById("resto_da_div")
    var raiz_quad = document.getElementById("raiz_quad")
    var eleva_a_n = document.getElementById("eleva_a_n")
    var sen = document.getElementById("sen")
    var cos = document.getElementById("cos")
    var tg = document.getElementById("tg")
    var igual = document.getElementById("igual")
    var escrever = document.getElementById("escreveaqui")
 
    /*
    Criar um while e um contador que vai definir sistema decimal 10^contador
    e resetar quando se clicar em = ou ac .
    */
    const lista_e_devolve = (lista) => {

        var i = 0
        const lista_op = ["*","/","+","-","%","sen(","cos(","tg("]
        var apareceu = []
        const tamanho = lista.length
        var item = ""
        while( i < tamanho){
            item = lista[i]
            if ((lista_op.indexOf(item) != -1)){
                apareceu.push(item)
            }  
            i+=1
        }
        var j = 0
        var elemento = ""
        const tamanho2 = apareceu.length
        while (tamanho2>=j){
            elemento = lista[j]

            if (lista.indexOf("^") != -1){
                let indice = lista.indexOf("^")
                let resultado = lista[indice-1]** lista[indice + 1]
                console.log(resultado)
                lista[indice] =  resultado
                lista.splice(indice-1,1)
                lista.splice(indice,1)
                apareceu.shift("^")
            }
            else if (lista.indexOf("√") != -1){
                let indice = lista.indexOf("√")
                let resultado = lista[indice + 1]**0.5
                lista[indice] =  resultado
                lista.splice(indice+1,1)
                apareceu.shift("√")
            }
    
            else if (lista.indexOf("*") != -1){
                let indice = lista.indexOf("*")
                let resultado = lista[indice-1] * lista[indice + 1]
                lista[indice] =  resultado
                lista.splice(indice-1,1)
                lista.splice(indice,1)
                apareceu.shift("*")
            }
            else if (lista.indexOf("/") != -1){
                let indice = lista.indexOf("/")
                let resultado = lista[indice-1]/ lista[indice + 1]
                lista[indice] =  resultado
                lista.splice(indice-1,1)
                lista.splice(indice,1)
                apareceu.shift("/")
    
            }
            else if (lista.indexOf("+") != -1){
                let indice = lista.indexOf("+")
                let resultado = lista[indice-1]+ lista[indice + 1]
                lista[indice] =  resultado
                lista.splice(indice-1,1)
                lista.splice(indice,1)
                apareceu.shift("+")
            }
            else if (lista.indexOf("%") != -1){
                let indice = lista.indexOf("%")
                let resultado = lista[indice-1]% lista[indice + 1]
                lista[indice] =  resultado
                lista.splice(indice-1,1)
                lista.splice(indice,1)
                apareceu.shift("%")
            }
            else if (lista.indexOf("-") != -1){
                let indice = lista.indexOf("-")
                let resultado = lista[indice-1]- lista[indice + 1]
                lista[indice] =  resultado
                lista.splice(indice-1,1)
                lista.splice(indice,1)
                apareceu.shift("-")
            }
            else if (lista.indexOf("sen(") != -1){
                let indice = lista.indexOf("sen(")
                let antes = lista[indice-1]
                if (lista.indexOf(antes != -1)){
    
                }
                let resultado = Math.sin(lista[indice + 1])
                lista[indice] =  resultado
                lista.splice(indice+1,1)
                apareceu.shift("sen(")
            }
            else if (lista.indexOf("cos(") != -1){
                let indice = lista.indexOf("cos(")
                let antes = lista[indice-1]
                if (lista.indexOf(antes != -1)){
    
                }
                let resultado = Math.cos(lista[indice + 1])
                lista[indice] =  resultado
                lista.splice(indice+1,1)
                apareceu.shift("cos(")
            }
            else if (lista.indexOf("tg(") != -1){
                let indice = lista.indexOf("tg(")
                let antes = lista[indice-1]
                if (lista.indexOf(antes != -1)){
    
                }
                let resultado = Math.tan(lista[indice + 1])
                lista[indice] =  resultado
                lista.splice(indice+1,1)
                apareceu.shift("tg(")
            }
            j+=1
        }
        return lista
    
    
    }
    
    const calcula = (string)  => {  

        console.log(string)
        var lista_de_tudo = []
        var i = 0
        const lista = ["*","/","+","-","%","sen(","cos(","tg(","^","√"]
        var numero = ""
        var letra = ""
        var apareceu = []
        const tamanho = string.length-1
        while( i <= tamanho){
            letra = string.slice(i,i+1)
            if (letra =="s" || letra == "c"){
                letra = string.slice(i,i+4)
                i+=3
            }
            else if(letra =="t"){
                letra = string.slice(i,i+3)
                i+=2
            }
            if (letra =="π"){
                letra = Math.PI
            }
            if (i == tamanho) { 
                numero += letra
                inteiro = parseFloat(numero,10)
                lista_de_tudo.push(inteiro)
            }
            if (!(lista.indexOf(letra) != -1)){
                numero+=letra
            }
            else if  (lista.indexOf(letra != -1)){
                numero += letra
                inteiro = parseFloat(numero,10)
                if (!(isNaN(inteiro))){
                    lista_de_tudo.push(inteiro)
                }
                lista_de_tudo.push(letra)
                apareceu.push(letra)
                numero = ""
                letra = ""
            }
            i+=1    
        }
        
        console.log(lista_de_tudo)
        var j = 0
        var elemento = ""
        var cont = 0
        if (apareceu.indexOf("sen(") != -1 ||apareceu.indexOf("cos(") != -1 ||apareceu.indexOf("tg(") != -1 ){
             cont = 1
        }
        const tamanho2 = apareceu.length - cont
        while (tamanho2>=j){
            elemento = lista_de_tudo[j]
            
            if (lista_de_tudo.indexOf("sen(") != -1){
                let indice = lista_de_tudo.indexOf("sen(")
                let antes = lista_de_tudo[indice-1]
                let resultado
                if (lista.indexOf(antes != -1)){
                    let parte = lista_de_tudo.slice(indice,tamanho)
                    resultado = lista_e_devolve(parte)
                    lista_de_tudo[indice] =  resultado[0]
                    lista_de_tudo.splice(indice+1,tamanho)
                    apareceu.shift(parte)
    
                }
                else{
                    let resultado = Math.sin(lista_de_tudo[indice + 1])
                    lista_de_tudo[indice] =  resultado
                    lista_de_tudo.splice(indice+1,1)
                    apareceu.shift("sen(")
                }
            }
            else if (lista_de_tudo.indexOf("cos(") != -1){
                let indice = lista_de_tudo.indexOf("cos(")
                let antes = lista_de_tudo[indice-1]
                let resultado
                if (lista.indexOf(antes != -1)){
                    let parte = lista_de_tudo.slice(indice,tamanho)
                    resultado = lista_e_devolve(parte)
                    lista_de_tudo[indice] =  resultado[0]
                    lista_de_tudo.splice(indice+1,tamanho)
                    apareceu.shift(parte)
    
                }
                else{
                    let resultado = Math.cos(lista_de_tudo[indice + 1])
                    lista_de_tudo[indice] =  resultado
                    lista_de_tudo.splice(indice+1,1)
                    apareceu.shift("cos(")
                }
            }
            else if (lista_de_tudo.indexOf("tg(") != -1){
                let indice = lista_de_tudo.indexOf("tg(")
                let antes = lista_de_tudo[indice-1]
                let resultado
                if (lista.indexOf(antes != -1)){
                    let parte = lista_de_tudo.slice(indice,tamanho)
                    resultado = lista_e_devolve(parte)
                    lista_de_tudo[indice] =  resultado[0]
                    lista_de_tudo.splice(indice+1,tamanho)
                    apareceu.shift(parte)
    
                }
                else{
                    let resultado = Math.tan(lista_de_tudo[indice + 1])
                    lista_de_tudo[indice] =  resultado
                    lista_de_tudo.splice(indice+1,1)
                    apareceu.shift("tg(")
                }
            }
            else if (lista_de_tudo.indexOf("^") != -1){
                let indice = lista_de_tudo.indexOf("^")
                let resultado = lista_de_tudo[indice-1]** lista_de_tudo[indice + 1]
                lista_de_tudo[indice] =  resultado
                lista_de_tudo.splice(indice-1,1)
                lista_de_tudo.splice(indice,1)
                apareceu.shift("^")
            }
            else if (lista_de_tudo.indexOf("√") != -1){
                let indice = lista_de_tudo.indexOf("√")
                let resultado = lista_de_tudo[indice + 1]**0.5
                lista_de_tudo[indice] =  resultado
                lista_de_tudo.splice(indice+1,1)
                apareceu.shift("√")
            }
            else if (lista_de_tudo.indexOf("*") != -1){
                let indice = lista_de_tudo.indexOf("*")
                let resultado = lista_de_tudo[indice-1]* lista_de_tudo[indice + 1]
                lista_de_tudo[indice] =  resultado
                lista_de_tudo.splice(indice-1,1)
                lista_de_tudo.splice(indice,1)
                apareceu.shift("*")
            }
            else if (lista_de_tudo.indexOf("/") != -1){
                let indice = lista_de_tudo.indexOf("/")
                let resultado = lista_de_tudo[indice-1]/ lista_de_tudo[indice + 1]
                lista_de_tudo[indice] =  resultado
                lista_de_tudo.splice(indice-1,1)
                lista_de_tudo.splice(indice,1)
                apareceu.shift("/")
    
            }
            else if (lista_de_tudo.indexOf("+") != -1){
                let indice = lista_de_tudo.indexOf("+")
                let resultado = lista_de_tudo[indice-1]+ lista_de_tudo[indice + 1]
                lista_de_tudo[indice] =  resultado
                lista_de_tudo.splice(indice-1,1)
                lista_de_tudo.splice(indice,1)
                apareceu.shift("+")
            }
            else if (lista_de_tudo.indexOf("%") != -1){
                let indice = lista_de_tudo.indexOf("%")
                let resultado = lista_de_tudo[indice-1]% lista_de_tudo[indice + 1]
                lista_de_tudo[indice] =  resultado
                lista_de_tudo.splice(indice-1,1)
                lista_de_tudo.splice(indice,1)
                apareceu.shift("%")
            }
            else if (lista_de_tudo.indexOf("-") != -1){
                let indice = lista_de_tudo.indexOf("-")
                let resultado = lista_de_tudo[indice-1]- lista_de_tudo[indice + 1]
                lista_de_tudo[indice] =  resultado
                lista_de_tudo.splice(indice-1,1)
                lista_de_tudo.splice(indice,1)
                apareceu.shift("-")
            }
            j+=1
        }
        return lista_de_tudo
    }

    var array = []
    var opera = ""
    var contador = 0


   
    var tela = document.getElementById("tela")
    var contas = ""
    contador = 0
    resultado = 0
    um.addEventListener("click",function(){
        if (contador ==1){
            contas = ""
            contador = 0
        }
        contas+="1"
        tela.value= contas
        
    })
    dois.addEventListener("click",function(){
        if (contador ==1){
            contas = ""
            contador = 0
        }
        contas+="2"
        tela.value= contas
    })
    tres.addEventListener("click",function(){
        if (contador ==1){
            contas = ""
            contador = 0
        }
        contas+="3"
        tela.value= contas
    })
    quatro.addEventListener("click",function(){
        if (contador ==1){
            contas = ""
            contador = 0
        }
        contas+="4"
        tela.value= contas
    })
    cinco.addEventListener("click",function(){
        if (contador ==1){
            contas = ""
            contador = 0
        }
        contas+="5"
        tela.value= contas
    })
    seis.addEventListener("click",function(){
        if (contador ==1){
            contas = ""
            contador = 0
        }
        contas+="6"
        tela.value= contas
    })
    sete.addEventListener("click",function(){
        if (contador ==1){
            contas = ""
            contador = 0
        }
        contas+="7"
        tela.value= contas
    })
    oito.addEventListener("click",function(){
        if (contador ==1){
            contas = ""
            contador = 0
        }
        contas+="8"
        tela.value= contas
    })
    nove.addEventListener("click",function(){
        if (contador ==1){
            contas = ""
            contador = 0
        }
        contas+="9"
        tela.value= contas
    })
    zero.addEventListener("click",function(){
        if (contador ==1){
            contas = ""
            contador = 0
        }
        contas+="0"
        tela.value= contas
    })
    del.addEventListener("click",function(){
        contas = contas.slice(0,contas.length -1);
        tela.value= contas
    })
    ac.addEventListener("click",function(){ 
        contas =""
        tela.value= contas
    })
    soma.addEventListener("click",function(){
        if (contador ==1){
            contas = ""
            contador = 0
        }
        contas+="+"
        tela.value= contas
    })
    divisao.addEventListener("click",function(){
        if (contador ==1){
            contas = ""
            contador = 0
        }
        contas+="/"
        tela.value= contas
    })
    multiplicao.addEventListener("click",function(){
        if (contador ==1){
            contas = ""
            contador = 0
        }
        contas+="×"
        tela.value= contas
    })
    subtracao.addEventListener("click",function(){
        if (contador ==1){
            contas = ""
            contador = 0
        }
        contas+="-"
        tela.value= contas
    })
    ponto.addEventListener("click",function(){
        if (contador ==1){
            contas = ""
            contador = 0
        }
        contas+="."
        tela.value= contas
    })
    pi.addEventListener("click",function(){
        if (contador ==1){
            contas = ""
            contador = 0
        }
        contas+= "π"
        tela.value= contas
    })
    resto_da_div.addEventListener("click",function(){
        if (contador ==1){
            contas = ""
            contador = 0
        }
        contas+="%"
        tela.value= contas
    })
    raiz_quad.addEventListener("click",function(){
        if (contador ==1){
            contas = ""
            contador = 0
        }
        contas+="√"
        tela.value= contas
    })
    eleva_a_n.addEventListener("click",function(){
        if (contador ==1){
            contas = ""
            contador = 0
        }
        contas+="^"
        tela.value= contas
    })
    sen.addEventListener("click",function(){
        if (contador ==1){
            contas = ""
            contador = 0
        }
        contas+="sen("
        tela.value= contas
    })
    cos.addEventListener("click",function(){
        if (contador ==1){
            contas = ""
            contador = 0
            
        }
        contas+="cos("
        tela.value= contas
    })
    tg.addEventListener("click",function(){
        if (contador ==1){
            contas = ""
            contador = 0
        }
        contas+="tg("
        tela.value= contas
    })
    igual.addEventListener("click",function(){
        resultado = calcula(contas)
        if (resultado < 10**-6){
            resultado = 0
        }
        if (isNaN(resultado)){
            tela.value = "ERROR"
        }
        else{
            tela.value= resultado
            if(contas.includes("sen") || contas.includes("cos") || contas.includes("tg")){
                array.push("[" + contas + ")=" + resultado + ")]" )
                opera+= contas+ ")=" + resultado +"\n"  
            }
            else{
                array.push("[" + contas + "=" + resultado + "]")
                opera+= contas+ "=" + resultado +"\n"
            }
            escrever.value = array
        }
        contador=1
    })

})  

console.log(calcula("sen(10"))

