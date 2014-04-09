define(['mustache'],
    function(Mustache) {

        function ComboBox(collection) {
            this.data = collection;
            this.selectedIndex = 0;
<<<<<<< HEAD
=======
            this.isExpanded = false;
>>>>>>> 7f5b9e1c5c229cb4a097f423c07a5ac8e6b35e2e
        }

        function ComboBoxFactory(collection) {
            return new ComboBox(collection);
        }

        ComboBox.prototype.render = function(template) {

            var list = document.createElement('ul'),
                listItem;

            list.className = 'list-group';

            for (var i in this.data) {

                listItem = document.createElement('li');
                listItem.innerHTML = Mustache.render(template, this.data[i]);
                listItem.className = 'list-group-item';

                list.appendChild(listItem);
            }

            this.element = list;

            return list.outerHTML;
        }

        ComboBox.prototype.expand = new Event('expand');
        ComboBox.prototype.collapse = new Event('collapse');

        function dispatchSelectionChangedEvent(previousSelected, clickedElement) {

            var selectionDetails = {
                previousSelected: previousSelected.html(),
                selected: clickedElement.html(),
            }
            ComboBox.prototype.selectionChanged = new CustomEvent('selectionChanged', {
                'detail': selectionDetails
            });
        }

        ComboBox.prototype.init = function() {

            var self = this;

            //register for events
            //document.getElementsByClassName('list-group')[0].addEventListener('expand',)

            $('.list-group-item').addClass('hidden');

            $('.list-group-item:first').addClass('selected').removeClass('hidden');

            $('.list-group-item').bind('click', function(event) {

                event.preventDefault();

<<<<<<< HEAD
                if ($(this).hasClass('selected')) {
                    //expand the list
                    //$(this).removeClass('selected');
=======
                if ($(this).hasClass('selected') && !self.isExpanded) {
                    //expand the list
                    //$(this).removeClass('selected');
                    self.isExpanded = true;
>>>>>>> 7f5b9e1c5c229cb4a097f423c07a5ac8e6b35e2e
                    $('.list-group-item').removeClass('hidden').addClass('visible');

                    document.dispatchEvent(self.expand);
                }
                //the element is visible but not selected
<<<<<<< HEAD
                else if ($(this).hasClass('visible') && !($(this).hasClass('selected'))) {
                    //select the element
                    var previousSelected = $('.selected:first').removeClass('selected');
                    dispatchSelectionChangedEvent(previousSelected, $(this));
                    document.dispatchEvent(self.selectionChanged);

=======
                else if ($(this).hasClass('visible') && self.isExpanded) {
                    //select the element
                    var previousSelected = $('.selected:first');
                    dispatchSelectionChangedEvent(previousSelected, $(this));
                    document.dispatchEvent(self.selectionChanged);

                    previousSelected.removeClass('selected');

>>>>>>> 7f5b9e1c5c229cb4a097f423c07a5ac8e6b35e2e
                    $(this).addClass('selected')
                        .removeClass('visible');

                    //collapse the list
<<<<<<< HEAD
=======
                    self.isExpanded = false;

>>>>>>> 7f5b9e1c5c229cb4a097f423c07a5ac8e6b35e2e
                    $('.visible').toggleClass('hidden');
                    document.dispatchEvent(self.collapse);

                } else {
                    return;
                }
            })
        }

        return {
            ComboBox: ComboBoxFactory
        }
    });