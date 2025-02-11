import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function LazyImg({ src, style, alt }) {
  return (
    <LazyLoadImage
      src={src}
      className={style}
      alt={alt}
      effect="blur"
      visibleByDefault={true}
      delayTime={100}
    />
  );
}

export default LazyImg;
