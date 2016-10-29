/**
* Gets the current enviroment based on NODE_ENV var.
*/

export default getEnv;

function getEnv() {
  return {
    name:process.env.NODE_ENV ? process.env.NODE_ENV : 'production'
  };
}
