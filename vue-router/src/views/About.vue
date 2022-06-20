<template>
  <p>About Page</p>
  <div id="main"><h1 id="带参数的动态路由匹配" tabindex="-1">带参数的动态路由匹配 <a class="header-anchor" href="#带参数的动态路由匹配" aria-hidden="true">#</a></h1><div class="vueschool" data-v-3c288a82=""><a href="https://vueschool.io/lessons/dynamic-routes?friend=vuerouter" target="_blank" rel="sponsored noopener" title="Learn about dynamic route matching with params" data-v-3c288a82="">在 Vue School 上观看免费视频课程</a></div><p>很多时候，我们需要将给定匹配模式的路由映射到同一个组件。例如，我们可能有一个 <code>User</code> 组件，它应该对所有用户进行渲染，但用户 ID 不同。在 Vue Router 中，我们可以在路径中使用一个动态字段来实现，我们称之为 <em>路径参数</em> ：</p><div class="language-js"><pre><code><span class="token keyword">const</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'&lt;div&gt;User&lt;/div&gt;'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// 这些都会传递给 `createRouter`</span>
<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token comment">// 动态字段以冒号开始</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users/:id'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> User <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre></div><p>现在像 <code>/users/johnny</code> 和 <code>/users/jolyne</code> 这样的 URL 都会映射到同一个路由。</p><p><em>路径参数</em> 用冒号 <code>:</code> 表示。当一个路由被匹配时，它的 <em>params</em> 的值将在每个组件中以 <code>this.$route.params</code> 的形式暴露出来。因此，我们可以通过更新 <code>User</code> 的模板来呈现当前的用户 ID：</p><div class="language-js"><pre><code><span class="token keyword">const</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'&lt;div&gt;User {{ $route.params.id }}&lt;/div&gt;'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>你可以在同一个路由中设置有多个 <em>路径参数</em>，它们会映射到 <code>$route.params</code> 上的相应字段。例如：</p><table><thead><tr><th>匹配模式</th><th>匹配路径</th><th>$route.params</th></tr></thead><tbody><tr><td>/users/:username</td><td>/users/eduardo</td><td><code>{ username: 'eduardo' }</code></td></tr><tr><td>/users/:username/posts/:postId</td><td>/users/eduardo/posts/123</td><td><code>{ username: 'eduardo', postId: '123' }</code></td></tr></tbody></table><p>除了 <code>$route.params</code> 之外，<code>$route</code> 对象还公开了其他有用的信息，如 <code>$route.query</code>（如果 URL 中存在参数）、<code>$route.hash</code> 等。你可以在 <a href="./../../api/#routelocationnormalized">API 参考</a>中查看完整的细节。</p><p>这个例子的 demo 可以在<a href="https://codesandbox.io/s/route-params-vue-router-examples-mlb14?from-embed&amp;initialpath=%2Fusers%2Feduardo%2Fposts%2F1" target="_blank" rel="noopener noreferrer">这里</a>找到。</p><h2 id="响应路由参数的变化" tabindex="-1">响应路由参数的变化 <a class="header-anchor" href="#响应路由参数的变化" aria-hidden="true">#</a></h2><div class="vueschool" data-v-3c288a82=""><a href="https://vueschool.io/lessons/reacting-to-param-changes?friend=vuerouter" target="_blank" rel="sponsored noopener" title="Learn how to react to param changes" data-v-3c288a82="">在 Vue School 上观看免费视频课程</a></div><p>使用带有参数的路由时需要注意的是，当用户从 <code>/users/johnny</code> 导航到 <code>/users/jolyne</code> 时，<strong>相同的组件实例将被重复使用</strong>。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。<strong>不过，这也意味着组件的生命周期钩子不会被调用</strong>。</p><p>要对同一个组件中参数的变化做出响应的话，你可以简单地 watch <code>$route</code> 对象上的任意属性，在这个场景中，就是 <code>$route.params</code> ：</p><div class="language-js"><pre><code><span class="token keyword">const</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'...'</span><span class="token punctuation">,</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$watch</span><span class="token punctuation">(</span>
      <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">.</span>params<span class="token punctuation">,</span>
      <span class="token punctuation">(</span><span class="token parameter">toParams<span class="token punctuation">,</span> previousParams</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// 对路由变化做出响应...</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
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
  <button @click="directive">跳转到Home去</button>
  <router-view />
</template>

<script>
export default {
 methods: {
   directive(){
      this.$router.push('/')
   }
 }
}
</script>

<style>

</style>