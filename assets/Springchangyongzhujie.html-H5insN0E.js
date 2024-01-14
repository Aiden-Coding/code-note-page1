import{_ as n,o as s,c as a,e}from"./app-GjP6hEVt.js";const t={},p=e(`<blockquote><p>参考了尚硅谷注解版，注解版后面的源码没看，雷神讲的太散了</p></blockquote><h2 id="spring注解" tabindex="-1"><a class="header-anchor" href="#spring注解" aria-hidden="true">#</a> Spring注解</h2><h3 id="annotationconfigapplicationcontext" tabindex="-1"><a class="header-anchor" href="#annotationconfigapplicationcontext" aria-hidden="true">#</a> AnnotationConfigApplicationContext</h3><h3 id="组件添加" tabindex="-1"><a class="header-anchor" href="#组件添加" aria-hidden="true">#</a> 组件添加</h3><h4 id="configuration-bean" tabindex="-1"><a class="header-anchor" href="#configuration-bean" aria-hidden="true">#</a> @Configuration+@Bean</h4><h5 id="xml文件方式" tabindex="-1"><a class="header-anchor" href="#xml文件方式" aria-hidden="true">#</a> XML文件方式</h5><h6 id="person" tabindex="-1"><a class="header-anchor" href="#person" aria-hidden="true">#</a> Person</h6><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span> 
   
   <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    
   <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>
   
   <span class="token keyword">private</span> <span class="token class-name">String</span> nickName<span class="token punctuation">;</span>
   
   <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getNickName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> nickName<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setNickName</span><span class="token punctuation">(</span><span class="token class-name">String</span> nickName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>nickName <span class="token operator">=</span> nickName<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> name<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> age<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   
   <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">Integer</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// TODO Auto-generated constructor stub</span>
   <span class="token punctuation">}</span>
   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">&quot;Person [name=&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;, age=&quot;</span> <span class="token operator">+</span> age <span class="token operator">+</span> <span class="token string">&quot;, nickName=&quot;</span> <span class="token operator">+</span> nickName <span class="token operator">+</span> <span class="token string">&quot;]&quot;</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="beans-xml-配置文件" tabindex="-1"><a class="header-anchor" href="#beans-xml-配置文件" aria-hidden="true">#</a> beans.xml-配置文件</h6><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>beans</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/beans<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name"><span class="token namespace">xmlns:</span>context</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/context<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name"><span class="token namespace">xmlns:</span>aop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/aop<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name"><span class="token namespace">xmlns:</span>tx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/tx<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
      http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context-4.3.xsd
      http://www.springframework.org/schema/aop http://www.springframework.org/schema/aop/spring-aop-4.3.xsd
      http://www.springframework.org/schema/tx http://www.springframework.org/schema/tx/spring-tx-4.3.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">context:</span>component-scan</span> <span class="token attr-name">base-package</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.atguigu<span class="token punctuation">&quot;</span></span> <span class="token attr-name">use-default-filters</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">context:</span>component-scan</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>person<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.atguigu.bean.Person<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>age<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>18<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zhangsan<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>beans</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="maintest" tabindex="-1"><a class="header-anchor" href="#maintest" aria-hidden="true">#</a> MainTest</h6><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MainTest</span> <span class="token punctuation">{</span>
   
   <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">&quot;resource&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">ApplicationContext</span> applicationContext <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ClassPathXmlApplicationContext</span><span class="token punctuation">(</span><span class="token string">&quot;beans.xml&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">Person</span> bean <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">)</span> applicationContext<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">&quot;person&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bean<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Person [name=zhangsan, age=18, nickName=null]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="注解方式" tabindex="-1"><a class="header-anchor" href="#注解方式" aria-hidden="true">#</a> 注解方式</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//配置类==配置文件</span>
<span class="token annotation punctuation">@Configuration</span>  <span class="token comment">//告诉Spring这是一个配置类</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MainConfig</span> <span class="token punctuation">{</span>
   
   <span class="token comment">//给容器中注册一个Bean;类型为返回值的类型，id默认是用方法名作为id(就是bean的名字)，在这里就是person01</span>
   <span class="token annotation punctuation">@Bean</span>
   <span class="token keyword">public</span> <span class="token class-name">Person</span> <span class="token function">person01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;lisi&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者以下面的这种方式</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//配置类==配置文件</span>
<span class="token annotation punctuation">@Configuration</span>  <span class="token comment">//告诉Spring这是一个配置类</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MainConfig</span> <span class="token punctuation">{</span>
   
   <span class="token comment">//这里bean的name就是person</span>
    <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span><span class="token string">&quot;person&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">public</span> <span class="token class-name">Person</span> <span class="token function">person01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;lisi&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="componentscans" tabindex="-1"><a class="header-anchor" href="#componentscans" aria-hidden="true">#</a> @ComponentScans</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//配置类==配置文件</span>
<span class="token annotation punctuation">@Configuration</span>  <span class="token comment">//告诉Spring这是一个配置类</span>

<span class="token annotation punctuation">@ComponentScans</span><span class="token punctuation">(</span>
      value <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@ComponentScan</span><span class="token punctuation">(</span>value<span class="token operator">=</span><span class="token string">&quot;com.atguigu&quot;</span><span class="token punctuation">,</span>includeFilters <span class="token operator">=</span> <span class="token punctuation">{</span>
<span class="token comment">/*                @Filter(type=FilterType.ANNOTATION,classes={Controller.class}),
                  @Filter(type=FilterType.ASSIGNABLE_TYPE,classes={BookService.class}),*/</span>
                  <span class="token annotation punctuation">@Filter</span><span class="token punctuation">(</span>type<span class="token operator">=</span><span class="token class-name">FilterType</span><span class="token punctuation">.</span><span class="token constant">CUSTOM</span><span class="token punctuation">,</span>classes<span class="token operator">=</span><span class="token punctuation">{</span><span class="token class-name">MyTypeFilter</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>useDefaultFilters <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span>   
      <span class="token punctuation">}</span>
      <span class="token punctuation">)</span>
<span class="token comment">//@ComponentScan  value:指定要扫描的包</span>
<span class="token comment">//excludeFilters = Filter[] ：指定扫描的时候按照什么规则排除那些组件</span>
<span class="token comment">//includeFilters = Filter[] ：指定扫描的时候只需要包含哪些组件</span>
<span class="token comment">//FilterType.ANNOTATION：按照注解</span>
<span class="token comment">//FilterType.ASSIGNABLE_TYPE：按照给定的类型；</span>
<span class="token comment">//FilterType.ASPECTJ：使用ASPECTJ表达式</span>
<span class="token comment">//FilterType.REGEX：使用正则指定</span>
<span class="token comment">//FilterType.CUSTOM：使用自定义规则</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MainConfig</span> <span class="token punctuation">{</span>
   
   <span class="token comment">//给容器中注册一个Bean;类型为返回值的类型，id默认是用方法名作为id</span>
   <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span><span class="token string">&quot;person&quot;</span><span class="token punctuation">)</span>
   <span class="token keyword">public</span> <span class="token class-name">Person</span> <span class="token function">person01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;lisi&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="自定义typefilter指定包扫描规则" tabindex="-1"><a class="header-anchor" href="#自定义typefilter指定包扫描规则" aria-hidden="true">#</a> 自定义TypeFilter指定包扫描规则</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyTypeFilter</span> <span class="token keyword">implements</span> <span class="token class-name">TypeFilter</span> <span class="token punctuation">{</span>

   <span class="token doc-comment comment">/**
    * metadataReader：读取到的当前正在扫描的类的信息
    * metadataReaderFactory:可以获取到其他任何类信息的
    */</span>
   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">match</span><span class="token punctuation">(</span><span class="token class-name">MetadataReader</span> metadataReader<span class="token punctuation">,</span> <span class="token class-name">MetadataReaderFactory</span> metadataReaderFactory<span class="token punctuation">)</span>
         <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
      <span class="token comment">// TODO Auto-generated method stub</span>
      <span class="token comment">//获取当前类注解的信息</span>
      <span class="token class-name">AnnotationMetadata</span> annotationMetadata <span class="token operator">=</span> metadataReader<span class="token punctuation">.</span><span class="token function">getAnnotationMetadata</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">//获取当前正在扫描的类的类信息</span>
      <span class="token class-name">ClassMetadata</span> classMetadata <span class="token operator">=</span> metadataReader<span class="token punctuation">.</span><span class="token function">getClassMetadata</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">//获取当前类资源（类的路径）</span>
      <span class="token class-name">Resource</span> resource <span class="token operator">=</span> metadataReader<span class="token punctuation">.</span><span class="token function">getResource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      
      <span class="token class-name">String</span> className <span class="token operator">=</span> classMetadata<span class="token punctuation">.</span><span class="token function">getClassName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;---&gt;&quot;</span><span class="token operator">+</span>className<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>className<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&quot;er&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="scope" tabindex="-1"><a class="header-anchor" href="#scope" aria-hidden="true">#</a> @Scope</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MainConfig2</span> <span class="token punctuation">{</span>
   
	<span class="token doc-comment comment">/**
	 * <span class="token keyword">@see</span> <span class="token reference"><span class="token class-name">ConfigurableBeanFactory</span><span class="token punctuation">#</span><span class="token field">SCOPE_PROTOTYPE</span></span>   任何环境都可以使用
	 * <span class="token keyword">@see</span> <span class="token reference"><span class="token class-name">ConfigurableBeanFactory</span><span class="token punctuation">#</span><span class="token field">SCOPE_SINGLETON</span></span>   任何环境都可以使用
	 * <span class="token keyword">@see</span> <span class="token reference"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">WebApplicationContext</span><span class="token punctuation">#</span><span class="token field">SCOPE_REQUEST</span></span>  request    只能在web容器里用
	 * <span class="token keyword">@see</span> <span class="token reference"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">WebApplicationContext</span><span class="token punctuation">#</span><span class="token field">SCOPE_SESSION</span></span>	 sesssion   只能在web容器里用
	 * 
	 * @Scope:调整作用域
	 * prototype：多实例的：ioc容器启动并不会去调用方法创建对象放在容器中。
	 * 					每次获取的时候才会调用方法创建对象；
	 * singleton：单实例的（默认值）：ioc容器启动会调用方法创建对象放到ioc容器中。
	 * 			以后每次获取就是直接从容器（map.get()）中拿，
	 * request：同一次请求创建一个实例
	 * session：同一个session创建一个实例
	 *
	 * 默认是单实例的
	 * 
	 */</span>
	<span class="token annotation punctuation">@Scope</span><span class="token punctuation">(</span><span class="token string">&quot;prototype&quot;</span><span class="token punctuation">)</span>
	<span class="token annotation punctuation">@Lazy</span>
	<span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span><span class="token string">&quot;person&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">public</span> <span class="token class-name">Person</span> <span class="token function">person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;给容器中添加Person....&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="lazy" tabindex="-1"><a class="header-anchor" href="#lazy" aria-hidden="true">#</a> @Lazy</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MainConfig2</span> <span class="token punctuation">{</span>
   
   <span class="token doc-comment comment">/**
    * 
    * 懒加载：
    *        单实例bean：默认在容器启动的时候创建对象；
    *        懒加载：容器启动不创建对象。第一次使用(获取)Bean创建对象，并初始化；
    * 
    */</span>
   <span class="token annotation punctuation">@Lazy</span>
   <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span><span class="token string">&quot;person&quot;</span><span class="token punctuation">)</span>
   <span class="token keyword">public</span> <span class="token class-name">Person</span> <span class="token function">person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;给容器中添加Person....&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="conditional" tabindex="-1"><a class="header-anchor" href="#conditional" aria-hidden="true">#</a> @Conditional</h4><h5 id="mainconfig2" tabindex="-1"><a class="header-anchor" href="#mainconfig2" aria-hidden="true">#</a> MainConfig2</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//类中组件统一设置。满足当前条件，这个类中配置的所有bean注册才能生效；</span>
<span class="token annotation punctuation">@Conditional</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">WindowsCondition</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MainConfig2</span> <span class="token punctuation">{</span>
   
   
   <span class="token doc-comment comment">/**
    * @Conditional(<span class="token punctuation">{</span>Condition<span class="token punctuation">}</span>) ： 按照一定的条件进行判断，满足条件给容器中注册bean
    * 
    * 如果系统是windows，给容器中注册(&quot;bill&quot;)
    * 如果是linux系统，给容器中注册(&quot;linus&quot;)
    */</span>
   
   <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span><span class="token string">&quot;bill&quot;</span><span class="token punctuation">)</span>
   <span class="token keyword">public</span> <span class="token class-name">Person</span> <span class="token function">person01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;Bill Gates&quot;</span><span class="token punctuation">,</span><span class="token number">62</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   
   <span class="token annotation punctuation">@Conditional</span><span class="token punctuation">(</span><span class="token class-name">LinuxCondition</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
   <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span><span class="token string">&quot;linus&quot;</span><span class="token punctuation">)</span>
   <span class="token keyword">public</span> <span class="token class-name">Person</span> <span class="token function">person02</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;linus&quot;</span><span class="token punctuation">,</span> <span class="token number">48</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="linuxcondition" tabindex="-1"><a class="header-anchor" href="#linuxcondition" aria-hidden="true">#</a> LinuxCondition</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//判断是否linux系统</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LinuxCondition</span> <span class="token keyword">implements</span> <span class="token class-name">Condition</span> <span class="token punctuation">{</span>

   <span class="token doc-comment comment">/**
    * ConditionContext：判断条件能使用的上下文（环境）
    * AnnotatedTypeMetadata：注释信息
    */</span>
   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">matches</span><span class="token punctuation">(</span><span class="token class-name">ConditionContext</span> context<span class="token punctuation">,</span> <span class="token class-name">AnnotatedTypeMetadata</span> metadata<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// TODO是否linux系统</span>
      <span class="token comment">//1、能获取到ioc使用的beanfactory</span>
      <span class="token class-name">ConfigurableListableBeanFactory</span> beanFactory <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">getBeanFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">//2、获取类加载器</span>
      <span class="token class-name">ClassLoader</span> classLoader <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">//3、获取当前环境信息</span>
      <span class="token class-name">Environment</span> environment <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">getEnvironment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">//4、获取到bean定义的注册类</span>
      <span class="token class-name">BeanDefinitionRegistry</span> registry <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">getRegistry</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      
      <span class="token class-name">String</span> property <span class="token operator">=</span> environment<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;os.name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      
      <span class="token comment">//可以判断容器中的bean注册情况，也可以给容器中注册bean</span>
      <span class="token keyword">boolean</span> definition <span class="token operator">=</span> registry<span class="token punctuation">.</span><span class="token function">containsBeanDefinition</span><span class="token punctuation">(</span><span class="token string">&quot;person&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>property<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&quot;linux&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      
      <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="windowscondition" tabindex="-1"><a class="header-anchor" href="#windowscondition" aria-hidden="true">#</a> WindowsCondition</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//判断是否windows系统</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WindowsCondition</span> <span class="token keyword">implements</span> <span class="token class-name">Condition</span> <span class="token punctuation">{</span>

   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">matches</span><span class="token punctuation">(</span><span class="token class-name">ConditionContext</span> context<span class="token punctuation">,</span> <span class="token class-name">AnnotatedTypeMetadata</span> metadata<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">Environment</span> environment <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">getEnvironment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">String</span> property <span class="token operator">=</span> environment<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;os.name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>property<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&quot;Windows&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="import" tabindex="-1"><a class="header-anchor" href="#import" aria-hidden="true">#</a> @Import</h4><h5 id="mainconfig2-1" tabindex="-1"><a class="header-anchor" href="#mainconfig2-1" aria-hidden="true">#</a> MainConfig2</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@Import</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">Color</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span><span class="token class-name">Red</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span><span class="token class-name">MyImportSelector</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span><span class="token class-name">MyImportBeanDefinitionRegistrar</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">//@Import导入组件，id默认是组件的全类名</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MainConfig2</span> <span class="token punctuation">{</span>
   
   <span class="token doc-comment comment">/**
    * 给容器中注册组件；
    * 1）、包扫描+组件标注注解（@Controller/@Service/@Repository/@Component）[只能注册自己写的类]
    * 2）、@Bean[导入的第三方包里面的组件]
    * 3）、@Import[快速给容器中导入一个组件]
    *        1）、@Import(要导入到容器中的组件)；容器中就会自动注册这个组件，id默认是全类名
    *        2）、ImportSelector:返回需要导入的组件的全类名数组；
    *        3）、ImportBeanDefinitionRegistrar:手动注册bean到容器中
    */</span>
   <span class="token annotation punctuation">@Bean</span>
   <span class="token keyword">public</span> <span class="token class-name">ColorFactoryBean</span> <span class="token function">colorFactoryBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ColorFactoryBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="myimportselector" tabindex="-1"><a class="header-anchor" href="#myimportselector" aria-hidden="true">#</a> MyImportSelector</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//自定义逻辑返回需要导入的组件</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyImportSelector</span> <span class="token keyword">implements</span> <span class="token class-name">ImportSelector</span> <span class="token punctuation">{</span>

   <span class="token comment">//返回值，就是到导入到容器中的组件全类名</span>
   <span class="token comment">//AnnotationMetadata:@Import引入MyImportSelector的类的所有注解信息</span>
   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">selectImports</span><span class="token punctuation">(</span><span class="token class-name">AnnotationMetadata</span> importingClassMetadata<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//importingClassMetadata.get</span>
      <span class="token comment">//方法不要返回null值，不然会报错</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">&quot;com.atguigu.bean.Blue&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;com.atguigu.bean.Yellow&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="myimportbeandefinitionregistrar" tabindex="-1"><a class="header-anchor" href="#myimportbeandefinitionregistrar" aria-hidden="true">#</a> MyImportBeanDefinitionRegistrar</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyImportBeanDefinitionRegistrar</span> <span class="token keyword">implements</span> <span class="token class-name">ImportBeanDefinitionRegistrar</span> <span class="token punctuation">{</span>

   <span class="token doc-comment comment">/**
    * AnnotationMetadata：当前类的注解信息
    * BeanDefinitionRegistry:BeanDefinition注册类；
    *        把所有需要添加到容器中的bean；调用
    *        BeanDefinitionRegistry.registerBeanDefinition手工注册进来
    */</span>
   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">registerBeanDefinitions</span><span class="token punctuation">(</span><span class="token class-name">AnnotationMetadata</span> importingClassMetadata<span class="token punctuation">,</span> <span class="token class-name">BeanDefinitionRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      
      <span class="token keyword">boolean</span> definition <span class="token operator">=</span> registry<span class="token punctuation">.</span><span class="token function">containsBeanDefinition</span><span class="token punctuation">(</span><span class="token string">&quot;com.atguigu.bean.Red&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">boolean</span> definition2 <span class="token operator">=</span> registry<span class="token punctuation">.</span><span class="token function">containsBeanDefinition</span><span class="token punctuation">(</span><span class="token string">&quot;com.atguigu.bean.Blue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>definition <span class="token operator">&amp;&amp;</span> definition2<span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token comment">//指定Bean定义信息；（Bean的类型，Bean。。。）</span>
         <span class="token class-name">RootBeanDefinition</span> beanDefinition <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RootBeanDefinition</span><span class="token punctuation">(</span><span class="token class-name">RainBow</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token comment">//注册一个Bean，指定bean名</span>
         registry<span class="token punctuation">.</span><span class="token function">registerBeanDefinition</span><span class="token punctuation">(</span><span class="token string">&quot;rainBow&quot;</span><span class="token punctuation">,</span> beanDefinition<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Color</span> <span class="token punctuation">{</span>
   
   <span class="token keyword">private</span> <span class="token class-name">Car</span> car<span class="token punctuation">;</span>

   <span class="token keyword">public</span> <span class="token class-name">Car</span> <span class="token function">getCar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> car<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setCar</span><span class="token punctuation">(</span><span class="token class-name">Car</span> car<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>car <span class="token operator">=</span> car<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">&quot;Color [car=&quot;</span> <span class="token operator">+</span> car <span class="token operator">+</span> <span class="token string">&quot;]&quot;</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Blue</span> <span class="token punctuation">{</span>
   
   <span class="token keyword">public</span> <span class="token class-name">Blue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;blue...constructor&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;blue...init...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">detory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;blue...detory...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="factorybean" tabindex="-1"><a class="header-anchor" href="#factorybean" aria-hidden="true">#</a> FactoryBean</h4><h5 id="mainconfig2-2" tabindex="-1"><a class="header-anchor" href="#mainconfig2-2" aria-hidden="true">#</a> MainConfig2</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MainConfig2</span> <span class="token punctuation">{</span>
  
   
   <span class="token doc-comment comment">/**
    * 给容器中注册组件；
    * 1）、包扫描+组件标注注解（@Controller/@Service/@Repository/@Component）[自己写的类]
    * 2）、@Bean[导入的第三方包里面的组件]
    * 3）、@Import[快速给容器中导入一个组件]
    *        1）、@Import(要导入到容器中的组件)；容器中就会自动注册这个组件，id默认是全类名
    *        2）、ImportSelector:返回需要导入的组件的全类名数组；
    *        3）、ImportBeanDefinitionRegistrar:手动注册bean到容器中
    * 4）、使用Spring提供的 FactoryBean（工厂Bean）;
    *        1）、默认获取到的是工厂bean调用getObject创建的对象
    *        2）、要获取工厂Bean本身，我们需要给id前面加一个&amp;
    *           &amp;colorFactoryBean
    *
    * 虽然这里装配的是ColorFactoryBean，但实际上beand的类型是Color
    */</span>
   <span class="token annotation punctuation">@Bean</span>
   <span class="token keyword">public</span> <span class="token class-name">ColorFactoryBean</span> <span class="token function">colorFactoryBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ColorFactoryBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="colorfactorybean" tabindex="-1"><a class="header-anchor" href="#colorfactorybean" aria-hidden="true">#</a> ColorFactoryBean</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//创建一个Spring定义的FactoryBean</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ColorFactoryBean</span> <span class="token keyword">implements</span> <span class="token class-name">FactoryBean</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Color</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

   <span class="token comment">//返回一个Color对象，这个对象会添加到容器中</span>
   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token class-name">Color</span> <span class="token function">getObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
      <span class="token comment">// TODO Auto-generated method stub</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;ColorFactoryBean...getObject...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> <span class="token function">getObjectType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// TODO Auto-generated method stub</span>
      <span class="token keyword">return</span> <span class="token class-name">Color</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   <span class="token comment">//是单例？</span>
   <span class="token comment">//true：这个bean是单实例，在容器中保存一份</span>
   <span class="token comment">//false：多实例，每次获取都会创建一个新的bean；</span>
   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isSingleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// TODO Auto-generated method stub</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="ioctest" tabindex="-1"><a class="header-anchor" href="#ioctest" aria-hidden="true">#</a> IOCTest</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IOCTest</span> <span class="token punctuation">{</span>
   <span class="token class-name">AnnotationConfigApplicationContext</span> applicationContext <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AnnotationConfigApplicationContext</span><span class="token punctuation">(</span><span class="token class-name">MainConfig2</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   
   
   <span class="token annotation punctuation">@Test</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testImport</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token function">printBeans</span><span class="token punctuation">(</span>applicationContext<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">Blue</span> bean <span class="token operator">=</span> applicationContext<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">Blue</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bean<span class="token punctuation">)</span><span class="token punctuation">;</span>
      
      <span class="token comment">//工厂Bean获取的是调用getObject创建的对象</span>
      <span class="token class-name">Object</span> bean2 <span class="token operator">=</span> applicationContext<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">&quot;colorFactoryBean&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;bean的类型：&quot;</span><span class="token operator">+</span>bean2<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//pos_1   输出：bean的类型：class com.atguigu.bean.Color</span>
      
      <span class="token class-name">Object</span> bean4 <span class="token operator">=</span> applicationContext<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">&quot;&amp;colorFactoryBean&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bean4<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//pos_2  输出：class com.atguigu.bean.ColorFactoryBean</span>
   <span class="token punctuation">}</span>
   
   <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">printBeans</span><span class="token punctuation">(</span><span class="token class-name">AnnotationConfigApplicationContext</span> applicationContext<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> definitionNames <span class="token operator">=</span> applicationContext<span class="token punctuation">.</span><span class="token function">getBeanDefinitionNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> name <span class="token operator">:</span> definitionNames<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//前面无关的输出省略</span>

colorFactoryBean
<span class="token class-name">ColorFactoryBean</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>getObject<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
bean的类型：<span class="token keyword">class</span> <span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>bean<span class="token punctuation">.</span></span>Color</span>
<span class="token keyword">class</span> <span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>bean<span class="token punctuation">.</span></span>ColorFactoryBean</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h3><h4 id="bean指定初始化和销毁方法" tabindex="-1"><a class="header-anchor" href="#bean指定初始化和销毁方法" aria-hidden="true">#</a> @Bean指定初始化和销毁方法</h4><h5 id="ioctest-lifecycle" tabindex="-1"><a class="header-anchor" href="#ioctest-lifecycle" aria-hidden="true">#</a> IOCTest_LifeCycle</h5><blockquote><p>后面的几个用的都是这个测试类</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IOCTest_LifeCycle</span> <span class="token punctuation">{</span>
   
   <span class="token annotation punctuation">@Test</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token comment">//1、创建ioc容器</span>
      <span class="token class-name">AnnotationConfigApplicationContext</span> applicationContext <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AnnotationConfigApplicationContext</span><span class="token punctuation">(</span><span class="token class-name">MainConfigOfLifeCycle</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;容器创建完成...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      
      <span class="token comment">//applicationContext.getBean(&quot;car&quot;);</span>
      <span class="token comment">//关闭容器</span>
      applicationContext<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="mainconfigoflifecycle" tabindex="-1"><a class="header-anchor" href="#mainconfigoflifecycle" aria-hidden="true">#</a> MainConfigOfLifeCycle</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">ApplicationListener</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">ComponentScan</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Scope</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>bean<span class="token punctuation">.</span></span><span class="token class-name">Car</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * bean的生命周期：
 *        bean创建---初始化----销毁的过程
 * 容器管理bean的生命周期；
 * 我们可以自定义初始化和销毁方法；容器在bean进行到当前生命周期的时候来调用我们自定义的初始化和销毁方法
 * 
 * 构造（对象创建）
 *        单实例：在容器启动的时候创建对象
 *        多实例：在每次获取的时候创建对象\\
 * 初始化：
 * 		对象创建完成，并赋值好，调用初始化方法。。。
 * BeanPostProcessor.postProcessAfterInitialization
 * 销毁：
 * 		单实例：容器关闭的时候
 * 		多实例：容器不会管理这个bean；容器不会调用销毁方法；
 * 
 * 1）、指定初始化和销毁方法；
 *        通过@Bean指定init-method和destroy-method；
 * <span class="token keyword">@author</span> lfy
 *
 */</span>
<span class="token annotation punctuation">@ComponentScan</span><span class="token punctuation">(</span><span class="token string">&quot;com.atguigu.bean&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MainConfigOfLifeCycle</span> <span class="token punctuation">{</span>
   
   <span class="token comment">//@Scope(&quot;prototype&quot;)</span>
   <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span>initMethod<span class="token operator">=</span><span class="token string">&quot;init&quot;</span><span class="token punctuation">,</span>destroyMethod<span class="token operator">=</span><span class="token string">&quot;detory&quot;</span><span class="token punctuation">)</span>
   <span class="token keyword">public</span> <span class="token class-name">Car</span> <span class="token function">car</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>
   
   <span class="token keyword">public</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;car constructor...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;car ... init...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">detory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;car ... detory...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="输出" tabindex="-1"><a class="header-anchor" href="#输出" aria-hidden="true">#</a> 输出</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>car constructor<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
car <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> init<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
容器创建完成
car <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> detory<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="initializingbean和disposablebean" tabindex="-1"><a class="header-anchor" href="#initializingbean和disposablebean" aria-hidden="true">#</a> InitializingBean和DisposableBean</h4><h5 id="mainconfigoflifecycle-1" tabindex="-1"><a class="header-anchor" href="#mainconfigoflifecycle-1" aria-hidden="true">#</a> MainConfigOfLifeCycle</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * bean的生命周期：
 *        bean创建---初始化----销毁的过程
 * 容器管理bean的生命周期；
 * 我们可以自定义初始化和销毁方法；容器在bean进行到当前生命周期的时候来调用我们自定义的初始化和销毁方法
 * 
 * 构造（对象创建）
 *        单实例：在容器启动的时候创建对象
 *        多实例：在每次获取的时候创建对象\\
 * 
 * BeanPostProcessor.postProcessBeforeInitialization
 * 初始化：
 *        对象创建完成，并赋值好，调用初始化方法。。。
 * BeanPostProcessor.postProcessAfterInitialization
 * 销毁：
 *        单实例：容器关闭的时候
 *        多实例：容器不会管理这个bean；容器不会调用销毁方法；
 * 
 * 
 * 遍历得到容器中所有的BeanPostProcessor；挨个执行beforeInitialization，
 * 一但返回null，跳出for循环，不会执行后面的BeanPostProcessor.postProcessorsBeforeInitialization
 * 
 * BeanPostProcessor原理
 * populateBean(beanName, mbd, instanceWrapper);给bean进行属性赋值
 * initializeBean
 * <span class="token punctuation">{</span>
 * applyBeanPostProcessorsBeforeInitialization(wrappedBean, beanName);
 * invokeInitMethods(beanName, wrappedBean, mbd);执行自定义初始化
 * applyBeanPostProcessorsAfterInitialization(wrappedBean, beanName);
 *<span class="token punctuation">}</span>
 * 
 * 
 * 
 * 1）、指定初始化和销毁方法；
 *        通过@Bean指定init-method和destroy-method；
 * 2）、通过让Bean实现InitializingBean（定义初始化逻辑），
 *              DisposableBean（定义销毁逻辑）;
 * 
 * <span class="token keyword">@author</span> lfy
 *
 */</span>
<span class="token annotation punctuation">@ComponentScan</span><span class="token punctuation">(</span><span class="token string">&quot;com.atguigu.bean&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MainConfigOfLifeCycle</span> <span class="token punctuation">{</span>
   
   <span class="token comment">//@Scope(&quot;prototype&quot;)</span>
   <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span>initMethod<span class="token operator">=</span><span class="token string">&quot;init&quot;</span><span class="token punctuation">,</span>destroyMethod<span class="token operator">=</span><span class="token string">&quot;detory&quot;</span><span class="token punctuation">)</span>
   <span class="token keyword">public</span> <span class="token class-name">Car</span> <span class="token function">car</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="cat" tabindex="-1"><a class="header-anchor" href="#cat" aria-hidden="true">#</a> Cat</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token keyword">implements</span> <span class="token class-name">InitializingBean</span><span class="token punctuation">,</span><span class="token class-name">DisposableBean</span> <span class="token punctuation">{</span>
   
   <span class="token keyword">public</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;cat constructor...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
      <span class="token comment">// TODO Auto-generated method stub</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;cat...destroy...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">afterPropertiesSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
      <span class="token comment">// TODO Auto-generated method stub</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;cat...afterPropertiesSet...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="输出-1" tabindex="-1"><a class="header-anchor" href="#输出-1" aria-hidden="true">#</a> 输出</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>cat constructor<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
cat<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>afterPropertiesSet<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
car constructor<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
car <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> init<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
容器创建完成
car <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> detory<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
cat<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>destroy<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="postconstruct和-predestroy" tabindex="-1"><a class="header-anchor" href="#postconstruct和-predestroy" aria-hidden="true">#</a> @PostConstruct和@PreDestroy</h4><h5 id="mainconfigoflifecycle-2" tabindex="-1"><a class="header-anchor" href="#mainconfigoflifecycle-2" aria-hidden="true">#</a> MainConfigOfLifeCycle</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * bean的生命周期：
 *        bean创建---初始化----销毁的过程
 * 容器管理bean的生命周期；
 * 我们可以自定义初始化和销毁方法；容器在bean进行到当前生命周期的时候来调用我们自定义的初始化和销毁方法
 * 
 * 构造（对象创建）
 *        单实例：在容器启动的时候创建对象
 *        多实例：在每次获取的时候创建对象\\
 * 
 * BeanPostProcessor.postProcessBeforeInitialization
 * 初始化：
 *        对象创建完成，并赋值好，调用初始化方法。。。
 * BeanPostProcessor.postProcessAfterInitialization
 * 销毁：
 *        单实例：容器关闭的时候
 *        多实例：容器不会管理这个bean；容器不会调用销毁方法；
 * 
 * 
 * 遍历得到容器中所有的BeanPostProcessor；挨个执行beforeInitialization，
 * 一但返回null，跳出for循环，不会执行后面的BeanPostProcessor.postProcessorsBeforeInitialization
 * 
 * BeanPostProcessor原理
 * populateBean(beanName, mbd, instanceWrapper);给bean进行属性赋值
 * initializeBean
 * <span class="token punctuation">{</span>
 * applyBeanPostProcessorsBeforeInitialization(wrappedBean, beanName);
 * invokeInitMethods(beanName, wrappedBean, mbd);执行自定义初始化
 * applyBeanPostProcessorsAfterInitialization(wrappedBean, beanName);
 *<span class="token punctuation">}</span>
 * 
 * 
 * 
 * 1）、指定初始化和销毁方法；
 *        通过@Bean指定init-method和destroy-method；
 * 2）、通过让Bean实现InitializingBean（定义初始化逻辑），
 *              DisposableBean（定义销毁逻辑）;
 * 3）、可以使用JSR250；
 *        @PostConstruct：在bean创建完成并且属性赋值完成；来执行初始化方法
 *        @PreDestroy：在容器销毁bean之前通知我们进行清理工作
 * 
 * <span class="token keyword">@author</span> lfy
 *
 */</span>
<span class="token annotation punctuation">@ComponentScan</span><span class="token punctuation">(</span><span class="token string">&quot;com.atguigu.bean&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MainConfigOfLifeCycle</span> <span class="token punctuation">{</span>
   
   <span class="token comment">//@Scope(&quot;prototype&quot;)</span>
   <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span>initMethod<span class="token operator">=</span><span class="token string">&quot;init&quot;</span><span class="token punctuation">,</span>destroyMethod<span class="token operator">=</span><span class="token string">&quot;detory&quot;</span><span class="token punctuation">)</span>
   <span class="token keyword">public</span> <span class="token class-name">Car</span> <span class="token function">car</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="dog" tabindex="-1"><a class="header-anchor" href="#dog" aria-hidden="true">#</a> Dog</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">implements</span> <span class="token class-name">ApplicationContextAware</span> <span class="token punctuation">{</span>
   
   <span class="token comment">//@Autowired</span>
   <span class="token keyword">private</span> <span class="token class-name">ApplicationContext</span> applicationContext<span class="token punctuation">;</span>
   
   <span class="token keyword">public</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;dog constructor...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   
   <span class="token comment">//对象创建并赋值之后调用</span>
   <span class="token annotation punctuation">@PostConstruct</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Dog....@PostConstruct...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   
   <span class="token comment">//容器移除对象之前</span>
   <span class="token annotation punctuation">@PreDestroy</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">detory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Dog....@PreDestroy...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setApplicationContext</span><span class="token punctuation">(</span><span class="token class-name">ApplicationContext</span> applicationContext<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">BeansException</span> <span class="token punctuation">{</span>
      <span class="token comment">// TODO Auto-generated method stub</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>applicationContext <span class="token operator">=</span> applicationContext<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="输出-2" tabindex="-1"><a class="header-anchor" href="#输出-2" aria-hidden="true">#</a> 输出</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>cat constructor<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
cat<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>afterPropertiesSet<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
dog constructor<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token class-name">Dog</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>@<span class="token class-name">PostConstruct</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
car constructor<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
car <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> init<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
容器创建完成
car <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> detory<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token class-name">Dog</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>@<span class="token class-name">PreDestroy</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
cat<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>destroy<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="beanpostprocessor" tabindex="-1"><a class="header-anchor" href="#beanpostprocessor" aria-hidden="true">#</a> BeanPostProcessor</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token doc-comment comment">/**
 * bean的生命周期：
 *        bean创建---初始化----销毁的过程
 * 容器管理bean的生命周期；
 * 我们可以自定义初始化和销毁方法；容器在bean进行到当前生命周期的时候来调用我们自定义的初始化和销毁方法
 * 
 * 构造（对象创建）
 *        单实例：在容器启动的时候创建对象
 *        多实例：在每次获取的时候创建对象\\
 * 
 * BeanPostProcessor.postProcessBeforeInitialization
 * 初始化：
 *        对象创建完成，并赋值好，调用初始化方法。。。
 * BeanPostProcessor.postProcessAfterInitialization
 * 销毁：
 *        单实例：容器关闭的时候
 *        多实例：容器不会管理这个bean；容器不会调用销毁方法；
 * 
 * 
 * 遍历得到容器中所有的BeanPostProcessor；挨个执行beforeInitialization，
 * 一但返回null，跳出for循环，不会执行后面的BeanPostProcessor.postProcessorsBeforeInitialization
 * 
 * BeanPostProcessor原理
 * populateBean(beanName, mbd, instanceWrapper);给bean进行属性赋值
 * initializeBean
 * <span class="token punctuation">{</span>
 * applyBeanPostProcessorsBeforeInitialization(wrappedBean, beanName);
 * invokeInitMethods(beanName, wrappedBean, mbd);执行自定义初始化
 * applyBeanPostProcessorsAfterInitialization(wrappedBean, beanName);
 *<span class="token punctuation">}</span>
 * 
 * 
 * 
 * 1）、指定初始化和销毁方法；
 *        通过@Bean指定init-method和destroy-method；
 * 2）、通过让Bean实现InitializingBean（定义初始化逻辑），
 *              DisposableBean（定义销毁逻辑）;
 * 3）、可以使用JSR250；
 *        @PostConstruct：在bean创建完成并且属性赋值完成；来执行初始化方法
 *        @PreDestroy：在容器销毁bean之前通知我们进行清理工作
 * 4）、BeanPostProcessor【interface】：bean的后置处理器；
 *        在bean初始化前后进行一些处理工作；
 *        postProcessBeforeInitialization:在初始化之前工作
 *        postProcessAfterInitialization:在初始化之后工作
 * 
 * Spring底层对 BeanPostProcessor 的使用；
 *        bean赋值，注入其他组件，@Autowired，生命周期注解功能，@Async,xxx BeanPostProcessor;
 * 
 * <span class="token keyword">@author</span> lfy
 *
 */</span>
<span class="token annotation punctuation">@ComponentScan</span><span class="token punctuation">(</span><span class="token string">&quot;com.atguigu.bean&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MainConfigOfLifeCycle</span> <span class="token punctuation">{</span>
   
   <span class="token comment">//@Scope(&quot;prototype&quot;)</span>
   <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span>initMethod<span class="token operator">=</span><span class="token string">&quot;init&quot;</span><span class="token punctuation">,</span>destroyMethod<span class="token operator">=</span><span class="token string">&quot;detory&quot;</span><span class="token punctuation">)</span>
   <span class="token keyword">public</span> <span class="token class-name">Car</span> <span class="token function">car</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="mybeanpostprocessor" tabindex="-1"><a class="header-anchor" href="#mybeanpostprocessor" aria-hidden="true">#</a> MyBeanPostProcessor</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 后置处理器：初始化前后进行处理工作
 * 将后置处理器加入到容器中
 * <span class="token keyword">@author</span> lfy
 */</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyBeanPostProcessor</span> <span class="token keyword">implements</span> <span class="token class-name">BeanPostProcessor</span> <span class="token punctuation">{</span>

   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">postProcessBeforeInitialization</span><span class="token punctuation">(</span><span class="token class-name">Object</span> bean<span class="token punctuation">,</span> <span class="token class-name">String</span> beanName<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">BeansException</span> <span class="token punctuation">{</span>
      <span class="token comment">// TODO Auto-generated method stub</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;postProcessBeforeInitialization...&quot;</span><span class="token operator">+</span>beanName<span class="token operator">+</span><span class="token string">&quot;=&gt;&quot;</span><span class="token operator">+</span>bean<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> bean<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">postProcessAfterInitialization</span><span class="token punctuation">(</span><span class="token class-name">Object</span> bean<span class="token punctuation">,</span> <span class="token class-name">String</span> beanName<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">BeansException</span> <span class="token punctuation">{</span>
      <span class="token comment">// TODO Auto-generated method stub</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;postProcessAfterInitialization...&quot;</span><span class="token operator">+</span>beanName<span class="token operator">+</span><span class="token string">&quot;=&gt;&quot;</span><span class="token operator">+</span>bean<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> bean<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p><blockquote><p>自己写的组件输出内容</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>car constructor<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
postProcessBeforeInitialization<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>car<span class="token operator">=</span><span class="token operator">&gt;</span><span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>bean<span class="token punctuation">.</span></span>Car</span><span class="token annotation punctuation">@5ef60048</span>
car <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> init<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
postProcessAfterInitialization<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>car<span class="token operator">=</span><span class="token operator">&gt;</span><span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>bean<span class="token punctuation">.</span></span>Car</span><span class="token annotation punctuation">@5ef60048</span>
cat constructor<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
postProcessBeforeInitialization<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>cat<span class="token operator">=</span><span class="token operator">&gt;</span><span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>bean<span class="token punctuation">.</span></span>Cat</span><span class="token annotation punctuation">@780cb77</span>
cat<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>afterPropertiesSet<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
postProcessAfterInitialization<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>cat<span class="token operator">=</span><span class="token operator">&gt;</span><span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>bean<span class="token punctuation">.</span></span>Cat</span><span class="token annotation punctuation">@780cb77</span>
dog constructor<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
postProcessBeforeInitialization<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>dog<span class="token operator">=</span><span class="token operator">&gt;</span><span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>bean<span class="token punctuation">.</span></span>Dog</span><span class="token annotation punctuation">@4034c28c</span>
<span class="token class-name">Dog</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>@<span class="token class-name">PostConstruct</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
postProcessAfterInitialization<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>dog<span class="token operator">=</span><span class="token operator">&gt;</span><span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>bean<span class="token punctuation">.</span></span>Dog</span><span class="token annotation punctuation">@4034c28c</span>
容器创建完成<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token class-name">Dog</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>@<span class="token class-name">PreDestroy</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
cat<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>destroy<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
car <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> detory<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ol><li>BeanPostProcessor在Spring源码里大量被使用到，仅凭这里雷丰阳老师讲的一点点原理，是无法体会的，建议自己去看看Spring源码。所以这里的原理部分我也就直接省略了，在本视频中讲的太浅了。</li></ol></blockquote><h3 id="属性赋值" tabindex="-1"><a class="header-anchor" href="#属性赋值" aria-hidden="true">#</a> 属性赋值</h3><h4 id="value和-propertysource" tabindex="-1"><a class="header-anchor" href="#value和-propertysource" aria-hidden="true">#</a> @Value和@PropertySource</h4><h5 id="person-1" tabindex="-1"><a class="header-anchor" href="#person-1" aria-hidden="true">#</a> Person</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
   
   <span class="token comment">//使用@Value赋值；</span>
   <span class="token comment">//1、基本数值</span>
   <span class="token comment">//2、可以写SpEL； #{}</span>
   <span class="token comment">//3、可以写\${}；取出配置文件【properties】中的值（在运行环境变量里面的值）</span>
   
   <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">)</span>
   <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
   <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;#{20-2}&quot;</span><span class="token punctuation">)</span>
   <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>
   
   <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${person.nickName}&quot;</span><span class="token punctuation">)</span>
   <span class="token keyword">private</span> <span class="token class-name">String</span> nickName<span class="token punctuation">;</span>
   
   
   
   <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getNickName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> nickName<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setNickName</span><span class="token punctuation">(</span><span class="token class-name">String</span> nickName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>nickName <span class="token operator">=</span> nickName<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> name<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> age<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   
   <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">Integer</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// TODO Auto-generated constructor stub</span>
   <span class="token punctuation">}</span>
   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">&quot;Person [name=&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;, age=&quot;</span> <span class="token operator">+</span> age <span class="token operator">+</span> <span class="token string">&quot;, nickName=&quot;</span> <span class="token operator">+</span> nickName <span class="token operator">+</span> <span class="token string">&quot;]&quot;</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="person-properties" tabindex="-1"><a class="header-anchor" href="#person-properties" aria-hidden="true">#</a> person.properties</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>person<span class="token punctuation">.</span>nickName<span class="token operator">=</span>\\u5C0F\\u674E\\u56DB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="mainconfigofpropertyvalues" tabindex="-1"><a class="header-anchor" href="#mainconfigofpropertyvalues" aria-hidden="true">#</a> MainConfigOfPropertyValues</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//使用@PropertySource读取外部配置文件中的k/v保存到运行的环境变量中;加载完外部的配置文件以后使用\${}取出配置文件的值</span>
<span class="token annotation punctuation">@PropertySource</span><span class="token punctuation">(</span>value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;classpath:/person.properties&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MainConfigOfPropertyValues</span> <span class="token punctuation">{</span>
   
   <span class="token annotation punctuation">@Bean</span>
   <span class="token keyword">public</span> <span class="token class-name">Person</span> <span class="token function">person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="ioctest-propertyvalue" tabindex="-1"><a class="header-anchor" href="#ioctest-propertyvalue" aria-hidden="true">#</a> IOCTest_PropertyValue</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IOCTest_PropertyValue</span> <span class="token punctuation">{</span>
   <span class="token class-name">AnnotationConfigApplicationContext</span> applicationContext <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AnnotationConfigApplicationContext</span><span class="token punctuation">(</span><span class="token class-name">MainConfigOfPropertyValues</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token annotation punctuation">@Test</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token function">printBeans</span><span class="token punctuation">(</span>applicationContext<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;=============&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      
      <span class="token class-name">Person</span> person <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">)</span> applicationContext<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">&quot;person&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>
      
      
      <span class="token class-name">ConfigurableEnvironment</span> environment <span class="token operator">=</span> applicationContext<span class="token punctuation">.</span><span class="token function">getEnvironment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">String</span> property <span class="token operator">=</span> environment<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;person.nickName&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>property<span class="token punctuation">)</span><span class="token punctuation">;</span>
      applicationContext<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   
   <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">printBeans</span><span class="token punctuation">(</span><span class="token class-name">AnnotationConfigApplicationContext</span> applicationContext<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> definitionNames <span class="token operator">=</span> applicationContext<span class="token punctuation">.</span><span class="token function">getBeanDefinitionNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> name <span class="token operator">:</span> definitionNames<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="输出-3" tabindex="-1"><a class="header-anchor" href="#输出-3" aria-hidden="true">#</a> 输出</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>mainConfigOfPropertyValues
person
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
<span class="token class-name">Person</span> <span class="token punctuation">[</span>name<span class="token operator">=</span>张三<span class="token punctuation">,</span> age<span class="token operator">=</span><span class="token number">18</span><span class="token punctuation">,</span> nickName<span class="token operator">=</span>小李四<span class="token punctuation">]</span>
小李四
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自动装配" tabindex="-1"><a class="header-anchor" href="#自动装配" aria-hidden="true">#</a> 自动装配</h3><h4 id="autowired-qualifier-primary-resource-inject" tabindex="-1"><a class="header-anchor" href="#autowired-qualifier-primary-resource-inject" aria-hidden="true">#</a> @Autowired-@Qualifier-@Primary-@Resource-@Inject</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BookController</span> <span class="token punctuation">{</span>
   
   <span class="token annotation punctuation">@Autowired</span>
   <span class="token keyword">private</span> <span class="token class-name">BookService</span> bookService<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BookService</span> <span class="token punctuation">{</span>
   
   <span class="token comment">//@Qualifier(&quot;bookDao&quot;)</span>
   <span class="token comment">//@Autowired(required=false)</span>
   <span class="token comment">//@Resource(name=&quot;bookDao2&quot;)</span>
   <span class="token annotation punctuation">@Inject</span>
   <span class="token keyword">private</span> <span class="token class-name">BookDao</span> bookDao<span class="token punctuation">;</span>
   
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bookDao<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">&quot;BookService [bookDao=&quot;</span> <span class="token operator">+</span> bookDao <span class="token operator">+</span> <span class="token string">&quot;]&quot;</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//名字默认是类名首字母小写</span>
<span class="token annotation punctuation">@Repository</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BookDao</span> <span class="token punctuation">{</span>
   
   <span class="token keyword">private</span> <span class="token class-name">String</span> lable <span class="token operator">=</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">;</span>

   <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getLable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> lable<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setLable</span><span class="token punctuation">(</span><span class="token class-name">String</span> lable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>lable <span class="token operator">=</span> lable<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">&quot;BookDao [lable=&quot;</span> <span class="token operator">+</span> lable <span class="token operator">+</span> <span class="token string">&quot;]&quot;</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   
   

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="mainconifgofautowired" tabindex="-1"><a class="header-anchor" href="#mainconifgofautowired" aria-hidden="true">#</a> MainConifgOfAutowired</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 自动装配;
 *        Spring利用依赖注入（DI），完成对IOC容器中中各个组件的依赖关系赋值；
 * 
 * 1）、@Autowired：自动注入：
 *        1）、默认优先按照类型去容器中找对应的组件:applicationContext.getBean(BookDao.class);找到就赋值
 *        2）、如果找到多个相同类型的组件，再将属性的名称作为组件的id去容器中查找
 *                       applicationContext.getBean(&quot;bookDao&quot;)
 *        3）、@Qualifier(&quot;bookDao&quot;)：使用@Qualifier指定需要装配的组件的id，而不是使用属性名
 *        4）、自动装配默认一定要将属性赋值好，没有就会报错；
 *           可以使用@Autowired(required=false);
 *        5）、@Primary：让Spring进行自动装配的时候，默认使用首选的bean；
 *              也可以继续使用@Qualifier指定需要装配的bean的名字
 *        BookService<span class="token punctuation">{</span>
 *           @Autowired
 *           BookDao  bookDao;
 *        <span class="token punctuation">}</span>
 * 
 * 2）、Spring还支持使用@Resource(JSR250)和@Inject(JSR330)[java规范的注解]
 *        @Resource:
 *           可以和@Autowired一样实现自动装配功能；默认是按照组件名称进行装配的；
 *           没有能支持@Primary功能没有支持@Autowired（reqiured=false）;
 *        @Inject:
 *           需要导入javax.inject的包，和Autowired的功能一样。没有required=false的功能；
 *  @Autowired:Spring定义的； @Resource、@Inject都是java规范
 *     
 * AutowiredAnnotationBeanPostProcessor:解析完成自动装配功能；       
 * 
 * 3）、 @Autowired:构造器，参数，方法，属性；都是从容器中获取参数组件的值
 *        1）、[标注在方法位置]：@Bean+方法参数；参数从容器中获取;默认不写@Autowired效果是一样的；都能自动装配
 *        2）、[标在构造器上]：如果组件只有一个有参构造器，这个有参构造器的@Autowired可以省略，参数位置的组件还是可以自动从容器中获取
 *        3）、放在参数位置：
 			public Boss(@Autowired Car car)<span class="token punctuation">{</span>
				this.car = car;
				System.out.println(&quot;Boss...有参构造器&quot;);
			<span class="token punctuation">}</span>
 * 
 * 4）、自定义组件想要使用Spring容器底层的一些组件（ApplicationContext，BeanFactory，xxx）；
 *        自定义组件实现xxxAware；在创建对象的时候，会调用接口规定的方法注入相关组件；Aware；
 *        把Spring底层一些组件注入到自定义的Bean中；
 *        xxxAware：功能使用xxxProcessor；
 *           ApplicationContextAware==》ApplicationContextAwareProcessor；
 *     
 *        
 * <span class="token keyword">@author</span> lfy
 *
 */</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@ComponentScan</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;com.atguigu.service&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;com.atguigu.dao&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;com.atguigu.controller&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;com.atguigu.bean&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MainConifgOfAutowired</span> <span class="token punctuation">{</span>
   
   <span class="token annotation punctuation">@Primary</span>
   <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span><span class="token string">&quot;bookDao2&quot;</span><span class="token punctuation">)</span>
   <span class="token keyword">public</span> <span class="token class-name">BookDao</span> <span class="token function">bookDao</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token class-name">BookDao</span> bookDao <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BookDao</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      bookDao<span class="token punctuation">.</span><span class="token function">setLable</span><span class="token punctuation">(</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> bookDao<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   
   <span class="token doc-comment comment">/**
    * @Bean标注的方法创建对象的时候，方法参数的值默认从容器中获取
    * <span class="token keyword">@param</span> <span class="token parameter">car</span>
    * <span class="token keyword">@return</span>
    */</span>
   <span class="token annotation punctuation">@Bean</span>
   <span class="token keyword">public</span> <span class="token class-name">Color</span> <span class="token function">color</span><span class="token punctuation">(</span><span class="token class-name">Car</span> car<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token class-name">Color</span> color <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      color<span class="token punctuation">.</span><span class="token function">setCar</span><span class="token punctuation">(</span>car<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> color<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="ioctest-autowired" tabindex="-1"><a class="header-anchor" href="#ioctest-autowired" aria-hidden="true">#</a> IOCTest_Autowired</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IOCTest_Autowired</span> <span class="token punctuation">{</span>
   
   <span class="token annotation punctuation">@Test</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token class-name">AnnotationConfigApplicationContext</span> applicationContext <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AnnotationConfigApplicationContext</span><span class="token punctuation">(</span><span class="token class-name">MainConifgOfAutowired</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      
      <span class="token class-name">BookService</span> bookService <span class="token operator">=</span> applicationContext<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">BookService</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bookService<span class="token punctuation">)</span><span class="token punctuation">;</span>
      
      <span class="token comment">//BookDao bean = applicationContext.getBean(BookDao.class);</span>
      <span class="token comment">//System.out.println(bean);</span>
      
      <span class="token class-name">Boss</span> boss <span class="token operator">=</span> applicationContext<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">Boss</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>boss<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">Car</span> car <span class="token operator">=</span> applicationContext<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">Car</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>car<span class="token punctuation">)</span><span class="token punctuation">;</span>
      
      <span class="token class-name">Color</span> color <span class="token operator">=</span> applicationContext<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">Color</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>applicationContext<span class="token punctuation">)</span><span class="token punctuation">;</span>
      applicationContext<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="profle" tabindex="-1"><a class="header-anchor" href="#profle" aria-hidden="true">#</a> @Profle</h4><h5 id="mainconfigofprofile" tabindex="-1"><a class="header-anchor" href="#mainconfigofprofile" aria-hidden="true">#</a> MainConfigOfProfile</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Profile：
 *        Spring为我们提供的可以根据当前环境，动态的激活和切换一系列组件的功能；
 * 
 * 开发环境、测试环境、生产环境；
 * 数据源：(/A)(/B)(/C)；
 * 
 * 
 * @Profile：指定组件在哪个环境的情况下才能被注册到容器中，不指定，任何环境下都能注册这个组件
 * 
 * 1）、加了环境标识的bean，只有这个环境被激活的时候才能注册到容器中。默认是default环境
 * 2）、写在配置类上，只有是指定的环境的时候，整个配置类里面的所有配置才能开始生效
 * 3）、没有标注环境标识的bean在，任何环境下都是加载的；
 */</span>

<span class="token annotation punctuation">@PropertySource</span><span class="token punctuation">(</span><span class="token string">&quot;classpath:/dbconfig.properties&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MainConfigOfProfile</span> <span class="token keyword">implements</span> <span class="token class-name">EmbeddedValueResolverAware</span><span class="token punctuation">{</span>
   
   <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${db.user}&quot;</span><span class="token punctuation">)</span>
   <span class="token keyword">private</span> <span class="token class-name">String</span> user<span class="token punctuation">;</span>
   
   <span class="token keyword">private</span> <span class="token class-name">StringValueResolver</span> valueResolver<span class="token punctuation">;</span>
   
   <span class="token keyword">private</span> <span class="token class-name">String</span>  driverClass<span class="token punctuation">;</span>
   
   
   <span class="token annotation punctuation">@Bean</span>
   <span class="token keyword">public</span> <span class="token class-name">Yellow</span> <span class="token function">yellow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Yellow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   
   <span class="token annotation punctuation">@Profile</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span>
   <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span><span class="token string">&quot;testDataSource&quot;</span><span class="token punctuation">)</span>
   <span class="token keyword">public</span> <span class="token class-name">DataSource</span> <span class="token function">dataSourceTest</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${db.password}&quot;</span><span class="token punctuation">)</span><span class="token class-name">String</span> pwd<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">{</span>
      <span class="token class-name">ComboPooledDataSource</span> dataSource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ComboPooledDataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      dataSource<span class="token punctuation">.</span><span class="token function">setUser</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
      dataSource<span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span>pwd<span class="token punctuation">)</span><span class="token punctuation">;</span>
      dataSource<span class="token punctuation">.</span><span class="token function">setJdbcUrl</span><span class="token punctuation">(</span><span class="token string">&quot;jdbc:mysql://localhost:3306/test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      dataSource<span class="token punctuation">.</span><span class="token function">setDriverClass</span><span class="token punctuation">(</span>driverClass<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> dataSource<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   
   
   <span class="token annotation punctuation">@Profile</span><span class="token punctuation">(</span><span class="token string">&quot;dev&quot;</span><span class="token punctuation">)</span>
   <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span><span class="token string">&quot;devDataSource&quot;</span><span class="token punctuation">)</span>
   <span class="token keyword">public</span> <span class="token class-name">DataSource</span> <span class="token function">dataSourceDev</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${db.password}&quot;</span><span class="token punctuation">)</span><span class="token class-name">String</span> pwd<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">{</span>
      <span class="token class-name">ComboPooledDataSource</span> dataSource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ComboPooledDataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      dataSource<span class="token punctuation">.</span><span class="token function">setUser</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
      dataSource<span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span>pwd<span class="token punctuation">)</span><span class="token punctuation">;</span>
      dataSource<span class="token punctuation">.</span><span class="token function">setJdbcUrl</span><span class="token punctuation">(</span><span class="token string">&quot;jdbc:mysql://localhost:3306/ssm_crud&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      dataSource<span class="token punctuation">.</span><span class="token function">setDriverClass</span><span class="token punctuation">(</span>driverClass<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> dataSource<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   
   <span class="token annotation punctuation">@Profile</span><span class="token punctuation">(</span><span class="token string">&quot;prod&quot;</span><span class="token punctuation">)</span>
   <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span><span class="token string">&quot;prodDataSource&quot;</span><span class="token punctuation">)</span>
   <span class="token keyword">public</span> <span class="token class-name">DataSource</span> <span class="token function">dataSourceProd</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${db.password}&quot;</span><span class="token punctuation">)</span><span class="token class-name">String</span> pwd<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">{</span>
      <span class="token class-name">ComboPooledDataSource</span> dataSource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ComboPooledDataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      dataSource<span class="token punctuation">.</span><span class="token function">setUser</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
      dataSource<span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span>pwd<span class="token punctuation">)</span><span class="token punctuation">;</span>
      dataSource<span class="token punctuation">.</span><span class="token function">setJdbcUrl</span><span class="token punctuation">(</span><span class="token string">&quot;jdbc:mysql://localhost:3306/scw_0515&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      
      dataSource<span class="token punctuation">.</span><span class="token function">setDriverClass</span><span class="token punctuation">(</span>driverClass<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> dataSource<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setEmbeddedValueResolver</span><span class="token punctuation">(</span><span class="token class-name">StringValueResolver</span> resolver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// TODO Auto-generated method stub</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>valueResolver <span class="token operator">=</span> resolver<span class="token punctuation">;</span>
      driverClass <span class="token operator">=</span> valueResolver<span class="token punctuation">.</span><span class="token function">resolveStringValue</span><span class="token punctuation">(</span><span class="token string">&quot;\${db.driverClass}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="dbconfig-properties" tabindex="-1"><a class="header-anchor" href="#dbconfig-properties" aria-hidden="true">#</a> dbconfig.properties</h5><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">db.user</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">db.password</span><span class="token punctuation">=</span><span class="token value attr-value">123456</span>
<span class="token key attr-name">db.driverClass</span><span class="token punctuation">=</span><span class="token value attr-value">com.mysql.jdbc.Driver</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,109),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","Springchangyongzhujie.html.vue"]]);export{r as default};
