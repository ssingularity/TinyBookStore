var app=angular.module("bookstore",['ngRoute']);

app.config(['$routeProvider','$locationProvider',function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/',{
            controller:"IndexController",
            templateUrl:"index0.html"
        })
        .when('/add',{
            controller:"AddController",
            templateUrl:"add.html"
        })
        .when('/view/:id',{
            controller:"DetailController",
            templateUrl:"detail.html"
        })
        .when('/edit/:id',{
            controller:'EditController',
            templateUrl:"edit.html"
        })
        .when('/cart',{
            controller:"CartController",
            templateUrl:"cart.html"
        })
        .when('/user',{
            controller:"UserController",
            templateUrl:"user.html"
        })
        .when('/order',{
            controller:"OrderController",
            templateUrl:"order.html"
        })
        .when('/user_edit',{
            controller:"UserEditController",
            templateUrl:"user_edit.html"
        })
        .otherwise({redirectTo:"/"});
}]);

var books=[
    {id:1,book_name:"a",writer:"b",price:25,store:100,image:["image/book_big.jpg","image/book.jpg"],description:"nothing to say, just a book"},
    {id:2,book_name:"c",writer:"d",price:35,store:200,image:["image/timg_big.jpg","image/timg.jpg"],description:"nothing to say, just a book"},
    {id:1,book_name:"a",writer:"b",price:25,store:100,image:["image/book_big.jpg","image/book.jpg"],description:"nothing to say, just a book"},
    {id:1,book_name:"a",writer:"b",price:25,store:100,image:["image/book_big.jpg","image/book.jpg"],description:"nothing to say, just a book"},
    {id:1,book_name:"a",writer:"b",price:25,store:100,image:["image/book_big.jpg","image/book.jpg"],description:"nothing to say, just a book"},
    {id:2,book_name:"c",writer:"d",price:35,store:200,image:["image/timg_big.jpg","image/timg.jpg"],description:"nothing to say, just a book"},
    {id:1,book_name:"a",writer:"b",price:25,store:100,image:["image/book_big.jpg","image/book.jpg"],description:"nothing to say, just a book"},
    {id:2,book_name:"c",writer:"d",price:35,store:200,image:["image/timg_big.jpg","image/timg.jpg"],description:"nothing to say, just a book"},
    {id:1,book_name:"a",writer:"b",price:25,store:100,image:["image/book_big.jpg","image/book.jpg"],description:"nothing to say, just a book"},
    {id:2,book_name:"c",writer:"d",price:35,store:200,image:["image/timg_big.jpg","image/timg.jpg"],description:"nothing to say, just a book"}
];

var cart=[

];

var order=[

];

var user={
    name: "pzy",
    image:"image/panda.jpg",
    email:"1755405701@qq.com",
    phone: 18317126628,
    description: "That nothing is impossible means that nothing is impossible is impossible",
    password:123456
};

app.controller("MainController",['$route','$location','$routeParams',
        function ($route, $location, $routeParams) {
            this.$route=$route;
            this.$location=$location;
            this.$routeParams=$routeParams;
}]);

app.controller("IndexController",["$scope","$routeParams",function ($scope,$routeParams) {
    if ($routeParams.id==0)
        $scope.booklist=books;
    else $scope.booklist=books.slice($routeParams.id-1,$routeParams.id);
    $scope.add=function (book) {
        cart.push(book);
        alert("成功加入购物车！");
    };
    $scope.buy=function (book) {
        var myDate=new Date();
        book.date=myDate.getFullYear()+"-"+myDate.getMonth()+"-"+myDate.getDay();
        order.push(book);
        book.store-=1;
        alert("成功购买");
    };
}]);

app.controller("AddController",[
    '$scope','$location',function ($scope,$location) {
        //$scope.book.book_name="123";
        $scope.add=function () {
            books.push($scope.book);
            $scope.book.id=books.length;
            alert($scope.book);
            $location.path("/");
        };
        $scope.cancel=function () {
            $location.path("/");
        };
    }
]);

app.controller("EditController",["$scope",'$routeParams','$location',function ($scope, $routeParams, $location) {
    $scope.book=books[$routeParams.id-1];
    $scope.rawBook=angular.copy($scope.book);
    $scope.save=function () {
        //books[$routeParams.id-1]=$scope.book;
        //提交到服务端
        $location.path("/");
    };
    $scope.cancel=function () {
        books[$routeParams.id-1]=$scope.rawBook;
        $location.path("/");
    }
}]);

app.controller("DetailController",['$scope','$routeParams',function ($scope,$routeParams) {
    $scope.book=books[$routeParams.id-1];
    $scope.add=function (book) {
        cart.push(book);
        alert("成功加入购物车！");
    };
    $scope.buy=function (book) {
        var myDate=new Date();
        book.date=myDate.getFullYear()+"-"+myDate.getMonth()+"-"+myDate.getDay();
        order.push(book);
        book.store-=1;
        alert("成功购买");
    }
}]);

app.controller("CartController",["$scope",function ($scope) {
    $scope.cart=cart;
    $scope.remove=function(book){
        var index=0;
        for(index;index<$scope.cart.length;++index) {
            if ($scope.cart[index].id==book.id) break;
        }
        $scope.cart.splice(index,1);
    };
    $scope.buy=function (book) {
        var myDate=new Date();
        book.date=myDate.getFullYear()+"-"+myDate.getMonth()+"-"+myDate.getDay();
        order.push(book);
        book.store-=1;
        $scope.remove(book);
        alert("成功购买");
    };
    $scope.buyAll=function(){

    }

}]);

app.controller("UserController",["$scope",function ($scope) {
    $scope.user=user;
}]);

app.controller("OrderController",["$scope",function ($scope) {
    $scope.order=order;
}]);

app.controller("UserEditController",["$scope","$location",function ($scope,$location) {
    $scope.user=user;
    $scope.rawUser=angular.copy($scope.user);
    $scope.save=function () {
        //提交到服务端
        $location.path("/user");
    };
    $scope.cancel=function () {
        user=$scope.rawUser;
        $location.path("/user");
    }
}]);

jQuery(document).ready(function ($) {
    $(".jumbotron").slideDown("slow");
    $(".image-link").viewbox();
    var show_per_page=12;
    var current_page=0;
    var total_page=Math.ceil($(".mainBooks").children().length/show_per_page);

    $(".mainBooks").children().css("display","none");
    $(".mainBooks").children().slice(show_per_page*current_page,show_per_page).css("display","block");
    $(".previous").click(function(){
        if(current_page==0) return;
        else {
            --current_page;
            var start=current_page*show_per_page;
            var end=start+show_per_page;
            $(".mainBooks").children().css("display","none").slice(start,end).fadeIn("slow");
        }
    });
    $(".next").click(function(){
        if(current_page==total_page-1) return;
        else {
            ++current_page;
            var start=current_page*show_per_page;
            var end=start+show_per_page;
            $(".mainBooks").children().css("display","none").slice(start,end).fadeIn("slow");
        }
    });
});