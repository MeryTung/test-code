
const template = require('@babel/template');
const generate = require('@babel/generator').default;
const types = require('@babel/types');
const targetCallName = ['log','error','warn','info'].map(item => `console.${item}`)
module.exports = function(){
    return {
        visitor: {
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
                    const newNode =template.expression(`console.log("filename: (${line},${column})")`)();
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
        }
    }
}