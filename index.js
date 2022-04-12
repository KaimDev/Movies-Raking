const apiTMDB = async() =>{

    try{
        const respuesta = await fetch(`
        https://api.themoviedb.org/3/movie/popular?api_key=9c9fa07fa60b593274dda242137b4857&language=es-MX
        `);
        
        console.log(respuesta);

        if(respuesta.status === 200){
            const datos = await respuesta.json();
            
            let peliculas = '';
            datos.results.forEach(pelicula => {
                peliculas +=`
                
                <div class="pelicula">
                    <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                    <h3 class="titulo">${pelicula.title}</h3>
                </div>
                
                
                `;
            });

            document.getElementById('contenedor').innerHTML = peliculas;
            
        }else if(respuesta.status === 401){
            console.log("key error");

        }else if(respuesta.status === 404){
            console.log("Movie unknow");
        }else{
            console.log("error desconocido");
        }


    }catch(error){
        console.log(error);
    }
}

apiTMDB();