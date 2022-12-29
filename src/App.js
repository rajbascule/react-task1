import React,{useState} from 'react';
import './style.css';
import Header from './component/Header';
import Main from './component/Main';
import Basket from './component/Basket';
import { data } from './data';

export default function App() {
  const { products } = data;
  const [cardItems,setCardItems] = useState([]);
  
  const onAdd = (productcomponentprops) => {
    const exist  = cardItems.find((x)=> x.id === productcomponentprops.id );
    if(exist){
      const newCardItems = cardItems.map((x)=> x.id === productcomponentprops.id ? {...exist , qty : exist.qty + 1} : x );
      setCardItems(newCardItems);
    }
    else{
        const newCardItems = [...cardItems, {...productcomponentprops, qty: 1}];
        setCardItems(newCardItems);
    }
  }
  const onRemove = (productcomponentprops) => {
    const exist = cardItems.find((x)=> x.id === productcomponentprops.id);
    if(exist.qty === 1){
        const newCardItems = cardItems.filter(x=> x.id === productcomponentprops.id);
        setCardItems(newCardItems);
    }
    else{
      const newCardItems = cardItems.map(x=> x.id === productcomponentprops.id ? {...exist , qty : exist.qty - 1} : x);
      setCardItems(newCardItems);
    }
  }

  return (
    <>
      <Header countCartItems={cardItems.length} />
      <div className="main">
        <div className="row">
          <div className="col col-1">
            <Main products={products} onAdd={onAdd} onRemove={onRemove} cardItems={cardItems} />
          </div>
          <div className="col col-2">
            <Basket />
          </div>
        </div>
      </div>
    </>
  );
}
