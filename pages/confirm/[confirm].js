import { useRouter } from "next/router"
import Points from "../products/points";
import { useState } from "react";

export default function(){
    const { query } = useRouter();
    const [price, setPrice] = useState(query.ConfirmPrice || null);

  const handlePayment = () => {
    console.log('payment');
    
    console.log('Updated Price:', `${price !== null ? price : query.ConfirmPrice}`);
  };
    const imageUrls = Array.isArray(query.img) ? query.img : [];

    return(
        <>
        <div className="confirm-item">
            <div className="images-slider-wrapper">
                <div className="images-slider-images">
                {imageUrls.map((img, id) => (
                    <div className="images-slider-image-item" key={id}>
                        <div className="image-item-wrapper">
                        <img src={img} alt={`photo-${id}`} />
                        </div>
                    </div>
                    ))}
                </div>
        </div>
       <div className="bg-full-item-name">
            <div className="confirm-item-name">{query.name}
                <span className="confirm-item-size" > размер {query.ConfirmSize} EU</span>
            </div>
        </div>
        <div className="item-order-info">
            <div className="confirm-item-price">{price !== null ? price : query.ConfirmPrice} ₽</div>
            <div className="public-oferta">
              <p className="public-ofert-text">Оплачивая заказ, вы соглашаетесь с условиями <a className="public-oferta-link">публичной оферты</a></p>
            </div>
            </div>
            <Points price={query.ConfirmPrice} setParentPrice={setPrice}/>
            <div className="main-button">
              <button onClick={handlePayment}>Купить за {price !== null ? price : query.ConfirmPrice} ₽</button>
          </div>
        </div>
        </>
    )
   
}