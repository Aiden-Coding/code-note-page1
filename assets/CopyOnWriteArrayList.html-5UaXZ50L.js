import{_ as l,r as o,o as i,c as r,a,b as n,d as s,w as e,e as p}from"./app-GjP6hEVt.js";const u="/code-note-page1/assets/image-55-ueX6DUUz.png",d={},k=a("h1",{id:"第二十三节-并发容器-copyonwritearraylist",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#第二十三节-并发容器-copyonwritearraylist","aria-hidden":"true"},"#"),n(" 第二十三节：并发容器 CopyOnWriteArrayList")],-1),v=a("code",null,"Collections.synchronizedList()",-1),m=a("p",null,"于是，Doug Lea 大师为我们提供了一个并发版本的 ArrayList——CopyOnWriteArrayList。",-1),y=a("p",null,"CopyOnWriteArrayList 是线程安全的，可以在多线程环境下使用。CopyOnWriteArrayList 遵循写时复制的原则，每当对列表进行修改（例如添加、删除或更改元素）时，都会创建列表的一个新副本，这个新副本会替换旧的列表，而对旧列表的所有读取操作仍然可以继续。",-1),b=a("p",null,"由于在修改时创建了新的副本，所以读取操作不需要锁定。这使得在多读取者和少写入者的情况下读取操作非常高效。当然，由于每次写操作都会创建一个新的数组副本，所以会增加存储和时间的开销。如果写操作非常频繁，性能会受到影响。",-1),h=a("h2",{id:"什么是-copyonwrite",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#什么是-copyonwrite","aria-hidden":"true"},"#"),n(" 什么是 CopyOnWrite")],-1),g=a("p",null,[n("但是，读写锁也存在一些问题，比如说在写锁执行后，读线程会被阻塞，直到写锁被释放后读线程才有机会获取到锁从而读到最新的数据，站在"),a("strong",null,"读线程的角度来看，读线程在任何时候都能获取到最新的数据，满足数据实时性"),n("。")],-1),_=a("p",null,[n("而 CopyOnWriteArrayList 是通过 Copy-On-Write(COW)，即写时复制的思想来通过延时更新的策略实现数据的最终一致性，并且能够保证读线程间不阻塞。当然，"),a("strong",null,"这要牺牲数据的实时性"),n("。")],-1),f=a("p",null,"通俗的讲，CopyOnWrite 就是当我们往一个容器添加元素的时候，不直接往容器中添加，而是先复制出一个新的容器，然后在新的容器里添加元素，添加完之后，再将原容器的引用指向新的容器。多个线程在读的时候，不需要加锁，因为当前容器不会添加任何元素。",-1),A=p(`<h2 id="copyonwritearraylist原理" tabindex="-1"><a class="header-anchor" href="#copyonwritearraylist原理" aria-hidden="true">#</a> CopyOnWriteArrayList原理</h2><p>OK，接下来我们来看一下 CopyOnWriteArrayList 的源码。顾名思义，实际上 CopyOnWriteArrayList 内部维护的就是一个数组：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/** The array, accessed only via getArray/setArray. */</span>
<span class="token keyword">private</span> <span class="token keyword">transient</span> <span class="token keyword">volatile</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,3),E=p(`<h3 id="get-方法" tabindex="-1"><a class="header-anchor" href="#get-方法" aria-hidden="true">#</a> get 方法</h3><p>get 方法的源码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">E</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token function">getArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * Gets the array.  Non-private so as to also be accessible
 * from CopyOnWriteArraySet class.
 */</span>
<span class="token keyword">final</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> array<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">private</span> <span class="token class-name">E</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token class-name">E</span><span class="token punctuation">)</span> a<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),w=p(`<h3 id="add-方法" tabindex="-1"><a class="header-anchor" href="#add-方法" aria-hidden="true">#</a> add 方法</h3><p>add 方法的源码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">E</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token class-name">ReentrantLock</span> lock <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lock<span class="token punctuation">;</span>
	  <span class="token comment">//1. 使用Lock,保证写线程在同一时刻只有一个</span>
    lock<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">try</span> <span class="token punctuation">{</span>
				<span class="token comment">//2. 获取旧数组引用</span>
        <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> elements <span class="token operator">=</span> <span class="token function">getArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> elements<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

				<span class="token comment">//3. 创建新的数组，并将旧数组的数据复制到新数组中</span>
        <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> newElements <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOf</span><span class="token punctuation">(</span>elements<span class="token punctuation">,</span> len <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

				<span class="token comment">//4. 往新数组中添加新的数据</span>
				newElements<span class="token punctuation">[</span>len<span class="token punctuation">]</span> <span class="token operator">=</span> e<span class="token punctuation">;</span>

				<span class="token comment">//5. 将旧数组引用指向新的数组</span>
        <span class="token function">setArray</span><span class="token punctuation">(</span>newElements<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
        lock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>add 方法的逻辑也比较容易理解，需要注意这么几点：</p>`,4),C=p(`<p>02、通过调用 <code>getArray()</code> 方法获取旧的数组。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">final</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> array<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>03、然后创建一个新的数组，把旧的数组复制过来，然后在新的数组中添加数据，再将新的数组赋值给旧的数组引用。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">setArray</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    array <span class="token operator">=</span> a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据 volatile 的 happens-before 规则，所以这个更改对所有线程是立即可见的。</p><p>04、最后，在 finally 块中释放锁，以便其他线程可以访问和修改列表。</p><h2 id="copyonwritearraylist-的使用" tabindex="-1"><a class="header-anchor" href="#copyonwritearraylist-的使用" aria-hidden="true">#</a> CopyOnWriteArrayList 的使用</h2><p>CopyOnWriteArrayList 的使用非常简单，和 ArrayList 的使用几乎一样，只是在创建对象的时候需要使用 CopyOnWriteArrayList 的构造方法，如下所示：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">CopyOnWriteArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CopyOnWriteArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;element1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;element2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> element <span class="token operator">:</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="copyonwritearraylist-的缺点" tabindex="-1"><a class="header-anchor" href="#copyonwritearraylist-的缺点" aria-hidden="true">#</a> CopyOnWriteArrayList 的缺点</h2><p>CopyOnWrite 容器有很多优点，但是同时也存在两个问题，即内存占用问题和数据一致性问题。所以在开发的时候需要特别注意。</p><ol><li><strong>内存占用问题</strong>：因为 CopyOnWrite 的写时复制机制，在进行写操作的时候，内存里会同时有两个对象，旧的对象和新写入的对象，分析 add 方法的时候大家都看到了。</li></ol><p>如果这些对象占用的内存比较大，比如说 200M 左右，那么再写入 100M 数据进去，内存就会占用 600M，那么这时候就会造成频繁的 minor GC 和 major GC。</p>`,13),L=a("strong",null,"数据一致性问题",-1),O=p(`<p>我们来比较一下 CopyOnWrite 和读写锁。</p><p>相同点：</p><ol><li>两者都是通过读写分离的思想来实现的；</li><li>读线程间是互不阻塞的</li></ol><p>不同点：</p><p>为了实现数据实时性，在写锁被获取后，读线程会阻塞；或者当读锁被获取后，写线程会阻塞，从而解决“脏读”的问题。而 CopyOnWrite 对数据的更新是写时复制的，因此读线程是延时感知的，单不会存在阻塞的情况。</p><p>对这一点从文字上可能比较难理解，我们通过 debug 来看一下，add 方法核心代码为：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token number">1.</span>Object<span class="token punctuation">[</span><span class="token punctuation">]</span> elements <span class="token operator">=</span> <span class="token function">getArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">2.</span><span class="token keyword">int</span> len <span class="token operator">=</span> elements<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
<span class="token number">3.</span>Object<span class="token punctuation">[</span><span class="token punctuation">]</span> newElements <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOf</span><span class="token punctuation">(</span>elements<span class="token punctuation">,</span> len <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">4.</span>newElements<span class="token punctuation">[</span>len<span class="token punctuation">]</span> <span class="token operator">=</span> e<span class="token punctuation">;</span>
<span class="token number">5.</span><span class="token function">setArray</span><span class="token punctuation">(</span>newElements<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假设 COW 的变化如下图所示：</p><p><img src="`+u+'" alt="Alt text"></p><p>数组中已有数据 1,2,3，现在写线程想往数组中添加数据 4，我们在第 5 行处打上断点，让写线程暂停。</p><p>此时，读线程依然会“不受影响”的从数组中读取数据，可是还是只能读到 1,2,3。</p><p><strong>如果读线程能够立即读到新添加的数据就叫数据实时性</strong>。当对第 5 行的断点放开后，读线程感知到了数据的变化，所以读到了完整的数据 1,2,3,4，这叫<strong>数据最终一致性</strong>，尽管有可能中间间隔了好几秒才感知到。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>CopyOnWriteArrayList 是一个线程安全的变体，它是 Java 的 ArrayList 类的并发版本。这个类的线程安全是通过一个简单但强大的想法实现的：每当列表修改时，就创建列表的一个新副本。</p><p>CopyOnWriteArrayList 适用于读操作远远大于写操作的场景，比如说缓存。因为 CopyOnWriteArrayList 采用写时复制的思想，所以写操作的性能较低，因此不适合写操作频繁的场景。</p><p>CopyOnWriteArrayList 也存在一些缺点，比如说内存占用问题和数据一致性问题，所以在开发的时候需要特别注意。</p>',16),B={href:"https://github.com/CL0610/Java-concurrency/blob/master/20.%E5%B9%B6%E5%8F%91%E5%AE%B9%E5%99%A8%E4%B9%8BArrayBlockingQueue%E5%92%8CLinkedBlockingQueue%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86%E8%AF%A6%E8%A7%A3/%E5%B9%B6%E5%8F%91%E5%AE%B9%E5%99%A8%E4%B9%8BArrayBlockingQueue%E5%92%8CLinkedBlockingQueue%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86%E8%AF%A6%E8%A7%A3.md",target:"_blank",rel:"noopener noreferrer"},W=a("hr",null,null,-1);function j(x,J){const t=o("RouterLink"),c=o("ExternalLinkIcon");return i(),r("div",null,[k,a("p",null,[n("学过 "),s(t,{to:"/toBeBetterJavaer/collection/arraylist.html"},{default:e(()=>[n("ArrayList")]),_:1}),n(" 的小伙伴应该记得，ArrayList 是一个线程不安全的容器，如果在多线程环境下使用，需要手动加锁，或者使用 "),v,n(" 方法将其转换为线程安全的容器。")]),a("p",null,[n("否则，将会出现 "),s(t,{to:"/toBeBetterJavaer/collection/fail-fast.html"},{default:e(()=>[n("ConcurrentModificationException")]),_:1}),n(" 异常。")]),m,y,b,h,a("p",null,[n("大家应该还记得读写锁 "),s(t,{to:"/toBeBetterJavaer/thread/ReentrantReadWriteLock.html"},{default:e(()=>[n("ReentrantReadWriteLock")]),_:1}),n(" 吧？读写锁是通过读写分离的思想来实现的，即读写锁将读写操作分别加锁，从而实现读写操作的并发执行。")]),g,_,f,a("p",null,[n("我们在介绍"),s(t,{to:"/toBeBetterJavaer/thread/map.html"},{default:e(()=>[n("并发容器")]),_:1}),n("的时候，也曾提到过，相信大家都还有印象。")]),A,a("p",null,[n("该数组被 "),s(t,{to:"/toBeBetterJavaer/thread/volatile.html"},{default:e(()=>[n("volatile")]),_:1}),n(" 修饰，能够保证数据的内存可见性。")]),E,a("p",null,[n("get 方法的实现非常简单，几乎就是一个“单线程”，没有添加任何的线程安全控制，没有"),s(t,{to:"/toBeBetterJavaer/thread/lock.html"},{default:e(()=>[n("加锁")]),_:1}),n("也没有 "),s(t,{to:"/toBeBetterJavaer/thread/cas.html"},{default:e(()=>[n("CAS")]),_:1}),n(" 操作，原因就是所有的读线程只会读取容器中的数据，并不会进行修改。")]),w,a("p",null,[n("01、采用 "),s(t,{to:"/toBeBetterJavaer/thread/reentrantLock.html"},{default:e(()=>[n("ReentrantLock")]),_:1}),n(" 保证同一时刻只有一个写线程正在进行数组的复制；")]),C,a("ol",null,[a("li",null,[L,n("：CopyOnWrite 容器只能保证数据的最终一致性，不能保证数据的实时一致性。所以如果你希望写入的的数据，马上能读到，请不要使用 CopyOnWrite 容器，最好通过 "),s(t,{to:"/toBeBetterJavaer/thread/ReentrantReadWriteLock.html"},{default:e(()=>[n("ReentrantReadWriteLock")]),_:1}),n(" 自定义一个的列表。")])]),O,a("blockquote",null,[a("p",null,[n("编辑：沉默王二，部分内容来自于CL0610的 GitHub 仓库"),a("a",B,[n("https://github.com/CL0610/Java-concurrency"),s(c)]),n("。")])]),W])}const F=l(d,[["render",j],["__file","CopyOnWriteArrayList.html.vue"]]);export{F as default};
