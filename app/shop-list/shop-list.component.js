angular
    .module('shopList')
    .service('requestShopListHttp',function($http){
        this.getShopList = function(anyCtrlProperty,url,property){
            var self= this;
            if(!this.cache){
                $http({
                        method: 'GET',
                        url: url
                    }
                ).then(function(response){
                        self.cache = response.data;
                        anyCtrlProperty[property] = self.cache;
                        console.log(anyCtrlProperty[property])
                    }, function(response){
                    }
                );
            }
            else{
                anyCtrlProperty.shopList = self.cache;
            }
        }

    })
    .filter('nameFilter',function(){
        return function(data){
            if(!!data)
                return (data.toString().indexOf('f') > -1) ? data : "no f letter";
        }
    })
    .component('shopList',{
        templateUrl: 'shop-list/shop-list.template.html',
        controllerAs: 'shopCtrl',
        transclude:true,
        controller: function ShopListCtrl(requestShopListHttp) {
            var self = this;
            self.getShopList = function(){

                requestShopListHttp.getShopList(self,'shopList','shopList');

            };
            self.requestGoodsList = function(obj){
                console.log(obj);
            };
            self.getShopList();
            console.log(self.shopList);

        }
    });