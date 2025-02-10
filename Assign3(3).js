//Problem 3: Environment Inspector
//Objective: Build a utility to inspect and display system environment variables.


// Import required modules
const fs = require('fs');
const path = require('path');
const os = require('os');

const LOG_DIR = path.join(__dirname, 'logs');
const LOG_FILE = path.join(LOG_DIR, 'env-details.json');

function inspectEnvironment() {
  try {
    // Collect environment details
    const envDetails = {
      homeDirectory: os.homedir(),
      hostname: os.hostname(),
      networkInterfaces: os.networkInterfaces(),
      environmentVariables: process.env
    };

    // Ensure the logs directory exists
    if (!fs.existsSync(LOG_DIR)) {
      fs.mkdirSync(LOG_DIR, { recursive: true });
    }

    // Write details to env-details.json
    fs.writeFileSync(LOG_FILE, JSON.stringify(envDetails, null, 2));
    console.log(`Environment details saved to ${LOG_FILE}`);
  } catch (error) {
    console.error('Error inspecting environment or writing file:', error);
  }
}

// Run the environment inspector
inspectEnvironment();