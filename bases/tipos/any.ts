(() => {
  let avenger: any = 123;
  let exists;
  let power;

  avenger = "DR Strange";
  //   console.log(avenger.charAt(0));
  //   castenado
  console.log((avenger as string).charAt(0));

  avenger = 150.33434;
  console.log(<number>avenger.toFixed(2));

  console.log(exists);
  console.log(power);
})();
