app.controller('TemplateController', function ($scope, $rootScope, $http, GlobalData) {  
    $scope.EnglishTemplates = { 
        index: 'Templates/En/index.html',
        about: 'Templates/En/about.html',
        contact: 'Templates/En/contact.html',
        team: 'Templates/En/team.html'
    };
    $scope.HebrewTemplates = { 
        index: 'Templates/He/index.html',
        about: 'Templates/He/about.html',
        contact: 'Templates/He/contact.html',
        team: 'Templates/He/team.html'
    };
    
    $scope.ChosenTemplate = $scope.EnglishTemplates;
    $scope.Content = $scope.ChosenTemplate['index'];

    $rootScope.$on("UpdateAllLanguages", function(){
           $scope.UpdateSectionLanguage(GlobalData.GetLanguage());
    });
    
    $rootScope.$on("ChangePageTemplate", function(){
           $scope.UpdateSectionContent(GlobalData.GetPage());
    });
    
    $scope.UpdateSectionContent = function(page){
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
    
    $scope.mailContent = {name: "", mail: "", message: ""};
    $scope.SubscriptionData = {name: "", mail: "", message: ""};
    
    $scope.mailSent = false;
    
    $scope.submitMail = function(){
        
        $scope.mailSent = true;
        
        $http({
          method  : 'POST',
          url     : '/php/contact-form-handler.php',
          data    : $scope.mailContent,
          headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
         });
    }
    $scope.submitSubscribe = function(typeOfSub, mail){
        
        $scope.SubscriptionSent = true;
        $scope.SubscriptionData['name'] = typeOfSub;
        $scope.SubscriptionData['mail'] = mail;
        $scope.SubscriptionData['message'] = 'This user has requested to be contacted for' + typeOfSub;
        
        $http({
          method  : 'POST',
          url     : '/php/contact-form-handler.php',
          data    : $scope.mailContent,
          headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
         });
    }


    $scope.UpdateSectionLanguage(GlobalData.GetLanguage());
});