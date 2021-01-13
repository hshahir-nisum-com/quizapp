function utility(key, history, keys) {
  keys.find((keys) => {
    keys.toString() === key ? history.push("/questions") : alert("wrong key");
    return 0
  });
}
export default utility;
