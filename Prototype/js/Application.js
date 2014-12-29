if (window.com === undefined) com = {};
if (com.accusoft === undefined) com.accusoft = {};

var users = [
{
    "firstName": "Alexander",
    "lastName": "Ivamov",
    "age": 52,
    "address": {
        "streetAddress": "Main Street",
        "city": "New York",
        "state": "NY",
        "postalCode": "10001"
    },
    "contact":
	[
		{
		    "type": "phone",
		    "data": "+380930245423"
		},
		{
		    "type": "email",
		    "data": "Alexander.Ivamov@accusoft.com"
		}
	]
},
{
    "firstName": "Alexander",
    "lastName": "Stefanovich",
    "age": 30,
    "address": {
        "streetAddress": "Stachek",
        "city": "St.Petersburg",
        "state": "NY",
        "postalCode": "12999"
    },
    "contact":
	[
		{
		    "type": "phone",
		    "data": "+78121234567"
		},
		{
		    "type": "email",
		    "data": "stefan@accusoft.com"
		}
	]
},
{
    "firstName": "Larisa",
    "lastName": "Zhmak",
    "age": 24,
    "address": {
        "streetAddress": "Vulitsa",
        "city": "Kherson",
        "state": "NY",
        "postalCode": "05643"
    },
    "contact":
	[
		{
		    "type": "phone",
		    "data": "+380930245423"
		},
		{
		    "type": "email",
		    "data": "larisa@accusoft.com"
		}
	]
},
{
    "firstName": "Oleg",
    "lastName": "Ivamov",
    "age": 24,
    "address": {
        "streetAddress": "via Vanoni",
        "city": "Lugano",
        "state": "NY",
        "postalCode": "12345"
    },
    "contact":
	[
		{
		    "type": "phone",
		    "data": "+380930245444"
		},
		{
		    "type": "email",
		    "data": "olex@accusoft.com"
		}
	]
},
{
    "firstName": "Stanislav",
    "lastName": "Lipchansky",
    "age": 50,
    "address": {
        "streetAddress": "Universitetskaya ul.",
        "city": "Donetsk",
        "state": "NY",
        "postalCode": "12345"
    },
    "contact":
	[
		{
		    "type": "phone",
		    "data": "+380930245111"
		},
		{
		    "type": "email",
		    "data": "stas@accusoft.com"
		}
	]
},
{
    "firstName": "Sergey",
    "lastName": "Karamushkin",
    "age": 25,
    "address": {
        "streetAddress": "Tverskaya ul.",
        "city": "Moscow",
        "state": "NY",
        "postalCode": "55555"
    },
    "contact":
	[
		{
		    "type": "phone",
		    "data": "+74956784536"
		},
		{
		    "type": "email",
		    "data": "serg@accusoft.com"
		}
	]
},
{
    "firstName": "Alena",
    "lastName": "Serpetskay",
    "age": 25,
    "address": {
        "streetAddress": "Lenina ul.",
        "city": "Zaporozhye",
        "state": "NY",
        "postalCode": "33333"
    },
    "contact":
	[
		{
		    "type": "phone",
		    "data": "+380556743747"
		},
		{
		    "type": "email",
		    "data": "alena@accusoft.com"
		}
	]
},
{
    "firstName": "Federico",
    "lastName": "Cesconi",
    "age": 45,
    "address": {
        "streetAddress": "Ubanhof",
        "city": "Zurich",
        "state": "NY",
        "postalCode": "333333"
    },
    "contact":
	[
		{
		    "type": "phone",
		    "data": "+41664567474"
		},
		{
		    "type": "email",
		    "data": "fedec@accusoft.com"
		}
	]
},
{
    "firstName": "Jukka",
    "lastName": "Henkaho",
    "age": 40,
    "address": {
        "streetAddress": "Aleksandrinkatu",
        "city": "Helskinki",
        "state": "NY",
        "postalCode": "34343"
    },
    "contact":
	[
		{
		    "type": "phone",
		    "data": "+38554563958"
		},
		{
		    "type": "email",
		    "data": "juk@accusoft.com"
		}
	]
}
,
{
    "firstName": "Mariella",
    "lastName": "Borghi",
    "age": 40,
    "address": {
        "streetAddress": "via Garibaldi",
        "city": "Milan",
        "state": "NY",
        "postalCode": "333343"
    },
    "contact":
	[
		{
		    "type": "phone",
		    "data": "+37554563958"
		},
		{
		    "type": "email",
		    "data": "borg@accusoft.com"
		}
	]
}
]
com.accusoft.application = function () {
    
    var UPDATE_TIME = 1000;
    
    /*var url = document.URL;
    url = url.split('/');
    url[url.length-1] = 'base.json';
    url = url.join('/');*/

    var current;

    var container = $('<div class="container"/>');
    container.appendTo($('body').empty());

    $('<div class="title">Users list</div>').appendTo(container)

    var userGrid = com.accusoft.userGrid();
    userGrid.select(function(param){
            
            param ?
                selectUser.html('<i class="icon-check icon-white"></i>\
			        Unselect all') :
                selectUser.html('<i class="icon-check icon-white"></i>\
                    Select all');
        });

    var buttons = $('<div class="buttons">\
		    <a href="#" class="btn btn-success btn-small">\
			    <i class="icon-user icon-white"></i>\
			        Create new\
		    </a>\
		    <a href="#" class="btn btn-primary btn-small">\
			    <i class="icon-check icon-white"></i>\
			    Select all\
		    </a>\
		    <a href="#" class="btn btn-danger btn-small">\
			    <i class="icon-trash icon-white"></i>\
			    Delete\
		    </a>\
	    </div>').appendTo(container);

    var newUser = buttons.find('a').eq(0).click(function(e){
                
            e.preventDefault();
            buttons.hide();
            createNew();
        });
    var selectUser = buttons.find('a').eq(1).click(function(e){
                
            e.preventDefault();
            userGrid.selectButtonClick();
        });

    var deleteUser = buttons.find('a').eq(2).click(function(e){
                
            e.preventDefault();
            userGrid.deleteUsers();
        });

    userGrid.setValue(users);
	userGrid.getControl().insertBefore(buttons);

    function createNew() { 
            
            var userEdit = com.accusoft.userEdit();
            userEdit.getControl().insertAfter(buttons);
            userEdit.cancel(function(){ 
                
                userEdit.getControl().remove();
                buttons.show();
            });
            userEdit.save(function(data){ 
                
                userGrid.addUser(data); 
                userEdit.getControl().remove();
                buttons.show();
            });
    }

    
};

