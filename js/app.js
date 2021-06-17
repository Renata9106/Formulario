function setData (){
  let entradaName = document.getElementById('nome')
  let entradaDuracao = document.getElementById('duracao')
  let entradaInicio = document.getElementById('data-inicio')
  let entradaFim = document.getElementById('data-fim')
  let entradaDescricao = document.getElementById('descricao')



  let name = entradaName.value
  let duracao = entradaDuracao.value
  let inicio = entradaInicio.value
  let fim = entradaFim.value
  let descricao = entradaDescricao.value


  let tabela = document.getElementById("dadosTabela")

  let dataUser = [
    {name, inicio, fim, duracao, descricao },
   
  ]

  localStorage.setItem("dataUser", JSON.stringify(dataUser))

  let infoUser = JSON.parse(localStorage.getItem("dataUser"))

 for (let i = 0; i < infoUser.length; i++) {
  tabela.innerHTML += "<tr><td>" + infoUser[i].name + "</td>"
    + "<td>" + infoUser[i].inicio.replace(/(\d*)-(\d*)-(\d*).*/, '$3-$2-$1') + "</td>" 
    + "</td><td>" + infoUser[i].fim.replace(/(\d*)-(\d*)-(\d*).*/, '$3-$2-$1')  + "</td><td>"
    + infoUser[i].duracao + "</td><td>"  
    + infoUser[i].descricao + "</td></tr>"  

 }
  
}