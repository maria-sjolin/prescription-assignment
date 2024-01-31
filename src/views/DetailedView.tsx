import useStore from "../store/store";
import { FaUserDoctor } from "react-icons/fa6";
import Layout from "../components/Layout";
import { FaChevronLeft, FaCircle } from "react-icons/fa";
import style from './DetailedView.module.scss';
import { StockStatus } from "../types/types";
import Hero from "../components/Hero";


type PrescriptionItemProps = {
  navigate: (view: string) => void;
}

type ListItemProps = {
  header: string,
  text: string
}

const ListItem = ({ header, text }: ListItemProps) => {
  return (
    <li className={style.listItem}>
      <h3>{header}</h3>
      <span>{text}</span>
    </li>
  )
}

const DetailedView = ({ navigate }: PrescriptionItemProps) => {
  const goBack = () => {
    navigate('prescriptions-view');
  }

  const prescription = useStore((state) => state.activePrescription)
  const prescriber = prescription?.prescriber;

  return (
    <>
      <Hero imgSrc={require('../assets/product-image.png')} header={prescription?.article.productName} />
      <Layout>
        <button className={style.backButton} onClick={goBack}><FaChevronLeft /> Tillbaka</button>

        {prescription ? (
          <div className={style.container}>
            <aside className={style.sideWrapper}>
              <div className={style.prescriberHeading}><h2>Förskrivare</h2><FaUserDoctor className={style.icon} /></div>

              <div>
                <p className={style.prescriberParagraph}><b>Namn:</b> {prescriber?.name}</p>
                <p className={style.prescriberParagraph}><b>Yrke: </b>{prescriber?.profession}</p>
                <p className={style.prescriberParagraph}><b>Arbetsplats: </b>{prescriber?.workplace}</p>
                <p><b>Telefon: </b>{prescriber?.phoneNumber}</p>
              </div>
            </aside>
            <div className={`${style.listWrapper} ${style.detailedListWrapper}`}>
              <h1>{prescription.article.productName}</h1>
              <ul className={style.list}>
                <li>
                  {prescription.article.stockStatus === StockStatus.InStock ? (
                    <div className={style.stockStatusWrapper}><FaCircle fill="green" /><p>Finns i lager</p></div>
                  ) : (
                    <div className={style.stockStatusWrapper}><FaCircle fill="red" /><p>Finns ej i lager</p></div>
                  )}
                </li>
                <li>
                  <a href={prescription.article.articleLink || undefined}>Läs mer om produkten på FASS</a>
                </li>
                <ListItem header="Fullständigt produktnamn" text={prescription.article.productLongName} />
                <ListItem header="Aktiv substans" text={prescription.article.activeSubstance} />
                <ListItem header="Styrka" text={prescription.article.strength || '-'} />
                <ListItem header="Beredningsform" text={prescription.article.pharmaceuticalForm || '-'} />
                <ListItem header="Informationstext" text={prescription.article.pharmaceuticalForm || '-'} />
              </ul>
              <p></p>
            </div>
          </div>

        ) : <div>Något gick fel</div>}

      </Layout>
    </>
  )

};

/*
id: string,
    productName: string,
    productLongName: string,
    preamble: string,
    stock: number | null,
    stockStatus: string,
    pharmaceuticalForm: string | null,
    packagingText: string,
    originalUnitPrice: number,
    activeSubstance: string,
    strength: string | null,
    articleLink: string | null
    */
// reuse styles. listwrapper and sidewrapper either as components or just scss in separate file

export default DetailedView;