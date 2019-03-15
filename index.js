const driver  = {};

const updateDriverWithKeyAndValue = (driver, key, value) =>{
  const newObj = Object.assign({}, driver);
  newObj[key] = value;
  return newObj;
}

const destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) =>{
  driver[key] = value;
  return driver;
}

const destructivelyDeleteFromDriverByKey = (driver, key) =>{
  delete driver[key];
}


const destructivelyDeleteFromDriverByKey = (driver, key) =>{
  delete driver[key];
}







