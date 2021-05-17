var book = (function(){
    var page = 100;
    return function(){
        this.auther = 'dava';
        this.price = 200;
        this._page = function(){
            return page;
        }
    }
    })();
    
    
    var a = new book();
    console.log(a.auther)//dava
    console.log(a.price)//200
    console.log(a.page)//undefined
    console.log(a._page());//100