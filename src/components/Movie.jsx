function Movie(props){
    const {
        Title: title,
        Year: year,
        imbdID: id,
        Type: type,
        Poster: poster
    } = props

    return(
        <div id={id} className="card movie">    
            <div className="card-image">
                <img src={poster} alt='image' />
                <span className="card-title">{title}</span>
            </div>
            <div className="card-content">
                <p>{year} {type}</p>
            </div>
        </div>
    )
}
export {Movie}