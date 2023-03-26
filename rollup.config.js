import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
// import terser from '@rollup/plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import css from 'rollup-plugin-css-only';
import replace from '@rollup/plugin-replace';
// import sass from 'rollup-plugin-sass';
// import scss from 'rollup-plugin-scss';
import styles from 'rollup-plugin-styles';
// import autoprefixer from 'autoprefixer';
// import postcss from 'postcss';
// import postcss from 'rollup-plugin-postcss';

const packageJson = require('./package.json');

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
      // name: 'react-lib',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    },
    {
      file: packageJson.browsers,
      format: 'iife',
      sourcemap: true,
      name: 'CloudCoreUI',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    },
    {
      file: packageJson.umd,
      format: 'umd',
      sourcemap: true,
      name: 'CloudCoreUI',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    },
  ],
  plugins: [
    external('React'),
    commonjs(),
    resolve(),
    typescript({ tsconfig: './tsconfig.json' }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    styles(),
    // sass({ output: './dist/styles.css' }),
    // postcss(),
    // terser(),
  ],
};
