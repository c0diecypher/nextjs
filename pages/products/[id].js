import Link from "next/link";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
export default function ({item}) {
    
    const [activeSize, setActiveSize] = useState(null);
  const [activePrice, setActivePrice] = useState(null);

  const findSizeByPrice = (price) => {
    return Object.keys(item.size).find((size) => item.size[size] === price);
  };

  useEffect(() => {
    const setInitialValues = () => {
      const defaultSize = findSizeByPrice(item.price);

      if (defaultSize) {
        setActiveSize(defaultSize);
        setActivePrice(item.price);
      } else {
        const firstSize = Object.keys(item.size)[0];
        setActiveSize(firstSize);
        setActivePrice(item.size[firstSize]);
      }
    };

    setInitialValues();
  }, [item.size, item.price]);

  const handleSizeClick = (size, price) => {
    setActiveSize(size);
    setActivePrice(price);
    item.price = price;
  };
return (
    <>
      <div className="full-item" >
       <div className="images-slider-wrapper">
        <div className="images-slider-images">
        {item.img.map((img, id) => (
              <div className="images-slider-image-item" key={id}>
                <div className="image-item-wrapper">
                  <img src={img} alt={`photo-${id}`} />
                </div>
              </div>
            ))}
        </div>
       </div>
       <div className="bg-full-item-name">
        <div className="full-item-name">{item.name}
        </div>
        </div>
        <div className="item-order-info">
          <p className="full-item-price">{item.price}₽</p>
          <hr/>
          <div className="size_box">
            {Object.entries(item.size).map(([size, price]) => (
              <button
                key={size}
                className={`size_button ${activeSize === size ? "active" : ""}`}
                onClick={() => handleSizeClick(size, price)}
              >
                <div className="Story-size-content">
                  <div className="size-nubmer">{size}</div>
                  <div className="size-price">{price}₽</div>
                </div>
              </button>
            ))}
          </div>
          
          <div className="main-button">
          <Link 
          href={{
            pathname: `/confirm/${item.id}`,
            query: { ConfirmSize: activeSize, ConfirmPrice: activePrice, name: item.name, img: item.img },
          }}
          >
            
              <button>Перейти к оплате</button>
              </Link>
          </div>
          <hr/>
        </div>
      </div>
        
    </>
 )
};

export async function getServerSideProps({params}) {
    const res = await fetch(`http://localhost:3001/products/${params.id}`)
    const item = await res.json()
    
    if (!item) {
        return {
        notFound: true,
        }
    }
    return {
      props: {
        item,
      },
    }
  }