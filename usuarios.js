class Usuario {
    constructor (id, name, email, phone) {
    this.id = id
    this.name = name
    this.email = email
    this.phone = phone
    }
}

class Repositorio {
    constructor () {
        this.usuarios = [] ;
    }
    
    crearUsuario (datos) => {
        if (contador < 11) {
        const nuevoUsuario = new Usuario(datos.id, datos.name, datos.email, datos.phone)
        repisitorio.usuarios.push(nuevoUsuario)
        contador ++
        }
    } else {
        alert ("No hay más usuarios")
        return
} 
}

const repositorio = new Repositorio ();

const mapear = () => {
    const contenedor = document.getElementById ("contenedor");
    
    contenedor.innerHTML = "";
        
    const arrayHtml = repositorio.usuarios.map((usuario) => {
        const div = document.createElement("div");
        const id = document.createElement("h3")
        const name = document.createElement("h2")
        const email = document.createElement("h3")
        const phone = document.createElement("h3")

        div.classList.add("usuario");
        id.innerHTML = usuario.id;
        name.innerHTML = usuario.name;
        email.innerHTML = usuario.email;
        phone.innerHTML = usuario.phone;

        div.appendChild(id)
        div.appendChild(name)
        div.appendChild(email)
        div.appendChild(phone)
        
        return div;
    })

arrayHtml.forEach (elemento => contenedor.appendChild())
    
    }  

const agregarUsuario = () => {
    $.get(`https://jsonplaceholder.typicode.com/user/${contador}`), (datos) => {
            
            repositorio.crearUsuario(datos);
    }
}   
    const boton = document.getElementById("boton");
    let contador = 1;
    boton.addEventListener("click", agregarUsuario);