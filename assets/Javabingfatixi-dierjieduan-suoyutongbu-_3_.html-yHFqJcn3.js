import{_ as i,r as o,o as c,c as p,a as n,b as s,d as e,e as t}from"./app-GjP6hEVt.js";const l="/code-note-page1/assets/image-24-GjkXBIbv.png",r="/code-note-page1/assets/image-25-raybtQru.png",d="/code-note-page1/assets/image-26-d082AZ0e.png",u="/code-note-page1/assets/image-27-IaLbmx9C.png",v="/code-note-page1/assets/image-28-h46den3d.png",k="/code-note-page1/assets/image-29-i217xt2U.png",m="/code-note-page1/assets/image-30-zW89nE-f.png",b="/code-note-page1/assets/image-31-ZW4mlNN1.png",h="/code-note-page1/assets/image-32-nNtGEErn.png",g="/code-note-page1/assets/image-33-O7BLLCjv.png",f="/code-note-page1/assets/image-34-IkwuFGSM.png",y="/code-note-page1/assets/image-35-sU964Eku.png",_="/code-note-page1/assets/image-36-7f2C-ABG.png",w={},L=t(`<h1 id="synchronized保证三大特性" tabindex="-1"><a class="header-anchor" href="#synchronized保证三大特性" aria-hidden="true">#</a> synchronized保证三大特性</h1><p><strong>synchronized保证原子性的原理</strong></p><p>对num++;增加同步代码块后，保证同一时间只有一个线程操作num++;。就不会出现安全问题。</p><p><strong>synchronized保证可见性的原理</strong></p><p>synchronized保证可见性的原理，执行synchronized时，会对应lock原子操作会刷新工作内存中共享变 量的值。</p><p><strong>synchronized保证有序性的原理</strong></p><p>我们加synchronized后，依然会发生重排序，只不过我们有同步 代码块，可以保证只有一个线程执行同步代码中的代码。保证有序性。</p><h1 id="synchronized的特性" tabindex="-1"><a class="header-anchor" href="#synchronized的特性" aria-hidden="true">#</a> synchronized的特性</h1><h2 id="可重入特性" tabindex="-1"><a class="header-anchor" href="#可重入特性" aria-hidden="true">#</a> 可重入特性</h2><p>意思就是一个线程可以多次执行synchronized,重复获取同一把锁。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
    目标:演示synchronized可重入
        1.自定义一个线程类
        2.在线程类的run方法中使用嵌套的同步代码块
        3.使用两个线程来执行
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo01</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">new</span> <span class="token class-name">MyThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">new</span> <span class="token class-name">MyThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token class-name">MyThread</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">&quot;进入了同步代码块2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 1.自定义一个线程类</span>
<span class="token keyword">class</span> <span class="token class-name">MyThread</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token class-name">MyThread</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;进入了同步代码块1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">Demo01</span><span class="token punctuation">.</span><span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>可重入原理</strong></p><p>synchronized的锁对象中有一个计数器（recursions变量）会记录线程获得几次锁.。在执行完同步代码块时，计数器的数量会-1，直到计数器的数量为0，就释放这个锁。可重入的好处</p><ol><li>可以避免死锁</li><li>可以让我们更好的来封装代码</li></ol><h2 id="不可中断特性" tabindex="-1"><a class="header-anchor" href="#不可中断特性" aria-hidden="true">#</a> 不可中断特性</h2><p><strong>什么是不可中断</strong></p><p>一个线程获得锁后，另一个线程想要获得锁，必须处于阻塞或等待状态，如果第一个线程不释放锁，第 二个线程会一直阻塞或等待，不可被中断。</p><h3 id="synchronized不可中断演示" tabindex="-1"><a class="header-anchor" href="#synchronized不可中断演示" aria-hidden="true">#</a> synchronized不可中断演示</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Object</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
        <span class="token comment">// 1.定义一个Runnable</span>
        <span class="token class-name">Runnable</span> run <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token comment">// 2.在Runnable定义同步代码块</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">&quot;进入同步代码块&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 保证不退出同步代码块</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">888888</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token comment">// 3.先开启一个线程来执行同步代码块</span>
        <span class="token class-name">Thread</span> t1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>run<span class="token punctuation">)</span><span class="token punctuation">;</span>
        t1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 4.后开启一个线程来执行同步代码块(阻塞状态)</span>
        <span class="token class-name">Thread</span> t2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>run<span class="token punctuation">)</span><span class="token punctuation">;</span>
        t2<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 5.停止第二个线程</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;停止线程前&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        t2<span class="token punctuation">.</span><span class="token function">interrupt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;停止线程后&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>t1<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>t2<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出结果：</strong></p><blockquote><p>Thread-0进入同步代码块 停止线程前 停止线程后 TIMED_WAITING BLOCKED</p></blockquote><h3 id="reentrantlock可中断演示" tabindex="-1"><a class="header-anchor" href="#reentrantlock可中断演示" aria-hidden="true">#</a> ReentrantLock可中断演示</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Lock</span> lock <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReentrantLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
<span class="token comment">//        test01();</span>
        <span class="token function">test02</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 演示Lock可中断</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">test02</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
        <span class="token class-name">Runnable</span> run <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">boolean</span> b <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                b <span class="token operator">=</span> lock<span class="token punctuation">.</span><span class="token function">tryLock</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">&quot;获得锁,进入锁执行&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">88888</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">&quot;在指定时间没有得到锁做其他操作&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    lock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">&quot;释放锁&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token class-name">Thread</span> t1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>run<span class="token punctuation">)</span><span class="token punctuation">;</span>
        t1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Thread</span> t2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>run<span class="token punctuation">)</span><span class="token punctuation">;</span>
        t2<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;停止t2线程前&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        t2<span class="token punctuation">.</span><span class="token function">interrupt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;停止t2线程后&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">4000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>t1<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>t2<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 演示Lock不可中断</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
        <span class="token class-name">Runnable</span> run <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                lock<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">&quot;获得锁,进入锁执行&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">88888</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
                lock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">&quot;释放锁&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token class-name">Thread</span> t1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>run<span class="token punctuation">)</span><span class="token punctuation">;</span>
        t1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Thread</span> t2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>run<span class="token punctuation">)</span><span class="token punctuation">;</span>
        t2<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;停止t2线程前&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        t2<span class="token punctuation">.</span><span class="token function">interrupt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;停止t2线程后&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>t1<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>t2<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>控制台输出：</p><blockquote><p>Thread-0获得锁,进入锁执行 停止t2线程前 停止t2线程后 java.lang.InterruptedException</p><p>atjava.util.concurrent.locks.AbstractQueuedSynchronizer.tryAcquireNanos(AbstractQueuedSynchronizer.java:1245) at java.util.concurrent.locks.ReentrantLock.tryLock(ReentrantLock.java:442) at Test.lambda$test02$0(Test.java:24) at java.lang.Thread.run(Thread.java:748) TIMED_WAITING TERMINATED</p></blockquote><p>关于ReentranLock锁中断的原理，在AQS里讲。</p><h1 id="synchronized简单原理" tabindex="-1"><a class="header-anchor" href="#synchronized简单原理" aria-hidden="true">#</a> synchronized简单原理</h1><blockquote><p>我相信这个原理大部分人应该都知道，很多资料都讲过，我这里简单描述一下。</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SyncTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">syncBlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;hello block&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">syncMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;hello method&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用javap对其进行反汇编，部分信息如下</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">syncBlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    descriptor<span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token class-name">V</span>
    flags<span class="token operator">:</span> <span class="token constant">ACC_PUBLIC</span>
    <span class="token class-name">Code</span><span class="token operator">:</span>
      stack<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span> locals<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">,</span> args_size<span class="token operator">=</span><span class="token number">1</span>
         <span class="token number">0</span><span class="token operator">:</span> aload_0
         <span class="token number">1</span><span class="token operator">:</span> dup
         <span class="token number">2</span><span class="token operator">:</span> astore_1
         <span class="token number">3</span><span class="token operator">:</span> monitorenter				 	  <span class="token comment">// monitorenter指令进入同步块</span>
         <span class="token number">4</span><span class="token operator">:</span> getstatic     #<span class="token number">2</span>                  <span class="token comment">// Field java/lang/System.out:Ljava/io/PrintStream;</span>
         <span class="token number">7</span><span class="token operator">:</span> ldc           #<span class="token number">3</span>                  <span class="token comment">// String hello block</span>
         <span class="token number">9</span><span class="token operator">:</span> invokevirtual #<span class="token number">4</span>                  <span class="token comment">// Method java/io/PrintStream.println:(Ljava/lang/String;)V</span>
        <span class="token number">12</span><span class="token operator">:</span> aload_1
        <span class="token number">13</span><span class="token operator">:</span> monitorexit						  <span class="token comment">// monitorexit指令退出同步块</span>
        <span class="token number">14</span><span class="token operator">:</span> <span class="token keyword">goto</span>          <span class="token number">22</span>
        <span class="token number">17</span><span class="token operator">:</span> astore_2
        <span class="token number">18</span><span class="token operator">:</span> aload_1
        <span class="token number">19</span><span class="token operator">:</span> monitorexit						  <span class="token comment">// monitorexit指令退出同步块</span>
        <span class="token number">20</span><span class="token operator">:</span> aload_2
        <span class="token number">21</span><span class="token operator">:</span> athrow
        <span class="token number">22</span><span class="token operator">:</span> <span class="token keyword">return</span>
      <span class="token class-name">Exception</span> table<span class="token operator">:</span>
         from    <span class="token keyword">to</span>  <span class="token namespace">target</span> type
             <span class="token number">4</span>    <span class="token number">14</span>    <span class="token number">17</span>   any
            <span class="token number">17</span>    <span class="token number">20</span>    <span class="token number">17</span>   any
 

  <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">syncMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    descriptor<span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token class-name">V</span>
    flags<span class="token operator">:</span> <span class="token constant">ACC_PUBLIC</span><span class="token punctuation">,</span> <span class="token constant">ACC_SYNCHRONIZED</span>      <span class="token comment">//添加了ACC_SYNCHRONIZED标记</span>
    <span class="token class-name">Code</span><span class="token operator">:</span>
      stack<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span> locals<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> args_size<span class="token operator">=</span><span class="token number">1</span>
         <span class="token number">0</span><span class="token operator">:</span> getstatic     #<span class="token number">2</span>                  <span class="token comment">// Field java/lang/System.out:Ljava/io/PrintStream;</span>
         <span class="token number">3</span><span class="token operator">:</span> ldc           #<span class="token number">5</span>                  <span class="token comment">// String hello method</span>
         <span class="token number">5</span><span class="token operator">:</span> invokevirtual #<span class="token number">4</span>                  <span class="token comment">// Method java/io/PrintStream.println:(Ljava/lang/String;)V</span>
         <span class="token number">8</span><span class="token operator">:</span> <span class="token keyword">return</span>
 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="synchronized修饰代码块时" tabindex="-1"><a class="header-anchor" href="#synchronized修饰代码块时" aria-hidden="true">#</a> synchronized修饰代码块时</h2><h4 id="monitorenter" tabindex="-1"><a class="header-anchor" href="#monitorenter" aria-hidden="true">#</a> monitorenter</h4><p>首先我们来看一下JVM规范中对于monitorenter的描述： https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-6.html#jvms-6.5.monitorenter</p><blockquote><p>Each object is associated with a monitor. A monitor is locked if and only if it has an owner. The thread that executes monitorenter attempts to gain ownership of the monitor associated with objectref， as follows: • If the entry count of the monitor associated with objectref is zero， the thread enters the monitor and sets its entry count to one. The thread is then the owner of the monitor. • If the thread already owns the monitor associated with objectref， it reenters the monitor， incrementing its entry count. • If another thread already owns the monitor associated with objectref， the thread blocks until the monitor&#39;s entry count is zero， then tries again to gain ownership.</p></blockquote><p>翻译过来： 每一个对象都会和一个监视器monitor关联。监视器被占用时会被锁住，其他线程无法来获 取该monitor。 当JVM执行某个线程的某个方法内部的monitorenter时，它会尝试去获取当前对象对应 的monitor的所有权。其过程如下：</p><ol><li>若monior的进入数为0，线程可以进入monitor，并将monitor的进入数置为1。当前线程成为 monitor的owner（所有者）</li><li>若线程已拥有monitor的所有权，允许它重入monitor，则进入monitor的进入数加1</li><li>若其他线程已经占有monitor的所有权，那么当前尝试获取monitor的所有权的线程会被阻塞，直 到monitor的进入数变为0，才能重新尝试获取monitor的所有权。</li></ol><p>monitorenter小结: synchronized的锁对象会关联一个monitor,这个monitor不是我们主动创建的,是JVM的线程执行到这个 同步代码块,发现锁对象没有monitor就会创建monitor,monitor内部有两个重要的成员变量owner:拥有 这把锁的线程,recursions会记录线程拥有锁的次数,当一个线程拥有monitor后其他线程只能等待</p><h4 id="monitorexit" tabindex="-1"><a class="header-anchor" href="#monitorexit" aria-hidden="true">#</a> monitorexit</h4><p>首先我们来看一下JVM规范中对于monitorexit的描述： https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-6.html#jvms-6.5.monitorexit</p><blockquote><p>The thread that executes monitorexit must be the owner of the monitor associated with the instance referenced by objectref. The thread decrements the entry count of the monitor associated with objectref. If as a result the value of the entry count is zero， the thread exits the monitor and is no longer its owner. Other threads that are blocking to enter the monitor are allowed to attempt to do so.</p></blockquote><p>翻译过来：</p><p>1.能执行monitorexit指令的线程一定是拥有当前对象的monitor的所有权的线程。</p><ol><li>执行monitorexit时会将monitor的进入数减1。当monitor的进入数减为0时，当前线程退出 monitor，不再拥有monitor的所有权，此时其他被这个monitor阻塞的线程可以尝试去获取这个 monitor的所有权</li></ol><p>monitorexit释放锁。 monitorexit插入在方法结束处和异常处，JVM保证每个monitorenter必须有对应的monitorexit。</p><p><strong>总结</strong>：synchronized在修饰代码块时，是通过<code>monitorenter</code> 和 <code>monitorexit</code>来保证并发安全。</p><h2 id="synchronized-修饰方法的的情况" tabindex="-1"><a class="header-anchor" href="#synchronized-修饰方法的的情况" aria-hidden="true">#</a> synchronized 修饰方法的的情况</h2><p><code>synchronized</code> 修饰的方法并没有 <code>monitorenter</code> 指令和 <code>monitorexit</code> 指令，取得代之的确实是 <code>ACC_SYNCHRONIZED</code> 标识，该标识指明了该方法是一个同步方法。JVM 通过该 <code>ACC_SYNCHRONIZED</code> 访问标志来辨别一个方法是否声明为同步方法，从而执行相应的同步调用。</p><p><strong>不过两者的本质都是对对象监视器 monitor 的获取。</strong></p><h1 id="java对象的布局-c-代码层面" tabindex="-1"><a class="header-anchor" href="#java对象的布局-c-代码层面" aria-hidden="true">#</a> Java对象的布局（C++代码层面）</h1><blockquote><p>在学习synchronized最底层的C++源码级别前，我们需要先了解这个知识点，不然后面的可能看不懂</p></blockquote><p>术语参考: http://openjdk.java.net/groups/hotspot/docs/HotSpotGlossary.html 在JVM中，对象在内存中的布局分为三块区域：对象头、实例数据和对齐填充。如下图所示：</p><p><img src="`+l+'" alt="Alt text"></p><h2 id="对象头" tabindex="-1"><a class="header-anchor" href="#对象头" aria-hidden="true">#</a> 对象头</h2><p>当一个线程尝试访问synchronized修饰的代码块时，它首先要获得锁，那么这个锁到底存在哪里呢？是 存在锁对象的对象头中的。 HotSpot采用instanceOopDesc和arrayOopDesc来描述对象头，arrayOopDesc对象用来描述数组类型。instanceOopDesc的定义的在Hotspot源码的 instanceOop.hpp 文件中，另外，arrayOopDesc 的定义对应 arrayOop.hpp</p><p><img src="'+r+'" alt="Alt text"></p><p>从instanceOopDesc代码中可以看到 instanceOopDesc继承自oopDesc，oopDesc的定义载Hotspot 源码中的 oop.hpp 文件中。</p><p><img src="'+d+'" alt="Alt text"></p><ul><li><p>在普通实例对象中，oopDesc的定义包含两个成员，分别是 _mark 和 _metadata</p></li><li><p>_mark 表示对象标记、属于markOop类型，也就是接下来要讲解的Mark World，它记录了对象和锁有关的信息</p></li><li><p>_metadata 表示类元信息，类元信息存储的是对象指向它的类元数据(Klass)的首地址，其中Klass表示 普通指针、 _compressed_klass 表示压缩类指针。</p></li><li><p>对象头由两部分组成，一部分用于存储自身的运行时数据，称之为 Mark Word，另外一部分是类型指 针，及对象指向它的类元数据的指针。</p></li></ul><blockquote><p>关于Klass，Class这些JVM的东西，推荐去看《深入理解Java虚拟机：JVM高级特性与最佳实践（第3版）》。强调一点，是第三版。第三版相比第二版改了太多东西了，我看第二版的时候总感觉讲的不够深入缺点什么东西，不过第三版补齐了很多东西。</p></blockquote><h3 id="mark-word" tabindex="-1"><a class="header-anchor" href="#mark-word" aria-hidden="true">#</a> Mark Word</h3><p>Mark Word用于存储对象自身的运行时数据，如哈希码（HashCode）、GC分代年龄、锁状态标志、 线程持有的锁、偏向线程ID、偏向时间戳等等，占用内存大小与虚拟机位长一致。Mark Word对应的类 型是 markOop 。源码位于 markOop.hpp 中。</p><p><img src="'+u+'" alt="Alt text"></p><p><img src="'+v+'" alt="Alt text"></p><p>在64位虚拟机下，Mark Word是64bit大小的，其存储结构如下：</p><p><img src="'+k+'" alt="Alt text"></p><p>在32位虚拟机下，Mark Word是32bit大小的，其存储结构如下：</p><p><img src="'+m+'" alt="Alt text"></p><p>再加一个图对比一下，有一丁点的补充</p><p><img src="'+b+`" alt="Alt text"></p><h3 id="klass-pointer" tabindex="-1"><a class="header-anchor" href="#klass-pointer" aria-hidden="true">#</a> klass pointer</h3><p>这一部分用于存储对象的类型指针，该指针指向它的类元数据，JVM通过这个指针确定对象是哪个类的 实例。该指针的位长度为JVM的一个字大小，即32位的JVM为32位，64位的JVM为64位。 如果应用的对 象过多，使用64位的指针将浪费大量内存，统计而言，64位的JVM将会比32位的JVM多耗费50%的内 存。为了节约内存可以使用选项**-XX:+UseCompressedOops** 开启指针压缩，其中，oop即ordinary object pointer普通对象指针。开启该选项后，下列指针将压缩至32位：</p><ol><li>每个Class的属性指针（即静态变量）</li><li>每个对象的属性指针（即对象变量）</li><li>普通对象数组的每个元素指针</li></ol><p>当然，也不是所有的指针都会压缩，一些特殊类型的指针JVM不会优化，比如指向PermGen的Class对 象指针(JDK8中指向元空间的Class对象指针)、本地变量、堆栈元素、入参、返回值和NULL指针等。 对象头 = Mark Word + 类型指针（未开启指针压缩的情况下） 在32位系统中，Mark Word = 4 bytes，类型指针 = 4bytes，对象头 = 8 bytes = 64 bits； 在64位系统中，Mark Word = 8 bytes，类型指针 = 8bytes，对象头 = 16 bytes = 128bits；</p><h2 id="实例数据" tabindex="-1"><a class="header-anchor" href="#实例数据" aria-hidden="true">#</a> 实例数据</h2><p>就是类中定义的成员变量。</p><h2 id="对齐填充" tabindex="-1"><a class="header-anchor" href="#对齐填充" aria-hidden="true">#</a> 对齐填充</h2><p>对齐填充并不是必然存在的，也没有什么特别的意义，他仅仅起着占位符的作用，由于HotSpot VM的 自动内存管理系统要求对象起始地址必须是8字节的整数倍，换句话说，就是对象的大小必须是<strong>8字节的 整数倍</strong>。而对象头正好是8字节的倍数，因此，当对象实例数据部分没有对齐时，就需要通过对齐填充 来补全。</p><h2 id="查看java对象布局的方法" tabindex="-1"><a class="header-anchor" href="#查看java对象布局的方法" aria-hidden="true">#</a> 查看Java对象布局的方法</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token generics"><span class="token punctuation">&lt;</span>dependency<span class="token punctuation">&gt;</span></span>    
	<span class="token generics"><span class="token punctuation">&lt;</span>groupId<span class="token punctuation">&gt;</span></span>org<span class="token punctuation">.</span>openjdk<span class="token punctuation">.</span>jol<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">&gt;</span>    
	<span class="token generics"><span class="token punctuation">&lt;</span>artifactId<span class="token punctuation">&gt;</span></span>jol<span class="token operator">-</span>core<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">&gt;</span>    
	<span class="token generics"><span class="token punctuation">&lt;</span>version<span class="token punctuation">&gt;</span></span><span class="token number">0.9</span><span class="token operator">&lt;</span><span class="token operator">/</span>version<span class="token operator">&gt;</span> 
<span class="token operator">&lt;</span><span class="token operator">/</span>dependency<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="lock-record" tabindex="-1"><a class="header-anchor" href="#lock-record" aria-hidden="true">#</a> Lock Record</h1><p>字面意思就是锁记录。通过对Java对象头的介绍可以看到锁信息也是存在于对象的<code>mark word</code>中的。当对象状态为偏向锁（biasable）时，<code>mark word</code>存储的是偏向的线程ID；当状态为轻量级锁（lightweight locked）时，<code>mark word</code>存储的是指向线程栈中<code>Lock Record</code>的指针；当状态为重量级锁（inflated）时，为指向堆中的monitor对象的指针。</p><h2 id="lock-record的结构" tabindex="-1"><a class="header-anchor" href="#lock-record的结构" aria-hidden="true">#</a> Lock Record的结构</h2><p>线程在执行同步块之前，JVM会先在当前的线程的栈帧中创建一个<code>Lock Record</code>，其包括一个用于存储对象头中的 <code>mark word</code>（官方称之为<code>Displaced Mark Word</code>）以及一个指向对象的指针。下图右边的部分就是一个<code>Lock Record</code>。</p><p><img src="`+h+`" alt="Alt text"></p><h1 id="synchronized偏向锁原理-c-源码层面" tabindex="-1"><a class="header-anchor" href="#synchronized偏向锁原理-c-源码层面" aria-hidden="true">#</a> synchronized偏向锁原理（C++源码层面）</h1><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>1、偏向锁是JDK 6中的重要引进，因为HotSpot作者经过研究实践发现，在大多数情况下，锁不仅不存在多线程竞争，而且总是由同一线程多次获得，为了让线程获得锁的代价更低，引进了偏向锁。 偏向锁的“偏”，就是偏心的“偏”、偏袒的“偏”，它的意思是这个锁会偏向于第一个获得它的线程，会在对 象头存储锁偏向的线程ID，以后该线程进入和退出同步块时只需要检查是否为偏向锁、锁标志位以及 ThreadID即可。</p><h2 id="举例" tabindex="-1"><a class="header-anchor" href="#举例" aria-hidden="true">#</a> 举例</h2><p>Java是支持多线程的语言，因此在很多基础库中为了保证代码在多线程的情况下也能正常运行，也就是我们常说的线程安全，都会加入如<code>synchronized</code>这样的同步语义。但是在应用在实际运行时，很可能只有一个线程会调用相关同步方法。比如下面这个demo：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span><span class="token punctuation">{</span>
	<span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Demo</span> <span class="token class-name">Demo</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">50</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Demo</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;Demo---&gt;&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个demo中为了保证对list操纵时线程安全，对add方法加了<code>synchronized</code>的修饰，但实际使用时却只有一个线程调用到该方法。对于轻量级锁而言，每次调用add时，加锁解锁都有一个CAS操作；对于重量级锁而言，加锁也会有一个或多个CAS操作（这里的一个和多个 只是针对该demo，并不适用于所有场景）。</p><h2 id="对象的mark-word" tabindex="-1"><a class="header-anchor" href="#对象的mark-word" aria-hidden="true">#</a> 对象的Mark Word</h2><ul><li>偏向锁在Java 6之后是默认启用的，但在应用程序启动几秒钟之后才激活，可以使用-XX:BiasedLockingStartupDelay=0 参数关闭延迟，如果确定应用程序中所有锁通常情况下处于竞争 状态，可以通过 XX:-UseBiasedLocking=false 参数关闭偏向锁。</li><li>当JVM启用了偏向锁模式（1.6以上默认开启），当新创建一个对象的时候，如果该对象所属的class没有关闭偏向锁模式（什么时候会关闭一个class的偏向模式下文会说，默认所有class的偏向模式都是是开启的），那新创建对象的<code>mark word</code>将是可偏向状态，此时<code>mark word中</code>的thread id（参见上文偏向状态下的<code>mark word</code>格式）为0，表示未偏向任何线程，也叫做匿名偏向(anonymously biased)。</li></ul><h2 id="加锁过程" tabindex="-1"><a class="header-anchor" href="#加锁过程" aria-hidden="true">#</a> 加锁过程</h2><blockquote><p>偏向锁加锁的C++代码过于复杂，这里只是用文字描述了几种情况。正常面试的时候，也不会让你说C++代码执行过程。</p></blockquote><p>加锁过程分为几种情况（case），注意下面的不是顺序，只是加锁的几种情况。</p><p>case 1：当该对象第一次被线程获得锁的时候，发现是匿名偏向状态，则会用CAS指令，将<code>mark word</code>中的thread id由0改成当前线程Id。如果成功，则代表获得了偏向锁，继续执行同步块中的代码。否则，将偏向锁撤销，升级为轻量级锁。</p><p>case 2：当被偏向的线程再次进入同步块时，发现锁对象偏向的就是当前线程，在通过一些额外的检查后，会往当前线程的栈中添加一条<code>Displaced Mark Word</code>为空的<code>Lock Record</code>中，然后继续执行同步块的代码，因为操纵的是线程私有的栈，因此不需要用到CAS指令；由此可见偏向锁模式下，当被偏向的线程再次尝试获得锁时，仅仅进行几个简单的操作就可以了，在这种情况下，<code>synchronized</code>关键字带来的性能开销基本可以忽略。</p><p>case 3：当其他线程进入同步块时，发现已经有偏向的线程了，则会进入到<strong>撤销偏向锁</strong>的逻辑里，一般来说，会在<code>safepoint</code>中去查看偏向的线程是否还存活，如果存活且还在同步块中则将锁升级为轻量级锁，原偏向的线程继续拥有锁，当前线程则走入到锁升级的逻辑里；如果偏向的线程已经不存活或者不在同步块中，则将对象头的<code>mark word</code>改为无锁状态（unlocked），之后再升级为轻量级锁。</p><h2 id="解锁过程" tabindex="-1"><a class="header-anchor" href="#解锁过程" aria-hidden="true">#</a> 解锁过程</h2><p>当有其他线程尝试获得锁时，是根据遍历偏向线程的<code>lock record</code>来确定该线程是否还在执行同步块中的代码。因此偏向锁的解锁很简单，仅仅将栈中的<strong>最近一条</strong><code>lock record</code>的<code>obj</code>字段设置为null。偏向锁的解锁步骤中<strong>并不会修改对象头中的thread id。</strong></p><h2 id="偏向锁升级时机" tabindex="-1"><a class="header-anchor" href="#偏向锁升级时机" aria-hidden="true">#</a> 偏向锁升级时机</h2><p>一般来说（批量重偏向除外），偏向锁升级的时机为：当锁已经发生偏向后，只要有另一个线程尝试获得偏向锁，则该偏向锁就会升级成轻量级锁。</p><h2 id="偏向锁撤销过程" tabindex="-1"><a class="header-anchor" href="#偏向锁撤销过程" aria-hidden="true">#</a> 偏向锁撤销过程</h2><p>这里说的撤销是指在获取偏向锁的过程因为不满足条件导致要将锁对象改为非偏向锁状态；释放是指退出同步块时的过程。</p><blockquote><p>撤销逻辑有很多，我们只分析最常见的情况：假设锁已经偏向线程A，这时B线程尝试获得锁。</p></blockquote><ol><li>查看偏向的线程是否存活，如果已经不存活了，则直接撤销偏向锁。JVM维护了一个集合存放所有存活的线程，通过遍历该集合判断某个线程是否存活。</li><li>偏向的线程是否还在同步块中，如果不在了，则撤销偏向锁。我们回顾一下偏向锁的加锁流程：每次进入同步块（即执行<code>monitorenter</code>）的时候都会以从高往低的顺序在栈中找到第一个可用的<code>Lock Record</code>，将其obj字段指向锁对象。每次解锁（即执行<code>monitorexit</code>）的时候都会将最低的一个相关<code>Lock Record</code>移除掉。所以可以通过遍历线程栈中的<code>Lock Record</code>来判断线程是否还在同步块中。</li><li>将偏向线程所有相关<code>Lock Record</code>的<code>Displaced Mark Word</code>设置为null，然后将最高位的<code>Lock Record</code>的<code>Displaced Mark Word</code> 设置为无锁状态，最高位的<code>Lock Record</code>也就是第一次获得锁时的<code>Lock Record</code>（这里的第一次是指重入获取锁时的第一次），然后将对象头指向最高位的<code>Lock Record</code>，这里不需要用CAS指令，因为是在<code>safepoint</code>。 执行完后，就升级成了轻量级锁。原偏向线程的所有Lock Record都已经变成轻量级锁的状态。【轻量级锁加锁过程会在下文讲到，不要慌】</li></ol><p>触发时机： 释放：对应的就是synchronized方法的退出或synchronized块的结束。 撤销：笼统的说就是多个线程竞争导致不能再使用偏向模式的时候。</p><h1 id="synchronized轻量级锁原理-c-源码层面" tabindex="-1"><a class="header-anchor" href="#synchronized轻量级锁原理-c-源码层面" aria-hidden="true">#</a> synchronized轻量级锁原理（C++源码层面）</h1><h2 id="加锁过程-1" tabindex="-1"><a class="header-anchor" href="#加锁过程-1" aria-hidden="true">#</a> 加锁过程</h2><p>1.在线程栈中创建一个<code>Lock Record</code>，将其<code>obj</code>（即Object reference）字段指向锁对象。</p><p>2.会把锁的Mark Word复制到自己的Lock Record的Displaced Mark Word里面。然后线程尝试直接通过CAS指令将<code>Lock Record</code>的地址存储在对象头的<code>mark word</code>中，如果对象处于无锁状态则修改成功，代表该线程获得了轻量级锁。如果失败，进入到步骤3。</p><p>3.如果是当前线程已经持有该锁了，代表这是一次锁重入。设置<code>Lock Record</code>第一部分（<code>Displaced Mark Word</code>）为null，起到了一个重入计数器的作用。然后结束。</p><p>4.如果都失败，表示Mark Word已经被替换成了其他线程的锁记录，说明在与其它线程竞争锁，需要膨胀为重量级锁。【这就是轻量级锁升级为重量级锁的时机】</p><h2 id="解锁过程-1" tabindex="-1"><a class="header-anchor" href="#解锁过程-1" aria-hidden="true">#</a> 解锁过程</h2><p>1.遍历线程栈,找到所有<code>obj</code>字段等于当前锁对象的<code>Lock Record</code>。</p><p>2.如果<code>Lock Record</code>的<code>Displaced Mark Word</code>为null，代表这是一次重入，将<code>obj</code>设置为null后continue。</p><p>3.如果<code>Lock Record</code>的<code>Displaced Mark Word</code>不为null，则利用CAS指令将对象头的<code>mark word</code>恢复成为<code>Displaced Mark Word</code>。如果成功，则continue，否则膨胀为重量级锁。</p><h2 id="轻量级锁重入示例图" tabindex="-1"><a class="header-anchor" href="#轻量级锁重入示例图" aria-hidden="true">#</a> 轻量级锁重入示例图</h2><p>我们看个demo，在该demo中重复3次获得锁。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">synchronized</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">synchronized</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">{</span>
    	<span class="token keyword">synchronized</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">{</span>
    	<span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+g+'" alt="Alt text"></p><h2 id="轻量级锁什么时候升级为重量级锁" tabindex="-1"><a class="header-anchor" href="#轻量级锁什么时候升级为重量级锁" aria-hidden="true">#</a> 轻量级锁什么时候升级为重量级锁？</h2><blockquote><p>其实在加锁的时候已经说过了，这里再以一个具体场景说下</p></blockquote><ul><li><p>线程1获取轻量级锁时会把锁的Mark Word复制到自己的Lock Record的Displaced Mark Word里面。然后线程尝试直接通过CAS指令将<code>Lock Record</code>的地址存储在对象头的<code>mark word</code>中</p></li><li><p>如果在线程1复制对象头的同时（在线程1CAS之前），线程2也准备获取锁，复制了对象头到线程2的锁记录空间中，但是在线程2在CAS的时候，发现线程1已经把对象头换了，<strong>线程2的CAS失败</strong>。那么此时就代表发生了锁竞争，准备升级为重量级锁</p></li></ul><h2 id="轻量级锁cas的问题" tabindex="-1"><a class="header-anchor" href="#轻量级锁cas的问题" aria-hidden="true">#</a> 轻量级锁CAS的问题</h2><p>1、<strong>结论：<strong>没有自旋这回事，只有重量级锁获取失败才会自旋，网上的文章好多都是错的，我个人认为轻量级锁的意义就是在没有线程争用锁时不用创建monitor。</strong>【源码得到的结论，实践才是硬道理】</strong></p><p>2、<strong>轻量级锁和偏向锁区别：<strong>只要存在竞争就会升级重量级。<strong>轻量级锁的存在就是用于线程之间交替获取锁的场景</strong>，但是和偏向锁是有区别的啊。一个线程获取偏向锁之后，那么这个锁自然而然就属于这个线程（就算该线程释放了偏向锁也不会改变这把锁偏向这个线程的【也就是之前说的不会修改Thread ID】，这个前提是没有发生过批量重偏向使锁的epoch与其对应class类的epoch不相等）。所以说偏向锁的场景是用于一个线程不断的获取锁，如果把它放在轻量级锁的场景下线程之间交替获取的话会发生偏向锁的撤销的。也就是说在偏向锁的情况下，线程1之前释放了锁，线程2再获取锁，即使此时没有</strong>同时锁竞争</strong>的情况，依然是要升级为轻量级锁的。而轻量级锁只要没有同时去获取锁，就可以不升级为重量级锁，也就代表你可以不同线程交替获取这个锁。 3、效率上来看偏向锁只有在获取的时候进行一次CAS，以后的释放和获取只需要简单的一些判断操作。而轻量级锁的获取和释放都要都要CAS，单纯的看效率还是偏向锁效率高。</p><h1 id="synchronized重量级锁原理-c-源码层面" tabindex="-1"><a class="header-anchor" href="#synchronized重量级锁原理-c-源码层面" aria-hidden="true">#</a> synchronized重量级锁原理（C++源码层面）</h1><blockquote><p>重量级锁面试可能问的多，就多写了点C++代码</p></blockquote><p>当出现多个线程<strong>同时竞争</strong>锁时，如果不是<strong>同时竞争</strong>，轻量级锁依然可以实现线程交替运行。</p><h2 id="monitor监视器锁" tabindex="-1"><a class="header-anchor" href="#monitor监视器锁" aria-hidden="true">#</a> Monitor监视器锁</h2><ul><li><p>重量级锁通过对象的监视器（monitor）实现，其中monitor的本质是依赖于底层操作系统的互斥量（mutex） 实现的实现，操作系统实现线程之间的切换需要从用户态到内核态的切换，切换成本非常高。这也是为什么重量级锁效率不高的原因。</p></li><li><p>重量级锁的状态下，对象的<code>mark word</code>为指向一个堆中monitor对象的指针。一个monitor对象包括这么几个关键字段：cxq（下图中的ContentionList），EntryList ，WaitSet，owner。其中cxq ，EntryList ，WaitSet都是由ObjectWaiter的链表结构，owner指向持有锁的线程。</p></li></ul><p><img src="'+f+`" alt="Alt text"></p><p>在HotSpot虚拟机中，monitor是由ObjectMonitor实现的。其源码是用c++来实现的，位于HotSpot虚 拟机源码ObjectMonitor.hpp文件中(src/share/vm/runtime/objectMonitor.hpp)。ObjectMonitor主 要数据结构如下：</p><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>ObjectMonitor() {    
	_header       = NULL;    
	_count        = 0;   
    _waiters      = 0，    
    _recursions   = 0;  // 线程的重入次数
    _object       = NULL; // 存储该monitor的对象    
    _owner        = NULL; // 标识拥有该monitor的线程    
    _WaitSet      = NULL; // 处于wait状态的线程，会被加入到_WaitSet    
    _WaitSetLock  = 0 ;    
    _Responsible  = NULL;    
    _succ         = NULL;    
    _cxq          = NULL; // 多线程竞争锁时的单向列表    
    FreeNext      = NULL;    
    _EntryList    = NULL; // 处于等待锁block状态的线程，会被加入到该列表   
    _SpinFreq     = 0;   
    _SpinClock    = 0;    
    OwnerIsThread = 0; 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Contention List：所有请求锁的线程将被首先放置到该竞争队列 Entry List：Contention List中那些有资格成为候选人的线程被移到Entry List Wait Set：那些调用wait方法被阻塞的线程被放置到Wait Set OnDeck：任何时刻最多只能有一个线程正在竞争锁，该线程称为OnDeck Owner：获得锁的线程称为Owner !Owner：释放锁的线程</p></blockquote><p>1、当一个线程尝试获得锁时，如果该锁已经被占用，则会将该线程封装成一个<code>ObjectWaiter</code>对象插入到Contention List的队列的队首，然后调用<code>park</code>函数挂起当前线程。</p><p>2、当线程释放锁时，会从Contention List或EntryList中挑选一个线程唤醒，被选中的线程叫做<code>Heir presumptive</code>即假定继承人，假定继承人【Ready线程】被唤醒后会尝试获得锁，但<code>synchronized</code>是非公平的，所以假定继承人不一定能获得锁。这是因为对于重量级锁，线程先自旋尝试获得锁，这样做的目的是为了减少执行操作系统同步操作带来的开销。如果自旋不成功再进入等待队列。这对那些已经在等待队列中的线程来说，稍微显得不公平。</p><p>3、如果线程获得锁后调用<code>Object.wait</code>方法，则会将线程加入到WaitSet中，当被<code>Object.notify</code>唤醒后，会将线程从WaitSet移动到Contention List或EntryList中去。需要注意的是，当调用一个锁对象的<code>wait</code>或<code>notify</code>方法时，<strong>如当前锁的状态是偏向锁或轻量级锁则会先膨胀成重量级锁</strong>。</p><p>4、**关于Contention List（cxq）和EntryList的区别：**cxq是单向链表，指的是如果已经有t1线程获取到monitor对象拿到锁后，t2和t3没有竞争到，t2、t3线程会进行到cxq队列，先自己尝试竞争锁，如果竞争不到则自旋再去挣扎一下获取锁，当t1执行完同步代码块，释放锁后，由t1、t2、t3再去争抢锁，如果t1再次抢到锁，那么t2、t3会进行到EntryList阻塞队列，如果此时又有t4、t5线程过来会被放到cxq队列，t2,t3,t4,t5，通过自旋尝试获取锁，如果还是没有获取到锁，则通过park将当 前线程挂起，等待被唤醒。如果t1被释放， 根据不同的策略（由QMode指定），从cxq或EntryList中获取头节点，通过 ObjectMonitor::ExitEpilog 方法唤醒该节点封装的线程，唤醒操作终由unpark完成，被唤醒的线程，继续执行monitor 的竞争。当获取锁的线程释放后，EntryList中的线程和WaitSet中的线程被唤醒都可能去获取锁变成owner的拥有者。</p><ul><li><p>每一个Java对象都可以与一个监视器monitor关联，我们可以把它理解成为一把锁，当一个线程想要执行一段被synchronized圈起来的同步方法或者代码块时，该线程得先获取到synchronized修饰的对象 对应的monitor。 我们的Java代码里不会显示地去创造这么一个monitor对象，我们也无需创建，事实上可以这么理解： monitor并不是随着对象创建而创建的。我们是通过synchronized修饰符告诉JVM需要为我们的某个对 象创建关联的monitor对象。每个线程都存在两个ObjectMonitor对象列表，分别为free和used列表。 同时JVM中也维护着global locklist。当线程需要ObjectMonitor对象时，首先从线程自身的free表中申请，若存在则使用，若不存在则从global list中分配一批<code>monitor</code>到free中。</p></li><li><p>free对应C++代码：omFreeList</p></li><li><p>global locklist对应C++代码：gFreeList</p></li></ul><h2 id="monitor竞争" tabindex="-1"><a class="header-anchor" href="#monitor竞争" aria-hidden="true">#</a> monitor竞争</h2><p>1、执行monitorenter时，会调用InterpreterRuntime.cpp (位于：src/share/vm/interpreter/interpreterRuntime.cpp) 的 InterpreterRuntime::monitorenter函 数。具体代码可参见HotSpot源码。</p><p><img src="`+y+`" alt="Alt text"></p><p>2、对于重量级锁，monitorenter函数中会调用 ObjectSynchronizer::slow_enter 3.终调用 ObjectMonitor::enter（位于：src/share/vm/runtime/objectMonitor.cpp），源码如下：</p><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>void ATTR ObjectMonitor::enter(TRAPS) {
   
  Thread * const Self = THREAD ;
  void * cur ;
  // owner为null代表无锁状态，如果能CAS设置成功，则当前线程直接获得锁
  cur = Atomic::cmpxchg_ptr (Self, &amp;_owner, NULL) ;
  if (cur == NULL) {
     ...
     return ;
  }
  // 如果是重入的情况，_recursions++
  if (cur == Self) {
     // TODO-FIXME: check for integer overflow!  BUGID 6557169.
     _recursions ++ ;
     return ;
  }
  /* 
  1、当前线程是之前持有轻量级锁的线程。由轻量级锁膨胀且第一次调用enter方法，那cur是指向Lock Record的指针。
  */
  if (Self-&gt;is_lock_owned ((address)cur)) {
    assert (_recursions == 0, &quot;internal state error&quot;);
    // 重入计数重置为1
    _recursions = 1 ;
    // 设置owner字段为当前线程（之前owner是指向Lock Record的指针）
    _owner = Self ;
    OwnerIsThread = 1 ;
    return ;
  }

  ...

  // 在调用系统的同步操作之前，先尝试自旋获得锁
  if (Knob_SpinEarly &amp;&amp; TrySpin (Self) &gt; 0) {
     ...
     //自旋的过程中获得了锁，则直接返回
     Self-&gt;_Stalled = 0 ;
     return ;
  }

  ...

  { 
    ...

    for (;;) {
      jt-&gt;set_suspend_equivalent();
      // 在该方法中调用系统同步操作。也就是获得锁或阻塞
      EnterI (THREAD) ;
      ...
    }
    Self-&gt;set_current_pending_monitor(NULL);
    
  }

  ...

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="monitor等待或获取锁" tabindex="-1"><a class="header-anchor" href="#monitor等待或获取锁" aria-hidden="true">#</a> Monitor等待或获取锁</h2><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>void ATTR ObjectMonitor::EnterI (TRAPS) {
    Thread * Self = THREAD ;
    ...
    // 尝试获得锁
    if (TryLock (Self) &gt; 0) {
        ...
        return ;
    }

    DeferredInitialize () ;
 
	// 自旋
    if (TrySpin (Self) &gt; 0) {
        ...
        return ;
    }
    
    ...
	
    // 当前线程被封装成ObjectWaiter对象node
    ObjectWaiter node(Self) ;
    Self-&gt;_ParkEvent-&gt;reset() ;
    node._prev   = (ObjectWaiter *) 0xBAD ;
    node.TState  = ObjectWaiter::TS_CXQ ;

    // 通过CAS将node节点插入到_cxq队列的头部，cxq是一个单向链表
    ObjectWaiter * nxt ;
    for (;;) {
        node._next = nxt = _cxq ;
        if (Atomic::cmpxchg_ptr (&amp;node, &amp;_cxq, nxt) == nxt) break ;

        // CAS失败的话 再尝试获得锁，这样可以降低插入到_cxq队列的频率
        if (TryLock (Self) &gt; 0) {
            ...
            return ;
        }
    }

	// SyncFlags默认为0，如果没有其他等待的线程，则将_Responsible设置为自己
    if ((SyncFlags &amp; 16) == 0 &amp;&amp; nxt == NULL &amp;&amp; _EntryList == NULL) {
        Atomic::cmpxchg_ptr (Self, &amp;_Responsible, NULL) ;
    }


    TEVENT (Inflated enter - Contention) ;
    int nWakeups = 0 ;
    int RecheckInterval = 1 ;

    for (;;) {
		//线程在被挂起前再做一下挣扎，看能不能获取到锁
        if (TryLock (Self) &gt; 0) break ;
        assert (_owner != Self, &quot;invariant&quot;) ;

        ...

        // park self
        if (_Responsible == Self || (SyncFlags &amp; 1)) {
            // 当前线程是_Responsible时，调用的是带时间参数的park
            TEVENT (Inflated enter - park TIMED) ;
            Self-&gt;_ParkEvent-&gt;park ((jlong) RecheckInterval) ;
            // Increase the RecheckInterval, but clamp the value.
            RecheckInterval *= 8 ;
            if (RecheckInterval &gt; 1000) RecheckInterval = 1000 ;
        } else {
            //否则直接调用park挂起当前线程
            TEVENT (Inflated enter - park UNTIMED) ;
            Self-&gt;_ParkEvent-&gt;park() ;
        }

        if (TryLock(Self) &gt; 0) break ;

        ...
        
        if ((Knob_SpinAfterFutile &amp; 1) &amp;&amp; TrySpin (Self) &gt; 0) break ;

       	...
        // 在释放锁时，_succ会被设置为EntryList或_cxq中的一个线程
        if (_succ == Self) _succ = NULL ;

        // Invariant: after clearing _succ a thread *must* retry _owner before parking.
        OrderAccess::fence() ;
    }

   // 走到这里说明已经获得锁了

    assert (_owner == Self      , &quot;invariant&quot;) ;
    assert (object() != NULL    , &quot;invariant&quot;) ;
  
	// 将当前线程的node从cxq或EntryList中移除
    UnlinkAfterAcquire (Self, &amp;node) ;
    if (_succ == Self) _succ = NULL ;
	if (_Responsible == Self) {
        _Responsible = NULL ;
        OrderAccess::fence();
    }
    ...
    return ;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当该线程被唤醒时，会从挂起的点继续执行，通过 ObjectMonitor::TryLock 尝试获取锁，TryLock方 法实现如下：</p><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>int ObjectMonitor::TryLock (Thread * Self) {
	for (;;) {
		void * own = _owner ;
		if (own != NULL) return 0 ;
		if (Atomic::cmpxchg_ptr (Self， &amp;_owner， NULL) == NULL) {
			// Either guarantee _recursions == 0 or set _recursions = 0.		
			assert (_recursions == 0， &quot;invariant&quot;) ;
			assert (_owner == Self， &quot;invariant&quot;) ;
			// CONSIDER: set or assert that OwnerIsThread == 1
			return 1 ;
		}
		// The lock had been free momentarily， but we lost the race to the lock.
		// Interference -- the CAS failed.
		// We can either return -1 or retry.
		// Retry doesn&#39;t make as much sense because the lock was just acquired.
		if (true) return -1 ;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上代码的具体流程概括如下：</p><ol><li>当前线程被封装成ObjectWaiter对象node，状态设置成ObjectWaiter::TS_CXQ。</li><li>在for循环中，通过CAS把node节点push到_cxq列表中，同一时刻可能有多个线程把自己的node 节点push到_cxq列表中。</li><li>node节点push到_cxq列表之后，通过自旋尝试获取锁，如果还是没有获取到锁，则通过park将当 前线程挂起，等待被唤醒。</li><li>当该线程被唤醒时，会从挂起的点继续执行，通过 ObjectMonitor::TryLock 尝试获取锁。</li></ol><h2 id="monitor释放" tabindex="-1"><a class="header-anchor" href="#monitor释放" aria-hidden="true">#</a> monitor释放</h2><p>当某个持有锁的线程执行完同步代码块时，会进行锁的释放，给其它线程机会执行同步代码，在 HotSpot中，通过退出monitor的方式实现锁的释放，并通知被阻塞的线程，具体实现位于 ObjectMonitor的exit方法中。（位于：src/share/vm/runtime/objectMonitor.cpp），源码如下所 示：</p><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>void ATTR ObjectMonitor::exit(bool not_suspended, TRAPS) {
   Thread * Self = THREAD ;
   // 如果_owner不是当前线程
   if (THREAD != _owner) {
     // 当前线程是之前持有轻量级锁的线程。由轻量级锁膨胀后还没调用过enter方法，_owner会是指向Lock Record的指针。
     if (THREAD-&gt;is_lock_owned((address) _owner)) {
       assert (_recursions == 0, &quot;invariant&quot;) ;
       _owner = THREAD ;
       _recursions = 0 ;
       OwnerIsThread = 1 ;
     } else {
       // 异常情况:当前不是持有锁的线程
       TEVENT (Exit - Throw IMSX) ;
       assert(false, &quot;Non-balanced monitor enter/exit!&quot;);
       if (false) {
          THROW(vmSymbols::java_lang_IllegalMonitorStateException());
       }
       return;
     }
   }
   // 重入计数器还不为0，则计数器-1后返回
   if (_recursions != 0) {
     _recursions--;        // this is simple recursive enter
     TEVENT (Inflated exit - recursive) ;
     return ;
   }

   // _Responsible设置为null
   if ((SyncFlags &amp; 4) == 0) {
      _Responsible = NULL ;
   }

   ...

   for (;;) {
      assert (THREAD == _owner, &quot;invariant&quot;) ;

      // Knob_ExitPolicy默认为0
      if (Knob_ExitPolicy == 0) {
         // code 1：先释放锁，这时如果有其他线程进入同步块则能获得锁
         OrderAccess::release_store_ptr (&amp;_owner, NULL) ;   // drop the lock
         OrderAccess::storeload() ;                         // See if we need to wake a successor
         // code 2：如果没有等待的线程或已经有假定继承人
         if ((intptr_t(_EntryList)|intptr_t(_cxq)) == 0 || _succ != NULL) {
            TEVENT (Inflated exit - simple egress) ;
            return ;
         }
         TEVENT (Inflated exit - complex egress) ;

         // code 3：要执行之后的操作需要重新获得锁，即设置_owner为当前线程
         if (Atomic::cmpxchg_ptr (THREAD, &amp;_owner, NULL) != NULL) {
            return ;
         }
         TEVENT (Exit - Reacquired) ;
      } 
      ...

      ObjectWaiter * w = NULL ;
      // code 4：根据QMode的不同会有不同的唤醒策略，默认为0
      int QMode = Knob_QMode ;
	  // QMode == 2 : cxq中的线程有更高优先级，直接绕过EntryList队列，唤醒cxq的队首线程
      if (QMode == 2 &amp;&amp; _cxq != NULL) {
         
          w = _cxq ;
          assert (w != NULL, &quot;invariant&quot;) ;
          assert (w-&gt;TState == ObjectWaiter::TS_CXQ, &quot;Invariant&quot;) ;
          ExitEpilog (Self, w) ;
          return ;
      }
	 // QMode == 3 将cxq中的元素插入到EntryList的末尾
      if (QMode == 3 &amp;&amp; _cxq != NULL) {
          
          w = _cxq ;
          for (;;) {
             assert (w != NULL, &quot;Invariant&quot;) ;
             ObjectWaiter * u = (ObjectWaiter *) Atomic::cmpxchg_ptr (NULL, &amp;_cxq, w) ;
             if (u == w) break ;
             w = u ;
          }
          assert (w != NULL              , &quot;invariant&quot;) ;

          ObjectWaiter * q = NULL ;
          ObjectWaiter * p ;
          for (p = w ; p != NULL ; p = p-&gt;_next) {
              guarantee (p-&gt;TState == ObjectWaiter::TS_CXQ, &quot;Invariant&quot;) ;
              p-&gt;TState = ObjectWaiter::TS_ENTER ;
              p-&gt;_prev = q ;
              q = p ;
          }

          // Append the RATs to the EntryList
          // TODO: organize EntryList as a CDLL so we can locate the tail in constant-time.
          ObjectWaiter * Tail ;
          for (Tail = _EntryList ; Tail != NULL &amp;&amp; Tail-&gt;_next != NULL ; Tail = Tail-&gt;_next) ;
          if (Tail == NULL) {
              _EntryList = w ;
          } else {
              Tail-&gt;_next = w ;
              w-&gt;_prev = Tail ;
          }

          // Fall thru into code that tries to wake a successor from EntryList
      }
	  // QMode == 4，将cxq插入到EntryList的队首
      if (QMode == 4 &amp;&amp; _cxq != NULL) {
          
          w = _cxq ;
          for (;;) {
             assert (w != NULL, &quot;Invariant&quot;) ;
             ObjectWaiter * u = (ObjectWaiter *) Atomic::cmpxchg_ptr (NULL, &amp;_cxq, w) ;
             if (u == w) break ;
             w = u ;
          }
          assert (w != NULL              , &quot;invariant&quot;) ;

          ObjectWaiter * q = NULL ;
          ObjectWaiter * p ;
          for (p = w ; p != NULL ; p = p-&gt;_next) {
              guarantee (p-&gt;TState == ObjectWaiter::TS_CXQ, &quot;Invariant&quot;) ;
              p-&gt;TState = ObjectWaiter::TS_ENTER ;
              p-&gt;_prev = q ;
              q = p ;
          }

          // Prepend the RATs to the EntryList
          if (_EntryList != NULL) {
              q-&gt;_next = _EntryList ;
              _EntryList-&gt;_prev = q ;
          }
          _EntryList = w ;

          // Fall thru into code that tries to wake a successor from EntryList
      }

      w = _EntryList  ;
      if (w != NULL) {
          // 如果EntryList不为空，则直接唤醒EntryList的队首元素
          assert (w-&gt;TState == ObjectWaiter::TS_ENTER, &quot;invariant&quot;) ;
          ExitEpilog (Self, w) ;
          return ;
      }

      // EntryList为null，则处理cxq中的元素
      w = _cxq ;
      if (w == NULL) continue ;

      // 因为之后要将cxq的元素移动到EntryList，所以这里将cxq字段设置为null
      for (;;) {
          assert (w != NULL, &quot;Invariant&quot;) ;
          ObjectWaiter * u = (ObjectWaiter *) Atomic::cmpxchg_ptr (NULL, &amp;_cxq, w) ;
          if (u == w) break ;
          w = u ;
      }
      TEVENT (Inflated exit - drain cxq into EntryList) ;

      assert (w != NULL              , &quot;invariant&quot;) ;
      assert (_EntryList  == NULL    , &quot;invariant&quot;) ;


      if (QMode == 1) {
         // QMode == 1 : 将cxq中的元素转移到EntryList，并反转顺序
         ObjectWaiter * s = NULL ;
         ObjectWaiter * t = w ;
         ObjectWaiter * u = NULL ;
         while (t != NULL) {
             guarantee (t-&gt;TState == ObjectWaiter::TS_CXQ, &quot;invariant&quot;) ;
             t-&gt;TState = ObjectWaiter::TS_ENTER ;
             u = t-&gt;_next ;
             t-&gt;_prev = u ;
             t-&gt;_next = s ;
             s = t;
             t = u ;
         }
         _EntryList  = s ;
         assert (s != NULL, &quot;invariant&quot;) ;
      } else {
         // QMode == 0 or QMode == 2‘
         // 将cxq中的元素转移到EntryList
         _EntryList = w ;
         ObjectWaiter * q = NULL ;
         ObjectWaiter * p ;
         for (p = w ; p != NULL ; p = p-&gt;_next) {
             guarantee (p-&gt;TState == ObjectWaiter::TS_CXQ, &quot;Invariant&quot;) ;
             p-&gt;TState = ObjectWaiter::TS_ENTER ;
             p-&gt;_prev = q ;
             q = p ;
         }
      }


      // _succ不为null，说明已经有个继承人了，所以不需要当前线程去唤醒，减少上下文切换的比率
      if (_succ != NULL) continue;

      w = _EntryList  ;
      // 唤醒EntryList第一个元素
      if (w != NULL) {
          guarantee (w-&gt;TState == ObjectWaiter::TS_ENTER, &quot;invariant&quot;) ;
          ExitEpilog (Self, w) ;
          return ;
      }
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在进行必要的锁重入判断以及自旋优化后，进入到主要逻辑：</p><p><code>code 1</code> 设置owner为null，即释放锁，这个时刻其他的线程能获取到锁。这里是一个非公平锁的优化；</p><p><code>code 2</code> 如果当前没有等待的线程则直接返回就好了，因为不需要唤醒其他线程。或者如果说succ不为null，代表当前已经有个&quot;醒着的&quot;继承人线程，那当前线程不需要唤醒任何线程；</p><p><code>code 3</code> 当前线程重新获得锁，因为之后要操作cxq和EntryList队列以及唤醒线程；</p><p><code>code 4</code>根据QMode的不同，会执行不同的唤醒策略；</p><p>根据QMode的不同，有不同的处理方式：</p><ol><li>QMode = 2且cxq非空：取cxq队列队首的ObjectWaiter对象，调用ExitEpilog方法，该方法会唤醒ObjectWaiter对象的线程，然后立即返回，后面的代码不会执行了；</li><li>QMode = 3且cxq非空：把cxq队列插入到EntryList的尾部；</li><li>QMode = 4且cxq非空：把cxq队列插入到EntryList的头部；</li><li>QMode = 0：暂时什么都不做，继续往下看；</li></ol><p>只有QMode=2的时候会提前返回，等于0、3、4的时候都会继续往下执行：</p><p>1.如果EntryList的首元素非空，就取出来调用ExitEpilog方法，该方法会唤醒ObjectWaiter对象的线程，然后立即返回； 2.如果EntryList的首元素为空，就将cxq的所有元素放入到EntryList中，然后再从EntryList中取出来队首元素执行ExitEpilog方法，然后立即返回；</p><ol><li>退出同步代码块时会让_recursions减1，当_recursions的值减为0时，说明线程释放了锁。</li><li>根据不同的策略（由QMode指定），从cxq或EntryList中获取头节点，通过 ObjectMonitor::ExitEpilog 方法唤醒该节点封装的线程，唤醒操作终由unpark完成，实现 如下：</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>void ObjectMonitor::ExitEpilog (Thread * Self， ObjectWaiter * Wakee) {
	assert (_owner == Self， &quot;invariant&quot;) ;
	_succ = Knob_SuccEnabled ? Wakee-&gt;_thread : NULL ;
	P
	arkEvent * Trigger = Wakee-&gt;_event ;
	Wakee = NULL ;
// Drop the lock
	OrderAccess::release_store_ptr (&amp;_owner， NULL) ;
	OrderAccess::fence() ; // ST _owner vs LD in unpark()
	if (SafepointSynchronize::do_call_back()) {
		TEVENT (unpark before SAFEPOINT) ;
	}
	DTRACE_MONITOR_PROBE(contended__exit， this， object()， Self);
	Trigger-&gt;unpark() ; // 唤醒之前被pack()挂起的线程.
// Maintain stats and report events to JVMTI
	if (ObjectMonitor::_sync_Parks != NULL) {
		ObjectMonitor::_sync_Parks-&gt;inc() ;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>被唤醒的线程，会回到 void ATTR ObjectMonitor::EnterI (TRAPS) 的第600行，继续执行monitor 的竞争。</p><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>// park self
if (_Responsible == Self || (SyncFlags &amp; 1)) {
	TEVENT (Inflated enter - park TIMED) ;
	Self-&gt;_ParkEvent-&gt;park ((jlong) RecheckInterval) ;
// Increase the RecheckInterval， but clamp the value.
	RecheckInterval *= 8 ;
	if (RecheckInterval &gt; 1000) RecheckInterval = 1000 ;
} else {
	TEVENT (Inflated enter - park UNTIMED) ;
	Self-&gt;_ParkEvent-&gt;park() ;
}
if (TryLock(Self) &gt; 0) break ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="monitor是重量级锁" tabindex="-1"><a class="header-anchor" href="#monitor是重量级锁" aria-hidden="true">#</a> monitor是重量级锁</h2><p>可以看到ObjectMonitor的函数调用中会涉及到Atomic::cmpxchg_ptr，Atomic::inc_ptr等内核函数， 执行同步代码块，没有竞争到锁的对象会park()被挂起，竞争到锁的线程会unpark()唤醒。这个时候就 会存在操作系统用户态和内核态的转换，这种切换会消耗大量的系统资源。所以synchronized是Java语 言中是一个重量级(Heavyweight)的操作。 用户态和和内核态是什么东西呢？要想了解用户态和内核态还需要先了解一下Linux系统的体系架构：</p><p><img src="`+_+'" alt="Alt text"></p><p>从上图可以看出，Linux操作系统的体系架构分为：用户空间（应用程序的活动空间）和内核。 内核：本质上可以理解为一种软件，控制计算机的硬件资源，并提供上层应用程序运行的环境。 用户空间：上层应用程序活动的空间。应用程序的执行必须依托于内核提供的资源，包括CPU资源、存 储资源、I/O资源等。 系统调用：为了使上层应用能够访问到这些资源，内核必须为上层应用提供访问的接口：即系统调用。</p><p>所有进程初始都运行于用户空间，此时即为用户运行状态（简称：用户态）；但是当它调用系统调用执 行某些操作时，例如 I/O调用，此时需要陷入内核中运行，我们就称进程处于内核运行态（或简称为内 核态）。 系统调用的过程可以简单理解为：</p><ol><li>用户态程序将一些数据值放在寄存器中， 或者使用参数创建一个堆栈， 以此表明需要操作系统提供的服务。</li><li>用户态程序执行系统调用。</li><li>CPU切换到内核态，并跳到位于内存指定位置的指令。</li><li>系统调用处理器(system call handler)会读取程序放入内存的数据参数，并执行程序请求的服务。</li><li>系统调用完成后，操作系统会重置CPU为用户态并返回系统调用的结果。 由此可见用户态切换至内核态需要传递许多变量，同时内核还需要保护好用户态在切换时的一些寄存器值、变量等，以备内核态切换回用户态。这种切换就带来了大量的系统资源消耗，这就是在 synchronized未优化之前，效率低的原因。</li></ol><h1 id="锁降级的争论" tabindex="-1"><a class="header-anchor" href="#锁降级的争论" aria-hidden="true">#</a> 锁降级的争论</h1>',177),x=n("strong",null,"在openjdk的hotsopt jdk8u里是有锁降级的机制的",-1),S={href:"https://www.zhihu.com/question/19882320",target:"_blank",rel:"noopener noreferrer"},j=n("p",null,"2、然后再详细说：",-1),T={href:"http://hg.openjdk.java.net/jdk8u/jdk8u/hotspot/file/9ce27f0a4683/src/share/vm/runtime/synchronizer.cpp#l1503",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"deflate_idle_monitors",-1),E=n("code",null,"SafepointSynchronize::begin()",-1),M=n("code",null,"deflate_idle_monitors",-1),O=n("code",null,"idle",-1),N=n("code",null,"deflate_monitor",-1),C={href:"http://openjdk.java.net/jeps/8183909",target:"_blank",rel:"noopener noreferrer"},R=n("code",null,"MonitorInUseLists",-1),I=n("code",null,"idle monitor",-1),W={href:"https://bugs.openjdk.java.net/browse/JDK-8149442",target:"_blank",rel:"noopener noreferrer"},A=n("li",null,[n("p",null,[s("至于为什么《java并发编程的艺术》中说锁不能降级，我"),n("strong",null,"猜测"),s("可能该书作者看的jdk版本还没有引入降级机制。")])],-1),U=t(`<h1 id="细节-容易混淆的地方" tabindex="-1"><a class="header-anchor" href="#细节-容易混淆的地方" aria-hidden="true">#</a> 细节/容易混淆的地方</h1><h2 id="java语言规范" tabindex="-1"><a class="header-anchor" href="#java语言规范" aria-hidden="true">#</a> java语言规范</h2><p>1、java语言规范里面，<code>int i = 0，resource = loadedResoures，flag = true</code>，各种变量的简单的赋值操作，规定都是原子的包括引用类型的变量的赋值写操作，也是原子的。</p><p>2、但是很多复杂的一些操作，i++，先读取i的值，再跟新i的值，i = y + 2，先读取y的值，再更新i的值，这种复杂操作，不是简单赋值写，他是有计算的过程在里面的，此时java语言规范默认是不保证原子性的。</p><h2 id="_32位java虚拟机中的long和double变量写操作为何不是原子的" tabindex="-1"><a class="header-anchor" href="#_32位java虚拟机中的long和double变量写操作为何不是原子的" aria-hidden="true">#</a> 32位Java虚拟机中的long和double变量写操作为何不是原子的？</h2><p>原子性这块，特例，32位虚拟机里的long/double类型的变量的简单赋值写操作，不是原子的，long i = 30，double c = 45.0，在32位虚拟机里就不是原子的，因为long和double是64位的</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果多个线程同时并发的执行long i = 30，long是64位的，就会导致有的线程在修改i的高32位，有的线程在修改i的低32位，多线程并发给long类型的变量进行赋值操作，在32位的虚拟机下，是有问题的</p><p>就可能会导致多线程给long i = 30赋值之后，导致i的值不是30，可能是-3333344429，乱码一样的数字，就是因为高低32位赋值错了，就导致二进制数字转换为十进制之后是一个很奇怪的数字</p><h2 id="volatile保不保证原子性" tabindex="-1"><a class="header-anchor" href="#volatile保不保证原子性" aria-hidden="true">#</a> volatile保不保证原子性？</h2><p>1、volatile对原子性保障的语义，在java里很有限的，几乎可以忽略不计。32位的java虚拟机里面，对long/double变量的赋值写是不原子的，此时如果对变量加上了volatile，就可以保证在32位java虚拟机里面，对long/double变量的赋值写是原子的了。（这是一个特列，可以通过volatile来保证原子性）但总体来说volatiel不保证原子性</p><p>例子：</p><p><code>volatile long i;</code> 多个线程执行：<code>i = 30</code>，此时就不要紧了，因为volatile修饰了，就可以保证这个赋值操作是原子的了。</p><p>2、<code>int i = 0</code>，这种原子性的保证，不是靠volatile，java语言规范本身就规定了这种操作是原子性的。</p><p><strong>结论：volatile不保证原子性</strong></p><h1 id="wait和notify" tabindex="-1"><a class="header-anchor" href="#wait和notify" aria-hidden="true">#</a> wait和notify</h1><h2 id="为什么要出现咋同步代码块中" tabindex="-1"><a class="header-anchor" href="#为什么要出现咋同步代码块中" aria-hidden="true">#</a> 为什么要出现咋同步代码块中</h2><blockquote><p>通过前面对monitor的C++源码讲解，答案应该很明显了。</p></blockquote><p>1、如果一个线程在同步块中调用了<code>Object#wait</code>方法，会将该线程对应的ObjectWaiter从EntryList移除并加入到WaitSet中，然后释放锁。当wait的线程被notify之后，会将对应的ObjectWaiter从WaitSet移动到EntryList中。</p><p>2、注意，如果没有获取到监视器锁，wait 方法是会抛异常的，而且注意这个异常是IllegalMonitorStateException 异常。这是重要知识点，要考。</p><p>3、如果线程获得锁后调用<code>Object.wait</code>方法，则会将线程加入到WaitSet中。而WaitSet这个结构是在Monitor对象里，如果你没有获取到监视器锁，你就没有Monitor。那就无法加入到WaitSet里。</p><h1 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考：</h1><ul><li><p>《Java并发编程的艺术》</p></li><li><p>《Java并发编程之美》</p></li><li><p>b站一些机构的视频</p></li><li><p>https://www.cnblogs.com/yanlong300/p/8986041.html</p></li><li><p>https://github.com/farmerjohngit/myblog</p></li><li><p>公总号：儒猿技术窝</p></li></ul><h1 id="题外话" tabindex="-1"><a class="header-anchor" href="#题外话" aria-hidden="true">#</a> 题外话：</h1><p>1、《Java并发编程的艺术》这本书非常好。不过我第一遍看的时候，就属于云里雾里的，就是感觉抓不到重点。直到我秋招结束之后，再次回顾的时候才开始有点感觉了。这本书从硬件层面，从设计层面讲的一些内容讲的很好，给了我很大的帮助。这本书结合《Java并发编程之美》可能会有更好的阅读体验和理解（仅仅是个人觉得）。读者有时间还是尽量要看下这两本书，我的博客只是总结了面试经常会问到的一些内容，以及一些很难找到的一些资料。</p><p>2、相信大家也能明显的感觉到写这篇博客的时候，涉及到了很多<strong>操作系统</strong>的知识。其实越往后学，你就越能发现<strong>操作系统</strong>对你理解很多东西的原理会有很大帮助。比如说这篇博客的内存屏障，MESI缓存一致性协议，cpu指令；还有netty的一些通信原理，还有mysql,redis与操作系统的交互，rokcetmq的零拷贝，消息储存机制等等。希望读者有时间能够好好看一下<strong>计算机网络和操作系统</strong>，真的是很重要，并且校招和社招面试大厂问的都比较多。</p><p>3、因为东西写的比较多，略微有点乱，写了3万多字。所以可能目录顺序不是那么的好，敬请读者见谅。</p><p>4、感谢各个博主的博客，对我都有很大的帮助。笔者能力有限，总结的博客可能有错误。如果有错误请及时联系我，谢谢~。</p>`,28);function z(D,J){const a=o("ExternalLinkIcon");return c(),p("div",null,[L,n("p",null,[s("1、先说结论，"),x,s("，锁降级是什么时候加入到hotspot的这个我没去关注，所以我只说看过代码的jdk8u版本，另外根据R大的这个"),n("a",S,[s("回答"),e(a)]),s("，我相信sunj dk也一样。")]),j,n("ul",null,[n("li",null,[n("p",null,[s("锁降级的代码在"),n("a",T,[q,e(a)]),s("方法中，其调用点在进入SafePoint的方法"),E,s("中。 在"),M,s("中会找到已经"),O,s("的monitor(也就是重量级锁的对象)，然后调用"),N,s("方法将其降级。")])]),n("li",null,[n("p",null,[s("因为锁降级是发生在safepoint的，所以如果降级时间过长会导致程序一直处于STW的阶段。在"),n("a",C,[s("这里"),e(a)]),s("有篇文章讨论了优化机制。jdk8中本身也有个"),R,s("的开关，其影响了寻找"),I,s("的方式，对该开关的一些讨论看"),n("a",W,[s("这里"),e(a)]),s("。")])]),A]),U])}const Q=i(w,[["render",z],["__file","Javabingfatixi-dierjieduan-suoyutongbu-_3_.html.vue"]]);export{Q as default};
