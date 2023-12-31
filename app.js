//Array De Artistas
const artistas = [
  {
    nombre: "Soda Stereo",
    banda: "Soda Stereo",
    genero: "Rock",
    ultimoLanzamiento: "2007-11-27",
    album: "Me Verás Volver",
    imagen: "https://i.scdn.co/image/ab67616d0000b273e885d6895a32a612813bf6d3",
    descripcion:
      "Soda Stereo es una banda del Rock alternativo formada en Buenos Aires, Argentina en 1982 por Gustavo Cerati (voz y guitarra), Zeta Bosio (bajo) y Charly Alberti (batería),​considerada ampliamente por la crítica especializada como la banda más importante, popular e influyente del rock en español y una leyenda de la música latinoamericana.2​ Fueron el primer grupo de habla hispana en conseguir un éxito masivo en Latinoamérica y tuvieron un papel muy importante en el desarrollo y la difusión del rock latinoamericano y el rock en español durante las décadas de 1980 y 1990. Durante su carrera, fueron vanguardistas y marcaron tendencia en Latinoamérica, en la que protagonizaron diversos géneros como la música divertida de sus inicios, la new wave, el dark wave, el hard rock, el rock alternativo y el rock electrónico de sus finales.",
    img_descripcion:
      "https://upload.wikimedia.org/wikipedia/commons/6/6f/CeratiAlbertiBosio.jpg",
  },
  {
    nombre: "Los Auténticos Decadentes",
    banda: "Los Auténticos Decadentes",
    genero: "Rock/Ska",
    ultimoLanzamiento: "2019-04-26",
    album: "MTV Unplugged",
    imagen:
      "https://www.zonadeobras.com/wp-content/uploads/2018/11/autenticos-disco.jpg",
    descripcion:
      "Los Auténticos Decadentes es una banda argentina de ska y rock alternativo formada en 1986 por Cucho Parisi, Nito Montecchia y Gastón Francés Bernardou. Si bien su principal género es el ska, suele tocar una cantidad múltiple de géneros y fusionarlos, formando así un sonido único.",
    img_descripcion:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/ADecadentes.JPG/405px-ADecadentes.JPG",
  },

  {
    nombre: "Charly García",
    banda: "Solista",
    genero: "Rock",
    ultimoLanzamiento: "2017-10-27",
    album: "Random",
    imagen: "https://fotos.perfil.com/2019/10/22/charly-garcia-795233.jpg",
    descripcion:
      "Carlos Alberto García, más conocido como Charly García, es un músico, cantautor, multinstrumentista, compositor y productor discográfico argentino, considerado una de las figuras más importantes y vanguardistas de la música popular argentina y latinoamericana.",
    img_descripcion:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Charly_Garc%C3%ADa_por_Alejandro_Kuropatwa.jpg/330px-Charly_Garc%C3%ADa_por_Alejandro_Kuropatwa.jpg",
  },
  {
    nombre: "Luis Alberto Spinetta",
    banda: "Almendra",
    genero: "Rock",
    ultimoLanzamiento: "1970-12-01",
    album: "Almendra",
    imagen:
      "https://cdns-images.dzcdn.net/images/cover/bb4591a4c56f889dc093bba9512ed1eb/264x264.jpg",
    descripcion:
      "Luis Alberto Spinetta fue un cantante, guitarrista, poeta, escritor y compositor argentino, considerado uno de los más importantes y respetados músicos de Argentina, Latinoamérica y del habla hispana .",
    img_descripcion:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Spinetta_en_Expreso_Imaginario_1976.jpg/330px-Spinetta_en_Expreso_Imaginario_1976.jpg",
  },
  {
    nombre: "Gustavo Cerati",
    banda: "Soda Stereo",
    genero: "Rock",
    ultimoLanzamiento: "1995-11-07",
    album: "Sueño Stereo",
    imagen:
      "https://assets.megamediaradios.fm/sites/2/2021/08/siempre-es-hoy-2-1024x1024.jpg",
  },
  {
    nombre: "Fito Páez",
    banda: "Solista",
    genero: "Rock",
    ultimoLanzamiento: "2021-11-12",
    album: "La conquista del espacio",
    imagen:
      "https://diariohoynet.nyc3.cdn.digitaloceanspaces.com/adjuntos/galerias/000/480/0000480752.jpg",
  },
  {
    nombre: "Andrés Calamaro",
    banda: "Los Rodríguez",
    genero: "Rock",
    ultimoLanzamiento: "2021-11-19",
    album: "Dios los cría (Edición Especial)",
    imagen:
      "https://www.calamaro.com/wp-content/uploads/2013/10/altasuciedad1997.jpg",
  },
  {
    nombre: "Shakira",
    banda: "Solista",
    genero: "Pop",
    ultimoLanzamiento: "2021-04-02",
    album: "El Dorado",
    imagen:
      "https://akamai.sscdn.co/letras/360x360/albuns/3/9/5/6/1113691626708476.jpg",
  },
  {
    nombre: "Ariana Grande",
    banda: "Solista",
    genero: "Pop",
    ultimoLanzamiento: "2020-10-30",
    album: "Positions",
    imagen: "https://i.scdn.co/image/ab67616d0000b2735ef878a782c987d38d82b605",
  },
  {
    nombre: "Dua Lipa",
    banda: "Solista",
    genero: "Pop",
    ultimoLanzamiento: "2020-03-27",
    album: "Future Nostalgia",
    imagen:
      "https://upload.wikimedia.org/wikipedia/en/2/20/Dua_Lipa_%28album%29.png",
  },
  {
    nombre: "Taylor Swift",
    banda: "Solista",
    genero: "Pop",
    ultimoLanzamiento: "2020-07-24",
    album: "Folklore",
    imagen: "https://i.scdn.co/image/ab6761610000e5eb6a224073987b930f99adc706",
  },
  {
    nombre: "Eminem",
    banda: "Solista",
    genero: "Hip Hop",
    ultimoLanzamiento: "2020-12-18",
    album: "Music To Be Murdered By - Side B",
    imagen:
      "https://cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/264x264.jpg",
  },
  {
    nombre: "Kendrick Lamar",
    banda: "Solista",
    genero: "Hip Hop",
    ultimoLanzamiento: "2017-04-14",
    album: "DAMN.",
    imagen:
      "https://indiehoy.com/wp-content/uploads/2017/05/Kendrick-Lamar-DAMN.jpeg",
  },
  {
    nombre: "Drake",
    banda: "Solista",
    genero: "Hip Hop",
    ultimoLanzamiento: "2021-09-03",
    album: "Certified Lover Boy",
    imagen:
      "https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg",
  },
  {
    nombre: "Virus",
    banda: "Virus",
    genero: "Rock",
    ultimoLanzamiento: "1998-09-03",
    album: "9",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/4/43/Relax_1984_Virus.jpg",
  },
];

