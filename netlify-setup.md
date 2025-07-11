# Netlify CDN Setup for File Downloads

## 1. Create Downloads Folder Structure
Create this folder structure in your Netlify site:

\`\`\`
netlify/
├── functions/
│   └── download.js
└── downloads/
    ├── startup-process-improvement-sample.pdf
    ├── process-maturity-assessment.pdf
    ├── startup-metrics-tracker.csv
    ├── process-mapping-template.pdf
    ├── lean-startup-canvas.pdf
    ├── daily-huddle-worksheet.pdf
    ├── tool-stack-guide.pdf
    └── pfn-complete-starter-kit.zip
\`\`\`

## 2. Netlify Function for Downloads
Create `netlify/functions/download.js`:

\`\`\`javascript
exports.handler = async (event, context) => {
  const { file } = event.queryStringParameters;
  
  if (!file) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'File parameter required' })
    };
  }

  // Security: Only allow specific files
  const allowedFiles = [
    'startup-process-improvement-sample.pdf',
    'process-maturity-assessment.pdf',
    'startup-metrics-tracker.csv',
    'process-mapping-template.pdf',
    'lean-startup-canvas.pdf',
    'daily-huddle-worksheet.pdf',
    'tool-stack-guide.pdf',
    'pfn-complete-starter-kit.zip'
  ];

  if (!allowedFiles.includes(file)) {
    return {
      statusCode: 403,
      body: JSON.stringify({ error: 'File not allowed' })
    };
  }

  return {
    statusCode: 302,
    headers: {
      Location: `https://your-netlify-site.netlify.app/downloads/${file}`,
      'Content-Disposition': `attachment; filename="${file}"`
    }
  };
};
\`\`\`

## 3. Update Download URLs
Replace `https://your-netlify-site.netlify.app` with your actual Netlify site URL in:
- Hero.tsx
- AboutBook.tsx
- ResourceDownload.tsx
- FinalCTA.tsx

## 4. Upload Files
Upload all your PDF, CSV, and ZIP files to the `downloads/` folder in your Netlify site.

## 5. Deploy
Deploy to Netlify and test the download functionality.
