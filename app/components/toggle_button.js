CC.ToggleButtonComponent = Em.Component.extend({
    tagName: 'button',
    classNames: ['btn'],
    classNameBindings: ['isDisplayed:btn-primary:btn-default'],

    isDisplayed: false,

    click: function() {
        this.toggleProperty('isDisplayed');
    }
});