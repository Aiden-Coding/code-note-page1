import{_ as t,r as a,o as i,c as l,a as p,b as e,d as r,e as d}from"./app-GjP6hEVt.js";const s="/code-note-page1/assets/image-pGslFyC9.png",n="/code-note-page1/assets/image-1-QlwKXGQf.png",c="/code-note-page1/assets/image-2-ay1SdtZb.png",u="/code-note-page1/assets/image-3-Q2eJnseC.png",g="/code-note-page1/assets/image-4-L5PWEZoV.png",Z="/code-note-page1/assets/image-5-5GXmHBkL.png",K="/code-note-page1/assets/image-6-JdVIfHea.png",b="/code-note-page1/assets/image-7-g8aNfj72.png",h="/code-note-page1/assets/image-8-yMj6ovd-.png",v="/code-note-page1/assets/image-9-B-XqZFmc.png",m="/code-note-page1/assets/image-10-3qzK_B1F.png",L="/code-note-page1/assets/image-11-rDbkUnN_.png",k={},x=p("h1",{id:"可能是把zookeeper概念讲的最清楚的一篇文章",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#可能是把zookeeper概念讲的最清楚的一篇文章","aria-hidden":"true"},"#"),e(" 可能是把ZooKeeper概念讲的最清楚的一篇文章")],-1),_={href:"https://mp.weixin.qq.com/s/-evZg0epRrOr1IwQ3GJ2Zg",target:"_blank",rel:"noopener noreferrer"},w={href:"https://mp.weixin.qq.com/s/B2ngp0q5kdWsCNH8sw_5DA",target:"_blank",rel:"noopener noreferrer"},q=d('<h2 id="一、基本介绍" tabindex="-1"><a class="header-anchor" href="#一、基本介绍" aria-hidden="true">#</a> 一、基本介绍</h2><p>Apache ZooKeeper 是由Apache Hadoop的子项目发展而来，为分布式应用提供高效且可靠的分布式协调服务。</p><p>在解决分布式数据一致性方面，ZK没有直接采用Paxos算法，而是采用了ZAB（ZooKeeper Atomic Broadcast）协议。 ZK可以提供诸如数据发布/订阅、负载均衡、命名服务、分布式协调/通知，集群管理，Master选举，分布式锁，分布式队列等功能。</p><p>「它具有以下特性：」</p><ul><li>「顺序一致性」：从一个客户端发起的事务请求，最终都会严格按照其发起顺序被应用到 Zookeeper 中；</li><li>「原子性」：要么所有应用，要么不应用；不存在部分机器应用了该事务，而「另一部分没有应用」的情况；</li><li>「单一视图」：所有客户端看到的服务端数据模型都是一致的，无论客户连接的是哪个ZK服务器；</li><li>「可靠性」：一旦服务端成功应用了一个事务，则其引起的改变会一直保留，直到被另外一个事务所更改；</li><li>「实时性」：一旦一个事务被成功应用后，Zookeeper 可以保证客户端立即可以读取到这个事务变更后的最新状态的数据（「一段时间」）。</li></ul><h2 id="二、数据模型" tabindex="-1"><a class="header-anchor" href="#二、数据模型" aria-hidden="true">#</a> 二、数据模型</h2><p>ZooKeeper 中的数据模型是一种树形结构，非常像电脑中的文件系统，有一个根文件夹，下面还有很多子文件夹。</p><ul><li><p>ZooKeeper的数据模型也具有一个固定的根节点<code>（/）</code>，我们可以在根节点下创建子节点，并在子节点下继续创建下一级节点。</p></li><li><p>ZooKeeper 树中的每一层级用斜杠<code>（/）</code>分隔开，且只能用绝对路径（如<code>get /work/task</code>）的方式查询 ZooKeeper 节点，而不能使用相对路径。</p></li></ul><p><img src="'+s+`" alt="Alt text"></p><p><strong>「为什么 ZooKeeper 不能采用相对路径查找节点呢？」</strong></p><blockquote><p>❝</p><p>这是因为 ZooKeeper 大多是应用场景是定位数据模型上的节点，并在相关节点上进行操作。</p><p>❞</p></blockquote><p>像这种查找与给定值相等的记录问题最适合用散列来解决。</p><p>因此 ZooKeeper 在底层实现的时候，使用了一个 hashtable，即 <code>hashtableConcurrentHashMap&lt;String, DataNode&gt; nodes</code>，用节点的完整路径来作为 key 存储节点数据。</p><p>这样就大大提高了 ZooKeeper 的性能。</p><p><strong>「节点类型」</strong></p><p>ZooKeeper 中的数据节点也分为持久节点、临时节点和有序节点三种类型：</p><blockquote><p>❝</p><p>1、持久节点</p><p>❞</p></blockquote><p>一旦将节点创建为持久节点，该数据节点会一直存储在 ZooKeeper 服务器上，即使创建该节点的客户端与服务端的会话关闭了，该节点依然不会被删除。如果我们想删除持久节点，就要显式调用 delete 函数进行删除操作。</p><blockquote><p>❝</p><p>2、临时节点</p><p>❞</p></blockquote><p>如果将节点创建为临时节点，那么该节点数据不会一直存储在 ZooKeeper 服务器上。</p><p>当创建该临时节点的客户端会话因超时或发生异常而关闭时，该节点也相应在 ZooKeeper 服务器上被删除，同样，我们可以像删除持久节点一样主动删除临时节点。</p><p>在平时的开发中，我们可以利用临时节点的这一特性来做服务器集群内机器运行情况的统计，将集群设置为<code>/servers</code>节点，并为集群下的每台服务器创建一个临时节点<code>/servers/host</code>，当服务器下线时该节点自动被删除，最后统计临时节点个数就可以知道集群中的运行情况。</p><blockquote><p>❝</p><p>3、有序节点</p><p>❞</p></blockquote><p>节点有序是说在我们创建有序节点的时候，ZooKeeper 服务器会自动使用一个单调递增的数字作为后缀，追加到我们创建节点的后边。</p><p>例如一个客户端创建了一个路径为 <code>works/task-</code>的有序节点，那么 ZooKeeper 将会生成一个序号并追加到该节点的路径后，最后该节点的路径为<code>works/task-1</code>。</p><ul><li>通过这种方式我们可以直观的查看到节点的创建顺序。</li></ul><p>ZooKeeper 中的每个节点都维护有这些内容：一个二进制数组<code>（byte data[]）</code>，用来存储节点的数据、ACL 访问控制信息、子节点数据（因为临时节点不允许有子节点，所以其子节点字段为 null），除此之外每个数据节点还有一个记录自身状态信息的字段 stat。</p><p><strong>「节点的状态结构」</strong></p><p>执行<code>stat /zk_test</code>，可以看到控制台输出了一些信息，这些就是节点状态信息。</p><p>每一个节点都有一个自己的状态属性，记录了节点本身的一些信息：</p><table><thead><tr><th><strong>「状态属性」</strong></th><th><strong>「说明」</strong></th></tr></thead><tbody><tr><td>czxid</td><td>数据节点创建时的事务 ID</td></tr><tr><td>ctime</td><td>数据节点创建时的时间</td></tr><tr><td>mzxid</td><td>数据节点最后一次更新时的事务 ID</td></tr><tr><td>mtime</td><td>数据节点最后一次更新时的时间</td></tr><tr><td>pzxid</td><td>数据节点的子节点最后一次被修改时的事务 ID</td></tr><tr><td><strong>「cversion」</strong></td><td><strong>「子节点的版本」</strong></td></tr><tr><td><strong>「version」</strong></td><td><strong>「当前节点数据的版本」</strong></td></tr><tr><td><strong>「aversion」</strong></td><td><strong>「节点的 ACL 的版本」</strong></td></tr><tr><td>ephemeralOwner</td><td>如果节点是临时节点，则表示创建该节点的会话的 SessionID；如果节点是持久节点，则该属性值为 0</td></tr><tr><td>dataLength</td><td>数据内容的长度</td></tr><tr><td>numChildren</td><td>数据节点当前的子节点个数</td></tr></tbody></table><p><strong>「数据节点的版本」</strong></p><p>在 ZooKeeper 中为数据节点引入了版本的概念，每个数据节点有 3 种类型的版本信息，对数据节点的任何更新操作都会引起版本号的变化。</p><p>ZooKeeper 的版本信息表示的是对节点数据内容、子节点信息或者是 ACL 信息的修改次数。</p><h2 id="三、数据存储" tabindex="-1"><a class="header-anchor" href="#三、数据存储" aria-hidden="true">#</a> 三、数据存储</h2><p>从存储位置上来说，事务日志和数据快照一样，都存储在本地磁盘上；而从业务角度来讲，内存数据就是我们创建数据节点、添加监控等请求时直接操作的数据。</p><p>事务日志数据主要用于记录本地事务性会话操作，用于 ZooKeeper 集群服务器之间的数据同步。</p><p>事务快照则是将内存数据持久化到本地磁盘。</p><p>❝ 这里要注意的一点是，数据快照是每间隔一段时间才把内存数据存储到本地磁盘，因此数据并不会一直与内存数据保持一致。 ❞ 在单台 ZooKeeper 服务器运行过程中因为异常而关闭时，可能会出现数据丢失等情况。</p><p>「内存数据」</p><p>ZooKeeper 的数据模型可以看作一棵树形结构，而数据节点就是这棵树上的叶子节点。</p><p>从数据存储的角度看，ZooKeeper 的数据模型是存储在内存中的。</p><p>我们可以把 ZooKeeper 的数据模型看作是存储在内存中的数据库，而这个数据库不但存储数据的节点信息，还存储每个数据节点的 ACL 权限信息以及 stat 状态信息等。</p><p>而在底层实现中，ZooKeeper 数据模型是通过 DataTree 类来定义的。 DataTree 类定义了一个 ZooKeeper 数据的内存结构。</p><p>DataTree 的内部定义类 nodes 节点类型、root 根节点信息、子节点的 WatchManager 监控信息等数据模型中的相关信息。</p><p>可以说，一个 DataTree 类定义了 ZooKeeper 内存数据的逻辑结构。</p><p>「事务日志」</p><p>为了整个 ZooKeeper 集群中数据的一致性，Leader 服务器会向 ZooKeeper 集群中的其他角色服务发送数据同步信息，在接收到数据同步信息后， ZooKeeper 集群中的 Follow 和 Observer 服务器就会进行数据同步。</p><p>❝ 而这两种角色服务器所接收到的信息就是 Leader 服务器的事务日志。 ❞ 在接收到事务日志后，并在本地服务器上执行。这种数据同步的方式，避免了直接使用实际的业务数据，减少了网络传输的开销，提升了整个 ZooKeeper 集群的执行性能。</p><h2 id="四、watch机制" tabindex="-1"><a class="header-anchor" href="#四、watch机制" aria-hidden="true">#</a> 四、Watch机制</h2><p>ZooKeeper 的客户端可以通过 Watch 机制来订阅当服务器上某一节点的数据或状态发生变化时收到相应的通知；</p><p><strong>「如何实现：」</strong></p><p>我们可以通过向 ZooKeeper 客户端的构造方法中传递 Watcher 参数的方式实现：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>new ZooKeeper(String connectString, int sessionTimeout, Watcher watcher)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码的意思是定义了一个了 ZooKeeper 客户端对象实例，并传入三个参数：</p><ul><li><p>connectString 服务端地址</p></li><li><p>sessionTimeout：超时时间</p></li><li><p>Watcher：监控事件</p></li></ul><p>这个 Watcher 将作为整个 ZooKeeper 会话期间的上下文 ，一直被保存在客户端 ZKWatchManager 的 defaultWatcher 中。</p><p>除此之外，ZooKeeper 客户端也可以通过 getData、exists 和 getChildren 三个接口来向 ZooKeeper 服务器注册 Watcher，从而方便地在不同的情况下添加 Watch 事件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>getData(String path, Watcher watcher, Stat stat)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>触发通知的条件：</p><p><img src="`+n+'" alt="Alt text"></p><p>上图中列出了客户端在不同会话状态下，相应的在服务器节点所能支持的事件类型。</p><ul><li>例如在客户端连接服务端的时候，可以对数据节点的创建、删除、数据变更、子节点的更新等操作进行监控。</li></ul><p><strong>「当服务端某一节点发生数据变更操作时，所有曾经设置了该节点监控事件的客户端都会收到服务器的通知吗？」</strong></p><p>答案是否定的，Watch 事件的触发机制取决于会话的连接状态和客户端注册事件的类型，所以当客户端会话状态或数据节点发生改变时，都会触发对应的 Watch 事件。</p><p><strong>「订阅发布场景实现」</strong></p><blockquote><p>❝</p><p>提到 ZooKeeper 的应用场景，你可能第一时间会想到最为典型的发布订阅功能。</p><p>❞</p></blockquote><p>发布订阅功能可以看作是一个一对多的关系，即一个服务或数据的发布者可以被多个不同的消费者调用。</p><p>一般一个发布订阅模式的数据交互可以分为消费者主动请求生产者信息的拉取模式，和生产者数据变更时主动推送给消费者的推送模式。</p><p>ZooKeeper 采用了两种模式结合的方式实现订阅发布功能。</p><blockquote><p>❝</p><p>下面我们来分析一个具体案例：</p><p>❞</p></blockquote><p>在系统开发的过程中会用到各种各样的配置信息，如数据库配置项、第三方接口、服务地址等，这些配置操作在我们开发过程中很容易完成，但是放到一个大规模的集群中配置起来就比较麻烦了。</p><p>通常这种集群中，我们可以用配置管理功能自动完成服务器配置信息的维护，利用ZooKeeper 的发布订阅功能就能解决这个问题。</p><p>我们可以把诸如数据库配置项这样的信息存储在 ZooKeeper 数据节点中。</p><p>如<code>/confs/data_item1</code>。</p><ul><li><p>服务器集群客户端对该节点添加 Watch 事件监控，当集群中的服务启动时，会读取该节点数据获取数据配置信息。</p></li><li><p>而当该节点数据发生变化时，ZooKeeper 服务器会发送 Watch 事件给各个客户端，集群中的客户端在接收到该通知后，重新读取节点的数据库配置信息。</p></li></ul><p>我们使用 Watch 机制实现了一个分布式环境下的配置管理功能，通过对 ZooKeeper 服务器节点添加数据变更事件，实现当数据库配置项信息变更后，集群中的各个客户端能接收到该变更事件的通知，并获取最新的配置信息。</p><blockquote><p>❝</p><p>要注意一点是，我们提到 Watch 具有一次性，所以当我们获得服务器通知后要再次添加 Watch 事件。</p><p>❞</p></blockquote><h2 id="五、会话机制" tabindex="-1"><a class="header-anchor" href="#五、会话机制" aria-hidden="true">#</a> 五、会话机制</h2><p>ZooKeeper 的工作方式一般是通过客户端向服务端发送请求而实现的。</p><p>而在一个请求的发送过程中，首先，客户端要与服务端进行连接，而一个连接就是一个会话。</p><blockquote><p>❝</p><p>在 ZooKeeper 中，一个会话可以看作是一个用于表示客户端与服务器端连接的数据结构 Session。</p><p>❞</p></blockquote><p>这个数据结构由三个部分组成：分别是会话 ID（sessionID）、会话超时时间（TimeOut）、会话关闭状态（isClosing）</p><ul><li><p>会话 ID：会话 ID 作为一个会话的标识符，当我们创建一次会话的时候，ZooKeeper 会自动为其分配一个唯一的 ID 编码。</p></li><li><p>会话超时时间：一般来说，一个会话的超时时间就是指一次会话从发起后到被服务器关闭的时长。而设置会话超时时间后，服务器会参考设置的超时时间，最终计算一个服务端自己的超时时间。而这个超时时间则是最终真正用于 ZooKeeper 中服务端用户会话管理的超时时间。</p></li><li><p>会话关闭状态：会话关闭 isClosing 状态属性字段表示一个会话是否已经关闭。如果服务器检查到一个会话已经因为超时等原因失效时， ZooKeeper 会在该会话的 isClosing 属性值标记为关闭，再之后就不对该会话进行操作了。</p></li></ul><p><strong>「会话状态」</strong></p><p>在 ZooKeeper 服务的运行过程中，会话会经历不同的状态变化。</p><p>这些状态包括：</p><blockquote><p>❝</p><p>正在连接（CONNECTING）、已经连接（CONNECTIED）、正在重新连接（RECONNECTING）、已经重新连接（RECONNECTED）、会话关闭（CLOSE）等。</p><p>❞</p></blockquote><p>当客户端开始创建一个与服务端的会话操作时，它的会话状态就会变成 CONNECTING，之后客户端会根据服务器地址列表中的服务器 IP 地址分别尝试进行连接。如果遇到一个 IP 地址可以连接到服务器，那么客户端会话状态将变为 CONNECTIED。</p><p>如果因为网络原因造成已经连接的客户端会话断开时，客户端会重新尝试连接服务端。而对应的客户端会话状态又变成 CONNECTING ，直到该会话连接到服务端最终又变成 CONNECTIED。</p><blockquote><p>❝</p><p>在 ZooKeeper 服务的整个运行过程中，会话状态经常会在 CONNECTING 与 CONNECTIED 之间进行切换。</p><p>❞</p></blockquote><p>最后，当出现超时或者客户端主动退出程序等情况时，客户端会话状态则会变为 CLOSE 状态。</p><p><strong>「会话异常」</strong></p><p>在 ZooKeeper 中，会话的超时异常包括客户端 readtimeout 异常和服务器端 sessionTimeout 异常。</p><ul><li>在我们平时的开发中，要明确这两个异常的不同之处在于一个是发生在客户端，而另一个是发生在服务端。</li></ul><p>而对于那些对 ZooKeeper 接触不深的开发人员来说，他们常常踩坑的地方在于，虽然设置了超时间，但是在实际服务运行的时候 ZooKeeper 并没有按照设置的超时时间来管理会话。</p><ul><li>这是因为 ZooKeeper 实际起作用的超时时间是通过客户端和服务端协商决定。</li></ul><p>ZooKeeper 客户端在和服务端建立连接的时候，会提交一个客户端设置的会话超时时间，而该超时时间会和服务端设置的最大超时时间和最小超时时间进行比对，如果正好在其允许的范围内，则采用客户端的超时时间管理会话。</p><p>如果大于或者小于服务端设置的超时时间，则采用服务端设置的值管理会话。</p><p><strong>「分桶策略」</strong></p><p>我们知道在 ZooKeeper 中为了保证一个会话的存活状态，客户端需要向服务器周期性地发送心跳信息。</p><ul><li>而客户端所发送的心跳信息可以是一个 ping 请求，也可以是一个普通的业务请求。</li></ul><p>ZooKeeper 服务端接收请求后，会更新会话的过期时间，来保证会话的存活状态。</p><ul><li>所以在 ZooKeeper 的会话管理中，最主要的工作就是管理会话的过期时间。</li></ul><blockquote><p>❝</p><p>ZooKeeper 中采用了独特的会话管理方式来管理会话的过期时间。</p><p>❞</p></blockquote><p>在 ZooKeeper 中，会话将按照不同的时间间隔进行划分，超时时间相近的会话将被放在同一个间隔区间中，这种方式避免了 ZooKeeper 对每一个会话进行检查，而是采用分批次的方式管理会话。</p><p>这就降低了会话管理的难度，因为每次小批量的处理会话过期也提高了会话处理的效率。</p><p><strong>「ZooKeeper 这种会话管理的好处？」</strong></p><p>ZooKeeper 这种分段的会话管理策略大大提高了计算会话过期的效率，如果是在一个实际生产环境中，一个大型的分布式系统往往具有很高的访问量。</p><p>而 ZooKeeper 作为其中的组件，对外提供服务往往要承担数千个客户端的访问，这其中就要对这几千个会话进行管理。</p><p>在这种场景下，要想通过对每一个会话进行管理和检查并不合适，所以采用将同一个时间段的会话进行统一管理，这样就大大提高了服务的运行效率。</p><p><strong>「底层实现」</strong></p><p>ZooKeeper 底层实现的原理，核心的一点就是过期队列这个数据结构。所有会话过期的相关操作都是围绕这个队列进行的。</p><ul><li>可以说 ZooKeeper 底层就是采用这个队列结构来管理会话过期的。</li></ul><p><strong>「一个会话过期队列是由若干个 bucket 组成的。」</strong></p><ul><li><p>bucket 是一个按照时间划分的区间。</p></li><li><p>在 ZooKeeper 中，通常以 expirationInterval 为单位进行时间区间的划分，它是 ZooKeeper 分桶策略中用于划分时间区间的最小单位。</p></li><li><p>在 ZooKeeper 中，一个过期队列由不同的 bucket 组成。</p></li><li><p>每个 bucket 中存放了在某一时间内过期的会话。</p></li></ul><p>将会话按照不同的过期时间段分别维护到过期队列之后，在 ZooKeeper 服务运行的过程中，具体的执行过程如下图所示。</p><p><img src="'+c+`" alt="Alt text"></p><p>首先，ZooKeeper 服务会开启一个线程专门用来检索过期队列，找出要过期的 bucket，而 ZooKeeper 每次只会让一个 bucket 的会话过期，每当要进行会话过期操作时，ZooKeeper 会唤醒一个处于休眠状态的线程进行会话过期操作，之后会按照上面介绍的操作检索过期队列，取出过期的会话后会执行过期操作。</p><h2 id="六、acl权限" tabindex="-1"><a class="header-anchor" href="#六、acl权限" aria-hidden="true">#</a> 六、ACL权限</h2><p>ZooKeeper的ACL可针对znodes设置相应的权限信息。</p><p>一个 ACL 权限设置通常可以分为 3 部分，分别是：权限模式（Scheme）、授权对象（ID）、权限信息（Permission）。</p><p>最终组成一条例如scheme🆔permission格式的 ACL 请求信息。 「权限模式：Scheme」</p><p>ZooKeeper 的权限验证方式大体分为两种类型，一种是范围验证，另外一种是口令验证。</p><p>❝ 范围验证 ❞ 所谓的范围验证就是说 ZooKeeper 可以针对一个 IP 或者一段 IP 地址授予某种权限。</p><p>比如我们可以让一个 IP 地址为ip：192.168.0.11的机器对服务器上的某个数据节点具有写入的权限。</p><p>或者也可以通过ip:192.168.0.11/22给一段 IP 地址的机器赋权。</p><p>❝ 口令验证 ❞ 可以理解为用户名密码的方式，这是我们最熟悉也是日常生活中经常使用的模式，比如我们打开自己的电脑或者去银行取钱都需要提供相应的密码。</p><p>在 ZooKeeper 中这种验证方式是 Digest 认证，我们知道通过网络传输相对来说并不安全，所以绝不通过明文在网络发送密码也是程序设计中很重要的原则之一，而 Digest 这种认证方式首先在客户端传送username:password这种形式的权限表示符后，ZooKeeper 服务端会对密码部分使用 SHA-1 和 BASE64 算法进行加密，以保证安全性。</p><p>❝ Super 权限模式 ❞ 权限模式 Super 可以认为是一种特殊的 Digest 认证。</p><p>具有 Super 权限的客户端可以对 ZooKeeper 上的任意数据节点进行任意操作。</p><p>下面这段代码给出了 Digest 模式下客户端的调用方式。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//创建节点
create /digest_node1
//设置digest权限验证
setAcl /digest_node1 digest:用户名:base64格式密码:rwadc 
//查询节点Acl权限
getAcl /digest_node1 
//授权操作
addauth digest user:passwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>❝ 如果一个客户端对服务器上的一个节点设置了只有它自己才能操作的权限，那么等这个客户端下线或被删除后。 ❞ 对其创建的节点要想进行修改应该怎么做呢？</p><p>我们可以通过「super 模式」即超级管理员的方式删除该节点或变更该节点的权限验证方式。</p><p>正因为「super 模式」有如此大的权限，我们在平时使用时也应该更加谨慎。</p><p>❝ world 模式 ❞ 这种授权模式对应于系统中的所有用户，本质上起不到任何作用。</p><p>设置了 world 权限模式系统中的所有用户操作都可以不进行权限验证。</p><p>「授权对象（ID）」</p><p>所谓的授权对象就是说我们要把权限赋予谁，而对应于 4 种不同的权限模式来说，如果我们选择采用 IP 方式，使用的授权对象可以是一个 IP 地址或 IP 地址段；而如果使用 Digest 或 Super 方式，则对应于一个用户名。</p><p>如果是 World 模式，是授权系统中所有的用户。</p><p>「权限信息（Permission）」</p><p>权限就是指我们可以在数据节点上执行的操作种类，在 ZooKeeper 中已经定义好的权限有 5 种：</p><ul><li><p>数据节点（create）创建权限，授予权限的对象可以在数据节点下创建子节点；</p></li><li><p>数据节点（wirte）更新权限，授予权限的对象可以更新该数据节点；</p></li><li><p>数据节点（read）读取权限，授予权限的对象可以读取该节点的内容以及子节点的信息；</p></li><li><p>数据节点（delete）删除权限，授予权限的对象可以删除该数据节点的子节点；</p></li><li><p>数据节点（admin）管理者权限，授予权限的对象可以对该数据节点体进行 ACL 权限设置。</p></li></ul><p>❝ 需要注意的一点是，每个节点都有维护自身的 ACL 权限数据，即使是该节点的子节点也是有自己的 ACL 权限而不是直接继承其父节点的权限。 ❞ 「实现自己的权限口控制」</p><p>虽然 ZooKeeper 自身的权限控制机制已经做得很细，但是它还是提供了一种权限扩展机制来让用户实现自己的权限控制方式。</p><p>官方文档中对这种机制的定义是 Pluggable ZooKeeper Authenication，意思是可插拔的授权机制，从名称上我们可以看出它的灵活性。那么这种机制是如何实现的呢？</p><p>❝ 要想实现自定义的权限控制机制，最核心的一点是实现 ZooKeeper 提供的权限控制器接口 AuthenticationProvider。 ❞ 实现了自定义权限后，如何才能让 ZooKeeper 服务端使用自定义的权限验证方式呢？</p><p>接下来就需要将自定义的权限控制注册到 ZooKeeper 服务器中，而注册的方式通常有两种。</p><p>第一种是通过设置系统属性来注册自定义的权限控制器：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-Dzookeeper.authProvider.x=CustomAuthenticationProvider
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>另一种是在配置文件zoo.cfg中进行配置：</p><p><code>authProvider.x=CustomAuthenticationProvider</code></p><p>「实现原理」</p><p>首先是封装该请求的类型，之后将权限信息封装到 request 中并发送给服务端。而服务器的实现比较复杂，首先分析请求类型是否是权限相关操作，之后根据不同的权限模式（scheme）调用不同的实现类验证权限最后存储权限信息。</p><p>在授权接口中，值得注意的是会话的授权信息存储在 ZooKeeper 服务端的内存中，如果客户端会话关闭，授权信息会被删除。</p><p>下次连接服务器后，需要重新调用授权接口进行授权。</p><h2 id="七、序列化方式" tabindex="-1"><a class="header-anchor" href="#七、序列化方式" aria-hidden="true">#</a> 七、序列化方式</h2><p>在 ZooKeeper 中并没有采用和 Java 一样的序列化方式，而是采用了一个 Jute 的序列解决方案作为 ZooKeeper 框架自身的序列化方式。</p><p>❝ ZooKeeper 从最开始就采用 Jute 作为其序列化解决方案，直到其最新的版本依然没有更改。 ❞ 虽然 ZooKeeper 一直将 Jute 框架作为序列化解决方案，但这并不意味着 Jute 相对其他框架性能更好，反倒是 Apache Avro、Thrift 等框架在性能上优于前者。</p><p>之所以 ZooKeeper 一直采用 Jute 作为序列化解决方案，主要是新老版本的兼容等问题。</p><p>「如何 使用 Jute 实现序列化」</p><p>如果我们要想将某个定义的类进行序列化，首先需要该类实现 Record 接口的 serilize 和 deserialize 方法，这两个方法分别是序列化和反序列化方法。</p><p>❝ 下边这段代码给出了我们一般在 ZooKeeper 中进行序列化的具体实现： ❞ 首先，我们定义了一个test_jute类，为了能够对它进行序列化，需要该test_jute类实现 Record 接口，并在对应的 serialize 序列化方法和 deserialize 反序列化方法中编辑具体的实现逻辑。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class test_jute implements Record{
  private long ids；
  private String name;
  ...
  public void serialize(OutpurArchive a_,String tag){
    ...
  }
  public void deserialize(INputArchive a_,String tag){
    ...
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在序列化方法 serialize 中，我们要实现的逻辑是，首先通过字符类型参数 tag 传递标记序列化标识符，之后使用 writeLong 和 writeString 等方法分别将对象属性字段进行序列化。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public void serialize(OutpurArchive a_,String tag) throws ...{
  a_.startRecord(this.tag);
  a_.writeLong(ids,&quot;ids&quot;);
  a_.writeString(type,&quot;name&quot;);
  a_.endRecord(this,tag);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用 derseralize 在实现反序列化的过程则与我们上边说的序列化过程正好相反。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public void deserialize(INputArchive a_,String tag) throws {
  a_.startRecord(tag);
  ids = a_.readLong(&quot;ids&quot;);
  name = a_.readString(&quot;name&quot;);
  a_.endRecord(tag);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>序列化和反序列化的实现逻辑编码方式相对固定，首先通过 startRecord 开启一段序列化操作，之后通过 writeLong、writeString 或 readLong、 readString 等方法执行序列化或反序列化。</p><p>本例中只是实现了长整型和字符型的序列化和反序列化操作，除此之外 ZooKeeper 中的 Jute 框架还支持整数类型（Int）、布尔类型（Bool）、双精度类型（Double）以及 Byte/Buffer 类型。</p><h2 id="八、集群" tabindex="-1"><a class="header-anchor" href="#八、集群" aria-hidden="true">#</a> 八、集群</h2><p>「ZooKeeper集群模式的特点」</p><p>在 ZooKeeper 集群中将服务器分成 「Leader 、Follow 、Observer 三」种角色服务器，在集群运行期间这三种服务器所负责的工作各不相同：</p><p>Leader 角色服务器负责管理集群中其他的服务器，是集群中工作的分配和调度者，既可以为客户端提供写服务又能提供读服务。</p><p>Follow 服务器的主要工作是选举出 Leader 服务器，在发生 Leader 服务器选举的时候，系统会从 Follow 服务器之间根据多数投票原则，选举出一个 Follow 服务器作为新的 Leader 服务器，只能提供读服务。</p><p>Observer 服务器则主要负责处理来自客户端的获取数据等请求，并不参与 Leader 服务器的选举操作，也不会作为候选者被选举为 Leader 服务器，只能提供读服务。</p><p>在 ZooKeeper 集群接收到来自客户端的会话请求操作后，首先会判断该条请求是否是事务性的会话请求。</p><p>❝ 对于事务性的会话请求，ZooKeeper 集群服务端会将该请求统一转发给 Leader 服务器进行操作。 所谓事务性请求，是指 ZooKeeper 服务器执行完该条会话请求后，是否会导致执行该条会话请求的服务器的数据或状态发生改变，进而导致与其他集群中的服务器出现数据不一致的情况。 ❞ Leader 服务器内部执行该条事务性的会话请求后，再将数据同步给其他角色服务器，从而保证事务性会话请求的执行顺序，进而保证整个 ZooKeeper 集群的数据一致性。</p><p>❝ 在 ZooKeeper 集群的内部实现中，是通过什么方法保证所有 ZooKeeper 集群接收到的事务性会话请求都能交给 Leader 服务器进行处理的呢？ ❞ 在 ZooKeeper 集群内部，集群中除 Leader 服务器外的其他角色服务器接收到来自客户端的事务性会话请求后，必须将该条会话请求转发给 Leader 服务器进行处理。</p><p>ZooKeeper 集群中的 Follow 和 Observer 服务器，都会检查当前接收到的会话请求是否是事务性的请求，如果是事务性的请求，那么就将该请求以 REQUEST 消息类型转发给 Leader 服务器。</p><p>在 ZooKeeper集群中的服务器接收到该条消息后，会对该条消息进行解析。</p><p>分析出该条消息所包含的原始客户端会话请求。</p><p>之后将该条消息提交到自己的 Leader 服务器请求处理链中，开始进行事务性的会话请求操作。</p><p>如果不是事务性请求，ZooKeeper 集群则交由 Follow 和 Observer 角色服务器处理该条会话请求，如查询数据节点信息。</p><p>当一个业务场景在查询操作多而创建删除等事务性操作少的情况下，ZooKeeper 集群的性能表现的就会很好。</p><p>❝ 如果是在极端情况下，ZooKeeper 集群只有事务性的会话请求而没有查询操作，那么 Follow 和 Observer 服务器就只能充当一个请求转发服务器的角色， 所有的会话的处理压力都在 Leader 服务器。 ❞ 在处理性能上整个集群服务器的瓶颈取决于 Leader 服务器的性能。</p><p>❝ ZooKeeper 集群的作用只能保证在 Leader 节点崩溃的时候，重新选举出 Leader 服务器保证系统的稳定性。 ❞ 这也是 ZooKeeper 设计的一个缺点。</p><p>「Leader选举」</p><p>Leader 服务器的选举操作主要发生在两种情况下。</p><p>第一种就是 ZooKeeper 集群服务启动的时候，第二种就是在 ZooKeeper 集群中旧的 Leader 服务器失效时，这时 ZooKeeper 集群需要选举出新的 Leader 服务器。</p><p>❝ ZooKeeper 集群重新选举 Leader 的过程只有 Follow 服务器参与工作。 ❞ ❝ 服务器状态 ❞ 服务器具有四种状态，分别是LOOKING、FOLLOWING、LEADING、OBSERVING。</p><p>「LOOKING」：寻找Leader状态。当服务器处于该状态时，它会认为当前集群中没有Leader，因此需要进入Leader选举状态。</p><p>「FOLLOWING」：跟随者状态。表明当前服务器角色是Follower。</p><p>「LEADING」：领导者状态。表明当前服务器角色是Leader。</p><p>「OBSERVING」：观察者状态。表明当前服务器角色是Observer。</p><p>「事务ID（zxid）」</p><p>Zookeeper的状态变化，都会由一个Zookeeper事务ID（ZXID）标识。</p><p>❝ 写入Zookeeper，会导致状态变化，每次写入都会导致ZXID发生变化。 ❞ ZXID由Leader统一分配，全局唯一，长度64位，递增。</p><p>ZXID展示了所有的Zookeeper转台变更顺序，每次变更都有一个唯一ZXID，如果zxid1小于zxid2，则说明zxid1的事务在zxid2的事务之前发生。</p><p>「选举过程」</p><p>在 ZooKeeper 集群重新选举 Leader 节点的过程中，主要可以分为 Leader 失效发现、重新选举 Leader 、Follow 服务器角色变更、集群同步这几个步骤。</p><p>❝ Leader 失效发现 ❞ 在 ZooKeeper 集群中，当 Leader 服务器失效时，ZooKeeper 集群会重新选举出新的 Leader 服务器。</p><p>在 ZooKeeper 集群中，探测 Leader 服务器是否存活的方式与保持客户端活跃性的方法非常相似。 首先，Follow 服务器会定期向 Leader 服务器发送 网络请求，在接收到请求后，Leader 服务器会返回响应数据包给 Follow 服务器，而在 Follow 服务器接收到 Leader 服务器的响应后，如果判断 Leader 服务器运行正常，则继续进行数据同步和服务转发等工作，反之，则进行 Leader 服务器的重新选举操作。</p><p>❝ Leader重新选举 ❞ 当 Follow 服务器向 Leader 服务器发送状态请求包后，如果没有得到 Leader 服务器的返回信息，这时，如果是集群中个别的 Follow 服务器发现返回错误，并不会导致 ZooKeeper 集群立刻重新选举 Leader 服务器，而是将该 Follow 服务器的状态变更为 LOOKING 状态，并向网络中发起投票，当 ZooKeeper 集群中有更多的机器发起投票，最后当投票结果满足多数原则的情况下。</p><p>ZooKeeper 会重新选举出 Leader 服务器。</p><p>❝ Follow 角色变更 ❞ 在 ZooKeeper 集群中，Follow 服务器作为 Leader 服务器的候选者，当被选举为 Leader 服务器之后，其在 ZooKeeper 集群中的 Follow 角色，也随之发生改变。也就是要转变为 Leader 服务器，并作为 ZooKeeper 集群中的 Leader 角色服务器对外提供服务。</p><p>❝ 集群同步数据 ❞ 在 ZooKeeper 集群成功选举 Leader 服务器，并且候选 Follow 服务器的角色变更后。</p><p>为避免在这期间导致的数据不一致问题，ZooKeeper 集群在对外提供服务之前，会通过 Leader 角色服务器管理同步其他角色服务器。</p><p>「底层实现」</p><p>首先，ZooKeeper 集群会先判断 Leader 服务器是否失效，而判断的方式就是 Follow 服务器向 Leader 服务器发送请求包，之后 Follow 服务器接收到响应数据后，进行解析，Follow 服务器会根据返回的数据，判断 Leader 服务器的运行状态，如果返回的是 LOOKING 关键字，表明与集群中 Leader 服务器无法正常通信。</p><p>之后，在 ZooKeeper 集群选举 Leader 服务器时，是通过 「FastLeaderElection」 类实现的。 该类实现了 TCP 方式的通信连接，用于在 ZooKeeper 集群中与其他 Follow 服务器进行协调沟通。</p><p>FastLeaderElection 类继承了 Election 接口，定义其是用来进行选举的实现类。</p><p>而在其内部，又定义了选举通信相关的一些配置参数，比如 finalizeWait 最终等待时间、最大通知间隔时间 maxNotificationInterval 等。 在选举的过程中，首先调用 ToSend 函数向 ZooKeeper 集群中的其他角色服务器发送本机的投票信息，其他服务器在接收投票信息后，会对投票信息进行有效性验证等操作，之后 ZooKeeper 集群统计投票信息，如果过半数的机器投票信息一致，则集群就重新选出新的 Leader 服务器。</p><p>❝ 这里我们要注意一个问题，那就是在重新选举 Leader 服务器的过程中，ZooKeeper 集群理论上是无法进行事务性的请求处理的。 ❞ 因此，发送到 ZooKeeper 集群中的事务性会话会被挂起，暂时不执行，等到选举出新的 Leader 服务器后再进行操作。</p><p>「Observer」</p><p>在 ZooKeeper 集群服务运行的过程中，Observer 服务器与 Follow 服务器具有一个相同的功能，那就是负责处理来自客户端的诸如查询数据节点等非事务性的会话请求操作。</p><p>但与 Follow 服务器不同的是，Observer 不参与 Leader 服务器的选举工作，也不会被选举为 Leader 服务器。 在早期的 ZooKeeper 集群服务运行过程中，只有 Leader 服务器和 Follow 服务器。</p><p>不过随着 ZooKeeper 在分布式环境下的广泛应用，早期模式的设计缺点也随之产生，主要带来的问题有如下几点：</p><p>随着集群规模的变大，集群处理写入的性能反而下降。</p><p>ZooKeeper 集群无法做到跨域部署。</p><p>其中最主要的问题在于，当 ZooKeeper 集群的规模变大，集群中 Follow 服务器数量逐渐增多的时候，ZooKeeper 处理创建数据节点等事务性请求操作的性能就会逐渐下降。</p><p>这是因为 ZooKeeper 集群在处理事务性请求操作时，要在 ZooKeeper 集群中对该事务性的请求发起投票，只有超过半数的 Follow 服务器投票一致，才会执行该条写入操作。</p><p>正因如此，随着集群中 Follow 服务器的数量越来越多，一次写入等相关操作的投票也就变得越来越复杂，并且 Follow 服务器之间彼此的网络通信也变得越来越耗时，导致随着 Follow 服务器数量的逐步增加，事务性的处理性能反而变得越来越低。</p><p>为了解决这一问题，在 ZooKeeper 3.6 版本后，ZooKeeper 集群中创建了一种新的服务器角色，即 Observer——观察者角色服务器。 Observer 可以处理 ZooKeeper 集群中的非事务性请求，并且不参与 Leader 节点等投票相关的操作。</p><p>这样既保证了 ZooKeeper 集群性能的扩展性，又避免了因为过多的服务器参与投票相关的操作而影响 ZooKeeper 集群处理事务性会话请求的能力。</p><p>在实际部署的时候，因为 Observer 不参与 Leader 节点等操作，并不会像 Follow 服务器那样频繁的与 Leader 服务器进行通信。 因此，可以将 Observer 服务器部署在不同的网络区间中，这样也不会影响整个 ZooKeeper 集群的性能，也就是所谓的跨域部署。</p><p>「在我们日常使用 ZooKeeper 集群服务器的时候，集群中的机器个数应该选择奇数个？」</p><p>两个原因：</p><p>❝ 在容错能力相同的情况下，奇数台更节省资源 ❞ Zookeeper中 Leader 选举算法采用了Zab协议。</p><p>Zab核心思想是当多数 Server 写成功，则写成功。</p><p>举两个例子：</p><p>假如zookeeper集群1 ，有3个节点，3/2=1.5 , 即zookeeper想要正常对外提供服务（即leader选举成功），至少需要2个节点是正常的。换句话说，3个节点的zookeeper集群，允许有一个节点宕机。</p><p>假如zookeeper集群2，有4个节点，4/2=2 , 即zookeeper想要正常对外提供服务（即leader选举成功），至少需要3个节点是正常的。换句话说，4个节点的zookeeper集群，也允许有一个节点宕机。</p><p>集群1与集群2都有 允许1个节点宕机 的容错能力，但是集群2比集群1多了1个节点。在相同容错能力的情况下，本着节约资源的原则，zookeeper集群的节点数维持奇数个更好一些。</p><p>❝ 防止由脑裂造成的集群不可用。 ❞ 集群的脑裂通常是发生在节点之间通信不可达的情况下，集群会分裂成不同的小集群，小集群各自选出自己的master节点，导致原有的集群出现多个master节点的情况，这就是脑裂。</p><p>下面举例说一下为什么采用奇数台节点，就可以防止由于脑裂造成的服务不可用：</p><p>假如zookeeper集群有 5 个节点，发生了脑裂，脑裂成了A、B两个小集群：</p><p>A ：1个节点 ，B ：4个节点</p><p>A ：2个节点， B ：3个节点</p><p>可以看出，上面这两种情况下，A、B中总会有一个小集群满足 可用节点数量 &gt; 总节点数量/2 。</p><p>所以zookeeper集群仍然能够选举出leader ， 仍然能对外提供服务，只不过是有一部分节点失效了而已。</p><p>假如zookeeper集群有4个节点，同样发生脑裂，脑裂成了A、B两个小集群：</p><p>A：1个节点 ， B：3个节点</p><p>A：2个节点 ， B：2个节点</p><p>因为A和B都是2个节点，都不满足 可用节点数量 &gt; 总节点数量/2 的选举条件， 所以此时zookeeper就彻底不能提供服务了。</p><h2 id="九、zab协议" tabindex="-1"><a class="header-anchor" href="#九、zab协议" aria-hidden="true">#</a> 九、ZAB协议</h2><p><strong>「ZAB 协议算法」</strong></p><p>ZooKeeper 最核心的作用就是保证分布式系统的数据一致性，而无论是处理来自客户端的会话请求时，还是集群 Leader 节点发生重新选举时，都会产生数据不一致的情况。</p><blockquote><p>❝</p><p>为了解决这个问题，ZooKeeper 采用了 ZAB 协议算法。</p><p>❞</p></blockquote><p>ZAB 协议算法（Zookeeper Atomic Broadcast ，Zookeeper 原子广播协议）是 ZooKeeper 专门设计用来解决集群最终一致性问题的算法，它的两个核心功能点是崩溃恢复和原子广播协议。</p><ul><li>在整个 ZAB 协议的底层实现中，ZooKeeper 集群主要采用主从模式的系统架构方式来保证 ZooKeeper 集群系统的一致性。</li></ul><p>当接收到来自客户端的事务性会话请求后，系统集群采用主服务器来处理该条会话请求，经过主服务器处理的结果会通过网络发送给集群中其他从节点服务器进行数据同步操作。</p><blockquote><p>❝</p><p>以 ZooKeeper 集群为例，这个操作过程可以概括为：</p><p>❞</p></blockquote><p>当 ZooKeeper 集群接收到来自客户端的事务性的会话请求后，集群中的其他 Follow 角色服务器会将该请求转发给 Leader 角色服务器进行处理。</p><p>当 Leader 节点服务器在处理完该条会话请求后，会将结果通过操作日志的方式同步给集群中的 Follow 角色服务器。</p><p>然后 Follow 角色服务器根据接收到的操作日志，在本地执行相关的数据处理操作，最终完成整个 ZooKeeper 集群对客户端会话的处理工作。</p><p><strong>「崩溃恢复」</strong></p><p>当集群中的 Leader 发生故障的时候，整个集群就会因为缺少 Leader 服务器而无法处理来自客户端的事务性的会话请求。</p><blockquote><p>❝</p><p>因此，为了解决这个问题。在 ZAB 协议中也设置了处理该问题的崩溃恢复机制。</p><p>❞</p></blockquote><p>崩溃恢复机制是保证 ZooKeeper 集群服务高可用的关键。触发 ZooKeeper 集群执行崩溃恢复的事件是集群中的 Leader 节点服务器发生了异常而无法工作，于是 Follow 服务器会通过投票来决定是否选出新的 Leader 节点服务器。</p><blockquote><p>❝</p><p>投票过程如下：</p><p>❞</p></blockquote><p>当崩溃恢复机制开始的时候，整个 ZooKeeper 集群的每台 Follow 服务器会发起投票，并同步给集群中的其他 Follow 服务器。</p><p>在接收到来自集群中的其他 Follow 服务器的投票信息后，集群中的每个 Follow 服务器都会与自身的投票信息进行对比，如果判断新的投票信息更合适，则采用新的投票信息作为自己的投票信息。在集群中的投票信息还没有达到超过半数原则的情况下，再进行新一轮的投票，最终当整个 ZooKeeper 集群中的 Follow 服务器超过半数投出的结果相同的时候，就会产生新的 Leader 服务器。</p><blockquote><p>❝</p><p>选票结构：</p><p>❞</p></blockquote><p>以 Fast Leader Election 选举的实现方式来讲，如下图所示，一个选票的整体结果可以分为一下六个部分：</p><p><img src="`+u+'" alt="Alt text"></p><ul><li><p>logicClock：用来记录服务器的投票轮次。logicClock 会从 1 开始计数，每当该台服务经过一轮投票后，logicClock 的数值就会加 1 。</p></li><li><p>state：用来标记当前服务器的状态。在 ZooKeeper 集群中一台服务器具有 LOOKING、FOLLOWING、LEADERING、OBSERVING 这四种状态。</p></li><li><p><code>self_id</code>：用来表示当前服务器的 ID 信息，该字段在 ZooKeeper 集群中主要用来作为服务器的身份标识符。</p></li><li><p><code>self_zxid</code>：当前服务器上所保存的数据的最大事务 ID ，从 0 开始计数。</p></li><li><p><code>vote_id</code>：投票要被推举的服务器的唯一 ID 。</p></li><li><p><code>vote_zxid</code>：被推举的服务器上所保存的数据的最大事务 ID ，从 0 开始计数。</p></li></ul><p>当 ZooKeeper 集群需要重新选举出新的 Leader 服务器的时候，就会根据上面介绍的投票信息内容进行对比，以找出最适合的服务器。</p><blockquote><p>❝</p><p>选票筛选</p><p>❞</p></blockquote><p>当一台 Follow 服务器接收到网络中的其他 Follow 服务器的投票信息后，是如何进行对比来更新自己的投票信息的。</p><p>Follow 服务器进行选票对比的过程，如下图所示。</p><p><img src="'+g+'" alt="Alt text"></p><p>首先，会对比 logicClock 服务器的投票轮次，当 logicClock 相同时，表明两张选票处于相同的投票阶段，并进入下一阶段，否则跳过。</p><p>接下来再对比<code>vote_zxid</code>被选举的服务器 ID 信息，若接收到的外部投票信息中的 <code>vote_zxid</code>字段较大，则将自己的票中的<code>vote_zxid</code>与<code>vote_myid</code>更新为收到的票中的<code>vote_zxid</code>与<code>vote_myid</code>，并广播出去。</p><p>要是对比的结果相同，则继续对比<code>vote_myid</code>被选举服务器上所保存的最大事务 ID ，若外部投票的<code>vote_myid</code> 比较大，则将自己的票中的 <code>vote_myid</code>更新为收到的票中的<code>vote_myid</code> 。</p><p>经过这些对比和替换后，最终该台 Follow 服务器会产生新的投票信息，并在下一轮的投票中发送到 ZooKeeper 集群中。</p><p><strong>「消息广播」</strong></p><p>在 Leader 节点服务器处理请求后，需要通知集群中的其他角色服务器进行数据同步。ZooKeeper 集群采用消息广播的方式发送通知。</p><p>ZooKeeper 集群使用原子广播协议进行消息发送，该协议的底层实现过程与二阶段提交过程非常相似，如下图所示。</p><p><img src="'+Z+`" alt="Alt text"></p><p>当要在集群中的其他角色服务器进行数据同步的时候，Leader 服务器将该操作过程封装成一个 Proposal 提交事务，并将其发送给集群中其他需要进行数据同步的服务器。</p><p>当这些服务器接收到 Leader 服务器的数据同步事务后，会将该条事务能否在本地正常执行的结果反馈给 Leader 服务器，Leader 服务器在接收到其他 Follow 服务器的反馈信息后进行统计，判断是否在集群中执行本次事务操作。</p><p>这里请注意 ，与二阶段提交过程不同（即需要集群中所有服务器都反馈可以执行事务操作后，主服务器再次发送 commit 提交请求执行数据变更） ，ZAB 协议算法省去了中断的逻辑，当 ZooKeeper 集群中有超过一半的 Follow 服务器能够正常执行事务操作后，整个 ZooKeeper 集群就可以提交 Proposal 事务了。</p><h2 id="十、日志清理" tabindex="-1"><a class="header-anchor" href="#十、日志清理" aria-hidden="true">#</a> 十、日志清理</h2><p>「日志类型」</p><p>在 ZooKeeper 服务运行的时候，一般会产生数据快照和日志文件，数据快照用于集群服务中的数据同步，而数据日志则记录了 ZooKeeper 服务运行的相关状态信息。</p><p>❝ 其中，数据日志是我们在生产环境中需要定期维护和管理的文件。 ❞ 「清理方案」</p><p>如上面所介绍的，面对生产系统中产生的日志，一般的维护操作是备份和清理。</p><p>备份是为了之后对系统的运行情况进行排查和优化，而清理主要因为随着系统日志的增加，日志会逐渐占用系统的存储空间，如果一直不进行清理，可能耗尽系统的磁盘存储空间，并最终影响服务的运行。</p><p>「清理工具」</p><p>❝ Corntab ❞ 首先，我们介绍的是 Linux corntab ，它是 Linux 系统下的软件，可以自动地按照我们设定的时间，周期性地执行我们编写的相关脚本。</p><p>crontab 定时脚本的方式相对灵活，可以按照我们的业务需求来设置处理日志的维护方式，比如这里我们希望定期清除 ZooKeeper 服务运行的日志，而不想清除数据快照的文件，则可以通过脚本设置，达到只对数据日志文件进行清理的目的。</p><p>❝ PurgeTxnLog ❞ ZooKeeper 自身还提供了 PurgeTxnLog 工具类，用来清理 snapshot 数据快照文件和系统日志。</p><p>PurgeTxnLog 清理方式和我们上面介绍的方式十分相似，也是通过定时脚本执行任务，唯一的不同是，上面提到在编写日志清除 logsCleanWeek 的时候 ，我们使用的是原生 shell 脚本自己手动编写的数据日志清理逻辑，而使用 PurgeTxnLog 则可以在编写清除脚本的时候调用 ZooKeeper 为我们提供的工具类完成日志清理工作。</p><p>如下面的代码所示，首先，我们在/usr/bin目录下创建一个 PurgeLogsClean 脚本。注意这里的脚本也是一个 shell 文件。</p><p>在脚本中我们只需要编写 PurgeTxnLog 类的调用程序，系统就会自动通过 PurgeTxnLog 工具类为我们完成对应日志文件的清理工作。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/sh  
java -cp &quot;$CLASSPATH&quot; org.apache.zookeeper.server.PurgeTxnLog 
echo &quot;清理完成&quot; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>PurgeTxnLog 方式与 crontab 相比，使用起来更加容易而且也更加稳定安全，不过 crontab 方式更加灵活，我们可以根据不同的业务需求编写自己的清理逻辑。</p><h2 id="十一、实现分布式锁" tabindex="-1"><a class="header-anchor" href="#十一、实现分布式锁" aria-hidden="true">#</a> 十一、实现分布式锁</h2><p>分布式锁的目的是保证在分布式部署的应用集群中，多个服务在请求同一个方法或者同一个业务操作的情况下，对应业务逻辑只能被一台机器上的一个线程执行，避免出现并发问题。</p><blockquote><p>❝</p><p>实现分布式锁目前有三种流行方案，即基于数据库、Redis、ZooKeeper 的方案</p><p>❞</p></blockquote><p><strong>「方案一：」</strong></p><p>使用节点中的存储数据区域，ZK中节点存储数据的大小不能超过1M，但是只是存放一个标识是足够的，线程获得锁时，先检查该标识是否是无锁标识，若是可修改为占用标识，使用完再恢复为无锁标识</p><p><strong>「方案二：」</strong></p><p>使用子节点，每当有线程来请求锁的时候，便在锁的节点下创建一个子节点，子节点类型必须维护一个顺序，对子节点的自增序号进行排序，默认总是最小的子节点对应的线程获得锁，释放锁时删除对应子节点便可</p><p><img src="`+K+'" alt="Alt text"></p><p><strong>「死锁风险:」</strong></p><p>两种方案其实都是可行的，但是使用锁的时候一定要去规避死锁</p><ul><li><p>方案一看上去是没问题的，用的时候设置标识，用完清除标识，但是要是持有锁的线程发生了意外，释放锁的代码无法执行，锁就无法释放，其他线程就会一直等待锁，相关同步代码便无法执行</p></li><li><p>方案二也存在这个问题，但方案二可以利用ZK的临时顺序节点来解决这个问题，只要线程发生了异常导致程序中断，就会丢失与ZK的连接，ZK检测到该链接断开，就会自动删除该链接创建的临时节点，这样就可以达到即使占用锁的线程程序发生意外，也能保证锁正常释放的目的</p></li></ul><p><strong>「避免羊群效应」</strong></p><p>把锁请求者按照后缀数字进行排队，后缀数字小的锁请求者先获取锁。</p><p>如果所有的锁请求者都 watch 锁持有者，当代表锁请求者的 znode 被删除以后，所有的锁请求者都会通知到，但是只有一个锁请求者能拿到锁。这就是羊群效应。</p><blockquote><p>❝</p><p>为了避免羊群效应，每个锁请求者 watch 它前面的锁请求者。</p><p>❞</p></blockquote><p>每次锁被释放，只会有一个锁请求者 会被通知到。</p><p>这样做还让锁的分配具有公平性，锁定的分配遵循先到先得的原则。</p><p><img src="'+b+'" alt="Alt text"></p><p><strong>「用 ZooKeeper 实现分布式锁的算法流程，根节点为 /lock：」</strong></p><ul><li><p>客户端连接 ZooKeeper，并<code>在/lock</code>下创建临时有序子节点，第一个客户端对应的子节点为<code>/lock/lock01/00000001</code>，第二个为 <code>/lock/lock01/00000002</code>；</p></li><li><p>其他客户端获取<code>/lock01</code>下的子节点列表，判断自己创建的子节点是否为当前列表中序号最小的子节点；</p></li><li><p>如果是则认为获得锁，执行业务代码，否则通过 watch 事件监听<code>/lock01</code>的子节点变更消息，获得变更通知后重复此步骤直至获得锁；</p></li><li><p>完成业务流程后，删除对应的子节点，释放分布式锁；</p></li></ul><p>在实际开发中，可以应用 Apache Curator 来快速实现分布式锁，Curator 是 Netflix 公司开源的一个 ZooKeeper 客户端，对 ZooKeeper 原生 API 做了抽象和封装。</p><h2 id="十二、实现分布式id" tabindex="-1"><a class="header-anchor" href="#十二、实现分布式id" aria-hidden="true">#</a> 十二、实现分布式ID</h2><p>我们可以通过 ZooKeeper 自身的客户端和服务器运行模式，来实现一个分布式网络环境下的 ID 请求和分发过程。</p><p>❝ 每个需要 ID 编码的业务服务器可以看作是 ZooKeeper 的客户端。ID 编码生成器可以作为 ZooKeeper 的服务端。 ❞ 客户端通过发送请求到 ZooKeeper 服务器，来获取编码信息，服务端接收到请求后，发送 ID 编码给客户端。</p><p>「实现原理：」</p><p>可以利用 ZooKeeper 数据模型中的顺序节点作为 ID 编码。</p><p>客户端通过调用 create 函数创建顺序节点。服务器成功创建节点后，会响应客户端请求，把创建好的节点信息发送给客户端。</p><p>客户端用数据节点名称作为 ID 编码，进行之后的本地业务操作。</p><p>利用 ZooKeeper 中的顺序节点特性，很容易使我们创建的 ID 编码具有有序的特性。并且我们也可以通过客户端传递节点的名称，根据不同的业务编码区分不同的业务系统，从而使编码的扩展能力更强。</p><p>❝ 虽然使用 ZooKeeper 的实现方式有这么多优点，但也会有一些潜在的问题。 ❞ 其中最主要的是，在定义编码的规则上还是强烈依赖于程序员自身的能力和对业务的深入理解。</p><p>很容易出现因为考虑不周，造成设置的规则在运行一段时间后，无法满足业务要求或者安全性不够等问题。</p><h2 id="十三、实现负载均衡" tabindex="-1"><a class="header-anchor" href="#十三、实现负载均衡" aria-hidden="true">#</a> 十三、实现负载均衡</h2><p><strong>「常见负载均衡算法」</strong></p><blockquote><p>❝</p><p>轮询法</p><p>❞</p></blockquote><p>轮询法是最为简单的负载均衡算法，当接收到来自网络中的客户端请求后，负载均衡服务器会按顺序逐个分配给后端服务。</p><p>比如集群中有 3 台服务器，分别是 server1、server2、server3，轮询法会按照 sever1、server2、server3 这个顺序依次分发会话请求给每个服务器。当第一次轮询结束后，会重新开始下一轮的循环。</p><blockquote><p>❝</p><p>随机法</p><p>❞</p></blockquote><p>随机算法是指负载均衡服务器在接收到来自客户端的请求后，会根据一定的随机算法选中后台集群中的一台服务器来处理这次会话请求。</p><p>不过，当集群中备选机器变的越来越多时，通过统计学我们可以知道每台机器被抽中的概率基本相等，因此随机算法的实际效果越来越趋近轮询算法。</p><blockquote><p>❝</p><p>原地址哈希法</p><p>❞</p></blockquote><p>原地址哈希算法的核心思想是根据客户端的 IP 地址进行哈希计算，用计算结果进行取模后，根据最终结果选择服务器地址列表中的一台机器，处理该条会话请求。</p><p>采用这种算法后，当同一 IP 的客户端再次访问服务端后，负载均衡服务器最终选举的还是上次处理该台机器会话请求的服务器，也就是每次都会分配同一台服务器给客户端。</p><blockquote><p>❝</p><p>加权轮询法</p><p>❞</p></blockquote><p>加权轮询的方式与轮询算法的方式很相似，唯一的不同在于选择机器的时候，不只是单纯按照顺序的方式选择，还根据机器的配置和性能高低有所侧重，配置性能好的机器往往首先分配。</p><blockquote><p>❝</p><p>加权随机法</p><p>❞</p></blockquote><p>加权随机法和我们上面提到的随机算法一样，在采用随机算法选举服务器的时候，会考虑系统性能作为权值条件。</p><blockquote><p>❝</p><p>最小连接数法</p><p>❞</p></blockquote><p>最小连接数算法是指，根据后台处理客户端的连接会话条数，计算应该把新会话分配给哪一台服务器。</p><p>一般认为，连接数越少的机器，在网络带宽和计算性能上都有很大优势，会作为最优先分配的对象。</p><p><strong>「利用 ZooKeeper 实现 负载均衡 算法」</strong></p><blockquote><p>❝</p><p>这里我们通过采用最小连接数算法，来确定究竟如何均衡地分配网络会话请求给后台客户端。</p><p>❞</p></blockquote><p>如下图所示，建立的 ZooKeeper 数据模型中 Severs 节点可以作为存储服务器列表的父节点。</p><p>在它下面创建 servers_host1、servers_host2、servers_host3等临时节点来存储集群中的服务器运行状态信息。</p><p><img src="'+h+'" alt="Alt text"></p><p>整个实现的过程如下图所示。</p><p><img src="'+v+'" alt="Alt text"></p><ul><li><p>首先，在接收到客户端的请求后，通过 getData 方法获取服务端 Severs 节点下的服务器列表，其中每个节点信息都存储有当前服务器的连接数。</p></li><li><p>通过判断选择最少的连接数作为当前会话的处理服务器，并通过 setData 方法将该节点连接数加 1。</p></li><li><p>最后，当客户端执行完毕，再调用 setData 方法将该节点信息减 1。</p></li><li><p>我们定义当服务器接收到会话请求后。在 ZooKeeper 服务端增加连接数的 addBlance 方法。</p></li><li><p>我们通过 readData 方法获取服务器最新的连接数，之后将该连接数加 1，再通过 writeData 方法将新的连接数信息写入到服务端对应节点信息中。</p></li><li><p>当服务器处理完该会话请求后，需要更新服务端相关节点的连接数。</p></li><li><p>具体的操作与 addBlance 方法基本一样，只是对获取的连接信息进行减一操作。</p></li></ul><p><strong>「这里注意：」</strong></p><p>我们日常用到的负载均衡器主要是选择后台处理的服务器，并给其分发请求。</p><blockquote><p>❝</p><p>而通过 ZooKeeper 实现的服务器，只提供了服务器的筛选工作。</p><p>❞</p></blockquote><p>在请求分发的过程中，还是通过负载算法计算出要访问的服务器，之后客户端自己连接该服务器，完成请求操作。</p><h2 id="十四、开源框架使用案例" tabindex="-1"><a class="header-anchor" href="#十四、开源框架使用案例" aria-hidden="true">#</a> 十四、开源框架使用案例</h2><p><strong>「Dubbo与ZooKeeper」</strong></p><p>Dubbo 是阿里巴巴开发的一套开源的技术框架，是一款高性能、轻量级的开源 Java RPC 框架。</p><p><strong>「用ZooKeeper做注册中心」</strong></p><p>在整个 Dubbo 框架的实现过程中，注册中心是其中最为关键的一点，它保证了整个 PRC 过程中服务对外的透明性。</p><p>而 Dubbo 的注册中心也是通过 ZooKeeper 来实现的。</p><p>如下图所示，在整个 Dubbo 服务的启动过程中，服务提供者会在启动时向 <code>/dubbo/com.foo.BarService/providers</code>目录写入自己的 URL 地址，这个操作可以看作是一个 ZooKeeper 客户端在 ZooKeeper 服务器的数据模型上创建一个数据节点。</p><p>服务消费者在启动时订阅 <code>/dubbo/com.foo.BarService/providers</code> 目录下的提供者 URL 地址，并向 <code>/dubbo/com.foo.BarService/consumers</code> 目录写入自己的 URL 地址。</p><p>该操作是通过 ZooKeeper 服务器在 /consumers 节点路径下创建一个子数据节点，然后再在请求会话中发起对 /providers 节点的 watch 监控</p><p><img src="'+m+'" alt="Alt text"></p><p><strong>「Kafka与ZooKeeper」</strong></p><p><strong>「Zookeeper的作用」</strong></p><p>由于 Broker 服务器采用分布式集群的方式工作，那么在服务的运行过程中，难免出现某台机器因异常而关闭的状况。</p><p>为了保证整个 Kafka 集群的可用性，需要在系统中监控整个机器的运行情况。而 Kafka 可以通过 ZooKeeper 中的数据节点，将网络中机器的运行统计存储在数据模型中的 brokers 节点下。</p><p>在 Kafka 的 Topic 信息注册中也需要使用到 ZooKeeper ，在 Kafka 中同一个Topic 消息容器可以分成多个不同片，而这些分区既可以存在于一台 Broker 服务器中，也可以存在于不同的 Broker 服务器中。</p><p>而在 Kafka 集群中，每台 Broker 服务器又相对独立。</p><p>为了能够读取这些以分布式方式存储的分区信息，Kafka 会将这些分区信息在 Broker 服务器中的对应关系存储在 ZooKeeper 数据模型的 topic 节点上，每一个 topic 在 ZooKeeper 数据节点上都会以 <code>/brokers/topics/[topic]</code> 的形式存在。</p><p><img src="'+L+'" alt="Alt text"></p>',378),I={href:"https://mp.weixin.qq.com/s/-evZg0epRrOr1IwQ3GJ2Zg",target:"_blank",rel:"noopener noreferrer"},A={href:"https://mp.weixin.qq.com/s/B2ngp0q5kdWsCNH8sw_5DA",target:"_blank",rel:"noopener noreferrer"};function D(C,F){const o=a("ExternalLinkIcon");return i(),l("div",null,[x,p("p",null,[e("戳"),p("a",_,[e("转载链接"),r(o)]),e("，作者：月伴飞鱼，戳"),p("a",w,[e("原文链接"),r(o)]),e("。")]),q,p("p",null,[e("整理：沉默王二，戳"),p("a",I,[e("转载链接"),r(o)]),e("，作者：月伴飞鱼，戳"),p("a",A,[e("原文链接"),r(o)]),e("。")])])}const N=t(k,[["render",D],["__file","jibenjieshao.html.vue"]]);export{N as default};
