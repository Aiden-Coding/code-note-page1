import{_ as n,o as s,c as a,e}from"./app-GjP6hEVt.js";const t="/code-note-page1/assets/image-2-1r1u6hrE.png",i="/code-note-page1/assets/image-3-4jUmvSXD.png",l="/code-note-page1/assets/image-4-x4zFzni8.png",p="/code-note-page1/assets/image-5-i91Y50gW.png",c="/code-note-page1/assets/image-6-kNuThBZP.png",o={},u=e('<h1 id="java8新特性纵览" tabindex="-1"><a class="header-anchor" href="#java8新特性纵览" aria-hidden="true">#</a> Java8新特性纵览</h1><blockquote><p>本篇文章只讲解比较重要的</p></blockquote><p><img src="'+t+`" alt="Alt text"></p><h1 id="lambda表达式" tabindex="-1"><a class="header-anchor" href="#lambda表达式" aria-hidden="true">#</a> Lambda表达式</h1><h2 id="为什么使用lambda表达式" tabindex="-1"><a class="header-anchor" href="#为什么使用lambda表达式" aria-hidden="true">#</a> 为什么使用Lambda表达式？</h2><ul><li>Lambda 是一个<strong>匿名函数</strong>，我们可以把 Lambda 表达式理解为是<strong>一段可以传递的代码</strong>（将代码像数据一样进行传递）。使用它可以写出更简洁、更灵活的代码。作为一种更紧凑的代码风格，使Java的语言表达能力得到了提升。</li><li>在Java8之后的很多源码里用到了Lambda表达式，不学的话可能看不懂源码。</li></ul><h2 id="简单使用" tabindex="-1"><a class="header-anchor" href="#简单使用" aria-hidden="true">#</a> 简单使用</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//原始写法</span>
        <span class="token class-name">Runnable</span> r1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我爱北京天安门&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>

        r1<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;***********************&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//lambda表达式，可以表达一样的意思</span>
        <span class="token class-name">Runnable</span> r2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我爱北京故宫&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        r2<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> com1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> o1<span class="token punctuation">,</span> <span class="token class-name">Integer</span> o2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span>o1<span class="token punctuation">,</span>o2<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span> compare1 <span class="token operator">=</span> com1<span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token number">21</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>compare1<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;***********************&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">//Lambda表达式的写法</span>
        <span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> com2 <span class="token operator">=</span> <span class="token punctuation">(</span>o1<span class="token punctuation">,</span>o2<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span>o1<span class="token punctuation">,</span>o2<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span> compare2 <span class="token operator">=</span> com2<span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">,</span><span class="token number">21</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>compare2<span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;***********************&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//方法引用</span>
        <span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> com3 <span class="token operator">=</span> <span class="token class-name">Integer</span> <span class="token operator">::</span> <span class="token function">compare</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span> compare3 <span class="token operator">=</span> com3<span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">,</span><span class="token number">21</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>compare3<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lambda语法规则" tabindex="-1"><a class="header-anchor" href="#lambda语法规则" aria-hidden="true">#</a> Lambda语法规则</h2><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>import org.junit.Test;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.function.Consumer;

/**
 * Lambda表达式的使用
 * &lt;p&gt;
 * 1.举例： (o1,o2) -&gt; Integer.compare(o1,o2);
 * 2.格式：
 * -&gt; :lambda操作符 或 箭头操作符
 * -&gt;左边：lambda形参列表 （其实就是接口中的抽象方法的形参列表）
 * -&gt;右边：lambda体 （其实就是重写的抽象方法的方法体）
 * &lt;p&gt;
 * 3. Lambda表达式的使用：（分为6种情况介绍）
 * &lt;p&gt;
 * 总结：
 * -&gt;左边：lambda形参列表的参数类型可以省略(类型推断)；如果lambda形参列表只有一个参数，其一对()也
 * 可以省略
 * -&gt;右边：lambda体应该使用一对{}包裹；如果lambda体只有一条执行语句（可能是return语句），省略这一
 对{}和return关键字
 * &lt;p&gt;
 * 4.Lambda表达式的本质：作为函数式接口的实例
 * &lt;p&gt;
 * 5. 如果一个接口中，只声明了一个抽象方法，则此接口就称为函数式接口。我们可以在一个接口上
 使用 @FunctionalInterface 注解，
 * 这样做可以检查它是否是一个函数式接口。
 * &lt;p&gt;
 * 6. 所以以前用匿名实现类表示的现在都可以用Lambda表达式来写。
 */
public class LambdaTest1 {
    //语法格式一：无参，无返回值
    @Test
    public void test1() {
        Runnable r1 = new Runnable() {
            @Override
            public void run() {
                System.out.println(&quot;我爱北京天安门&quot;);
            }
        };

        r1.run();

        System.out.println(&quot;***********************&quot;);

        Runnable r2 = () -&gt; {
            System.out.println(&quot;我爱北京故宫&quot;);
        };

        r2.run();
    }

    //语法格式二：Lambda 需要一个参数，但是没有返回值。
    @Test
    public void test2() {

        Consumer&lt;String&gt; con = new Consumer&lt;String&gt;() {
            @Override
            public void accept(String s) {
                System.out.println(s);
            }
        };
        con.accept(&quot;谎言和誓言的区别是什么？&quot;);

        System.out.println(&quot;*******************&quot;);

        Consumer&lt;String&gt; con1 = (String s) -&gt; {
            System.out.println(s);
        };
        con1.accept(&quot;一个是听得人当真了，一个是说的人当真了&quot;);

    }

    //语法格式三：数据类型可以省略，因为可由编译器推断得出，称为“类型推断”
    @Test
    public void test3() {

        Consumer&lt;String&gt; con1 = (String s) -&gt; {
            System.out.println(s);
        };
        con1.accept(&quot;一个是听得人当真了，一个是说的人当真了&quot;);

        System.out.println(&quot;*******************&quot;);

        Consumer&lt;String&gt; con2 = (s) -&gt; {
            System.out.println(s);
        };
        con2.accept(&quot;一个是听得人当真了，一个是说的人当真了&quot;);

    }

    @Test
    public void test4() {

        ArrayList&lt;String&gt; list = new ArrayList&lt;&gt;();//类型推断

        int[] arr = {1, 2, 3};//类型推断

    }

    //语法格式四：Lambda 若只需要一个参数时，参数的小括号可以省略
    @Test
    public void test5() {
        Consumer&lt;String&gt; con1 = (s) -&gt; {
            System.out.println(s);
        };
        con1.accept(&quot;一个是听得人当真了，一个是说的人当真了&quot;);

        System.out.println(&quot;*******************&quot;);

        Consumer&lt;String&gt; con2 = s -&gt; {
            System.out.println(s);
        };
        con2.accept(&quot;一个是听得人当真了，一个是说的人当真了&quot;);


    }

    //语法格式五：Lambda 需要两个或以上的参数，多条执行语句，并且可以有返回值
    @Test
    public void test6() {

        Comparator&lt;Integer&gt; com1 = new Comparator&lt;Integer&gt;() {
            @Override
            public int compare(Integer o1, Integer o2) {
                System.out.println(o1);
                System.out.println(o2);
                return o1.compareTo(o2);
            }
        };

        System.out.println(com1.compare(12, 21));

        System.out.println(&quot;*****************************&quot;);
        Comparator&lt;Integer&gt; com2 = (o1, o2) -&gt; {
            System.out.println(o1);
            System.out.println(o2);
            return o1.compareTo(o2);
        };

        System.out.println(com2.compare(12, 6));


    }

    //语法格式六：当 Lambda 体只有一条语句时，return 与大括号若有，都可以省略
    @Test
    public void test7() {

        Comparator&lt;Integer&gt; com1 = (o1, o2) -&gt; {
            return o1.compareTo(o2);
        };

        System.out.println(com1.compare(12, 6));

        System.out.println(&quot;*****************************&quot;);

        Comparator&lt;Integer&gt; com2 = (o1, o2) -&gt; o1.compareTo(o2);

        System.out.println(com2.compare(12, 21));

    }

    @Test
    public void test8() {
        Consumer&lt;String&gt; con1 = s -&gt; {
            System.out.println(s);
        };
        con1.accept(&quot;一个是听得人当真了，一个是说的人当真了&quot;);

        System.out.println(&quot;*****************************&quot;);

        Consumer&lt;String&gt; con2 = s -&gt; System.out.println(s);

        con2.accept(&quot;一个是听得人当真了，一个是说的人当真了&quot;);

    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="函数式接口" tabindex="-1"><a class="header-anchor" href="#函数式接口" aria-hidden="true">#</a> 函数式接口</h1><h2 id="什么是函数式-functional-接口" tabindex="-1"><a class="header-anchor" href="#什么是函数式-functional-接口" aria-hidden="true">#</a> 什么是函数式(Functional)接口</h2><ul><li><p>只包含一个抽象方法的接口，称为<strong>函数式接口</strong>。</p></li><li><p>你可以通过 Lambda 表达式来创建该接口的对象。（若 Lambda 表达式抛出一个受检异常(即：非运行时异常)，那么该异常需要在目标接口的抽象方法上进行声明）。</p></li><li><p>我们可以在一个接口上使用 <strong>@FunctionalInterface</strong> 注解，这样做可以检查它是否是一个函数式接口。同时 javadoc 也会包含一条声明，说明这个接口是一个函数式接口。</p></li><li><p>在java.util.function包下定义了Java 8 的丰富的函数式接口</p></li></ul><h2 id="如何理解函数式接口" tabindex="-1"><a class="header-anchor" href="#如何理解函数式接口" aria-hidden="true">#</a> 如何理解函数式接口</h2><ul><li>Java从诞生日起就是一直倡导“一切皆对象”，在Java里面面向对象(OOP)编程是一切。但是随着python、scala等语言的兴起和新技术的挑战，Java不得不做出调整以便支持更加广泛的技术要求，也即java不但可以支持OOP还可以支持OOF（面向函数编程）</li><li>在函数式编程语言当中，函数被当做一等公民对待。在将函数作为一等公民的编程语言中，Lambda表达式的类型是函数。但是在Java8中，有所不同。在Java8中，Lambda表达式是对象，而不是函数，它们必须依附于一类特别的对象类型——函数式接口。</li><li>简单的说，在Java8中，Lambda表达式就是一个函数式接口的实例。这就是Lambda表达式和函数式接口的关系。也就是说，只要一个对象是函数式接口的实例，那么该对象就可以用Lambda表达式来表示。</li><li>所以以前用匿名实现类表示的现在都可以用Lambda表达式来写。</li></ul><h2 id="java内置函数式接口" tabindex="-1"><a class="header-anchor" href="#java内置函数式接口" aria-hidden="true">#</a> Java内置函数式接口</h2><p><strong>核心函数式接口</strong></p><p><img src="`+i+'" alt="Alt text"></p><p><strong>其它函数式接口</strong></p><p><img src="'+l+`" alt="Alt text"></p><p><strong>Consumer</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token function">happyTime</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Consumer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Double</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">accept</span><span class="token punctuation">(</span><span class="token class-name">Double</span> aDouble<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;学习太累了，去天上人间买了瓶矿泉水，价格为：&quot;</span> <span class="token operator">+</span> aDouble<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;********************&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">happyTime</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">,</span>money <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;学习太累了，去天上人间喝了口水，价格为：&quot;</span> <span class="token operator">+</span> money<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">happyTime</span><span class="token punctuation">(</span><span class="token keyword">double</span> money<span class="token punctuation">,</span> <span class="token class-name">Consumer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Double</span><span class="token punctuation">&gt;</span></span> con<span class="token punctuation">)</span><span class="token punctuation">{</span>
        con<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>money<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>结果：</strong></p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>学习太累了，去天上人间买了瓶矿泉水，价格为：500.0
********************
学习太累了，去天上人间喝了口水，价格为：400.0

Process finished with exit code 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Predicate</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">&quot;北京&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;南京&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;天津&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;东京&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;西京&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;普京&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> filterStrs <span class="token operator">=</span> <span class="token function">filterString</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Predicate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//这里是定义一个校验规则</span>
                <span class="token keyword">return</span> s<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&quot;京&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>filterStrs<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//用lambda表达式会很简单</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> filterStrs1 <span class="token operator">=</span> <span class="token function">filterString</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span>s <span class="token operator">-&gt;</span> s<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&quot;京&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>filterStrs1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//根据给定的规则，过滤集合中的字符串。此规则由Predicate的方法决定</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">filterString</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">,</span> <span class="token class-name">Predicate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> pre<span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> filterList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">String</span> s <span class="token operator">:</span> list<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>pre<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                filterList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> filterList<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>结果：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[北京, 南京, 东京, 西京, 普京]
[北京, 南京, 东京, 西京, 普京]

Process finished with exit code 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义函数式接口" tabindex="-1"><a class="header-anchor" href="#自定义函数式接口" aria-hidden="true">#</a> 自定义函数式接口</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 自定义函数式接口
 * 只是说加上@FunctionalInterface之后可以校验
 */</span>
<span class="token annotation punctuation">@FunctionalInterface</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">MyFunInterface</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">T</span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token class-name">T</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//这个方法的第一个参数是lambda表达式，相当于是实例化了那个函数式接口</span>
        <span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token function">toUpperString</span><span class="token punctuation">(</span>str <span class="token operator">-&gt;</span> str<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;abcd&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">toUpperString</span><span class="token punctuation">(</span><span class="token class-name">MyFunInterface</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> mf<span class="token punctuation">,</span><span class="token class-name">String</span> str<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> mf<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="方法引用" tabindex="-1"><a class="header-anchor" href="#方法引用" aria-hidden="true">#</a> 方法引用</h1><ul><li><p>当要传递给Lambda体的操作，已经有实现的方法了，可以使用方法引用！</p></li><li><p>方法引用可以看做是Lambda表达式深层次的表达。换句话说，方法引用就是Lambda表达式，也就是函数式接口的一个实例，通过方法的名字来指向一个方法，可以认为是Lambda表达式的一个语法糖。</p></li><li><p>要求：实现接口的抽象方法的参数列表和返回值类型，必须与方法引用的方法的参数列表和返回值类型保持一致！</p></li><li><p>格式：使用操作符 “::” 将类(或对象) 与 方法名分隔开来。</p></li><li><p>如下三种主要使用情况：</p><ul><li><p>对象 :: 实例方法名</p></li><li><p>类 :: 静态方法名</p></li><li><p>类 :: 实例方法名</p></li></ul></li></ul><p>我们直接拿例子来说明情况，先提前准备两个类：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>
public class Employee {

	private int id;
	private String name;
	private int age;
	private double salary;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public double getSalary() {
		return salary;
	}

	public void setSalary(double salary) {
		this.salary = salary;
	}

	public Employee() {
		System.out.println(&quot;Employee().....&quot;);
	}

	public Employee(int id) {
		this.id = id;
		System.out.println(&quot;Employee(int id).....&quot;);
	}

	public Employee(int id, String name) {
		this.id = id;
		this.name = name;
	}

	public Employee(int id, String name, int age, double salary) {

		this.id = id;
		this.name = name;
		this.age = age;
		this.salary = salary;
	}

	@Override
	public String toString() {
		return &quot;Employee{&quot; + &quot;id=&quot; + id + &quot;, name=&#39;&quot; + name + &#39;\\&#39;&#39; + &quot;, age=&quot; + age + &quot;, salary=&quot; + salary + &#39;}&#39;;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		Employee employee = (Employee) o;

		if (id != employee.id)
			return false;
		if (age != employee.age)
			return false;
		if (Double.compare(employee.salary, salary) != 0)
			return false;
		return name != null ? name.equals(employee.name) : employee.name == null;
	}

	@Override
	public int hashCode() {
		int result;
		long temp;
		result = id;
		result = 31 * result + (name != null ? name.hashCode() : 0);
		result = 31 * result + age;
		temp = Double.doubleToLongBits(salary);
		result = 31 * result + (int) (temp ^ (temp &gt;&gt;&gt; 32));
		return result;
	}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>/**
 * 提供用于测试的数据
 */
public class EmployeeData {
   
   public static List&lt;Employee&gt; getEmployees(){
      List&lt;Employee&gt; list = new ArrayList&lt;&gt;();
      
      list.add(new Employee(1001, &quot;马化腾&quot;, 34, 6000.38));
      list.add(new Employee(1002, &quot;马云&quot;, 12, 9876.12));
      list.add(new Employee(1003, &quot;刘强东&quot;, 33, 3000.82));
      list.add(new Employee(1004, &quot;雷军&quot;, 26, 7657.37));
      list.add(new Employee(1005, &quot;李彦宏&quot;, 65, 5555.32));
      list.add(new Employee(1006, &quot;比尔盖茨&quot;, 42, 9500.43));
      list.add(new Employee(1007, &quot;任正非&quot;, 26, 4333.32));
      list.add(new Employee(1008, &quot;扎克伯格&quot;, 35, 2500.32));
      
      return list;
   }
   
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>下面来通过实际例子讲解方法引用：</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>

<span class="token doc-comment comment">/**
 * 方法引用的使用
 *
 * 1.使用情境：当要传递给Lambda体的操作，已经有实现的方法了，可以使用方法引用！
 *
 * 2.方法引用，本质上就是Lambda表达式，而Lambda表达式作为函数式接口的实例。所以
 *   方法引用，也是函数式接口的实例。
 *
 * 3. 使用格式：  类(或对象) :: 方法名
 *
 * 4. 具体分为如下的三种情况：
 *    情况1     对象 :: 非静态方法
 *    情况2     类 :: 静态方法
 *
 *    情况3     类 :: 非静态方法
 *
 * 5. 方法引用使用的要求：
 * 	接口中的抽象方法的形参列表和返回值类型
 * 	与
 * 	方法引用的方法的形参列表和返回值类型相同！（针对于情况1和情况2）
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MethodRefTest</span> <span class="token punctuation">{</span>

	<span class="token comment">// 情况一：对象 :: 实例方法</span>
	<span class="token comment">//Consumer中的void accept(T t)</span>
	<span class="token comment">//PrintStream中的void println(T t)</span>
	<span class="token annotation punctuation">@Test</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">Consumer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> con1 <span class="token operator">=</span> str <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
		con1<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token string">&quot;北京&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;*******************&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">PrintStream</span> ps <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">;</span>
		<span class="token class-name">Consumer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> con2 <span class="token operator">=</span> ps<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">;</span>
		con2<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token string">&quot;beijing&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">//Supplier中的T get()</span>
	<span class="token comment">//Employee中的String getName()</span>
	<span class="token annotation punctuation">@Test</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">Employee</span> emp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Employee</span><span class="token punctuation">(</span><span class="token number">1001</span><span class="token punctuation">,</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span><span class="token number">23</span><span class="token punctuation">,</span><span class="token number">5600</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token class-name">Supplier</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> sup1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> emp<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sup1<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;*******************&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">Supplier</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> sup2 <span class="token operator">=</span> emp<span class="token operator">::</span><span class="token function">getName</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sup2<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token punctuation">}</span>

	<span class="token comment">// 情况二：类 :: 静态方法</span>
	<span class="token comment">//Comparator中的int compare(T t1,T t2)</span>
	<span class="token comment">//Integer中的int compare(T t1,T t2)</span>
	<span class="token annotation punctuation">@Test</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> com1 <span class="token operator">=</span> <span class="token punctuation">(</span>t1<span class="token punctuation">,</span>t2<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span>t1<span class="token punctuation">,</span>t2<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>com1<span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token number">21</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;*******************&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> com2 <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token operator">::</span><span class="token function">compare</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>com2<span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token punctuation">}</span>
	
	<span class="token comment">//Function中的R apply(T t)</span>
	<span class="token comment">//Math中的Long round(Double d)</span>
	<span class="token annotation punctuation">@Test</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test4</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">Function</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Double</span><span class="token punctuation">,</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> func <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Function</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Double</span><span class="token punctuation">,</span> <span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token annotation punctuation">@Override</span>
			<span class="token keyword">public</span> <span class="token class-name">Long</span> <span class="token function">apply</span><span class="token punctuation">(</span><span class="token class-name">Double</span> d<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">;</span>

		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;*******************&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token class-name">Function</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Double</span><span class="token punctuation">,</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> func1 <span class="token operator">=</span> d <span class="token operator">-&gt;</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>func1<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token number">12.3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;*******************&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token class-name">Function</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Double</span><span class="token punctuation">,</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> func2 <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token operator">::</span><span class="token function">round</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>func2<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token number">12.6</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 情况三：类 :: 实例方法  (有难度)</span>
	<span class="token comment">// Comparator中的int comapre(T t1,T t2)  第一个参数T t1,也可以变成方法的调用者</span>
	<span class="token comment">// String中的int t1.compareTo(t2)        看上面说的，t1变成了调用者等价于第一个参数T t1</span>
	<span class="token annotation punctuation">@Test</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test5</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> com1 <span class="token operator">=</span> <span class="token punctuation">(</span>s1<span class="token punctuation">,</span>s2<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> s1<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>com1<span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;abd&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;*******************&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> com2 <span class="token operator">=</span> <span class="token class-name">String</span> <span class="token operator">::</span> <span class="token function">compareTo</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>com2<span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span><span class="token string">&quot;abd&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;abm&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//BiPredicate中的boolean test(T t1, T t2);</span>
	<span class="token comment">//String中的boolean t1.equals(t2)</span>
	<span class="token annotation punctuation">@Test</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test6</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">BiPredicate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> pre1 <span class="token operator">=</span> <span class="token punctuation">(</span>s1<span class="token punctuation">,</span>s2<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> s1<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>pre1<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;*******************&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">BiPredicate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> pre2 <span class="token operator">=</span> <span class="token class-name">String</span> <span class="token operator">::</span> <span class="token function">equals</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>pre2<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;abd&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">// Function中的R apply(T t)</span>
	<span class="token comment">// Employee中的String getName();   第一个参数T t相当于方法调用者emp，返回值R和String对应</span>
	<span class="token annotation punctuation">@Test</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test7</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">Employee</span> employee <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Employee</span><span class="token punctuation">(</span><span class="token number">1001</span><span class="token punctuation">,</span> <span class="token string">&quot;Jerry&quot;</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token number">6000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


		<span class="token class-name">Function</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">,</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> func1 <span class="token operator">=</span> e <span class="token operator">-&gt;</span> e<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>func1<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>employee<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;*******************&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


		<span class="token class-name">Function</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">,</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> func2 <span class="token operator">=</span> <span class="token class-name">Employee</span><span class="token operator">::</span><span class="token function">getName</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>func2<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>employee<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="构造器引用" tabindex="-1"><a class="header-anchor" href="#构造器引用" aria-hidden="true">#</a> 构造器引用</h1><p>格式：ClassName :: new</p><p>与函数式接口相结合，自动与函数式接口中方法兼容。可以把构造器引用赋值给定义的方法，要求构造器参数列表要与接口中抽象方法的参数列表一致！且方法的返回值即为构造器对应类的对象。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>
import org.junit.Test;

import java.util.Arrays;
import java.util.function.BiFunction;
import java.util.function.Function;
import java.util.function.Supplier;

/**
 * 一、构造器引用
 *      和方法引用类似，函数式接口的抽象方法的形参列表和构造器的形参列表一致。
 *      抽象方法的返回值类型即为构造器所属的类的类型
 *
 * 二、数组引用
 *     大家可以把数组看做是一个特殊的类，则写法与构造器引用一致。
 *
 */
public class ConstructorRefTest {

    /**
     * 构造器引用
     * Supplier中的T get()
     * Employee的空参构造器：Employee()
     * 1、和方法引用一样的理解方法，你的get()方法没有参数，我的Employee()也没有参数。
     * 2、你的get()方法有返回值T，我的Employee()方法返回值也是一个对象
     * 3、所以刚好可以用  
     */
    @Test
    public void test1(){

        Supplier&lt;Employee&gt; sup = new Supplier&lt;Employee&gt;() {
            @Override
            public Employee get() {
                return new Employee();
            }
        };
        System.out.println(&quot;*******************&quot;);

        Supplier&lt;Employee&gt;  sup1 = () -&gt; new Employee();
        System.out.println(sup1.get());

        System.out.println(&quot;*******************&quot;);

        Supplier&lt;Employee&gt;  sup2 = Employee :: new;
        System.out.println(sup2.get());
    }

	//Function中的R apply(T t)
    @Test
    public void test2(){
        Function&lt;Integer,Employee&gt; func1 = id -&gt; new Employee(id);
        Employee employee = func1.apply(1001);
        System.out.println(employee);

        System.out.println(&quot;*******************&quot;);

        Function&lt;Integer,Employee&gt; func2 = Employee :: new;
        Employee employee1 = func2.apply(1002);
        System.out.println(employee1);

    }

	//BiFunction中的R apply(T t,U u)
    @Test
    public void test3(){
        BiFunction&lt;Integer,String,Employee&gt; func1 = (id,name) -&gt; new Employee(id,name);
        System.out.println(func1.apply(1001,&quot;Tom&quot;));

        System.out.println(&quot;*******************&quot;);

        BiFunction&lt;Integer,String,Employee&gt; func2 = Employee :: new;
        System.out.println(func2.apply(1002,&quot;Tom&quot;));

    }

	//数组引用
    //Function中的R apply(T t)
    @Test
    public void test4(){
        Function&lt;Integer,String[]&gt; func1 = length -&gt; new String[length];
        String[] arr1 = func1.apply(5);
        System.out.println(Arrays.toString(arr1));

        System.out.println(&quot;*******************&quot;);

        Function&lt;Integer,String[]&gt; func2 = String[] :: new;
        String[] arr2 = func2.apply(10);
        System.out.println(Arrays.toString(arr2));

    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="强大的stream-api" tabindex="-1"><a class="header-anchor" href="#强大的stream-api" aria-hidden="true">#</a> 强大的Stream API</h1><h2 id="stream-api说明" tabindex="-1"><a class="header-anchor" href="#stream-api说明" aria-hidden="true">#</a> Stream API说明</h2><ul><li><p>Java8中有两大最为重要的改变。第一个是 <strong>Lambda</strong> <strong>表达式</strong>；另外一个则是 <strong>Stream API</strong>。</p></li><li><p>Stream API ( java.util.stream) 把真正的函数式编程风格引入到Java中。这是目前为止对Java类库最好的补充，因为Stream API可以极大提供Java程序员的生产力，让程序员写出高效率、干净、简洁的代码。</p></li><li><p>Stream 是 Java8 中处理集合的关键抽象概念，它可以指定你希望对集合进行的操作，可以执行非常复杂的查找、过滤和映射数据等操作。 **使用Stream API 对集合数据进行操作，就类似于使用 SQL 执行的数据库查询。**也可以使用 Stream API 来并行执行操作。简言之，Stream API 提供了一种高效且易于使用的处理数据的方式</p></li></ul><h2 id="为什么要使用stream-api" tabindex="-1"><a class="header-anchor" href="#为什么要使用stream-api" aria-hidden="true">#</a> 为什么要使用Stream API</h2><ul><li><p>实际开发中，项目中多数数据源都来自于Mysql，Oracle等，很多一些复杂的数据获取可以直接在sql层面去解决。但现在数据源可以更多了，有MongDB，Radis等，而这些NoSQL的数据本身不支持一些复杂的数据计算，这个时候就需要Java层面去处理。</p></li><li><p>Stream 和 Collection 集合的区别：Collection 是一种静态的内存数据结构，而 Stream 是有关计算的。前者是主要面向内存，存储在内存中，后者主要是面向 CPU，通过 CPU 实现计算。</p></li></ul><h2 id="什么是stream" tabindex="-1"><a class="header-anchor" href="#什么是stream" aria-hidden="true">#</a> 什么是Stream</h2><p>Stream到底是什么呢？</p><p>是数据渠道，用于操作数据源（集合、数组等）所生成的元素序列。</p><p><strong>“集合讲的是数据，Stream讲的是计算！”</strong></p><p><strong>注意：</strong></p><p>①Stream 自己不会存储元素。</p><p>②Stream 不会改变源对象。相反，他们会返回一个持有结果的新Stream。</p><p>③Stream 操作是延迟执行的。这意味着他们会等到需要结果的时候才执行</p><p><strong>Stream</strong> <strong>的操作三个步骤</strong></p><p>1、创建Stream</p><p>一个数据源（如：集合、数组），获取一个流</p><p>2、中间操作</p><p>一个中间操作链，对数据源的数据进行处理</p><p>3、终止操作(终端操作)</p><p>一旦执行终止操作，就执行中间操作链，才产生结果【也就是所谓的延迟执行】。之后，不会再被使用</p><p><img src="`+p+`" alt="Alt text"></p><h2 id="创建stream" tabindex="-1"><a class="header-anchor" href="#创建stream" aria-hidden="true">#</a> 创建Stream</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StreamAPITest</span> <span class="token punctuation">{</span>

    <span class="token comment">//创建 Stream方式一：通过集合</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">&gt;</span></span> employees <span class="token operator">=</span> <span class="token class-name">EmployeeData</span><span class="token punctuation">.</span><span class="token function">getEmployees</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//        default Stream&lt;E&gt; stream() : 返回一个顺序流，顺序流等会中间操作拿数据的时候按顺序拿</span>
        <span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">&gt;</span></span> stream <span class="token operator">=</span> employees<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//        default Stream&lt;E&gt; parallelStream() : 返回一个并行流</span>
        <span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">&gt;</span></span> parallelStream <span class="token operator">=</span> employees<span class="token punctuation">.</span><span class="token function">parallelStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token comment">//创建 Stream方式二：通过数组</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token comment">//调用Arrays类的static &lt;T&gt; Stream&lt;T&gt; stream(T[] array): 返回一个流</span>
        <span class="token class-name">IntStream</span> stream <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Employee</span> e1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Employee</span><span class="token punctuation">(</span><span class="token number">1001</span><span class="token punctuation">,</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Employee</span> e2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Employee</span><span class="token punctuation">(</span><span class="token number">1002</span><span class="token punctuation">,</span><span class="token string">&quot;Jerry&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Employee</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Employee</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>e1<span class="token punctuation">,</span>e2<span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">&gt;</span></span> stream1 <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span>arr1<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
    <span class="token comment">//创建 Stream方式三：通过Stream的of()，通过显示值创建一个流。它可以接收任意数量的参数</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> stream <span class="token operator">=</span> <span class="token class-name">Stream</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token comment">//创建 Stream方式四：创建无限流【用的少，了解下就行】</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

<span class="token comment">//      迭代</span>
<span class="token comment">//      public static&lt;T&gt; Stream&lt;T&gt; iterate(final T seed, final UnaryOperator&lt;T&gt; f)</span>
        <span class="token comment">//遍历前10个偶数</span>
        <span class="token class-name">Stream</span><span class="token punctuation">.</span><span class="token function">iterate</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> t <span class="token operator">-&gt;</span> t <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">limit</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">//      生成</span>
<span class="token comment">//      public static&lt;T&gt; Stream&lt;T&gt; generate(Supplier&lt;T&gt; s)</span>
        <span class="token class-name">Stream</span><span class="token punctuation">.</span><span class="token function">generate</span><span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token operator">::</span><span class="token function">random</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">limit</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="中间操作" tabindex="-1"><a class="header-anchor" href="#中间操作" aria-hidden="true">#</a> 中间操作</h2><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>
/**
 * 测试Stream的中间操作
 */
public class StreamAPITest1 {

    //1-筛选与切片
    @Test
    public void test1(){
        List&lt;Employee&gt; list = EmployeeData.getEmployees();
//        filter(Predicate p)——过滤   接收 Lambda ， 从流中排除某些元素。
        Stream&lt;Employee&gt; stream = list.stream();
        //练习：查询员工表中薪资大于7000的员工信息
        /**
         * List&lt;String&gt; filterStrs1 = filterString(list,s -&gt; s.contains(&quot;京&quot;));
         * 跟之前的这个lambda表达式代码是一个意思
         */
        stream.filter(e -&gt; e.getSalary() &gt; 7000).forEach(System.out::println);

        System.out.println();
//        limit(n)——截断流，使其元素不超过给定数量。
        list.stream().limit(3).forEach(System.out::println);
        System.out.println();

        /*
        skip(n) —— 跳过元素，返回一个扔掉了前 n 个元素的流。若流中元素不足 n 个，
        则返回一个空流。与 limit(n) 互补
        */
        list.stream().skip(3).forEach(System.out::println);

        System.out.println();
//        distinct()——筛选，通过流所生成元素的 hashCode() 和 equals() 去除重复元素

        list.add(new Employee(1010,&quot;刘强东&quot;,40,8000));
        list.add(new Employee(1010,&quot;刘强东&quot;,41,8000));
        list.add(new Employee(1010,&quot;刘强东&quot;,40,8000));
        list.add(new Employee(1010,&quot;刘强东&quot;,40,8000));
        list.add(new Employee(1010,&quot;刘强东&quot;,40,8000));

//        System.out.println(list);

        list.stream().distinct().forEach(System.out::println);
    }

    //映射
    @Test
    public void test2(){
        /*
        map(Function f)——接收一个函数作为参数，将元素转换成其他形式或提取信息，该函数会被应
        用到每个元素上，并将其映射成一个新的元素。
        */
        List&lt;String&gt; list = Arrays.asList(&quot;aa&quot;, &quot;bb&quot;, &quot;cc&quot;, &quot;dd&quot;);
        list.stream().map(str -&gt; str.toUpperCase()).forEach(System.out::println);

//        练习1：获取员工姓名长度大于3的员工的姓名。
        List&lt;Employee&gt; employees = EmployeeData.getEmployees();
        Stream&lt;String&gt; namesStream = employees.stream().map(Employee::getName);
        namesStream.filter(name -&gt; name.length() &gt; 3).forEach(System.out::println);
        System.out.println();
        //练习2：
        Stream&lt;Stream&lt;Character&gt;&gt; streamStream = list.stream().map(StreamAPITest1::fromStringToStream);
        //这个还需要两层遍历
        streamStream.forEach(s -&gt;{
            s.forEach(System.out::println);
        });
        System.out.println();
        /*
        flatMap(Function f)——接收一个函数作为参数，将流中的每个值都换成另一个流，然后把所有流连
        接成一个流。flatMap一层遍历即可拿到想要的结果
        */
        Stream&lt;Character&gt; characterStream = list.stream().flatMap(StreamAPITest1::fromStringToStream);
        characterStream.forEach(System.out::println);

    }

    //将字符串中的多个字符构成的集合转换为对应的Stream的实例
    public static Stream&lt;Character&gt; fromStringToStream(String str){//aa
        ArrayList&lt;Character&gt; list = new ArrayList&lt;&gt;();
        for(Character c : str.toCharArray()){
            list.add(c);
        }
       return list.stream();

    }


    //3-排序
    @Test
    public void test4(){
//        sorted()——自然排序
        List&lt;Integer&gt; list = Arrays.asList(12, 43, 65, 34, 87, 0, -98, 7);
        list.stream().sorted().forEach(System.out::println);
        //抛异常，原因:Employee没有实现Comparable接口
//        List&lt;Employee&gt; employees = EmployeeData.getEmployees();
//        employees.stream().sorted().forEach(System.out::println);


//        sorted(Comparator com)——定制排序

        List&lt;Employee&gt; employees = EmployeeData.getEmployees();
        employees.stream().sorted( (e1,e2) -&gt; {

           int ageValue = Integer.compare(e1.getAge(),e2.getAge());
           if(ageValue != 0){
               return ageValue;
           }else{
               return -Double.compare(e1.getSalary(),e2.getSalary());
           }

        }).forEach(System.out::println);
    }

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="终止操作" tabindex="-1"><a class="header-anchor" href="#终止操作" aria-hidden="true">#</a> 终止操作</h2><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>
/**
 * 测试Stream的终止操作
 *
 */
public class StreamAPITest2 {

    //1-匹配与查找
    @Test
    public void test1(){
        List&lt;Employee&gt; employees = EmployeeData.getEmployees();

//        allMatch(Predicate p)——检查是否匹配所有元素。
//          练习：是否所有的员工的年龄都大于18
        boolean allMatch = employees.stream().allMatch(e -&gt; e.getAge() &gt; 18);
        System.out.println(allMatch);

//        anyMatch(Predicate p)——检查是否至少匹配一个元素。
//         练习：是否存在员工的工资大于 10000
        boolean anyMatch = employees.stream().anyMatch(e -&gt; e.getSalary() &gt; 10000);
        System.out.println(anyMatch);

//        noneMatch(Predicate p)——检查是否没有匹配的元素。
//          练习：是否存在员工姓“雷”
        boolean noneMatch = employees.stream().noneMatch(e -&gt; e.getName().startsWith(&quot;雷&quot;));
        System.out.println(noneMatch);
//        findFirst——返回第一个元素
        Optional&lt;Employee&gt; employee = employees.stream().findFirst();
        System.out.println(employee);
//        findAny——返回当前流中的任意元素
        Optional&lt;Employee&gt; employee1 = employees.parallelStream().findAny();
        System.out.println(employee1);

    }

    @Test
    public void test2(){
        List&lt;Employee&gt; employees = EmployeeData.getEmployees();
        // count——返回流中元素的总个数
        long count = employees.stream().filter(e -&gt; e.getSalary() &gt; 5000).count();
        System.out.println(count);
//        max(Comparator c)——返回流中最大值
//        练习：返回最高的工资：
        Stream&lt;Double&gt; salaryStream = employees.stream().map(e -&gt; e.getSalary());
        Optional&lt;Double&gt; maxSalary = salaryStream.max(Double::compare);
        System.out.println(maxSalary);
//        min(Comparator c)——返回流中最小值
//        练习：返回最低工资的员工
        Optional&lt;Employee&gt; employee = employees.stream().min((e1, e2) -&gt; Double.compare(e1.getSalary(), e2.getSalary()));
        System.out.println(employee);
        System.out.println();
//        forEach(Consumer c)——内部迭代
        employees.stream().forEach(System.out::println);

        //使用集合的遍历操作
        employees.forEach(System.out::println);
    }

    //2-归约
    @Test
    public void test3(){
//        reduce(T identity, BinaryOperator)——可以将流中元素反复结合起来，得到一个值。返回 T
//        练习1：计算1-10的自然数的和
        List&lt;Integer&gt; list = Arrays.asList(1,2,3,4,5,6,7,8,9,10);
        Integer sum = list.stream().reduce(0, Integer::sum);
        System.out.println(sum);


//        reduce(BinaryOperator) ——可以将流中元素反复结合起来，得到一个值。返回 Optional&lt;T&gt;
//        练习2：计算公司所有员工工资的总和
        List&lt;Employee&gt; employees = EmployeeData.getEmployees();
        Stream&lt;Double&gt; salaryStream = employees.stream().map(Employee::getSalary);
//        Optional&lt;Double&gt; sumMoney = salaryStream.reduce(Double::sum);
        Optional&lt;Double&gt; sumMoney = salaryStream.reduce((d1,d2) -&gt; d1 + d2);
        System.out.println(sumMoney.get());

    }

    //3-收集
    @Test
    public void test4(){
// collect(Collector c)——将流转换为其他形式。接收一个 Collector接口的实现，用于给Stream中元素做汇总的方法
//        练习1：查找工资大于6000的员工，结果返回为一个List或Set

        List&lt;Employee&gt; employees = EmployeeData.getEmployees();
        List&lt;Employee&gt; employeeList = employees.stream().filter(e -&gt; e.getSalary() &gt; 6000).collect(Collectors.toList());

        employeeList.forEach(System.out::println);
        System.out.println();
        Set&lt;Employee&gt; employeeSet = employees.stream().filter(e -&gt; e.getSalary() &gt; 6000).collect(Collectors.toSet());

        employeeSet.forEach(System.out::println);




    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="optional类" tabindex="-1"><a class="header-anchor" href="#optional类" aria-hidden="true">#</a> Optional类</h1><h2 id="什么是optional" tabindex="-1"><a class="header-anchor" href="#什么是optional" aria-hidden="true">#</a> 什么是Optional？</h2><ul><li><p>到目前为止，臭名昭著的空指针异常是导致Java应用程序失败的最常见原因。以前，为了解决空指针异常，Google公司著名的Guava项目引入了Optional类，Guava通过使用检查空值的方式来防止代码污染，它鼓励程序员写更干净的代码。受到Google Guava的启发，Optional类已经成为Java 8类库的一部分。</p></li><li><p><code>Optional&lt;T&gt;</code> 类(java.util.Optional) 是一个容器类，它可以保存类型T的值，代表这个值存在。或者仅仅保存null，表示这个值不存在。原来用 null 表示一个值不存在，现在 Optional 可以更好的表达这个概念。并且可以避免空指针异常。</p></li><li><p>Optional类的Javadoc描述如下：这是一个可以为null的容器对象。如果值存在则isPresent()方法会返回true，调用get()方法会返回该对象。</p></li></ul><h2 id="常用api" tabindex="-1"><a class="header-anchor" href="#常用api" aria-hidden="true">#</a> 常用API</h2><p><img src="`+c+`" alt="Alt text"></p><h2 id="举例" tabindex="-1"><a class="header-anchor" href="#举例" aria-hidden="true">#</a> 举例</h2><p>首先准备两个类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Boy</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Girl</span> girl<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Boy{&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;girl=&quot;</span> <span class="token operator">+</span> girl <span class="token operator">+</span>
                <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Girl</span> <span class="token function">getGirl</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> girl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setGirl</span><span class="token punctuation">(</span><span class="token class-name">Girl</span> girl<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>girl <span class="token operator">=</span> girl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Boy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Boy</span><span class="token punctuation">(</span><span class="token class-name">Girl</span> girl<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">this</span><span class="token punctuation">.</span>girl <span class="token operator">=</span> girl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Girl</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Girl{&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;name=&#39;&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Girl</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Girl</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里只是简单的测试两个API</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>/**
 * Optional类：为了在程序中避免出现空指针异常而创建的。
 *
 * 常用的方法：ofNullable(T t)
 *            orElse(T t)
 *
 */
public class OptionalTest {

/*
Optional.of(T t) : 创建一个 Optional 实例，t必须非空；
Optional.empty() : 创建一个空的 Optional 实例
Optional.ofNullable(T t)：t可以为null

 */
    @Test
    public void test1(){
        Girl girl = new Girl();
//        girl = null;
        //of(T t):保证t是非空的
        Optional&lt;Girl&gt; optionalGirl = Optional.of(girl);

    }

    @Test
    public void test2(){
        Girl girl = new Girl();
//        girl = null;
        //ofNullable(T t)：t可以为null
        Optional&lt;Girl&gt; optionalGirl = Optional.ofNullable(girl);
        System.out.println(optionalGirl);
        //orElse(T t1):如果单前的Optional内部封装的t是非空的，则返回内部的t.
        //如果内部的t是空的，则返回orElse()方法中的参数t1.
        Girl girl1 = optionalGirl.orElse(new Girl(&quot;赵丽颖&quot;));
        System.out.println(girl1);

    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>实际场景使用</strong></p><p>可能出现空指针的例子：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getGirlName</span><span class="token punctuation">(</span><span class="token class-name">Boy</span> boy<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> boy<span class="token punctuation">.</span><span class="token function">getGirl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Boy</span> boy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        boy <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> girlName <span class="token operator">=</span> <span class="token function">getGirlName</span><span class="token punctuation">(</span>boy<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>girlName<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>java.lang.NullPointerException
	at com.atguigu.java4.OptionalTest.getGirlName(OptionalTest.java:47)
	at com.atguigu.java4.OptionalTest.test3(OptionalTest.java:54)
...
...

Process finished with exit code -1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>没有Optional的解决办法，但是如果调用层数过多，就得一层一层判断是否为null，写起来很麻烦。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>//优化以后的getGirlName():
    public String getGirlName1(Boy boy){
        if(boy != null){
            Girl girl = boy.getGirl();
            if(girl != null){
                return girl.getName();
            }
        }

        return null;

    }
@Test
    public void test4(){
        Boy boy = new Boy();
        boy = null;
        String girlName = getGirlName1(boy);
        System.out.println(girlName);

    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用Optional解决问题：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code> //使用Optional类的getGirlName():
    public String getGirlName2(Boy boy){

        Optional&lt;Boy&gt; boyOptional = Optional.ofNullable(boy);
        //此时的boy1一定非空
        Boy boy1 = boyOptional.orElse(new Boy(new Girl(&quot;迪丽热巴&quot;)));

        Girl girl = boy1.getGirl();

        Optional&lt;Girl&gt; girlOptional = Optional.ofNullable(girl);
        //girl1一定非空
        Girl girl1 = girlOptional.orElse(new Girl(&quot;古力娜扎&quot;));

        return girl1.getName();
    }

    @Test
    public void test5(){
        Boy boy = null;
        boy = new Boy();
        boy = new Boy(new Girl(&quot;苍老师&quot;));
        String girlName = getGirlName2(boy);
        System.out.println(girlName);

    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种是绝对不会出现空指针的。</p><h1 id="接口的增强" tabindex="-1"><a class="header-anchor" href="#接口的增强" aria-hidden="true">#</a> 接口的增强</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>JDK7及以前：只能定义全局常量和抽象方法
  &gt;全局常量：public static final的.但是书写时，可以省略不写
  &gt;抽象方法：public abstract的
  			
JDK8：除了定义全局常量和抽象方法之外，还可以定义静态方法、默认方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
 * JDK8：除了定义全局常量和抽象方法之外，还可以定义静态方法、默认方法
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">CompareA</span> <span class="token punctuation">{</span>

    <span class="token comment">//静态方法</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">method1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;CompareA:北京&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//默认方法</span>
    <span class="token keyword">public</span> <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">method2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;CompareA：上海&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//接口中的public 可以省略，自动就是public</span>
    <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">method3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;CompareA：上海&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SuperClass</span> <span class="token punctuation">{</span>
	
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;SuperClass:北京&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">CompareB</span> <span class="token punctuation">{</span>
	
	<span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">method3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;CompareB：上海&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SubClassTest</span> <span class="token punctuation">{</span>
	
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">SubClass</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SubClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
<span class="token comment">//		s.method1();</span>
<span class="token comment">//		SubClass.method1();</span>
		<span class="token comment">//知识点1：接口中定义的静态方法，只能通过接口来调用。实现类用不了</span>
		<span class="token class-name">CompareA</span><span class="token punctuation">.</span><span class="token function">method1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//知识点2：通过实现类的对象，可以调用接口中的默认方法。</span>
		<span class="token comment">//如果实现类重写了接口中的默认方法，调用时，仍然调用的是重写以后的方法</span>
		s<span class="token punctuation">.</span><span class="token function">method2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//知识点3：如果子类(或实现类)继承的父类和实现的接口中声明了同名同参数的默认方法，</span>
		<span class="token comment">//那么子类在没有重写此方法的情况下，默认调用的是父类中的同名同参数的方法。--&gt;类优先原则</span>
		<span class="token comment">//知识点4：如果实现类实现了多个接口，而这多个接口中定义了同名同参数的默认方法，</span>
		<span class="token comment">//那么在实现类没有重写此方法的情况下，报错。--&gt;接口冲突。</span>
		<span class="token comment">//这就需要我们必须在实现类中重写此方法</span>
		s<span class="token punctuation">.</span><span class="token function">method3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
	<span class="token punctuation">}</span>
	
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SubClass</span> <span class="token keyword">extends</span> <span class="token class-name">SuperClass</span> <span class="token keyword">implements</span> <span class="token class-name">CompareA</span><span class="token punctuation">,</span><span class="token class-name">CompareB</span><span class="token punctuation">{</span>
	
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;SubClass：上海&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;SubClass：深圳&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">//知识点5：如何在子类(或实现类)的方法中调用父类、接口中被重写的方法</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">myMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">method3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//调用自己定义的重写的方法</span>
		<span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">method3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//调用的是父类中声明的</span>
		<span class="token comment">//调用接口中的默认方法</span>
		<span class="token class-name">CompareA</span><span class="token punctuation">.</span><span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">method3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">CompareB</span><span class="token punctuation">.</span><span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">method3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="日期api【todo】" tabindex="-1"><a class="header-anchor" href="#日期api【todo】" aria-hidden="true">#</a> 日期API【TODO】</h1><h1 id="注解【todo】" tabindex="-1"><a class="header-anchor" href="#注解【todo】" aria-hidden="true">#</a> 注解【TODO】</h1>`,98),d=[u];function r(v,m){return s(),a("div",null,d)}const b=n(o,[["render",r],["__file","Java8xintexing.html.vue"]]);export{b as default};
