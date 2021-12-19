import React from 'react'

const NewsItem = (props) => {
        let { title, description, imgUrl, newsUrl, author, date ,source} = props
        return (
            <div className='my-3'>
                <div className="card" style={{ height: "500px", width: "22rem" }}>
                <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"90%", zIndex:"1"}}>{source}</span>
                    <img src={imgUrl ? imgUrl : "https://lh3.googleusercontent.com/zUc419_P4dEdU30h0Lrx1GBHMTW76augq07k-QCnou69dKXPH3WN3zfdbgHoU_ykgFs"} style={{ height: 260 }} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {author ? author.slice(0, 20) : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem
