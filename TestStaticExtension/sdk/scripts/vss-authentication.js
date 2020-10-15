VSS.init({
    explicitNotifyLoaded: true,
    usePlatformStyles: false,
  });

  VSS.require("TFS/Dashboards/WidgetHelpers", function (WidgetHelpers) {
    // WidgetHelpers.IncludeWidgetStyles();
    VSS.register("HelloWorldWidget", function () {
      return {
        load: function (widgetSettings) {
          var $title = $("h2.title");
          $title.text("Hello World v107");
          return WidgetHelpers.WidgetStatusHelper.Success();
        },
      };
    });
    VSS.notifyLoadSucceeded();
  });
  VSS.require(["VSS/Authentication/Services"], function (VSS_Auth_Service) {
    VSS.getAccessToken().then(function (token) {
      // Format the auth header
      var authHeader = VSS_Auth_Service.authTokenManager.getAuthorizationHeader(
        token
      );
      console.log(authHeader);
      console.log(token);
      // Add token as an Authorization header to your request
    });
  });