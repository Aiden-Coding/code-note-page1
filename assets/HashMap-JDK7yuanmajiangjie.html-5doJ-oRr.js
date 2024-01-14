import{_ as n,o as s,c as a,e as t}from"./app-GjP6hEVt.js";const p="/code-note-page1/assets/image-3-rikI_8GP.png",e="/code-note-page1/assets/image-3-rikI_8GP.png",c="/code-note-page1/assets/image-5---5a-5hJ.png",o="/code-note-page1/assets/image-6-z_BezMbN.png",l="/code-note-page1/assets/image-7-LcCCmRQd.png",i="/code-note-page1/assets/image-8-eDL9UFEZ.png",u="/code-note-page1/assets/image-9-YbgF_txC.png",k="/code-note-page1/assets/image-10-V-NfzR5t.png",d="/code-note-page1/assets/image-11-z9jaizgH.png",r="/code-note-page1/assets/image-12-LTBbE28n.png",v="/code-note-page1/assets/image-13-DKeHBgdP.png",m="/code-note-page1/assets/image-14-5DQPRR4k.png",b="/code-note-page1/assets/image-15-ev_0lgcC.png",y="/code-note-page1/assets/image-16-dFvTKr1k.png",h="/code-note-page1/assets/image-17-FfxLjdD1.png",g="/code-note-page1/assets/image-18-NzrJG1HY.png",w={},f=t(`<blockquote><p>本文基于版本 <code>JDK 1.7</code>，即 <code>Java 7</code>。</p></blockquote><h1 id="hashmap用法" tabindex="-1"><a class="header-anchor" href="#hashmap用法" aria-hidden="true">#</a> HashMap用法</h1><h2 id="常用api" tabindex="-1"><a class="header-anchor" href="#常用api" aria-hidden="true">#</a> 常用API</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">V</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Object</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获得指定键的值</span>
<span class="token class-name">V</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">K</span> key<span class="token punctuation">,</span> <span class="token class-name">V</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 添加键值对</span>
<span class="token keyword">void</span> <span class="token function">putAll</span><span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">K</span><span class="token punctuation">,</span> <span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> m<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 将指定Map中的键值对 复制到 此Map中</span>
<span class="token class-name">V</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token class-name">Object</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 删除该键值对</span>

<span class="token keyword">boolean</span> <span class="token function">containsKey</span><span class="token punctuation">(</span><span class="token class-name">Object</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 判断是否存在该键的键值对；是 则返回true</span>
<span class="token keyword">boolean</span> <span class="token function">containsValue</span><span class="token punctuation">(</span><span class="token class-name">Object</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 判断是否存在该值的键值对；是 则返回true</span>
 
<span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">&gt;</span></span> <span class="token function">keySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 单独抽取key序列，将所有key生成一个Set</span>
<span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> <span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 单独value序列，将所有value生成一个Collection</span>

<span class="token keyword">void</span> <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 清除哈希表中的所有键值对</span>
<span class="token keyword">int</span> <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 返回哈希表中所有 键值对的数量 = 数组中的键值对 + 链表中的键值对</span>
<span class="token keyword">boolean</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 判断HashMap是否为空；size == 0时 表示为 空 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>


<span class="token doc-comment comment">/**
 * @Author: youthlql-吕
 * @Date: 2020/10/11 21:05
 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
 * 功能描述:
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> test <span class="token punctuation">{</span>
    <span class="token comment">//声明1个 HashMap的对象</span>
    <span class="token keyword">static</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token comment">//向HashMap添加数据（成对 放入 键 - 值对）</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;Java&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;hadoop&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;产品经理&quot;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//获取 HashMap 的某个数据</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;key = 产品经理时的值为：&quot;</span> <span class="token operator">+</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;产品经理&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;------------------下面是遍历-------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>


    <span class="token doc-comment comment">/**
     * 获取HashMap的全部数据：遍历HashMap
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>


        <span class="token comment">// 方法1：获得key-value的Set集合 再遍历</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;------------方法1------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 1、获得key-value对（Entry）的Set集合</span>
        <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map<span class="token punctuation">.</span>Entry</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> entrySet <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">entrySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 2、遍历Set集合，从而获取key-value</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Map<span class="token punctuation">.</span>Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> entry <span class="token operator">:</span> entrySet<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>entry<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>entry<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;----------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 2.1、通过迭代器：先获得key-value对（Entry）的Iterator，再循环遍历</span>
        <span class="token class-name">Iterator</span> iter1 <span class="token operator">=</span> entrySet<span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>iter1<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 遍历时，需先获取entry，再分别获取key、value</span>
            <span class="token class-name">Map<span class="token punctuation">.</span>Entry</span> entry <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Map<span class="token punctuation">.</span>Entry</span><span class="token punctuation">)</span> iter1<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> entry<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">)</span> entry<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>




        <span class="token comment">// 方法2：获得key的Set集合 再遍历</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;------------方法2------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 1. 获得key的Set集合</span>
        <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> keySet <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">keySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 2. 遍历Set集合，从而获取key，再获取value</span>
        <span class="token comment">// 2.1 通过for循环</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> key <span class="token operator">:</span> keySet<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;----------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 2.2 通过迭代器：先获得key的Iterator，再循环遍历</span>
        <span class="token class-name">Iterator</span> iter2 <span class="token operator">=</span> keySet<span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> key <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>iter2<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            key <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> iter2<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>



        <span class="token comment">// 方法3：获得value的Set集合 再遍历</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;------------方法3------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 1. 获得value的Set集合</span>
        <span class="token class-name">Collection</span> valueSet <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 2. 遍历Set集合，从而获取value</span>
        <span class="token comment">// 2.1 获得values 的Iterator</span>
        <span class="token class-name">Iterator</span> iter3 <span class="token operator">=</span> valueSet<span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 2.2 通过遍历，直接获取value</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>iter3<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>iter3<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>


<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * 对于遍历方式，推荐使用针对 key-value对（Entry）的方式：效率高
 * 原因：
 * 1. 对于 遍历keySet 、valueSet，实质上 = 遍历了2次：
 *    第一次转为iterator迭代器遍历、
 *    第二次从HashMap中取出key和value操作
 * 2. 对于遍历entrySet，实质只遍历了1次，也就是获取存储实体Entry（存储了key 和 value ）
 */</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>结果</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>key = 产品经理时的值为：3

------------------下面是遍历-------------------
------------方法1------------
Java1
hadoop2
产品经理3
----------
Java1
hadoop2
产品经理3
------------方法2------------
Java1
hadoop2
产品经理3
----------
Java1
hadoop2
产品经理3
------------方法3------------
1
2
3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="数据结构" tabindex="-1"><a class="header-anchor" href="#数据结构" aria-hidden="true">#</a> 数据结构</h1><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>1、HashMap是散列表的一种，HashMap本身采用数组来进行储存。同时HashMap采用拉链法来解决hash冲突，拉链法就是通过链表来解决hash冲突。所以说整体上来看，HashMap采用的数据结构 = <strong>数组（主） + 单链表（副）</strong></p><p>大致是这样的一个结构</p><p><img src="`+p+`" alt="Alt text"></p><ul><li>每个链表就算哈希表的桶（bucket）</li><li>链表的节点值就算一个键值对</li></ul><h2 id="重要参数介绍" tabindex="-1"><a class="header-anchor" href="#重要参数介绍" aria-hidden="true">#</a> 重要参数介绍</h2><p><strong>构造函数源码</strong></p><p>先贴一下，后面参数介绍会使用到。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>	<span class="token keyword">public</span> <span class="token class-name">HashMap</span><span class="token punctuation">(</span><span class="token keyword">int</span> initialCapacity<span class="token punctuation">,</span> <span class="token keyword">float</span> loadFactor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>initialCapacity <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token string">&quot;Illegal initial capacity: &quot;</span> <span class="token operator">+</span>
                                               initialCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>initialCapacity <span class="token operator">&gt;</span> <span class="token constant">MAXIMUM_CAPACITY</span><span class="token punctuation">)</span>
            initialCapacity <span class="token operator">=</span> <span class="token constant">MAXIMUM_CAPACITY</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>loadFactor <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token operator">||</span> <span class="token class-name">Float</span><span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span>loadFactor<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token string">&quot;Illegal load factor: &quot;</span> <span class="token operator">+</span>
                                               loadFactor<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">this</span><span class="token punctuation">.</span>loadFactor <span class="token operator">=</span> loadFactor<span class="token punctuation">;</span>
        threshold <span class="token operator">=</span> initialCapacity<span class="token punctuation">;</span>
        <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token class-name">HashMap</span><span class="token punctuation">(</span><span class="token keyword">int</span> initialCapacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">(</span>initialCapacity<span class="token punctuation">,</span> <span class="token constant">DEFAULT_LOAD_FACTOR</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">HashMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">(</span><span class="token constant">DEFAULT_INITIAL_CAPACITY</span><span class="token punctuation">,</span> <span class="token constant">DEFAULT_LOAD_FACTOR</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token class-name">HashMap</span><span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">K</span><span class="token punctuation">,</span> <span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> m<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>m<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token constant">DEFAULT_LOAD_FACTOR</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
                      <span class="token constant">DEFAULT_INITIAL_CAPACITY</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token constant">DEFAULT_LOAD_FACTOR</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">inflateTable</span><span class="token punctuation">(</span>threshold<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">putAllForCreate</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>下面的代码有些顺序和源码可能不太一样，仅仅是顺序，笔者是为了更好的阅读体验</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span>
    <span class="token keyword">extends</span> <span class="token class-name">AbstractMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span>
    <span class="token keyword">implements</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">,</span> <span class="token class-name">Cloneable</span><span class="token punctuation">,</span> <span class="token class-name">Serializable</span>
<span class="token punctuation">{</span>

    <span class="token comment">/*
    名词介绍：
    1、容量（capacity）： HashMap中数组【强调一下是数组，不是元素个数】的长度
    2、容量范围：必须是2的幂并且小于最大容量（2的30次方）
    3、初始容量 = 哈希表创建时的容量
    */</span>
    
    <span class="token comment">//默认初始容量 = 哈希表创建时的容量。默认容量 = 16 = 1&lt;&lt;4 = 00001中的1向左移4位 = 十进制的2^4=16</span>
    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">DEFAULT_INITIAL_CAPACITY</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> <span class="token comment">// aka 16</span>
	
    <span class="token comment">// 最大容量 =  2的30次方（若传入的容量过大，将被最大值替换）</span>
    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">MAXIMUM_CAPACITY</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">30</span><span class="token punctuation">;</span>

    <span class="token comment">/*
    1、加载因子(Load factor)：HashMap在其容量自动增加前的一种尺度。
    2、加载因子越大、填满的元素越多 = 空间利用率高、但hash冲突的机会加大、查找效率变低（因为链表变长了）
    3、加载因子越小、填满的元素越少 = 空间利用率小、hash冲突的机会减小、查找效率高（链表不长）
    */</span>
    
    <span class="token comment">// 实际加载因子</span>
    <span class="token keyword">final</span> <span class="token keyword">float</span> loadFactor<span class="token punctuation">;</span>
    
    <span class="token comment">// 默认加载因子 = 0.75</span>
    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">float</span> <span class="token constant">DEFAULT_LOAD_FACTOR</span> <span class="token operator">=</span> <span class="token number">0.75f</span><span class="token punctuation">;</span>
	
    <span class="token comment">//就是上面说的数组，hashmap用Entry数组储存k-v键值对</span>
    <span class="token keyword">transient</span> <span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> table <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token constant">EMPTY_TABLE</span><span class="token punctuation">;</span>
    
    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">,</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token constant">EMPTY_TABLE</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

	
    <span class="token comment">// HashMap的大小，即HashMap中存储的键值对的数量。注意：和容量区分开，容量是数组Entry的长度</span>
    <span class="token keyword">transient</span> <span class="token keyword">int</span> size<span class="token punctuation">;</span>
	

    <span class="token comment">/*
    1、扩容阈值（threshold）：当哈希表的大小【就是上面的size】 ≥ 扩容阈值时，就会扩容哈希表
    （即扩充HashMap的容量） 
    2、扩容 = 对哈希表进行resize操作（即重建内部数据结构），从而哈希表将具有大约两倍的桶数
    3、扩容阈值 = 容量 x 加载因子
    */</span>
    <span class="token keyword">int</span> threshold<span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数组-entry" tabindex="-1"><a class="header-anchor" href="#数组-entry" aria-hidden="true">#</a> 数组-Entry</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/** 
 * Entry类实现了Map.Entry接口
 * 即 实现了getKey()、getValue()、equals(Object o)和hashCode()等方法
**/</span>  
<span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">implements</span> <span class="token class-name">Map<span class="token punctuation">.</span>Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token class-name">K</span> key<span class="token punctuation">;</span>  <span class="token comment">// 键</span>
    <span class="token class-name">V</span> value<span class="token punctuation">;</span>  <span class="token comment">// 值</span>
    <span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> next<span class="token punctuation">;</span> <span class="token comment">// 指向下一个节点 ，也是一个Entry对象，从而形成解决hash冲突的单链表</span>
    <span class="token keyword">int</span> hash<span class="token punctuation">;</span>  <span class="token comment">// hash值</span>
  
    <span class="token doc-comment comment">/** 
     * 构造方法，创建一个Entry 
     * 参数：哈希值h，键值k，值v、下一个节点n 
     */</span>  
    <span class="token class-name">Entry</span><span class="token punctuation">(</span><span class="token keyword">int</span> h<span class="token punctuation">,</span> <span class="token class-name">K</span> k<span class="token punctuation">,</span> <span class="token class-name">V</span> v<span class="token punctuation">,</span> <span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        value <span class="token operator">=</span> v<span class="token punctuation">;</span>  
        next <span class="token operator">=</span> n<span class="token punctuation">;</span>  
        key <span class="token operator">=</span> k<span class="token punctuation">;</span>  
        hash <span class="token operator">=</span> h<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
  
    <span class="token comment">// 返回 与 此项 对应的键</span>
    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token class-name">K</span> <span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> key<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  

    <span class="token comment">// 返回 与 此项 对应的值</span>
    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token class-name">V</span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> value<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
  
    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token class-name">V</span> <span class="token function">setValue</span><span class="token punctuation">(</span><span class="token class-name">V</span> newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token class-name">V</span> oldValue <span class="token operator">=</span> value<span class="token punctuation">;</span>  
        value <span class="token operator">=</span> newValue<span class="token punctuation">;</span>  
        <span class="token keyword">return</span> oldValue<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
    
   <span class="token doc-comment comment">/** 
     * equals（）
     * 作用：判断2个Entry是否相等，必须key和value都相等，才返回true  
     */</span> 
      <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>o <span class="token keyword">instanceof</span> <span class="token class-name">Map<span class="token punctuation">.</span>Entry</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>  
        <span class="token class-name">Map<span class="token punctuation">.</span>Entry</span> e <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Map<span class="token punctuation">.</span>Entry</span><span class="token punctuation">)</span>o<span class="token punctuation">;</span>  
        <span class="token class-name">Object</span> k1 <span class="token operator">=</span> <span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token class-name">Object</span> k2 <span class="token operator">=</span> e<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token keyword">if</span> <span class="token punctuation">(</span>k1 <span class="token operator">==</span> k2 <span class="token operator">||</span> <span class="token punctuation">(</span>k1 <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> k1<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>k2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
            <span class="token class-name">Object</span> v1 <span class="token operator">=</span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
            <span class="token class-name">Object</span> v2 <span class="token operator">=</span> e<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
            <span class="token keyword">if</span> <span class="token punctuation">(</span>v1 <span class="token operator">==</span> v2 <span class="token operator">||</span> <span class="token punctuation">(</span>v1 <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> v1<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>v2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  
                <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>  
        <span class="token punctuation">}</span>  
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
    
    <span class="token doc-comment comment">/** 
     * hashCode（） 
     */</span> 
    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        <span class="token keyword">return</span> <span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">^</span> <span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
  
    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> <span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;=&quot;</span> <span class="token operator">+</span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
  
    <span class="token doc-comment comment">/** 
     * 当向HashMap中添加元素时，即调用put(k,v)时， 
     * 对已经在HashMap中k位置进行v的覆盖时，会调用此方法 
     * 此处没做任何处理 
     */</span>  
    <span class="token keyword">void</span> <span class="token function">recordAccess</span><span class="token punctuation">(</span><span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> m<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    <span class="token punctuation">}</span>  
  
    <span class="token doc-comment comment">/** 
     * 当从HashMap中删除了一个Entry时，会调用该函数 
     * 此处没做任何处理 
     */</span>  
    <span class="token keyword">void</span> <span class="token function">recordRemoval</span><span class="token punctuation">(</span><span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> m<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    <span class="token punctuation">}</span> 

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>HashMap</code>中的数组元素 &amp; 链表节点 采用 <code>Entry</code>类实现</p><p><img src="`+e+`" alt="Alt text"></p><p>1、一个正方形代表一个Entry对象，同时也代表一个键值对。</p><p>2、即 <code>HashMap</code>的本质 = 1个存储<code>Entry</code>类对象的数组 + 多个单链表</p><p>3、Entry对象本质 = 1个映射（键 - 值对），属性包括：键（<code>key</code>）、值（<code>value</code>）、 下个节点( <code>next</code>) = 单链表的指针 = 也是一个<code>Entry</code>对象，用于解决<code>hash</code>冲突</p><h1 id="构造函数源码" tabindex="-1"><a class="header-anchor" href="#构造函数源码" aria-hidden="true">#</a> 构造函数源码</h1><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span>
      <span class="token keyword">extends</span> <span class="token class-name">AbstractMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span>
      <span class="token keyword">implements</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">,</span> <span class="token class-name">Cloneable</span><span class="token punctuation">,</span> <span class="token class-name">Serializable</span><span class="token punctuation">{</span>

    <span class="token comment">// 省略上节阐述的参数</span>
    
    <span class="token comment">/*
      构造函数1：默认构造函数（无参）
      加载因子和容量为默认，分别是0.75和16
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">HashMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">/*
         实际上是调用构造函数3：指定&quot;容量大小&quot;和&quot;加载因子&quot;的构造函数
         传入的指定容量和加载因子均为默认
        */</span>
        <span class="token keyword">this</span><span class="token punctuation">(</span><span class="token constant">DEFAULT_INITIAL_CAPACITY</span><span class="token punctuation">,</span> <span class="token constant">DEFAULT_LOAD_FACTOR</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span>

    <span class="token comment">/*
      构造函数2：指定&quot;容量大小&quot;的构造函数
      加载因子是默认的0.75 、容量为指定大小
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">HashMap</span><span class="token punctuation">(</span><span class="token keyword">int</span> initialCapacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 实际上是调用的也是构造函数3，只是在传入的加载因子参数为默认加载因子</span>
        <span class="token keyword">this</span><span class="token punctuation">(</span>initialCapacity<span class="token punctuation">,</span> <span class="token constant">DEFAULT_LOAD_FACTOR</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
    <span class="token punctuation">}</span>

    <span class="token comment">/*
      构造函数3：指定“容量大小”和“加载因子”的构造函数
      加载因子和容量都是程序员自己指定
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">HashMap</span><span class="token punctuation">(</span><span class="token keyword">int</span> initialCapacity<span class="token punctuation">,</span> <span class="token keyword">float</span> loadFactor<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token comment">// HashMap的最大容量只能是MAXIMUM_CAPACITY，哪怕传入的 &gt; 最大容量</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>initialCapacity <span class="token operator">&gt;</span> <span class="token constant">MAXIMUM_CAPACITY</span><span class="token punctuation">)</span>
            initialCapacity <span class="token operator">=</span> <span class="token constant">MAXIMUM_CAPACITY</span><span class="token punctuation">;</span>

        <span class="token comment">// 设置加载因子</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>loadFactor <span class="token operator">=</span> loadFactor<span class="token punctuation">;</span>
        
        <span class="token comment">/*
        设置扩容阈值 = 初始容量
        1、注意：此处不是真正的阈值，仅是为了接收参数初始容量大小（capacity）、加载因子(Load factor)，
        并没有真正初始化哈希表，即初始化存储数组table
        2、真正初始化哈希表（初始化存储数组table）是在第1次添加键值对时，即第1次调用put()时，下面会
        详细说明。
        */</span>
        threshold <span class="token operator">=</span> initialCapacity<span class="token punctuation">;</span>   

        <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 一个空方法用于未来的子对象扩展</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*
      构造函数4：包含“子Map”的构造函数
      即构造出来的HashMap包含传入Map参数
      加载因子和容量均为默认
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">HashMap</span><span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">K</span><span class="token punctuation">,</span> <span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> m<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token comment">// 设置容量大小和加载因子为默认值</span>
        <span class="token keyword">this</span><span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>m<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token constant">DEFAULT_LOAD_FACTOR</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token constant">DEFAULT_INITIAL_CAPACITY</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token constant">DEFAULT_LOAD_FACTOR</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 该方法用于初始化数组和阈值</span>
        <span class="token function">inflateTable</span><span class="token punctuation">(</span>threshold<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 将传入的子Map中的全部元素逐个添加到HashMap中</span>
        <span class="token function">putAllForCreate</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="put-源码" tabindex="-1"><a class="header-anchor" href="#put-源码" aria-hidden="true">#</a> put()源码</h1><h2 id="put" tabindex="-1"><a class="header-anchor" href="#put" aria-hidden="true">#</a> put()</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">V</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">K</span> key<span class="token punctuation">,</span> <span class="token class-name">V</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	    	
    	<span class="token comment">/*  ①
    	1、若哈希表未初始化（即 table为空)，则调用inflateTable方法，使用构造函数时设置的阈值
    	(即初始容量)初始化数组table 
    	*/</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>table <span class="token operator">==</span> <span class="token constant">EMPTY_TABLE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">inflateTable</span><span class="token punctuation">(</span>threshold<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    	<span class="token comment">/*  ②
    	1、判断key是否为空值null
		2、若key == null，则调用putForNullKey方法，putForNullKey方法最终将该键-值存放到数组
		table中的第1个位置，即table[0]。本质：key = Null时，hash值 = 0，故存放到table[0]中）
		该位置永远只有1个value，新传进来的value会覆盖旧的value
		3、k != null往下走
    	*/</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token function">putForNullKey</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    	<span class="token comment">//下面就是k != null的情况</span>
    
    	<span class="token comment">//计算key的hash值</span>
        <span class="token keyword">int</span> hash <span class="token operator">=</span> <span class="token function">hash</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    	<span class="token comment">//根据hash值最终获得key对应存放的数组Table中位置(也就是数组下标)</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token function">indexFor</span><span class="token punctuation">(</span>hash<span class="token punctuation">,</span> table<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
    	
    	<span class="token comment">/*  ③
    	1、通过遍历以该数组元素为头结点的链表，逐个判断是否发生hash冲突，同时判断该key对应的值是
    	否已存在
    	*/</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> e <span class="token operator">=</span> table<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span> e <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> e <span class="token operator">=</span> e<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Object</span> k<span class="token punctuation">;</span>
            <span class="token comment">/* ④
            1、如果发生了hash冲突，且key也相等。则用新value替换旧value(此时说明发生了更新的情况)，
            注意这里强调的是发生了hash冲突并且key也相等。
            */</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>hash <span class="token operator">==</span> hash <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>k <span class="token operator">=</span> e<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token operator">==</span> key <span class="token operator">||</span> key<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">V</span> oldValue <span class="token operator">=</span> e<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
                e<span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
                e<span class="token punctuation">.</span><span class="token function">recordAccess</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span> oldValue<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
		<span class="token comment">//修改次数+1</span>
        modCount<span class="token operator">++</span><span class="token punctuation">;</span>
    	<span class="token comment">/* ⑤
    	1、走到这一步有两种情况
    	  1-1、没有发生hash冲突
    	  1-2、发生了hash冲突，但是没有在链表中找到key一样的键
    	2、接着准备采用头插法，插入链表的头部(也就是数组里面)
    	*/</span>
        <span class="token function">addEntry</span><span class="token punctuation">(</span>hash<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="inflatetable" tabindex="-1"><a class="header-anchor" href="#inflatetable" aria-hidden="true">#</a> inflateTable()</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">inflateTable</span><span class="token punctuation">(</span><span class="token keyword">int</span> toSize<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/*
	将传入的容量大小转化为：&gt;传入容量大小的最小的2的次幂，即如果传入的是容量大小是18，那么转化后，
	初始化容量大小为32（即2的5次幂）
	*/</span>	
    <span class="token keyword">int</span> capacity <span class="token operator">=</span> <span class="token function">roundUpToPowerOf2</span><span class="token punctuation">(</span>toSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
	<span class="token comment">//重新计算阈值 threshold = 容量 * 加载因子  </span>
    threshold <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>capacity <span class="token operator">*</span> loadFactor<span class="token punctuation">,</span> <span class="token constant">MAXIMUM_CAPACITY</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/*
    使用计算后的初始容量（已经是2的次幂） 初始化数组table（作为数组长度）即 哈希表的容量大小 = 
    数组大小（长度）
    */</span>
    table <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Entry</span><span class="token punctuation">[</span>capacity<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token function">initHashSeedAsNeeded</span><span class="token punctuation">(</span>capacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rounduptopowerof2" tabindex="-1"><a class="header-anchor" href="#rounduptopowerof2" aria-hidden="true">#</a> roundUpToPowerOf2()</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">roundUpToPowerOf2</span><span class="token punctuation">(</span><span class="token keyword">int</span> number<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//若容量超过了最大值，初始化容量设置为最大值 ；否则，设置为&gt;传入容量大小的最小的2的次幂</span>
    <span class="token keyword">return</span> number <span class="token operator">&gt;=</span> <span class="token constant">MAXIMUM_CAPACITY</span>
    <span class="token operator">?</span> <span class="token constant">MAXIMUM_CAPACITY</span>
    <span class="token operator">:</span> <span class="token punctuation">(</span>number <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">highestOneBit</span><span class="token punctuation">(</span><span class="token punctuation">(</span>number <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="putfornullkey" tabindex="-1"><a class="header-anchor" href="#putfornullkey" aria-hidden="true">#</a> putForNullKey()</h2><p>当 key ==null时，将该 key-value 的存储位置规定为数组table 中的第1个位置，即table [0]</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token class-name">V</span> <span class="token function">putForNullKey</span><span class="token punctuation">(</span><span class="token class-name">V</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	
	<span class="token comment">/*
	1、遍历以table[0]为首的链表，寻找是否存在key==null对应的键值对
	   1-1、若有：则用新value替换旧value；同时返回旧的value值。
	*/</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> e <span class="token operator">=</span> table<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span> e <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> e <span class="token operator">=</span> e<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>key <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">V</span> oldValue <span class="token operator">=</span> e<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
            e<span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
            e<span class="token punctuation">.</span><span class="token function">recordAccess</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> oldValue<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    modCount<span class="token operator">++</span><span class="token punctuation">;</span>
   
    <span class="token comment">/*
    1、若无key==null的键，那么调用addEntry（），将空键和对应的值封装到Entry中，并放到table[0]中
    2、能走到这里的情况就是table[0]位置之前没有元素，这一次是第一次添加key为null的元素
    3、k == null已经是固定放在了table[0]的位置，不会有链表存在，只会有一个元素。
    */</span>
    <span class="token function">addEntry</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> value<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从此处可以看出：</p><ul><li><code>HashMap</code>的键<code>key</code> 可为<code>null</code>（区别于 <code>HashTable</code>的<code>key</code> 不可为<code>null</code>）</li><li><code>HashMap</code>的键<code>key</code> 可为<code>null</code>且只能为1个，但值<code>value</code>可为null且为多个</li></ul><h2 id="hash" tabindex="-1"><a class="header-anchor" href="#hash" aria-hidden="true">#</a> hash()</h2><blockquote><p>这个方法比较重要，1.7和1.8改动的比较大</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>   <span class="token doc-comment comment">/**
     * 1、该函数在JDK7和8中的实现不同，但原理一样 = 扰动函数 = 使得根据key生成的
     * 哈希码（hash值）分布更加均匀、更具备随机性，避免出现hash值冲突（即指不同key但生成同1个hash值）
     * 2、JDK 1.7 做了9次扰动处理 = 4次位运算 + 5次异或运算
     * 3、JDK 1.8 简化了扰动函数 = 只做了2次扰动 = 1次位运算 + 1次异或运算
     */</span>
    <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token function">hash</span><span class="token punctuation">(</span><span class="token class-name">Object</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> h <span class="token operator">=</span> hashSeed<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">0</span> <span class="token operator">!=</span> h <span class="token operator">&amp;&amp;</span> k <span class="token keyword">instanceof</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        	<span class="token keyword">return</span> <span class="token class-name"><span class="token namespace">sun<span class="token punctuation">.</span>misc<span class="token punctuation">.</span></span>Hashing</span><span class="token punctuation">.</span><span class="token function">stringHash32</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        h <span class="token operator">^=</span> k<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//4次位运算 + 5次异或运算</span>
        h <span class="token operator">^=</span> <span class="token punctuation">(</span>h <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">^</span> <span class="token punctuation">(</span>h <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> h <span class="token operator">^</span> <span class="token punctuation">(</span>h <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">7</span><span class="token punctuation">)</span> <span class="token operator">^</span> <span class="token punctuation">(</span>h <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="indexfor" tabindex="-1"><a class="header-anchor" href="#indexfor" aria-hidden="true">#</a> indexFor()</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>	<span class="token comment">//这里h &amp; (length-1)的意思就是hash值与数组长度取模。只是因为数组长度是特殊的2的幂，</span>
	<span class="token comment">//所以这个等价关系刚好成立</span>
	<span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">indexFor</span><span class="token punctuation">(</span><span class="token keyword">int</span> h<span class="token punctuation">,</span> <span class="token keyword">int</span> length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// assert Integer.bitCount(length) == 1 : &quot;length must be a non-zero power of 2&quot;;</span>
        <span class="token keyword">return</span> h <span class="token operator">&amp;</span> <span class="token punctuation">(</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="addentry" tabindex="-1"><a class="header-anchor" href="#addentry" aria-hidden="true">#</a> addEntry()</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>	<span class="token comment">//作用：添加键值对（Entry）到HashMap中。参数3:插入数组table的索引位置,也就是数组下标</span>
	<span class="token comment">//注意：JDK7是先扩容再插入</span>
	<span class="token keyword">void</span> <span class="token function">addEntry</span><span class="token punctuation">(</span><span class="token keyword">int</span> hash<span class="token punctuation">,</span> <span class="token class-name">K</span> key<span class="token punctuation">,</span> <span class="token class-name">V</span> value<span class="token punctuation">,</span> <span class="token keyword">int</span> bucketIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">/*
		1、插入前，先判断容量是否足够
           1.1、若不足够，则进行扩容（2倍）、重新计算Hash值、重新计算存储数组下标
		*/</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>size <span class="token operator">&gt;=</span> threshold<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">!=</span> table<span class="token punctuation">[</span>bucketIndex<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">resize</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> table<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
            hash <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">!=</span> key<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token function">hash</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
            bucketIndex <span class="token operator">=</span> <span class="token function">indexFor</span><span class="token punctuation">(</span>hash<span class="token punctuation">,</span> table<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
		<span class="token comment">// 1.2、若容量足够，则创建1个新的数组元素（Entry） 并放入到数组中</span>
        <span class="token function">createEntry</span><span class="token punctuation">(</span>hash<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> bucketIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="扩容源码" tabindex="-1"><a class="header-anchor" href="#扩容源码" aria-hidden="true">#</a> 扩容源码</h1><p>下面的也是JDK7扩容的步骤，接着上面的<code>addEntry()</code></p><h2 id="resize" tabindex="-1"><a class="header-anchor" href="#resize" aria-hidden="true">#</a> resize()</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token doc-comment comment">/**
   * 作用：当大小不足时（size &gt; 阈值，注意是size，不是容量），则扩容（扩到2倍）
   */</span> 
   <span class="token keyword">void</span> <span class="token function">resize</span><span class="token punctuation">(</span><span class="token keyword">int</span> newCapacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    
    <span class="token comment">// 1、保存旧数组（old table） </span>
    <span class="token class-name">Entry</span><span class="token punctuation">[</span><span class="token punctuation">]</span> oldTable <span class="token operator">=</span> table<span class="token punctuation">;</span>  

    <span class="token comment">// 2、保存旧容量（old capacity ），即数组长度</span>
    <span class="token keyword">int</span> oldCapacity <span class="token operator">=</span> oldTable<span class="token punctuation">.</span>length<span class="token punctuation">;</span> 

    <span class="token comment">// 3、若旧容量已经是系统默认最大容量了，那么将阈值设置成整型的最大值，返回   </span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>oldCapacity <span class="token operator">==</span> <span class="token constant">MAXIMUM_CAPACITY</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        threshold <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token punctuation">;</span>  
        <span class="token keyword">return</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
  
    <span class="token comment">// 4、根据新容量（2倍容量）新建1个数组，即newTable </span>
    <span class="token class-name">Entry</span><span class="token punctuation">[</span><span class="token punctuation">]</span> newTable <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Entry</span><span class="token punctuation">[</span>newCapacity<span class="token punctuation">]</span><span class="token punctuation">;</span>  

    <span class="token comment">//5、将旧数组上的数据（键值对）转移到新table中，从而完成扩容</span>
    <span class="token function">transfer</span><span class="token punctuation">(</span>newTable<span class="token punctuation">,</span> <span class="token function">initHashSeedAsNeeded</span><span class="token punctuation">(</span>newCapacity<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       
    <span class="token comment">// 6、新数组table引用到HashMap的table属性上</span>
    table <span class="token operator">=</span> newTable<span class="token punctuation">;</span>
       
    <span class="token comment">// 7、重新设置阈值 </span>
    threshold <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>newCapacity <span class="token operator">*</span> loadFactor<span class="token punctuation">,</span> <span class="token constant">MAXIMUM_CAPACITY</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="transfer" tabindex="-1"><a class="header-anchor" href="#transfer" aria-hidden="true">#</a> transfer()</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token doc-comment comment">/**
   * 作用：将旧数组上的数据（键值对）转移到新table中，从而完成扩容
   * 过程：按旧链表的正序遍历链表、在新链表的头部依次插入。但是这样会导致扩容完成后，链表逆序
   */</span> 	
<span class="token keyword">void</span> <span class="token function">transfer</span><span class="token punctuation">(</span><span class="token class-name">Entry</span><span class="token punctuation">[</span><span class="token punctuation">]</span> newTable<span class="token punctuation">,</span> <span class="token keyword">boolean</span> rehash<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> newCapacity <span class="token operator">=</span> newTable<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token comment">//通过遍历 旧数组，将旧数组上的数据（键值对）转移到新数组中</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> e <span class="token operator">:</span> table<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">!=</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">/*
                 1、遍历以该数组元素为首的链表
                 2、转移链表时，因是单链表，故要保存下1个结点，否则转移后链表会断开
                 */</span>
                <span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> next <span class="token operator">=</span> e<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>rehash<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span>hash <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token operator">==</span> e<span class="token punctuation">.</span>key <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> <span class="token function">hash</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                 <span class="token comment">//重新计算每个元素的存储位置</span>
                <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token function">indexFor</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>hash<span class="token punctuation">,</span> newCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
                
                <span class="token comment">//这个地方暂时先放着，后面讲死循环链表的时候会讲到</span>
                e<span class="token punctuation">.</span>next <span class="token operator">=</span> newTable<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token comment">//讲当前元素，赋给新数组的对应下标位置。</span>
                newTable<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> e<span class="token punctuation">;</span>
                <span class="token comment">// 访问下1个Entry链上的元素，如此不断循环，直到遍历完该链表上的所有节点</span>
                e <span class="token operator">=</span> next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>大概画了一下图：</p><p><img src="`+c+'" alt="Alt text"></p><p><img src="'+o+'" alt="Alt text"></p><p><img src="'+l+'" alt="Alt text"></p><p><img src="'+i+`" alt="Alt text"></p><p>1、在扩容<code>resize（）</code>过程中，在将旧数组上的数据转移到新数组上时，转移操作就是按旧链表的正序遍历链表、在新链表的头部依次插入，即在转移数据、扩容后，容易出现链表逆序的情况。</p><p>2、设重新计算存储位置后不变，即扩容前 1-&gt;2-&gt;3，扩容后 = 3-&gt;2-&gt;1</p><p>3、此时若（多线程）并发执行 put（）操作，一旦出现扩容情况，则 <strong>容易出现环形链表</strong>，从而在获取数据、遍历链表时形成死循环（Infinite Loop），即<strong>线程不安全</strong>。</p><h2 id="createentry" tabindex="-1"><a class="header-anchor" href="#createentry" aria-hidden="true">#</a> createEntry()</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">createEntry</span><span class="token punctuation">(</span><span class="token keyword">int</span> hash<span class="token punctuation">,</span> <span class="token class-name">K</span> key<span class="token punctuation">,</span> <span class="token class-name">V</span> value<span class="token punctuation">,</span> <span class="token keyword">int</span> bucketIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> e <span class="token operator">=</span> table<span class="token punctuation">[</span>bucketIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>
        table<span class="token punctuation">[</span>bucketIndex<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>hash<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        size<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">//这里才进行size++</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>举个例子说明流程：</p><p>1、假设hashmap中容量为16，加载因为为0.75 = 12。</p><p>2、此时hashmap中有11个元素，也就是size == 11，在你添加第12个元素时。看代码，此时size还是11，所以并不会扩容。只有在你调用完<code>createEntry()</code>,<code>size++</code>执行完毕后，size变成12。</p><p>3、在添加第13个元素时，才会进入if逻辑里进行先扩容。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>	<span class="token keyword">void</span> <span class="token function">addEntry</span><span class="token punctuation">(</span><span class="token keyword">int</span> hash<span class="token punctuation">,</span> <span class="token class-name">K</span> key<span class="token punctuation">,</span> <span class="token class-name">V</span> value<span class="token punctuation">,</span> <span class="token keyword">int</span> bucketIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>size <span class="token operator">&gt;=</span> threshold<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">!=</span> table<span class="token punctuation">[</span>bucketIndex<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">resize</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> table<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
            hash <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">!=</span> key<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token function">hash</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
            bucketIndex <span class="token operator">=</span> <span class="token function">indexFor</span><span class="token punctuation">(</span>hash<span class="token punctuation">,</span> table<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">createEntry</span><span class="token punctuation">(</span>hash<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> bucketIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="扩容出现的死循环链表" tabindex="-1"><a class="header-anchor" href="#扩容出现的死循环链表" aria-hidden="true">#</a> 扩容出现的死循环链表</h1><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token doc-comment comment">/**
   * 作用：将旧数组上的数据（键值对）转移到新table中，从而完成扩容
   * 过程：按旧链表的正序遍历链表、在新链表的头部依次插入。但是这样会导致扩容完成后，链表逆序
   */</span> 	
<span class="token keyword">void</span> <span class="token function">transfer</span><span class="token punctuation">(</span><span class="token class-name">Entry</span><span class="token punctuation">[</span><span class="token punctuation">]</span> newTable<span class="token punctuation">,</span> <span class="token keyword">boolean</span> rehash<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> newCapacity <span class="token operator">=</span> newTable<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token comment">//通过遍历 旧数组，将旧数组上的数据（键值对）转移到新数组中</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> e <span class="token operator">:</span> table<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">!=</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">/*
                 1、遍历以该数组元素为首的链表
                 2、转移链表时，因是单链表，故要保存下1个结点，否则转移后链表会断开
                 */</span>
                <span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> next <span class="token operator">=</span> e<span class="token punctuation">.</span>next<span class="token punctuation">;</span> <span class="token comment">//pos_1</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>rehash<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span>hash <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token operator">==</span> e<span class="token punctuation">.</span>key <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> <span class="token function">hash</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                 <span class="token comment">//重新计算每个元素的存储位置</span>
                <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token function">indexFor</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>hash<span class="token punctuation">,</span> newCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
                
                <span class="token comment">//这个地方暂时先放着，后面讲死循环链表的时候会讲到</span>
                e<span class="token punctuation">.</span>next <span class="token operator">=</span> newTable<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token comment">//讲当前元素，赋给新数组的对应下标位置。</span>
                newTable<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> e<span class="token punctuation">;</span>
                <span class="token comment">// 访问下1个Entry链上的元素，如此不断循环，直到遍历完该链表上的所有节点</span>
                e <span class="token operator">=</span> next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="前置条件" tabindex="-1"><a class="header-anchor" href="#前置条件" aria-hidden="true">#</a> 前置条件</h2><p>1、为了演示方便，初始状态时，hashmap容量为2，加载因子为默认的0.75.</p><h2 id="步骤1" tabindex="-1"><a class="header-anchor" href="#步骤1" aria-hidden="true">#</a> 步骤1</h2><p><strong>hashmap初始状态</strong></p><p><img src="`+u+`" alt="Alt text"></p><p>1、此时只有一个元素，扩容阈值为2*0.75 = 1.5。</p><p>2、此时假设有两个线程，线程a和线程b同时put，并且都没有进入到addEntry()方法里的if逻辑【因为此时size都没有++，size == 1 1 &lt; 1.5 所以if判断不成立。】。两个线程都准备同时调用createEntry()方法。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>	<span class="token keyword">void</span> <span class="token function">addEntry</span><span class="token punctuation">(</span><span class="token keyword">int</span> hash<span class="token punctuation">,</span> <span class="token class-name">K</span> key<span class="token punctuation">,</span> <span class="token class-name">V</span> value<span class="token punctuation">,</span> <span class="token keyword">int</span> bucketIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>size <span class="token operator">&gt;=</span> threshold<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">!=</span> table<span class="token punctuation">[</span>bucketIndex<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">resize</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> table<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
            hash <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">!=</span> key<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token function">hash</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
            bucketIndex <span class="token operator">=</span> <span class="token function">indexFor</span><span class="token punctuation">(</span>hash<span class="token punctuation">,</span> table<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">createEntry</span><span class="token punctuation">(</span>hash<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> bucketIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、线程a put的是 e3 = &lt;k3,v3&gt;。线程b put的是e2 = &lt;k2,v2&gt;。两个都调用了<code>createEntry()</code>方法。</p><h2 id="步骤2" tabindex="-1"><a class="header-anchor" href="#步骤2" aria-hidden="true">#</a> 步骤2</h2><p><strong>两个线程调用完毕之后，hashmap目前是这样的。</strong></p><p><img src="`+k+`" alt="Alt text"></p><p>此时size==3。下次再进行put的时候，<strong>addEntry()方法里的if判断就会成立</strong>。</p><h2 id="步骤3" tabindex="-1"><a class="header-anchor" href="#步骤3" aria-hidden="true">#</a> 步骤3</h2><p>1、接着，又来了两个线程，线程1和线程2。【假设线程1put的是e1，线程2put的是e0。其实也不用管它们两put的是谁】</p><p>2、两个线程都同时调用resize()方法，新数组已经扩容完毕，准备转移旧数组上的数据到新数组里。也就是准备调用resize()里的下面这个方法。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//5、将旧数组上的数据（键值对）转移到新table中，从而完成扩容
    transfer(newTable, initHashSeedAsNeeded(newCapacity));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>3、来看下此时内存里的状态</p><p><img src="`+d+'" alt="Alt text"></p><p><img src="'+r+`" alt="Alt text"></p><h2 id="步骤4" tabindex="-1"><a class="header-anchor" href="#步骤4" aria-hidden="true">#</a> 步骤4</h2><p>来看下源码【上面源码里有注释，这里把注释去掉】</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">transfer</span><span class="token punctuation">(</span><span class="token class-name">Entry</span><span class="token punctuation">[</span><span class="token punctuation">]</span> newTable<span class="token punctuation">,</span> <span class="token keyword">boolean</span> rehash<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> newCapacity <span class="token operator">=</span> newTable<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> e <span class="token operator">:</span> table<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">!=</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">//pos_1</span>
                <span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> next <span class="token operator">=</span> e<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>rehash<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span>hash <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token operator">==</span> e<span class="token punctuation">.</span>key <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> <span class="token function">hash</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token function">indexFor</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>hash<span class="token punctuation">,</span> newCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>   
                <span class="token comment">//pos_2</span>
                e<span class="token punctuation">.</span>next <span class="token operator">=</span> newTable<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token comment">//pos_3</span>
                newTable<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> e<span class="token punctuation">;</span>
                <span class="token comment">//pos_4</span>
                e <span class="token operator">=</span> next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1、假设线程1<strong>执行完</strong>代码pos_1位置后，暂时挂起。此时e == e2 e.next == e3</p><p>2、线程2直接<strong>扩容完毕</strong>，那么完成后的状态是这样【假设e2和e3还是hash到同一个位置】</p><p><img src="`+v+'" alt="Alt text"></p><p>3、线程1还是原来的状态</p><blockquote><p>强调一点：线程2已经扩容完毕</p></blockquote><h2 id="步骤5" tabindex="-1"><a class="header-anchor" href="#步骤5" aria-hidden="true">#</a> 步骤5</h2><p>目前两个线程里的新数组是这样的</p><p><img src="'+m+'" alt="Alt text"></p><p>为了方便后面观看，我画成这样。</p><p><img src="'+b+`" alt="Alt text"></p><h2 id="步骤6" tabindex="-1"><a class="header-anchor" href="#步骤6" aria-hidden="true">#</a> 步骤6</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">transfer</span><span class="token punctuation">(</span><span class="token class-name">Entry</span><span class="token punctuation">[</span><span class="token punctuation">]</span> newTable<span class="token punctuation">,</span> <span class="token keyword">boolean</span> rehash<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> newCapacity <span class="token operator">=</span> newTable<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> e <span class="token operator">:</span> table<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">!=</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">//pos_1</span>
                <span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> next <span class="token operator">=</span> e<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>rehash<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span>hash <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token operator">==</span> e<span class="token punctuation">.</span>key <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> <span class="token function">hash</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token function">indexFor</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>hash<span class="token punctuation">,</span> newCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>   
                <span class="token comment">//pos_2</span>
                e<span class="token punctuation">.</span>next <span class="token operator">=</span> newTable<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token comment">//pos_3</span>
                newTable<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> e<span class="token punctuation">;</span>
                <span class="token comment">//pos_4</span>
                e <span class="token operator">=</span> next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>之前说过：假设线程1<strong>执行完</strong>代码pos_1位置后，暂时挂起。此时e == e2 e.next == e3【也就是next == e3】</p></blockquote><p>1、线程1唤醒后，继续执行pos_2，pos_3，pos_4</p><p>2、执行pos_2：意思是e2的next指针指向了线程1的新hash表【也就是newTable1】，因为newTable1是新的所以为null，</p><p>所以e2.next = null。</p><p>3、执行pos_3：newTable1[3] = e2;</p><p>4、执行pos_4： e = e3;</p><p>也就变成了下面这个样子。</p><p><img src="`+y+`" alt="Alt text"></p><h2 id="步骤7" tabindex="-1"><a class="header-anchor" href="#步骤7" aria-hidden="true">#</a> 步骤7</h2><p>1、线程1继续执行循环</p><blockquote><p>注意之前强调过线程2已经扩容完毕，那么table就已经被指向了newTable2，也就是说第二次循环时，线程1所循环的table变量就是newTable2</p></blockquote><p>2、</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">transfer</span><span class="token punctuation">(</span><span class="token class-name">Entry</span><span class="token punctuation">[</span><span class="token punctuation">]</span> newTable<span class="token punctuation">,</span> <span class="token keyword">boolean</span> rehash<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> newCapacity <span class="token operator">=</span> newTable<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> e <span class="token operator">:</span> table<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">!=</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">//pos_1</span>
                <span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> next <span class="token operator">=</span> e<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>rehash<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span>hash <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token operator">==</span> e<span class="token punctuation">.</span>key <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> <span class="token function">hash</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token function">indexFor</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>hash<span class="token punctuation">,</span> newCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>   
                <span class="token comment">//pos_2</span>
                e<span class="token punctuation">.</span>next <span class="token operator">=</span> newTable<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token comment">//pos_3</span>
                newTable<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> e<span class="token punctuation">;</span>
                <span class="token comment">//pos_4</span>
                e <span class="token operator">=</span> next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1、执行pos_1：此时e == e3，那么next就是 e3.next，此时next == e2；</p><p>2、执行pos_2：经过第一轮循环，newTable1[3] == e2。那么执行完这行代码后，e3.next还是等于e2【相当于没执行】</p><p>3、执行pos_3：newTable1[3] == e3。</p><p>4、执行pos_4：e = e2</p><p>执行完，变成这样。</p><p><img src="`+h+'" alt="Alt text"></p><h2 id="步骤8" tabindex="-1"><a class="header-anchor" href="#步骤8" aria-hidden="true">#</a> 步骤8</h2><p>线程1执行第三次循环</p><p>1、执行pos_1：next = e2.next得到 next == null。</p><p>2、执行pos_2： <code>e.next = newTable[i]</code> e2.next == newTable1[3]。也就是相当于 e2.next == e3</p><p>3、执行pos_3： newTable[i] = e得到 newTable1[3] == e2</p><p><img src="'+g+`" alt="Alt text"></p><p>这样就形成了循环链表，再get()数据就会陷入死循环。</p><h1 id="get-源码" tabindex="-1"><a class="header-anchor" href="#get-源码" aria-hidden="true">#</a> get()源码</h1><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
   <span class="token keyword">public</span> <span class="token class-name">V</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Object</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>  

    <span class="token comment">//当key==null时，则到table[0]为头结点的链表去寻找对应 key == null的键</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>  
        <span class="token keyword">return</span> <span class="token function">getForNullKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 

    <span class="token comment">//当key ≠ null时，去获得对应值 </span>
    <span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> entry <span class="token operator">=</span> <span class="token function">getEntry</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
    <span class="token keyword">return</span> <span class="token keyword">null</span> <span class="token operator">==</span> entry <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> entry<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token punctuation">}</span>  



    <span class="token keyword">private</span> <span class="token class-name">V</span> <span class="token function">getForNullKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  

        <span class="token keyword">if</span> <span class="token punctuation">(</span>size <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>  
        <span class="token punctuation">}</span>  

        <span class="token comment">// 遍历以table[0]为头结点的链表，寻找 key==null 对应的值</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> e <span class="token operator">=</span> table<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span> e <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> e <span class="token operator">=</span> e<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>  

            <span class="token comment">// 从table[0]中取key==null的value值 </span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>key <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>  
                <span class="token keyword">return</span> e<span class="token punctuation">.</span>value<span class="token punctuation">;</span> 
        <span class="token punctuation">}</span>  
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
 

    <span class="token keyword">final</span> <span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> <span class="token function">getEntry</span><span class="token punctuation">(</span><span class="token class-name">Object</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>  

        <span class="token keyword">if</span> <span class="token punctuation">(</span>size <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>  
        <span class="token punctuation">}</span>  

        <span class="token comment">//根据key值，通过hash（）计算出对应的hash值</span>
        <span class="token keyword">int</span> hash <span class="token operator">=</span> <span class="token punctuation">(</span>key <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> <span class="token function">hash</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>  

        <span class="token comment">//根据hash值计算出对应的数组下标,遍历以该数组下标的数组元素为头结点的链表所有节点，</span>
        <span class="token comment">//寻找该key对应的值</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> e <span class="token operator">=</span> table<span class="token punctuation">[</span><span class="token function">indexFor</span><span class="token punctuation">(</span>hash<span class="token punctuation">,</span> table<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>  e <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>  e <span class="token operator">=</span> e<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>  

            <span class="token class-name">Object</span> k<span class="token punctuation">;</span>  
            <span class="token comment">// 若 hash值和key 相等，则证明该Entry = 我们要的键值对</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>hash <span class="token operator">==</span> hash <span class="token operator">&amp;&amp;</span>  
                <span class="token punctuation">(</span><span class="token punctuation">(</span>k <span class="token operator">=</span> e<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token operator">==</span> key <span class="token operator">||</span> <span class="token punctuation">(</span>key <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> key<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  
                <span class="token keyword">return</span> e<span class="token punctuation">;</span>  
        <span class="token punctuation">}</span>  
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,133),x=[f];function _(A,E){return s(),a("div",null,x)}const T=n(w,[["render",_],["__file","HashMap-JDK7yuanmajiangjie.html.vue"]]);export{T as default};
