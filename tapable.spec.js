//1.SyncHook  同步的串行  不关心监听函数的返回值
//2.SyncBailHook 同步的串行  只要监听函数有一个函数的返回值不为null 跳过这个函数
//3.SyncWaterfallHook 同步的串行   同步串行的  上一个监听函数的范围一直可以传给下一个
//4.SyncLoopHook 同步循环  监听函数返回true返回的执行
//5.AsyncParallelHook  跟上面效果一样  异步的
const {
    SyncHook,
    SyncBailHook,
    SyncWaterfallHook,
    SyncLoopHook,
    AsyncParallelHook,
    AsyncParallelBailHook,
    AsyncSeriesHook,
    AsyncSeriesBailHook,
    AsyncSeriesWaterfallHook 
} = require("tapable");
//接受一个可选的参数，这个参数是一个字符串的数组
//compiler.hooks
// let queue = new SyncHook(["name1"])
const compiler = new compiler();
compiler.hooks = new SyncHook(["name1","name2"])

//订阅
//标识我们的订阅函数
compiler.hooks.tap("1",function(name){
    console.log(name,1);
    return 1;
})
compiler.hooks.tap("2",function(name1,name2){
    console.log(name1,name2,2)
})

//执行钩子
compiler.hooks.call("webpack🍎","webpack🍎webpack🍎webpack🍎webpack🍎")
