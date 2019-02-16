class Movie{
    constructor(id,title,poster,casts,link,genres,company,runtime,date){
        this.id = id;
        this.title = title;
        this.poster = poster;
        this.casts = casts;
        this.link =link;   
        this.runtime = runtime;     
        this.genres = genres;  
        this.company = company;  
        this.date = date;  
    }
    render(template){
        this.detailTemplate = template;
        const result = this.detailTemplate
        .replace("{{this.id}}",this.id)
        .replace("{{this.title}}",this.title)
        .replace("{{this.poster}}",`https://image.tmdb.org/t/p/w400/${this.poster}`)
        .replace("{{this.casts}}",this.casts)
        .replace("{{this.runtime}}",this.runtime)
        .replace("{{this.genres}}",this.genres)
        .replace("{{this.company}}",this.company)
        .replace("{{this.date}}",this.date)
        .replace("{{this.link}}",this.link);
        return result;
    }

}

export default Movie;