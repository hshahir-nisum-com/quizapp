import data from "./credential.json";
import  { apiCall }  from "./api";

const dataName = data[0].name;
const dataPass = data[0].password;

export function check(name, pass) {
  if (name === dataName && pass === dataPass) {
    return true;
  }
}

export async function productCat(productInd) {
  const temp = await apiCall(productInd);
  return temp;
}

