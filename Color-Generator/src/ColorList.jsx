import { nanoid } from 'nanoid';
import SingleColor from './SingleColor';

const ColorList = ({ colors }) => {
  return (
    <div className='colors'>
      {colors.map((color, index) => {
        return <SingleColor color={color} index={index} key={nanoid()} />;
      })}
    </div>
  );
};
export default ColorList;
