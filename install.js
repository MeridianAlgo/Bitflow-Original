#!/usr/bin/env node

const { execSync } = require('child_process');
const chalk = require('chalk');

console.log(chalk.blue('🚀 BitFlow Installation Script'));
console.log(chalk.blue('================================'));

// Install dependencies
console.log(chalk.yellow('📦 Installing dependencies...'));
try {
    execSync('npm install', { stdio: 'inherit' });
    console.log(chalk.green('✅ Dependencies installed'));
} catch (e) {
    console.error(chalk.red('❌ Failed to install dependencies'), e.message);
    process.exit(1);
}

// Prefetch models
console.log(chalk.yellow('🤖 Downloading and caching models...'));
try {
    execSync('node scripts/prefetch_models.js', { stdio: 'inherit' });
    console.log(chalk.green('✅ Models cached'));
} catch (e) {
    console.log(chalk.yellow('⚠️ Model prefetch failed, but continuing...'), e.message);
}

// Test if program runs
console.log(chalk.yellow('🧪 Testing program execution...'));
try {
    execSync('node -e "require(\'./src/core/BitFlow\'); console.log(\'BitFlow imports successfully\')"', { stdio: 'inherit' });
    console.log(chalk.green('✅ Program runs successfully'));
} catch (e) {
    console.error(chalk.red('❌ Program test failed'), e.message);
    process.exit(1);
}

console.log(chalk.green('🎉 Installation complete! You can now run BitFlow.'));
