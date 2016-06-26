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
    $scope.subSent = true;
    
    $scope.submitMail = function(){
        
        $scope.mailSent = true;
        
        $http({
          method  : 'POST',
          url     : '/php/contact-form-handler.php',
          data    : $scope.mailContent,
          headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
         });
    }
    $scope.submitMailReq = function(){        
        $http({
          method  : 'POST',
          url     : '/php/contact-form-handler.php',
          data    : $scope.SubscriptionData,
          headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
         });
    }
    
    $scope.contactMe = function(typeOfReq){
        BootstrapDialog.show({
            title: 'Coming soon',
            message: 'Enter your email and we will get back to you soon:<br><input type="text" class="form-control">',
            buttons: [{
                label: 'Send',
                cssClass: 'btn-primary subscribeSubmit',
                action: function(dialog){
                    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    var mail = dialog.getModalBody().find('input').val();
                    if(re.test(mail)){
                        dialog.setMessage('Your request has been sent and a representative will contact you, Thank you!');
                        $scope.SubscriptionData['name'] = typeOfReq;
                        $scope.SubscriptionData['mail'] = mail;
                        $scope.SubscriptionData['message'] = "I would like to be contacted about: " + typeOfReq;
                        document.getElementsByClassName("subscribeSubmit")[0].style.visibility = 'hidden';
                        $scope.submitMailReq();
                    }
                    else{
                    dialog.setMessage('Enter your email and we will get back to you soon:<br><input type="text" class="form-control"><br>Please enter a valid email adress');
                    }
                }
            },
            {
                label: 'close',
                cssClass: 'btn-primary subscribeClose',
                action: function(dialog){
                    dialog.close();
                }
            }]

        });
    }
    
    $scope.notAvailable = function(){
        BootstrapDialog.show({
            title: 'Coming soon',
            message: 'This page is under construction and will be available soon!'
        });
    }
    
    $scope.UpdateSectionLanguage(GlobalData.GetLanguage());
});