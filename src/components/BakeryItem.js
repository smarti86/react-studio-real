// TODO: create a component that displays a single bakery item

export default function BakeryItem(props) {
    return (
        <div className="BakeryItem">
            {props.data.name}
            {props.data.description}
            {props.data.price}
            {props.data.image}
            <button onClick={props.buttonUpdate()}> Add to Cart</button>
        </div>
    );
}




