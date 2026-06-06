import * as ts from "typescript";
import * as fs from "fs";
import * as path from "path";

function findUnused(filePath: string) {
  const content = fs.readFileSync(filePath, 'utf8');
  const sourceFile = ts.createSourceFile(
    filePath,
    content,
    ts.ScriptTarget.Latest,
    true
  );

  const imports = new Map<string, number>();
  const usages = new Map<string, number>();

  function visit(node: ts.Node) {
    if (ts.isImportSpecifier(node)) {
      imports.set(node.name.text, node.name.getStart());
    } else if (ts.isIdentifier(node)) {
      // Very naive identifier collection for usage
      if (node.parent && !ts.isImportSpecifier(node.parent) && !ts.isImportClause(node.parent)) {
        usages.set(node.text, (usages.get(node.text) || 0) + 1);
      }
    }
    ts.forEachChild(node, visit);
  }

  visit(sourceFile);

  const unused = [];
  for (const [name, pos] of imports.entries()) {
    if (!usages.has(name) || usages.get(name) === 0) {
      unused.push(name);
    }
  }

  if (unused.length > 0) {
    console.log(`Unused in ${filePath}:`, unused.join(', '));
  }
}

function walkArgs() {
    function walkSync(dir: string, filelist: string[] = []) {
      const files = fs.readdirSync(dir);
      for (const file of files) {
        const filepath = path.join(dir, file);
        if (fs.statSync(filepath).isDirectory()) {
          filelist = walkSync(filepath, filelist);
        } else if (filepath.endsWith('.tsx') || filepath.endsWith('.ts')) {
          filelist.push(filepath);
        }
      }
      return filelist;
    }
    const files = walkSync('./pages');
    for (const f of files) {
      findUnused(f);
    }
}
walkArgs();
