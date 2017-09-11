#!/usr/bin/env node

/* eslint-disable */
const fs = require('fs-extra');
const path = require('path');
const program = require('commander');
const { execSync } = require('child_process');

program
  .version('0.1.0')
  .option('-i, --init')
  .parse(process.argv);

if (program.init) {
  const appPath = path.join(__dirname, '../..');

  // Install development dependencies
  const devDependencies = require(path.join(appPath, 'devDependencies.json'));
  for (const packageName in devDependencies) {
		const packageVersion = devDependencies[packageName]
    execSync(`yarn add ${packageName}@${packageVersion} --dev`, { stdio: 'inherit' });
	}

  execSync(`rm ${path.join(appPath, 'devDependencies.json')}`);

  // Setup the script rules
  const appPackage = require(path.join(appPath, 'package.json'));
  appPackage.scripts.lint = 'node node_modules/eslint/bin/eslint.js src/**';

  fs.writeFileSync(
    path.join(appPath, 'package.json'),
    JSON.stringify(appPackage, null, 2)
  );
}
/* eslint-enable */
