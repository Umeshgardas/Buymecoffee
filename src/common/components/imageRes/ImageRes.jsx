// import Image from "next/image";


// const loaderImage = ({ src, width, quality }) => {
//   return `${src}?w=${width}&q=${quality || 75}`;
// };

// const loaderImage = ({ src }) => {
//   const relativeSrc = (src) => src.split("/").pop();

//   return `https://icdev.ampcome.com/resize=width:20/${relativeSrc(src)}`;
// };

const ImageRes = ({ imgSrc, alt, fill }) => {
  return (
    <div className="ImageRes-container">
      <img
        src={imgSrc}
        alt={`${alt}`}
        className="ImageRes-container-img"
        fill={fill}
      />
    </div>
  );
};

export default ImageRes;
