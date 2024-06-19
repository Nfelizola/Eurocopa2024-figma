// variaveis globais - carga de todas as selecoes
// primeiro teste apenas grupo A
let times = [
    { nome: "Alemanha", ranking: 1647.52, forca: 0, grupo: "A" },
    { nome: "Escocia", ranking: 1461.55, forca: 0, grupo: "A" },
    { nome: "Hungria", ranking: 1537.65, forca: 0, grupo: "A" },
    { nome: "suiça", ranking: 1593.49,forca: 0, grupo: "A" },
];
let gola=0;
let golb=0;

// gerar força baseado no fator 553.16
times.forEach(criarforca);

// desta vez criando a função em separado para ficar mais visisvel
// se quisermos poderiamos ter usado arrows function
function criarforca(item,index) {
    item.forca= item.ranking/ 553.16;

}

// receberá a e b, sendo a e b os indices dos times na matriz de times
function partida(a,b) {
    // cada oportunidade bem aproveitada resulta em Gol
   console.clear();
   console.log("--------------simulando------------------");
    // numero de lances que haverão na partida
    let l = D(12);
    let espacomin = Math.round(90/l);
    // todo: Pensar no Balanceamento dos minutos da 
    console.log("oportunidades lances de gol na partida foram " +l);
    for (let n = 0; n<l; n++) {
        console.log("......... "+ (n+1));
        // aplicando regra definida
       // Fórmula seria:  (força * D10)+(sorte(D10)*dia(D2))
     let resultadoa, resultadob;
     resultadoa = (times[a].forca*D(10))+(D(10)*D(2));
    resultadob = (times[b].forca*D(10))+(D(10)*D(2));
    //console.log(times[a].nome + "Fez: "+ resultadoa);
    //console.log(times[b].nome + "Fez: "+resultadob);
   let mensagem="";
    if (resultadoa>resultadob){
       mensagem = times[a].nome + "  have a oportuniite and...";
        if (Math.round((resultadob/resultadoa)*100)<=70) {
            mensagem+="Gol....  aos "+espacomin*(n+1);
            gola++;
        }else{
            mensagem+="perdeu a oportunidade....  aos "+espacomin*(n+1);
        }
    }else {
        mensagem =times[b].nome + "  have a oportuniite and...";
        if (Math.round((resultadoa/resultadob)*100)<=70) {
            mensagem+="Gol.... aos "+espacomin*(n+1);
            golb++;
        }else{
            mensagem+="perdeu a oportunidade.... aos "+espacomin*(n+1);
        }
    }
    console.log("Olho no Lance: "+mensagem);
    }
         
  console.log("Placar Final ");
  console.log(times[a].nome +" "+gola+" X "+golb+" "+times[b].nome);
  gola=0;
  golb=0;
  
};

// rolar dados
function D(faces){
    dado =  Math.ceil(Math.random()*faces);
    //console.log ("D("+faces+") rolou um ==>"+ dado);
    return dado; 
}

