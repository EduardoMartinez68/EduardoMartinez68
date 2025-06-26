function load_container(file) {
    fetch(file)
        .then(res => {
            if (!res.ok) throw new Error('No se pudo cargar el archivo');
            return res.text();
        })
        .then(html => {
            document.getElementById('contenido').innerHTML = html;
        })
        .catch(err => {
            document.getElementById('contenido').innerHTML = `<p style="color:red;">Error: ${err.message}</p>`;
        });
}