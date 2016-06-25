app.controller('AngFooterController', function ($scope, $window, $rootScope, GlobalData) {     
    $scope.InternalLink = function(link){
        GlobalData.SetPage(link);
        $rootScope.$emit("ChangePageTemplate", {});
    }
    
    $scope.TextContentEn = {
        Company:"Company",
        InvesmentBanking:"Investment Banking",
        Funding:"Funding",
        Betterment:"Betterment",
        AboutUs:"About Us",
        OurTeam:"Our Team",
        MarketNews:"Market News",
        ContactUs:"Contact Us",
        InvesmentSearch:"Investment Search",
        DueDiligence:"Due Diligent Process",
        LocalRep:"Investor's Local Rep",
        Fund:"Fund Search",
        MA:"M&A",
        Readiness:"Funding Process Readiness",
        Recovery:"Steering To Recovery",
        Development:"Business Development",
        FundingTxt:"Funding",
        CopyRight:"2016 Bonsai Capital All Rights Reserved"
    };
    $scope.TextContentHe = {
        Company:"חברה",
        InvesmentBanking:"בנקאות השקעות",
        Funding:"בנקאות השקעות",
        Betterment:"שבח",
        AboutUs:"אודותינו",
        OurTeam:"הצוות שלנו",
        MarketNews:"חדשות",
        ContactUs:"צור קשר",
        InvesmentSearch:"חיפוש השקעות",
        DueDiligence:"תהליך דיליג'נט בשל",
        LocalRep:"נציג משקיעים מקומי",
        Fund:"חיפוש קרן",
        MA:"M&A",
        Readiness:"נכונות מימון",
        Recovery:"הכוונה לשיקום",
        Development:"פיתוח עסקי",
        FundingTxt:"מימון",
        CopyRight:"2016 בונסאי קפיטל - כל הזכויות שמורות"
    };
    
    $scope.TextContent = $scope.TextContentEn;

    $rootScope.$on("UpdateAllLanguages", function(){
           $scope.UpdateSectionLanguage(GlobalData.GetLanguage());
    });
    
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
    
    $scope.notAvailable = function(){
        BootstrapDialog.show({
            title: 'Coming soon',
            message: 'This page is under construction and will be available soon!'
        });
    }
    
    $scope.UpdateSectionLanguage(GlobalData.GetLanguage());
});
