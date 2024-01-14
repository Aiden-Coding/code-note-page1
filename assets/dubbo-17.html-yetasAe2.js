import{_ as t,r as s,o as n,c as a,a as e,b as r,d as i,e as l}from"./app-GjP6hEVt.js";const g="/code-note-page1/assets/image-35-IRtfqd6b.png",p="/code-note-page1/assets/image-36-uDSQ_T83.png",d="/code-note-page1/assets/image-37-VVL9euph.png",c="/code-note-page1/assets/image-38-hxi4XwAF.png",b="/code-note-page1/assets/image-11-9FNpOVi2.png",h="/code-note-page1/assets/image-39-N5vHbII2.png",u="/code-note-page1/assets/image-40-d4OE4Gnv.png",m="/code-note-page1/assets/image-41-8cgbesih.png",x="/code-note-page1/assets/image-42-zlR3rP0e.png",_="/code-note-page1/assets/image-29-KQj3NiQH.png",v="/code-note-page1/assets/image-30-6GxCt4By.png",P="/code-note-page1/assets/image-31-r7wHWcqA.png",f="/code-note-page1/assets/image-32-PvJR1k9g.png",D="/code-note-page1/assets/image-33-xnrYRnC_.png",C="/code-note-page1/assets/image-34-cGil71gv.png",I="/code-note-page1/assets/image-43-eDH7TJWO.png",k="/code-note-page1/assets/image-44-5mwp3bQi.png",S={},y=l('<h1 id="dubbo-17道精选高频面试题必看" tabindex="-1"><a class="header-anchor" href="#dubbo-17道精选高频面试题必看" aria-hidden="true">#</a> Dubbo：17道精选高频面试题必看👍</h1><p><strong>目录</strong></p><ul><li>1.Dubbo 是什么？RPC 又是什么？</li><li>2. Dubbo 能做什么？</li><li>3.能说下 Dubbo 的总体的调用过程吗？</li><li>4.说说 Dubbo 支持哪些协议，每种协议的应用场景和优缺点</li><li>5.Dubbo 中都用到哪些设计模式？</li><li>6.如果 Dubbo 中 provider 提供的服务由多个版本怎么办？</li><li>7.服务暴露的流程是怎么样的？</li><li>8.服务引用的流程是怎么样的？</li><li>9.Dubbo 的注册中心有哪些？</li><li>10.聊聊 Dubbo SPI 机制？</li><li>11.Dubbo 的 SPi 和 JAVA 的 SPI 有什么区别？</li><li>12.有哪些负载均衡策略？</li><li>13.集群容错方式有哪些？</li><li>14.说说 Dubbo 的分层？</li><li>15.服务提供者能实现失效踢出是什么原理？</li><li>16.为什么要通过代理对象通信？？</li><li>17.怎么设计一个 RPC 框架？</li></ul><hr><h2 id="_1-dubbo-是什么-rpc-又是什么" tabindex="-1"><a class="header-anchor" href="#_1-dubbo-是什么-rpc-又是什么" aria-hidden="true">#</a> 1.Dubbo 是什么？RPC 又是什么？</h2><p><strong>Dubbo 是一个分布式服务框架</strong>，致力于提供高性能和透明化的 RPC 远程服务调用方案，以及 SOA 服务治理方案。</p><blockquote><p><strong>RPC（Remote Procedure Call）</strong>—远程过程调用，它是一种通过网络从远程计算机程序上请求服务，而不需要了解底&gt;层网络技术的协议。RPC 协议假定某些传输协议的存在，如 TCP 或 UDP，为通信程序之间携带信息数据。在 OSI 网络&gt;通信模型中，RPC 跨越了传输层和应用层。RPC 使得开发包括网络分布式多程序在内的应用程序更加容易。RPC 采用客户机/服务器模式。请求程序就是一个客户机，而服务提供程序就是一个服务器。首先，客户机调用进程发&gt;送一个有进程参数的调用信息到服务进程，然后等待应答信息。在服务器端，进程保持睡眠状态直到调用信息到达为&gt;止。当一个调用信息到达，服务器获得进程参数，计算结果，发送答复信息，然后等待下一个调用信息，最后，客户&gt;端调用进程接收答复信息，获得进程结果，然后调用执行继续进行。有多种 RPC 模式和执行。</p></blockquote><p><img src="'+g+'" alt="Alt text"></p><p>我们用一种通俗易懂的语言解释它，<strong>远程调用就是本地机器调用远程机器的一个方法，远程机器返回结果的过程</strong>。</p><p><strong>为什么要这么做？</strong></p><p>主要原因是由于单台服务的性能已经无法满足我们了，在这个流量剧增的时代，只有<strong>多台服务器</strong>才能支撑起来现有的用户体系，</p><p>而在这种体系下，服务越来越多，逐渐演化出了现在这种微服务化的 RPC 框架。</p><hr><h2 id="_2-dubbo-能做什么" tabindex="-1"><a class="header-anchor" href="#_2-dubbo-能做什么" aria-hidden="true">#</a> 2. Dubbo 能做什么？</h2><p>Dubbo 的核心功能主要包含:</p><p><img src="'+p+'" alt="Alt text"></p><ol><li><p><strong>远程通讯:dubbo-remoting</strong>模块， 提供对多种基于长连接的 NIO 框架抽象封装，包括多种线程模型，序列化，以及“请求-响应”模式的信息交换方式。</p></li><li><p><strong>集群容错</strong>: 提供基于接口方法的透明远程过程调用，包括多协议支持，以及软负载均衡，失败容错，地址路由，动态配置等集群支持。</p></li><li><p><strong>自动发现</strong>: 基于注册中心目录服务，使服务消费方能动态的查找服务提供方，使地址透明，使服务提供方可以平滑增加或减少机器。</p></li></ol><h2 id="_3-能说下-dubbo-的总体的调用过程吗" tabindex="-1"><a class="header-anchor" href="#_3-能说下-dubbo-的总体的调用过程吗" aria-hidden="true">#</a> 3.能说下 Dubbo 的总体的调用过程吗？</h2><p>调用过程图：</p><p><img src="'+d+'" alt="Alt text"></p><ul><li>1.Proxy 持有一个 Invoker 对象，<strong>使用 Invoker 调用</strong></li><li>2.之后通过<strong>Cluster 进行负载容错</strong>，失败重试</li><li>3.调用 Directory<strong>获取远程服务的 Invoker</strong>列表</li><li>4.负载均衡 <ul><li>用户<strong>配置了路由规则</strong>，则根据路由规则过滤获取到的 Invoker 列表</li><li>用户没<strong>有配置路由规则或配置路由后还有很多节点</strong>，则使用 LoadBalance 方法做负载均衡，选用一个可以调用的 Invoker</li></ul></li><li>5.<strong>经过一个一个过滤器链</strong>，通常是处理上下文、限流、计数等。</li><li>6.会<strong>使用 Client 做数据传输</strong></li><li>7.<strong>私有化协议的构造</strong>(Codec)</li><li>8.进行<strong>序列化</strong></li><li>9.服务端收到这个 Request 请求，将其<strong>分配到 ThreadPool</strong>中进行处理</li><li>10.<strong>Server 来处理这些 Request</strong></li><li>11.根据<strong>请求查找对应的 Exporter</strong></li><li>12.之后<strong>经过</strong>一个服务提供者端的<strong>过滤器链</strong></li><li>13.然后找到接口实现并<strong>真正的调用</strong>，将请求结果返回</li></ul><h2 id="_4-说说-dubbo-支持哪些协议-每种协议的应用场景和优缺点" tabindex="-1"><a class="header-anchor" href="#_4-说说-dubbo-支持哪些协议-每种协议的应用场景和优缺点" aria-hidden="true">#</a> 4.说说 Dubbo 支持哪些协议，每种协议的应用场景和优缺点</h2><p><img src="'+c+'" alt="Alt text"></p><ul><li><strong>1.dubbo</strong> 单一长连接和 NIO 异步通讯，适合大并发小数据量的服务调用，以及消费者远大于提供者。传输协议 TCP，异步，Hessian 序列化</li><li><strong>2.rmi</strong> 采用 JDK 标准的 rmi 协议实现，传输参数和返回参数对象需要实现 Serializable 接口，使用 java 标准序列化机制，使用阻塞式短连接，传输数据包大小混合，消费者和提供者个数差不多，可传文件，传输协议 TCP。多个短连接，TCP 协议传输，同步传输，适用常规的远程服务调用和 rmi 互 操作。在依赖低版本的 Common-Collections 包，java 序列化存在安全漏洞</li><li><strong>3.webservice</strong> 基于 WebService 的远程调用协议，集成 CXF 实现，提供和原生 WebService 的互操作。多个短连接，基于 HTTP 传输，同步传输，适用系统集成和跨语言调用；</li><li><strong>4.http</strong> 基于 Http 表单提交的远程调用协议，使用 Spring 的 HttpInvoke 实 现。多个短连接，传输协议 HTTP，传入参数大小混合，提供者个数多于消 费者，需要给应用程序和浏览器 JS 调用</li><li><strong>5.hessian</strong> 集成 Hessian 服务，基于 HTTP 通讯，采用 Servlet 暴露服务，Dubbo 内嵌 Jetty 作为服务器时默认实现，提供与 Hession 服务互操作。多个短连接，同步 HTTP 传输，Hessian 序列化，传入参数较大，提供者大于消费者，提供者压力较大，可传文件；</li><li><strong>6.memcache</strong> 基于 memcached 实现的 RPC 协议</li><li><strong>7.redis</strong> 基于 redis 实现的 RPC 协议</li></ul><h2 id="_5-dubbo-中都用到哪些设计模式" tabindex="-1"><a class="header-anchor" href="#_5-dubbo-中都用到哪些设计模式" aria-hidden="true">#</a> 5.Dubbo 中都用到哪些设计模式？</h2><p><img src="'+b+`" alt="Alt text"></p><h3 id="责任链模式" tabindex="-1"><a class="header-anchor" href="#责任链模式" aria-hidden="true">#</a> <strong>责任链模式</strong>:</h3><p>责任链模式在 Dubbo 中发挥的作用举足轻重，就像是 Dubbo 框架的骨架。Dubbo 的调用链组织是用责任链模式串连起来的。责任链中的每个节点实现 Filter 接口，然后由 ProtocolFilterWrapper，将所有 Filter 串连起来。Dubbo 的许多功能都是通过 Filter 扩展实现的，比如监控、日志、缓存、安全、telnet 以及 RPC 本身都是。</p><h3 id="观察者模式" tabindex="-1"><a class="header-anchor" href="#观察者模式" aria-hidden="true">#</a> <strong>观察者模式</strong>:</h3><p>Dubbo 中使用观察者模式最典型的例子是 RegistryService。消费者在初始化的时候回调用 subscribe 方法，注册一个观察者，如果观察者引用的服务地址列表发生改变，就会通过 NotifyListener 通知消费者。此外，Dubbo 的 InvokerListener、ExporterListener 也实现了观察者模式，只要实现该接口，并注册，就可以接收到 consumer 端调用 refer 和 provider 端调用 export 的通知。</p><h3 id="修饰器模式" tabindex="-1"><a class="header-anchor" href="#修饰器模式" aria-hidden="true">#</a> <strong>修饰器模式</strong>:</h3><p>Dubbo 中还大量用到了修饰器模式。比如 ProtocolFilterWrapper 类是对 Protocol 类的修饰。在 export 和 refer 方法中，配合责任链模式，把 Filter 组装成责任链，实现对 Protocol 功能的修饰。其他还有 ProtocolListenerWrapper、 ListenerInvokerWrapper、InvokerWrapper 等。</p><h3 id="工厂方法模式" tabindex="-1"><a class="header-anchor" href="#工厂方法模式" aria-hidden="true">#</a> <strong>工厂方法模式</strong>:</h3><p>CacheFactory 的实现采用的是工厂方法模式。CacheFactory 接口定义 getCache 方法，然后定义一个 AbstractCacheFactory 抽象类实现 CacheFactory，并将实际创建 cache 的 createCache 方法分离出来，并设置为抽象方法。这样具体 cache 的创建工作就留给具体的子类去完成。</p><h3 id="抽象工厂模式" tabindex="-1"><a class="header-anchor" href="#抽象工厂模式" aria-hidden="true">#</a> <strong>抽象工厂模式</strong>:</h3><p>ProxyFactory 及其子类是 Dubbo 中使用抽象工厂模式的典型例子。ProxyFactory 提供两个方法，分别用来生产 Proxy 和 Invoker（这两个方法签名看起来有些矛盾，因为 getProxy 方法需要传入一个 Invoker 对象，而 getInvoker 方法需要传入一个 Proxy 对象，看起来会形成循环依赖，但其实两个方式使用的场景不一样）。AbstractProxyFactory 实现了 ProxyFactory 接口，作为具体实现类的抽象父类。然后定义了 JdkProxyFactory 和 JavassistProxyFactory 两个具体类，分别用来生产基于 jdk 代理机制和基于 javassist 代理机制的 Proxy 和 Invoker。</p><h3 id="适配器模式" tabindex="-1"><a class="header-anchor" href="#适配器模式" aria-hidden="true">#</a> <strong>适配器模式</strong>:</h3><p>为了让用户根据自己的需求选择日志组件，Dubbo 自定义了自己的 Logger 接口，并为常见的日志组件（包括 jcl, jdk, log4j, slf4j）提供相应的适配器。并且利用简单工厂模式提供一个 LoggerFactory，客户可以创建抽象的 Dubbo 自定义 Logger，而无需关心实际使用的日志组件类型。在 LoggerFactory 初始化时，客户通过设置系统变量的方式选择自己所用的日志组件，这样提供了很大的灵活性。</p><h3 id="代理模式" tabindex="-1"><a class="header-anchor" href="#代理模式" aria-hidden="true">#</a> <strong>代理模式</strong>:</h3><p>Dubbo consumer 使用 Proxy 类创建远程服务的本地代理，本地代理实现和远程服务一样的接口，并且屏蔽了网络通信的细节，使得用户在使用本地代理的时候，感觉和使用本地服务一样。</p><h2 id="_6-如果-dubbo-中-provider-提供的服务由多个版本怎么办" tabindex="-1"><a class="header-anchor" href="#_6-如果-dubbo-中-provider-提供的服务由多个版本怎么办" aria-hidden="true">#</a> 6.如果 Dubbo 中 provider 提供的服务由多个版本怎么办？</h2><p>可以直接通过 Dubbo 配置中的 version 版本来控制多个版本即可。</p><p>比如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dubbo:service interface=&quot;com.xxxx.rent.service.IDemoService&quot; ref=&quot;iDemoServiceFirst&quot; version=&quot;1.0.0&quot;/&gt;
&lt;dubbo:service interface=&quot;com.xxxx.rent.service.IDemoService&quot; ref=&quot;iDemoServiceSecond&quot; version=&quot;1.0.1&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>老版本 version=1.0.0, 新版本 version=1.0.1</p><h2 id="_7-服务暴露的流程是怎么样的" tabindex="-1"><a class="header-anchor" href="#_7-服务暴露的流程是怎么样的" aria-hidden="true">#</a> 7.服务暴露的流程是怎么样的？</h2><p><img src="`+h+'" alt="Alt text"></p><p>1.通过 ServiceConfig 解析标签，创建 dubbo 标签解析器来<strong>解析 dubbo 的标签</strong>，容器创建完成之后，<strong>触发 ContextRefreshEvent 事件回调开始暴露服务</strong></p><p>2.通过 proxyFactory.getInvoker 方法，并利用<strong>javassist 或 DdkProxyFactory 来进行动态代理</strong>，将服务暴露接口<strong>封装成 invoke</strong>r 对象，里面包含了需要执行的方法的对象信息和具体的 URL 地址。</p><p>3.再通过 DubboProtocol 的实现把包装后的<strong>invoker 转换成 exporter</strong>，</p><p>4.然后<strong>启动服务器 server</strong>，监听端口</p><p>5.最后 RegistryProtocol 保存 URL 地址和 invoker 的映射关系，同时<strong>注册到服务中心</strong></p><p><img src="'+u+'" alt="Alt text"></p><h2 id="_8-服务引用的流程是怎么样的" tabindex="-1"><a class="header-anchor" href="#_8-服务引用的流程是怎么样的" aria-hidden="true">#</a> 8.服务引用的流程是怎么样的？</h2><p>1.首先客户端根据 config 文件信息从注册中心<strong>订阅服务</strong>，首次会全量<strong>缓存到本地</strong>，后续的更新会监听动态更新到本地。</p><p>2.之后 DubboProtocol<strong>根据 provider</strong>的地址和接口信息<strong>连接到服务端</strong>server，<strong>开启客户端 clien</strong>t，然后创建 invoker</p><p>3.之后通过 invoker 为服务接口<strong>生成代理对象</strong>，这个代理对象用于远程调用 provider，至此完成了服务引用</p><p><img src="'+m+'" alt="Alt text"></p><h2 id="_9-dubbo-的注册中心有哪些" tabindex="-1"><a class="header-anchor" href="#_9-dubbo-的注册中心有哪些" aria-hidden="true">#</a> 9.Dubbo 的注册中心有哪些？</h2><p><img src="'+x+`" alt="Alt text"></p><p>Zookeeper、Redis、Multicast、Simple 等都可以作为 Dubbo 的注册中心</p><h2 id="_10-聊聊-dubbo-spi-机制" tabindex="-1"><a class="header-anchor" href="#_10-聊聊-dubbo-spi-机制" aria-hidden="true">#</a> 10.聊聊 Dubbo SPI 机制？</h2><p>SPI(Service Provider Interface)，是一种<strong>服务发现机制</strong>，其实就是将结构的实现类写入配置当中，在服务加载的时候将配置文件独处，加载实现类，这样就可以在运行的时候，<strong>动态的帮助接口替换实现类</strong>。</p><p>Dubbo 的 SPI 其实是对 java 的 SPI 进行了一种增强,可以按需加载实现类之外，增加了 IOC 和 AOP 的特性，还有<strong>自适应扩展</strong>机制。</p><p>SPI 在 dubbo 应用很多，包括协议扩展、集群扩展、路由扩展、序列化扩展等等。</p><p>Dubbo 对于文件目录的配置分为了<strong>三类</strong>。</p><ul><li><p>1.META-INF/services/ 目录：该目录下的 SPI 配置文件是为了用来兼容 Java SPI 。</p></li><li><p>2.META-INF/dubbo/ 目录：该目录存放用户自定义的 SPI 配置文件。</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>key=com.xxx.xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>3.META-INF/dubbo/internal/ 目录：该目录存放 Dubbo 内部使用的 SPI 配置文件。</li></ul><h2 id="_11-dubbo-的-spi-和-java-的-spi-有什么区别" tabindex="-1"><a class="header-anchor" href="#_11-dubbo-的-spi-和-java-的-spi-有什么区别" aria-hidden="true">#</a> 11.Dubbo 的 SPi 和 Java 的 SPI 有什么区别？</h2><p><img src="`+_+'" alt="Alt text"></p><p><strong>Java Spi</strong></p><ul><li>Java SPI 在查找扩展实现类的时候遍历 SPI 的配置文件并且将实现类<strong>全部实例化</strong></li></ul><p><strong>Dubbo Spi</strong></p><ul><li>1，对 Dubbo 进行扩展，不需要改动 Dubbo 的源码</li><li>2，延迟加载，可以一次<strong>只加载自己想要加载的</strong>扩展实现。</li><li>3，增加了对扩展点 IOC 和 AOP 的支持，一个扩展点可以直接 setter 注入其它扩展点。</li><li>4，Dubbo 的扩展机制能很好的支持第三方 IoC 容器，默认支持 Spring Bean。</li></ul><h2 id="_12-有哪些负载均衡策略" tabindex="-1"><a class="header-anchor" href="#_12-有哪些负载均衡策略" aria-hidden="true">#</a> 12.有哪些负载均衡策略？</h2><p><strong>1.加权随机</strong>：比如我们有三台服务器[A, B, C]，给他们设置权重为[4, 5, 6]，然后讲这三个数平铺在水平线上,和为 15。</p><p>然后在 15 以内生成一个随机数，0 ～ 4 是服务器 A，4 ～ 9 是服务器 B，9 ～ 15 是服务器 C</p><p><img src="'+v+'" alt="Alt text"></p><p><strong>2.最小活跃数</strong>：每个服务提供者对应一个活跃数 active，初始情况下，所有服务提供者活跃数均为 0。每收到一个请求，活跃数加 1，完成请求后则将活跃数减 1。在服务运行一段时间后，性能好的服务提供者处理请求的速度更快，因此活跃数下降的也越快，此时这样的服务提供者能够优先获取到新的服务请求。</p><p><img src="'+P+'" alt="Alt text"></p><p><strong>3.一致性 hash</strong>：</p><ul><li>首先求出 memcached 服务器（节点）的哈希值，并将其配置到 0 ～ 2 的 32 次方的圆（continuum）上。</li><li>然后采用同样的方法求出存储数据的键的哈希值，并映射到相同的圆上。</li><li>然后从数据映射到的位置开始顺时针查找，将数据保存到找到的第一个服务器上。如果超过 2 的 32 次方仍然找不到服务器，就会保存到第一台 memcached 服务器上。</li></ul><p><img src="'+f+'" alt="Alt text"></p><p><strong>4.加权轮询</strong>：比如我们有三台服务器[A, B, C]，给他们设置权重为[4, 5, 6]，那么假如总共有 15 次请求，那么会有 4 次落在 A 服务器，5 次落在 B 服务器，6 次落在 C 服务器。</p><p><img src="'+D+'" alt="Alt text"></p><h2 id="_13-集群容错方式有哪些" tabindex="-1"><a class="header-anchor" href="#_13-集群容错方式有哪些" aria-hidden="true">#</a> 13.集群容错方式有哪些？</h2><p>1.<strong>Failover Cluster 失败自动切换</strong>：dubbo 的默认容错方案，当调用失败时自动切换到其他可用的节点，具体的重试次数和间隔时间可用通过引用服务的时候配置，默认重试次数为 1 是只调用一次。</p><p>2.<strong>Failback Cluster 失败自动恢复</strong>：在调用失败，记录日志和调用信息，然后返回空结果给 consumer，并且通过定时任务每隔 5 秒对失败的调用进行重试</p><p>3.<strong>Failfast Cluster 快速失败</strong>：只会调用一次，失败后立刻抛出异常</p><p>4.<strong>Failsafe Cluster 失败安全</strong>：调用出现异常，记录日志不抛出，返回空结果</p><p>5.<strong>Forking Cluster 并行调用多个服务提供者</strong>：通过线程池创建多个线程，并发调用多个 provider，结果保存到阻塞队列，只要有一个 provider 成功返回了结果，就会立刻返回结果</p><p>6.<strong>Broadcast Cluster 广播模式</strong>：逐个调用每个 provider，如果其中一台报错，在循环调用结束后，抛出异常。</p><h2 id="_14-说说-dubbo-的分层" tabindex="-1"><a class="header-anchor" href="#_14-说说-dubbo-的分层" aria-hidden="true">#</a> 14.说说 Dubbo 的分层？</h2><p>分层图：</p><p><img src="'+C+'" alt="Alt text"></p><p>从大的范围来说，dubbo 分为三层</p><ul><li><strong>business</strong>业务逻辑层由我们自己来提供接口和实现还有一些配置信息</li><li><strong>RPC</strong>层就是真正的 RPC 调用的核心层，封装整个 RPC 的调用过程、负载均衡、集群容错、代理</li><li><strong>remoting</strong>则是对网络传输协议和数据转换的封装。</li></ul><p>Service 和 Config 两层可以认为是<strong>API</strong>层，主要提供给<strong>API 使用者</strong>，使用者只需要配置和完成业务代码就可以了。</p><p>后面所有的层级是<strong>SPI</strong>层，主 要提供给扩展者使用主要是用来做<strong>Dubbo 的二次开发</strong>扩展功能。</p><p>再划分到更细的层面，就是图中的 10 层模式。</p><h2 id="_15-服务提供者能实现失效踢出是什么原理" tabindex="-1"><a class="header-anchor" href="#_15-服务提供者能实现失效踢出是什么原理" aria-hidden="true">#</a> 15.服务提供者能实现失效踢出是什么原理？</h2><p>服务失效踢出基于<strong>Zookeeper 的临时节点</strong>原理。</p><p>Zookeeper 中节点是有生命周期的，具体的生命周期取决于节点的类型，节点主要分为<strong>持久节点</strong>(Persistent)和<strong>临时节点</strong>(Ephemeral) 。</p><h2 id="_16-为什么要通过代理对象通信" tabindex="-1"><a class="header-anchor" href="#_16-为什么要通过代理对象通信" aria-hidden="true">#</a> 16.为什么要通过代理对象通信？？</h2><p><img src="'+I+'" alt="Alt text"></p><p>其实主要就是为了将调用细节封装起来，将调用远程方法变得和调用本地方法一样简单，还可以做一些其他方面的增强，比如负载均衡，容错机制，过滤操作，调用数据的统计。</p><h2 id="_17-怎么设计一个-rpc-框架" tabindex="-1"><a class="header-anchor" href="#_17-怎么设计一个-rpc-框架" aria-hidden="true">#</a> 17.怎么设计一个 RPC 框架？</h2><p>关于这个问题，其实核心考察点就是你<strong>对于 RPC 框架的理解</strong>，一个成熟的 RPC 框架<strong>可以完成哪些功能</strong>，其实当我们看过一两个 RPC 框架后，就可以对这个问题回答个七七八八了，我们来举个例子。</p><p><img src="'+k+'" alt="Alt text"></p><p>1.首先我们得需要一个<strong>注册中心</strong>，去管理消费者和提供者的节点信息，这样才会有消费者和提供才可以去订阅服务，注册服务。</p><p>2.当有了注册中心后，可能会有很多个 provider 节点，那么我们肯定会有一个<strong>负载均衡</strong>模块来负责节点的调用，至于用户指定路由规则可以使一个额外的优化点。</p><p>3.具体的调用肯定会需要牵扯到通信协议，所以需要一个模块来对<strong>通信协议进行封装</strong>，网络传输还要考虑序列化。</p><p>4.当调用失败后怎么去处理？所以我们还需要一个<strong>容错模块</strong>，来负责失败情况的处理。</p><p>5.其实做完这些一个基础的模型就已经搭建好了，我们还可以有更多的优化点，比如一些请求<strong>数据的监控，配置信息的处理，日志信息的处理</strong>等等。</p><p>这其实就是一个比较基本的 RPC 框架的大体思路，大家有没有 get 到？</p>',116),A={href:"https://mp.weixin.qq.com/s?__biz=MzkwODE5ODM0Ng==&mid=2247491592&idx=1&sn=454ae3d6a661a1eb63ffbad767ccb479&chksm=c0cf08adf7b881bbfd7d2a2ad150e7621756ccc06a6ffacd52833e7f4b84d5d01e16e5a6770f&scene=27#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},R=e("hr",null,null,-1);function F(q,T){const o=s("ExternalLinkIcon");return n(),a("div",null,[y,e("blockquote",null,[e("p",null,[r("参考链接："),e("a",A,[r("https://mp.weixin.qq.com/s?__biz=MzkwODE5ODM0Ng==&mid=2247491592&idx=1&sn=454ae3d6a661a1eb63ffbad767ccb479&chksm=c0cf08adf7b881bbfd7d2a2ad150e7621756ccc06a6ffacd52833e7f4b84d5d01e16e5a6770f&scene=27#wechat_redirect"),i(o)]),r("，作者：moon聊技术，整理：沉默王二")])]),R])}const N=t(S,[["render",F],["__file","dubbo-17.html.vue"]]);export{N as default};
