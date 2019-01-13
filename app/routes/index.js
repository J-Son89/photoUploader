const photoRoutes = require('./photo_routes');
module.exports = function(app, db) {
  photoRoutes(app, db);
  // Other route groups could go here, in the future
};