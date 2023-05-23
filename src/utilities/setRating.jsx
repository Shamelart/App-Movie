export function setRating(num) {
    const fill50 = { '--fill': '50%' };
    const fill100 = { '--fill': '100%' };
    const stars = new Array(5).fill(null);
    const rating = num / 2;
    const result = stars.map((_, index) => {
      if (index < rating) {
        if (index + 1 > rating) {
          return <div key={index} style={fill50}></div>;
        }
        return <div key={index} style={fill100}></div>;
      }
      return <div key={index}></div>;
    });
  
    return result;
  }