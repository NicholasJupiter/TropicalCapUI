// shengheng
const comName = process.argv[2];
if (!comName) {
  return
}
const path = require('path');
const fs = require('fs');
const packPath = path.resolve(__dirname, './src/packages/' + comName);
const lowName = comName[0].toLowerCase() + comName.substring(1);

const files = [
  {
    path: '/index.ts',
    data: `import { install } from '@/util/component';
    import ${comName} from './src/${lowName}.vue';
    
    export default install(${comName});
    `
  },
  {
    path: `/src/${lowName}.vue`,
    data:`
    <template>

</template>
<script lang="ts">
import { defineComponent } from 'vue';
import {} from './types';
export default defineComponent({
  name: 'cap-${lowName}',
  props: {
  },
  emits: [],
  setup(props, { emit }) {
    return {}
  }
})
</script>
<style lang="scss" scoped>
@import './${lowName}.scss';
</style>`
  },
  {
    path: `/src/${lowName}.scss`,
    data: `
    .cap-${lowName} {

    }`
  },
  {
    path: `/src/types.d.ts`
  },
  {
    path: '/preview.md'
  },
  {
    path: '/preview.vue',
    data: `
    <template>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'cap-${lowName}-preview',
  setup() {
    return { };
  }
});
</script>
<style lang="scss" scoped></style>
`
  }
]
fs.mkdirSync(packPath);
fs.mkdirSync(packPath + '/' + 'src');

files.forEach((v) => {
  fs.writeFileSync(packPath + v.path, v.data || '')
})