com.accusoft.userGrid = function () {
    
    var select = $.noop;
    var root = $('<table class="table table-bordered" cellspacing="0" cellpadding="0" border="0"/>');

    function setValue(data) {

        root.empty().append('<tr><th colspan="2">Name</th><th>Age</th><th>Address</th><th>Contact</th></tr>');
        $.Enumerable.From(data).ForEach(function (i) { addUser(i); });
    };

    function deleteUser(){
        
        var all = root.find('.check.on');

        if (all.length == 0) return;

        var confirm = com.accusoft.confirm();
        all.length == 1 && confirm.setValue(all.parents('tr:first').data('user'));
        confirm.init();
        confirm.ok( function(){all.toEnumerable().ForEach(function(i){  i.parents('tr:first').remove();});});
    }

    function addUser(i){
        
        var tr = $('<tr/>')
                .click(function(){
                    
                    tr.find('.check').toggleClass('on off');
                    select(root.find('.check.on').length > 0);
                })
                .data('user',i)
                .append($('<td/>').append('<span class="check off"/>'))
                .append($('<td/>').append('<label/>').text(i.firstName + ' ' + i.lastName))
                .append($('<td/>').text(i.age))
                .append($('<td/>')
                    .append(i.address.streetAddress)
                    .append('<br/>')
                    .append(i.address.postalCode + ' ' + i.address.city)
                )
                .append($('<td class="c5"/>')
                    .append('Phone: ' + $.Enumerable.From(i.contact).First(function (c) { return c.type == 'phone' }).data)
                    .append('<br/>')
                    .append('Email: ')
                    .append($('<a/>')
                        .text($.Enumerable.From(i.contact).First(function (c) { return c.type == 'email' }).data)
                        .attr('href', $.Enumerable.From(i.contact).First(function (c) { return c.type == 'email' }).data)
                    )
                )
                .appendTo(root);
    }

    return {
        setValue: setValue,
        getControl: function () { return root; },
        select: function(fn) { if ($.isFunction(fn)) select = fn },
        deleteUsers: deleteUser,
        addUser: addUser,
        selectButtonClick: function(){
            
            var all = root.find('.check.on');
            all.length > 0 ? all.removeClass('on').addClass('off') : root.find('.check').removeClass('off').addClass('on');
            select(root.find('.check.on').length > 0);
        }
    };
}

