App.Template.get("dashboard/events/collection").set({html:"<div class=\"children\" rv-views=\"children\"></div> "}).synced=true; App.Template.get("dashboard/events/list_item").set({html:"<div class=\"clickable list-item\">{{ model:name }}</div> "}).synced=true; App.Template.get("dashboard/shops/collection").set({html:"<div class=\"children\" rv-views=\"children\"></div> "}).synced=true; App.Template.get("dashboard/shops/list_item").set({html:"<div class=\"clickable list-item\">{{ model:name }}</div> "}).synced=true; App.Template.get("dashboard/show_overview").set({html:"<div> <div class=\"panel panel-primary\"> <div class=\"panel-heading\"> Je organizaties </div> <div class=\"panel-body\"> <div rv-view=\"organizationsView\"> <!-- Here are all organizations --> </div> </div> </div> <div class=\"panel panel-primary\"> <div class=\"panel-heading\"> Je evenementen </div> <div class=\"panel-body\"> <div rv-view=\"eventsView\"> <!-- Here are all events --> </div> </div> </div> <div class=\"panel panel-primary\"> <div class=\"panel-heading\"> Je shops </div> <div class=\"panel-body\"> <div rv-view=\"shopsView\"> <!-- Here are all shops --> </div> </div> </div> </div> "}).synced=true; App.Template.get("dashboard/index").set({html:"<div class=\"container\"> <div class=\"page-header\"> <h1>Dashboard <small>{{ user:name }}</small> </h1> </div> <div rv-view=\"view\"></div> </div> "}).synced=true; App.Template.get("dashboard/show_organization").set({html:"<div> Organization </div> "}).synced=true; App.Template.get("dashboard/organizations/collection").set({html:"<div class=\"children\" rv-views=\"children\"></div> "}).synced=true; App.Template.get("dashboard/organizations/list_item").set({html:"<div class=\"clickable list-item\">{{ model:name }}</div> "}).synced=true; App.Template.get("dashboard/show_shop").set({html:"<div> Shop </div> "}).synced=true; App.Template.get("dashboard/show_event").set({html:"<div> Event </div> "}).synced=true; App.Template.get("personal/index").set({html:"<div> <nav class=\"navbar navbar-top\" role=\"navigation\"> <div class=\"container\"> <div class=\"navbar-header\"> <a class=\"company\" href=\"#\">invent<span>id <img alt=\"\" height=\"24px\" src=\"//cdn.inventid.nl/assets/logo_white-117dc7e352ee4864b438caa766cda4a2.png\" /></span> <small>Jouw persoonlijk overzicht</small> </a> </div> </div> </nav> <div class=\"container\"> <div class=\"header row\"> <nav class=\"shop-nav left col-xs-5\"> <div class=\"show-user nav-container\"> <span class=\"fa-stack fa-lg previous nav-element\"> <i class=\"fa fa-circle fa-stack-2x\"></i> <i class=\"fa fa-user fa-stack-1x fa-inverse\"></i> </span> </div> <div class=\"show-downloads nav-container\"> <span class=\"fa-stack fa-lg nav-element\"> <i class=\"fa fa-circle fa-stack-2x\"></i> <i class=\"fa fa-cloud-download fa-stack-1x fa-inverse\"></i> </span> </div> <div class=\"show-orders nav-container\"> <span class=\"fa-stack fa-lg previous nav-element\"> <i class=\"fa fa-circle fa-stack-2x\"></i> <i class=\"fa fa-eur fa-stack-1x fa-inverse\"></i> </span> </div> <div class=\"show-shops nav-container\"> <span class=\"fa-stack fa-lg previous nav-element\"> <i class=\"fa fa-circle fa-stack-2x\"></i> <i class=\"fa fa-shopping-cart fa-stack-1x fa-inverse\"></i> </span> </div> <div class=\"show-support nav-container\" style=\"margin-left: 25px;\"> <span class=\"fa-stack fa-lg previous nav-element\"> <i class=\"fa fa-circle fa-stack-2x\"></i> <i class=\"fa fa-question fa-stack-1x fa-inverse\"></i> </span> </div> </nav> <div class=\"right col-xs-7 text-right\"> <h1>{{ user:name }}</h1> </div> </div> <div rv-view=\"view\"></div> <nav class=\"navbar navbar-bottom row\"> <div class=\"col-xs-4 text-center credits\"> Ticketshop by inventid <img alt=\"Ticketshop by inventid\" height=\"32px\" src=\"//cdn.inventid.nl/assets/logo-31d76eea19223518132018c083fab3d2.png\" /> </div> </nav> </div> </div> "}).synced=true; App.Template.get("personal/shops/collection").set({html:"<div class=\"children\" rv-views=\"children\"> <!-- Here be the every seperate product --> </div> "}).synced=true; App.Template.get("personal/shops/list_item").set({html:"<div class=\"row pointer\"> <div class=\"col-xs-3 list-item open-shop\"> {{ model:event:name }} </div> <div class=\"col-xs-3 list-item open-shop\"> {{ model:name }} </div> <div class=\"col-xs-3 list-item share-facebook\"> <i class=\"fa fa-facebook-square social-button\"></i> Deel op Feestbook </div> <!-- <div class=\"col-xs-3\"> <i class=\"fa fa-twitter-square\"></i> Deel op Twitter </div> --> <div id=\"fb-root\"></div> </div> "}).synced=true; App.Template.get("personal/show_order").set({html:"<div> <p>De huidige status van order {{ order:id }} is {{ order:status }}</p> <div> <div class=\"row\" rv-each-entry=\"payments\"> <div class=\"col-sm-2\">{{entry:id}}</div> <div class=\"col-sm-2\">{{entry:method}}</div> <div class=\"col-sm-2\">{{entry:status}}</div> </div> </div> </div>"}).synced=true; App.Template.get("personal/show_downloads").set({html:"<div class=\"panel panel-primary\"> <div class=\"row\"> <div class=\"col-xs-8\">Voor de volgende producten staan e-tickets klaar om gedownload te worden.</div> <!-- <div class=\"col-xs-1\">&nbsp;</div> <div class=\"col-xs-3 refresh-downloads pointer text-right\"><i class=\"fa fa-refresh\"></i> Herlaad</div> --> </div> <div class=\"panel-heading row\"> <div class=\"col-xs-8\">Naam</div> <div class=\"col-xs-4\">Datum</div> </div> <div class=\"panel-body\" rv-view=\"orderProductIdentifiersView\"> <!-- Here be the listing of order_product_identifier in the user --> </div> <iframe class=\"invisible-frame\" id=\"downloadFrame\"></iframe> </div> "}).synced=true; App.Template.get("personal/show_shops").set({html:"<div> <p>Je hebt voor de volgende shops eerder producten aangeschaft. Door erop te klikken kun je direct producten bijbestellen, zonder je gegevens nogmaals in te hoeven vullen.</p> <div class=\"panel panel-primary\"> <div class=\"panel-heading row\"> <div class=\"col-xs-3\">Evenement</div> <div class=\"col-xs-3\">Shop</div> <div class=\"col-xs-3\">Let's go social</div> </div> <div class=\"panel-body\" rv-view=\"shopsView\"> <!-- Here be the listing of order_product_identifier in the user --> </div> </div> <div class=\"social\"> <p>Zin om met vrienden naar {{ shop:event:name }} te gaan? Breng ze ervan op de hoogte!</p> </div> </div>"}).synced=true; App.Template.get("personal/show_support").set({html:"<div> <p>Mocht er iets niet geheel duidelijk zijn, neem dan vooral contact op met onze helpdesk! Deze attente jongens en vlotte meiden staan dag en nacht voor je klaar om je vraag zo snel mogelijk te beantwoorden.</p> <p>Dus, indien je een vraag of probleem hebt (of je gewoon benieuwd ben naar een supporter), kun je gewoon een mail sturen naar <a href=\"mailto:support@inventid.nl\">support@inventid.nl</a>. Vermeld in ieder geval even je ordernummer, de naam van het evenement en (indien toepasselijk) een screenshot van de betaling.</p> <p>Tevens kun je kijken op <a href=\"http://support.in-ventid.nl\">support.in-ventid.nl</a>. Hier proberen we een aantal standaardvragen vast voor je te beantwoorden.</p> </div>"}).synced=true; App.Template.get("personal/show_user").set({html:"<div> <p rv-show=\"paymentStatus\" class=\"success col-sm-12\">Je meest recente betaling is {{ paymentStatus }}</p> <p class=\"bold\">Beste {{user:name }},</p> <p>Momenteel staat de volgende informatie over jou bij ons geregistreerd. Mocht hier iets niet van correct zijn, kun je via onze support afdeling dit laten aanpassen.</p> <table style=\"margin-top: 20px; margin-bottom: 20px;\"> <tr> <th style=\"width: 150px\">Naam</th> <td>{{ user:name }}</td> </tr> <tr> <th style=\"width: 150px\">E-mailadres</th> <td>{{ user:email_address }}</td> </tr> </table> <p>Via deze persoonlijke pagina kun je eenvoudig je e-tickets downloaden, je gegevens bekijken, of je ordergeschiedenis inzien. Tevens kun je, indien nodig, direct contact opnemen met onze supportafdeling.</p> </div>"}).synced=true; App.Template.get("personal/show_orders").set({html:"<div> <p>Je hebt bij ons de volgende orders gestart:</p> <div class=\"panel panel-primary\"> <div class=\"panel-heading row\"> <div class=\"col-xs-4\">Evenement</div> <div class=\"col-xs-4\">Shop</div> <div class=\"col-xs-2\">Ordernummer</div> <div class=\"col-xs-2\">Status</div> </div> <div class=\"panel-body\" rv-view=\"ordersView\"> <!-- Here be the listing of order_product_identifier in the user --> </div> </div> </div>"}).synced=true; App.Template.get("personal/orders/collection").set({html:"<div class=\"children\" rv-views=\"children\"> <!-- Here be the every seperate product --> </div> "}).synced=true; App.Template.get("personal/orders/list_item").set({html:"<div class=\"row pointer\"> <div class=\"col-xs-4 list-item open-order\"> {{ model:shop:event:name }} </div> <div class=\"col-xs-4 list-item open-order\"> {{ model:shop:name }} </div> <div class=\"col-xs-2 list-item open-order\"> {{ model:id }} </div> <div class=\"col-xs-2 list-item open-order\"> {{ model:status }} </div> </div> "}).synced=true; App.Template.get("personal/order_product_identifiers/collection").set({html:"<div class=\"children\" rv-views=\"children\"> <!-- Here be the every seperate product --> </div> "}).synced=true; App.Template.get("personal/order_product_identifiers/list_item").set({html:"<div class=\"row pointer\"> <div class=\"col-xs-8 list-item open-download\"> {{ model:order_product:product:name }} </div> <div class=\"col-xs-4 list-item open-download\"> {{ model:order_product:shop_product:product:valid_at | time model:order_product:order:shop:event:timezone 'DD-MM-YYYY HH:mm' }} </div> </div> "}).synced=true; App.Template.get("core/window").set({html:"<div class=\"window\" rv-view=\"view\"></div> "}).synced=true; App.Template.get("shop/index").set({html:"<div> <nav class=\"navbar navbar-top\" role=\"navigation\"> <div class=\"container\"> <div class=\"navbar-header\"> <a class=\"company\" href=\"#\">invent<span>id <img alt=\"\" height=\"24px\" src=\"//cdn.inventid.nl/assets/logo_white-117dc7e352ee4864b438caa766cda4a2.png\" /></span> <small>{{ shop:name }} kaartverkoop</small> </a> </div> </div> </nav> <div class=\"container\"> <div class=\"header row\"> <nav class=\"shop-nav left col-xs-4\"> <div class=\"show-products nav-container\"> <span class=\"fa-stack fa-lg nav-element\"> <i class=\"fa fa-circle fa-stack-2x\"></i> <i class=\"fa fa-shopping-cart fa-stack-1x fa-inverse\"></i> </span> </div> <div class=\"show-user nav-container\"> <span class=\"fa-stack fa-lg previous nav-element\"> <i class=\"fa fa-circle fa-stack-2x\"></i> <i class=\"fa fa-user fa-stack-1x fa-inverse\"></i> </span> </div> <div class=\"show-order nav-container\"> <span class=\"fa-stack fa-lg previous nav-element\"> <i class=\"fa fa-circle fa-stack-2x\"></i> <i class=\"fa fa-eur fa-stack-1x fa-inverse\"></i> </span> </div> </nav> <div class=\"right col-xs-8 text-right\"> <h1>{{ shop:event:name }} <small>{{ shop:event:organization:name }}</small> </h1> </div> </div> <div rv-view=\"view\"></div> <nav class=\"navbar navbar-bottom row\"> <div class=\"col-xs-4 text-left\"> <span class=\"btn previous\" rv-show=\"hasPrevious\"> Terug <i class=\"fa fa-arrow-circle-left\"></i> </span> </div> <div class=\"col-xs-4 text-center credits\"> Ticketshop by inventid <img alt=\"Ticketshop by inventid\" height=\"32px\" src=\"//cdn.inventid.nl/assets/logo-31d76eea19223518132018c083fab3d2.png\" /> </div> <div class=\"col-xs-4 text-right\"> <span class=\"btn btn-primary next\" rv-show=\"hasNext\"> <i class=\"fa fa-arrow-circle-right\"></i> Verder </span> </div> </nav> </div> </div> "}).synced=true; App.Template.get("shop/show_payment_methods").set({html:"<div class=\"panel panel-primary\"> <div class=\"panel-heading row\"> <div class=\"col-xs-12\"> Kassa </div> </div> <div class=\"panel-body\"> <div rv-view=\"shopPaymentMethodsView\"> </div> </div> </div> "}).synced=true; App.Template.get("shop/require_token").set({html:"<div> <nav class=\"navbar navbar-top\" role=\"navigation\"> <div class=\"container\"> <div class=\"navbar-header\"> <a class=\"company\" href=\"#\">invent<span>id <img alt=\"\" height=\"24px\" src=\"//cdn.inventid.nl/assets/logo_white-117dc7e352ee4864b438caa766cda4a2.png\" /></span> <small>{{ shop:name }} kaartverkoop</small> </a> </div> </div> </nav> <div class=\"container\"> <div class=\"panel panel-primary\"> <div class=\"panel-heading\"> Deze shop vereist authenticatie </div> <div class=\"panel-body\"> <form class=\"form-horizontal\" role=\"form\"> <div class=\"form-group\"> <label for=\"token\" class=\"col-xs-2 control-label\">Token</label> <div class=\"col-xs-10\"> <input type=\"text\" class=\"form-control\" id=\"token\" placeholder=\"Token\"/> </div> </div> </form> </div> </div> <nav class=\"navbar navbar-bottom row\"> <div class=\"col-xs-4 col-xs-offset-4 text-center credits\"> Ticketshop by inventid <img alt=\"Ticketshop by inventid\" height=\"32px\" src=\"//cdn.inventid.nl/assets/logo-31d76eea19223518132018c083fab3d2.png\" /> </div> <div class=\"col-xs-4 text-right\"> <span class=\"btn btn-primary\" id=\"authenticate\"> <i class=\"fa fa-arrow-circle-right\"></i> Verder </span> </div> </nav> </div> </div> "}).synced=true; App.Template.get("shop/shop_payment_methods/collection").set({html:"<div rv-views=\"children\" class=\"children\"></div>"}).synced=true; App.Template.get("shop/shop_payment_methods/list_item").set({html:"<div class=\"row\"> <div class=\"hidden-xs col-sm-6 list-item\">{{ model:payment_method:name }}</div> <div class=\"hidden-xs col-sm-2 list-item text-right italic\">+ {{ fee | currency }}</div> <div class=\"hidden-xs col-sm-2 list-item text-right\">{{ netto | currency }}</div> <div class=\"hidden-xs col-sm-2 list-item text-right\"> <button class=\"btn btn-primary\" rv-on-click=\"model.pay\"> <i class=\"fa fa-arrow-circle-right\"></i> Betaal </button> </div> <div class=\"col-xs-12 visible-xs-block list-item\"> <button class=\"btn btn-primary\" rv-on-click=\"model.pay\"> <i class=\"fa fa-arrow-circle-right\"></i> Betaal {{ netto | currency}} met {{ model:payment_method:name }} </button> </div> </div> "}).synced=true; App.Template.get("shop/require_password").set({html:"<div> <nav class=\"navbar navbar-top\" role=\"navigation\"> <div class=\"container\"> <div class=\"navbar-header\"> <a class=\"company\" href=\"#\">invent<span>id <img alt=\"\" height=\"24px\" src=\"//cdn.inventid.nl/assets/logo_white-117dc7e352ee4864b438caa766cda4a2.png\" /></span> <small>{{ shop:name }} kaartverkoop</small> </a> </div> </div> </nav> <div class=\"container\"> <div class=\"panel panel-primary\"> <div class=\"panel-heading\"> Deze shop vereist authenticatie </div> <div class=\"panel-body\"> <form class=\"form-horizontal\" role=\"form\"> <div class=\"form-group\"> <label for=\"password\" class=\"col-xs-2 control-label\">Wachtwoord</label> <div class=\"col-xs-10\"> <input type=\"text\" class=\"form-control\" id=\"password\" placeholder=\"Wachtwoord\"/> </div> </div> </form> </div> </div> <nav class=\"navbar navbar-bottom row\"> <div class=\"col-xs-4 col-xs-offset-4 text-center credits\"> Ticketshop by inventid <img alt=\"Ticketshop by inventid\" height=\"32px\" src=\"//cdn.inventid.nl/assets/logo-31d76eea19223518132018c083fab3d2.png\" /> </div> <div class=\"col-xs-4 text-right\"> <span class=\"btn btn-primary\" id=\"authenticate\"> <i class=\"fa fa-arrow-circle-right\"></i> Verder </span> </div> </nav> </div> </div> "}).synced=true; App.Template.get("shop/show_products").set({html:"<div class=\"panel panel-primary\"> <div class=\"panel-heading row\"> <div class=\"col-xs-8 col-sm-8\">Product</div> <div class=\"hidden-xs col-sm-2 text-right\">Prijs</div> <div class=\"col-xs-4 col-sm-2 text-right\">Aantal</div> </div> <div class=\"panel-body\" rv-view=\"shopProductsView\"> <!-- Here be the listing of products in the shop --> </div> </div> "}).synced=true; App.Template.get("shop/show_order").set({html:"<div> <div class=\"panel panel-primary\"> <div class=\"panel-heading row\"> <div class=\"col-xs-12\"> Kassa </div> </div> <div class=\"panel-body\"> <div rv-each-entry=\"quantities\"> <div class=\"row list-item\"> <div class=\"visible-xs-block col-xs-1 text-right\"> {{ entry.quantity }}x </div> <div class=\"col-xs-6 col-sm-8\"> {{ entry.shopProduct:product:name }} </div> <div class=\"hidden-xs col-sm-2 text-right\"> {{ entry.quantity }} x {{ entry.shopProduct:bruto | currency }} </div> <div class=\"col-xs-4 col-sm-2 text-right\"> {{ entry.bruto | currency }} </div> </div> </div> <div class=\"row list-item\"> <div class=\"col-xs-4 col-sm-6 bold\"> Subtotaal </div> <div class=\"col-xs-4 col-sm-4\"> <small>Inclusief fees</small> </div> <div class=\"col-xs-4 col-sm-2 text-right bold\"> {{ bruto | currency }} </div> </div> </div> </div> <div class=\"panel\" rv-show=\"showCheckoutItems\"> <div class=\"panel-heading row\"> <div class=\"col-sm-12\">Anderen kochten ook</div> </div> <div class=\"panel-body\" rv-view=\"checkoutProductsView\"> <!-- Here be the listing of products in the shop --> </div> </div> </div> "}).synced=true; App.Template.get("shop/order_products/collection").set({html:"<div> <div rv-views=\"children\"> </div> <hr> <div class=\"row\"> <div class=\"col-xs-4 col-sm-6 bold\"> Subtotaal </div> <div class=\"col-xs-4 col-sm-4 bold\"> <small>Inclusief fees</small> </div> <div class=\"col-xs-4 col-sm-2 text-right bold\"> {{ bruto | currency }} </div> </div> </div> "}).synced=true; App.Template.get("shop/order_products/list_item").set({html:"<div class=\"row\"> <div class=\"visible-xs-block col-xs-1 list-item text-right\"> 1x </div> <div class=\"col-xs-6 col-sm-8 list-item\"> {{ model:product:name }} </div> <div class=\"hidden-xs col-sm-2 list-item text-right\"> 1 x {{ bruto | currency }} </div> <div class=\"col-xs-4 col-sm-2 list-item text-right\"> {{ bruto | currency }} </div> </div> "}).synced=true; App.Template.get("shop/shop_products/collection").set({html:"<div class=\"children\" rv-views=\"children\"> <!-- Here be the every seperate product --> </div> "}).synced=true; App.Template.get("shop/shop_products/list_item").set({html:"<div class=\"row list-item\"> <div class=\"col-xs-8 col-sm-8\"> {{ model:product:name }} </div> <div class=\"hidden-xs col-sm-2 text-right\"> {{ model:bruto | currency }} </div> <div class=\"col-xs-4 col-sm-2 quantity\"> <input class=\"form-control\" type=\"number\" min=\"0\" rv-value=\"quantity | number\"/> </div> </div> "}).synced=true; App.Template.get("shop/show_user").set({html:"<div class=\"panel panel-primary\"> <div class=\"panel-heading row\"> <div class=\"col-xs-12\">Jouw gegevens</div> </div> <div class=\"panel-body\"> <div class=\"row\"> <div class=\"col-sm-6 left\"> <button class=\"col-xs-12 facebook\" id=\"connect-facebook\"> <i class=\"fa fa-facebook\"></i> <span class=\"button-text\">Verbind met Facebook</span> </button> <em class=\"col-xs-12 text-center\" style=\"margin: 1.5em 0\">&mdash; of &mdash;</em> <form class=\"form-horizontal\" role=\"form\"> <div class=\"form-group\"> <div class=\"col-xs-12\"> <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Voor- en achternaam\" rv-value=\"user:name\"/> </div> </div> <div class=\"form-group\"> <div class=\"col-xs-12\"> <input type=\"email\" class=\"form-control\" id=\"email-address\" placeholder=\"E-mailadres\" rv-value=\"user:email_address\"/> </div> </div> </form> </div> <div class=\"col-sm-6 right\"> <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p> </div> </div> <div id=\"fb-root\"></div> </div> </div> "}).synced=true; App.Template.get("users/login").set({html:"<div class=\"container\"> <div class=\"page-header\"> <h1>inventid</h1> </div> <div class=\"panel panel-primary\"> <div class=\"panel-heading\"> Graag inloggen </div> <div class=\"panel-body\"> <form class=\"form-horizontal\" role=\"form\"> <div class=\"form-group\"> <label for=\"token\" class=\"col-sm-2 control-label\">E-mailadres</label> <div class=\"col-sm-10\"> <input type=\"text\" class=\"form-control\" id=\"email_address\" placeholder=\"E-mailadres\"/> </div> </div> <div class=\"form-group\"> <label for=\"token\" class=\"col-sm-2 control-label\">Wachtwoord</label> <div class=\"col-sm-10\"> <input type=\"text\" class=\"form-control\" id=\"password\" placeholder=\"Wachtwoord\"/> </div> </div> <div id=\"login\" class=\"btn btn-primary pull-right\">Ga door</div> </form> </div> </div> </div> "}).synced=true; 
