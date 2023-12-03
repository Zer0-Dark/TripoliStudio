import React from "react";
import Card from "./Card";
function Section(props) {
    let [seeMore, setSeeMore] = React.useState(true);
    let cards = props.data.map(ele => (
        <Card
            name={ele.name}
            imgs={ele.imgs}
            artist={ele.artist}
            code={ele.code}
            prices={ele.prices}
            sizes={ele.sizes}
            id={ele.id}
            desc={ele.desc}
        ></Card>
    ))

    let [count, setCount] = React.useState(8)
    let [shown, setShown] = React.useState(cards.slice(0, 3));
    function addMore() {
        // setSeeMore(false)
        setCount(count => count + 5)
        setShown(cards.slice(0, count))
        if (count >= cards.length) {
            setSeeMore(false)
        }
    }

    function seeLess() {
        setSeeMore(true)
        setShown(cards.slice(0, 3))
        setCount(8)
    }


    return (
        <div className="section">
            <h1 className="section-head">{props.name}</h1>
            <p className="section-description">{props.description}</p>
            <div className="cards">
                {shown}
            </div>
            
            {seeMore && <button className="section-seemore" onClick={addMore}>See More{<p className="shown-cards">{shown.length}/{cards.length}</p>}</button>}
            {!seeMore && <button className="section-seemore" onClick={seeLess}>See Less<p className="shown-cards">{shown.length}/{cards.length}</p></button>}
            
        </div>

    )
}

export default Section;