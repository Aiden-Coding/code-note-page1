import{_ as c,r as s,o as i,c as n,a as e,b as t,d as a,e as l}from"./app-GjP6hEVt.js";const p="/code-note-page1/assets/image-146-AQcKuugE.png",r="/code-note-page1/assets/image-147-1XxXAkPQ.png",d="/code-note-page1/assets/image-148-yGgql39R.png",m="/code-note-page1/assets/image-149-cg9L6G9Y.png",g="/code-note-page1/assets/image-150-0WZZtso-.png",h="/code-note-page1/assets/image-151-vdHyqjHt.png",u="/code-note-page1/assets/image-152-51sKyXPE.png",x="/code-note-page1/assets/image-153-ItcYZdD9.png",_="/code-note-page1/assets/image-154-Ytk7F1sR.png",v="/code-note-page1/assets/image-155-PJTTH3zI.png",b="/code-note-page1/assets/image-156-xfOJd48e.png",y="/code-note-page1/assets/image-148-yGgql39R.png",S="/code-note-page1/assets/image-158-UQtqsn-p.png",f="/code-note-page1/assets/image-159-HcNNyj3c.png",k={},A=l('<p>小二是公司新来的实习生，之前面试的过程中对答如流，所以我非常看好他。第一天，我给他了一台新电脑，要他先在本地搭建个 Java 开发环境。</p><p>二话不说，他就开始马不停蹄地行动了。<strong>真没想到，他竟然是通过命令行的方式安装的 JDK，一行命令就搞定了！连环境变量都不用配置，这远远超出了我对他的预期</strong>。</p><p>我以为，他会傻乎乎地下一步下一步来安装 JDK，就像这样。</p><p><img src="'+p+'" alt="Alt text"></p><p>然后这样配置环境变量。</p><p><img src="'+r+'" alt="Alt text"></p><p>结果他是这样的，就一行命令，环境变量也不用配置！</p><p><img src="'+d+'" alt="Alt text"></p><p>卧槽！牛逼高大上啊！</p><p>看着他熟练地在命令行里安装 JDK 的样子，我的嘴角开始微微上扬，真不错！这次总算招到了一个靠谱的。</p><p>于是我就安排他做一个记录，打算发表在我的小破站《二哥的 Java 进阶之路》上。从他嘴里了解到，他用的命令行软件管理器叫 chocolatey，这是一个 Windows 下的命令行软件管理器，在 GitHub 上已经收获 8.2k+的星标，可以方便开发者像在 Linux 下使用 yum 命令来安装软件，或者像在 macOS 下使用 brew 命令来安装软件，非常酷炫。</p><p><img src="'+m+'" alt="Alt text"></p><p>以下是他的记录，一起来欣赏下。</p><h3 id="先来了解-shell" tabindex="-1"><a class="header-anchor" href="#先来了解-shell" aria-hidden="true">#</a> 先来了解 shell</h3><p>对于一名 Java 后端程序员来说，初学阶段，你可以选择在 IDE 中直接编译运行 Java 代码，但有时候也需要在 Shell 下编译和运行 Java 代码。</p><blockquote><p>Windows 下自带的 Shell 叫命令提示符，或者 cmd 或者 powershell，macOS 下叫终端 terminal。</p></blockquote><p>但当你需要在生产环境下部署 Java 项目或者查看日志的话，就必然会用到 Shell，这个阶段，Shell 的使用频率高到可以用一个成语来形容——朝夕相伴。</p><p>一些第三方软件会在原生的 Shell 基础上提供更强大的功能，常见的有 tabby、Warp、xhsell、FinalShell、MobaXterm、Aechoterm、WindTerm、termius、iterm2 等等，有些只能在 Windows 上使用，有些只能在 macOS 上使用，有些支持全平台。还有 ohmyzsh 这种超神的 Shell 美化工具。</p><p>这里，我们列举一些 Shell 的基本操作命令（Windows 和 macOS/Linux 有些许差异）：</p><ul><li>切换目录，可以使用 cd 命令切换目录，<code>cd ..</code> 返回上级目录。</li></ul><p><img src="'+g+'" alt="Alt text"></p><ul><li>目录列表，macos/linux 下可以使用 ls 命令列出目录下所有的文件和子目录（Windows 下使用 dir 命令），使用通配符 <code>*</code> 对展示的内容进行过滤，比如 <code>ls *.java</code> 列出所有 <code>.java</code>后缀的文件，如果想更进一步的话，可以使用 <code>ls H*.java</code> 列出所有以 H 开头 <code>.java</code> 后缀的文件。</li><li>新建目录，macOS/Linux 下可以使用 mkdir 命令新建一个目录（比如 <code>mkdir hello</code> 可以新建一个 hello 的目录），Windows 下可以使用 md 命令。</li><li>删除文件，macOS/Linux 下可以使用 <code>rm</code> 命令删除文件（比如 <code>rm hello.java</code> 删除 hello.java 文件），Windows 下可以使用 del 命令。</li><li>删除目录，macOS/Linux 下可以使用 <code>rm -r</code> 命令删除目录以及它所包含的所有文件（比如说 <code>rm -r hello</code> 删除 hello 目录）。Windows 下可以使用 rmdir 命令。</li><li>重复命令，macOS/Linux/Windows 下都可以使用上下箭头来选择以往执行过的命令。</li></ul><p><img src="'+h+'" alt="Alt text"></p><ul><li>命令历史，macOS/Linux 下可以使用 <code>history</code> 命令查看所有使用过的命令。Windows 可以按下 F7 键。</li></ul><p><img src="'+u+'" alt="Alt text"></p><ul><li>解压文件，后缀名为“.zip”的文件是一个包含了其他文件的压缩包，macOS/Linux 系统自身已经提供了用于解压的 unzip 命令， Windows 的话需要手动安装。</li></ul><h3 id="再来了解-chocolatey" tabindex="-1"><a class="header-anchor" href="#再来了解-chocolatey" aria-hidden="true">#</a> 再来了解 chocolatey</h3><p>先安装 chocolatey。这是一个 Windows 下的命令行软件管理器，可以方便开发者像在 Linux 下使用 yum 命令来安装软件，或者像在 macOS 下使用 brew 命令来安装软件，非常酷炫。</p><blockquote><p>The biggest challenge is reducing duplication of effort, so users turn to Chocolatey for simplicity</p></blockquote><p>传统的安装方式要么非常耗时，要么非常低效，在命令行安装软件除了简单高效，还能自动帮我们配置环境变量。</p>',30),J={href:"https://chocolatey.org/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://chocolatey.org/install#individual",target:"_blank",rel:"noopener noreferrer"},W=l('<p>第一步，以管理员的身份打开 cmd 命令行。</p><p><img src="'+x+`" alt="Alt text"></p><p>第二步，执行以下命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString(&#39;https://community.chocolatey.org/install.ps1&#39;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>稍等片刻，就完成安装了。</p><p>安装完成后如下图所示：</p><p><img src="`+_+'" alt="Alt text"></p><p>如果不确定是否安装成功的话，可以通过键入 <code>choco</code> 命令来确认。</p><p><img src="'+v+'" alt="Alt text"></p><p>这里推荐几个非常高效的操作命令：</p><ul><li>choco search xxx，查找 xxx 安装包</li><li>choco info xxx，查看 xxx 安装包信息</li><li>choco install xxx，安装 xxx 软件</li><li>choco upgrade xxx，升级 xxx 软件</li><li>choco uninstall xxx， 卸载 xxx 软件</li></ul><p>如何知道 chocolatey 仓库中都有哪些安装包可用呢？</p><p>可以通过上面提到的命令行的方式，也可以访问官方仓库进行筛选。</p>',13),O={href:"https://community.chocolatey.org/packages",target:"_blank",rel:"noopener noreferrer"},j=l('<p>比如说我们来查找 Java。</p><p><img src="'+b+'" alt="Alt text"></p><p>好，现在可以直接在 shell 中键入 <code>choco install jdk8</code> 来安装 JDK8 了，并且会自动将 Java 加入到环境变量中，不用再去「我的电脑」「环境变量」中新建 JAVA_HOME 并复制 JDK 安装路径配置 PATH 变量了，是不是非常 nice？</p><p>稍等片刻，键入 <code>java -version</code> 就可以确认 Java 是否安装成功了。</p><p><img src="'+y+'" alt="Alt text"></p><p>不得不承认！非常 nice！</p><p>再比如说安装 Redis，只需要找到 Redis 的安装命令在 Choco 下执行一下就 OK 了。</p><p><img src="'+S+`" alt="Alt text"></p><p>安装 Git：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>choco install git.install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装 node.js</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>choco install nodejs.install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装 7zip</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>choco install 7zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装 <strong>Filezilla</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>choco install filezilla
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Choco 上的软件包也非常的多，基本上软件开发中常见的安装包都有。</p><p><img src="`+f+'" alt="Alt text"></p><h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h3><p>通过小二的实战笔记，我们可以了解到。</p><p>对比下载安装包，通过图形化界面的方式安装 JDK，然后下一步，下一步是不是感觉在 Shell 下安装 JDK 更炫酷一些？</p><p>关键是还省去了环境变量的配置。</p><p>记得还没有走出新手村的时候，就经常被环境变量配置烦不胜烦。那下载这种命令行的方式，要比手动在环境变量中配置要省事一百倍，也更不容易出错。</p><p>通过 Choco 可以集中安装、管理、更新各种各样的软件。特别适合管理一些轻量级的开源软件，一条命令搞定，升级的时候也方便，不用再重新去下载新的安装包，可以有效治愈更新强迫症患者的症状。</p><p>如果不想特殊设置的话，Chocolatey 整体的操作与使用还是比较亲民的。就连刚接触软件开发的小白也可以直接使用，而且路人看着会觉得你特别厉害。</p>',25);function L(q,D){const o=s("ExternalLinkIcon");return i(),n("div",null,[A,e("blockquote",null,[e("ul",null,[e("li",null,[t("官方地址："),e("a",J,[t("https://chocolatey.org/"),a(o)])]),e("li",null,[t("安装文档："),e("a",w,[t("https://chocolatey.org/install#individual"),a(o)])])])]),W,e("blockquote",null,[e("p",null,[e("a",O,[t("https://community.chocolatey.org/packages"),a(o)])])]),j])}const N=c(k,[["render",L],["__file","choco.html.vue"]]);export{N as default};
