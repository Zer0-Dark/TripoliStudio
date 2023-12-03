import React from "react";
import x from "../imgs/x.png"
import facebook from "../imgs/facebookcolored.png"
import instagram from "../imgs/Instagram_icon.png"
import logo from "../imgs/nav-logo.png"
function FlowButton() {
    let [showOrder, setShowOrder] = React.useState({display:"none"})

    function show(){
        showOrder.display === "none" ? setShowOrder({display:"block"}) : setShowOrder({display:"none"}); 
    }

    return (
        <>
            <button onClick={show} className="flow-button">Order Now</button>
            <div className="flow-order" style={showOrder} >
                <div className="order">
                    <img src={x} alt="close" id="x" onClick={show}></img>
                    <h1>Make Order</h1>
                    <p>Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                        Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan</p>
                    <div className="order-social-icons">
                        <a href="https://instagram.com/tripolistudio?igshid=YmMyMTA2M2Y="><img src={instagram} alt="instagram"></img></a>
                        <a href="https://www.facebook.com/profile.php?id=100090567190162&mibextid=ZbWKwL"><img src={facebook} alt="facebook"></img></a>
                    </div>
                    <img src={logo} alt="logo" id="order-logo"></img>
                </div>
            </div>

        </>
    )
}

export default FlowButton;