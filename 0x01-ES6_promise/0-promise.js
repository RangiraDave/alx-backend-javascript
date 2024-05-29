export default function getResponseFromAPI() {
  const promise = new Promise((resolve, reject) => {
    resolve("FIRST PROMISE.")
  });

  return promise;
}
