import React from "react";
import Loader from "../companents/Loader";
import Movies from "../companents/Movies";
export default class  Main extends React.Component {
    state = {
        movies : [],
        title: "avengers",
        type: "all",
        loading: true
    }

    componentDidMount () {
        fetch("https://www.omdbapi.com/?apikey=a75504ec&s=iron")
        .then(res => res.json())
        .then(data => this.setState({movies:data.Search, loading: false}))
    }

    handleTitle = (e) => {
        this.setState({title: e.target.value})
    }

    filteredFetching = (title, type = "movie") => {
        this.setState({ loading: true})
        fetch(`https://www.omdbapi.com/?apikey=a75504ec&s=${title}&type=${type === "all" ? "" : type}`)
        .then(res => res.json())
        .then(data => this.setState({movies:data.Search, loading: false}))
    }

    handleClick = (e) => {
        if(e.keyCode === 13) {
            this.filteredFetching(this.state.title, )
        }
    }

    render() {
       const {movies, loading,title, type} = this.state
       return (
        
        <main className="main">
            {
                loading ? <Loader/>
                : 
                <>
                    <section className=" container">
                        <div className="row container">
                            <div className="input-field col s4">
                                <input 
                                placeholder="Placeholder" 
                                type="text" className="Search filim" 
                                style={{marginBottom:"0"}}
                                value= {title}
                                onChange ={this.handleTitle}
                                onKeyDown = {this.handleClick}
                                />                                
                            </div>

                            <div className="input-field col s2"> 
                                <button 
                                className="btn waves-effect waves-light" 
                                type="submit" 
                                name="action" 
                                style={{height:"45px", width:"200px", borderRadius: "20px"}}
                                onClick = {() => this.filteredFetching(title, type)}
                                >
                                    Send
                                </button>
                            </div>

                            <div className="input-field col s6" > 
                               <div className="type-content" style={{height:"45px", display: "flex", alignItems: "center",justifyContent: "center"}}>
                                    <label className="type-radio">
                                        <input 
                                        className="with-gap " 
                                        name="group3" 
                                        type="radio"
                                        data-type="all"
                                        checked  = {type === "all"}
                                        onChange={e => this.setState({type:e.target.dataset.type})}/>
                                        <span>All</span>
                                    </label>

                                    <label className="type-radio">
                                        <input 
                                        className="with-gap" 
                                        name="group3" 
                                        type="radio"
                                        data-type="movie"
                                        checked  = {type === "movie"}
                                        onChange={e => this.setState({type:e.target.dataset.type})}
                                        />
                                        <span>Movies</span>
                                    </label>

                                    <label className="type-radio">
                                    <input 
                                        className="with-gap" 
                                        name="group3" 
                                        type="radio"
                                        data-type="series"
                                        checked  = {type === "series"}
                                        onChange={e => this.setState({type:e.target.dataset.type})}
                                        />
                                        <span>Series</span>
                                    </label>
                               </div>
                            </div>
                        </div>
                    </section>

                    <section className="movies">
                        <Movies movies = {movies}/>
                    </section>
                </>
                 
            }

               
         
        </main>
    );
   }
}
