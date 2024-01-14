const l=JSON.parse('{"key":"v-918a6b4c","path":"/JavaYouth/java_concurrency/Javabingfatixi-disijieduan-AQSyuanmajiedu-_1_.html","title":"Java并发体系-第四阶段-AQS源码解读-[1]","lang":"zh-CN","frontmatter":{"title":"Java并发体系-第四阶段-AQS源码解读-[1]","tags":["Java并发","AQS源码"],"categories":["Java并发","原理"],"keywords":"Java并发，AQS源码","description":"万字系列长文讲解-Java并发体系-第四阶段-AQS源码解读-[1]。","cover":"https://npm.elemecdn.com/lql_static@latest/logo/Java_concurrency.png","abbrlink":"92c4503d","date":"2020-10-26T17:59:42.000Z"},"headers":[{"level":2,"title":"是什么？","slug":"是什么","link":"#是什么","children":[]},{"level":2,"title":"3种让线程等待和唤醒的方法","slug":"_3种让线程等待和唤醒的方法","link":"#_3种让线程等待和唤醒的方法","children":[]},{"level":2,"title":"Object类提供的等待唤醒机制的缺点","slug":"object类提供的等待唤醒机制的缺点","link":"#object类提供的等待唤醒机制的缺点","children":[{"level":3,"title":"正常情况下","slug":"正常情况下","link":"#正常情况下","children":[]},{"level":3,"title":"异常情况1","slug":"异常情况1","link":"#异常情况1","children":[]},{"level":3,"title":"异常情况2","slug":"异常情况2","link":"#异常情况2","children":[]}]},{"level":2,"title":"Condion类提供的等待唤醒机制的缺点","slug":"condion类提供的等待唤醒机制的缺点","link":"#condion类提供的等待唤醒机制的缺点","children":[]},{"level":2,"title":"LockSupport的优点","slug":"locksupport的优点","link":"#locksupport的优点","children":[{"level":3,"title":"异常情况1","slug":"异常情况1-1","link":"#异常情况1-1","children":[]},{"level":3,"title":"异常情况2","slug":"异常情况2-1","link":"#异常情况2-1","children":[]}]},{"level":2,"title":"AQS是什么？","slug":"aqs是什么","link":"#aqs是什么","children":[]},{"level":2,"title":"AQS能干嘛？","slug":"aqs能干嘛","link":"#aqs能干嘛","children":[]},{"level":2,"title":"AQS结构","slug":"aqs结构","link":"#aqs结构","children":[]},{"level":2,"title":"Node类结构","slug":"node类结构","link":"#node类结构","children":[]},{"level":2,"title":"AQS队列基本结构","slug":"aqs队列基本结构","link":"#aqs队列基本结构","children":[]},{"level":2,"title":"开始","slug":"开始","link":"#开始","children":[]},{"level":2,"title":"非公平锁lock()加锁","slug":"非公平锁lock-加锁","link":"#非公平锁lock-加锁","children":[{"level":3,"title":"lock()","slug":"lock","link":"#lock","children":[]},{"level":3,"title":"acquire()和tryAcquire()","slug":"acquire-和tryacquire","link":"#acquire-和tryacquire","children":[]},{"level":3,"title":"addWaiter()","slug":"addwaiter","link":"#addwaiter","children":[]},{"level":3,"title":"enq()","slug":"enq","link":"#enq","children":[]},{"level":3,"title":"acquireQueued()","slug":"acquirequeued","link":"#acquirequeued","children":[]},{"level":3,"title":"shouldParkAfterFailedAcquire()","slug":"shouldparkafterfailedacquire","link":"#shouldparkafterfailedacquire","children":[]},{"level":3,"title":"parkAndCheckInterrupt()","slug":"parkandcheckinterrupt","link":"#parkandcheckinterrupt","children":[]}]},{"level":2,"title":"非公平锁lock()解锁","slug":"非公平锁lock-解锁","link":"#非公平锁lock-解锁","children":[{"level":3,"title":"release()和tryRelease()","slug":"release-和tryrelease","link":"#release-和tryrelease","children":[]},{"level":3,"title":"unparkSuccessor()","slug":"unparksuccessor","link":"#unparksuccessor","children":[]},{"level":3,"title":"唤醒之后","slug":"唤醒之后","link":"#唤醒之后","children":[]}]},{"level":2,"title":"构造","slug":"构造","link":"#构造","children":[]},{"level":2,"title":"非公平锁的 lock 方法","slug":"非公平锁的-lock-方法","link":"#非公平锁的-lock-方法","children":[]},{"level":2,"title":"公平锁的 lock 方法","slug":"公平锁的-lock-方法","link":"#公平锁的-lock-方法","children":[]}],"git":{},"filePathRelative":"JavaYouth/java_concurrency/Java并发体系-第四阶段-AQS源码解读-[1].md"}');export{l as data};
