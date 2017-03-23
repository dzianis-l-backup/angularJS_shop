angular
    .module('app',['ngRoute','ngAnimate','shopList','goodsList'])

    .value('shopList',{
        shopList:[]
    })
    .value('goodsList',{
        goodsList:[]
    });