//Array De Artistas
const generosMusicales = [
  { id: 1, nombre: "Rock" },
  { id: 2, nombre: "Pop" },
  { id: 3, nombre: "Electrónica" },
  { id: 4, nombre: "Hip Hop" },
  { id: 5, nombre: "Reggaetón" },
  { id: 6, nombre: "TODOS" },
  // Agrega más categorías según sea necesario
];

//Array De Usuarios
const usuarios = [
  { user: "1", pass: "1111" },
  { user: "2", pass: "2222" },
  { user: "3", pass: "3333" },
  { user: "4", pass: "4444" },
  { user: "sebastian", pass: "1234" },
];

const $ = document;

const containerArtistas = $.getElementById("artistas");
const containerGenero = $.getElementById("generoMusical");
const nav_lower_player = $.querySelector("#nav_lower_player");
const nav_aside = $.querySelector("#nav_aside");
const close_nav_player = $.querySelector("#close_nav_player");
const container_data_artista = $.querySelector("#container_data_artista");
const close_nav_aside = $.querySelector("#close_nav_aside");

// Crear un aside con los datos de la card seleccionada
// input de búsqueda rapida por Artista
// hacer un registro de usuario para que se puedean elegir favoritos
// https://icons.getbootstrap.com
// Estrella <i class="bi bi-star"></i>
// Estrella Seleccionada <i class="bi bi-star-fill"></i>

function createCard(artista) {
  // estructura card HTML
  let div = $.createElement("div");
  let pEstrella = $.createElement("i");
  let h2 = $.createElement("h2");
  let h3 = $.createElement("h3");
  let small = $.createElement("small");
  let p = $.createElement("p");
  let p_ultimoLanzamiento = $.createElement("p");
  let img = $.createElement("img");

  // agreagar estilos
  div.classList.add("card");
  pEstrella.classList.add("estrella");
  pEstrella.classList.add("bi");
  pEstrella.classList.add("bi-star");

  // contenido card
  let estrella = $.createTextNode("");
  let nombre = $.createTextNode(artista.nombre);
  let banda = $.createTextNode(artista.banda);
  let genero = $.createTextNode(artista.genero);
  let album = $.createTextNode(artista.album);
  let ultimoLanzamiento = $.createTextNode(artista.ultimoLanzamiento);

  // referenciar (atar) el contenido con su correcpondiente etiqueta html

  pEstrella.appendChild(estrella);
  h2.appendChild(nombre);
  h3.appendChild(banda);
  small.appendChild(genero);
  p.appendChild(album);
  p_ultimoLanzamiento.appendChild(ultimoLanzamiento);

  img.setAttribute("src", artista.imagen);

  div.append(pEstrella, h2, h3, small, p, p_ultimoLanzamiento, img);
  containerArtistas.appendChild(div);
}

// Carga de la "Card"
function renderedCards(array) {
  containerArtistas.innerHTML = "";
  array.forEach(function (artista) {
    createCard(artista);
  });
}

