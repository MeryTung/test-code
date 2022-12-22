const { transformFileSync } = require('@babel/core');
const  parser = require('@babel/parser');
const template = require('@babel/template');
const generate = require('@babel/generator').default;
const insertPlugin = require('./plugin/parameters-insert-plugin');
const path = require('path');

const { code } = transformFileSync(path.join(__dirname, './source.js'),{
    plugins: [insertPlugin],
    parserOpts: {
        sourceType: 'unambiguous',
        plugins:['jsx']
    }

})