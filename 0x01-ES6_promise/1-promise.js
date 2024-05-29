export default function getFullResponseFromAPI(success) {
  const promise = new Promise((resolve, reject) => {
    if (success) {
      return resolve({'status': 200, 'body': 'Success'});
    } else {
      return reject("The fake API is not working currently");
    }
  });

  return promise;
}
