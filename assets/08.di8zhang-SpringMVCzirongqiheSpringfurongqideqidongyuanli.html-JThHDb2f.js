const e=JSON.parse('{"key":"v-5b39b892","path":"/JavaYouth/spring-sourcecode-v1/08.di8zhang-SpringMVCzirongqiheSpringfurongqideqidongyuanli.html","title":"Spring源码系列-第8章-SpringMVC子容器和Spring父容器的启动原理","lang":"zh-CN","frontmatter":{"title":"Spring源码系列-第8章-SpringMVC子容器和Spring父容器的启动原理","tags":["Spring源码"],"categories":["Spring","源码V1"],"keywords":"Spring，框架，spring源码","description":"SpringMVC子容器和Spring父容器的启动原理","cover":"https://npm.elemecdn.com/lql_static@latest/logo/spring.png","abbrlink":"c8dd1418","date":"2022-06-20T12:01:02.000Z"},"headers":[{"level":2,"title":"测试类","slug":"测试类","link":"#测试类","children":[{"level":3,"title":"AppStarter","slug":"appstarter","link":"#appstarter","children":[]},{"level":3,"title":"HelloController","slug":"hellocontroller","link":"#hellocontroller","children":[]},{"level":3,"title":"AppConfig","slug":"appconfig","link":"#appconfig","children":[]}]},{"level":2,"title":"Java的SPI机制","slug":"java的spi机制","link":"#java的spi机制","children":[{"level":3,"title":"项目目录","slug":"项目目录","link":"#项目目录","children":[]},{"level":3,"title":"MainTest","slug":"maintest","link":"#maintest","children":[]},{"level":3,"title":"DataSaveService","slug":"datasaveservice","link":"#datasaveservice","children":[]},{"level":3,"title":"MySQLSaveService","slug":"mysqlsaveservice","link":"#mysqlsaveservice","children":[]},{"level":3,"title":"RedisSaveService","slug":"redissaveservice","link":"#redissaveservice","children":[]},{"level":3,"title":"SPI文件示例","slug":"spi文件示例","link":"#spi文件示例","children":[]},{"level":3,"title":"Java的SPI机制的作用","slug":"java的spi机制的作用","link":"#java的spi机制的作用","children":[]}]},{"level":2,"title":"基于SPI启动Web容器","slug":"基于spi启动web容器","link":"#基于spi启动web容器","children":[{"level":3,"title":"WebApplicationInitializer","slug":"webapplicationinitializer","link":"#webapplicationinitializer","children":[]},{"level":3,"title":"ServletContainerInitializer#onStartup()","slug":"servletcontainerinitializer-onstartup","link":"#servletcontainerinitializer-onstartup","children":[]},{"level":3,"title":"SpringServletContainerInitializer#onStartup()","slug":"springservletcontainerinitializer-onstartup","link":"#springservletcontainerinitializer-onstartup","children":[]},{"level":3,"title":"@HandlesTypes","slug":"handlestypes","link":"#handlestypes","children":[]},{"level":3,"title":"Servlet相关","slug":"servlet相关","link":"#servlet相关","children":[]},{"level":3,"title":"DispatcherServlet","slug":"dispatcherservlet","link":"#dispatcherservlet","children":[]},{"level":3,"title":"HttpServletBean#init()","slug":"httpservletbean-init","link":"#httpservletbean-init","children":[]},{"level":3,"title":"FrameworkServlet#initServletBean()","slug":"frameworkservlet-initservletbean","link":"#frameworkservlet-initservletbean","children":[]}]},{"level":2,"title":"小补充","slug":"小补充","link":"#小补充","children":[{"level":3,"title":"XML版如何配置父子容器关系？","slug":"xml版如何配置父子容器关系","link":"#xml版如何配置父子容器关系","children":[]},{"level":3,"title":"AbstractAnnotationConfigDispatcherServletInitializer能更快的整合Spring和SpringMVC","slug":"abstractannotationconfigdispatcherservletinitializer能更快的整合spring和springmvc","link":"#abstractannotationconfigdispatcherservletinitializer能更快的整合spring和springmvc","children":[]}]},{"level":2,"title":"SpringMVC父子容器的启动过程","slug":"springmvc父子容器的启动过程","link":"#springmvc父子容器的启动过程","children":[{"level":3,"title":"保存父子容器相关信息","slug":"保存父子容器相关信息","link":"#保存父子容器相关信息","children":[]},{"level":3,"title":"ContextLoaderListener回调-开始refresh刷新Spring的根容器(父容器)","slug":"contextloaderlistener回调-开始refresh刷新spring的根容器-父容器","link":"#contextloaderlistener回调-开始refresh刷新spring的根容器-父容器","children":[]},{"level":3,"title":"Servlet初始化-进而开始refresh刷新Spring的web子容器","slug":"servlet初始化-进而开始refresh刷新spring的web子容器","link":"#servlet初始化-进而开始refresh刷新spring的web子容器","children":[]}]}],"git":{},"filePathRelative":"JavaYouth/spring-sourcecode-v1/08.第8章-SpringMVC子容器和Spring父容器的启动原理.md"}');export{e as data};
