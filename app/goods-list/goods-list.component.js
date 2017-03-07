angular
    .module('goodsList')
    .service('requestGoodsListHttp',function($http){
        this.getGoodsList = function(anyCtrlProperty,url,property){
            $http({
                    method: 'GET',
                    url: url
                }
            ).then(function(response){
                    self.cache = response.data;
                    anyCtrlProperty[property] = self.cache;
                    console.log('requestGoodsListHttp'+ ", data:  "+anyCtrlProperty[property])
                }, function(response){
                }
            );
        }
    })
    .component('goodsList', {
        templateUrl: 'goods-list/goods-list.template.html',
        controller: function goodsListCtrl($routeParams,requestGoodsListHttp,$q,$timeout) {
            var self = this;
            console.log(self.parent);
            self.getGoods = function(){
                requestGoodsListHttp.getGoodsList(self,'goods/'+$routeParams.num,'goods');
            }
            self.getGoods();
        }
    });