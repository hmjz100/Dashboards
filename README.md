# Dashboards
一个包含了多个管理面板的通用外部用户界面。

## 功能
包含以下面板：
- Yacd Meta
- Yacd Meta 0.3.7
- MetaCubeXD
- Yacd Meta Koge
- Yacd

支持智能检测界面是否运行于外部控制的服务器，自动添加同步服务器配置。  
在此界面修改服务器配置后可以自动同步到以上面板的服务器配置。

## 用法

> [!IMPORTANT]
> 以下教程默认您开启了应用的 `外部控制(API)` 功能
> 如果您未开启，请参照[此文档](https://wiki.metacubex.one/config/general/?h=%E5%A4%96%E9%83%A8%E6%8E%A7%E5%88%B6#api)进行修改配置开启。

配置文件添加：
```
external-ui: ./ui/
external-ui-url: "https://github.com/hmjz100/Dashboards/archive/main.zip"
```

重启应用，然后访问 `[外部控制的监听地址]/ui/` 即可享用。

例如，外部控制的监听地址为 `127.0.0.1:9090`，那么访问地址就是 `http://127.0.0.1:9090/ui/`