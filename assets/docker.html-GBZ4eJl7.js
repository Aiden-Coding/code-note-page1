import{_ as s,r as l,o,c as r,a as e,b as n,d as i,e as a}from"./app-GjP6hEVt.js";const c="/code-note-page1/assets/image-14-Grf6DAe-.png",d="/code-note-page1/assets/image-15-6_LH7xCy.png",p="/code-note-page1/assets/image-16-1k30pf_S.png",u="/code-note-page1/assets/image-17-m44b50Dx.png",g="/code-note-page1/assets/image-18-OWBYn2P7.png",m="/code-note-page1/assets/image-19-Fnci5Z9t.png",v="/code-note-page1/assets/image-20-RSVNpDUw.png",k="/code-note-page1/assets/image-21-1lJTsEso.png",b="/code-note-page1/assets/image-22-dGxLQdyl.png",h="/code-note-page1/assets/image-23-CqJ4419L.png",x="/code-note-page1/assets/image-24-U7g-Qfrl.png",_="/code-note-page1/assets/image-25-RU5dXovM.png",D="/code-note-page1/assets/image-26-lYDy3wTL.png",f="/code-note-page1/assets/image-27-uLrDlEsX.png",j="/code-note-page1/assets/image-28-mDhia2OF.png",A="/code-note-page1/assets/image-29-HCW2U2uL.png",y="/code-note-page1/assets/image-30-RmDcN7Z2.png",w="/code-note-page1/assets/image-31-JJB9yDXC.png",q="/code-note-page1/assets/image-32-aeRxrQZu.png",I={},R=a('<h3 id="关于-docker" tabindex="-1"><a class="header-anchor" href="#关于-docker" aria-hidden="true">#</a> 关于 Docker</h3><p>Docker 是用 go 语言编写的，这也是 go 语言近些年越来越火的原因之一。关于 Docker，有 3 个重要的概念需要了解下：</p><ul><li>image：镜像，一个文件，用来创建容器；如果你有 Windows 装机经历，那可以很好理解镜像这个词的含义，反正我年少的时候没少把 Windows 镜像刻盘重装系统。</li><li>container：容器，一个可运行的镜像实例，里面运行着一个完整的操作系统，可以做一切你当前操作系统可以做的事情。</li><li>Dockerfile：镜像构建的模板，描述镜像构建的步骤。</li></ul><p>它们之间的关系是，通过 Dockerfile 构建出镜像，然后通过镜像构建容器，容器里可以跑程序。另外，一个镜像可以创建多个容器，每个容器之间是相互隔离的。</p><p>对于我们开发人员来说，Docker 可以做到：</p><ul><li>编写本地代码</li><li>使用 Docker 将程序推送到测试环境</li><li>发现 bug 后在开发环境下修复，重新部署到测试环境测试</li><li>测试完成后，推送到生产环境</li></ul><p>在这个过程中，Docker 提供的是开发环境、测试环境和生产环境的一致性，细细想一下，是不是挺恐怖的。。。。。</p><p>以后我们开发人员再说什么“我本地运行的好好的呀”就甩不了锅了，哈哈。</p><p>Java 程序员应该对 Docker 这句宣传语很熟悉：</p><blockquote><p>Build once，Run anywhere（搭建一次，到处能用）</p></blockquote><p>Docker 采用的是 CS 架构，客户端与 Docker 守护进程交互，后者负责构建、运行和分发 Docker 容器的工作。</p><p><img src="'+c+'" alt="Alt text"></p><p>Docker 的应用场景非常丰富，比如说：</p><ul><li>自动打包和部署应用</li><li>创建轻量、私有的PaaS环境</li><li>自动化测试和持续集成/部署</li><li>部署并扩展Web应用、数据库和后端服务器</li><li>创建安全沙盒</li><li>轻量级的桌面虚拟化</li></ul><h3 id="安装-docker" tabindex="-1"><a class="header-anchor" href="#安装-docker" aria-hidden="true">#</a> 安装 Docker</h3><p>Docker Engine（引擎）需要安装在 64 位的 Linux 服务器上（32 位不支持），并且需要一些先决条件（针对 CentOS 系统）：</p>',16),C={href:"https://help.aliyun.com/document_detail/405635.htm",target:"_blank",rel:"noopener noreferrer"},S=e("li",null,"必须是 CentOS 7 或者 8版本，以下版本不支持",-1),E=e("li",null,"centos-extras 存储库必须是启用的，一般是启用的，如果没启用的话，需要手动启用",-1),T={href:"https://www.cnblogs.com/FengZeng666/p/14173906.html",target:"_blank",rel:"noopener noreferrer"},O=a(`<p>我的云服务器安装的是 CentOS 系统，所以这里就以 CentOS 作为演示环境。我个人更喜欢 RPM（Red-Hat Package Manager，红帽软件包管理器）安装包的方式，简单高效。</p><p>第一步，安装 yum-utils 工具包。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install -y yum-utils
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第二步，使用 yum-utils 提供的 yum-config-manager 工具配置 Docker 的安装仓库。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum-config-manager \\
    --add-repo \\
    https://download.docker.com/linux/centos/docker-ce.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第三步，安装 Docker 引擎（包括 Docker Engine, containerd, 和 Docker Compose）。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install docker-ce docker-ce-cli containerd.io docker-compose-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第四步，启动 Docker。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl start docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第五步，验证 Docker 是否正确安装。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run hello-world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果出现以下提示信息，就表明 Docker 安装成功了！</p><p><img src="`+d+`" alt="Alt text"></p><p>以上是 Docker 官方提供的安装方式，稍显复杂，其实我们可以用更简洁的方式。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 首先安装 Docker
yum -y install docker

# 然后启动 Docker 服务
service docker start

# 测试安装是否成功
docker -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Docker 针对 Windows 和 macOS 系统都提供了桌面版，可以到官网下载安装包。</p>`,16),N={href:"https://docs.docker.com/get-docker/",target:"_blank",rel:"noopener noreferrer"},L=a('<p>我这里以 macOS 为例，M1 芯片可以选择 Apple Chip。下载完成后直接傻瓜式安装就可以了。</p><p><img src="'+p+'" alt="Alt text"></p><p>安装并启动成功后的界面如下所示:</p><p><img src="'+u+'" alt="Alt text"></p><p>按照提示，在终端输入命令 <code>docker run -d -p 80:80 docker/getting-started</code>：</p><p><img src="'+g+'" alt="Alt text"></p><p>再次回到 Docker 桌面版，可以看到刚刚通过 80 端口在 Docker 中跑起来的 Docker 教程。</p><p><img src="'+m+'" alt="Alt text"></p><p>点击「open in browser」图标就可以在浏览器打开教程文档了。</p><p><img src="'+v+'" alt="Alt text"></p><p>Windows 用户也可以通过我之前推荐的 chocolatey 命令行工具安装。</p><p><img src="'+k+`" alt="Alt text"></p><p>（Windows 的安装等下一次拿到小米的笔记本后，我装一个把这部分补充完整）</p><h3 id="开启-docker-远程访问权限" tabindex="-1"><a class="header-anchor" href="#开启-docker-远程访问权限" aria-hidden="true">#</a> 开启 Docker 远程访问权限</h3><p>为了将我们本地的应用程序部署到 Docker 服务器上，我们需要开启一下 Docker 的远程访问权限。</p><p>第一步，通过以下命令打开 Docker 配置文件。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vim /usr/lib/systemd/system/docker.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第二步，在 service 节点下编辑 ExecStart 属性，增加 <code>-H tcp://0.0.0.0:2375</code></p><p><img src="`+b+'" alt="Alt text"></p><p>这样就相当于对外开放了 2375 端口，如果你安装了宝塔面板，记得在安全页放行该端口，同时，云服务器的防火墙也要放开该端口。</p><p><img src="'+h+`" alt="Alt text"></p><p>配置完成后，重启 Docker。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl daemon-reload 
systemctl restart docker 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在浏览器地址栏输入 <code>http://ip:2375/version</code> 测试一下是否生效。</p><p><img src="`+x+'" alt="Alt text"></p><p>之后，可以在 Intellij IDEA 中配置一下 Docker 的 TCP socket，如果出现 connection successful 就表明链接成功了。</p><p><img src="'+_+'" alt="Alt text"></p><h3 id="使用-docker-部署-spring-boot" tabindex="-1"><a class="header-anchor" href="#使用-docker-部署-spring-boot" aria-hidden="true">#</a> 使用 Docker 部署 Spring Boot</h3><p>第一步，新建一个简单的 Spring Boot 项目。</p><p><img src="'+D+`" alt="Alt text"></p><p>一个非常简单的 Web 项目，只有一个控制器，代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@RequestMapping</span>
<span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DockerController</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Docker，我告诉你，沉默王二是沙雕&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>@RequestMapping、@RestController 注解我们在前几个章节介绍过了，也就是表明我们这是一个 SpringMVC 的项目，<code>/</code> 路径意味着我们只要在浏览器地址栏输入 <code>localhost:8080</code> 就可以发送请求了，响应结果为 “Docker，我告诉你，沉默王二是沙雕”。</p><p>启动服务后，可以通过 Intellij IDEA 的 HTTP Client 验证一下。</p><p><img src="`+f+'" alt="Alt text"></p><p>OK，项目可以正常访问。</p><p>第二步，构建 Spring Boot 项目的 Docker 镜像文件 Dockerfile。</p><p>在项目根目录新建 Dockerfile 文件，见下图位置。</p><p><img src="'+j+`" alt="Alt text"></p><p>具体内容如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>FROM openjdk:8-jdk-alpine
ARG JAR_FILE=target/*.jar
COPY \${JAR_FILE} app.jar
ENTRYPOINT [&quot;java&quot;,&quot;-jar&quot;,&quot;/app.jar&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>FROM openjdk:8-jdk-alpine</code>：表示使用 JDK8 为基础镜像。</li><li><code>ARG JAR_FILE=target/*.jar</code>：表示定义一个参数名为 JAR_FILE，值为 <code>target/*.jar</code> 的构建参数</li><li><code>COPY \${JAR_FILE} app.jar</code>：表示把 target 目录下的 jar 文件复制一份新的到镜像内的 app.jar 文件</li><li><code>ENTRYPOINT [&quot;java&quot;,&quot;-jar&quot;,&quot;/app.jar&quot;]</code>：表示通过 <code>java -jar</code> 的形式运行 <code>app.jar</code>，ENTRYPOINT 用来配置容器启动时的运行命令，第一个参数是运行命令，后面是一个一个参数。</li></ul><p>第三步，在 pom.xml 文件中添加 Maven 的 Docker 插件。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;plugin&gt;
    &lt;groupId&gt;com.spotify&lt;/groupId&gt;
    &lt;artifactId&gt;docker-maven-plugin&lt;/artifactId&gt;
    &lt;version&gt;1.2.2&lt;/version&gt;
    &lt;executions&gt;
        &lt;execution&gt;
            &lt;id&gt;build-image&lt;/id&gt;
            &lt;phase&gt;package&lt;/phase&gt;
            &lt;goals&gt;
                &lt;goal&gt;build&lt;/goal&gt;
            &lt;/goals&gt;
        &lt;/execution&gt;
    &lt;/executions&gt;
    &lt;configuration&gt;
        &lt;dockerHost&gt;http://ip:2375&lt;/dockerHost&gt;
        &lt;imageName&gt;itwanger/\${project.artifactId}&lt;/imageName&gt;
        &lt;imageTags&gt;
            &lt;imageTag&gt;\${project.version}&lt;/imageTag&gt;
        &lt;/imageTags&gt;
        &lt;forceTags&gt;true&lt;/forceTags&gt;
        &lt;dockerDirectory&gt;\${project.basedir}&lt;/dockerDirectory&gt;
        &lt;resources&gt;
            &lt;resource&gt;
                &lt;targetPath&gt;/&lt;/targetPath&gt;
                &lt;directory&gt;\${project.build.directory}&lt;/directory&gt;
                &lt;include&gt;\${project.build.finalName}.jar&lt;/include&gt;
            &lt;/resource&gt;
        &lt;/resources&gt;
    &lt;/configuration&gt;
&lt;/plugin&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在 <code>executions</code> 节点下添加 docker:build，表示在执行 mvn:package 打包的时候顺带构建一下 Docker 镜像。</li><li>在 <code>configuration</code> 节点下添加 Docker 主机的地址、镜像的名字、镜像的版本、镜像文件的目录、以及 resources 节点下配置的 jar 包位置和名称等。</li></ul><p>配置搞定后，接下来就是对项目进行打包，可以直接点击 Maven 面板中的 package 进行打包。</p><p><img src="`+A+'" alt="Alt text"></p><p>首次打包需要下载一些基础镜像，打包成功后，可以在 Docker 容器中查看我们刚刚打包好的镜像，命令 <code>docker images</code>。</p><p><img src="'+y+`" alt="Alt text"></p><p>接下来，我们就可以启动这个镜像的容器：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d --name itwanger -p 8080:8080 itwanger/springboot-docker:0.0.1-SNAPSHOT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>-d</code>: 后台运行容器，并返回容器ID；</li><li><code>--name</code>: 为容器指定一个名称 itwanger；</li><li><code>-p</code>: 指定端口映射，格式为：主机(宿主)端口:容器端口</li></ul><p>然后在浏览器中访问 8080 端口，就可以看到我们的应用程序在 Docker 上成功运行了。</p><p><img src="`+w+'" alt="Alt text"></p><p>当利用 <code>docker run</code> 来创建容器时，Docker 在后台运行的标准操作包括：</p><ul><li>检查本地是否存在指定的镜像，不存在就从仓库下载</li><li>利用镜像创建并启动一个容器</li><li>分配一个文件系统，并在只读的镜像层外面挂载一层可读写层</li><li>从宿主主机配置的网桥接口中桥接一个虚拟接口到容器中去</li><li>从地址池配置一个 ip 地址给容器</li><li>执行用户指定的应用程序</li><li>执行完毕后容器被终止</li></ul><h3 id="intellij-idea-直连-docker" tabindex="-1"><a class="header-anchor" href="#intellij-idea-直连-docker" aria-hidden="true">#</a> Intellij IDEA 直连 Docker</h3><p>新版的 Intellij IDEA 中已经默认继承了 Docker，所以我们可以通过 services 面板打开 Docker，直接进行操作。</p><p><img src="'+q+'" alt="Alt text"></p><hr><p>.</p><h3 id="源码路径" tabindex="-1"><a class="header-anchor" href="#源码路径" aria-hidden="true">#</a> 源码路径：</h3>',62),P={href:"https://github.com/itwanger/coding-more",target:"_blank",rel:"noopener noreferrer"},M={href:"https://github.com/itwanger/codingmore-learning/tree/main/springboot-docker",target:"_blank",rel:"noopener noreferrer"},J=e("hr",null,null,-1);function F(B,W){const t=l("ExternalLinkIcon");return o(),r("div",null,[R,e("blockquote",null,[e("p",null,[n("PS：Linux 社区已不再维护 CentOS 8，导致 yum 源需要"),e("a",C,[n("切换"),i(t)]),n("，后面打算把系统切换为 Anolis或Alinux")])]),e("ul",null,[S,E,e("li",null,[n("推荐使用 overlay2（戳"),e("a",T,[n("链接"),i(t)]),n("了解）存储驱动")])]),O,e("blockquote",null,[e("p",null,[n("Docker 下载地址："),e("a",N,[n("https://docs.docker.com/get-docker/"),i(t)])])]),L,e("blockquote",null,[e("ul",null,[e("li",null,[n("编程喵："),e("a",P,[n("https://github.com/itwanger/coding-more"),i(t)])]),e("li",null,[n("codingmore-docker："),e("a",M,[n("https://github.com/itwanger/codingmore-learning"),i(t)])])])]),J])}const Y=s(I,[["render",F],["__file","docker.html.vue"]]);export{Y as default};
