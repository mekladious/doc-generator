Promise.all([
  System.import('@angular/core'),
  System.import('@angular/platform-browser'),
  System.import('@angular/platform-browser-dynamic')
])
.then(([
  {Component, Inject, Injectable, Optional, NgModule, OpaqueToken},
  {BrowserModule},
  {platformBrowserDynamic}
]) => {

  const CONSTANT = { value: 'constant' };
  const CONSTANT_TOKEN = new OpaqueToken;
  const CONSTANT_PROVIDER = { provide: CONSTANT_TOKEN, useValue: CONSTANT };

  class Service {
    constructor(constant) {}
  }
  Service.parameters = [[new Inject(CONSTANT_TOKEN)]];

  class AppComponent {
    constructor(service, constant) {}
  }
  AppComponent.annotations = [new Component({
    selector: 'app',
    template: '...',
    providers: [Service, CONSTANT_PROVIDER]
  })];
  AppComponent.parameters = [[new Inject(Service)], [new Inject(CONSTANT_TOKEN)]];

  class AppModule {}
  AppModule.annotations = [new NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
  })];

  platformBrowserDynamic().bootstrapModule(AppModule);

})
.catch((err) => console.error(err));