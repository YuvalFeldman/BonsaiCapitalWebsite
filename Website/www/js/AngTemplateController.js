app.controller('TemplateController', function ($scope, $rootScope, GlobalData) {  
    $scope.EnglishTemplates = { 
        index: 'Templates/En/index.html',
        about: 'Templates/En/about.html'
    };
    $scope.HebrewTemplates = { 
        index: 'Templates/He/index.html',
        about: 'Templates/He/about.html'
    };
    
    $scope.ChosenTemplate = $scope.EnglishTemplates;
    $scope.Content = $scope.ChosenTemplate['index'];

    $rootScope.$on("UpdateAllLanguages", function(){
           $scope.UpdateSectionLanguage(GlobalData.GetLanguage());
    });
    
    $rootScope.$on("ChangePageTemplate", function(){
        console.log("ChangePageTemplate called");
           $scope.UpdateSectionContent(GlobalData.GetPage());
        console.log("UpdateSectionLanguage called");
    });
    
    $scope.UpdateSectionContent = function(page){
        console.log(page);
        if($scope.ChosenTemplate.hasOwnProperty(page)){
            $scope.Content = $scope.ChosenTemplate[page];
        }
        else{
            //404 + send error message to admin
        }
    }

    $scope.UpdateSectionLanguage = function(language){
        switch(language){
            case 'he':
                $scope.ChosenTemplate = $scope.HebrewTemplates;
                $scope.Content = $scope.ChosenTemplate[GlobalData.GetPage()];
                break;
            case 'en':
                $scope.ChosenTemplate = $scope.EnglishTemplates;
                $scope.Content = $scope.ChosenTemplate[GlobalData.GetPage()];
                break;
        }
    }
    
    $scope.InternalLink = function(link){
        GlobalData.SetPage(link);
        $scope.UpdateSectionLanguage(GlobalData.GetPage());
    }

    $scope.UpdateSectionLanguage(GlobalData.GetLanguage());
});
