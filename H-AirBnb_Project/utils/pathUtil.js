// require core module
const path = require("path");

// export the path of the main module
module.exports = path.dirname(require.main.filename);
