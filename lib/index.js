const { 
  getBuffer: getBuffer,
  getJson: getJson,
  runtime: runtime,
  jsonformat: jsonformat
} = required ('./myfunc');

module.exports.getBuffer = getBuffer;
module.exports.getJson = getJson;
module.exports.runtime = runtime;
module.exports.jsonformat = jsonformat;
