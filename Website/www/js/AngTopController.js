var app = angular.module('website', ['ngCookies']);

app.factory('GlobalData', function ($cookies) {

    var data = "en"

    return {
        GetLanguage: function () {
            return data;
        },
        SetLanguage: function (language) {
            if(language == "en" || language == "he") {
                data = language;
                $cookies['Language'] = language;
            }
        },
        UpdateLanguage: function(){
            if($cookies['Language'] != data && $cookies['Language'] != '' && $cookies['Language'] != null){
                data = $cookies['Language'];
            }
        }
    };
    
});

app.controller('TopController', function ($scope, $window, $location, GlobalData) {  
    
    GlobalData.UpdateLanguage();
    
    $scope.InternalLink = function(link){
        $window.location.href= "http://bonsaicapital.net/" + link + ".html";
    }
    $scope.TextContentEn = {
        about:'About Us', 
        team:"Our Team",
        services:"Our Services",
        market:"Market News",
        contact:"Contact Us",
    };
    $scope.TextContentHe = {
        about:'אודותינו', 
        team:"הצוות שלנו",
        services:"השירותים שלנו",
        market:"חדשות",
        contact:"צור קשר",
    };
    
    $scope.TextContent = $scope.TextContentEn;
    
    $scope.ChangeLanguage = function(language){
        switch(language){
            case 'he':
                $scope.TextContent = $scope.TextContentHe;
                break;
            case 'en':
                $scope.TextContent = $scope.TextContentEn;
                break;
        }
    }
    
    $scope.ChangeLanguage(GlobalData.GetLanguage());
});
