App.Template.get("dashboard/index").set({html:'<div> <nav class="navbar navbar-top" role="navigation"> <div class="container"> <div class="navbar-header"> <a class="company" href="#">invent<span>id <img alt="" height="24px" src="//cdn.inventid.nl/assets/logo_white-117dc7e352ee4864b438caa766cda4a2.png" /></span> <small>Dashboard</small> </a> </div> </div> </nav> <div class="container"> <div class="header row"> <nav class="shop-nav left"> <h1 class="col-xs-7"> {{ title }} </h1> <div class="col-xs-4"> <div class="nav-container full-width"> <div class="nav-element dropdown"> <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="true"> Snel naar... <span class="caret pull-right"></span> </button> <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1" style="padding-left: 5px;"> <li role="presentation" class="dropdown-header">Evenementen</li> <div class="sub-tab" rv-each-event="user:events"> <li role="presentation" class="dropdown-header">{{ event:name }}</li> <div class="sub-tab"> <li role="presentation" class="dropdown-header">Producten</li> <div class="sub-tab"> <li class="clickable" rv-each-product="event:products">{{ product:name }}</li> </div> </div> <div class="sub-tab"> <li role="presentation" class="dropdown-header">Shops</li> <div class="sub-tab"> <li class="clickable" rv-each-shop="event:shops">{{ shop:name }}</li> </div> </div> </div> </ul> </div> </div> </div> <div class="col-xs-1"> <div class="add nav-container"> <span class="fa-stack fa-lg previous nav-element"> <i class="fa fa-circle fa-stack-2x"></i> <i class="fa fa-plus fa-stack-1x fa-inverse"></i> </span> </div> </div> </nav> </div> <div rv-view="view"></div> <nav class="navbar navbar-bottom row"> <div class="col-xs-4 text-left"> &nbsp; </div> <div class="col-xs-4 text-center credits"> Event services by inventid <img alt="Ticketshop by inventid" height="32px" src="//cdn.inventid.nl/assets/logo_without_name-ced1e4957e28d5df477b338237e15386.png" /> </div> <div class="col-xs-4 text-right"> &nbsp; </div> </nav> </div> </div> '}).synced=!0,App.Template.get("dashboard/events/collection").set({html:'<div class="children" rv-views="children"></div> '}).synced=!0,App.Template.get("dashboard/events/list_item").set({html:'<div class="clickable row list-item"> <div class="col-xs-12"> {{ model:name }} </div> </div> '}).synced=!0,App.Template.get("dashboard/shops/collection").set({html:'<div class="children" rv-views="children"></div> '}).synced=!0,App.Template.get("dashboard/shops/list_item").set({html:'<div class="clickable row list-item"> <div class="col-xs-12"> {{ model:name }} </div> </div> '}).synced=!0,App.Template.get("dashboard/show_overview").set({html:'<div> <div class="panel panel-primary" rv-each-event="user:events"> <div class="panel-heading"> {{ event:name }} </div> <div class="panel-body"> <div class="row list-item"> <div class="col-xs-4 bold">Product</div> <div class="col-xs-4 bold">Verkopen</div> <div class="col-xs-3 bold">Omzet</div> </div> <div class="row list-item" rv-each-product="event:products"> <div class="col-xs-4">{{ product:name }}</div> <div class="col-xs-4"> {{ product:sold }}<span rv-if="product.hasLimitedQuantity"> / {{ product:max_quantity }}</span> </div> <div class="col-xs-3">{{ product:revenue | currency }}</div> <div class="col-xs-1"><i class="fa fa-pencil-square-o"></i></div> </div> <div class="row list-item"> <div class="col-xs-4">Totaal</div> <div class="col-xs-4">{{ event.total.sold }}</div> <div class="col-xs-3">{{ event.total:.revenue | currency }}</div> </div> </div> </div> <div rv-show="user.admin | negate"> <div class="panel panel-primary" rv-each-organization="user:organizations"> <div class="panel-heading"> Sales manager voor {{ organization:name }} </div> <div class="panel-body"> <div class="row"> <div class="col-xs-11"> <div class="list-item"> <div class="col-xs-4">{{ organization:sales_manager.name }}</div> <div class="col-xs-5">{{ organization:sales_manager.email_address }}</div> <div class="col-xs-3">{{ organization:sales_manager.phone_number }}</div> </div> </div> <div class="col-xs-1"><i class="fa fa-info" style="font-size: 35px;"></i></div> </div> </div> </div> </div> </div>'}).synced=!0,App.Template.get("dashboard/edit/product_shops/collection").set({html:'<div class="children" rv-views="children"> <!-- Here be the every seperate shops --> </div> '}).synced=!0,App.Template.get("dashboard/edit/product_shops/list_item").set({html:'<div class="row form-group list-item"> <div class="col-xs-4"> <input type="checkbox" rv-checked="selected" /> {{ model:name }} </div> <div class="col-xs-4" rv-show="selected"> <input type="text" rv-value="model:price" class="form-control" placeholder="Prijs in centen"/> </div> <div class="col-xs-4" rv-show="selected"> <input type="text" rv-value="model:max_quantity" class="form-control" placeholder="Aantal kaarten"/> </div> </div> '}).synced=!0,App.Template.get("dashboard/edit/product").set({html:'<div> <form class="form-horizontal" role="form"> <div class="panel panel-primary"> <div class="panel-heading row"> <div class="col-xs-12">Product toevoegen</div> </div> <div class="panel-body"> <div rv-show="step1"> <div class="row form-group"> <div class="col-xs-12"> <select class="form-control event-selector"> <option disabled="disabled" value="picker">Kies een evenement...</option> <option rv-each-event="user:events" rv-value="event:id"> {{ event:organization:name }} - {{ event:name }} </option> </select> </div> </div> <div class="row form-group"> <div class="col-xs-12"> <button class="btn-primary pull-right to-step-two" type="button">Naar stap 2</button> </div> </div> </div> <div rv-show="step2"> <div class="row form-group"> <div class="col-xs-12"> <input class="form-control" type="text" rv-value="product:name" placeholder="Productnaam"> </div> </div> <div class="row form-group"> <div class="col-xs-12"> <input class="form-control valid_from" type="text" rv-value="product:valid_from" placeholder="Geldig vanaf"> </div> </div> <div class="row form-group"> <div class="col-xs-12"> <input class="form-control valid_until" type="text" rv-value="product:valid_until" placeholder="Geldig tot"> </div> </div> <div class="row form-group"> <div class="col-xs-12"> <input class="form-control doors_close_at" type="text" rv-value="product:doors_close_at" placeholder="Sluiting deuren"> </div> </div> <div class="row form-group"> <div class="col-xs-12"> <button class="btn-primary pull-right to-step-three" type="button">Volgende stap</button> </div> </div> </div> <div rv-show="step3"> Binnen welke shops dient dit product actief te zijn? <div rv-view="productShopsView"> <!-- Here be the different shops of the event with the options etc --> </div> <div class="row form-group"> <div class="col-xs-12"> <button class="btn-primary pull-right to-step-four" type="button">Volgende stap</button> </div> </div> </div> <div rv-show="step4"> <div class="row form-group"> <div class="col-xs-3">Productnaam</div> <div class="col-xs-9">{{ product:name }}</div> </div> <div class="row form-group"> <div class="col-xs-3">Geldig vanaf</div> <div class="col-xs-9">{{ product:valid_from }}</div> </div> <div class="row form-group"> <div class="col-xs-3">Geldig tot</div> <div class="col-xs-9">{{ product:valid_until }}</div> </div> <div class="row form-group"> <div class="col-xs-3">Sluiting deuren</div> <div class="col-xs-9">{{ product:doors_close_at }}</div> </div> <div class="row form-group"> <div class="col-xs-12"> <button class="btn-primary pull-right" rv-on-click="save" type="button">Opslaan</button> </div> </div> </div> </div> </div> </form> </div> '}).synced=!0,App.Template.get("dashboard/edit/event").set({html:'<div> <form class="form-horizontal" role="form"> <div class="panel panel-primary"> <div class="panel-heading row"> <div class="col-xs-12">Gegevens van je evenement</div> </div> <div class="panel-body"> <div rv-show="step1"> <div class="row form-group"> <div class="col-xs-12"> <select class="form-control organization-selector"> <option disabled="disabled" value="picker">Kies een organisatie...</option> <option rv-each-organization="user:organizations" rv-value="organization:id" rv-text="organization:name"></option> </select> </div> </div> <div class="row form-group"> <div class="col-xs-12"> <button class="btn-primary pull-right to-step-two" type="button">Naar stap 2</button> </div> </div> </div> <div rv-show="step2"> <div class="row form-group"> <div class="col-xs-12"> <input class="form-control" type="text" rv-value="event:name" placeholder="Evenementnaam"> </div> </div> <div class="row form-group"> <div class="col-xs-12"> <input class="form-control" type="text" rv-value="event:location_address" placeholder="Adres van het evenement"> </div> </div> <div class="row form-group"> <div class="col-xs-12"> <input class="form-control" type="text" rv-value="event:location_postal_code" placeholder="Postcode van het evenement"> </div> </div> <div class="row form-group"> <div class="col-xs-12"> <input class="form-control" type="text" rv-value="event:location_city" placeholder="Stad van het evenement"> </div> </div> <div class="row form-group"> <div class="col-xs-12"> <button class="btn-primary pull-right create" type="button">Opslaan</button> </div> </div> </div> </div> </div> </form> </div>'}).synced=!0,App.Template.get("dashboard/edit/add").set({html:'<div> <div class="panel panel-primary"> <div class="panel-heading row"> <div class="col-xs-12">Wat wil je toevoegen?</div> </div> <div class="panel-body"> <div class="col-xs-12 list-item clickable event">Een evenement</div> <div class="col-xs-12 list-item clickable shop">Een shop</div> <div class="col-xs-12 list-item clickable product">Een product</div> </div> </div> </div> '}).synced=!0,App.Template.get("dashboard/edit/shop").set({html:'<div> <form class="form-horizontal" role="form"> <div class="panel panel-primary"> <div class="panel-heading row"> <div class="col-xs-12">Gegevens van je shop</div> </div> <div class="panel-body"> <div rv-show="step1"> <div class="row form-group"> <div class="col-xs-12"> <select class="form-control event-selector"> <option disabled="disabled" value="picker">Kies een evenement...</option> <option rv-each-event="user:events" rv-value="event:id">{{ event:organization:name }} - {{ event:name }} </option> </select> </div> </div> <div class="row form-group"> <div class="col-xs-12"> <button class="btn-primary pull-right to-step-two" type="button">Naar stap 2</button> </div> </div> </div> <div rv-show="step2"> <div class="row form-group"> <div class="col-xs-12"> <input class="form-control" type="text" rv-value="shop:name" placeholder="Shopnaam"> </div> </div> <div class="row form-group"> <div class="col-xs-12"> <input class="form-control" type="text" rv-value="shop:opens_at" placeholder="Openingstijd van de shop"> </div> </div> <div class="row form-group"> <div class="col-xs-12"> <input class="form-control" type="text" rv-value="shop:closes_at" placeholder="Sluitingtijd van de shop"> </div> </div> <div class="row form-group"> <div class="col-xs-12"> <button class="btn-primary pull-right create" type="button">Opslaan</button> </div> </div> </div> </div> </div> </form> </div>'}).synced=!0,App.Template.get("dashboard/show_organization").set({html:"<div> Organization </div> "}).synced=!0,App.Template.get("dashboard/products/collection").set({html:'<div class="children" rv-views="children"></div> '}).synced=!0,App.Template.get("dashboard/products/edit").set({html:""}).synced=!0,App.Template.get("dashboard/products/list_item").set({html:'<div class="clickable row list-item"> <div class="col-xs-8"> {{ model:name }} </div> <div class="col-xs-4"> {{ model:valid_at | time model:event:timezone }} </div> </div> '}).synced=!0,App.Template.get("dashboard/organizations/collection").set({html:'<div class="children" rv-views="children"></div> '}).synced=!0,App.Template.get("dashboard/organizations/list_item").set({html:'<div class="clickable row list-item"> <div class="col-xs-12"> {{ model:name }} </div> </div> '}).synced=!0,App.Template.get("dashboard/show_shop").set({html:"<div> Shop </div> "}).synced=!0,App.Template.get("dashboard/show_event").set({html:'<div> <h2>Producten</h2> <div class="panel panel-primary"> <div class="panel-heading row"> <div class="col-xs-8">Product</div> <div class="col-xs-4">Geldig op</div> </div> <div class="panel-body" rv-view="productsView"> <!-- Here be the listing of products in the shop --> </div> </div> <button class="btn btn-primary pull-right"> <i class="fa fa-plus-circle"></i> Maak een nieuw product </button> </div> '}).synced=!0,App.Template.get("personal/index").set({html:'<div> <nav class="navbar navbar-top" role="navigation"> <div class="container"> <div class="navbar-header"> <a class="company" href="#">invent<span>id <img alt="" height="24px" src="//cdn.inventid.nl/assets/logo_white-117dc7e352ee4864b438caa766cda4a2.png" /></span> <small>Jouw persoonlijke overzicht</small> </a> </div> </div> </nav> <div class="container"> <div class="header row"> <nav class="shop-nav left col-xs-5"> <div class="show-user nav-container"> <span class="fa-stack fa-lg previous nav-element active"> <i class="fa fa-circle fa-stack-2x"></i> <i class="fa fa-user fa-stack-1x fa-inverse"></i> </span> </div> <div class="show-downloads nav-container"> <span class="fa-stack fa-lg nav-element"> <i class="fa fa-circle fa-stack-2x"></i> <i class="fa fa-cloud-download fa-stack-1x fa-inverse"></i> </span> </div> <div class="show-orders nav-container"> <span class="fa-stack fa-lg previous nav-element"> <i class="fa fa-circle fa-stack-2x"></i> <i class="fa fa-eur fa-stack-1x fa-inverse"></i> </span> </div> <div class="show-shops nav-container"> <span class="fa-stack fa-lg previous nav-element"> <i class="fa fa-circle fa-stack-2x"></i> <i class="fa fa-shopping-cart fa-stack-1x fa-inverse"></i> </span> </div> <div class="show-support nav-container" style="margin-left: 25px;"> <span class="fa-stack fa-lg previous nav-element"> <i class="fa fa-circle fa-stack-2x"></i> <i class="fa fa-question fa-stack-1x fa-inverse"></i> </span> </div> </nav> <div class="right col-xs-7 text-right"> <h1>{{ user:name }}</h1> </div> </div> <div rv-view="view"></div> <nav class="navbar navbar-bottom row"> <div class="col-xs-4 text-left"> &nbsp; </div> <div class="col-xs-4 text-center credits"> Ticketshop by inventid <img alt="Ticketshop by inventid" height="32px" src="//cdn.inventid.nl/assets/logo_without_name-ced1e4957e28d5df477b338237e15386.png" /> </div> <div class="col-xs-4 text-right"> &nbsp; </div> </nav> </div> </div> '}).synced=!0,App.Template.get("personal/shops/collection").set({html:'<div class="children" rv-views="children"> <!-- Here be the every seperate product --> </div> '}).synced=!0,App.Template.get("personal/shops/list_item").set({html:'<div class="row pointer list-item"> <div class="col-xs-3 open-shop"> {{ model:event:name }} </div> <div class="col-xs-3 open-shop"> {{ model:name }} </div> <div class="col-xs-6 share-facebook"> <i class="fa fa-facebook-square social-button"></i> Deel op Feestbook </div> <!-- <div class="col-xs-3"> <i class="fa fa-twitter-square"></i> Deel op Twitter </div> --> <div id="fb-root"></div> </div> '}).synced=!0,App.Template.get("personal/show_order").set({html:'<div> <p>De huidige status van order {{ order:id }} is {{ order:status | statuscode }}</p> <div> <div class="row" rv-each-entry="payments"> <div class="col-sm-2">{{entry:id}}</div> <div class="col-sm-2">{{entry:method}}</div> <div class="col-sm-2">{{entry:status}}</div> </div> </div> </div> '}).synced=!0,App.Template.get("personal/show_downloads").set({html:'<div> <p class="intro_text"> Voor de volgende producten staan e-tickets klaar om gedownload te worden. </p> <div class="panel panel-primary"> <div class="panel-heading row"> <div class="col-xs-8">Naam</div> <div class="col-xs-4">Datum</div> </div> <div class="panel-body" rv-view="orderProductIdentifiersView"> <!-- Here be the listing of order_product_identifier in the user --> </div> </div> </div>'}).synced=!0,App.Template.get("personal/show_shops").set({html:'<div> <p class="intro_text"> Je hebt voor de volgende shops eerder producten aangeschaft. Door erop te klikken kun je direct producten bijbestellen, zonder je gegevens nogmaals in te hoeven vullen. </p> <div class="panel panel-primary"> <div class="panel-heading row"> <div class="col-xs-3">Evenement</div> <div class="col-xs-3">Shop</div> <div class="col-xs-6">Let\'s go social</div> </div> <div class="panel-body" rv-view="shopsView"> <!-- Here be the listing of order_product_identifier in the user --> </div> </div> <div class="social"> <p>Zin om met vrienden naar {{ shop:event:name }} te gaan? Breng ze ervan op de hoogte!</p> </div> </div> '}).synced=!0,App.Template.get("personal/show_support").set({html:'<div> <div class="panel panel-primary"> <div class="panel-heading row"> <div class="col-xs-12">Support</div> </div> </div> <p>Mocht er iets niet geheel duidelijk zijn, neem dan vooral contact op met onze helpdesk! Deze attente jongens en vlotte meiden staan dag en nacht voor je klaar om je vraag zo snel mogelijk te beantwoorden.</p> <p>Dus, indien je een vraag of probleem hebt (of je gewoon benieuwd ben naar een supporter), kun je gewoon een mail sturen naar <a href="mailto:support@inventid.nl">support@inventid.nl</a>. Vermeld in ieder geval even je ordernummer, de naam van het evenement en (indien toepasselijk) een screenshot van de betaling.</p> <p>Tevens kun je kijken op <a href="http://support.in-ventid.nl">support.in-ventid.nl</a>. Hier proberen we een aantal standaardvragen vast voor je te beantwoorden.</p> </div>'}).synced=!0,App.Template.get("personal/show_user").set({html:'<div> <p rv-show="paymentStatus" class="success col-sm-12">Je meest recente betaling is {{ paymentStatus | statuscode }}</p> <p class="bold">Beste {{user:name }},</p> <p>Momenteel staat de volgende informatie over jou bij ons geregistreerd.<br> Mocht deze informatie incorrect zijn, kun je dit laten aanpassen via onze support afdeling.</p> <div class="row"> <div class="col-xs-3">Naam</div> <div class="col-xs-3">{{ user:name }}</div> </div> <div class="row"> <div class="col-xs-3">E-mailadres</div> <div class="col-xs-3">{{ user:email_address }}</div> </div> <div> <p class="toggle-password-box clickable" style="text-decoration: underline;">Wachtwoord wijzigen</p> <div rv-show="passwordEdit" style="margin-bottom: 25px;"> <form> <div class="row form-group" rv-show="user:has_password"> <div class="col-xs-5"> <input type="password" class="form-control" rv-value="user:old_password" placeholder="Huidige wachtwoord"/> </div> </div> <div class="row form-group"> <div class="col-xs-5"> <input type="password" class="form-control" rv-value="user:password" placeholder="Nieuwe wachtwoord"/> </div> </div> <div class="row form-group"> <div class="col-xs-5"> <input type="password" class="form-control" rv-value="user:password_confirmation" placeholder="Herhaal nieuwe wachtwoord"/></div> </div> <div class="row form-group"> <div class="col-xs-5"> <button type="button" class="full-width btn save-user">Wijzigen</button> </div> </div> </form> </div> </div> <p>Via deze persoonlijke pagina kun je eenvoudig je e-tickets downloaden, je gegevens bekijken, of je ordergeschiedenis inzien. Tevens kun je, indien nodig, direct contact opnemen met onze supportafdeling.</p> </div>'}).synced=!0,App.Template.get("personal/show_orders").set({html:'<div> <p class="intro_text"> Je hebt bij ons de volgende orders gestart: </p> <div class="panel panel-primary"> <div class="panel-heading row"> <div class="col-xs-4">Evenement</div> <div class="col-xs-3">Shop</div> <div class="col-xs-3">Ordernummer</div> <div class="col-xs-2">Status</div> </div> <div class="panel-body" rv-view="ordersView"> <!-- Here be the listing of order_product_identifier in the user --> </div> </div> </div> '}).synced=!0,App.Template.get("personal/orders/collection").set({html:'<div class="children" rv-views="children"> <!-- Here be the every seperate product --> </div> '}).synced=!0,App.Template.get("personal/orders/list_item").set({html:'<div class="row list-item pointer"> <div class="col-xs-4 open-order "> {{ model:shop:event:name }} </div> <div class="col-xs-3 open-order"> {{ model:shop:name }} </div> <div class="col-xs-3 open-order"> {{ model:id }} </div> <div class="col-xs-2 open-order"> {{ model:status | statuscode}} </div> </div> '}).synced=!0,App.Template.get("personal/order_product_identifiers/collection").set({html:'<div class="children" rv-views="children"> <!-- Here be the every seperate product --> </div> '}).synced=!0,App.Template.get("personal/order_product_identifiers/list_item").set({html:'<div class="row pointer list-item"> <div class="col-xs-8 open-download"> {{ model:order_product:shop_product:product:name }} </div> <div class="col-xs-4 open-download"> {{ model:order_product:shop_product:product:valid_from | time model:order_product:order:shop:event:timezone }} </div> </div> '}).synced=!0,App.Template.get("core/window").set({html:'<div class="window" rv-view="view"></div> '}).synced=!0,App.Template.get("shop/index").set({html:'<div> <nav class="navbar navbar-top" role="navigation"> <div class="container"> <div class="navbar-header"> <a class="company" href="#">invent<span>id <img alt="" height="24px" src="//cdn.inventid.nl/assets/logo_white-117dc7e352ee4864b438caa766cda4a2.png" /></span> <small>{{ shop:name }} kaartverkoop</small> </a> </div> </div> </nav> <div class="container"> <div class="header row"> <nav class="shop-nav left col-xs-4"> <div class="show-products nav-container"> <span class="fa-stack fa-lg nav-element active"> <i class="fa fa-circle fa-stack-2x"></i> <i class="fa fa-shopping-cart fa-stack-1x fa-inverse"></i> </span> </div> <div class="show-user nav-container"> <span class="fa-stack fa-lg previous nav-element"> <i class="fa fa-circle fa-stack-2x"></i> <i class="fa fa-user fa-stack-1x fa-inverse"></i> </span> </div> <div class="show-order nav-container"> <span class="fa-stack fa-lg previous nav-element"> <i class="fa fa-circle fa-stack-2x"></i> <i class="fa fa-eur fa-stack-1x fa-inverse"></i> </span> </div> </nav> <div class="right col-xs-8 text-right"> <h1>{{ shop:event:name }} <small>{{ shop:event:organization:name }}</small> </h1> </div> </div> <div rv-view="view"></div> <nav class="navbar navbar-bottom row"> <div class="col-xs-4 text-left"> <span class="btn previous" rv-show="hasPrevious"> Terug <i class="fa fa-arrow-circle-left"></i> </span> </div> <div class="col-xs-4 text-center credits"> Ticketshop by inventid <img alt="Ticketshop by inventid" height="32px" src="//cdn.inventid.nl/assets/logo_without_name-ced1e4957e28d5df477b338237e15386.png" /> </div> <div class="col-xs-4 text-right"> <span class="btn btn-primary next" rv-show="hasNext"> <i class="fa fa-arrow-circle-right"></i> Verder </span> </div> </nav> </div> </div> '}).synced=!0,App.Template.get("shop/show_payment_methods").set({html:'<div class="panel panel-primary"> <div class="panel-heading row"> <div class="col-xs-12"> Kassa </div> </div> <div class="panel-body"> <div rv-view="shopPaymentMethodsView"> </div> </div> </div> '}).synced=!0,App.Template.get("shop/require_token").set({html:'<div> <nav class="navbar navbar-top" role="navigation"> <div class="container"> <div class="navbar-header"> <a class="company" href="#">invent<span>id <img alt="" height="24px" src="//cdn.inventid.nl/assets/logo_white-117dc7e352ee4864b438caa766cda4a2.png" /></span> <small>{{ shop:name }} kaartverkoop</small> </a> </div> </div> </nav> <div class="container"> <div class="panel panel-primary"> <div class="panel-heading"> Deze shop vereist authenticatie </div> <div class="panel-body"> <form class="form-horizontal" role="form"> <div class="form-group"> <label for="token" class="col-xs-2 control-label">Token</label> <div class="col-xs-10"> <input type="text" class="form-control" id="token" placeholder="Token"/> </div> </div> </form> </div> </div> <nav class="navbar navbar-bottom row"> <div class="col-xs-4 col-xs-offset-4 text-center credits"> Ticketshop by inventid <img alt="Ticketshop by inventid" height="32px" src="//cdn.inventid.nl/assets/logo-31d76eea19223518132018c083fab3d2.png" /> </div> <div class="col-xs-4 text-right"> <span class="btn btn-primary" id="authenticate"> <i class="fa fa-arrow-circle-right"></i> Verder </span> </div> </nav> </div> </div> '}).synced=!0,App.Template.get("shop/shop_payment_methods/collection").set({html:'<div rv-views="children" class="children"></div>'}).synced=!0,App.Template.get("shop/shop_payment_methods/list_item").set({html:'<div class="row list-item"> <div class="hidden-xs col-sm-6">{{ model:payment_method:name | payment_method }}</div> <div class="hidden-xs col-sm-2 text-right italic">+ {{ fee | currency }}</div> <div class="hidden-xs col-sm-2 text-right">{{ netto | currency }}</div> <div class="hidden-xs col-sm-2 text-right"> <button class="btn btn-primary" rv-on-click="model.pay"> <i class="fa fa-arrow-circle-right"></i> Betaal </button> </div> <div class="col-xs-12 visible-xs-block"> <button class="btn btn-primary" rv-on-click="model.pay"> <i class="fa fa-arrow-circle-right"></i> Betaal {{ netto | currency}} met {{ model:payment_method:name | payment_method }} </button> </div> </div> '}).synced=!0,App.Template.get("shop/require_password").set({html:'<div> <nav class="navbar navbar-top" role="navigation"> <div class="container"> <div class="navbar-header"> <a class="company" href="#">invent<span>id <img alt="" height="24px" src="//cdn.inventid.nl/assets/logo_white-117dc7e352ee4864b438caa766cda4a2.png" /></span> <small>{{ shop:name }} kaartverkoop</small> </a> </div> </div> </nav> <div class="container"> <div class="panel panel-primary"> <div class="panel-heading"> Deze shop vereist authenticatie </div> <div class="panel-body"> <form class="form-horizontal" role="form"> <div class="form-group"> <label for="password" class="col-xs-2 control-label">Wachtwoord</label> <div class="col-xs-10"> <input type="text" class="form-control" id="password" placeholder="Wachtwoord"/> </div> </div> </form> </div> </div> <nav class="navbar navbar-bottom row"> <div class="col-xs-4 col-xs-offset-4 text-center credits"> Ticketshop by inventid <img alt="Ticketshop by inventid" height="32px" src="//cdn.inventid.nl/assets/logo-31d76eea19223518132018c083fab3d2.png" /> </div> <div class="col-xs-4 text-right"> <span class="btn btn-primary" id="authenticate"> <i class="fa fa-arrow-circle-right"></i> Verder </span> </div> </nav> </div> </div> '}).synced=!0,App.Template.get("shop/show_products").set({html:'<div class="panel panel-primary"> <div class="panel-heading row"> <div class="col-xs-8 col-sm-8">Product</div> <div class="hidden-xs col-sm-2 text-right">Prijs</div> <div class="col-xs-4 col-sm-2 text-right">Aantal</div> </div> <div class="panel-body" rv-view="shopProductsView"> <!-- Here be the listing of products in the shop --> </div> </div> '}).synced=!0,App.Template.get("shop/show_order").set({html:'<div> <div class="panel panel-primary"> <div class="panel-heading row"> <div class="col-xs-12"> Kassa </div> </div> <div class="panel-body"> <div class="row list-item" rv-each-entry="quantities"> <div class="visible-xs-block col-xs-1 text-right"> {{ entry.quantity }}x </div> <div class="col-xs-6 col-sm-8"> {{ entry.shopProduct:product:name }} </div> <div class="hidden-xs col-sm-2 text-right"> {{ entry.quantity }} x {{ entry.shopProduct:bruto | currency }} </div> <div class="col-xs-4 col-sm-2 text-right"> {{ entry.bruto | currency }} </div> </div> <div class="row list-item"> <div class="col-xs-8 col-sm-10"> Administratiekosten </div> <div class="col-xs-4 col-sm-2 text-right"> {{ order:fee | currency }} </div> </div> <div class="row list-item"> <div class="col-xs-8 col-sm-10 bold"> Subtotaal </div> <div class="col-xs-4 col-sm-2 text-right bold"> {{ bruto | currency }} </div> </div> <div class="row list-item"> <div class="col-xs-8 col-sm-10"> Transactiekosten <span class="hidden-xs">{{ shop:preferred_payment_method:name | payment_method }}</span> </div> <div class="col-xs-4 col-sm-2 text-right"> {{ fee | currency }} </div> </div> </div> </div> <div class="panel" rv-show="shop:checkout_category:shop_products | length | gt 0"> <div class="panel-heading row"> <div class="col-sm-12">Anderen kochten ook</div> </div> <div class="panel-body" rv-view="checkoutProductsView"> <!-- Here be the listing of products in the shop --> </div> </div> <div class="panel-body" style="padding-top: 0px;"> <div class="row list-item"> <div class="col-xs-8 col-sm-10 bold"> Totaal </div> <div class="col-xs-4 col-sm-2 text-right bold"> {{ netto | currency }} </div> </div> </div> <div> <span class="btn btn-primary pay-preferred pull-right"> <i class="fa fa-arrow-circle-right"></i> Betaal direct met {{ shop:preferred_payment_method:name | payment_method }} </span> </div> </div> </div> '}).synced=!0,App.Template.get("shop/order_products/collection").set({html:'<div> <div rv-views="children"> </div> <hr> <div class="row list-item"> <div class="col-xs-4 col-sm-6 bold"> Subtotaal </div> <div class="col-xs-4 col-sm-4 bold"> <small>Inclusief fees</small> </div> <div class="col-xs-4 col-sm-2 text-right bold"> {{ bruto | currency }} </div> </div> </div> '}).synced=!0,App.Template.get("shop/order_products/list_item").set({html:'<div class="row list-item "> <div class="visible-xs-block col-xs-1 text-right"> 1x </div> <div class="col-xs-6 col-sm-8"> {{ model:product:name }} </div> <div class="hidden-xs col-sm-2 text-right"> 1 x {{ bruto | currency }} </div> <div class="col-xs-4 col-sm-2 text-right"> {{ bruto | currency }} </div> </div> '}).synced=!0,App.Template.get("shop/shop_products/collection").set({html:'<div class="children" rv-views="children"> <!-- Here be the every seperate product --> </div> '}).synced=!0,App.Template.get("shop/shop_products/list_item").set({html:'<div class="row list-item"> <div class="col-xs-8 col-sm-8"> {{ model:product:name }} </div> <div class="hidden-xs col-sm-2 text-right"> {{ model:bruto | currency }} </div> <div class="col-xs-4 col-sm-2 quantity"> <input class="form-control" type="number" min="0" rv-value="quantity | number"/> </div> </div> '}).synced=!0,App.Template.get("shop/show_user").set({html:'<div class="panel panel-primary"> <div class="panel-heading row"> <div class="col-xs-12">Jouw gegevens</div> </div> <div class="panel-body"> <div class="row"> <div class="col-sm-6 left"> <button class="col-xs-12 facebook" id="connect-facebook"> <i class="fa fa-facebook"></i> <span class="button-text">Verbind met Facebook</span> </button> <em class="col-xs-12 text-center" style="margin: 1.5em 0">&mdash; of &mdash;</em> <form class="form-horizontal" role="form"> <div class="form-group"> <div class="col-xs-12"> <input type="text" class="form-control" id="name" placeholder="Voor- en achternaam" rv-value="user:name"/> </div> </div> <div class="form-group"> <div class="col-xs-12"> <input type="email" class="form-control" id="email-address" placeholder="E-mailadres" rv-value="user:email_address"/> </div> </div> </form> </div> <div class="col-sm-6 right"> <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p> </div> </div> <div id="fb-root"></div> </div> </div> '}).synced=!0,App.Template.get("users/login").set({html:'<div class="container"> <div class="page-header"> <h1>inventid</h1> </div> <div class="panel panel-primary"> <div class="panel-heading"> Graag inloggen </div> <div class="panel-body"> <form class="form-horizontal" role="form"> <div class="form-group"> <label for="token" class="col-sm-2 control-label">E-mailadres</label> <div class="col-sm-10"> <input type="text" class="form-control" id="email_address" placeholder="E-mailadres"/> </div> </div> <div class="form-group"> <label for="token" class="col-sm-2 control-label">Wachtwoord</label> <div class="col-sm-10"> <input type="password" class="form-control" id="password" placeholder="Wachtwoord" autocomplete="off"/> </div> </div> <button id="login" class="btn btn-primary pull-right">Ga door</button> </form> </div> </div> </div> '}).synced=!0;