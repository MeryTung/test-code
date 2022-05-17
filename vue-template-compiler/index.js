const compiler = require('vue-template-compiler')


// const template = `<div>{{message}}</div>`
// const template = `<div>{{flag ? message : 'no message'}}</div>`
// const template = `<div v-for="item in item" :key="item.id">{{item.name}}</div>`
    const template = `<div id="div1" class="container"><img :src="imgUrl" /></div>`
// const template = `<input name="username" v-model="name" />`

const res = compiler.compile(template)
console.log(res.render)