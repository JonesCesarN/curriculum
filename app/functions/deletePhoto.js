const fs = require("fs");

function deleteFile(path) {
  return new Promise((resolve, reject) => {
    fs.unlink(path, (err, paths) => {
      if (err) {
        reject(err);
      } else {
        resolve(paths);
      }
    });
  });
}

module.exports = { deleteFile };

// deleteFile("./app/public/uploadCurriculum/jones-1631919105252.jpg");