com.accusoft.userEdit = function () {

    var save = $.noop;
    var cancel = $.noop;

    var root = $('<form class="form-horizontal well"/>');

    var row1 = $('<div class="row">').appendTo(root);
    var firstName = $('<div class="span4"><div class="control-group"><label class="control-label" for="first">First name:</label><div class="controls"><input id="first" class="input-xlarge span2" type="text" tabindex="1"></div></div></div>')
        .appendTo(row1)
        .find(':text');
    var street = $('<div class="span4"><div class="control-group"><label class="control-label" for="street">Street:</label><div class="controls"><input id="street" class="input-xlarge span2" type="text" tabindex="4"></div></div></div>')
        .appendTo(row1)
        .find(':text');

    var row2 = $('<div class="row">').appendTo(root);
    var lastName = $('<div class="span4"><div class="control-group"><label class="control-label" for="last">Last name:</label><div class="controls"><input id="last" class="input-xlarge span2" type="text" tabindex="2"></div></div></div>')
        .appendTo(row2)
        .find(':text');
    var zip = $('<div class="span4"><div class="control-group"><label class="control-label" for="first">ZIP code:</label><div class="controls"><input id="zip" class="input-xlarge span2" type="text" tabindex="5"></div></div></div>')
        .appendTo(row2)
        .find(':text');

    var row3 = $('<div class="row">').appendTo(root);
    var age = $('<div class="span4"><div class="control-group"><label class="control-label" for="birth">Age:</label><div class="controls"><select id="birth" class="span2" tabindex="3"><option>Please select</option><option>20</option><option>21</option><option>22</option><option>23</option><option>24</option><option>25</option><option>26</option><option>27</option><option>28</option><option>29</option><option>30</option></select></div></div>')
        .appendTo(row3)
        .find('select');
    var city = $('<div class="span4"><div class="control-group"><label class="control-label" for="last">City:</label><div class="controls"><input id="city" class="input-xlarge span2" type="text" tabindex="6"></div></div></div>')
        .appendTo(row3)
        .find(':text');

    var row4 = $('<div class="row">').appendTo(root);
    var phone = $('<div class="span4"><div class="control-group"><label class="control-label" for="phone">Phone:</label><div class="controls"><input id="last" class="input-xlarge span2" type="text" tabindex="7"></div></div></div>')
        .appendTo(row4)
        .find(':text');
    var email = $('<div class="span4"><div class="control-group"><label class="control-label" for="first">Email:</label><div class="controls"><input id="email" class="input-xlarge span2" type="text" tabindex="8"></div></div></div>')
        .appendTo(row4)
        .find(':text');

    var actions = $('<div class="create">\
			<a href="#" class="btn btn-success btn-small">\
				<i class="icon-ok icon-white"></i>\
				Create new user\
			</a>\
			<a href="#" class="btn btn-small">\
				<i class="icon-remove"></i>\
				Cancel\
			</a>\
		</div>').appendTo(root);

    actions.find('a:first').click(function (e) {

            e.preventDefault();

            firstName.val() != '' &&
            street.val() != '' &&
            lastName.val() != '' &&
            zip.val() != '' &&
            age.val() != '' &&
            city.val() != '' &&
            phone.val() != '' &&
            email.val() != '' &&
            save(getValue());

        });

    actions.find('a:last').click(function(e){
            
            e.preventDefault();
            cancel();
        });

    function getValue(){
        
        return{
            firstName: firstName.val(),
            lastName: lastName.val(),
            address: {
                streetAddress:street.val(),
                city: city.val(),
                postalCode: zip.val()
            },
            age: age.val(),
            contact: [
            {
                type: 'phone',
                data: phone.val()
            },
            {
                type: 'email',
                data: email.val()
            }]
        };
    }

    return {
        getControl: function () { return root; },
        save: function(fn) { if ($.isFunction(fn)) save = fn },
        cancel: function(fn) { if ($.isFunction(fn)) cancel = fn },
    };
}

com.accusoft.confirm = function(){
    
    var ok = $.noop;
    var cancel = $.noop;
    
    var root = $('<div class="alert span5"/>');
    var caption = $('<div class="center">Are you sure you want to delete selected users ?</div>').appendTo(root);
    
    var actions = $('<div class="center m10px">\
				<a href="#" class="btn btn-success btn-small">\
					<i class="icon-ok icon-white"></i>\
					Yes\
				</a>\
				<a href="#" class="btn btn-small">\
					<i class="icon-remove"></i>\
					No\
				</a>\
			</div>').appendTo(root);
    
    actions.find('a:first').click(function(e){
                
                e.preventDefault();
                root.remove();
                popup.remove();
                ok();
            });

    actions.find('a:last').click(function(e){
                
            e.preventDefault();
            root.remove();
            popup.remove();
        });

        var popup = $('<div class="popup"/>');

        return {
            
            init: function(){ 
                
                $('body').append(popup).append(root.hide());
                root.css("position", "absolute");
                root.css("top", (($(window).height() - root.outerHeight()) / 2) + $(window).scrollTop() + "px");
                root.css("left", (($(window).width() - root.outerWidth()) / 2) + $(window).scrollLeft() + "px");
                root.show();

            },
            setValue: function(user){ caption.text('Are you sure you want to delete ' + user.firstName + ' ' + user.lastName + ' ?'); },
            ok: function(fn) { if ($.isFunction(fn)) ok = fn },
            cancel: function(fn) { if ($.isFunction(fn)) cancel = fn }
        };
}

com.accusoft.getData = function (url) {
    
    return { get: function (ready) {

            $.ajax({
                url: url,
                success: function (document, status, object) {
                    
                        ready && ready(object.responseText);
                }
            });
        }
    }
}
