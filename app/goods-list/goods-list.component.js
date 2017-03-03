angular
    .module('goodsList')
    .service('requestGoodsListHttp',function($http){
        this.getGoodsList = function(anyCtrlProperty,num){
            var self= this;
            if(!this.cache){
                $http({
                        method: 'GET',
                        url: 'goods/'+num
                    }
                ).then(function(response){
                        self.cache = response.data;
                        anyCtrlProperty.goods = self.cache;
                        console.log(anyCtrlProperty.goods)
                    }, function(response){

                    }
                );
            }
            else{
                anyCtrlProperty.goods = self.cache;
            }
        }

    })
    .component('goodsList', {
        templateUrl: 'goods-list/goods-list.template.html',

        controller: function goodsListCtrl($routeParams,requestGoodsListHttp) {
            var self = this;
            console.log(self.parent);
            self.getGoods = function(){
                requestGoodsListHttp.getGoodsList(self,$routeParams.num);
            }
            self.getGoods();
        }


    });