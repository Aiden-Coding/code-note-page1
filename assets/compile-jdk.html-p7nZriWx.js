import{_ as a,r as p,o as s,c as n,a as o,b as e,d as t,e as d}from"./app-GjP6hEVt.js";const r="/code-note-page1/assets/image-197-x81fSEuJ.png",i="/code-note-page1/assets/image-198-AyT8gUID.png",g="/code-note-page1/assets/image-199-8sTFitgF.png",l="/code-note-page1/assets/image-200-z5CqNUBa.png",h="/code-note-page1/assets/image-201-ZOSwxZOm.png",m="/code-note-page1/assets/image-202-Zdnsyx5-.png",_="/code-note-page1/assets/image-203-opp8GD9q.png",J="/code-note-page1/assets/image-204-PpiDb8-f.png",D="/code-note-page1/assets/image-205-K6ENkYBX.png",u="/code-note-page1/assets/image-206-cWNQ7mOr.png",K="/code-note-page1/assets/image-207-nYsLhg4Z.png",x="/code-note-page1/assets/image-208-al0DRwQl.png",k="/code-note-page1/assets/image-209-zw1SDqs9.png",b="/code-note-page1/assets/image-210-YBFzehhZ.png",f="/code-note-page1/assets/image-211-pKo5-gcg.png",j="/code-note-page1/assets/image-212-NzFaGvBw.png",v="/code-note-page1/assets/image-213-zqKrS5PJ.png",A="/code-note-page1/assets/image-214-YaunUft-.png",S="/code-note-page1/assets/image-215-YY5Cjvfq.png",q="/code-note-page1/assets/image-216-DFgGy5eu.png",B="/code-note-page1/assets/image-217-TuSph-Ts.png",C="/code-note-page1/assets/image-218-5d21qTNE.png",T="/code-note-page1/assets/image-219-bu9F5phF.png",w="/code-note-page1/assets/image-220-LBA8gkPG.png",Y="/code-note-page1/assets/image-221-x8yTRfCo.png",E="/code-note-page1/assets/image-222-GCRTO5Zl.png",N="/code-note-page1/assets/image-223-C6Dr18Eu.png",O="/code-note-page1/assets/image-224-1wTeKhDu.png",V={},y=d('<h1 id="自己编译jdk" tabindex="-1"><a class="header-anchor" href="#自己编译jdk" aria-hidden="true">#</a> 自己编译JDK</h1><p>很多小伙伴们做<code>Java</code>开发，天天写<code>Java</code>代码，肯定离不开<code>Java</code>基础环境：<code>JDK</code>，毕竟我们写好的<code>Java</code>代码也是跑在<code>JVM</code>虚拟机上。</p><p>一般来说，我们学<code>Java</code>之前，第一步就是安装<code>JDK</code>环境。这个简单啊，我们一般直接把<code>JDK</code>从官网下载下来，安装完成，配个环境变量就可以愉快地使用了。</p><p>不过话说回来，对于这个天天使用的东西，我们难道不好奇这玩意儿它到底是怎么由源码编译出来的吗？</p><p>带着这个原始的疑问，今天准备大干一场，自己动动呆萌的小手，来编译一个属于自己的<code>JDK</code>吧！</p><h2 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备" aria-hidden="true">#</a> 环境准备</h2><blockquote><p>首选说在前面的是，编译前的软件版本关系极其重要，自己在踩坑时，所出现的各种奇奇怪怪的问题几乎都和这个有关，后来版本匹配之后，就非常顺利了。</p></blockquote><p>我们来<strong>盘点和梳理</strong>一下编译一个JDK需要哪些环境和工具：</p><h3 id="_1、boot-jdk" tabindex="-1"><a class="header-anchor" href="#_1、boot-jdk" aria-hidden="true">#</a> <strong>1、boot JDK</strong></h3><p>我们要想编译<code>JDK</code>，首先自己本机必须提前已经安装有一个<code>JDK</code>，官方称之为<code>bootstrap JDK</code>（或者称为<code>boot JDK</code>）。</p><p>比如想编译<code>JDK 8</code>，那本机必须最起码得有一个<code>JDK 7</code>或者更新一点的版本；你想编译<code>JDK 11</code>，那就要求本机必须装有<code>JDK 10</code>或者<code>11</code>。</p><blockquote><p>所以鸡生蛋、蛋生鸡又来了...</p></blockquote><h3 id="_2、unix环境" tabindex="-1"><a class="header-anchor" href="#_2、unix环境" aria-hidden="true">#</a> <strong>2、Unix环境</strong></h3><p>编译<code>JDK</code>需要<code>Unix</code>环境的支持！</p><p>这一点在<code>Linux</code>操作系统和<code>macOS</code>操作系统上已经天然的保证了，而对于<code>Windows</code>兄弟来说稍微麻烦一点，需要通过使用<code>Cygwin</code>或者<code>MinGW/MSYS</code>这种软件来模拟。</p><p>就像官方所说：在<code>Linux</code>平台编译<code>JDK</code>一般问题最少，容易成功；<code>macOS</code>次之；<code>Windows</code>上则需要稍微多花点精力，问题可能也多一些。</p><p>究其本质原因，还是因为<code>Windows</code>毕竟不是一个<code>Unix-Like</code>内核的系统，毕竟很多软件的原始编译都离不开<code>Unix Toolkit</code>，所以相对肯定要麻烦一些。</p><h3 id="_3、编译器-编译工具链" tabindex="-1"><a class="header-anchor" href="#_3、编译器-编译工具链" aria-hidden="true">#</a> <strong>3、编译器/编译工具链</strong></h3><p><code>JDK</code>底层源码（尤其<code>JVM</code>虚拟机部分）很多都是<code>C++/C</code>写的，所以相关编译器也跑不掉。</p><p>一图胜千言，各平台上的编译器支持如下表所示，按平台选择即可：</p><p><img src="'+r+'" alt="Alt text"></p><h3 id="_4、其他工具" tabindex="-1"><a class="header-anchor" href="#_4、其他工具" aria-hidden="true">#</a> <strong>4、其他工具</strong></h3><p>典型的比如：</p><ul><li><code>Autoconf</code>：软件源码包的自动配置工具</li><li><code>Make</code>：编译构建工具</li><li><code>freetype</code>：一个免费的渲染库，<code>JDK</code>图形化部分的代码可能会用它</li></ul><p>好，环境盘点就到这里，接下来具体列一下我在编译<code>JDK 8</code>和<code>JDK 11</code>时分别用到的软件详细版本信息：</p><p><strong>编译JDK 8时：</strong></p><ul><li><code>操作系统</code>：macOS 10.11.6</li><li><code>boot JDK</code>：JDK 1.8.0 (build 1.8.0_201-b09)</li><li><code>Xcode版本</code>：8.2</li><li><code>编译器</code>：Version 8.0.0 (at /usr/bin/clang)</li></ul><p><strong>编译JDK 11时：</strong></p><ul><li><code>操作系统</code>：macOS 10.15.4</li><li><code>boot JDK</code>：JDK 11.0.7 (build 11.0.7+8-LTS)</li><li><code>Xcode版本</code>：11.5</li><li><code>编译器</code>：Version 11.0.3 (at /usr/bin/clang)</li></ul><p>大家在编译时如果过程中有很多问题，大概率少软件没装，或者软件版本不匹配，不要轻易放弃，需要耐心自查一下。</p><hr><h2 id="下载jdk源码" tabindex="-1"><a class="header-anchor" href="#下载jdk源码" aria-hidden="true">#</a> 下载JDK源码</h2><p>下载<code>JDK</code>源码其实有两种方式。</p><h3 id="方式一-通过mercurial工具下载" tabindex="-1"><a class="header-anchor" href="#方式一-通过mercurial工具下载" aria-hidden="true">#</a> <strong>方式一：通过Mercurial工具下载</strong></h3><p><code>Mercurial</code>可以理解为和<code>Git</code>一样，是另外一种代码管理工具，安装好之后就有一个<code>hg</code>命令可用。</p><p><img src="'+i+'" alt="Alt text"></p><p>而<code>OpenJDK</code>的源码已经提前托管到<code>http://hg.openjdk.java.net/</code>。</p><p>因此，比如下载<code>JDK 8</code>，可直接<code>hg clone</code>一下就行，和<code>git clone</code>一样：</p><p><code>hg clone [http://hg.openjdk.java.net/jd...](https://link.segmentfault.com/?enc=Snt8gNbYV7nkV3etTe%2FGJw%3D%3D.7IrUNCuc0HOEyvjCiCBOPMEBJ09bjLifieJi0I7iwtuuIeYUdSfCkC9c4D7z9wdq) </code></p><p>同理，下载<code>JDK 11</code>：</p><p><code>hg clone [http://hg.openjdk.java.net/jd...](https://link.segmentfault.com/?enc=BnHqAYXzfRcVfPgGgo1yOw%3D%3D.011np6%2FiCLuojl%2FBtvROkTVXr0PSdMYcYpAg2WUIE045BEFIrbCNAD42vWwIUb3d) </code></p><p>但是这种方式下载速度不是很快。</p><h3 id="方式二-直接下载打包好的源码包" tabindex="-1"><a class="header-anchor" href="#方式二-直接下载打包好的源码包" aria-hidden="true">#</a> <strong>方式二：直接下载打包好的源码包</strong></h3><p>下载地址：<code>https://jdk.java.net/</code></p><p><img src="'+g+'" alt="Alt text"></p><p>选择你想要的版本下载即可。</p><hr><h3 id="编译前的自动配置" tabindex="-1"><a class="header-anchor" href="#编译前的自动配置" aria-hidden="true">#</a> 编译前的自动配置</h3><p>源码包下载好，放到本地某个目录（建议路径纯英文，避免不必要的麻烦），解压之，然后进入源码根目录，执行：</p><p><code>sh configure </code></p><blockquote><p>当然这里运行的是默认配置项。</p></blockquote><p>这一步会进行一系列的自动配置工作，时间一般很快，最终如果能出现一下提示，那么很幸运，编译前的配置工作就完成了！</p><p>这里我给出我自己分别在配置<code>JDK 11</code>和<code>JDK 8</code>时候完成时的样子：</p><p><strong>配置JDK 8完成：</strong></p><p><img src="'+l+'" alt="Alt text"></p><p><strong>配置JDK 11完成：</strong></p><p><img src="'+h+'" alt="Alt text"></p><p><strong>注：</strong> 如果这一步出错，大概率是某个软件环境未装，或者即使装了，但版本不匹配，控制台打印日志里一般是会提醒的。</p><p>比如我在配置<code>JDK 8</code>的时候，就遇到了一个<code>errof：GCC compiler is required</code>的问题：</p><p><img src="'+m+'" alt="Alt text"></p><p>明明系统里已经有编译器，但还是报这个错误。通过后来修改 <code>jdk源码根目录/common/autoconf/generated-configure.sh</code>文件，将相关的两行代码注释后就配置通过了</p><p><img src="'+_+'" alt="Alt text"></p><p><img src="'+J+'" alt="Alt text"></p><p>配置完成，接下来开始执行真正的编译动作了！</p><hr><h2 id="真正的编译动作" tabindex="-1"><a class="header-anchor" href="#真正的编译动作" aria-hidden="true">#</a> 真正的编译动作</h2><p>我们这里进行的是全量编译，直接在我们下载的<code>JDK</code>源码根目录下执行如下命令即可：</p><p><code>make all </code></p><p>这一步编译需要一点时间，耐心等待一下即可。编译过程如果有错误，会终止编译，如果能看到如下两个画面，那么则恭喜你，自己编译<code>JDK</code>源码就已经通过了，可以搞一杯咖啡庆祝一下了。</p><p><strong>JDK 8编译完成：</strong></p><p><img src="'+D+'" alt="Alt text"></p><p><strong>JDK 11编译完成：</strong></p><p><img src="'+u+'" alt="Alt text"></p><p>从两张图的对比可以看出，编译<code>JDK 8</code>和<code>JDK 11</code>完成时在输出上还是有区别的。时间上的区别很大程度上来源于<code>JDK 11</code>的编译机配置要高不少。</p><hr><h2 id="验证成果" tabindex="-1"><a class="header-anchor" href="#验证成果" aria-hidden="true">#</a> 验证成果</h2><p><code>JDK</code>源码编译完成之后肯定会产生和输出很多产物，这也是我们所迫不及待想看到的。</p><p>由于<code>JDK 8</code>和<code>JDK 11</code>的源码包组织结构并不一样，所以输出东西的内容和位置也有区别。我们一一来盘点一下。</p><h3 id="_1、jdk-8的编译输出" tabindex="-1"><a class="header-anchor" href="#_1、jdk-8的编译输出" aria-hidden="true">#</a> <strong>1、JDK 8的编译输出</strong></h3><p>编译完成，<code>build</code>目录下会生成一个<code>macosx-x86_64-normal-server-release</code>目录，所有的编译成果均位于其中。</p><p>首先，编译出来的<code>Java</code>可执行程序可以在如下目录里找到：</p><p><code>jdk源码根目录/build/macosx-x86_64-normal-server-release/jdk/bin</code></p><p>进入该目录后，可以输入<code>./java -version</code>命令验证：</p><p><img src="'+K+'" alt="Alt text"></p><p>其次，编译生成的成品<code>JDK</code>套装，可以在目录</p><p><code>jdk源码根目录/build/macosx-x86_64-normal-server-release/images </code></p><p>下找到，如图所示：</p><p><img src="'+x+'" alt="Alt text"></p><p>其中：</p><ul><li><code>j2sdk-image</code>：编译生成的JDK</li><li><code>j2re-image</code>：编译生成的JRE</li></ul><p>进入<code>j2sdk-image</code>目录会发现，里面的内容和我们平时从网络上下载的成品<code>JDK</code>内容一致。</p><p><img src="'+k+'" alt="Alt text"></p><h3 id="_2、jdk-11的编译输出" tabindex="-1"><a class="header-anchor" href="#_2、jdk-11的编译输出" aria-hidden="true">#</a> <strong>2、JDK 11的编译输出</strong></h3><blockquote><p>JDK 11的源码目录组织方式和JDK 8本身就有区别，编译生成的产物和上面编译JDK 8的输出有一定区别，但也不大。</p></blockquote><p><code>JDK 11</code>编译完成，同样在<code>build</code>目录下会生成一个<code>macosx-x86_64-normal-server-release</code>目录，所有的编译成果均位于其中。</p><p>同样编译出来的Java可执行程序可以在目录</p><p><code>JDK源码根目录/build/macosx-x86_64-normal-server-release/jdk/bin</code></p><p>下看到，进入该目录后，也可以输入<code>./java -version</code>命令验证：</p><p><img src="'+b+'" alt="Alt text"></p><p>其次，编译生成的成品<code>JDK 11</code>套装，可以在目录</p><p><code>JDK源码根目录/build/macosx-x86_64-normal-server-release/images </code></p><p>下找到，如图所示：</p><p><img src="'+f+'" alt="Alt text"></p><p>其中<code>jdk</code>目录就是编译生成的成品<code>JDK 11</code>套装。</p><hr><h2 id="使用自己编译的jdk" tabindex="-1"><a class="header-anchor" href="#使用自己编译的jdk" aria-hidden="true">#</a> 使用自己编译的JDK</h2><p>既然我们已经动手编译出了<code>JDK</code>成品，接下来我们得用上哇。</p><p>新建一个最最基本的<code>Java</code>工程，比如命名为<code>JdkTest</code>，目的是把我们自己编译出的<code>JDK</code>给用上。</p><p><img src="'+j+'" alt="Alt text"></p><p>我们点开<code>Project Structure</code>，选到<code>SDKs</code>选项，新添加上自己刚刚编译生成的JDK，并选为项目的JDK，看看是否能正常工作</p><p><img src="'+v+'" alt="Alt text"></p><p><img src="'+A+'" alt="Alt text"></p><p>点击确定之后，我们运行之：</p><p><img src="'+S+'" alt="Alt text"></p><p>可以看到我们自己编译出的JDK已经用上了。</p><hr><h2 id="关联jdk源码并修改" tabindex="-1"><a class="header-anchor" href="#关联jdk源码并修改" aria-hidden="true">#</a> 关联JDK源码并修改</h2><p>我们继续在上一步<code>JdkTest</code>项目的<code>Project Structure</code> → <code>SDKs</code>里将<code>JDK</code>源码关联到自行下载的JDK源码路径上：</p><p><img src="'+q+'" alt="Alt text"></p><p>这样方便我们对自己下载的<code>JDK源码</code>进行<strong>阅读</strong>、<strong>调试</strong>、<strong>修改</strong>、以及在源码里随意<strong>做笔记</strong>和<strong>加注释</strong>。</p><p>举个最简单的例子，比如我们打开<code>System.out.println()</code>这个函数的底层源码：</p><p><img src="'+B+'" alt="Alt text"></p><p>我们随便给它修改一下，加两行简单的标记，像这样：</p><p><img src="'+C+'" alt="Alt text"></p><p>为了使我们新加的代码行生效，我们必须要重新去JDK源码的根目录中再次执行 <code>make images</code>重新编译生成JDK方可生效：</p><p><img src="'+T+'" alt="Alt text"></p><p>因为之前已经全量编译过了，所以再次<code>make</code>的时候增量编译一般很快。</p><p>重新编译之后，我们再次运行<code>JdkTest</code>项目，就可以看到改动的效果了：</p><p><img src="'+w+'" alt="Alt text"></p><hr><h2 id="多行注释的问题" tabindex="-1"><a class="header-anchor" href="#多行注释的问题" aria-hidden="true">#</a> 多行注释的问题</h2>',131),F={href:"https://link.segmentfault.com/?enc=JrtwTM%2BhTi%2B7DiRtBYeZSQ%3D%3D.T2U2BwPhK3iqeNk%2B%2BMuGttrqlD2zy9v1C%2BqYPvIYEvcvkTe1xyPrnnb%2FdaTGkBqY",target:"_blank",rel:"noopener noreferrer"},G=o("strong",null,"不可改变代码的行结构",-1),U=o("strong",null,"行号错位",-1),M=d('<p>原因很简单，因为我们虽然做了源代码目录的映射，但是实际支撑运行的<code>JDK</code>还是预先安装好的那个JDK环境，并不是根据我们修改后的源码来重新编译构建的，所以看到这里，解决这个问题就很简单，就像上面一样自行编译一下<code>JDK</code>即可。</p><p>实际在实验时，还有一个很典型的问题是，当添加了多行的中文注释后，再编译居然会报错！</p><p>比如，还是以上面例子中最简单的<code>System.out.println()</code>源码为例，我们添加几行中文注释：</p><p><img src="'+Y+'" alt="Alt text"></p><p>这时候我们去JDK源码目录下编译会发现满屏类似这样的报错：</p><blockquote><p>错误: 编码 ascii 的不可映射字符</p></blockquote><p><img src="'+E+'" alt="Alt text"></p><p>顿时有点懵，毕竟仅仅是加了几行注释。对于我们来说，源码里写点多行的中文注释基本是<strong>刚需</strong>，然而编译竟会报错，这还能不能让人愉快的玩耍了... 当时后背有点发凉。</p><p>实不相瞒，就这个问题排查了一段时间，熬到了很晚。最终折腾了一番，通过如下这种方式解决了，顺便分享给小伙伴们，大家如果遇到了这个问题，可以参考着解决一下。</p><p>因为从控制台的报错可以很明显的看出，肯定是字符编码相关的问题导致的，而且都指向了<code>ascii</code>这种编码方式。</p><p>于是将JDK的源码从根目录导入了Vs Code，然后全目录查找<code>encoding ascii</code>相关的内容，看看有没有什么端倪，结果发现</p><p><code>jdk源码根目录/make/common/SetupJavaCompilers.gmk</code>文件中有两处指定了<code>ascii</code>相关的编码方式：</p><p><img src="'+N+'" alt="Alt text"></p><p>于是尝试将这两处<code>-encoding ascii</code>的均替换成<code>-encoding utf-8</code>：</p><p><img src="'+O+'" alt="Alt text"></p><p>然后再次执行<code>make images</code>编译，编译顺利通过！</p><p>至此大功告成！</p><p>这样后面不管是<strong>阅读</strong>、<strong>调试</strong>还是<strong>定制</strong><code>JDK</code>源码都非常方便了。</p><hr>',19),P={href:"https://segmentfault.com/a/1190000023251649",target:"_blank",rel:"noopener noreferrer"},I=o("hr",null,null,-1);function L(z,R){const c=p("ExternalLinkIcon");return s(),n("div",null,[y,o("p",null,[e("记得之前搭建"),o("a",F,[e("《JDK源码阅读环境》"),t(c)]),e("时，大家可能发现了一个问题：阅读源码嘛，给源代码做点注释或笔记很常见！但那时候有个问题就是做注释时"),G,e("（只能行尾注释，不能跨行注释），否则debug调试时会出现"),U,e("的问题。")]),M,o("p",null,[e("引用链接："),o("a",P,[e("https://segmentfault.com/a/1190000023251649"),t(c)])]),I])}const Z=a(V,[["render",L],["__file","compile-jdk.html.vue"]]);export{Z as default};
