function sendAddress() {
  const CEP = document.getElementById("cep").value;

  fetch("https://api.postmon.com.br/v1/cep/" + CEP)
    .then(function(infos) {
      return infos.json();
    })
    .then(function(infosAddress) {
      const ENDERECO = `${infosAddress.logradouro}, 
        ${infosAddress.bairro}, 
        ${infosAddress.cidade},
        ${infosAddress.estado}`;

      console.log(ENDERECO);

      document.getElementById("received-address").innerHTML = ENDERECO;
    });
}
