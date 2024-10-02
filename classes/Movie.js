// import the Media class:
const Media = require('./Media')
// create your Movie class:
class Movie extends Media{
    constructor(title,year,genre,director,duration,rating){
        super(title,year,genre)
        this.director=director
        this.duration=duration
        this.rating=rating
        
    }

    summary(){
        return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`
    }

    static longestMovie(movies) {
        
        let longestmovies = movies[0];
        for (let i = 1; i < movies.length; i++) {
            if (movies[i].duration > longestmovies.duration) {
                longestmovies = movies[i]; 
            }
        }
    
        return longestmovies; // Return the book with the highest rating
    }
}
// don't change below
module.exports = Movie;