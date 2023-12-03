import React from "react";
import x from "../imgs/x.png"

function FlowCard(props) {
    //to change the head pic
    let [headImg, setHeadImg] = React.useState(props.data.imgs.img1)
    //change the active pic
    let [ele1, setEle1] = React.useState(<img src={props.data.imgs.img1} className="active" alt="product1" onClick={(e) => changeImg(e)}></img>)
    let [ele2, setEle2] = React.useState(<img src={props.data.imgs.img2} alt="product2" onClick={(e) => changeImg(e)}></img>)
    let [ele3, setEle3] = React.useState(<img src={props.data.imgs.img3} alt="product3" onClick={(e) => changeImg(e)}></img>)

    function changeImg(e) {
        setHeadImg(e.target.src)

        setEle1(<img src={props.data.imgs.img1} alt="product1" onClick={(e) => changeImg(e)}></img>)
        setEle2(<img src={props.data.imgs.img2} alt="product2" onClick={(e) => changeImg(e)}></img>)
        setEle3(<img src={props.data.imgs.img3} alt="product3" onClick={(e) => changeImg(e)}></img>)

        if (e.target.alt === "product1") {
            setEle1(<img src={props.data.imgs.img1} alt="product1" className="active" onClick={(e) => changeImg(e)}></img>)
        } else if (e.target.alt === "product2") {
            setEle2(<img src={props.data.imgs.img2} alt="product2" className="active" onClick={(e) => changeImg(e)}></img>)
        } else {
            setEle3(<img src={props.data.imgs.img3} alt="product3" className="active" onClick={(e) => changeImg(e)}></img>)

        }
    }


    //change the size with  the price
    let [testClass1, setTestClass1] = React.useState("active")
    let [testClass2, setTestClass2] = React.useState("")
    let [testClass3, setTestClass3] = React.useState("")
    let [price, setPrice] = React.useState(props.data.prices.price1)
    function changeSize(e) {
        setTestClass1("")
        setTestClass2("")
        setTestClass3("")
        if(e.target.id === "size1"){
            setTestClass1("active")
            setPrice(props.data.prices.price1)
        }else if(e.target.id === "size2"){
            setTestClass2("active")
            setPrice(props.data.prices.price2)
        }else{
            setTestClass3("active")
            setPrice(props.data.prices.price3)
        }  
    }








    return (
        <div className="overlay">
            <div className="product">
                <img src={x} alt="x" className="x" onClick={props.show}></img>
                <div className="product-imgs">
                    <img src={headImg} alt="product1" className="head-product-img"></img>
                    <div className="small-imgs">
                        {ele1}
                        {props.data.imgs.img2 && ele2}
                        {props.data.imgs.img3 && ele3}

                    </div>
                </div>
                <div className="product-info">
                    <h1>{props.data.name}</h1>
                    <p className="product-desc">{props.data.desc}</p>
                    <div className="code-artist">
                        <p>Code:<span>{props.data.code}</span></p>
                        <p>Artist:<span>{props.data.artist}</span></p>
                    </div>
                    <div className="sizes">
                        <button className={testClass1} id="size1" onClick={(e) => { changeSize(e) }} >Size:{props.data.sizes.size1}</button>
                        {props.data.prices.price2 && <button className={testClass2} id="size2" onClick={(e) => { changeSize(e) }} >Size:{props.data.sizes.size2} </button>}
                        {props.data.prices.price3 && <button className={testClass3} id="size3" onClick={(e) => { changeSize(e) }} >Size:{props.data.sizes.size3} </button>}
                    </div>
                    <div className="product-price">
                        <p>Price:{price}LYD</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlowCard;