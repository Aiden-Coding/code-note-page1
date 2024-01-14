import{_ as e,r as a,o as l,c as d,a as n,b as t,d as c,e as s}from"./app-GjP6hEVt.js";const v="/code-note-page1/assets/image-bGPOPToU.png",r="/code-note-page1/assets/image-1-i8YCha5z.png",u={},p=s(`<h1 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h1><h2 id="泛型的优点" tabindex="-1"><a class="header-anchor" href="#泛型的优点" aria-hidden="true">#</a> 泛型的优点</h2><p>1、泛型的本质是为了参数化类型，也就是在在不创建新的类型的情况下，通过泛型指定的不同类型来控制形参具体限制的类型，很明显这种方法提高了代码的复用性。</p><p>2、泛型的引入提高了安全性，泛型提供了编译时类型安全检测机制，该机制允许开发者在编译时检测到非法的类型。。</p><p>3、在没有泛型的情况的下，通过对类型 Object 的引用来实现参数的“任意化”，“任意化”带来的缺点是要做显式的强制类型转换，而这种转换是要求开发者对实际参数类型可以预知的情况下进行的。对于强制类型转换错误的情况，编译器可能不提示错误，在运行的时候才出现异常，这是本身就是一个安全隐患。</p><p>那么泛型的好处就是在编译的时候能够检查类型安全，并且所有的强制转换都是自动和隐式的。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GlmapperGeneric</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
		<span class="token keyword">private</span> <span class="token class-name">T</span> t<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token class-name">T</span> t<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span>t <span class="token operator">=</span> t<span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">T</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> t<span class="token punctuation">;</span> <span class="token punctuation">}</span>
  
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// do nothing</span>
    <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
    * 不指定类型
    */</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">noSpecifyType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">GlmapperGeneric</span> glmapperGeneric <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GlmapperGeneric</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    glmapperGeneric<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 需要强制类型转换</span>
    <span class="token class-name">String</span> test <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> glmapperGeneric<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
    * 指定类型
    */</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">specifyType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">GlmapperGeneric</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> glmapperGeneric <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GlmapperGeneric</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    glmapperGeneric<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 不需要强制类型转换</span>
    <span class="token class-name">String</span> test <span class="token operator">=</span> glmapperGeneric<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="为什么提高了安全性" tabindex="-1"><a class="header-anchor" href="#为什么提高了安全性" aria-hidden="true">#</a> 为什么提高了安全性？</h2><p>再举例子说明一下</p><p><strong>不安全举例</strong></p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package keyAndDifficultPoints.Generic;


import java.util.ArrayList;
import java.util.List;

/**
 * @Author: youthlql-吕
 * @Date: 2020/10/15 16:09
 * &lt;p&gt;
 * 功能描述:
 */
public class Test_Safe {

    public static void main(String[] args) {
        test();
    }

    public static void test() {
        List arrayList = new ArrayList();
        arrayList.add(&quot;aaaa&quot;);
        arrayList.add(100);

        for (int i = 0; i &lt; arrayList.size(); i++) {
            String s = (String) arrayList.get(i);
            System.out.println(s);

        }
    }
}    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>aaaa
Exception in thread &quot;main&quot; java.lang.ClassCastException: java.lang.Integer cannot be cast to java.lang.String
	at keyAndDifficultPoints.Generic.Test_Safe.test(Test_Safe.java:25)
	at keyAndDifficultPoints.Generic.Test_Safe.main(Test_Safe.java:16)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>很明显的一个类型转换错误。ArrayList可以存放任意类型，例子中添加了一个String类型，添加了一个Integer类型，再使用时都以String的方式使用，因此程序崩溃了。为了解决类似这样的问题（在编译阶段就可以解决），泛型应运而生。</p><p><strong>泛型提高安全性</strong></p><p>将上面的代码稍微改一下</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code> public static void test01(){
        List&lt;String&gt; arrayList = new ArrayList&lt;&gt;();
        arrayList.add(&quot;aaaa&quot;);
        //下面代码编译时就直接报错了
        arrayList.add(100);

        for (int i = 0; i &lt; arrayList.size(); i++) {
            String s = (String) arrayList.get(i);
            System.out.println(s);

        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过泛型来提前检测类型，编译时就通不过。</p><h2 id="泛型为什么很重要" tabindex="-1"><a class="header-anchor" href="#泛型为什么很重要" aria-hidden="true">#</a> 泛型为什么很重要</h2><p>我们看一下比较常用的JUC包</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public &lt;U&gt; CompletableFuture&lt;U&gt; thenComposeAsync(
        Function&lt;? super T, ? extends CompletionStage&lt;U&gt;&gt; fn) {
        return uniComposeStage(asyncPool, fn);
    }

    public &lt;U&gt; CompletableFuture&lt;U&gt; thenComposeAsync(
        Function&lt;? super T, ? extends CompletionStage&lt;U&gt;&gt; fn,
        Executor executor) {
        return uniComposeStage(screenExecutor(executor), fn);
    }

    public CompletableFuture&lt;T&gt; whenComplete(
        BiConsumer&lt;? super T, ? super Throwable&gt; action) {
        return uniWhenCompleteStage(null, action);
    }

    public CompletableFuture&lt;T&gt; whenCompleteAsync(
        BiConsumer&lt;? super T, ? super Throwable&gt; action) {
        return uniWhenCompleteStage(asyncPool, action);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些都大量的用到了泛型，如果不把泛型学好，想真正深入源码了解一些东西，可能就完全看不懂了。</p><h1 id="泛型类" tabindex="-1"><a class="header-anchor" href="#泛型类" aria-hidden="true">#</a> 泛型类</h1><p>泛型类型用于类的定义中，被称为泛型类。通过泛型可以完成对一组类的操作对外开放相同的接口。最典型的就是各种容器类，如：List、Set、Map。</p><p><strong>最普通的泛型类：</strong></p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package keyAndDifficultPoints.Generic;

/**
 * @Author: youthlql-吕
 * @Date: 2020/10/15 16:38
 * &lt;p&gt;
 * 功能描述:
 */
public class Test_GenericClass {
    public static void main(String[] args) {
        test();
    }

    public static void test(){
        /**
         * 1、泛型的类型参数只能是类类型（包括自定义类），不能是简单数据类型（比如int,long这些）
         * 2、传入的实参类型需与泛型的类型参数类型相同，即为这里的Integer。
         * 3、new 后面的泛型参数可以省略
         */
        Generic&lt;Integer&gt; genericInteger1 = new Generic&lt;Integer&gt;(123);
        Generic&lt;Integer&gt; genericInteger = new Generic&lt;&gt;(123);

        Generic&lt;String&gt; genericString = new Generic&lt;String&gt;(&quot;my&quot;);

        System.out.println(genericInteger.getVar());
        System.out.println(genericString.getVar());
    }


}

/**
 * 1、此处T虽然可以随便写为任意标识，常见的如T、E、K、V等形式的参数常用于表示泛型。
 * 但是为了代码的可读性一般来说：
 * K,V用来表示键值对
 * E是Element的缩写，常用来遍历时表示
 * T就是Type的缩写，常用在普通泛型类上
 * 2、还有一些不常见的U,R啥的
 */
class Generic&lt;T&gt; {
    //key这个成员变量的类型为T,T的类型由外部指定
    private T var;

    public Generic(T var) { //泛型构造方法形参key的类型也为T，T的类型由外部指定
        this.var = var;
    }

    public T getVar() { //泛型方法getKey的返回值类型为T，T的类型由外部指定
        return var;
    }
}

class MyMap&lt;K, V&gt; {       // 此处指定了两个泛型类型
    private K key;     // 此变量的类型由外部决定
    private V value;   // 此变量的类型由外部决定

    public K getKey() {
        return this.key;
    }

    public V getValue() {
        return this.value;
    }

    public void setKey(K key) {
        this.key = key;
    }

    public void setValue(V value) {
        this.value = value;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>结果：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>123
my

Process finished with exit code 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>定义的泛型类，就一定要传入泛型类型实参么？并不是这样，在使用泛型的时候如果传入泛型实参，则会根据传入的泛型实参做相应的限制，此时泛型才会起到本应起到的限制作用。如果不传入泛型类型实参的话，在泛型类中使用泛型的方法或成员变量定义的类型可以为任何的类型。</li></ul><p>还是以上面的泛型类为例进行测试</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code> public static void test01() {
        Generic generic = new Generic(&quot;我是字符串&quot;);
        Generic generic1 = new Generic(123);
        Generic generic2 = new Generic(123.123);
        Generic generic3 = new Generic(false);

        System.out.println(generic.getVar());
        System.out.println(generic1.getVar());
        System.out.println(generic2.getVar());
        System.out.println(generic3.getVar());
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>结果：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>我是字符串
123
123.123
false

Process finished with exit code 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>没有报错，正确输出了。</p><h1 id="泛型接口" tabindex="-1"><a class="header-anchor" href="#泛型接口" aria-hidden="true">#</a> 泛型接口</h1><p>泛型接口与泛型类的定义及使用基本相同。泛型接口常被用在各种类的生产器中，可以看一个例子：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>interface Info&lt;T&gt;{        // 在接口上定义泛型  
    public T getVar() ; // 定义方法，方法的返回值就是泛型类型  
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>当实现泛型接口的类，未传入泛型实参时：</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 未传入泛型实参时，与泛型类的定义相同，在声明类的时候，需将泛型的声明也一起加到类中
 * 即：class InfoImpl<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>T</span><span class="token punctuation">&gt;</span></span> implements Info<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>T</span><span class="token punctuation">&gt;</span></span>
 * 如果不声明泛型，如：class InfoImpl implements Info<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>T</span><span class="token punctuation">&gt;</span></span>，编译器会报错：&quot;Unknown class&quot;
 */</span>
<span class="token keyword">class</span> <span class="token class-name">InfoImpl</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">implements</span> <span class="token class-name">Info</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>   <span class="token comment">// 定义泛型接口的子类</span>
    <span class="token keyword">private</span> <span class="token class-name">T</span> <span class="token keyword">var</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">InfoImpl</span><span class="token punctuation">(</span><span class="token class-name">T</span> <span class="token keyword">var</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setVar</span><span class="token punctuation">(</span><span class="token keyword">var</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setVar</span><span class="token punctuation">(</span><span class="token class-name">T</span> <span class="token keyword">var</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token keyword">var</span> <span class="token operator">=</span> <span class="token keyword">var</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">T</span> <span class="token function">getVar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token keyword">var</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当实现泛型接口的类，传入泛型实参时：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>/**
 * 传入泛型实参时：
 * 定义一个是先烈实现这个接口,虽然我们只创建了一个泛型接口Info&lt;T&gt;
 * 在实现类实现泛型接口时，如已将泛型类型传入实参类型，则所有使用泛型的地方都要替换成传入的实参类型
 * 即：InfoImpl01&lt;T&gt;，public String getVar();中的的T都要替换成传入的String类型。
 */
class InfoImpl01 implements Info&lt;String&gt; {   // 定义泛型接口的子类
    private String var;

    public InfoImpl01(String var) {
        this.setVar(var);
    }

    public void setVar(String var) {
        this.var = var;
    }

    public String getVar() {
        return this.var;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="泛型方法" tabindex="-1"><a class="header-anchor" href="#泛型方法" aria-hidden="true">#</a> 泛型方法</h1><p>在java中，泛型类和接口的定义非常简单，但是泛型方法就比较复杂了。</p><p>泛型类，是在实例化类的时候指明泛型的具体类型；泛型方法，是在调用方法的时候指明泛型的具体类型。</p><p><strong>最简单的一个泛型方法</strong></p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class Test_GenericMethod {

    public static void main(String[] args) {
        Test_GenericMethod test_genericMethod = new Test_GenericMethod();
        Integer integer = test_genericMethod.genericMethod(12);
        System.out.println(integer);
    }

    /**
     * 说明：
     * 1、public 与 返回值中间&lt;T&gt;非常重要，可以理解为声明此方法为泛型方法。
     * 2、只有声明了&lt;T&gt;的方法才是泛型方法，泛型类中的使用了泛型的成员方法并不是泛型方法。
     * 3、&lt;T&gt;表明该方法将使用泛型类型T，此时才可以在方法中使用泛型类型T。
     * 4、&lt;T&gt; 后面的这个T，代表这个方法的返回值类型
     * 4、与泛型类的定义一样，此处T可以随便写为任意标识，常见的如T、E、K、V等形式的参数常用于表示泛型。
     */
    public &lt;T&gt; T genericMethod(T a) {

        return a;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基本用法-非泛型类中的泛型方法" tabindex="-1"><a class="header-anchor" href="#基本用法-非泛型类中的泛型方法" aria-hidden="true">#</a> 基本用法（非泛型类中的泛型方法）</h2><p>下面来细说一下泛型方法</p><p>首先说一个误区</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>class Generic01&lt;T&gt; {
    private T key;

    public Generic01(T key) {
        this.key = key;
    }


    /**
     * 1、这个虽然在方法中使用了泛型，但这并不是一个泛型方法。这只是类中一个普通的
     * 成员方法，只不过他的返回值是在声明泛型类已经声明过的泛型。所以在这个方法中才
     * 可以继续使用 T 这个泛型。
     */
    public T getKey() {
        return key;
    }

    /**
     * 1、这个方法显然是有问题的，在编译器会给我们提示这样的错误信息&quot;cannot reslove symbol E&quot;
     * 因为在类的声明中并未声明泛型E，所以在使用E做形参和返回值类型时，编译器会无法识别。
     */
//    public E setKey(E key) {
//        this.key = key;
//    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>基本用法</strong>（非）</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package keyAndDifficultPoints.Generic;


/**
 * @Author: youthlql-吕
 * @Date: 2020/10/15 17:46
 * &lt;p&gt;
 * 功能描述:
 */
public class Test_GenericMethod {

    public static void main(String[] args) {
        Test_GenericMethod test_genericMethod = new Test_GenericMethod();
        Generic01&lt;Integer&gt; generic01 = new Generic01&lt;&gt;(123);

        Generic01&lt;String&gt; generic02 = new Generic01&lt;&gt;(&quot;AAAAA&quot;);

        test_genericMethod.genericMethod_test01(generic01);
        test_genericMethod.genericMethod_test02(generic02, &quot;我是T&quot;);

        test_genericMethod.Method01(generic01);
    }

    /**
     * 说明：
     * 1、public 与 返回值中间&lt;T&gt;非常重要，可以理解为声明此方法为泛型方法。
     * 2、只有声明了&lt;T&gt;的方法才是泛型方法，泛型类中的使用了泛型的成员方法并不是泛型方法。
     * 3、&lt;T&gt;表明该方法将使用泛型类型T，此时才可以在方法中使用泛型类型T。
     * 4、&lt;T&gt; 后面的这个T，代表这个方法的返回值类型
     * 4、与泛型类的定义一样，此处T可以随便写为任意标识，常见的如T、E、K、V等形式的参数常用于表示泛型。
     */
    public &lt;T&gt; T genericMethod(T a) {

        return a;
    }


    /**
     * 1、这才是一个真正的泛型方法。
     * 2、首先在public与返回值之间的&lt;T&gt;必不可少，这表明这是一个泛型方法，并且声明了一个泛型T。
     * 3、这个T可以出现在这个泛型方法的任意位置.泛型的数量也可以为任意多个
     */
    public &lt;T&gt; T genericMethod_test01(Generic01&lt;T&gt; generic01) {
        System.out.println(&quot;我是genericMethod_test01：&quot; + generic01.getKey());
        T test = generic01.getKey();
        return test;
    }

    public &lt;T, V&gt; T genericMethod_test02(Generic01&lt;T&gt; generic01, V value) {
        System.out.println(&quot;我是genericMethod_test02：&quot; + generic01.getKey() + &quot;==&gt; value：&quot; + value);

        T test = generic01.getKey();
        return test;
    }


    //这也不是一个泛型方法，这就是一个普通的方法，只是使用了Generic&lt;Number&gt;这个泛型类做形参而已。
    public void Method01(Generic01&lt;? extends Number&gt; generic01) {
        System.out.println(generic01.getKey());
    }


    //这也不是一个泛型方法，这也是一个普通的方法，只不过使用了泛型通配符?
    //同时这也印证了泛型通配符章节所描述的，?是一种类型实参，可以看做为Number等所有类的父类
    public void Method02(Generic01&lt;?&gt; generic01) {
        System.out.println(generic01.getKey());
    }

    /**
     * 这个方法是有问题的，编译器会为我们提示错误信息：&quot;UnKnown class &#39;E&#39; &quot;
     * 虽然我们声明了&lt;T&gt;,也表明了这是一个可以处理泛型的类型的泛型方法。
     * 但是只声明了泛型类型T，并未声明泛型类型E，因此编译器并不知道该如何处理E这个类型。
     */
//    public &lt;T&gt; T showKeyName(Generic01&lt;E&gt; generic01, T t) {
//        return t;
//    }

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>结果：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>我是genericMethod_test01：123
我是genericMethod_test02：AAAAA==&gt; value：我是T
123

Process finished with exit code 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="泛型类中的泛型方法" tabindex="-1"><a class="header-anchor" href="#泛型类中的泛型方法" aria-hidden="true">#</a> 泛型类中的泛型方法</h2><p>当然这并不是泛型方法的全部，泛型方法可以出现杂任何地方和任何场景中使用。但是有一种情况是非常特殊的，当泛型方法出现在泛型类中时，我们再通过一个例子看一下。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package keyAndDifficultPoints.Generic;

/**
 * @Author: youthlql-吕
 * @Date: 2020/10/15 20:14
 * &lt;p&gt;
 * 功能描述:
 */
public class Test_GenericMethod01 {
    public static void main(String[] args) {
        Apple apple = new Apple();
        Person person = new Person();

        GenerateTest&lt;Fruit&gt; generateTest = new GenerateTest&lt;Fruit&gt;();
        //apple是Fruit的子类，所以这里可以
        generateTest.show_1(apple);
        //编译器会报错，因为泛型类型实参指定的是Fruit，而传入的实参类是Person
        //generateTest.show_1(person);

        //使用这两个方法都可以成功
        generateTest.show_2(apple);
        generateTest.show_2(person);

        //使用这两个方法也都可以成功
        generateTest.show_3(apple);
        generateTest.show_3(person);
    }
}

abstract class GenericFruit {

}

class Fruit {
    @Override
    public String toString() {
        return &quot;fruit&quot;;
    }
}

class Apple extends Fruit {
    @Override
    public String toString() {
        return &quot;apple&quot;;
    }
}

class Person {
    @Override
    public String toString() {
        return &quot;Person&quot;;
    }
}

class GenerateTest&lt;T&gt; {
    
    public void show_1(T t) {
        System.out.println(t.toString());
    }


    /**
     * 1、在泛型类中声明了一个泛型方法，使用泛型E，这种泛型E可以为任意类型。可以类型与T相同，也可以不同。
     * 2、由于泛型方法在声明的时候会声明泛型&lt;E&gt;，因此即使在泛型类中并未声明泛型，编译器也能够正确识别
     泛型方法中识别的泛型。
     */
    public &lt;E&gt; void show_3(E t) {
        System.out.println(t.toString());
    }


    /**
     * 1、在泛型类中声明了一个泛型方法，使用泛型T，注意这个T是一种全新的类型，可以与泛型类中声明的T
     * 不是同一种类型。也就是说main函数中使用的时候也可以是不一样的泛型类型
     */
    public &lt;T&gt; void show_2(T t) {
        System.out.println(t.toString());
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>结果：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apple
apple
Person
apple
Person

Process finished with exit code 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="泛型方法与可变参数" tabindex="-1"><a class="header-anchor" href="#泛型方法与可变参数" aria-hidden="true">#</a> 泛型方法与可变参数</h2><p>再看一个泛型方法和可变参数的例子：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class Test_GenericMethod02 {
    public static void main(String[] args) {
        print(&quot;123&quot;,753,123.12);
    }


    //必须是三个点
    public static &lt;T&gt; void print(T... args) {
        for (T t : args) {
            System.out.println(t);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>结果：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>123
753
123.12

Process finished with exit code 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="静态方法与泛型" tabindex="-1"><a class="header-anchor" href="#静态方法与泛型" aria-hidden="true">#</a> 静态方法与泛型</h2><p>静态方法有一种情况需要注意一下，那就是在类中的静态方法使用泛型：<strong>静态方法无法访问类上定义的泛型；如果静态方法操作的引用数据类型不确定的时候，必须要将泛型定义在方法上。</strong></p><p>即：<strong>如果静态方法要使用泛型的话，必须将静态方法也定义成泛型方法</strong> 。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StaticGenerator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    
    <span class="token doc-comment comment">/**
     * 1、如果在类中定义使用泛型的静态方法，需要添加额外的泛型声明（将这个方法定义成泛型方法）
     * 即使静态方法要使用泛型类中已经声明过的泛型也不可以。
     * 如：public static void show(T t)<span class="token punctuation">{</span>..<span class="token punctuation">}</span>,此时编译器会提示错误信息：
          &quot;StaticGenerator cannot be refrenced from static context&quot;
     * 2、泛型方法：在方法中出现了泛型的结构，泛型参数与类的泛型参数没有任何关系。换句话说，
     * 泛型方法所属的类是不是泛型类都没有关系。
     * 3、泛型方法，可以声明为静态的。原因：泛型参数是在调用方法时确定的。并非在初始化类时确定,所以无所谓
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span>  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token function">copyFromArrayToList</span><span class="token punctuation">(</span><span class="token class-name">E</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">E</span> e <span class="token operator">:</span> arr<span class="token punctuation">)</span><span class="token punctuation">{</span>
            list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> list<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="细枝末节" tabindex="-1"><a class="header-anchor" href="#细枝末节" aria-hidden="true">#</a> 细枝末节</h2><blockquote><p>可能合上面的有一些重复</p></blockquote><p>1、泛型异常类</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//异常类不能声明为泛型类，编译报错
class MyException&lt;T&gt; extends Exception{
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package keyAndDifficultPoints.Generic.Minutiae;

import java.util.ArrayList;
import java.util.List;

/**
 * @Author: youthlql-吕
 * @Date: 2020/10/15 22:28
 * &lt;p&gt;
 * 功能描述:
 */
public class Test_Minutiae1 {
}
class Order&lt;T&gt; {

    String orderName;
    int orderId;

    //类的内部结构就可以使用类的泛型

    T orderT;

    public Order(){
        //编译不通过
//        T[] arr = new T[10];
        //编译通过
        T[] arr = (T[]) new Object[10];
    }

    public Order(String orderName,int orderId,T orderT){
        this.orderName = orderName;
        this.orderId = orderId;
        this.orderT = orderT;
    }

    //如下的三个方法都不是泛型方法
    public T getOrderT(){
        return orderT;
    }

    public void setOrderT(T orderT){
        this.orderT = orderT;
    }

    @Override
    public String toString() {
        return &quot;Order{&quot; +
                &quot;orderName=&#39;&quot; + orderName + &#39;\\&#39;&#39; +
                &quot;, orderId=&quot; + orderId +
                &quot;, orderT=&quot; + orderT +
                &#39;}&#39;;
    }
    //静态方法中不能使用类的泛型。
//    public static void show(T orderT){
//        System.out.println(orderT);
//    }

    public void show(){
        //编译不通过
//        try{
//
//
//        }catch(T t){
//
//        }

    }


    /**
     * 2、泛型方法：在方法中出现了泛型的结构，泛型参数与类的泛型参数没有任何关系。换句话说，
     * 泛型方法所属的类是不是泛型类都没有关系。
     * 3、泛型方法，可以声明为静态的。原因：泛型参数是在调用方法时确定的。并非在初始化类时确定,
     * 所以无所谓
     */
    public static &lt;E&gt; List&lt;E&gt; copyFromArrayToList(E[] arr){

        ArrayList&lt;E&gt; list = new ArrayList&lt;&gt;();

        for(E e : arr){
            list.add(e);
        }
        return list;

    }
}
class SubOrder extends Order&lt;Integer&gt; {//SubOrder:不是泛型类


    public static &lt;E&gt; List&lt;E&gt; copyFromArrayToList(E[] arr) {

        ArrayList&lt;E&gt; list = new ArrayList&lt;&gt;();

        for (E e : arr) {
            list.add(e);
        }
        return list;

    }

}

class SubOrder1&lt;T&gt; extends Order&lt;T&gt; {//SubOrder1&lt;T&gt;:仍然是泛型类
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="泛型数组" tabindex="-1"><a class="header-anchor" href="#泛型数组" aria-hidden="true">#</a> 泛型数组</h1><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package keyAndDifficultPoints.Generic;

import java.util.ArrayList;
import java.util.List;

/**
 * @Author: youthlql-吕
 * @Date: 2020/10/15 12:10
 * &lt;p&gt;
 * 功能描述: 测试泛型数组
 */
public class Test_GenericArray {

    public static void main(String[] args) {
        test02();
    }

    public static void test() {
        //编译错误
//        List&lt;String&gt;[] ls = new ArrayList&lt;String&gt;[10];
    }


    public static void test01() {
        //这样声明是正确的
        List&lt;?&gt;[] ls = new ArrayList&lt;?&gt;[10];
        ls[1] = new ArrayList&lt;String&gt;();

        //这样写编译就报错了
//        ls[1].add(1);

    }

    /**
     * 下面是sun官方文档里写的。其实不用太纠结，平时泛型虽然用的多，但也不会用的这么奇葩。
     */
    public static void test02(){
        List&lt;?&gt;[] lsa = new List&lt;?&gt;[10]; // OK, array of unbounded wildcard type.
        Object o = lsa;
        Object[] oa = (Object[]) o;
        List&lt;Integer&gt; li = new ArrayList&lt;Integer&gt;();
        li.add(new Integer(3));
        oa[1] = li; // Correct.
        Integer i = (Integer) lsa[1].get(0); // OK
        System.out.println(i);
    }

    //正确
    public static void test03() {
        List&lt;String&gt;[] ls = new ArrayList[10];
        ls[0] = new ArrayList&lt;String&gt;();
        ls[1] = new ArrayList&lt;String&gt;();

        ls[0].add(&quot;x&quot;);

    }

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,76),o={href:"http://docs.oracle.com/javase/tutorial/extra/generics/fineprint.html",target:"_blank",rel:"noopener noreferrer"},m=s(`<h1 id="泛型在继承方面的细节" tabindex="-1"><a class="header-anchor" href="#泛型在继承方面的细节" aria-hidden="true">#</a> 泛型在继承方面的细节</h1><p>直接看代码注释</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token comment">/*
    1. 泛型在继承方面的体现

      虽然类A是类B的父类，但是G&lt;A&gt; 和G&lt;B&gt;二者不具备子父类关系，二者是并列关系。

       补充：类A是类B的父类，A&lt;G&gt; 是 B&lt;G&gt; 的父类

     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**
         * 下面是有继承关系，所以可以赋值
         */</span>
        <span class="token class-name">Object</span> obj <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        obj <span class="token operator">=</span> str<span class="token punctuation">;</span>

        <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr1 <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr2 <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        arr1 <span class="token operator">=</span> arr2<span class="token punctuation">;</span>

        <span class="token doc-comment comment">/**
         * 下面属于并列关系，无继承关系。无法赋值
         */</span>

        <span class="token comment">//编译不通过</span>
<span class="token comment">//        Date date = new Date();</span>
<span class="token comment">//        str = date;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> list1 <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//此时的list1和list2的类型不具有子父类关系</span>
        <span class="token comment">//编译不通过</span>
<span class="token comment">//        list1 = list2;</span>
        <span class="token comment">/*
        反证法：
        假设list1 = list2;
           list1.add(123);导致混入非String的数据。出错。

         */</span>

    <span class="token punctuation">}</span>


    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">AbstractList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list1 <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list2 <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list3 <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

        list1 <span class="token operator">=</span> list3<span class="token punctuation">;</span>
        list2 <span class="token operator">=</span> list3<span class="token punctuation">;</span>

        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="泛型通配符" tabindex="-1"><a class="header-anchor" href="#泛型通配符" aria-hidden="true">#</a> 泛型通配符</h1><p>我们在定义泛型类，泛型方法，泛型接口的时候经常会碰见很多不同的通配符，比如 T，E，K，V，？ 等等，下面来详细讲一下这些通配符。</p><h2 id="常用的通配符" tabindex="-1"><a class="header-anchor" href="#常用的通配符" aria-hidden="true">#</a> 常用的通配符</h2><p>本质上都是通配符没啥区别，只不过是编码时的一种约定俗成的东西（可以说提高了代码可读性）。比如上述代码中的 T ，我们可以换成 A-Z 之间的任何一个大小写字母都可以，并不会影响程序的正常运行，但是如果换成其他的字母代替 T ，在可读性上可能会弱一些。通常情况下，T，E，K，V，？ 是这样约定的：</p><ul><li>？ 表示不确定的 java 类型</li><li>T (Type) 表示具体的一个java类型</li><li>K V (Key Value) 分别代表java键值中的Key Value</li><li>E (element) 代表Element</li></ul><p>比较难的就是<code>？</code>通配符，下面就着重讲一下</p><h2 id="无界通配符" tabindex="-1"><a class="header-anchor" href="#无界通配符" aria-hidden="true">#</a> &#39; ? &#39;无界通配符</h2><h3 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>List&lt;Animal&gt; listAnimals
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>但是如果用通配符的话：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>List&lt;? extends Animal&gt; listAnimals
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>为什么要使用通配符而不是简单的泛型呢？通配符其实在声明局部变量时是没有什么意义的，但是当你为一个方法声明一个参数时，它是非常重要的。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package keyAndDifficultPoints.Generic;

