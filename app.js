class afaser{
    constructor(obrigacao,importancia){
        this.obrigacao=obrigacao;
        this.importancia=importancia
     }
    
}

afaseres=[]; 

function criar(){
    let nome=document.querySelector("#nome").value;
    let imp=document.querySelector("#importancia").value;
    if(nome ==="" || imp ===""){
        window.alert("Pelo menos uma aba não foi prenchida ")
        
    }else{
   
        const obg= new afaser(nome,imp);
        afaseres.push(obg);
 
        
        
        const taskList = document.querySelector("#taskList");
        const li = document.createElement("li");  // criou se uma li numa lista (neste caso), com "document.creatElement"
        li.innerHTML=`<li class="lis"> <p class="infos">${nome}</p>  <p class="infos">${imp}</p>  <button class="deleteBtn" onclick="remove('${nome}')">x</button></li>`  // é definido oque sera a li adicionada com tag e tudo 
        taskList.appendChild(li); // adicioan um item na tag html ( no caso a li )
        
        
        
        document.querySelector("#nome").value="";
        document.querySelector("#importancia").value="";
    }

    

}

function remove( nomeObj){
    
   
    for(let i=0; i< afaseres.length;i++){
        
        if(afaseres[i].obrigacao === nomeObj ){
            afaseres.splice(i,1);
            document.querySelector("#taskList").children[i].remove();// é escolhido a criança "i" e removida a "li" pela função remove(); 

            break;
        }
    }


}









