//Babel插入函数调用参数

const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const types = require('@babel/types');
const template = require('@babel/template')

const  sourceCode = `console.log(1)
function func() {
    console.info(2);
}

export default class Clazz {
    say() {
        console.debug(3);
    }
    render() {
        return <div>{console.error(4)}</div>
    }
}
`;


const ast = parser.parse(sourceCode,{
    sourceType: 'unambiguous',
    plugins:['jsx']
})


const targetCallName = ['log','error','warn','info'].map(item => `console.${item}`)
traverse(ast,{
    CallExpression(path,state){

        const calleeName = generate(path.node.callee).code;
        // console.log(calleeName)
        // console.log(path.node.callee)
        if(path.node.isNew){
            return
        }
      
     
        // console.log(types.isMemberExpression)
        // console.log(path.node.loc.start.line);
        // console.log(path.node.loc.start.column)
        // if(types.isMemberExpression(path.node.callee) && path.node.callee.object.name === 'console' && ['log', 'info', 'error', 'debug'].includes(path.node.callee.property.name) ){
        //     const { line,column } = path.node.loc.start;
        //     path.node.arguments.unshift(types.stringLiteral(`filename: ${line},${column}`))
        // }
        if(targetCallName.includes(calleeName)){
            const { line, column } = path.node.loc.start;
            // path.node.arguments.unshift(types.stringLiteral(`filename: ${line},${column}`))
            const newNode = template.expression(`console.log("filename: (${line},${column})")`)();
            newNode.isNew = true;

            if(path.findParent(path => path.isJSXElement())){
                path.replaceWith(types.arrayExpression([newNode,path.node]))
                path.skip()
            }else {
                path.insertBefore(newNode)
            }
        }
        console.log('------------------------------')
        console.log(path.node)
    }
})

const {code,map} = generate(ast);
// console.log(code)

// console.log(template.expression(`console.log('hello world')`)())