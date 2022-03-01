const fs = require('fs');
const path = require('path');
const components = [];

function readDir(entry) {
  const dirInfo = fs.readdirSync(entry);
  dirInfo.forEach((name) => {
    const location = path.join(entry, name);
    const isIndex = fs.existsSync(path.join(location, 'index.ts'));
    // 存在index.ts

    if (isIndex) {
      // 存在export default
      const content = fs.readFileSync(path.join(location, 'index.ts'), {
        encoding: 'utf8'
      });
      if (content.includes('export default')) {
        components.push({
          name,
          realPath: `@p/${name}/index`
        });
      }
    }
  });

  let imports = ``;
  let arrays = `[\n  `;
  components.forEach((v) => {
    imports += `import ${v.name} from '${v.realPath}';\n  `;
    arrays += `${v.name}, `;
  });
  arrays += '\n]';

  const temp = `
  import { App } from 'vue';
  import '@/assets/font/eva-icons.css';

  ${imports}
  const components = ${arrays};


  function install(app: App) {
    components.forEach((component) => {
      app.use(component);
    });
  }

  export default { install, version: '1.0.0-beta.1' };

  `;

  fs.writeFileSync(path.resolve(__dirname, '../src/packages/index.ts'), temp);
}

readDir(path.resolve(__dirname, '../src/packages'));
