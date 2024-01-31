import PrescriptionsItem from './PrescriptionItem';
import prescriptions from '../prescriptions.json';
import style from './PrescriptionList.module.scss';
import { FormEvent, useState } from 'react';
import Layout from './Layout';
import { StockStatus } from '../types/types';
import { FaMagnifyingGlass, FaFilter } from "react-icons/fa6";



type PrescriptionListProps = {
  navigate: (view: string) => void;
}

const PrescriptionsList = ({ navigate }: PrescriptionListProps) => {
  const [filterInStock, setFilterInStock] = useState(false);
  const [filterText, setFilterText] = useState("");

  const filterSearch = (e: FormEvent<HTMLInputElement>) => {
    setFilterText(e.currentTarget.value);
  }

  const prescriptionsToShow = filterInStock ? prescriptions.filter((prescription) =>
    prescription.article.stockStatus === StockStatus.InStock
  ) : prescriptions;

  return (
    <Layout>
      <h1>Recept</h1>
      <div className={style.container}>

        <aside className={style.sideWrapper}>
          <div className={style.iconWrapper}><FaMagnifyingGlass /><h2>Sök</h2></div>
          <div>
            <label className={style.marginRight}> Produktnamn:</label>
            <input type="text" value={filterText} onChange={filterSearch} data-testid="search" />
          </div>
          <hr className={style.separator}></hr>
          <div className={style.iconWrapper}><FaFilter /><h2>Filtrera</h2></div>
          <div>
            <input type="checkbox" id="filterStock" name="filterStock" checked={filterInStock} onChange={() => setFilterInStock(!filterInStock)} />
            <label className={style.marginLeft} htmlFor='filterStock'>Finns i lager</label>
          </div>
        </aside>
        <div className={style.listWrapper}>
          <ul className={style.list}>
            {prescriptionsToShow.map((prescription) => (
              prescription.article.productName.toLowerCase().includes(filterText.toLowerCase()) && (
                <PrescriptionsItem key={prescription.prescriptionId} prescription={prescription} navigate={navigate} />
              )
            ))
            }
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default PrescriptionsList;