angular
    .module('app',['ngRoute','shopList','goodsList'])

    .value('shopList',{
        shopList:[]
    })
    .value('goodsList',{
        goodsList:[]
    });