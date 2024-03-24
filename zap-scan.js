const { Octokit } = require("@octokit/rest");
const octokit = new Octokit({
  auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWM2OTcxNmE2OGQ4MzAwMTMyNTg0OTQiLCJpYXQiOjE3MTEzMTcxMjl9.V6vmtV15XaiXCaYKwP84s1Q2Jn9e6yPJy0-xIJEtiBg",
});

const { spawnSync } = require('child_process');

console.log('Alerts present in the current report:', process.env.ZAP_ALERTS_PRESENT);

if (process.env.ZAP_ALERTS_PRESENT === 'true') {
  console.log('ZAP Scan detected alerts. Failing the workflow.');
  process.exit(1);
} else {
  console.log('ZAP Scan did not detect any alerts. Workflow continues.');
}
