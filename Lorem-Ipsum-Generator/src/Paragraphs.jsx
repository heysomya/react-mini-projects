import { nanoid } from 'nanoid';
const Paragraphs = ({ count, text }) => {
  const newParagraphs = text.slice(0, count);
  return (
    <div className='lorem-text'>
      {newParagraphs.map((p) => {
        return <p key={nanoid()}>{p}</p>;
      })}
    </div>
  );
};
export default Paragraphs;
