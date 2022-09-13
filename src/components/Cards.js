import React from "react";

const Cards = (props) => {
    return (
        <div class="card-deck">
            {props.results.map((result) => (
                <div class="card" style={{width: "18rem"}}>
                    <img 
                    class="card-img-top" 
                    src={result.images.original.url} 
                    alt={result.title}/>
                    <div class="card-body">
                        <h5 class="card-title">{result.title}</h5>
                        <p class="card-text"><lorem></lorem></p>
                    </div>
                    <div class="card-footer">
                      <small class="text-muted">Year</small>
                      <button>Collect</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cards;