const movies = [
    { title: "The Shawshank Redemption", genre: "Drama" },
    { title: "The Godfather", genre: "Crime" },
    { title: "The Godfather: Part II", genre: "Crime" },
    { title: "The Dark Knight", genre: "Action" },
    { title: "12 Angry Men", genre: "Drama" },
    { title: "Schindler's List", genre: "Drama" },
    { title: "The Lord of the Rings: The Return of the King", genre: "Adventure" },
    { title: "Pulp Fiction", genre: "Crime" },
    { title: "The Good, the Bad and the Ugly", genre: "Western" },
    { title: "Fight Club", genre: "Drama" },
    { title: "Forrest Gump", genre: "Drama" },
    { title: "Inception", genre: "Action" },
    { title: "The Lord of the Rings: The Fellowship of the Ring", genre: "Adventure" },
    { title: "Star Wars: Episode V - The Empire Strikes Back", genre: "Action" },
    { title: "The Lord of the Rings: The Two Towers", genre: "Adventure" },
    { title: "The Matrix", genre: "Action" },
    { title: "Goodfellas", genre: "Crime" },
    { title: "One Flew Over the Cuckoo's Nest", genre: "Drama" },
    { title: "Seven Samurai", genre: "Adventure" },
    { title: "Se7en", genre: "Crime" },
    { title: "City of God", genre: "Crime" },
    { title: "The Silence of the Lambs", genre: "Thriller" },
    { title: "It's a Wonderful Life", genre: "Drama" },
    { title: "Life is Beautiful", genre: "Comedy" },
    { title: "The Usual Suspects", genre: "Crime" },
    { title: "Léon: The Professional", genre: "Action" },
    { title: "Spirited Away", genre: "Animation" },
    { title: "Saving Private Ryan", genre: "Drama" },
    { title: "Interstellar", genre: "Adventure" },
    { title: "The Green Mile", genre: "Drama" },
    { title: "The Prestige", genre: "Drama" },
    { title: "The Intouchables", genre: "Comedy" },
    { title: "The Lion King", genre: "Animation" },
    { title: "The Pianist", genre: "Drama" },
    { title: "The Departed", genre: "Crime" },
    { title: "Whiplash", genre: "Drama" },
    { title: "Gladiator", genre: "Action" }
]

let titleEle = document.getElementById("title")
let genreEle = document.getElementById("genre")
let buttonEle = document.getElementById("search")
let resultEle = document.getElementById("results")
let countofGenresEl = document.getElementById("countOfGenres")
let sortEle = document.getElementById("sortBy")

let searchResults;
buttonEle.onclick = function () {
    console.log("clicked")
    console.log(sortEle.value)

    if (titleEle.value !== "" || genreEle.value !== "") {
        if (sortEle.value === "title") {
            searchResults = searchByTitle(titleEle.value)
        } else if (sortEle.value === "genre") {
            searchResults = searchByGenre(genreEle.value)
        } else if (sortEle.value === "titleAndGenre") {
            searchResults = searchByTitleAndGenre(titleEle.value, genreEle.value)
        }
    }
    displayResults(searchResults)
}







const searchByTitle = (Title) => {
    // for(let i of movies){
    //     if(i.title.includes(ti)){
    //         console.log(i)
    //     }
    // }
    return movies.filter(mov => mov.title.toLocaleLowerCase().includes(Title.toLocaleLowerCase().trim()))
}

//   console.log(searchByTitle("The Lord"))
const searchByGenre = (Genre) => {
    return movies.filter(mov => mov.genre.toLocaleLowerCase().includes(Genre.toLocaleLowerCase().trim()))
}

const searchByTitleAndGenre = (title, genre) => {
    return movies.filter(mov =>
        mov.title.toLocaleLowerCase().includes(title.toLocaleLowerCase().trim()) &&
        mov.genre.toLocaleLowerCase().includes(genre.toLocaleLowerCase().trim()))
}

let dramaResult = searchByGenre("Drama")
//   console.log(dramaResult)
const displayResults = (moviess) => {
    resultEle.innerHTML = ""
    countofGenresEl.innerHTML = ""
    if(titleEle.value === "" && genreEle.value === ""){
        resultEle.innerHTML = `<p> Please Enter the Fields to search </p>`
    }
    if (moviess.length > 0) {
        moviess.map(ele => {
            resultEle.innerHTML += `
                <li>${ele.title} (${ele.genre}) </li>
                `
        })
        countByGenre(moviess)
    } else {
        resultEle.innerHTML = `<p> No Results Found...! </p>`
    }


}
function sortByTitle() {
    const sortedMovies = searchResults.sort((a, b) =>
        a.title.localeCompare(b.title)
    )
    displayResults(sortedMovies)
}
function sortByGenre() {
    const sortedMovies = searchResults.sort((a, b) =>
        a.genre.localeCompare(b.genre)
    )
    displayResults(sortedMovies)
}

function countByGenre(list) {
    let countMap = new Map
    countofGenresEl.innerHTML = ""
    list.map(item => {
        if (countMap.has(item.genre)) {
            countMap.set(item.genre, countMap.get(item.genre) + 1)
        } else {
            countMap.set(item.genre, 1)
        }

    })
    console.log(countMap)
    for (let i of countMap) {
        console.log(i[0], i[1])
        countofGenresEl.innerHTML += `
        <li> ${i[0]} : ${i[1]} </li>
        `

    }
}