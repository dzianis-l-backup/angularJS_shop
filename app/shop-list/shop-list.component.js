angular
    .module('shopList')
    .filter('nameFilter',function(){
        return function(data){
            if(!!data)
                return (data.toString().indexOf('f') > -1) ? data : "no f letter";
        }
    })
    .service('requestShopListHttp',function($http){
        this.getShopList = function(anyCtrlProperty,url,property){
            $http({
                    method: 'GET',
                    url: url
                }
            ).then(function(response){
                    self.cache = response.data;
                    anyCtrlProperty[property] = self.cache;
                    console.log('requestShopListHttp'+ ", data:  "+anyCtrlProperty[property])
                }, function(response){
                }
            );
        }
    })
    .component('shopList',{
        templateUrl: 'shop-list/shop-list.template.html',
        controllerAs: 'shopCtrl',
        transclude:true,
        controller: function ShopListCtrl(requestShopListHttp,requestGoodsListHttp) {
            var self = this;
            self.getShopList = function(){
                requestShopListHttp.getShopList(self,'shopList','shopList');
            };
            self.getShopList(self,'shopList','shopList');
        }
    });