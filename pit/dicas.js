function adicionarFotosETextos() {
    // Obter valores dos campos
    const fotoInput = document.getElementById("foto");
    const textoInput = document.getElementById("texto");

    // Verificar se a entrada de texto está vazia
    if (textoInput.value.trim() === "") {
        alert("Por favor, insira um texto.");
        return;
    }

    // Criar elemento de lista
    const listItem = document.createElement("li");

    // Criar elemento de imagem
    const foto = document.createElement("img");
    foto.src = URL.createObjectURL(fotoInput.files[0]);
    foto.width = 100; // Definir largura da imagem
    foto.height = 100; // Definir altura da imagem
    listItem.appendChild(foto);

    // Adicionar texto
    const texto = document.createTextNode(textoInput.value);
    listItem.appendChild(texto);

    // Adicionar item à lista
    document.getElementById("listaFotosETextos").appendChild(listItem);

    // Limpar campos após adicionar
    fotoInput.value = "";
    textoInput.value = "";
}