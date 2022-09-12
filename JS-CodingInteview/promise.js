function add1(a) {
  return new Promise((resolve, reject) => {
    a = a.filter((item, index) => a.indexOf(item) === index);
    return resolve(a);
  });
}

add1([12, 32, 44, 44])
  .then((resolve) => console.log(resolve))
  .catch((reject) => console.log(reject));
