class Film {
    constructor(title, director) {
        this.title = title
        this.director = director
        // this.category = category
        // this.releaseDate = releaseDate
        // this.creationDate = Date.now()
        // this.validateReleaseDate()
    }

    // validateReleaseDate() {
    //     const dateNow = new Date()
    //     const yearNow = dateNow.getFullYear()
    //     if (this.releaseDate > yearNow) {
    //         console.log("Não foi possível cadastrar, pois a data de lançamento é maior que o ano atual.")
    //     }
    // }
}

function createFilm(){
    // const titleImput = document.getElementById("titulo")
    // const title = titleImput.value
    
    // const directorImput = document.getElementById("diretor")
    // const director = directorImput.value

    // const categoryImput = document.getElementById("categoria")
    // const category = categoryImput.value

    // const releaseDateimput = document.getElementById("dataDeLancamento")
    // const releaseDate = releaseDateimput.value

    // console.log(title)
    // console.log(director)
    // console.log(category)
    // console.log(relaseDate)
    const film = new Film("OLA", 1)
    const film2 = film
    console.log(film)
    console.log(film2)
    
    film.title = "OLA EDITADO"
    console.log(film)
    console.log(film2)
    
    // console.log(film === film2)
}

