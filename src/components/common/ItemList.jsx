import Item from "./Item";

function ItemList({productos}) {
    
    return(
        <div className="grid gap-4 grid-cols-3 grid-rows-3">
            {productos.map( (item) =>  <Item key={item.id} producto={item}></Item>)}
        </div>
    )
}

export default ItemList;