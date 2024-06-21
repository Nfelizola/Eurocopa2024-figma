// variaveis globais - carga de todas as selecoes
// primeiro teste apenas grupo A
// mas dveremos cadastrar todas as selecoes conforme exemplo...
let times = [
    { nome: "Alemanha", ranking: 1647.52, forca: 0, grupo: "A" },
    { nome: "Escocia", ranking: 1461.55, forca: 0, grupo: "A" },
    { nome: "Hungria", ranking: 1537.65, forca: 0, grupo: "A" },
    { nome: "suiça", ranking: 1593.49,forca: 0, grupo: "A" },

    { nome: "Espanha", ranking: 1715.22, forca: 0, grupo: "B" },
    { nome: "Croácia", ranking: 1704.23, forca: 0, grupo: "B" },
    { nome: "Itália", ranking: 1713.66, forca: 0, grupo: "B" },
    { nome: "Albânia", ranking: 1351.53,forca: 0, grupo: "A" },

    { nome: "Eslovênia", ranking: 1427.84, forca: 0, grupo: "C" },
    { nome: "Dinamarca", ranking: 1602.72, forca: 0, grupo: "C" },
    { nome: "Sérvia", ranking: 1496.53, forca: 0, grupo: "C" },
    { nome: "Inglaterra", ranking: 1794.01,forca: 0, grupo: "C" },

    { nome: "Países Baixos", ranking: 1731.13, forca: 0, grupo: "D" },
    { nome: "França", ranking: 1840.59, forca: 0, grupo: "D" },
    { nome: "Polônia", ranking: 1534.66, forca: 0, grupo: "D" },
    { nome: "Áustria", ranking: 1546.12,forca: 0, grupo: "D" },

    { nome: "Romênia", ranking: 1433.71, forca: 0, grupo: "E" },
    { nome: "Bélgica", ranking: 1795.23, forca: 0, grupo: "E" },
    { nome: "Eslováquia", ranking: 1427.84, forca: 0, grupo: "E" },
    { nome: "Ucrânia", ranking: 1561.95,forca: 0, grupo: "E" },

    { nome: "Portugal", ranking: 17433.71, forca: 0, grupo: "F" },
    { nome: "Chéquia", ranking: 1482.12, forca: 0, grupo: "F" },
    { nome: "Geórgia", ranking: 1287.43, forca: 0, grupo: "F" },
    { nome: "Turquia", ranking: 1457.92,forca: 0, grupo: "F" },
    
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
        // formula simplificada, menos sorte e mais ranking
     resultadoa = (times[a].forca*D(6))+(D(6)*D(2));
    resultadob = (times[b].forca*D(6))+(D(6)*D(2));
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

