/**
 *  Hello World #27
 *  By @thykka
 */

module.exports = () => {
  return [
    function Hello() {},
    function World() {}
  ].map(f => f.name).join`, `;
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
