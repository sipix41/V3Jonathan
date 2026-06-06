const fs = require('fs');
let content = fs.readFileSync('pages/BP.tsx', 'utf8');
content = content.replace(
  /<\/a>\s*<\/div>\s*<\/div>\s*<\/section>/,
  '</a>\n          </div>\n          </motion.div>\n        </div>\n      </section>'
);
fs.writeFileSync('pages/BP.tsx', content, 'utf8');
