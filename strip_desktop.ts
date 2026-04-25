import * as fs from 'fs';
import * as path from 'path';

const walkSync = (dir: string, filelist: string[] = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      if (!dirFile.includes('node_modules')) {
        filelist = walkSync(dirFile, filelist);
      }
    } else if (dirFile.endsWith('.ts') || dirFile.endsWith('.html')) {
        filelist.push(dirFile);
    }
  });
  return filelist;
};

const files = walkSync(path.join(__dirname, 'src'));

for (const file of files) {
  if (!file.includes('admin-') && !file.includes('home.component') && !file.includes('report-list.component')) continue;
  
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Pattern 1: Delete <aside> blocks up to </aside>
  if (content.includes('<aside') && content.includes('w-72')) {
    content = content.replace(/<aside[^>]*class=".*hidden md:flex[^]*?<\/aside>/gm, '');
    changed = true;
  }
  
  // Pattern 2: Remove md:pl-72
  if (content.includes('md:pl-72')) {
    content = content.replace(/md:pl-72/g, '');
    changed = true;
  }

  // Pattern 3: Remove md:hidden from mobile headers
  if (content.includes('md:hidden')) {
    content = content.replace(/md:hidden/g, '');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
  }
}
