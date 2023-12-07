import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function LazyImg({ src, style, alt }) {
  return (
    <LazyLoadImage
      loading="lazy"
      src={src}
      className={style}
      alt={alt}
      effect="blur"
    />
  );
}

export default LazyImg;
