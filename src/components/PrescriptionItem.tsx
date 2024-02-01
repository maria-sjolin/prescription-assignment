import useStore from '../store/store';
import style from './PrescriptionItem.module.scss';
import { FaChevronRight } from "react-icons/fa";
import { Prescription, StockStatus } from '../types/types';

type PrescriptionItemProps = {
  navigate: (view: string) => void;
  prescription: Prescription;
}

const PrescriptionsItem = ({ prescription, navigate }: PrescriptionItemProps) => {
  const setActivePrescription = useStore((state) => state.setActivePrescription)

  const liClasses = prescription.article.stockStatus === StockStatus.InStock ? `${style.listItem} in-stock` : `${style.listItem} ${style.outOfStock} out-of-stock`;
  const click = () => {
    setActivePrescription(prescription);
    navigate('detailed-view');
  }

  return (
    <li className={liClasses} onClick={click} tabIndex={0} data-testid="prescription-list-item">
      <h1 className={style.productName}>{prescription.article.productName}</h1>
      <span>{prescription.article.preamble}</span>
      <FaChevronRight className={style.icon} />
    </li>
  )
}

export default PrescriptionsItem;