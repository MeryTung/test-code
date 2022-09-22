<template>
  <p>About Page</p>
   <button @click="directive">跳转到Add去</button>
  <div id="main"><h1 id="带参数的动态路由匹配" tabindex="-1">带参数的动态路由匹配 <a class="header-anchor" href="#带参数的动态路由匹配" aria-hidden="true">#</a></h1><div class="vueschool" data-v-3c288a82=""><a href="https://vueschool.io/lessons/dynamic-routes?friend=vuerouter" target="_blank" rel="sponsored noopener" title="Learn about dynamic route matching with params" data-v-3c288a82="">在 Vue School 上观看免费视频课程</a></div><p>很多时候，我们需要将给定匹配模式的路由映射到同一个组件。例如，我们可能有一个 <code>User</code> 组件，它应该对所有用户进行渲染，但用户 ID 不同。在 Vue Router 中，我们可以在路径中使用一个动态字段来实现，我们称之为 <em>路径参数</em> ：</p><div class="language-js"><pre><code><span class="token keyword">const</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'&lt;div&gt;User&lt;/div&gt;'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>或者，使用 <code>beforeRouteUpdate</code> <a href="./../advanced/navigation-guards.html">导航守卫</a>，它也可以取消导航：</p><div class="language-js"><pre><code><span class="token keyword">const</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'...'</span><span class="token punctuation">,</span>
  <span class="token keyword">async</span> <span class="token function">beforeRouteUpdate</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 对路由变化做出响应...</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>userData <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchUser</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="捕获所有路由或-404-not-found-路由" tabindex="-1">捕获所有路由或 404 Not found 路由 <a class="header-anchor" href="#捕获所有路由或-404-not-found-路由" aria-hidden="true">#</a></h2><div class="vueschool" data-v-3c288a82=""><a href="https://vueschool.io/lessons/404-not-found-page?friend=vuerouter" target="_blank" rel="sponsored noopener" title="Learn how to make a catch all/404 not found route" data-v-3c288a82="">在 Vue School 上观看免费视频课程</a></div><p>常规参数只匹配 url 片段之间的字符，用 <code>/</code> 分隔。如果我们想匹配<strong>任意路径</strong>，我们可以使用自定义的 <em>路径参数</em> 正则表达式，在 <em>路径参数</em> 后面的括号中加入 正则表达式 :</p><div class="language-js"><pre><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token comment">// 将匹配所有内容并将其放在 `$route.params.pathMatch` 下</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/:pathMatch(.*)*'</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'NotFound'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> NotFound <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 将匹配以 `/user-` 开头的所有内容，并将其放在 `$route.params.afterUser` 下</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/user-:afterUser(.*)'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> UserGeneric <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre></div><p>在这个特定的场景中，我们在括号之间使用了<a href="./route-matching-syntax.html#在参数中自定义正则">自定义正则表达式</a>，并将<code>pathMatch</code> 参数标记为<a href="./route-matching-syntax.html#可选参数">可选可重复</a>。这样做是为了让我们在需要的时候，可以通过将 <code>path</code> 拆分成一个数组，直接导航到路由：</p><div class="language-js"><pre><code><span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'NotFound'</span><span class="token punctuation">,</span>
  <span class="token comment">// 保留当前路径并删除第一个字符，以避免目标 URL 以 `//` 开头。</span>
  <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">pathMatch</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">.</span>path<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 保留现有的查询和 hash 值，如果有的话</span>
  <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">.</span>query<span class="token punctuation">,</span>
  <span class="token literal-property property">hash</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">.</span>hash<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>更多内容请参见<a href="./route-matching-syntax.html#可重复的参数">重复参数</a>部分。</p><p>如果你正在使用<a href="./history-mode.html">历史模式</a>，请务必按照说明正确配置你的服务器。</p><h2 id="高级匹配模式" tabindex="-1">高级匹配模式 <a class="header-anchor" href="#高级匹配模式" aria-hidden="true">#</a></h2><p>Vue Router 使用自己的路径匹配语法，其灵感来自于 <code>express</code>，因此它支持许多高级匹配模式，如可选的参数，零或多个 / 一个或多个，甚至自定义的正则匹配规则。请查看<a href="./route-matching-syntax.html">高级匹配</a>文档来探索它们。</p></div>
  <router-view />
</template>

<script>
const Add = () => import(/*webpackChunkName*/'@/views/AddRoute.vue')
export default {
  mounted(){
    // this.$router.addRoute({path:'/add',component:Add})
    this.jumpLink()
  },
 methods: {
   directive(){
      this.$router.push('/home')
   },
   async jumpLink(){
    console.log(this.$router.currentRoute.value.fullPath)
     await this.$router.replace(this.$router.currentRoute.value.fullPath)
   }
 }
}
</script>

<style>

</style>