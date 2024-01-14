const e=JSON.parse('{"key":"v-2b120cb3","path":"/JavaYouth/spring-sourcecode-v1/05.di5zhang-rongqishuaxinliucheng.html","title":"Spring源码系列-第5章-容器刷新流程","lang":"zh-CN","frontmatter":{"title":"Spring源码系列-第5章-容器刷新流程","tags":["Spring源码"],"categories":["Spring","源码V1"],"keywords":"Spring，框架，spring源码","description":"容器刷新全流程","cover":"https://npm.elemecdn.com/lql_static@latest/logo/spring.png","abbrlink":"a1b8c236","date":"2022-02-13T18:01:02.000Z"},"headers":[{"level":2,"title":"流程图-容器刷新","slug":"流程图-容器刷新","link":"#流程图-容器刷新","children":[]},{"level":2,"title":"容器创建","slug":"容器创建","link":"#容器创建","children":[{"level":3,"title":"AnnotationConfigApplicationContext有参构造","slug":"annotationconfigapplicationcontext有参构造","link":"#annotationconfigapplicationcontext有参构造","children":[]}]},{"level":2,"title":"AbstractApplicationContext#refresh()开始容器刷新","slug":"abstractapplicationcontext-refresh-开始容器刷新","link":"#abstractapplicationcontext-refresh-开始容器刷新","children":[{"level":3,"title":"prepareRefresh()准备上下文环境","slug":"preparerefresh-准备上下文环境","link":"#preparerefresh-准备上下文环境","children":[]},{"level":3,"title":"prepareBeanFactory()给BeanFactory准备一些核心组件","slug":"preparebeanfactory-给beanfactory准备一些核心组件","link":"#preparebeanfactory-给beanfactory准备一些核心组件","children":[]},{"level":3,"title":"postProcessBeanFactory()留给子类的模板方法","slug":"postprocessbeanfactory-留给子类的模板方法","link":"#postprocessbeanfactory-留给子类的模板方法","children":[]},{"level":3,"title":"invokeBeanFactoryPostProcessors()工厂增强【核心】","slug":"invokebeanfactorypostprocessors-工厂增强【核心】","link":"#invokebeanfactorypostprocessors-工厂增强【核心】","children":[]},{"level":3,"title":"registerBeanPostProcessors()注册所有的Bean后置处理器","slug":"registerbeanpostprocessors-注册所有的bean后置处理器","link":"#registerbeanpostprocessors-注册所有的bean后置处理器","children":[]},{"level":3,"title":"initMessageSource()","slug":"initmessagesource","link":"#initmessagesource","children":[]},{"level":3,"title":"initApplicationEventMulticaster()","slug":"initapplicationeventmulticaster","link":"#initapplicationeventmulticaster","children":[]},{"level":3,"title":"onRefresh()模板方法留给子类继续增强处理","slug":"onrefresh-模板方法留给子类继续增强处理","link":"#onrefresh-模板方法留给子类继续增强处理","children":[]},{"level":3,"title":"registerListeners()","slug":"registerlisteners","link":"#registerlisteners","children":[]},{"level":3,"title":"finishBeanFactoryInitialization()正式创建所有普通Bean","slug":"finishbeanfactoryinitialization-正式创建所有普通bean","link":"#finishbeanfactoryinitialization-正式创建所有普通bean","children":[]},{"level":3,"title":"finishRefresh()主要是发送容器刷新完成的事件","slug":"finishrefresh-主要是发送容器刷新完成的事件","link":"#finishrefresh-主要是发送容器刷新完成的事件","children":[]}]},{"level":2,"title":"测试类","slug":"测试类","link":"#测试类","children":[{"level":3,"title":"A","slug":"a","link":"#a","children":[]},{"level":3,"title":"B","slug":"b","link":"#b","children":[]}]},{"level":2,"title":"核心代码","slug":"核心代码","link":"#核心代码","children":[{"level":3,"title":"AbstractBeanFactory","slug":"abstractbeanfactory","link":"#abstractbeanfactory","children":[]},{"level":3,"title":"DefaultSingletonBeanRegistry","slug":"defaultsingletonbeanregistry","link":"#defaultsingletonbeanregistry","children":[]},{"level":3,"title":"AbstractAutowireCapableBeanFactory","slug":"abstractautowirecapablebeanfactory","link":"#abstractautowirecapablebeanfactory","children":[]}]},{"level":2,"title":"流程","slug":"流程","link":"#流程","children":[]},{"level":2,"title":"全部的流程图","slug":"全部的流程图","link":"#全部的流程图","children":[]}],"git":{},"filePathRelative":"JavaYouth/spring-sourcecode-v1/05.第5章-容器刷新流程.md"}');export{e as data};
