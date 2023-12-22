
import Link from 'next/link';
import Catalog from './products/catalog';
const Products = ({ items }) => {
    console.log(items);
    return (
        <>
            <Catalog/>
            <main>
                {items.map((item) => (
                    <div className="item" key={item.id}>
                        <Link href={`/products/${item.id}`}>
                            <div className="item-img">
                                <img src={item.img[0]} alt="" />
                            </div>
                            <div className="item-info">
                                <h4>{item.price}₽</h4>
                                <p>{item.name}</p>
                                <button className="add-item">
                                    <div className="buy-item">Купить</div>
                                </button>
                            </div>
                        </Link>
                    </div>
                ))}
            </main>
        </>
    );
};

export default Products;
