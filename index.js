const driver  = {};

const updateDriverWithKeyAndValue = (driver, key, value) =>{
  const newObj = Object.assign({}, driver);
  newObj[key] = value;
  return newObj;
}

const destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) =>{
  const newObj = Object.assign({}, driver);
  delete newObj[key];
  return newObj;
  
  driver[key] = value;
  return driver;
}

const deleteFromDriverByKey = (driver, key) =>{
  delete driver[key];
}


const destructivelyDeleteFromDriverByKey = (driver, key) =>{
  delete driver[key];
}







