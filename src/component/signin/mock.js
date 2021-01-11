const cat = {
    4: { category: "men" },
    5: { category: "fashion" },
  };
  
  export default function apiCall(id) {
    return new Promise((resolve, reject) => {
      cat[id]
        ? resolve(cat[id])
        : reject({
            error: "product with " + id + " not found.",
          });
    });
  }