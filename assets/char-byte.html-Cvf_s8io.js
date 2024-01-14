import{_ as o,r as c,o as l,c as i,a as s,b as n,d as t,w as e,e as p}from"./app-GjP6hEVt.js";const u="/code-note-page1/assets/image-6-mCSpLEuO.png",r="/code-note-page1/assets/image-7-1hhdKd2Z.png",d={},k=s("h1",{id:"_7-6-转换流",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_7-6-转换流","aria-hidden":"true"},"#"),n(" 7.6 转换流")],-1),m=p('<p>转换流主要有两种类型：InputStreamReader 和 OutputStreamWriter。</p><p>InputStreamReader 将一个字节输入流转换为一个字符输入流，而 OutputStreamWriter 将一个字节输出流转换为一个字符输出流。它们使用指定的字符集将字节流和字符流之间进行转换。常用的字符集包括 UTF-8、GBK、ISO-8859-1 等。</p><p><img src="'+u+`" alt="Alt text"></p><h3 id="_01、编码和解码" tabindex="-1"><a class="header-anchor" href="#_01、编码和解码" aria-hidden="true">#</a> 01、编码和解码</h3><p>在计算机中，数据通常以二进制形式存储和传输。</p><ul><li>编码就是将原始数据（比如说文本、图像、视频、音频等）转换为二进制形式。</li><li>解码就是将二进制数据转换为原始数据，是一个反向的过程。</li></ul><p>常见的编码和解码方式有很多，举几个例子：</p><ul><li>ASCII 编码和解码：在计算机中，常常使用 ASCII 码来表示字符，如键盘上的字母、数字和符号等。例如，字母 A 对应的 ASCII 码是 65，字符 + 对应的 ASCII 码是 43。</li><li>Unicode 编码和解码：Unicode 是一种字符集，支持多种语言和字符集。在计算机中，Unicode 可以使用 UTF-8、UTF-16 等编码方式将字符转换为二进制数据进行存储和传输。</li><li>Base64 编码和解码：Base64 是一种将二进制数据转换为 ASCII 码的编码方式。它将 3 个字节的二进制数据转换为 4 个 ASCII 字符，以便在网络传输中使用。例如，将字符串 &quot;Hello, world!&quot; 进行 Base64 编码后，得到的结果是 &quot;SGVsbG8sIHdvcmxkIQ==&quot;。</li><li>图像编码和解码：在图像处理中，常常使用 JPEG、PNG、GIF 等编码方式将图像转换为二进制数据进行存储和传输。在解码时，可以将二进制数据转换为图像，以便显示或处理。</li><li>视频编码和解码：在视频处理中，常常使用 H.264、AVC、MPEG-4 等编码方式将视频转换为二进制数据进行存储和传输。在解码时，可以将二进制数据转换为视频，以便播放或处理。</li></ul><p>简单一点说就是：</p><ul><li>编码：字符(能看懂的)--&gt;字节(看不懂的)</li><li>解码：字节(看不懂的)--&gt;字符(能看懂的)</li></ul><p>我用代码来表示一下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token string">&quot;沉默王二&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> charsetName <span class="token operator">=</span> <span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 编码</span>
<span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token class-name">Charset</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span>charsetName<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;编码: &quot;</span> <span class="token operator">+</span> bytes<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 解码</span>
<span class="token class-name">String</span> decodedStr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>bytes<span class="token punctuation">,</span> <span class="token class-name">Charset</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span>charsetName<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;解码: &quot;</span> <span class="token operator">+</span> decodedStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，首先定义了一个字符串变量 str 和一个字符集名称 charsetName。然后，使用 <code>Charset.forName()</code> 方法获取指定字符集的 Charset 对象。接着，使用字符串的 getBytes() 方法将字符串编码为指定字符集的字节数组。最后，使用 <code>new String()</code> 方法将字节数组解码为字符串。</p><p>需要注意的是，在编码和解码过程中，要保证使用相同的字符集，以便正确地转换数据。</p><h3 id="_02、字符集" tabindex="-1"><a class="header-anchor" href="#_02、字符集" aria-hidden="true">#</a> 02、字符集</h3><p>Charset：字符集，是一组字符的集合，每个字符都有一个唯一的编码值，也称为码点。</p><p>常见的字符集包括 ASCII、Unicode 和 GBK，而 Unicode 字符集包含了多种编码方式，比如说 UTF-8、UTF-16。</p><p><img src="`+r+`" alt="Alt text"></p><h4 id="ascii-字符集" tabindex="-1"><a class="header-anchor" href="#ascii-字符集" aria-hidden="true">#</a> <strong>ASCII 字符集</strong></h4><p>ASCII（American Standard Code for Information Interchange，美国信息交换标准代码）字符集是一种最早的字符集，包含 128 个字符，其中包括控制字符、数字、英文字母以及一些标点符号。ASCII 字符集中的每个字符都有一个唯一的 7 位二进制编码（由 0 和 1 组成），可以表示为十进制数或十六进制数。</p><p>ASCII 编码方式是一种固定长度的编码方式，每个字符都使用 7 位二进制编码来表示。ASCII 编码只能表示英文字母、数字和少量的符号，不能表示其他语言的文字和符号，因此在全球范围内的应用受到了很大的限制。</p><h4 id="unicode-字符集" tabindex="-1"><a class="header-anchor" href="#unicode-字符集" aria-hidden="true">#</a> Unicode 字符集</h4><p>Unicode 包含了世界上几乎所有的字符，用于表示人类语言、符号和表情等各种信息。Unicode 字符集中的每个字符都有一个唯一的码点（code point），用于表示该字符在字符集中的位置，可以用十六进制数表示。</p><p>为了在计算机中存储和传输 Unicode 字符集中的字符，需要使用一种编码方式。UTF-8、UTF-16 和 UTF-32 都是 Unicode 字符集的编码方式，用于将 Unicode 字符集中的字符转换成字节序列，以便于存储和传输。它们的差别在于使用的字节长度不同。</p><ul><li>UTF-8 是一种可变长度的编码方式，对于 ASCII 字符（码点范围为 <code>0x00~0x7F</code>），使用一个字节表示，对于其他 Unicode 字符，使用两个、三个或四个字节表示。UTF-8 编码方式被广泛应用于互联网和计算机领域，因为它可以有效地压缩数据，适用于网络传输和存储。</li><li>UTF-16 是一种固定长度的编码方式，对于基本多语言平面（Basic Multilingual Plane，Unicode 字符集中的一个码位范围，包含了世界上大部分常用的字符，总共包含了超过 65,000 个码位）中的字符（码点范围为 <code>0x0000~0xFFFF</code>），使用两个字节表示，对于其他 Unicode 字符，使用四个字节表示。</li><li>UTF-32 是一种固定长度的编码方式，对于所有 Unicode 字符，使用四个字节表示。</li></ul><h4 id="gbk-字符集" tabindex="-1"><a class="header-anchor" href="#gbk-字符集" aria-hidden="true">#</a> GBK 字符集</h4><p>GBK 包含了 GB2312 字符集中的字符，同时还扩展了许多其他汉字字符和符号，共收录了 21,913 个字符。GBK 采用双字节编码方式，每个汉字占用 2 个字节，其中高字节和低字节都使用了 8 位，因此 GBK 编码共有 <code>2^16=65536</code> 种可能的编码，其中大部分被用于表示汉字字符。</p><p>GBK 编码是一种变长的编码方式，对于 ASCII 字符（码位范围为 0x00 到 0x7F），使用一个字节表示，对于其他字符，使用两个字节表示。GBK 编码中的每个字节都可以采用 0x81 到 0xFE 之间的任意一个值，因此可以表示 <code>2^15=32768</code> 个字符。为了避免与 ASCII 码冲突，GBK 编码的第一个字节采用了 0x81 到 0xFE 之间除了 0x7F 的所有值，第二个字节采用了 0x40 到 0x7E 和 0x80 到 0xFE 之间的所有值，共 94 个值。</p><p>GB2312 的全名是《信息交换用汉字编码字符集基本集》，也被称为“国标码”。采用了双字节编码方式，每个汉字占用 2 个字节，其中高字节和低字节都使用了 8 位，因此 GB2312 编码共有 <code>2^16=65536</code> 种可能的编码，其中大部分被用于表示汉字字符。GB2312 编码中的每个字节都可以采用 0xA1 到 0xF7 之间的任意一个值，因此可以表示 126 个字符。</p><p>GB2312 是一个较为简单的字符集，只包含了常用的汉字和符号，因此对于一些较为罕见的汉字和生僻字，GB2312 不能满足需求，现在已经逐渐被 GBK、GB18030 等字符集所取代。</p><p>GB18030 是最新的中文码表。收录汉字 70244 个，采用多字节编码，每个字可以由 1 个、2 个或 4 个字节组成。支持中国国内少数民族的文字，同时支持繁体汉字以及日韩汉字等。</p><h3 id="_03、乱码" tabindex="-1"><a class="header-anchor" href="#_03、乱码" aria-hidden="true">#</a> 03、乱码</h3><p>当使用不同的编码方式读取或者写入文件时，就会出现乱码问题，来看示例。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token string">&quot;沉默王二！&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将字符串按GBK编码方式保存到文件中</span>
    <span class="token class-name">OutputStreamWriter</span> out <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OutputStreamWriter</span><span class="token punctuation">(</span>
            <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token string">&quot;logs/test_utf8.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;GBK&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    out<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
    out<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">FileReader</span> fileReader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token string">&quot;logs/test_utf8.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> read<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>read <span class="token operator">=</span> fileReader<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span>read<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    fileReader<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例代码中，首先定义了一个包含中文字符的字符串，然后将该字符串按 GBK 编码方式保存到文件中，接着将文件按默认编码方式（UTF-8）读取，并显示内容。此时就会出现乱码问题，显示为“��Ĭ������”。</p><p>这是因为文件中的 GBK 编码的字符在使用 UTF-8 编码方式解析时无法正确解析，从而导致出现乱码问题。</p><p>那如何才能解决乱码问题呢？</p><p>这就引出我们今天的主角了——转换流。</p><h3 id="_04、inputstreamreader" tabindex="-1"><a class="header-anchor" href="#_04、inputstreamreader" aria-hidden="true">#</a> 04、InputStreamReader</h3><p><code>java.io.InputStreamReader</code> 是 Reader 类的子类。它的作用是将字节流（InputStream）转换为字符流（Reader），同时支持指定的字符集编码方式，从而实现字符流与字节流之间的转换。</p><h4 id="_1-构造方法" tabindex="-1"><a class="header-anchor" href="#_1-构造方法" aria-hidden="true">#</a> 1）构造方法</h4><ul><li><code>InputStreamReader(InputStream in)</code>: 创建一个使用默认字符集的字符流。</li><li><code>InputStreamReader(InputStream in, String charsetName)</code>: 创建一个指定字符集的字符流。</li></ul><p>代码示例如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">InputStreamReader</span> isr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">&quot;in.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">InputStreamReader</span> isr2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">&quot;in.txt&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">,</span> <span class="token string">&quot;GBK&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-解决编码问题" tabindex="-1"><a class="header-anchor" href="#_2-解决编码问题" aria-hidden="true">#</a> 2）解决编码问题</h4><p>下面是一个使用 InputStreamReader 解决乱码问题的示例代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token string">&quot;沉默王二！&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将字符串按GBK编码方式保存到文件中</span>
    <span class="token class-name">OutputStreamWriter</span> outUtf8 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OutputStreamWriter</span><span class="token punctuation">(</span>
            <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token string">&quot;logs/test_utf8.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;GBK&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    outUtf8<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
    outUtf8<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 将字节流转换为字符流，使用GBK编码方式</span>
    <span class="token class-name">InputStreamReader</span> isr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">&quot;logs/test_utf8.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;GBK&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 读取字符流</span>
    <span class="token keyword">int</span> c<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>c <span class="token operator">=</span> isr<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    isr<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于使用了 InputStreamReader 对字节流进行了编码方式的转换，因此在读取字符流时就可以正确地解析出中文字符，避免了乱码问题。</p><h3 id="_05、outputstreamwriter" tabindex="-1"><a class="header-anchor" href="#_05、outputstreamwriter" aria-hidden="true">#</a> 05、OutputStreamWriter</h3><p><code>java.io.OutputStreamWriter</code> 是 Writer 的子类，字面看容易误以为是转为字符流，其实是将字符流转换为字节流，是字符流到字节流的桥梁。</p><ul><li><code>OutputStreamWriter(OutputStream in)</code>: 创建一个使用默认字符集的字符流。</li><li><code>OutputStreamWriter(OutputStream in, String charsetName)</code>：创建一个指定字符集的字符流。</li></ul><p>代码示例如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">OutputStreamWriter</span> isr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OutputStreamWriter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token string">&quot;a.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">OutputStreamWriter</span> isr2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OutputStreamWriter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token string">&quot;b.txt&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">,</span> <span class="token string">&quot;GBK&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,53),v=p(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token comment">// 从文件读取字节流，使用UTF-8编码方式</span>
    <span class="token class-name">FileInputStream</span> fis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">&quot;test.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 将字节流转换为字符流，使用UTF-8编码方式</span>
    <span class="token class-name">InputStreamReader</span> isr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span>fis<span class="token punctuation">,</span> <span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 使用缓冲流包装字符流，提高读取效率</span>
    <span class="token class-name">BufferedReader</span> br <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span>isr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 创建输出流，使用UTF-8编码方式</span>
    <span class="token class-name">FileOutputStream</span> fos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token string">&quot;output.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 将输出流包装为转换流，使用UTF-8编码方式</span>
    <span class="token class-name">OutputStreamWriter</span> osw <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OutputStreamWriter</span><span class="token punctuation">(</span>fos<span class="token punctuation">,</span> <span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 使用缓冲流包装转换流，提高写入效率</span>
    <span class="token class-name">BufferedWriter</span> bw <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedWriter</span><span class="token punctuation">(</span>osw<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 读取输入文件的每一行，写入到输出文件中</span>
    <span class="token class-name">String</span> line<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>line <span class="token operator">=</span> br<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        bw<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span><span class="token punctuation">;</span>
        bw<span class="token punctuation">.</span><span class="token function">newLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 每行结束后写入一个换行符</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 关闭流</span>
    br<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    bw<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例代码中，首先使用 FileInputStream 从文件中读取字节流，使用 UTF-8 编码方式进行读取。然后，使用 InputStreamReader 将字节流转换为字符流，使用 UTF-8 编码方式进行转换。接着，使用 BufferedReader 包装字符流，提高读取效率。然后，创建 FileOutputStream 用于输出文件，使用 UTF-8 编码方式进行创建。接着，使用 OutputStreamWriter 将输出流转换为字符流，使用 UTF-8 编码方式进行转换。最后，使用 BufferedWriter 包装转换流，提高写入效率。</p><h3 id="_06、小结" tabindex="-1"><a class="header-anchor" href="#_06、小结" aria-hidden="true">#</a> 06、小结</h3><p>InputStreamReader 和 OutputStreamWriter 是将字节流转换为字符流或者将字符流转换为字节流。通常用于解决字节流和字符流之间的转换问题，可以将字节流以指定的字符集编码方式转换为字符流，或者将字符流以指定的字符集编码方式转换为字节流。</p><p>InputStreamReader 类的常用方法包括：</p><ul><li><code>read()</code>：从输入流中读取一个字符的数据。</li><li><code>read(char[] cbuf, int off, int len)</code>：从输入流中读取 len 个字符的数据到指定的字符数组 cbuf 中，从 off 位置开始存放。</li><li><code>ready()</code>：返回此流是否已准备好读取。</li><li><code>close()</code>：关闭输入流。</li></ul><p>OutputStreamWriter 类的常用方法包括：</p><ul><li><code>write(int c)</code>：向输出流中写入一个字符的数据。</li><li><code>write(char[] cbuf, int off, int len)</code>：向输出流中写入指定字符数组 cbuf 中的 len 个字符，从 off 位置开始。</li><li><code>flush()</code>：将缓冲区的数据写入输出流中。</li><li><code>close()</code>：关闭输出流。</li></ul><p>在使用转换流时，需要指定正确的字符集编码方式，否则可能会导致数据读取或写入出现乱码。</p><hr>`,10);function b(h,S){const a=c("RouterLink");return l(),i("div",null,[k,s("p",null,[n("转换流可以将一个"),t(a,{to:"/toBeBetterJavaer/io/stream.html"},{default:e(()=>[n("字节流")]),_:1}),n("包装成"),t(a,{to:"/toBeBetterJavaer/io/reader-writer.html"},{default:e(()=>[n("字符流")]),_:1}),n("，或者将一个字符流包装成字节流。这种转换通常用于处理文本数据，如读取文本文件或将数据从网络传输到应用程序。")]),m,s("p",null,[n("通常为了提高读写效率，我们会在转换流上再加一层"),t(a,{to:"/toBeBetterJavaer/io/buffer.html"},{default:e(()=>[n("缓冲流")]),_:1}),n("，来看代码示例：")]),v])}const w=o(d,[["render",b],["__file","char-byte.html.vue"]]);export{w as default};
