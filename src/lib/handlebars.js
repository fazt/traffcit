import $config from './config';
import { minify } from 'html-minifier';

export default {
  compress: compress,
  section: section,
  currentYear: currentYear
};

function compress(content) {
  if (!$config().html.minify) {
    return content.fn(this);
  }
  return minify(content.fn(this),{
    removeComments:true,
    collapseWhiteSpace:true,
    minifyJS:true
  });
}

function section(name, options) {
  if (!this._sections) {
    this._sections = {};
  }
  this._sections[name] = options.fn(this);
  return null;
}

function currentYear() {
  return new Date().getFullYear();
}
