export const apiCall = async function(url) {
    const response = await fetch(`https://fakestoreapi.com/products/${url}`)
      .then((res) => res.json())
      .then((temp) => temp);
    return response;
  }
  