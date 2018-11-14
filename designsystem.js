(function () {

    angular
        .module('AppCentral.designsystem')
        .controller('designsystemController', DesignsystemController);

    function DesignsystemController($scope, toastr) {
		var vm = this;

		vm.open = false;

		vm.sortableOptions = {
            helper : 'clone'
        }


        vm.associate = {
    		'lead' : true,
    		'prospect' : true,
    		'started' : true,
    		'completed' : true,
    		'admitted' : true,
    		'enrolled' : true,
    		'transferred' : false,
    		'graduated' : true
        };

        vm.bachelor = {
    		'lead' : false,
    		'prospect' : false,
    		'started' : true,
    		'completed' : true,
    		'admitted' : true,
    		'enrolled' : true,
    		'transferred' : false,
    		'graduated' : true
        };

        vm.master = {
    		'lead' : false,
    		'prospect' : false,
    		'started' : true,
    		'completed' : true,
    		'admitted' : false,
    		'enrolled' : false,
    		'transferred' : false,
    		'graduated' : false
        }

        vm.professional = {
        'lead' : false,
        'prospect' : false,
        'started' : true,
        'completed' : true,
        'admitted' : false,
        'enrolled' : false,
        'transferred' : false,
        'graduated' : false
        }

        vm.doctoral = {
        'lead' : false,
        'prospect' : false,
        'started' : true,
        'completed' : true,
        'admitted' : false,
        'enrolled' : false,
        'transferred' : false,
        'graduated' : false
        }

  		vm.sortModel = [{
              'id' : 'sorttarget1',
              'header': 'Sortable Item 1',
              'content' : '<p>By adding the <code>ui.sortable</code> attribute to the <code>div.panel-group</code> element tag, it will apply the <code>ui.sortable</code> script to the accordion group. Additionally, you must add the <code>ng-model</code> directive so the accorion knows what model it is a part of. </p><pre>&lt;accordion-container ui-sortable ng-model="myModel"...&gt; </pre>'
            }, {
              'id' : 'sorttarget2',
              'header': 'Sortable Item 2',
              'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur nunc purus, eget dictum magna molestie eu. Curabitur sed est urna. Maecenas gravida, dui vitae egestas tempus, nibh massa posuere nunc, vel fermentum enim nisi eu diam. Cras et auctor odio, id rutrum lacus. Morbi cursus dolor dui, nec hendrerit nisl hendrerit id. Phasellus et erat a elit ornare vulputate. Nam commodo posuere ligula, non blandit arcu aliquet eu. Sed et ultrices lorem. Phasellus scelerisque eget lacus vel elementum. Donec at nulla suscipit neque placerat maximus. Nunc at accumsan augue. Donec sagittis vulputate lobortis. Praesent sit amet dolor rutrum dui gravida faucibus quis ut lorem. Nulla lobortis mollis felis, in suscipit sapien semper quis.'
            }, {
              'id' : 'sorttarget3',
              'header': 'Sortable Item 3',
              'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur nunc purus, eget dictum magna molestie eu. Curabitur sed est urna. Maecenas gravida, dui vitae egestas tempus, nibh massa posuere nunc, vel fermentum enim nisi eu diam. Cras et auctor odio, id rutrum lacus. Morbi cursus dolor dui, nec hendrerit nisl hendrerit id. Phasellus et erat a elit ornare vulputate. Nam commodo posuere ligula, non blandit arcu aliquet eu. Sed et ultrices lorem. Phasellus scelerisque eget lacus vel elementum. Donec at nulla suscipit neque placerat maximus. Nunc at accumsan augue. Donec sagittis vulputate lobortis. Praesent sit amet dolor rutrum dui gravida faucibus quis ut lorem. Nulla lobortis mollis felis, in suscipit sapien semper quis.'
            }];

		vm.previewModel = [{
              'id' : 'prevtarget1',
              'header': 'Preview Item 1',
              'preview' : 'This is the preview content.  <br>It will be visible when the accordion is open.<br> It will also be visible when the accordion is closed.',
              'content' : '<p>Add the <code>preview</code> attribute with the content for the preview area to the accordion container tag.</p><pre>&lt;accordion-container header="vm.header" preview="vm.preview"...&gt; </pre>'
            }, {
              'id' : 'prevtarget2',
              'header': 'Preview Item 2',
              'preview' : 'Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. ',
              'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur nunc purus, eget dictum magna molestie eu. Curabitur sed est urna. Maecenas gravida, dui vitae egestas tempus, nibh massa posuere nunc, vel fermentum enim nisi eu diam. Cras et auctor odio, id rutrum lacus. Morbi cursus dolor dui, nec hendrerit nisl hendrerit id. Phasellus et erat a elit ornare vulputate. Nam commodo posuere ligula, non blandit arcu aliquet eu. Sed et ultrices lorem. Phasellus scelerisque eget lacus vel elementum. Donec at nulla suscipit neque placerat maximus. Nunc at accumsan augue. Donec sagittis vulputate lobortis. Praesent sit amet dolor rutrum dui gravida faucibus quis ut lorem. Nulla lobortis mollis felis, in suscipit sapien semper quis.'
            }, {
              'id' : 'prevtarget3',
              'header': 'This one has no preview content',
              'preview' : null,
              'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur nunc purus, eget dictum magna molestie eu. Curabitur sed est urna. Maecenas gravida, dui vitae egestas tempus, nibh massa posuere nunc, vel fermentum enim nisi eu diam. Cras et auctor odio, id rutrum lacus. Morbi cursus dolor dui, nec hendrerit nisl hendrerit id. Phasellus et erat a elit ornare vulputate. Nam commodo posuere ligula, non blandit arcu aliquet eu. Sed et ultrices lorem. Phasellus scelerisque eget lacus vel elementum. Donec at nulla suscipit neque placerat maximus. Nunc at accumsan augue. Donec sagittis vulputate lobortis. Praesent sit amet dolor rutrum dui gravida faucibus quis ut lorem. Nulla lobortis mollis felis, in suscipit sapien semper quis.'
            }];

		vm.toastem = function(type) {
			switch(type) {
			    case "success":
			        toastr.success('Hello world!', 'Toastr fun!');
			        break;
			    case "info":
			        toastr.info('We are opened today from 10 to 22', 'Information');
			        break;
		        case "error":
			        toastr.error('Your credentials are gone', 'Error');
			        break;
			    case "warning":
			        toastr.warning('Your computer is about to explode!', 'Warning');
			        break;
			    default:
			        toastr.error('The error toaster ', 'Uh Oh :-(');
			}

		}

		vm.openSection = function(section, tab) {
			$('a[data-target="' + tab).tab('show');
			$(document).scrollTop( $(section).offset().top - 30);
		}

		vm.openModal = function() {
			console.log("You opened the modal.")
		}
		vm.actionFunction = function() {
			console.log("You clicked the action button.")
		}
		vm.cancelFunction = function() {
			console.log("You clicked the cancel button.")
		}

		console.log(vm.associate)

    }
})();
