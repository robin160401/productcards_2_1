import ProductCard from "./ProductCard";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.avif";
import img3 from "../assets/img3.webp";

function RenderCards(){
    const products = [
        {
            img: img1,
            name: "Cocooil",
            price: 30,
        },
        {
            img: img2,
            name: "Suncream",
            price: 15,
        },
        {
            img: img3,
            name: "Aloe Vera Gel",
            price: 12.99,
        }
    ]
    return (
        <div className="flex">
            {products.map((product) => (
                <ProductCard
                key={product.name}
                img={product.img}
                name={product.name}
                price={"$" + product.price}
                />
            ))}
        </div>
        
    )
}

export default RenderCards;