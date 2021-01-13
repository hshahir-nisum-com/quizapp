export default function checkLogin (history){
    if (localStorage.getItem("isUserLoging") !== "true") {
        console.log("in if cond");
        history.push("/");
      } 
}
