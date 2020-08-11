const getItem = (key: string) => {
  let user;
  if (key) {
    const string = window.localStorage.getItem(key);
    if (string) {
      user = JSON.parse(string);
    } else {
      user = null;
    }
  } else {
    user = null;
  }
  return user;
};

export default getItem;