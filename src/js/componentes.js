
import '../css/componentes.css';

export  const saludar = (nombre) => {
        console.log('creando etiqueta H1, probando si funciona');
        const h1 = document.createElement('h1');
        h1.innerText = `Hola ${nombre}`;
        document.body.append(h1);
}