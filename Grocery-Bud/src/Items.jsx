import SingleItem from './SingleItem';
const Items = ({ items, removeItems, editItem }) => {
  return (
    <div className='items'>
      {items.map((item) => {
        return (
          <SingleItem
            item={item}
            key={item.id}
            removeItems={removeItems}
            editItem={editItem}
          />
        );
      })}
    </div>
  );
};
export default Items;
