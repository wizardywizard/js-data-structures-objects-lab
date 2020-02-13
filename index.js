// Write your solution in this file!
let driver = {
    name: "Sam"
}

function updateDriverWithKeyAndValue(driver, key, value){
    const newDriver = {...driver}
    newDriver[key] = value;
    return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value
    return driver
}

function deleteFromDriverByKey(driver, key){
    const newDrive = {...driver}
    delete newDrive[key]
    return newDrive
}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key]
    return driver
}