require.config({
    paths: {
        mustache: 'lib/mustache/mustache',
        jquery: 'lib/jquery/jquery-1.9.1.min'
    }
});

require(['jquery', 'controls'], function($, controls) {


    var people = [{
        id: 1,
        name: "Doncho Minkov",
        age: 18,
        avatarUrl: "images/minkov.jpg"
    }, {
        id: 2,
        name: "Georgi Georgiev",
        age: 19,
        avatarUrl: "images/joreto.jpg"
    }];

    var comboBox = controls.ComboBox(people);
    var template = $("#person-template").html();
    var comboBoxHtml = comboBox.render(template);
    document.getElementById('wrapper').innerHTML = comboBoxHtml;
    comboBox.init();

    document.addEventListener('expand', function(e) {
        alert('expanded');
    });

    document.addEventListener('collapse', function(e) {
        alert('collapsed');
    });

    document.addEventListener('selectionChanged', function(e) {
        alert('selection changed' + ' previous selected : ' + e.detail.previousSelected + ' selected : ' + e.detail.selected);
    });
});