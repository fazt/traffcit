import fs from 'fs';
import yaml from 'js-yaml';
import env from './env';
import path from 'path';

const config = yaml.safeLoad(
  fs.readFileSync(path.join(__dirname,'/../config/config.yml'),'utf-8')
);

export default getConfig;

function getConfig() {
  return config[env().name] || {};
}