// Carga de los Botones de Géneros Musicales
function renderedCategorys() {
  for (const genero of generosMusicales) {
    containerGenero.innerHTML += `<a class='item_genero' id="genero-${genero.id}">${genero.nombre}</a>`;
  }
}

// Busca el Artista por el nombre
const findArtistabyNombre = (findArtista) => {
  return _find((artista) => artista.nombre === findArtista);
};

// Funcion que Filtra por Género
const filterCategory = (categoria) => {
  return filter((artista) => artista.genero === categoria);
};

//Funcion Botones de Categorias
const filterByCategory = () => {
  const items_genero = document.querySelectorAll(".item_genero");
  items_genero.forEach((item) => {
    item.addEventListener("click", (e) => {
      let categoria = e.target.textContent;
      if (categoria === "TODOS") {
        renderedCards(artistas);
      } else {
        let result = filterCategory(categoria);
        renderedCards(result);
      }
    });
  });
};

//Haciendo Doble clic en la "Card" reproduce con el Nav "dblclick"
const showNav = () => {
  document.addEventListener("dblclick", (evento) => {
    let nombreArtista = evento.target.parentNode.children[1];

    // ! Mejora en la busqueda y seleccion de la card con parentNode
    if (evento.target.parentNode.classList[0] === "card") {
      nav_lower_player.classList.remove("hidden");
      nav_aside.classList.remove("hidden");
      let find = findArtistabyNombre(nombreArtista.textContent);

      container_data_artista.innerHTML = `
                <img src=${find.imagen} alt=${find.nombre} style='width: 50px'>
                <div>
                    <h3>${find.nombre}</h3>
                    <h4>Album: ${find.album}</h4>
                </div>
            `;
      showAsideNav(find);
    }
  });
};

// ! function mostrar aside nav
const showAsideNav = (data) => {
  const nav_aside_song = $.querySelector("#nav_aside_song");
  const nav_aside_artist = $.querySelector("#nav_aside_artist");
  nav_aside_song.innerHTML = `<img src=${data.imagen} alt=${data.nombre}>
                                <h2>${data.album}</h2>
                                <h4>${data.genero}</h4>
                                <i class="bi bi-heart"></i>
                                `;
  nav_aside_artist.innerHTML = `
                                <img src=${data.img_descripcion} alt=${data.nombre}>
                                <p>${data.descripcion}</p>
                                `;
};

let inputArtista = document.getElementById("inputArtista");

// Agrega un evento 'input' al campo de entrada, se ejecuta con cada letra
inputArtista.addEventListener("input", function () {
  let textoBuscado = inputArtista.value.toLowerCase();

  let result = artistas.filter(function (artista) {
    return artista.nombre.toLocaleLowerCase().includes(textoBuscado);
  });

  renderedCards(result);
});

// ! function close nav player
const closeNav = (button) => {
  button.addEventListener("click", () => {
    nav_lower_player.classList.add("hidden");
    nav_aside.classList.add("hidden");
  });
};

// Login de Usuario
const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");
const btnCancelar = document.getElementById("btnCancelar");
const msgUserName = document.getElementById("msgUserName");
let verPassword = document.getElementById("verPassword");
let loginState = false;
const btnLogin = document.getElementById("btnLogin");

// Función para mostrar el formulario de inicio de sesión
function mostrarLoginForm() {
  loginForm.style.display = "block";

  if (loginState) {
    const password = document.getElementById("password");
    const username = document.getElementById("username");
    password.value = ""; //Limpio los imput, inician vacíos
    username.value = "";
    msgUserName.textContent = "";
    loginState = false;
    btnLogin.textContent = "Iniciar Sesión";
  } else {
  }
}

//Devuelve undefined si no encuentra coincidencia
function validarCredenciales(username, password) {
  return (
    usuarios.find(
      (usuario) => usuario.user === username && usuario.pass === password
    ) !== undefined
  );
}

// Función para iniciar sesión
function iniciarSesion() {
  // const password = document.formulario.pass.value;
  const password = document.getElementById("password").value;
  const username = document.getElementById("username").value;

  if (validarCredenciales(username, password)) {
    loginForm.style.display = "none";
    const mensaje = "Hola, " + username;
    msgUserName.textContent = mensaje;
    loginState = true;
    btnLogin.textContent = "Cerrar Sesión";
  } else {
    alert("Credenciales incorrectas.");
    loginState = false;
    btnLogin.textContent = "Iniciar Sesión";
  }
}

btnCancelar.addEventListener("click", function () {
  // Al cancelar Oculta el formulario
  loginForm.style.display = "none";
});

verPassword.addEventListener("click", function () {
  const tipo = document.getElementById("password");

  if (tipo.type == "password") {
    tipo.type = "text";
    verPassword.className = "bi bi-eye-fill";
  } else {
    tipo.type = "password";
    verPassword.className = "bi bi-eye-slash";
  }
});

window.addEventListener("DOMContentLoaded", () => {
  renderedCategorys();
  renderedCards(artistas);
  showNav();
  closeNav(close_nav_player);
  closeNav(close_nav_aside);
  filterByCategory();
});
