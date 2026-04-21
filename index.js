const fs = require('fs');
const path = require('path');

function auditWorkflow(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const issues = [];
    if (content.includes('actions/checkout@v2')) issues.push('Outdated checkout action (v2)');
    if (content.includes('run: |') && content.includes('${{')) issues.push('Potential script injection in run step');
    return issues;
}

// CLI Logic here...