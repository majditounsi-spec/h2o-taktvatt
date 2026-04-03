interface OptimizedImgProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
}

const OptimizedImg = ({ src, alt, className = "", priority = false, width, height }: OptimizedImgProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : "low"}
      width={width}
      height={height}
    />
  );
};

export default OptimizedImg;
