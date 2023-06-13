let servicio = [
    {
        imagen: "https://epicrisis.org/wp-content/uploads/2020/01/modalidad-consulta-asistida-multiconsulta-consulta-espejo-consiste-que-hacer-epicrisis-colegio-medico-colombiano-noticias-salud-colegio-cundinamarca-federacion-medica-colombiana.jpg",
        titulo: "Consulta",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        imagen: "https://ricardojaraba.com/wp-content/uploads/2018/01/cornetes.png",
        titulo: "Radiofrecuencia de Cornetes",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        imagen: "https://raimundocantero.es/blog/wp-content/uploads/2020/06/tabique-nasal-corregir-rinoplastia-300x176.jpg",
        titulo: "Cirugia de Tabique nasal",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        imagen: "https://www.portalped.com.br/wp-content/uploads/2019/03/endoscopia-nasal.jpg",
        titulo: "Endoscopia Nasal",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        imagen: "https://otorrinoenmerida.com.mx/wp-content/uploads/2019/09/Otorrino-Pediatra-en-Merida.jpg",
        titulo: "Otorrinolaringología Pediátrica",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        imagen: "https://www.orlgroupecuador.com/wp-content/uploads/2022/03/cirugia_endoscopica_senos_paranasales.jpg",
        titulo: "Cirugia endoscópica para sinusitis",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
]

function crearCard (card){
    let itemCard = document.createElement("div");
    itemCard.innerHTML= `
    <div class="contenedor-card-servicio">
        <img class="img-servicio" src="${card.imagen}" alt="">
        <h3 class="titulo-servicio">${card.titulo}</h3>
        <p class="descripcion-servicio">${card.descripcion}</p>
    </div>
  `; 

  return itemCard;
};

const listaCard = document.querySelector('#tarjetaServicio');

servicio.forEach(function(card){
    let varServicio = crearCard(card);
    listaCard.appendChild(varServicio)


});