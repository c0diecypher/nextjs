
import Link from "next/link";
import { useEffect, useState } from "react";


export default function({items}){
  const [itemList, setItemList] = useState(items);
  const [searchTerm, setSearchTerm] = useState("");
  const filterItem = (searchText, listOfItems) => {
    if (!searchText) {
      return listOfItems;
    }
    return listOfItems.filter(({ name }) =>
      name.toLowerCase().includes(searchText.toLowerCase())
    );
  };
  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredItem = filterItem(searchTerm, items);
      setItemList(filteredItem);
    }, 200);
    return () => clearTimeout(Debounce);
  });
    return(
        <>
      <div className="wrapper__form__container">
        <div className="wrapper__form__container_input_">
          <div className="wrapper__form__container_background_"></div>
          <div className="wrapper__form__container_icon_">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-search"
            >
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
              <path d="M21 21l-6 -6"></path>
            </svg>
          </div>
          <input
            type="text"
            enterKeyHint="search"
            placeholder="Найти"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <main>
                {itemList.map((item) => (
                    <div className="item" key={item.id}>
                        <Link href={`/products/${item.id}`}>
                            <div className="item-img">
                                <img src={item.img[0]} alt="" />
                            </div>
                            <div className="item-info">
                                <p>{item.name}</p>
                                <button className="add-item">
                                    <div className="buy-item">Смотреть подробнее</div>
                                </button>
                            </div>
                        </Link>
                    </div>
                ))}
            </main>
      </div>
        </>
    )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3001/products?_page=1&_limit=20')
  const items = await res.json()
  
  if (!items) {
      return {
      notFound: true,
      }
  }
  return {
    props: {
      items,
    },
  }
}