//jQuery
var jquery = document.createElement('script');
jquery.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
jquery.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(jquery);
// Bootstrap.js
var bootstrapjs = document.createElement('script');
bootstrapjs.src = 'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js';
bootstrapjs.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(bootstrapjs);
// Bootstrap.css
var bootstrapcss = document.createElement('link');
bootstrapcss.rel = 'stylesheet';
bootstrapcss.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css';
bootstrapcss.integrity = 'sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z';
bootstrapcss.crossOrigin = 'anonymous';
document.getElementsByTagName('head')[0].appendChild(bootstrapcss);
//test
var test = document.createElement('script');
test.src = 'C:/Users/zocke/Documents/GitHubcodenames.js';
test.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(test);
