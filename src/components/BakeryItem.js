// TODO: create a component that displays a single bakery item

//props is one big object that we can pass in
//instead of just writing props, can just pass in {name, price}
export default function BakeryItem(props) {
    //want to pass in bakery item names and other details, use props

    //this is an extra step, can just copy the commands "props.name" into the curly braces 
    const name = props.name;
    const price = props.price;
    const description = props.description;
    const image = props.image;
    const handleClick = props.handleClick;
    //method 1

    return (
        <div>
            <img src={image} />
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{price}</p>
            <button onClick={() => handleClick(name, price)}>Add to Cart</button>
        </div>
    )
}