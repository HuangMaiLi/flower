if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


      if( navigator.userAgent && (navigator.userAgent.indexOf('LyraVM') > 0 || navigator.userAgent.indexOf('AlipayIDE') > 0) ) {
        var AFAppX = self.AFAppX.getAppContext ? self.AFAppX.getAppContext().AFAppX : self.AFAppX;
      } else {
        importScripts('https://appx/af-appx.worker.min.js');
        var AFAppX = self.AFAppX;
      }
      self.getCurrentPages = AFAppX.getCurrentPages;
      self.getApp = AFAppX.getApp;
      self.Page = AFAppX.Page;
      self.App = AFAppX.App;
      self.my = AFAppX.bridge || AFAppX.abridge;
      self.abridge = self.my;
      self.Component = AFAppX.WorkerComponent || function(){};
      self.$global = AFAppX.$global;
      self.requirePlugin = AFAppX.requirePlugin;
    

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../components/uni-ui/uni-grid/uni-grid?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-ui/uni-grid-item/uni-grid-item?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-ui/uni-icons/uni-icons?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-ui/uni-search-bar/uni-search-bar?hash=74adc7affc884ab4340065f9141f18d3ecec70a1');
require('../../components/uni-ui/uni-load-more/uni-load-more?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/checkbox/checkbox?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/goodslist/goodslist?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-ui/uni-swipe-action/uni-swipe-action?hash=591ac642b6f57a184fac9330fa292ccf33c32471');
require('../../components/uni-ui/uni-swipe-action-item/uni-swipe-action-item?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/user/components/uni-swiper-dot?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/user/components/uni-grid?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/user/components/uni-grid-item?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/user/components/com-nav?hash=3f7f6ef3945001a26a1bd95b54e2813d7b43a7b9');
require('../../components/uni-transition/uni-transition?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-popup/uni-popup?hash=63f3d097e78ac04213190ce4a92c81860617f7b4');
require('../../components/uni-ui/uni-list/uni-list?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-ui/uni-badge/uni-badge?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-ui/uni-list-item/uni-list-item?hash=fe1213e9c0f0e8f3af9638ea181ed89769808cde');
require('../../components/uni-ui/uni-goods-nav/uni-goods-nav?hash=74adc7affc884ab4340065f9141f18d3ecec70a1');
require('../../components/uni-popup/uni-popup-share?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-popup/uni-popup-message?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-load-more/uni-load-more?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/empty?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/xuan-linkAddress/xuan-linkAddress?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/yzc-paykeyboard/yzc-paykeyboard?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/index/index?hash=ec0c58ef03991e64cd4abc51ef261ab4aa490e59');
require('../../pages/shop/shop?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/classify/classify?hash=66db2ebc09dd7f360dcf3c609d728b8a2e234a4c');
require('../../pages/search/search?hash=66db2ebc09dd7f360dcf3c609d728b8a2e234a4c');
require('../../pages/map/map?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/carts/carts?hash=50ffdd5fffe5e7e4cdbc010a0a6470c726550dd2');
require('../../pages/user/user?hash=8fb7f200a3b5400cb06da1b8da4016f4da9d8168');
require('../../pages/detail/detail?hash=28022ab3d3b5bda07f5a3f8acf3973988ae4d076');
require('../../pages/list/list?hash=548cdad7a262b25f01107ed1c1dbcecfeb45a493');
require('../../pages/set/set?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/public/public?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/order/order?hash=63c308e6ba15e4838f851304bc7880b8dc9e60ea');
require('../../pages/address/address?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/more/more?hash=548cdad7a262b25f01107ed1c1dbcecfeb45a493');
require('../../pages/address/addressManage?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/pay/pay?hash=36e2f3a24e9a0a7a8d38f1d2383f36a0997f6994');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}