import{_ as r,r as n,o,c as i,a as e,b as s,d as p,e as a}from"./app-GjP6hEVt.js";const c="/code-note-page1/assets/image-165-anE6x6KA.png",g="/code-note-page1/assets/image-166-5viRb-dz.png",h="/code-note-page1/assets/image-167-SjD-IH2q.png",l="/code-note-page1/assets/image-168-sr8BuQR4.png",m="/code-note-page1/assets/image-169-uxos7hP6.png",d="/code-note-page1/assets/image-170-Lacq3Rmv.png",_="/code-note-page1/assets/image-171-tYNbuZVR.png",x="/code-note-page1/assets/image-172-ccWRfSX8.png",u="/code-note-page1/assets/image-173-1-lazqns.png",A="/code-note-page1/assets/image-174-DmeAtAwe.png",f="/code-note-page1/assets/image-175-gDoT6_yG.png",b="/code-note-page1/assets/image-176-vM32FRoC.png",w="/code-note-page1/assets/image-177-D3hBxQpi.png",D="/code-note-page1/assets/image-178-AJtfjOeo.png",P="/code-note-page1/assets/image-179-4W5FNeIR.png",k="/code-note-page1/assets/image-180-WljnSPm8.png",R="/code-note-page1/assets/image-181--XHdUVV_.png",q="/code-note-page1/assets/image-182-UhO4CL_0.png",v="/code-note-page1/assets/image-183-OM0aVWDC.png",B="/code-note-page1/assets/image-161-Pukm7zEe.png",L="/code-note-page1/assets/image-162-a45CyPej.png",S="/code-note-page1/assets/image-160-f3B1yhZ3.png",V="/code-note-page1/assets/image-163-4q_2wjQJ.png",N="/code-note-page1/assets/image-164-MdvJS3t-.png",E={},W=a('<p>最近在造轮子，从 0 到 1 的那种，就差前台的界面了，大家可以耐心耐心耐心期待一下。其中需要设计一些数据库表，可以通过 Navicat 这种图形化管理工具直接开搞，也可以通过一些数据库设计工具来搞，比如说 PowerDesigner，更专业一点。</p><p>今天我给大家推荐的这款国人开源的数据库设计工具 chiner，界面漂亮，功能强大，体验后给我的感觉是真香......</p><p><img src="'+c+'" alt="Alt text"></p><h2 id="一、关于-powerdesigner" tabindex="-1"><a class="header-anchor" href="#一、关于-powerdesigner" aria-hidden="true">#</a> 一、关于 PowerDesigner</h2><p>PowerDesigner 是一款功能非常强大的建模工具，可以和 Rational Rose 媲美。Rose 专攻 UML 对象模型的建模，之后才拓展到数据库这块。而 PowerDesigner 是一开始就为数据库建模服务的，后来才发展为一款综合战斗力都还不错的建模工具。</p><p>不过，说句实在话，PowerDesigner 的界面偏古典一些，下面是我用 PowerDesigner 设计 DB 的效果。</p><p><img src="'+g+'" alt="Alt text"></p><h2 id="二、关于-chiner" tabindex="-1"><a class="header-anchor" href="#二、关于-chiner" aria-hidden="true">#</a> 二、关于 chiner</h2><p>chiner，发音：[kaɪˈnər]，使用React+Electron+Java技术体系构建的一款元数建模平台。</p><p>2018 年，作者和几个对开源有兴趣的社区好友开始打磨产品的原因，历经三代，直到 2021 年 7 月份，终于推出了船新的 3.0 版本。</p><p>2019 年底，团队差点解散，幸好有几位好友关照，给了团队两个项目做，这才算是熬了过去。</p><p>不得不说，做任何一件事情都不容易啊，光靠情怀也许可以撑过产品初期，但越往后去，遇到生存问题时，就会非常困难。</p><p>在此，我们必须得为每一位开源作者奉上最真诚的掌声，希望他们的产品都能有一番天地。也希望，未来我的产品出现在大家的面前时，能给它多一点点包容和支持。</p><p><img src="'+h+'" alt="Alt text"></p><h2 id="三、安装-chiner" tabindex="-1"><a class="header-anchor" href="#三、安装-chiner" aria-hidden="true">#</a> 三、安装 chiner</h2><p>chiner 支持 Windows、macOS 和 Linux，下载地址如下所示：</p>',16),j={href:"https://gitee.com/robergroup/chiner/releases",target:"_blank",rel:"noopener noreferrer"},y=a('<p>码云做了外部链接的拦截，导致直接复制链接到地址栏才能完成下载。我这里以 macOS 为例。</p><p><img src="'+l+'" alt="Alt text"></p><p>安装完成后首次打开的样子是这样的。</p><p><img src="'+m+'" alt="Alt text"></p><p>chiner 提供了非常贴心的操作手册和参考模板，如果时间比较充分的话，可以先把操作手册过一遍，写得非常详细。</p><p><img src="'+d+'" alt="Alt text"></p><h2 id="四、上手-chiner" tabindex="-1"><a class="header-anchor" href="#四、上手-chiner" aria-hidden="true">#</a> 四、上手 chiner</h2><h3 id="_01、导入导出" tabindex="-1"><a class="header-anchor" href="#_01、导入导出" aria-hidden="true">#</a> <strong>01、导入导出</strong></h3><p>因为我之前有一份 PowerDesigner 文件，所以可以直接导入到 chiner。</p><p>第一步，新建一个项目 codingmore。</p><p>第二步，选择导入 PowerDesigner 文件。</p><p><img src="'+_+'" alt="Alt text"></p><p>第三步，选择要添加的数据表。</p><p><img src="'+x+'" alt="Alt text"></p><p>第四步，导入完成后，就可以点开单表进行查看了。</p><p><img src="'+u+'" alt="Alt text"></p><p>第五步，当完成重新设计后，就可以选择导出 DDL 到数据库表了。</p><p><img src="'+A+'" alt="Alt text"></p><p>当然了，也可以直接配置数据库 DB，这样就可以直接连接导入导出了。</p><p><img src="'+f+'" alt="Alt text"></p><p>导出的 SQL 文件可以直接通过宝塔面板上传到服务器端，然后再直接导入到数据库。</p><p><img src="'+b+'" alt="Alt text"></p><p>如果需要用到数据库说明文档的话，也可以直接通过导出到 Word 文档来完成。</p><p><img src="'+w+'" alt="Alt text"></p><h3 id="_02、维护数据类型" tabindex="-1"><a class="header-anchor" href="#_02、维护数据类型" aria-hidden="true">#</a> <strong>02、维护数据类型</strong></h3><p>chiner 自带了几种常见的数据类型，比如字串、小数、日期等，我们也可以根据自己的需要添加新的数据类型。</p><p>比如说默认的字串类型关联到其他数据库的类型如下所示：</p><p><img src="'+D+'" alt="Alt text"></p><p>数据域是在数据类型的基础上，基于当前项目定义的有一定业务含义的数据类型，比如说我这里维护了一个长度为 90 的名称数据域。</p><p><img src="'+P+'" alt="Alt text"></p><p>当我需要把某个数据字段的数据域设置成「名称」的时候，长度就会自动填充为 90，不需要手动再去设置。</p><p><img src="'+k+'" alt="Alt text"></p><h3 id="_03、维护数据表" tabindex="-1"><a class="header-anchor" href="#_03、维护数据表" aria-hidden="true">#</a> <strong>03、维护数据表</strong></h3><p>第一步，选中数据表，右键选择「新增数据表」</p><p><img src="'+R+'" alt="Alt text"></p><p>第二步，填写数据表名</p><p><img src="'+q+'" alt="Alt text"></p><p>点击「确定」后，chiner 会帮我们自动生成一些常见常用的字段，比如说创建人、创建时间、更新人、更新时间等，非常的智能化。通常来说，这些字段都是必须的。</p><p><img src="'+v+'" alt="Alt text"></p><p>如果这些默认字段不满足需求的时候，还可以点击「设置」新增默认字段，比如说删除标记，一般来说为了安全起见，数据库都会采用非物理删除。</p><p><img src="'+B+'" alt="Alt text"></p><p>一般来说，我们更习惯字段小写命名，因此可以直接选中一列，然后选择大小写转换。</p><p><img src="'+L+'" alt="Alt text"></p><p>就变成小写了。</p><p><img src="'+S+'" alt="Alt text"></p><h3 id="_04、维护关系图" tabindex="-1"><a class="header-anchor" href="#_04、维护关系图" aria-hidden="true">#</a> <strong>04、维护关系图</strong></h3><p>第一步，选择「关系图」，右键选择「新增关系图」</p><p>第二步，把需要关联的表拖拽到右侧的面板当中，然后按照字段进行连线，非常的方便。比如说班级和学院表、班级和专业表的关系，就如下图所示。</p><p><img src="'+V+'" alt="Alt text"></p><p>来看一下整体给出来的关系图，还是非常清爽的。</p><p><img src="'+N+'" alt="Alt text"></p><h2 id="五、尾声" tabindex="-1"><a class="header-anchor" href="#五、尾声" aria-hidden="true">#</a> 五、尾声</h2><p>chiner 还有更多更强大的功能，大家觉得不错的话，可以去尝试一下。用的熟练的话，肯定能在很大程度上提高生产效率。</p><p>就我个人的使用体验来说，chiner 比 PowerDesigner 更轻量级，也更符合日常的操作习惯，为国产开源点赞！</p><p>项目地址：</p>',55),C={href:"https://gitee.com/robergroup/chiner",target:"_blank",rel:"noopener noreferrer"},O=e("p",null,"使用手册：",-1),I={href:"https://www.yuque.com/chiner/docs/manual",target:"_blank",rel:"noopener noreferrer"};function J(M,Q){const t=n("ExternalLinkIcon");return o(),i("div",null,[W,e("blockquote",null,[e("p",null,[e("a",j,[s("https://gitee.com/robergroup/chiner/releases"),p(t)])])]),y,e("blockquote",null,[e("p",null,[e("a",C,[s("https://gitee.com/robergroup/chiner"),p(t)])])]),O,e("blockquote",null,[e("p",null,[e("a",I,[s("https://www.yuque.com/chiner/docs/manual"),p(t)])])])])}const U=r(E,[["render",J],["__file","chiner.html.vue"]]);export{U as default};
