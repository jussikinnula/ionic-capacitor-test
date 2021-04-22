// https://ferie.medium.com/how-to-pass-environment-variables-at-building-time-in-an-angular-application-using-env-files-4ae1a80383c
import fs from 'fs';
import path from 'path';

const targetPath = 'src/environments';
const targetFile = 'environment.ts'

const CI_BUILD_ID  = process.env.CI_BUILD_ID || '';
const PRODUCTION = process.env.PRODUCTION ? process.env.PRODUCTION.toLowerCase() === 'true' : false;

const envConfigFile = `export const environment = {
  buildId: ${JSON.stringify(CI_BUILD_ID)},
  production: ${JSON.stringify(PRODUCTION)},
};
`;

console.log('The file `environment.ts` will be written with the following content: \n');
console.log(envConfigFile);

if (!fs.existsSync(targetPath)) {
  fs.mkdirSync(targetPath);
}

fs.writeFile(path.join(targetPath, targetFile), envConfigFile, (err) => {
  if (err) {
    throw console.error(err);
  } else {
    console.log(`Angular environment.ts file generated correctly at ${targetPath} \n`);
  }
});
