import * as fs from 'fs';;
import * as path from 'path';

const renameFiles = (directoryPath: string, prefix = '', suffix = '') => {
  fs.readdir(directoryPath, (err, files) => {
      if (err) return console.error('Error reading directory:', err);

      files.forEach((file, index) => {
          const baseName = path.basename(file, path.extname(file));

          const oldPath = path.join(directoryPath, file);
          const newPath = path.join(directoryPath, `${prefix}${baseName}${suffix}${path.extname(file)}`);
          fs.rename(oldPath, newPath, (err) => {
              if (err) console.error('Error renaming file:', err);
              else console.log(`${file} -> ${path.basename(newPath)}`);
          });
      });
  });
};

export default renameFiles;
