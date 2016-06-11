app.controller('MainIndexController', function ($scope, $window, $location, GlobalData) {  
        
    $scope.InternalLink = function(link){
        $window.location.href= "http://bonsaicapital.net/" + link + ".html";
    }
    $scope.TextContentEn = {
        ThreeVectorSetHeaderOne:"Proin aliquam sapien sit amet mauris vehicula",
        ThreeVectorSetHeaderTwo:"consectetur adipiscing",
        ThreeVectorSetBanking:"Investment Banking",
        ThreeVectorSetFunding:"Funding",
        ThreeVectorSetBetterment:"Betterment",
        ThreeVectorTxtRightHeader:"Nullam egestas turpis tortor",
        ThreeVectorTxtRightContent:"Morbi ultrices elit risus Cras lacinia sed urna eget consectetur Donec rutrum sagittis mollis Praesent gravida ac tellus a sollicitudin",
        ThreeVectorTxtCenterHeader:"Nullam egestas turpis tortor",
        ThreeVectorTxtCenterContent:"Morbi ultrices elit risus Cras lacinia sed urna eget consectetur Donec rutrum sagittis mollis Praesent gravida ac tellus a sollicitudin",
        ThreeVectorTxtLeftHeader:"Nullam egestas turpis tortor",
        ThreeVectorTxtLeftContent:"Morbi ultrices elit risus Cras lacinia sed urna eget consectetur Donec rutrum sagittis mollis Praesent gravida ac tellus a sollicitudin"

    };
    $scope.TextContentHe = {
        ThreeVectorSetHeaderOne:"Proin aliquam sapien sit amet mauris vehicula",
        ThreeVectorSetHeaderTwo:"consectetur adipiscing",
        ThreeVectorSetBanking:"בנקאות השקעות",
        ThreeVectorSetFunding:"מימון",
        ThreeVectorSetBetterment:"שֶׁבַח",
        ThreeVectorTxtRightHeader:"Nullam egestas turpis tortor",
        ThreeVectorTxtRightContent:"Morbi ultrices elit risus Cras lacinia sed urna eget consectetur Donec rutrum sagittis mollis Praesent gravida ac tellus a sollicitudin",
        ThreeVectorTxtCenterHeader:"Nullam egestas turpis tortor",
        ThreeVectorTxtCenterContent:"Morbi ultrices elit risus Cras lacinia sed urna eget consectetur Donec rutrum sagittis mollis Praesent gravida ac tellus a sollicitudin",
        ThreeVectorTxtLeftHeader:"Nullam egestas turpis tortor",
        ThreeVectorTxtLeftContent:"Morbi ultrices elit risus Cras lacinia sed urna eget consectetur Donec rutrum sagittis mollis Praesent gravida ac tellus a sollicitudin"
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
