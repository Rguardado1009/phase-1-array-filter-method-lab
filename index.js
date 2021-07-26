const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];

function findMatching(arr, driver) {
  return drivers.filter((drivers) => drivers.match(driver));
}
findMatching(drivers);

function fuzzyMatch(arr, letter) {
  return drivers.filter((drivers) => drivers.startsWith(letter));
}
fuzzyMatch(drivers);

function matchName(driver, string) {
  return driver;
}
