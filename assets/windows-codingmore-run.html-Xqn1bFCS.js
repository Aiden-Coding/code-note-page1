import{_ as r,r as l,o as c,c as p,a as e,b as t,d as o,w as i,e as n}from"./app-GjP6hEVt.js";const d="/code-note-page1/assets/image-139-N7T9hlh1.png",g="/code-note-page1/assets/image-140-DGXueM6c.png",m="/code-note-page1/assets/image-141-zVNTUAdf.png",_="/code-note-page1/assets/image-142-VEwrZkbf.png",h="/code-note-page1/assets/image-143-CYKKGk6n.png",u="/code-note-page1/assets/image-144-DYR-Vooj.png",x="/code-note-page1/assets/image-145-TyiOleHa.png",b="/code-note-page1/assets/image-146-sEBb6_-X.png",v="/code-note-page1/assets/image-147-8KqQ16sA.png",A="/code-note-page1/assets/image-148-M993an3e.png",w="/code-note-page1/assets/image-149-OosJ4LzM.png",y="/code-note-page1/assets/image-150-ItTMinSm.png",f="/code-note-page1/assets/image-151-zm8WwLgH.png",S="/code-note-page1/assets/image-152-Faa9mYuV.png",M="/code-note-page1/assets/image-153-nV1x2prP.png",D="/code-note-page1/assets/image-154-hG9p7v1m.png",k="/code-note-page1/assets/image-155-R9Pw6lGy.png",B="/code-note-page1/assets/image-156-ZlwGwLbR.png",q="/code-note-page1/assets/image-157-uJGO8DvQ.png",L="/code-note-page1/assets/image-158-IjYqwugy.png",j="/code-note-page1/assets/image-159-qPzGzCCp.png",I="/code-note-page1/assets/image-160--gOLu4EP.png",K="/code-note-page1/assets/image-161-qZGNPGym.png",J="/code-note-page1/assets/image-162-Q9wjQ2x4.png",C="/code-note-page1/assets/image-163-ikvLK4rx.png",Q="/code-note-page1/assets/image-164-7xPhv0Nd.png",R="/code-note-page1/assets/image-165-3BXaY2VO.png",V="/code-note-page1/assets/image-166-gEY1gwOF.png",E="/code-note-page1/assets/image-167-y-1TRHYn.png",z="/code-note-page1/assets/image-168-Rrlpl1Qk.png",O="/code-note-page1/assets/image-169--2h0F9HS.png",G="/code-note-page1/assets/image-170-EwacUM_t.png",H="/code-note-page1/assets/image-171-0p0FPPWK.png",N="/code-note-page1/assets/image-172-8sbIKA-m.png",P="/code-note-page1/assets/image-173-rWPjJECf.png",W="/code-note-page1/assets/image-174-ggR0TO0b.png",T="/code-note-page1/assets/image-175-wlETCuNk.png",Y="/code-note-page1/assets/image-176-R-S9Y3X9.png",U="/code-note-page1/assets/image-177-i2qqMQSJ.png",X="/code-note-page1/assets/image-178-m_MT3t_D.png",F="/code-note-page1/assets/image-179-45_Nrnyw.png",Z="/code-note-page1/assets/image-180-zPkrf8Wb.png",$="/code-note-page1/assets/image-181-uUXCKy-1.png",ee="/code-note-page1/assets/image-182-w1XH6in_.png",te="/code-note-page1/assets/image-183--HEgkbDB.png",oe="/code-note-page1/assets/image-184-QxiDKQvK.png",se="/code-note-page1/assets/image-185-yD6_2wV9.png",ne="/code-note-page1/assets/image-186-NNIM00Ge.png",ae="/code-note-page1/assets/image-187-qvmDXvzr.png",ie="/code-note-page1/assets/image-188--Hp_BYdB.png",le="/code-note-page1/assets/image-189-A8DM2UGM.png",re="/code-note-page1/assets/image-190-PcE5YrTz.png",ce="/code-note-page1/assets/image-191-wygrzUKM.png",pe="/code-note-page1/assets/image-192-rD_mMUNB.png",de="/code-note-page1/assets/image-193-D5G4mRPz.png",ge="/code-note-page1/assets/image-194-IUpYLBmp.png",me="/code-note-page1/assets/image-195-K6rDVZn6.png",_e="/code-note-page1/assets/image-196-LylbHVqA.png",he="/code-note-page1/assets/image-197-_qXSSgQh.png",ue={},xe=n('<h2 id="前置环境的准备" tabindex="-1"><a class="header-anchor" href="#前置环境的准备" aria-hidden="true">#</a> 前置环境的准备</h2><ul><li>一台可以开机的电脑</li><li>JDK 8</li><li>Maven</li><li>Intellij IDEA（非必须，可用 Eclipse）</li><li>Visual Studio Code（非必须，可用 hbuilderx）</li><li>MySQL</li><li>Redis（非必须，会报错，但不影响跑）</li><li>OSS（非必须，上传图片时报错，但不影响跑）</li></ul><p>对，编程喵 🐱（Spring Boot+Vue 的前后端分离项目）要想在本地跑起来，需要这 8 个前置环境。</p><p>第一个条件，一台可以开机的电脑，显然我相信大家都是有的。不然怎么学编程是吧？瞧我这废话真多。</p>',4),be=e("p",null,[e("img",{src:d,alt:"Alt text"})],-1),ve=n('<p><img src="'+g+'" alt="Alt text"></p><p>执行 <code>choco -v</code> 可以查看 Chocolatey 版本。记得一定要以<strong>管理员身份运行</strong>，否则可以拿不到安装权限。</p><p><img src="'+m+'" alt="Alt text"></p><p>执行 <code>choco install jdk8</code> 可以安装 JDK 8 了。</p><p><img src="'+_+'" alt="Alt text"></p><p>执行 <code>java -version</code> 可以查看当前 JDK 版本</p><p><img src="'+h+'" alt="Alt text"></p><p>使用 Chocolatey 安装 JDK 的好处就是不需要再配置环境变量。</p>',8),Ae={href:"https://www.oracle.com/java/technologies/javase/javase8-archive-downloads.html",target:"_blank",rel:"noopener noreferrer"},we=e("p",null,[e("img",{src:u,alt:"Alt text"})],-1),ye=e("p",null,"之后一步步安装完成后，再配置一下环境变量就OK了。",-1),fe=e("p",null,[e("img",{src:x,alt:"Alt text"})],-1),Se=e("p",null,[t("第三个条件，Maven，可以直接通过 "),e("code",null,"choco install maven"),t(" 来完成安装。")],-1),Me=e("p",null,[e("img",{src:b,alt:"Alt text"})],-1),De={href:"https://maven.apache.org/download.cgi",target:"_blank",rel:"noopener noreferrer"},ke=n('<p><img src="'+v+'" alt="Alt text"></p><p>之后配置到环境变量中。</p><p><img src="'+A+'" alt="Alt text"></p><p>通过 <code>mvn -v</code> 来查看版本。</p><p><img src="'+w+'" alt="Alt text"></p><p>为了加快项目依赖包的下载速度，我们需要配置 Maven 的国内镜像源。</p><p>找到 Maven Home（<code>D:\\download\\apache-maven-3.8.5-bin\\apache-maven-3.8.5</code>），复制一份 settings.xml。</p><p><img src="'+y+'" alt="Alt text"></p><p>到 <code>C:\\Users\\yours\\.m2</code> 路径下。</p><p><img src="'+f+`" alt="Alt text"></p><p>打开 settings.xml 文件在 mirrors 节点下添加阿里云镜像地址，并保存。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;mirror&gt;
  &lt;id&gt;alimaven&lt;/id&gt;
  &lt;name&gt;aliyun maven&lt;/name&gt;
&lt;url&gt;http://maven.aliyun.com/nexus/content/groups/public/&lt;/url&gt;
  &lt;mirrorOf&gt;central&lt;/mirrorOf&gt;
&lt;/mirror&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第四个条件，Intellij IDEA，Java 后端开发必备神器，可以安装社区版，也可以安装旗舰版。</p>`,13),Be={href:"https://www.jetbrains.com/zh-cn/idea/download/#section=mac",target:"_blank",rel:"noopener noreferrer"},qe=e("p",null,[e("img",{src:S,alt:"Alt text"})],-1),Le=e("p",null,"第五个条件，Visual Studio Code，在编写前端代码（vue、JavaScript、css 等）时，比 Intellij IDEA 更值得信赖。",-1),je={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},Ie=e("p",null,[e("img",{src:M,alt:"Alt text"})],-1),Ke=e("p",null,[t("第六个条件，MySQL，可以通过执行 "),e("code",null,"choco install mysql.installer"),t(" 在本机上安装 MySql 的工具箱。")],-1),Je=e("p",null,[e("img",{src:D,alt:"Alt text"})],-1),Ce={href:"https://dev.mysql.com/downloads/installer/",target:"_blank",rel:"noopener noreferrer"},Qe=e("p",null,[e("img",{src:k,alt:"Alt text"})],-1),Re=e("p",null,"之后通过 MySql工具箱来安装 MySQL。",-1),Ve=e("p",null,[e("img",{src:B,alt:"Alt text"})],-1),Ee=e("p",null,[t("如果觉得这个过程比较麻烦的话，也可以直接执行 "),e("code",null,"choco install mysql"),t(" 来安装MySQL。")],-1),ze={href:"https://dev.mysql.com/downloads/mysql/",target:"_blank",rel:"noopener noreferrer"},Oe=e("p",null,[e("img",{src:q,alt:"Alt text"})],-1),Ge=e("p",null,"安装（记住MySQL的用户名和密码）完成后，可以在计算机管理面板里找到 MySQL 服务。",-1),He=e("p",null,[e("img",{src:L,alt:"Alt text"})],-1),Ne=e("p",null,[t("第七个条件，Redis，可以直接通过 "),e("code",null,"choco install redis"),t(" 来完成安装。")],-1),Pe=e("p",null,[e("img",{src:j,alt:"Alt text"})],-1),We={href:"https://github.com/microsoftarchive/redis/releases",target:"_blank",rel:"noopener noreferrer"},Te=n('<p><img src="'+I+'" alt="Alt text"></p><p>下载完直接安装。</p><p><img src="'+K+'" alt="Alt text"></p><p>安装完成后，可以在计算机管理面板里找到Redis服务。</p><p><img src="'+J+'" alt="Alt text"></p><p>如果下载的是绿色版免安装版，只需要把 zip 包解压就可以了。</p><p><img src="'+C+'" alt="Alt text"></p><p>在解压目录下，你会发现一份叫 Windows Service Documentation.docx 的文件，里面详细地说明了 Redis 服务的注册/卸载方式，以及启动/停止方式。</p><p><img src="'+Q+'" alt="Alt text"></p><p>复制对应命令在 CMD 命令行下执行就OK了。</p><p><img src="'+R+'" alt="Alt text"></p><p>第八个条件，OSS，主要用来保存图片，可以通过阿里云官方去购买服务，并且创建 Bucket。</p><p><img src="'+V+'" alt="Alt text"></p><p>然后配置 AccessKey。</p><p><img src="'+E+'" alt="Alt text"></p>',15),Ye=e("h2",{id:"下载编程喵-codingmore-源码",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#下载编程喵-codingmore-源码","aria-hidden":"true"},"#"),t(" 下载编程喵（codingmore）源码")],-1),Ue=e("p",null,"编程喵一共有三个仓库，分别是：",-1),Xe={href:"https://github.com/itwanger/coding-more",target:"_blank",rel:"noopener noreferrer"},Fe={href:"https://github.com/itwanger/codingmore-admin-web",target:"_blank",rel:"noopener noreferrer"},Ze={href:"https://github.com/itwanger/codingmore-learning",target:"_blank",rel:"noopener noreferrer"},$e=n('<p><img src="'+z+'" alt="Alt text"></p><p>编程喵 🐱 是一个非常纯粹的前后端分离项目，后端用到的技术包括：</p><ul><li>Spring Boot 容器+MVC 框架</li><li>SpringSecurity 认证和授权框架</li><li>MyBatis ORM 框架</li><li>MyBatis-Plus MyBatis 增强工具</li><li>Nginx 静态资源服务器</li><li>Druid 数据库连接池</li><li>OSS 对象存储</li><li>Redis 缓存中间件</li><li>MySQL 关系型数据库</li><li>Swagger-UI 文档生成工具</li><li>Knife4j Swagger 美化增强工具</li><li>Hibernator-Validator 验证框架</li><li>Logback 日志框架</li><li>Lombok 简化对象封装工具</li><li>Hutool Java 工具类库</li></ul><p>前端用到的技术包括：</p><ul><li>Vue 前端框架</li><li>Vue-router 路由框架</li><li>Vuex 全局状态管理框架</li><li>Element 前端 UI 框架</li><li>Axios 前端 HTTP 框架</li><li>Js-cookie cookie 管理工具</li><li>nprogress 进度条控件</li></ul>',5),et=e("strong",null,"第一步，下载 coding-more 源码",-1),tt={href:"https://github.com/itwanger/coding-more",target:"_blank",rel:"noopener noreferrer"},ot=e("p",null,[e("img",{src:O,alt:"Alt text"})],-1),st=e("p",null,"第二步，如果安装有 GitHub 桌面版的话，可以点击「open with GitHub desktop」，也可以在这一步下载安装GitHub 桌面版。",-1),nt=e("p",null,[e("img",{src:G,alt:"Alt text"})],-1),at=e("p",null,"也可以点击「download zip」。",-1),it=e("p",null,"第三步，通过 Intellij IDEA 导入新项目就可以了，第一次导入的话，需要等待Maven下载依赖包。",-1),lt=e("p",null,[e("img",{src:H,alt:"Alt text"})],-1),rt={href:"https://github.com/itwanger/codingmore-admin-web",target:"_blank",rel:"noopener noreferrer"},ct=n('<p><img src="'+N+'" alt="Alt text"></p><p>源码下载完毕后，建议通过 VS Code 导入项目，VS Code 对前端项目比 Intellij IDEA 更加友好。</p><p><img src="'+P+'" alt="Alt text"></p><h2 id="部署编程喵-codingmore-源码" tabindex="-1"><a class="header-anchor" href="#部署编程喵-codingmore-源码" aria-hidden="true">#</a> 部署编程喵（codingmore）源码</h2><h3 id="_01、mysql" tabindex="-1"><a class="header-anchor" href="#_01、mysql" aria-hidden="true">#</a> 01、MySQL</h3><p>第一步，安装 Navicat，这是一个图形化界面的数据库管理工具。</p><p><img src="'+W+'" alt="Alt text"></p><p>安装完毕后，输入 MySQL 数据库的用户名和密码，建立本地连接。</p><p><img src="'+T+'" alt="Alt text"></p><p>第二步，打开链接，新建数据库 codingmore，导入编程喵的 DB 文件。DB 文件放在 coding-more/doc 目录下。</p><p><img src="'+Y+'" alt="Alt text"></p><p>导入成功后，可以看到目前 codingmore 所用到的 27 个数据库文件，其中 qrtz 开头的是定时任务的持久化表，剩余是编程喵的数据库表文件。</p><p><img src="'+U+'" alt="Alt text"></p><p>然后，修改 <code>codingmore-admin/src/main/resources/application-dev.yml</code> 文件中的 spring.datasource.username、password、url 等，该为你本地的用户名、密码和数据库链接地址（Web 管理端）。</p><p><img src="'+X+'" alt="Alt text"></p><p>修改 <code>codingmore-web/src/main/resources/application-dev.yml</code> 文件中的 spring.datasource.username、password、url 等，该为你本地的用户名、密码和数据库链接地址（Web 前端）。</p><p><img src="'+F+'" alt="Alt text"></p><h3 id="_02、redis" tabindex="-1"><a class="header-anchor" href="#_02、redis" aria-hidden="true">#</a> 02、Redis</h3><p>在计算机管理面板里启动Redis服务。</p><p><img src="'+Z+'" alt="Alt text"></p><p>然后，修改 <code>codingmore-admin/src/main/resources/application-dev.yml</code> 文件中的 spring.redis.host、database、port、password、timeout 等，该为你本地的 Redis 链接信息，一般默认就好（Web 管理端）。</p><p><img src="'+$+'" alt="Alt text"></p><p>修改 <code>codingmore-web/src/main/resources/application-dev.yml</code> 文件中的 spring.redis.host、database、port、password、timeout 等，该为你本地的 Redis 链接信息，一般默认就好（Web 前端）。</p><p><img src="'+ee+'" alt="Alt text"></p><h3 id="_04、oss" tabindex="-1"><a class="header-anchor" href="#_04、oss" aria-hidden="true">#</a> 04、OSS</h3>',25),pt=n('<p>然后修改 <code>codingmore-admin/src/main/resources/application-dev.yml</code> 文件中的 aliyun.cdn、oss 等。</p><p><img src="'+te+'" alt="Alt text"></p><h3 id="_05、codingmore-admin" tabindex="-1"><a class="header-anchor" href="#_05、codingmore-admin" aria-hidden="true">#</a> 05、codingmore-admin</h3><p>在 Intellij IDEA 中运行 CodingmoreAdminBootstrap 主类，启动管理端后台服务。</p><p><img src="'+oe+'" alt="Alt text"></p><p>如果编译失败，注意调整 JDK 版本为 Java 8。</p><p><img src="'+se+'" alt="Alt text"></p><h3 id="_06、codingmore-web" tabindex="-1"><a class="header-anchor" href="#_06、codingmore-web" aria-hidden="true">#</a> 06、codingmore-web</h3><p>在 Intellij IDEA 中运行 CodingmoreAdminBootstrap 主类，启动管理端后台服务。</p><p><img src="'+ne+'" alt="Alt text"></p><p>启动后，可以直接在浏览器地址栏输入 <code>http://localhost:8081</code> 访问 Web 前端。</p><p><img src="'+ae+'" alt="Alt text"></p><h3 id="_07、codingmore-admin-web" tabindex="-1"><a class="header-anchor" href="#_07、codingmore-admin-web" aria-hidden="true">#</a> 07、codingmore-admin-web</h3><p>在 vscode 中打开终端，执行 <code>yarn install</code> 添加项目依赖（yarn 是 Facebook 为 node.js 运行时环境开发软件打包工具，是 npm 软件包管理器的替代品）。</p><p>如果没有安装 yarn 的话，会出现以下错误。</p><p><img src="'+ie+'" alt="Alt text"></p><p>可以直接以管理员模式执行 <code>choco install yarn</code> 来安装 yarn 包。</p><p><img src="'+le+'" alt="Alt text"></p>',18),dt={href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"},gt=n('<p><img src="'+re+'" alt="Alt text"></p><p>强烈推荐大家安装 chocolatey，安装 node.js 的时候也会出现 chocolatey的影子。</p><p><img src="'+ce+'" alt="Alt text"></p><p>再执行 <code>npm install -g yarn</code> 来安装 yarn。安装成功后，重新打开 vscode，执行 <code>yarn -v</code> 就可以查看 yarn 的版本了。</p><p><img src="'+pe+'" alt="Alt text"></p><p>再次执行 <code>yarn install</code> 安装前端环境。之后执行 <code>yarn run dev</code> 编译 admin 前端。</p><p><img src="'+de+'" alt="Alt text"></p><p>在浏览器地址栏输入 <code>http://localhost:8080</code> 就可以访问到了。</p><p><img src="'+ge+'" alt="Alt text"></p><p>可以点击「获取体验账号」的方式获取登录用户名和密码。当然了，你也可以直接在 users 表上暴力破解密码。</p><p><img src="'+me+'" alt="Alt text"></p>',11),mt=e("p",null,[e("img",{src:_e,alt:"Alt text"})],-1),_t=e("p",null,"这是文章编辑页，是不是非常清爽？",-1),ht=e("p",null,[e("img",{src:he,alt:"Alt text"})],-1);function ut(xt,bt){const a=l("RouterLink"),s=l("ExternalLinkIcon");return c(),p("div",null,[xe,e("p",null,[t("这篇先以 Windows 为例，"),o(a,{to:"/toBeBetterJavaer/springboot/macos-codingmore-run.html"},{default:i(()=>[t("macOS系统")]),_:1}),t("戳这个链接。下图是我的备用机小米笔记本的配置。")]),be,e("p",null,[t("第二个条件，JDK 8，可以通过 "),o(a,{to:"/toBeBetterJavaer/gongju/choco.html"},{default:i(()=>[t("Chocolatey")]),_:1}),t("（Windows 软件包管理器）安装，非常方便（前提条件是你得科学上网，否则速度会非常慢，如果不能科学上网我也会提供另外一种常规的方式）。")]),ve,e("p",null,[t("如果没有安装 chocolatey 的话（或者没有外网权限的话），可以戳 "),e("a",Ae,[t("Downloads - Java SE 8 (oracle.com)"),o(s)]),t(" 下载 JDK 8。")]),we,ye,fe,Se,Me,e("p",null,[t("也可以戳 "),e("a",De,[t("Maven – Download Apache Maven"),o(s)]),t(" 下载免安装版。")]),ke,e("blockquote",null,[e("p",null,[e("a",Be,[t("https://www.jetbrains.com/zh-cn/idea/download/#section=mac"),o(s)])])]),qe,Le,e("blockquote",null,[e("p",null,[e("a",je,[t("https://code.visualstudio.com/"),o(s)])])]),Ie,Ke,Je,e("p",null,[t("也可以戳 "),e("a",Ce,[t("MySQL :: Download MySQL Installer"),o(s)]),t(" 直接下载 MySql的工具箱。")]),Qe,Re,Ve,Ee,e("p",null,[t("也可以戳 "),e("a",ze,[t("MySQL :: Download MySQL Community Server"),o(s)]),t(" 下载MySQL安装包。")]),Oe,Ge,He,Ne,Pe,e("p",null,[t("也可以戳 "),e("a",We,[t("Releases · microsoftarchive/redis · GitHub"),o(s)]),t(" 下载 Redis。")]),Te,e("p",null,[t("针对"),o(a,{to:"/toBeBetterJavaer/zhishixingqiu/"},{default:i(()=>[t("星球用户")]),_:1}),t("，我会开放自己的 accessKeyId 和 accessKeySecret，请勿外泄，免得被恶意攻击。")]),Ye,Ue,e("blockquote",null,[e("ul",null,[e("li",null,[t("coding-more：编程喵 admin 后端 + Web 前后端，GitHub 地址："),e("a",Xe,[t("https://github.com/itwanger/coding-more"),o(s)])]),e("li",null,[t("codingmore-admin-web：编程喵 admin 前端，地址："),e("a",Fe,[t("https://github.com/itwanger/codingmore-admin-web"),o(s)])]),e("li",null,[t("codingmore-learning：编程喵学习教程（手把手），地址："),e("a",Ze,[t("https://github.com/itwanger/codingmore-learning"),o(s)])])])]),$e,e("p",null,[et,t("，戳"),e("a",tt,[t("链接 🔗"),o(s)]),t("进入到该页面。")]),ot,st,nt,at,it,lt,e("p",null,[t("第四步，下载 codingmore-admin-web 源码，戳"),e("a",rt,[t("链接 🔗"),o(s)]),t("进入到该页面。")]),ct,e("p",null,[t("非"),o(a,{to:"/toBeBetterJavaer/zhishixingqiu/"},{default:i(()=>[t("星球用户")]),_:1}),t("需要自己购买阿里云的 OSS 服务和 CDN 服务。"),o(a,{to:"/toBeBetterJavaer/zhishixingqiu/"},{default:i(()=>[t("星球用户")]),_:1}),t("可以直接私信我获取 accessKeyId 和 accessKeySecret。")]),pt,e("p",null,[t("如果没有安装 chocolatey 的话，需要戳 "),e("a",dt,[t("Download | Node.js (nodejs.org)"),o(s)]),t(" 先安装node.js：")]),gt,e("p",null,[o(a,{to:"/toBeBetterJavaer/zhishixingqiu/"},{default:i(()=>[t("星球用户")]),_:1}),t("可以直接私信我获取超级管理员的密码。登录后就可以看到文章列表啦。")]),mt,_t,ht,e("p",null,[t("好了，"),o(a,{to:"/toBeBetterJavaer/springboot/macos-codingmore-run.html"},{default:i(()=>[t("MacOS 版")]),_:1}),t("和Windows版如何下载编程喵源码，如何在本地跑起来的整个演示过程就告一段落辣，我们回头见！")])])}const At=r(ue,[["render",ut],["__file","windows-codingmore-run.html.vue"]]);export{At as default};
