import data from "./credential.json";

const dataName = data[0].name;
const dataPass = data[0].password;

export function check(name, pass) {
  if (name === dataName && pass === dataPass) {
    return true;
  }
}

export function productCat(productInd) {
  return apiCall(productInd).then((product) => product.category);
}

export async function apiCall(url) {
    const response = await fetch(`https://fakestoreapi.com/products/${url}`);
    return response;
}

