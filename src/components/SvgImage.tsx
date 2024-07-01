import React from 'react';

type SvgImageProps = {
  src: string;
  alt: string;
  className?: string;
};
const SvgImage: React.FC<SvgImageProps> = ({ src, alt, className }) => {
  return (
    <div className={className}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default SvgImage;