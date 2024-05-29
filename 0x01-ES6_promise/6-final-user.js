import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default async function handleProfileSignup(firstName, lastName, fileName) {
    const userPromise = await signUpUser(firstName, lastName).then((data) =>
    ({ status: 'fullfilled', value: data }));

    const filePromise = await uploadPhoto(fileName).catch((error) =>
    ({ status: 'rejected', value: error.toSting() }));

    return Promise.resolve([userPromise, filePromise]);
}
