// Copies a release's notes into CHANGELOG.md and the README's "What's new" block.
// Inputs come from env: TAG, BODY, DATE (ISO), PRERELEASE ("true"/"false"),
// IS_NEWEST ("true" when this is the most recently published release).
const fs = require('fs');

const repoUrl = 'https://github.com/Tuplano/agent-office-app-release';
const tag = process.env.TAG;
const date = (process.env.DATE || new Date().toISOString()).slice(0, 10);
const prerelease = process.env.PRERELEASE === 'true';
const isNewest = process.env.IS_NEWEST === 'true';

// Keep only the user-facing notes: drop HTML comments and the download guide.
const notes = (process.env.BODY || '')
  .replace(/\r\n/g, '\n')
  .replace(/<!--[\s\S]*?-->/g, '')
  .split(/^##\s+Which file do I download\?/im)[0]
  .trim();

// Empty notes never overwrite an entry that was written by hand.
const existing = fs.readFileSync('CHANGELOG.md', 'utf8');
if (!notes && (existing.includes(`## [${tag}]`) || existing.includes(`## ${tag} `))) {
  console.log(`${tag} has no notes; keeping the existing changelog entry.`);
  process.exit(0);
}

const heading = `## [${tag}](${repoUrl}/releases/tag/${tag}) · ${date}${prerelease ? ' · Pre-release' : ''}`;
const entry = `${heading}\n\n${notes || 'Maintenance release.'}\n`;

// CHANGELOG.md: replace this version's entry if it exists, otherwise add it on top.
const changelog = fs.readFileSync('CHANGELOG.md', 'utf8').replace(/\r\n/g, '\n');
const marker = '<!-- releases -->\n';
const [head, rest = ''] = changelog.split(marker);
// entries are "## [v1.2.3](link) · date", or "## v1.2.3 · date" for versions with no release here
const sections = rest.split(/^(?=## )/m).filter(s => s.trim());
const index = sections.findIndex(s => s.startsWith(`## [${tag}]`) || s.startsWith(`## ${tag} `));
if (index >= 0) sections[index] = entry;
else sections.unshift(entry);
fs.writeFileSync('CHANGELOG.md', head + marker + sections.map(s => s.trimEnd() + '\n').join('\n'));

// README.md: only the newest release goes in "What's new".
if (isNewest) {
  const readme = fs.readFileSync('README.md', 'utf8').replace(/\r\n/g, '\n');
  const latest = [
    '<!-- latest:start -->',
    `### ${tag} · ${date}${prerelease ? ' · Pre-release' : ''}`,
    '',
    (notes || 'Maintenance release.').replace(/^### /gm, '#### '),
    '',
    '[See every version in the changelog →](CHANGELOG.md)',
    '<!-- latest:end -->',
  ].join('\n');
  fs.writeFileSync('README.md', readme.replace(/<!-- latest:start -->[\s\S]*?<!-- latest:end -->/, latest));
}