import java.util.ArrayList;
import java.util.List;

/**
 * @Author: youthlql-吕
 * @Date: 2020/10/15 21:25
 * &lt;p&gt;
 * 功能描述: 泛型通配符测试
 */
public class Test_Wildcard_Character {

    public static void main(String[] args) {
        List&lt;Dog&gt; dogList = new ArrayList&lt;&gt;();
        test(dogList);
        test1(dogList);
    }

    static void test(List&lt;? extends Animal&gt; animals) {
        System.out.println(&quot;test输出:&quot;);
        for (Animal animal : animals) {
            System.out.print(animal.toString() + &quot;-&quot;);
        }
    }

    static void test1(List&lt;Animal&gt; animals) {
        System.out.println(&quot;test1输出:&quot;);
        for (Animal animal : animals) {
            System.out.print(animal.toString() + &quot;-&quot;);
        }
    }


}

class Animal {
    @Override
    public String toString() {
        return &quot;Animal&quot;;
    }
}

class Dog extends Animal {
    @Override
    public String toString() {
        return &quot;Dog&quot;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>test1()</code>在编译时就会飘红</p><p><img src="`+v+`" alt="Alt text"></p><p>所以，对于不确定或者不关心实际要操作的类型，可以使用无限制通配符（尖括号里一个问号，即 &lt;?&gt; ），表示可以持有任何类型。像 <code>test()</code>方法中，限定了上界，但是不关心具体类型是什么，所以对于传入的 Animal 的所有子类都可以支持，并且不会报错，而<code>test1()</code>就不行。</p><h3 id="通配符的继承" tabindex="-1"><a class="header-anchor" href="#通配符的继承" aria-hidden="true">#</a> &#39; ? &#39;通配符的继承</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    /*
    2. 通配符的使用
       通配符：?

       类A是类B的父类，G&lt;A&gt;和G&lt;B&gt;是没有关系的，二者共同的父类是：G&lt;?&gt;
     */

    @Test
    public void test3() {
        List&lt;Object&gt; list1 = null;
        List&lt;String&gt; list2 = null;

        List&lt;?&gt; list = null;

        list = list1;
        list = list2;
        //编译通过
//        print(list1);
//        print(list2);


        //
        List&lt;String&gt; list3 = new ArrayList&lt;&gt;();
        list3.add(&quot;AA&quot;);
        list3.add(&quot;BB&quot;);
        list3.add(&quot;CC&quot;);
        list = list3;
        //添加(写入)：对于List&lt;?&gt;就不能向其内部添加数据。
        //除了添加null之外。
//        list.add(&quot;DD&quot;);
//        list.add(&#39;?&#39;);

        list.add(null);

        //获取(读取)：允许读取数据，读取的数据类型为Object。
        Object o = list.get(0);
        System.out.println(o);


    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="extends和super上下界" tabindex="-1"><a class="header-anchor" href="#extends和super上下界" aria-hidden="true">#</a> extends和super上下界</h2><h3 id="上界通配符-extends-e" tabindex="-1"><a class="header-anchor" href="#上界通配符-extends-e" aria-hidden="true">#</a> 上界通配符 &lt; ? extends E&gt;</h3><blockquote><p>上结：用 extends 关键字声明，表示参数化的类型可能是所指定的类型，或者是此类型的子类。</p></blockquote><p>在类型参数中使用 extends 表示这个泛型中的参数必须是 E 或者 E 的子类，这样有两个好处：</p><ul><li>如果传入的类型不是 E 或者 E 的子类，编译不成功</li><li>泛型中可以使用 E 的方法，要不然还得强转成 E 才能使用</li></ul><h3 id="下界通配符-super-e" tabindex="-1"><a class="header-anchor" href="#下界通配符-super-e" aria-hidden="true">#</a> 下界通配符 &lt; ? super E&gt;</h3><blockquote><p>下界: 用 super 进行声明，表示参数化的类型可能是所指定的类型，或者是此类型的父类型，直至 Object</p></blockquote><p>在类型参数中使用 super 表示这个泛型中的参数必须是 E 或者 E 的父类。</p><h3 id="举例" tabindex="-1"><a class="header-anchor" href="#举例" aria-hidden="true">#</a> 举例</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code> /*
    3.有限制条件的通配符的使用。
        ? extends A:
                G&lt;? extends A&gt; 可以作为G&lt;A&gt;和G&lt;B&gt;的父类，其中B是A的子类

        ? super A:
                G&lt;? super A&gt; 可以作为G&lt;A&gt;和G&lt;B&gt;的父类，其中B是A的父类

     */
    @Test
    public void test4() {

        List&lt;? extends Person&gt; list1 = null; //[-无穷,Person]
        List&lt;? super Person&gt; list2 = null;  //[Person,+无穷]

        List&lt;Student&gt; list3 = new ArrayList&lt;Student&gt;();
        List&lt;Person&gt; list4 = new ArrayList&lt;Person&gt;();
        List&lt;Object&gt; list5 = new ArrayList&lt;Object&gt;();

        list1 = list3;
        list1 = list4;
//        list1 = list5;

//        list2 = list3;
        list2 = list4;
        list2 = list5;

        
        
        //下面的东西很奇怪

        //读取数据：
        list1 = list3;
        Person p = list1.get(0);
        //编译不通过
        //Student s = list1.get(0);

        list2 = list4;
        Object obj = list2.get(0);
        ////编译不通过
//        Person obj = list2.get(0);

        //写入数据：
        //编译不通过
//        list1.add(new Student());

        //编译通过
        list2.add(new Person());
        list2.add(new Student());

    }
}

class Person {
}

class Student extends Person {
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>##？ 和 T 的区别</p><p>？和 T 都表示不确定的类型，区别在于我们可以对 T 进行操作，但是对 ？ 不行，比如如下这种 ：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// 可以
T t = operate();

// 不可以
？ car = operate();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简单总结下：</p><p>T 是一个 确定的 类型，通常用于泛型类和泛型方法的定义，？是一个 不确定 的类型，通常用于泛型方法的调用代码和形参，不能用于定义类和泛型方法。</p><h3 id="区别1-通过t来确保泛型参数的一致性" tabindex="-1"><a class="header-anchor" href="#区别1-通过t来确保泛型参数的一致性" aria-hidden="true">#</a> 区别1：通过T来确保泛型参数的一致性</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package keyAndDifficultPoints.Wildcard_Character;

import java.util.ArrayList;
import java.util.List;

/**
 * @Author: youthlql-吕
 * @Date: 2020/10/16 11:28
 * &lt;p&gt;
 * 功能描述:
 */
public class Test_difference {

    public static void main(String[] args) {
        List&lt;Integer&gt; integerList = new ArrayList&lt;&gt;();
        List&lt;Float&gt; floatList = new ArrayList&lt;&gt;();

        //编译报错
//        test(integerList, floatList);
        //编译通过
        test1(integerList, floatList);


        //编译通过
        test(integerList, integerList);
        test1(integerList, integerList);

    }



    // 通过 T 来 确保 泛型参数的一致性
    public static &lt;T extends Number&gt; void test(List&lt;T&gt; dest, List&lt;T&gt; src){

    }

    //通配符是 不确定的，所以这个方法不能保证两个 List 具有相同的元素类型
    public static void test1(List&lt;? extends Number&gt; dest, List&lt;? extends Number&gt; src){

    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="区别2-t可以通过-进行多重限定" tabindex="-1"><a class="header-anchor" href="#区别2-t可以通过-进行多重限定" aria-hidden="true">#</a> 区别2：T可以通过&amp;进行多重限定</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class Test_difference {

    public static void main(String[] args) {


        /*---------------------测试多重限定符---------------------*/
        ArrayList list = new ArrayList&lt;&gt;();
        ArrayDeque deque = new ArrayDeque&lt;&gt;();
        LinkedList&lt;Object&gt; linkedList = new LinkedList&lt;&gt;();

        //多重限定时，在编译的时候取最小范围或共同子类

        test2(list);
//        test3(list); 编译报错

        //编译报错
//        test2(deque);
//        test3(deque);

        //编译通过
        test2(linkedList);
        test3(linkedList);


    }


    //可以进行多重限定
    public static &lt;T extends List &amp; Collection&gt; void test2(T t) {

    }

    //可以进行多重限定
    public static &lt;T extends Queue &amp; List&gt; void test3(T t) {

    }

    //编译报错，无法进行多重限定
//    public static &lt;? extends List &amp; Collection&gt; void test4(List&lt;T&gt; dest, List&lt;T&gt; src){
//
//    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+r+`" alt="Alt text"></p><h3 id="区别3-通配符可以使用超类限定而t不行" tabindex="-1"><a class="header-anchor" href="#区别3-通配符可以使用超类限定而t不行" aria-hidden="true">#</a> 区别3：？通配符可以使用超类限定而T不行</h3><p>类型参数 T 只具有 一种 类型限定方式：</p><pre><code>T extends A
</code></pre><p>但是通配符 ? 可以进行 两种限定：</p><pre><code>? extends A
? super A
</code></pre><hr><h1 id="关于反射和泛型的一点东西" tabindex="-1"><a class="header-anchor" href="#关于反射和泛型的一点东西" aria-hidden="true">#</a> 关于反射和泛型的一点东西</h1><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package keyAndDifficultPoints.Wildcard_Character;

/**
 * @Author: youthlql-吕
 * @Date: 2020/10/16 12:09
 * &lt;p&gt;
 * 功能描述: 泛型反射
 */
public class Test_Reflect {

    public static void main(String[] args) throws ClassNotFoundException, IllegalAccessException, InstantiationException {
        A a = createInstance(A.class);
        B b = createInstance(B.class);
    }

    /**
     * 这样写明显是要安全很多的
     */
    public static &lt;T&gt; T createInstance(Class&lt;T&gt; clazz) throws IllegalAccessException, InstantiationException {
        return clazz.newInstance();
    }

    public static void getA(String path) throws ClassNotFoundException, IllegalAccessException, InstantiationException {
        A a = (A) Class.forName(&quot;keyAndDifficultPoints.Wildcard_Character.A&quot;).newInstance();
        //很明显下面的这行代码是错的，但是写代码的时候你不知道path是哪个
//        B b = (B)Class.forName(&quot;keyAndDifficultPoints.Wildcard_Character.A&quot;).newInstance();
        System.out.println(a.toString());
    }
}

class A {
    String name;

    @Override
    public String toString() {
        return &quot;我是对象A&quot;;
    }
}

class B {
    String name;

    @Override
    public String toString() {
        return &quot;我是对象B&quot;;
    }
}


class C {
    //所以当不知道声明什么类型的 Class 的时候可以定义一 个Class&lt;?&gt;。
    public Class&lt;?&gt; clazz1;

    //因为T没有声明，所以编译报错
//    public Class&lt;T&gt; clazz2;
}

class D&lt;T&gt; {
    public Class&lt;?&gt; clazz;
    // 不会报错
    public Class&lt;T&gt; clazzT;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="泛型原理-泛型擦除" tabindex="-1"><a class="header-anchor" href="#泛型原理-泛型擦除" aria-hidden="true">#</a> 泛型原理（泛型擦除）</h1><h2 id="类型擦除简介" tabindex="-1"><a class="header-anchor" href="#类型擦除简介" aria-hidden="true">#</a> 类型擦除简介</h2><p>​ Java的泛型是伪泛型，为什么说Java的泛型是伪泛型呢？因为在编译期间，所有的泛型信息都会被擦除掉，我们常称为<strong>泛型擦除</strong>。</p><p>​ Java中的泛型基本上都是在编译器这个层次来实现的，在生成的Java字节码中是不包含泛型中的类型信息的。使用泛型的时候加上的类型参数，编译器在编译的时候去掉，这个过程就称为类型擦除。</p><p>​ 如在代码中定义的<code>List&lt;object&gt;</code>和<code>List&lt;String&gt;</code>等类型，在编译后都会编程List，JVM看到的只是List。而由泛型附加的类型信息对JVM来说是不可见的。Java编译器会在编译时尽可能的发现可能出错的地方，但是仍然无法避免在运行时刻出现类型转换异常的情况。类型擦除也是Java的泛型实现方法与C++模版机制实现方式之间的重要区别。</p><p>可以通过两个例子，来证明java泛型的类型擦除。</p><p><strong>例1：</strong></p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>   @Test
    public void test() {
        List&lt;String&gt; stringList = new ArrayList&lt;String&gt;();
        stringList.add(&quot;my&quot;);
        List&lt;Integer&gt; integerList = new ArrayList&lt;Integer&gt;();
        integerList.add(123);
        System.out.println(stringList.getClass() == integerList.getClass());

    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>结果：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>true

Process finished with exit code 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们定义了两个List，不过一个是List<code>&lt;String&gt;</code>泛型类型，只能存储字符串。一个是List<code>&lt;Integer&gt;</code>泛型类型，只能存储整形。最后，我们通过stringList对象和integerList对象的getClass方法获取它们的类的信息，最后发现结果为true。说明泛型类型String和Integer都被擦除掉了，只剩下了原始类型。</p><p><strong>例2：</strong></p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code> @Test
    public void test01() throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {
        List&lt;Integer&gt; list = new ArrayList&lt;Integer&gt;();
        //这样调用add方法只能存储整形，因为泛型类型的实例为Integer
        list.add(1);
        //这样写编译就会报错
//        list.add(&quot;my&quot;);

        //通过反射的方式则可以存储String
        list.getClass().getMethod(&quot;add&quot;, Object.class).invoke(list, &quot;my&quot;);
        for (int i = 0; i &lt; list.size(); i++) {
            System.out.println(list.get(i));
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1
my

Process finished with exit code 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在程序中定义了一个List<code>&lt;Integer&gt;</code>泛型类型，如果直接调用add方法，那么只能存储整形的数据。不过当我们利用反射调用add方法的时候，却可以存储字符串。这说明了Integer泛型实例在编译之后被擦除了，只保留了 原始类型。</p><h2 id="类型擦除后保留的原始类型" tabindex="-1"><a class="header-anchor" href="#类型擦除后保留的原始类型" aria-hidden="true">#</a> 类型擦除后保留的原始类型</h2><p>1、在上面，几次提到了<strong>原始类型</strong>。什么是原始类型？原始类型就是擦除去了泛型信息，最后在字节码中的类型变量的真正类型。无论何时定义一个泛型类型，相应的原始类型都会被自动地提供。类型变量被擦除，并使用其限定类型（无限定的变量用Object替换）。</p><p>例3：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package keyAndDifficultPoints.principle;

/**
 * @Author: youthlql-吕
 * @Date: 2020/10/16 23:01
 * &lt;p&gt;
 * 功能描述:
 */
public class Test_principle02 {
    public static void main(String[] args) {
    }
}
class Test_Generic&lt;T&gt; {
    private T value;

    public T getValue() {
        return value;
    }

    public void setValue(T value) {
        this.value = value;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面我们用IDEA的工具，查看这个类的字节码信息。我把完整的字节码复制在下方：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// class version 52.0 (52)
// access flags 0x20
// signature &lt;T:Ljava/lang/Object;&gt;Ljava/lang/Object;
// declaration: keyAndDifficultPoints/principle/Test_Generic&lt;T&gt;
class keyAndDifficultPoints/principle/Test_Generic {

  // compiled from: Test_principle02.java

  // access flags 0x2
  // signature TT;
  // declaration: T
  private Ljava/lang/Object; value

  // access flags 0x0
  &lt;init&gt;()V
   L0
    LINENUMBER 13 L0
    ALOAD 0
    INVOKESPECIAL java/lang/Object.&lt;init&gt; ()V
    RETURN
   L1
    LOCALVARIABLE this LkeyAndDifficultPoints/principle/Test_Generic; L0 L1 0
    // signature LkeyAndDifficultPoints/principle/Test_Generic&lt;TT;&gt;;
    // declaration: keyAndDifficultPoints.principle.Test_Generic&lt;T&gt;
    MAXSTACK = 1
    MAXLOCALS = 1

  // access flags 0x1
  // signature ()TT;
  // declaration: T getValue()
  public getValue()Ljava/lang/Object;
   L0
    LINENUMBER 17 L0
    ALOAD 0
    GETFIELD keyAndDifficultPoints/principle/Test_Generic.value : Ljava/lang/Object;
    ARETURN
   L1
    LOCALVARIABLE this LkeyAndDifficultPoints/principle/Test_Generic; L0 L1 0
    // signature LkeyAndDifficultPoints/principle/Test_Generic&lt;TT;&gt;;
    // declaration: keyAndDifficultPoints.principle.Test_Generic&lt;T&gt;
    MAXSTACK = 1
    MAXLOCALS = 1

  // access flags 0x1
  // signature (TT;)V
  // declaration: void setValue(T)
  public setValue(Ljava/lang/Object;)V
   L0
    LINENUMBER 21 L0
    ALOAD 0
    ALOAD 1
    PUTFIELD keyAndDifficultPoints/principle/Test_Generic.value : Ljava/lang/Object;
   L1
    LINENUMBER 22 L1
    RETURN
   L2
    LOCALVARIABLE this LkeyAndDifficultPoints/principle/Test_Generic; L0 L2 0
    // signature LkeyAndDifficultPoints/principle/Test_Generic&lt;TT;&gt;;
    // declaration: keyAndDifficultPoints.principle.Test_Generic&lt;T&gt;
    LOCALVARIABLE value Ljava/lang/Object; L0 L2 1
    // signature TT;
    // declaration: T
    MAXSTACK = 2
    MAXLOCALS = 2
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以明显的看到<strong>泛型T</strong>被替换成了<strong>Object</strong>。</p><p>​ 因为在Test_Generic<code>&lt;T&gt;</code>中，T是一个无限定的类型变量，所以用Object替换。其结果就是一个普通的类，如同泛型加入java变成语言之前已经实现的那样。在程序中可以包含不同类型的Test_Generic，如<code>Test_Generic&lt;String&gt;</code>或<code>Test_Generic&lt;Integer&gt;</code>，但是，擦除类型后它们就成为原始的Test_Generic类型了，原始类型都是Object。</p><p>​ 从上面的那个例2中，我们也可以明白<code>List&lt;Integer&gt;</code>被擦除类型后，原始类型也变成了Object，所以通过反射我们就可以存储字符串了。</p><p>2、如果类型变量有限定，那么原始类型就用第一个边界的类型变量来替换。</p><p>比如Test_Generic这样声明</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>class Test_Generic1&lt;T extends List &amp; Collection&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们还是看字节码（后面如无必须，只截取部分字节码）</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// class version 52.0 (52)
// access flags 0x20
// signature &lt;T::Ljava/util/List;:Ljava/util/Collection;&gt;Ljava/lang/Object;
// declaration: keyAndDifficultPoints/principle/Test_Generic1&lt;T extends java.util.List, java.util.Collection&gt;
class keyAndDifficultPoints/principle/Test_Generic1 {

  // compiled from: Test_principle03.java

  // access flags 0x2
  // signature TT;
  // declaration: T
  private Ljava/util/List; value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>会发现T变成了List</p><p>如果顺序变一下</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Test_Generic1</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span> <span class="token keyword">extends</span> <span class="token class-name">Collection</span> <span class="token operator">&amp;</span> <span class="token class-name">List</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>字节码就变了</p><p>T变成了Collection</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// class version 52.0 (52)</span>
<span class="token comment">// access flags 0x20</span>
<span class="token comment">// signature &lt;T::Ljava/util/Collection;:Ljava/util/List;&gt;Ljava/lang/Object;</span>
<span class="token comment">// declaration: keyAndDifficultPoints/principle/Test_Generic1&lt;T extends java.util.Collection, java.util.List&gt;</span>
<span class="token keyword">class</span> keyAndDifficultPoints<span class="token operator">/</span>principle<span class="token operator">/</span><span class="token class-name">Test_Generic1</span> <span class="token punctuation">{</span>

  <span class="token comment">// compiled from: Test_principle03.java</span>

  <span class="token comment">// access flags 0x2</span>
  <span class="token comment">// signature TT;</span>
  <span class="token comment">// declaration: T</span>
  <span class="token keyword">private</span> <span class="token class-name">Ljava</span><span class="token operator">/</span>util<span class="token operator">/</span><span class="token class-name">Collection</span><span class="token punctuation">;</span> value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也就是说在进行字节码编译的时候是使用离T最近的一个类型。</p><h3 id="解答一个疑惑" tabindex="-1"><a class="header-anchor" href="#解答一个疑惑" aria-hidden="true">#</a> 解答一个疑惑</h3><p>在上文说到&amp;的多重限定时</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package keyAndDifficultPoints.principle;

import java.util.*;

/**
 * @Author: youthlql-吕
 * @Date: 2020/10/16 23:30
 * &lt;p&gt;
 * 功能描述:
 */
public class Test_principle04 {

    public static void main(String[] args) {


        /*---------------------测试多重限定符---------------------*/
        List list = new ArrayList&lt;&gt;();
        Queue queue = new ArrayDeque&lt;&gt;();
        LinkedList&lt;Object&gt; linkedList = new LinkedList&lt;&gt;();

		 //多重限定时，在编译的时候取最小范围或共同子类
        test2(list);
//        test3(list); 编译报错
        test4(list);


        //编译报错
//        test2(deque);
//        test3(deque);
//        test4(queue);

        //编译通过
        test2(linkedList);
        test3(linkedList);
        test4(linkedList);


    }


    //可以进行多重限定
    public static &lt;T extends List &amp; Collection&gt; void test2(T t) {

    }

    //可以进行多重限定
    public static &lt;T extends Queue &amp; List&gt; void test3(T t) {

    }

    //可以进行多重限定
    public static &lt;T extends Collection &amp; List&gt; void test4(T t) {

    }

    //编译报错，无法进行多重限定
//    public static &lt;? extends List &amp; Collection&gt; void test4(List&lt;T&gt; dest, List&lt;T&gt; src){
//
//    }

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先来看一下字节码</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// class version 52.0 (52)
// access flags 0x21
public class keyAndDifficultPoints/principle/Test_principle04 {

  // compiled from: Test_principle04.java

  // access flags 0x1
  public &lt;init&gt;()V
   L0
    LINENUMBER 11 L0
    ALOAD 0
    INVOKESPECIAL java/lang/Object.&lt;init&gt; ()V
    RETURN
   L1
    LOCALVARIABLE this LkeyAndDifficultPoints/principle/Test_principle04; L0 L1 0
    MAXSTACK = 1
    MAXLOCALS = 1

  // access flags 0x9
  public static main([Ljava/lang/String;)V
   L0
    LINENUMBER 17 L0
    NEW java/util/ArrayList
    DUP
    INVOKESPECIAL java/util/ArrayList.&lt;init&gt; ()V
    ASTORE 1
   L1
    LINENUMBER 18 L1
    NEW java/util/ArrayDeque
    DUP
    INVOKESPECIAL java/util/ArrayDeque.&lt;init&gt; ()V
    ASTORE 2
   L2
    LINENUMBER 19 L2
    NEW java/util/LinkedList
    DUP
    INVOKESPECIAL java/util/LinkedList.&lt;init&gt; ()V
    ASTORE 3
   L3
    LINENUMBER 22 L3
    ALOAD 1
    INVOKESTATIC keyAndDifficultPoints/principle/Test_principle04.test2 (Ljava/util/List;)V
   L4
    LINENUMBER 24 L4
    ALOAD 1
    INVOKESTATIC keyAndDifficultPoints/principle/Test_principle04.test4 (Ljava/util/Collection;)V
   L5
    LINENUMBER 33 L5
    ALOAD 3
    INVOKESTATIC keyAndDifficultPoints/principle/Test_principle04.test2 (Ljava/util/List;)V
   L6
    LINENUMBER 34 L6
    ALOAD 3
    INVOKESTATIC keyAndDifficultPoints/principle/Test_principle04.test3 (Ljava/util/Queue;)V
   L7
    LINENUMBER 35 L7
    ALOAD 3
    INVOKESTATIC keyAndDifficultPoints/principle/Test_principle04.test4 (Ljava/util/Collection;)V
   L8
    LINENUMBER 38 L8
    RETURN
   L9
    LOCALVARIABLE args [Ljava/lang/String; L0 L9 0
    LOCALVARIABLE list Ljava/util/List; L1 L9 1
    LOCALVARIABLE queue Ljava/util/Queue; L2 L9 2
    LOCALVARIABLE linkedList Ljava/util/LinkedList; L3 L9 3
    // signature Ljava/util/LinkedList&lt;Ljava/lang/Object;&gt;;
    // declaration: java.util.LinkedList&lt;java.lang.Object&gt;
    MAXSTACK = 2
    MAXLOCALS = 4

  // access flags 0x9
  // signature &lt;T::Ljava/util/List;:Ljava/util/Collection;&gt;(TT;)V
  // declaration: void test2&lt;T extends java.util.List, java.util.Collection&gt;(T)
  public static test2(Ljava/util/List;)V
   L0
    LINENUMBER 44 L0
    RETURN
   L1
    LOCALVARIABLE t Ljava/util/List; L0 L1 0
    // signature TT;
    // declaration: T
    MAXSTACK = 0
    MAXLOCALS = 1

  // access flags 0x9
  // signature &lt;T::Ljava/util/Queue;:Ljava/util/List;&gt;(TT;)V
  // declaration: void test3&lt;T extends java.util.Queue, java.util.List&gt;(T)
  public static test3(Ljava/util/Queue;)V
   L0
    LINENUMBER 49 L0
    RETURN
   L1
    LOCALVARIABLE t Ljava/util/Queue; L0 L1 0
    // signature TT;
    // declaration: T
    MAXSTACK = 0
    MAXLOCALS = 1

  // access flags 0x9
  // signature &lt;T::Ljava/util/Collection;:Ljava/util/List;&gt;(TT;)V
  // declaration: void test4&lt;T extends java.util.Collection, java.util.List&gt;(T)
  public static test4(Ljava/util/Collection;)V
   L0
    LINENUMBER 54 L0
    RETURN
   L1
    LOCALVARIABLE t Ljava/util/Collection; L0 L1 0
    // signature TT;
    // declaration: T
    MAXSTACK = 0
    MAXLOCALS = 1
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>test4()</code>方法里离T最近的是<code>Collection</code>，那么T在编译后就被<code>Collection</code>代替了。那按理来说</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>test4(queue);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>1、这里我们传一个Collection的实现类Queue，也应该是可以的啊，但是为什么报错了呢？注意一点报错报的是编译错误，泛型提供编译前检测机制，也就是说在没运行前，泛型规定了<code>多重限定时，在编译的时候取最小范围或共同子类</code>。</p><p>2、那实际上到底可以不可以传Queue呢？根据之前的讲解，我相信大家已经有了结论。实际上是可以的，只不过要跳过编译检测机制，通过反射来放Queue。</p><h3 id="泛型方法调用" tabindex="-1"><a class="header-anchor" href="#泛型方法调用" aria-hidden="true">#</a> 泛型方法调用</h3><p>​ 在调用泛型方法的时候，可以指定泛型，也可以不指定泛型。在不指定泛型的情况下，泛型变量的类型为 该方法中的几种类型的同一个父类的最小级，直到Object。在指定泛型的时候，该方法中的几种类型必须是该泛型实例类型或者其子类。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//不指定泛型的时候</span>
        <span class="token keyword">int</span> a1 <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//这两个参数都是Integer，所以T为Integer类型</span>
        <span class="token class-name">Number</span> b1 <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1.2</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//这两个参数一个是Integer，以风格是Float，所以取同一父类的最小级，为Number</span>
        <span class="token class-name">Object</span> c1 <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;my&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//这两个参数一个是Integer，以风格是Float，所以取同一父类的最小级，为Object</span>

        <span class="token comment">//指定泛型的时候</span>
        <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token class-name">Test</span><span class="token punctuation">.</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//指定了Integer，所以只能为Integer类型或者其子类</span>
<span class="token comment">//        int b = Test.&lt;Integer&gt;add(1, 2.2);//编译错误，指定了Integer，不能为Float</span>
        <span class="token class-name">Number</span> c <span class="token operator">=</span> <span class="token class-name">Test</span><span class="token punctuation">.</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Number</span><span class="token punctuation">&gt;</span></span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2.2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//指定为Number，所以可以为Integer和Float</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//这是一个简单的泛型方法</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">T</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">T</span> x<span class="token punctuation">,</span> <span class="token class-name">T</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> x<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类型擦除引起的问题及解决方法" tabindex="-1"><a class="header-anchor" href="#类型擦除引起的问题及解决方法" aria-hidden="true">#</a> 类型擦除引起的问题及解决方法</h2><h3 id="类型检测针对谁" tabindex="-1"><a class="header-anchor" href="#类型检测针对谁" aria-hidden="true">#</a> 类型检测针对谁？</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>	public static  void main(String[] args) {
		ArrayList&lt;String&gt; arrayList=new ArrayList&lt;String&gt;();
		arrayList.add(&quot;123&quot;);
		arrayList.add(123);//编译错误
	}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类型擦除后，原始类型为Object，是应该运行任意引用类型的添加的。可实际上却不是这样，这恰恰说明了关于泛型变量的使用，是会在编译之前检查的。</p><p>那么，这么类型检查是针对谁的呢？我们来看例子：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public static void main(String[] args) {
        ArrayList&lt;String&gt; arrayList = new ArrayList&lt;String&gt;();
        arrayList.add(1); //编译报错

        ArrayList&lt;String&gt; arrayList1 = new ArrayList(); //第一种 情况
        arrayList1.add(1); //编译报错

        ArrayList arrayList2 = new ArrayList&lt;String&gt;();//第二种 情况
        arrayList2.add(1);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上面的例子，我们可以明白，类型检查就是针对引用的，谁是一个引用，用这个引用调用泛型方法，就会对这个引用调用的方法进行类型检测，而无关它真正引用的对象。</p><h3 id="自动类型转换" tabindex="-1"><a class="header-anchor" href="#自动类型转换" aria-hidden="true">#</a> 自动类型转换</h3><p>因为类型擦除的问题，所以所有的泛型类型变量最后都会被替换为原始类型。这样就引起了一个问题，既然都被替换为原始类型，那么为什么我们在获取的时候，不需要进行强制类型转换呢？</p><p>我么来看一下List的get()方法：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public E get(int index) {
        rangeCheck(index);

        return elementData(index);
    }
    
E elementData(int index) {
        return (E) elementData[index];
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到基本各个类都已经自动帮你转了。</p><h3 id="类型擦除与多态的冲突和解决方法" tabindex="-1"><a class="header-anchor" href="#类型擦除与多态的冲突和解决方法" aria-hidden="true">#</a> 类型擦除与多态的冲突和解决方法</h3><p>这个其实是类型擦除引起的最大的问题了。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class Test_principle05 {
    public static void main(String[] args) {
    }
}
class Generic&lt;T&gt; {
    //key这个成员变量的类型为T,T的类型由外部指定
    private T var;

    public T getVar() {
        return var;
    }

    public void setVar(T var) {
        this.var = var;
    }
}

class MyGeneric extends Generic&lt;Integer&gt;{
    @Override
    public Integer getVar() {
        return super.getVar();
    }
    @Override
    public void setVar(Integer var) {
        super.setVar(var);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实际上，从他们的@Override标签中也可以看到，在子类中重写这两个方法一点问题也没有，实际上是这样的吗？</p><p><strong>分析：</strong></p><p>泛型擦除后，父类是下面这样子</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Generic</span> <span class="token punctuation">{</span>
    <span class="token comment">//key这个成员变量的类型为T,T的类型由外部指定</span>
    <span class="token keyword">private</span> <span class="token class-name">Object</span> <span class="token keyword">var</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">getVar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">var</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setVar</span><span class="token punctuation">(</span><span class="token class-name">Object</span> <span class="token keyword">var</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token keyword">var</span> <span class="token operator">=</span> <span class="token keyword">var</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子类还是这样</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">MyGeneric</span> <span class="token keyword">extends</span> <span class="token class-name">Generic</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">getVar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">getVar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setVar</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> <span class="token keyword">var</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">setVar</span><span class="token punctuation">(</span><span class="token keyword">var</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>先来分析setValue方法，父类的类型是Object，而子类的类型是Date，参数类型不一样，这如果实在普通的继承关系中，根本就不会是重写，而是重载。</p><blockquote><p><strong>重载（Overload）:首先是位于一个类之中或者其子类中，具有相同的方法名，但是方法的参数不同，返回值类型可以相同也可以不同。</strong></p><p>（1）：方法名必须相同。</p><p>（2）：方法的参数列表一定不一样。</p><p>（3）：访问修饰符和返回值类型可以相同也可以不同。</p><p><strong>重写（override）：一般都是表示子类和父类之间的关系，其主要的特征是：方法名相同，参数相同，但是具体的实现不同。</strong></p><p><strong>重写的特征：</strong></p><p>（1）：方法名必须相同，返回值类型必须相同</p><p>（2）：参数列表必须相同</p><p>（3）：访问权限不能比父类中被重写的方法的访问权限更低。例如：如果父类的一个方法被声明为public，那么在子类中重写该方法就不能声明为protected。</p><p>（4）：子类和父类在同一个包中，那么子类可以重写父类所有方法，除了声明为private和final的方法。</p><p>（5）：构造方法不能被重写</p></blockquote><p>我们来测试下到底是重载还是重写</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code> public static void main(String[] args) {
        MyGeneric myGeneric = new MyGeneric();
        myGeneric.setVar(new Integer(1));
        myGeneric.setVar(new Object());//编译错误
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果是重载的话，第四行代码是不会报错的，因为调的是不同的重载方法。但是发现编译报错了，也就是说没有参数是Object的这样的重载函数。所以说是重写了，导致MyGeneric对象只能调用自己重写的方法。</p><p>为什么会这样呢？</p><p>原因是这样的，我们传入父类的泛型类型是Integer，<code>Generic&lt;Integer&gt;</code>，我们的本意是将泛型类变为如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Generic</span> <span class="token punctuation">{</span>
    <span class="token comment">//key这个成员变量的类型为T,T的类型由外部指定</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> <span class="token keyword">var</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">getVar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">var</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setVar</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> <span class="token keyword">var</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token keyword">var</span> <span class="token operator">=</span> <span class="token keyword">var</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后再子类中重写参数类型为Date的那两个方法，实现继承中的多态。</p><p>​ 可是由于种种原因，虚拟机并不能将泛型类型变为Integer，只能将类型擦除掉，变为原始类型Object。这样，我们的本意是进行重写，实现多态。可是类型擦除后，只能变为了重载。这样，类型擦除就和多态有了冲突。JVM知道你的本意吗？知道，可是它能直接实现吗，不能。如果真的不能的话，那我们怎么去重写我们想要的Integer类型参数的方法啊。</p><p>JVM采用了一个特殊的方法，来完成这项功能，那就是<strong>桥方法</strong>。</p><p>我们对下面这个类进行编译，看其字节码</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class MyGeneric extends Generic&lt;Integer&gt;{
    public static void main(String[] args) {
        
    }

    @Override
    public Integer getVar() {
        return super.getVar();
    }
    @Override
    public void setVar(Integer var) {
        super.setVar(var);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>字节码：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// class version 52.0 (52)
// access flags 0x21
// signature LkeyAndDifficultPoints/principle/Generic&lt;Ljava/lang/Integer;&gt;;
// declaration: keyAndDifficultPoints/principle/MyGeneric extends keyAndDifficultPoints.principle.Generic&lt;java.lang.Integer&gt;
public class keyAndDifficultPoints/principle/MyGeneric extends keyAndDifficultPoints/principle/Generic  {

  // compiled from: MyGeneric.java

  // access flags 0x1
  public &lt;init&gt;()V
   L0
    LINENUMBER 9 L0
    ALOAD 0
    INVOKESPECIAL keyAndDifficultPoints/principle/Generic.&lt;init&gt; ()V
    RETURN
   L1
    LOCALVARIABLE this LkeyAndDifficultPoints/principle/MyGeneric; L0 L1 0
    MAXSTACK = 1
    MAXLOCALS = 1

  // access flags 0x9
  public static main([Ljava/lang/String;)V
   L0
    LINENUMBER 12 L0
    RETURN
   L1
    LOCALVARIABLE args [Ljava/lang/String; L0 L1 0
    MAXSTACK = 0
    MAXLOCALS = 1

  // access flags 0x1
  public getVar()Ljava/lang/Integer;  //这是我们重写的getVar()方法
   L0
    LINENUMBER 16 L0
    ALOAD 0
    INVOKESPECIAL keyAndDifficultPoints/principle/Generic.getVar ()Ljava/lang/Object;
    CHECKCAST java/lang/Integer
    ARETURN
   L1
    LOCALVARIABLE this LkeyAndDifficultPoints/principle/MyGeneric; L0 L1 0
    MAXSTACK = 1
    MAXLOCALS = 1

  // access flags 0x1
  public setVar(Ljava/lang/Integer;)V  ////这是我们重写的setVar()方法
   L0
    LINENUMBER 20 L0
    ALOAD 0
    ALOAD 1
    INVOKESPECIAL keyAndDifficultPoints/principle/Generic.setVar (Ljava/lang/Object;)V
   L1
    LINENUMBER 21 L1
    RETURN
   L2
    LOCALVARIABLE this LkeyAndDifficultPoints/principle/MyGeneric; L0 L2 0
    LOCALVARIABLE var Ljava/lang/Integer; L0 L2 1
    MAXSTACK = 2
    MAXLOCALS = 2

  // access flags 0x1041
  public synthetic bridge setVar(Ljava/lang/Object;)V  //编译时由编译器生成的桥方法
   L0
    LINENUMBER 9 L0
    ALOAD 0
    ALOAD 1
    CHECKCAST java/lang/Integer
    INVOKEVIRTUAL keyAndDifficultPoints/principle/MyGeneric.setVar (Ljava/lang/Integer;)V
    RETURN
   L1
    LOCALVARIABLE this LkeyAndDifficultPoints/principle/MyGeneric; L0 L1 0
    MAXSTACK = 2
    MAXLOCALS = 2

  // access flags 0x1041
  public synthetic bridge getVar()Ljava/lang/Object;  //编译时由编译器生成的桥方法
   L0
    LINENUMBER 9 L0
    ALOAD 0
    INVOKEVIRTUAL keyAndDifficultPoints/principle/MyGeneric.getVar ()Ljava/lang/Integer;
    ARETURN
   L1
    LOCALVARIABLE this LkeyAndDifficultPoints/principle/MyGeneric; L0 L1 0
    MAXSTACK = 1
    MAXLOCALS = 1
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 从编译的结果来看，我们本意重写setValue和getValue方法的子类，竟然有4个方法。最后的两个方法，就是编译器自己生成的桥方法。可以看到桥方法的参数类型都是Object，也就是说，子类中真正覆盖父类两个方法的就是这两个我们看不到的桥方法。而打在我们自己定义的setvalue和getValue方法上面的@Oveerride只不过是假象。而桥方法的内部实现，就只是去调用我们自己重写的那两个方法。</p><p>所以，虚拟机巧妙的使用了巧方法，来解决了类型擦除和多态的冲突。</p>`,136);function b(g,k){const i=a("ExternalLinkIcon");return l(),d("div",null,[p,n("p",null,[n("a",o,[t("sun文档"),c(i)])]),m])}const h=e(u,[["render",b],["__file","fanxing.html.vue"]]);export{h as default};
