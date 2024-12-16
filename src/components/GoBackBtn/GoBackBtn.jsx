import btnCss from '../GoBackBtn/GoBackBtn.module.css';
import clsx from 'clsx';
import { GoArrowLeft } from 'react-icons/go';

const GoBackBtn = ({ onClick }) => {
  return <>
    <button className={clsx(btnCss.goBackBtn)} onClick={onClick}>
      <GoArrowLeft />Go back
    </button>
  </>;
};

export default GoBackBtn;