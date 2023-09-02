import { toast } from 'react-toastify';

const SingleColor = ({ color, index }) => {
  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${color.hex}`);
        toast.success('Copied to clipboard');
      } catch (error) {
        toast.error(error.message);
      }
    } else {
      toast.error('Cannot access Clipboard!');
    }
  };
  return (
    <div
      className={index > 10 ? 'color color-light' : 'color'}
      style={{ backgroundColor: `#${color.hex}` }}
      onClick={saveToClipboard}
    >
      <p className='percent-value'>{color.weight}%</p>
      <p className='color-value'>#{color.hex}</p>
    </div>
  );
};
export default SingleColor;
