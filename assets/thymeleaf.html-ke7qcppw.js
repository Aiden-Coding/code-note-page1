import{_ as l,r as i,o,c,a as e,b as n,d as a,e as s}from"./app-GjP6hEVt.js";const d="/code-note-page1/assets/image-60-4Nk188xX.png",r="/code-note-page1/assets/image-61-6CwEEIc4.png",p="/code-note-page1/assets/image-58-NaOiNLvG.png",u="/code-note-page1/assets/image-59-DTZMMk28.png",m={},h=s('<h2 id="关于-thymeleaf" tabindex="-1"><a class="header-anchor" href="#关于-thymeleaf" aria-hidden="true">#</a> 关于 Thymeleaf</h2><p>Thymeleaf 是一个优秀的、面向 Java 的 HTML 页面模板，具有丰富的标签语言和函数。在 JSP 被淘汰之后，Thymeleaf 取而代之成为了 Spring Boot 推荐的模板引擎。</p><p><img src="'+d+'" alt="Alt text"></p><p>Thymeleaf 在有网和没网的环境下都可以正常工作，既能让美工在浏览器中查看页面的静态效果，也能让程序员在服务器查看带数据的动态页面效果。</p><p>这是因为 Thymeleaf 支持 HTML 原型，在 HTML 标签里增加额外的属性来达到模板+数据的展示方式。</p><p>浏览器在解释 HTML 的时候会忽略未定义的标签属性，所以 Thymeleaf 可以静态地运行；当有数据返回页面时，Thymeleaf 标签会动态地替换静态内容。</p><p>下面列举一些 Thymeleaf 常用的表达式、标签和函数。</p><p>1）常用表达式</p><ul><li><code>${...}</code>变量表达式</li><li><code>*{...}</code>选择表达式</li><li><code>#{...}</code>文字表达式</li><li><code>@{...}</code>URL 表达式</li><li><code>#maps</code> 对象表达式</li></ul><p>2）常用标签</p><ul><li>th:action 定义服务器端控制器路径。</li><li>th:each 循环语句</li><li>th:field 表单字段</li><li>th:href URL 链接</li><li>th:id div 标签中的 ID</li><li>th:if 条件判断</li><li>th:include 引入文件</li><li>th:fragment 定义代码片段</li><li>th:object 替换对象</li><li>th:src 图片地址</li><li>th:text 文本</li><li>th:value 属性值</li></ul><p>3）常用函数</p><ul><li><code>#dates</code> 日期函数</li><li><code>#lists</code> 列表函数</li><li><code>#arrays</code> 数组函数</li><li><code>#strings</code> 字符串函数</li><li><code>#numbers</code> 数字函数</li><li><code>#calendars</code> 日历函数</li><li><code>#objects</code> 对象函数</li><li><code>#bools</code> 布尔函数</li></ul><p>想要查看更多 Thymeleaf 表达式、标签、函数等内容，可以到 Thymeleaf 官网：</p>',14),v={href:"https://www.thymeleaf.org/",target:"_blank",rel:"noopener noreferrer"},g=s(`<h2 id="整合-thymeleaf" tabindex="-1"><a class="header-anchor" href="#整合-thymeleaf" aria-hidden="true">#</a> 整合 Thymeleaf</h2><p>第一步，在 pom.xml 文件中添加 Thymeleaf 的 stater</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-thymeleaf&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步，在 application.yml 文件中添加 Thymeleaf 的配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>spring:
  thymeleaf:
    cache: false # 开发时关闭缓存，不然看不到实时页面
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其他配置项采用默认就可以了，想要看有哪些默认项的话，可以全局打开 ThymeleafProperties.java 类。</p><p><img src="`+r+`" alt="Alt text"></p><p>Thymeleaf 模板引擎默认会读取 resources 目录下的 templates 目录，这个目录是用来存放 HTML 页面的。</p><p>第三步，新建 UserController.java 控制器。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/user&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Resource</span>
    <span class="token keyword">private</span> <span class="token class-name">UserService</span> userService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/all&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">all</span><span class="token punctuation">(</span><span class="token class-name">Model</span> model<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        model<span class="token punctuation">.</span><span class="token function">addAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;users&quot;</span><span class="token punctuation">,</span> userService<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">&quot;all&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>@Controller 注解表示该类为一个控制器类。</li><li>@RequestMapping 注解用来处理请求地址映射，可用于类或者方法。</li><li>Model 接口可以承载数据库里查到的数据，前端可以从 model 中取出来。</li></ul><p>第四步，在 resources/templates 目录下新建 all.html 文件（文件名对应控制器中 all 方法返回的字符串）.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;zh&quot; xmlns:th=&quot;http://www.thymeleaf.org&quot;&gt;
&lt;head&gt;
    &lt;meta http-equiv=&quot;content-type&quot; content=&quot;text/html;charset=utf-8&quot;&gt;
    &lt;title&gt;Thymeleaf&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;table&gt;
        &lt;tr&gt;
            &lt;td&gt;用户名&lt;/td&gt;
            &lt;td&gt;密码&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr th:each=&quot;user:\${users}&quot;&gt;
            &lt;td th:text=&quot;\${user.name}&quot;&gt;&lt;/td&gt;
            &lt;td th:text=&quot;\${user.password}&quot;&gt;&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/table&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>&lt;html lang=&quot;zh&quot; xmlns:th=&quot;http://www.thymeleaf.org&quot;&gt;</code> 为 Thymeleaf 的命名空间，通过引入命名空间就可以在 HTML 文件中使用 Thymeleaf 标签语言，用关键字 “th”来标注。</p><p>第五步，启动主类，如果看到以下信息表示启动成功。</p><p><img src="`+p+'" alt="Alt text"></p><p>第六步，在浏览器地址栏里输入 <code>http://localhost:8080/user/all</code> 访问接口。</p><p><img src="'+u+'" alt="Alt text"></p><h2 id="http-client" tabindex="-1"><a class="header-anchor" href="#http-client" aria-hidden="true">#</a> HTTP Client</h2><hr><p>.</p><hr><h2 id="源码地址" tabindex="-1"><a class="header-anchor" href="#源码地址" aria-hidden="true">#</a> 源码地址</h2>',23),b={href:"https://github.com/itwanger/coding-more",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/itwanger/codingmore-learning/tree/main/codingmore-thymeleaf",target:"_blank",rel:"noopener noreferrer"};function k(y,x){const t=i("ExternalLinkIcon");return o(),c("div",null,[h,e("blockquote",null,[e("p",null,[e("a",v,[n("https://www.thymeleaf.org/"),a(t)])])]),g,e("blockquote",null,[e("ul",null,[e("li",null,[n("编程喵："),e("a",b,[n("https://github.com/itwanger/coding-more"),a(t)])]),e("li",null,[n("codingmore-thymeleaf: "),e("a",f,[n("https://github.com/itwanger/codingmore-learning"),a(t)])])])])])}const q=l(m,[["render",k],["__file","thymeleaf.html.vue"]]);export{q as default};
