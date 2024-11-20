import React from 'react';
import Image from 'next/image';

interface BouncyImageProps {
  src?: any;
  alt?: any;
  style?: any;
}

const BouncyImage: React.FC<BouncyImageProps> = ({ src, alt, style = 'Bouncy Image' }) => {
  return (
    <Image
      src={src}
      alt={alt}
      className={`{${style} "object-contain animate-bounceY absolute"}`}
    />
  );
};

export default BouncyImage;
