import resolve from '@rollup/plugin-node-resolve';
import { version, author, repository, license } from './package.json'
import { terser } from 'rollup-plugin-terser';


const isProd = process.env.NODE_ENV === 'production';

const getFilePath = (type = '') => `dist/dative-animate${type === '' ? '' : '.'}${type}.js`


var banner = `/**
  * dative-animate v${version}
  * (c) 2022-${new Date().getFullYear()} ${author}
  * ${repository.url.replace(/(git\+|\.git)/g, '')}
  * Released under the ${license} License.
*/`

const output = options => ({
    banner,
    name: 'Dative',
    sourcemap: true,
    exports: 'named',
    globals: {
        dativejs: 'dativejs'
    },
    ...options
})


const config = {
    input: './src/index.js',
    external: ['dativejs'],
    output: [output({
        file: getFilePath(''),
        format: 'iife'
    }), output({
        file: getFilePath('system'),
        format: 'system'
    }), output({
        file: getFilePath('esm'),
        format: 'esm'
    }), output({
        file: getFilePath('cjs'),
        format: 'cjs'
    }), output({
        file: getFilePath('umd'),
        format: 'umd'
    })],
    plugins: [
        resolve({
            browser: true
        }),
    ]
}

if (isProd) {
    config.output = config.output.map(output => {
        const format = output.format == 'iife' ? '' : `.${output.format}`
        output.file = `dist/dative-animate${format}.min.js`;
        delete output.banner;
        return output;
    })
    config.plugins.push(terser())
}


export default config;

