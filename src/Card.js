
let Card = (props) => {

    let { images, title, price, description } = props.product
    return (
        <div className="card">
            <img src={images[0]} alt={"img"}/>
            <h1>Name:{title}</h1>
            <p>Price:{price}</p>
            <p>Desc:{description}</p>
        </div>
    )
}
export default Card