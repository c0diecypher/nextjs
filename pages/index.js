import Products from './products';
import Header from './customer/header';
import SearchTab from './search/searchTab';
import Stories from './stories/stories';
import PointsBanner from './points/pointsBanner'
const index = ({items}) => {

    return (
        <>
        <Header/>
        <SearchTab items={items}/>
        <Stories/>
        <PointsBanner/>
        <Products items={items}/>
        
        </>
    );
};

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
export default index;

