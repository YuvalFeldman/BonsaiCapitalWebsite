var app = angular.module('website', ['ngCookies']);

app.factory('GlobalData', function ($cookies) {

    var data = "en";
    var page = "index";

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
        },
        GetPage: function(){
            return page;
        },
        SetPage: function(setPage){
            page = setPage;
        }
    };
    
});

app.controller('TopController', function ($scope, $window, $location, $rootScope, GlobalData) {  
    
    GlobalData.UpdateLanguage();
    
    $scope.InternalLink = function(link){
        GlobalData.SetPage(link);
        $rootScope.$emit("ChangePageTemplate", {});
    }
    $scope.TextContentEn = {
        about:'About Us', 
        team:"Our Team",
        InvestmentBanking:"Investment banking",
        Corporate:"Corporate service",
        market:"Market News",
        contact:"Contact Us",
        Company:"Company",
        InvesmentBanking:"Investment Banking",
        Funding:"Funding",
        Betterment:"Betterment",
        InvesmentSearch:"Investment Search",
        DueDiligence:"Due Diligent Process",
        LocalRep:"Investor's Local Rep",
        Fund:"Fund Search",
        MA:"M&A",
        Readiness:"Funding Process Readiness",
        Recovery:"Steering To Recovery",
        Development:"Business Development",
        FundingTxt:"Funding",
        Language:"Change Language",
        hebrew:"Hebrew",
        englsh:"English",
        home:"Home"
    };
    $scope.TextContentHe = {
        about:'אודותינו', 
        team:"הצוות שלנו",
        InvestmentBanking:"בנקאות השקעות",
        Corporate:"שירות תאגידי",
        market:"חדשות",
        contact:"צור קשר",
        Company:"חברה",
        InvesmentBanking:"בנקאות השקעות",
        Funding:"בנקאות השקעות",
        Betterment:"שבח",
        InvesmentSearch:"חיפוש השקעות",
        DueDiligence:"תהליך דיליג'נט בשל",
        LocalRep:"נציג משקיעים מקומי",
        Fund:"חיפוש קרן",
        MA:"M&A",
        Readiness:"נכונות מימון",
        Recovery:"הכוונה לשיקום",
        Development:"פיתוח עסקי",
        FundingTxt:"מימון",
        Language:"החלף שפה",
        hebrew:"עברית",
        englsh:"אנגלית",
        home:"בית"
    };
    
    $scope.TextContent = $scope.TextContentEn;
        
    $scope.UpdateSectionLanguage = function(language){
        switch(language){
            case 'he':
                $scope.TextContent = $scope.TextContentHe;
                break;
            case 'en':
                $scope.TextContent = $scope.TextContentEn;
                break;
        }
    }
    
    $scope.ChangeLanguage = function(langauge){
        GlobalData.SetLanguage(langauge);
        $scope.UpdateSectionLanguage(langauge);
        $rootScope.$emit("UpdateAllLanguages", {});
    }
    
    $scope.mobileMenuClassEn = "list-unstyled main-menu EnglishLeftToRight";
    $scope.mobileMenuClassHe = "list-unstyled main-menu HebrewRightToLeft";
    
    $scope.ChangeMobileMenuLanguage = function(){
        switch(GlobalData.GetLanguage()){
            case 'he':
                $scope.mobileMenuClass = $scope.mobileMenuClassHe;
                break;
            case 'en':
                $scope.mobileMenuClass = $scope.mobileMenuClassEn;
                break;
        }
    }
    
    $scope.notAvailable = function(){
        BootstrapDialog.show({
            title: 'Coming soon',
            message: 'This page is under construction and will be available soon!'
        });
    }
    
    $scope.subme = function(){
        BootstrapDialog.show({
            title: 'Coming soon',
            message: 'Enter your email and we will get back to you soon:<br><input type="text" class="form-control">',
            buttons: [{
                label: 'Send',
                cssClass: 'btn-primary subscribeSubmit',
                action: function(dialog){
                    dialog.close();
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
    
    $scope.UpdateSectionLanguage(GlobalData.GetLanguage());
    $scope.ChangeMobileMenuLanguage(GlobalData.GetLanguage());
});