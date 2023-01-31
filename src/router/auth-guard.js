
const isAuthenticatedGuard = async (to, from, next) => {
  //console.log({ to, from, next });
  return new Promise( () => {
    const random = Math.random() * 100;

    random > 50 ?
      next()
    : console.log("No is not authenticated");
  } )

}

export default isAuthenticatedGuard