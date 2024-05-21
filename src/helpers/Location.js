export function location () {

  let location = window.location.pathname;

  let arrLocation = location.split('/');

  return arrLocation;
}