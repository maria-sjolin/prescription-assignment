import style from './Hero.module.scss';

type HeroProps = {
  imgSrc: string,
  header?: string
}

const Hero = ({ imgSrc, header }: HeroProps) => {
  const heroWrapperClass = header ? style.heroWithHeader : '';
  const imageClass = header ? style.imageSmall : style.image;

  return (
    <div className={heroWrapperClass} data-testid="hero">
      <img className={imageClass} src={imgSrc} alt="medicine" />
      {header && (
        <div className={style.headerWrapper}><h1 className={style.heading} data-testid="header">{header}</h1></div>
      )}
    </div>
  )
};

export default Hero;