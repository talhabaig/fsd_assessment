import React from 'react';

type SvgImageProps = {
  src: string;
  alt: string;
  width: string;
  className?: string;
};
const SvgImage: React.FC<SvgImageProps> = ({ src, alt, className, width }) => {
  return (
    <div className={className}>
      <img src={src} alt={alt} width={width} />
    </div>
  );
};

export default SvgImage;