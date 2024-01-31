import style from './Hero.module.scss';

type HeroProps = {
  imgSrc: string,
  header?: string
}

const Hero = ({ imgSrc, header }: HeroProps) => {
  const heroWrapperClass = header ? style.heroWithHeader : '';
  const imageClass = header ? style.imageSmall : style.image;

  return (
    <div className={heroWrapperClass}>
      <img className={imageClass} src={imgSrc} alt="medicine" />
      {header && (
        <div className={style.headerWrapper}>{header}</div>
      )}
    </div>
  )
};

export default Hero;