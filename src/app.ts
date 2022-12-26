interface IDecoration {
  parent: string;
  template: string;
}

function ControllerDecoration(config: IDecoration) {
  return function (constructor: any) {
    const current = new constructor();
    const getParrent = document.getElementById(config.parent);
    const createElement = document.createElement(config.template);
    createElement.innerHTML = current.content;

    constructor.prototype.element = createElement;
    constructor.prototype.element = getParrent;
    getParrent?.appendChild(createElement);
  };
}

@ControllerDecoration({
  parent: 'app',
  template: 'H1',
})
class Controller {
  public content = 'My Controller';
}
