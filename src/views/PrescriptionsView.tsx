import Hero from "../components/Hero";
import PrescriptionsList from "../components/PrescriptionsList";

type PrescriptionViewProps = {
  navigate: (view: string) => void;
}

const PrescriptionView = ({ navigate }: PrescriptionViewProps) => {
  return (
    <>
      <Hero imgSrc={require('../assets/hero-image.png')} />
      <PrescriptionsList navigate={navigate} />
    </>
  )
}

export default PrescriptionView;