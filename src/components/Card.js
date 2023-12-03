import React from "react";
import FlowCard from "./FlowCard";


function Card(props) {
    // console.log(props)
    let [showProduct,setShowProduct] = React.useState(false)

    function show(){
        setShowProduct(prev => !prev)
    }
    return (
        <>
            <div className="card" onClick={show}>
                <img src={props.imgs.img1} alt={props.name}></img>
                <p className="price">{props.prices.price1} LYD</p>
                <div className="extra-card">
                    <h1>{props.name}</h1>
                    <div className="card-info">
                        <p>Artist: <span>{props.artist}</span></p>
                        <p>Code: <span>{props.code}</span></p>
                        <p>Size: <span>{props.sizes.size1}</span></p>
                    </div>
                </div>
            </div>
            { showProduct && <FlowCard data={props} show={show}/>}
        </>
    )
}

export default Card;