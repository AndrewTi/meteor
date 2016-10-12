import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../imports/ui/App.jsx';

FlowRouter.route('/', {
    action: function() {
        console.log("Не встиг прикрутити норм:)")
    }
});

FlowRouter.route('/photo', {
    action: function() {
        console.log("Тут якісь фотки:)")
    }
});

FlowRouter.route('/contact', {
    action: function() {
        console.log("Тут контакти:)")
    }
});

Meteor.startup(() => {
    render(<App />, document.getElementById('app'));
});