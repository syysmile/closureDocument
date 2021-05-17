for(var i =0; i<5; i++){
    function foo(i){
        setTimeout(() => {
            console.log(i)
        }, i*1000);
    }
    foo(i)
}
// 0,1,2,3,4