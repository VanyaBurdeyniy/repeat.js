(function($) {

    var ul, li;

    /*
    * Init repeat function
    * */
    $.fn.repeat = function(object) {
        $(this).each(function() {
            var $el = this;  // current plugin element

            if (object instanceof Array) {
                listItemsInArray(object, $el);
            } else {
                listItemsInObject(object, $el);
            }
        });
        return this;
    };


    /*
    * List items if return Array
    * */
    function listItemsInArray(array, el) {

        $(el).find('.repeat-block').remove();  // clear list
        ul = document.createElement('ul');
        ul.className = 'repeat-block';

        array.forEach(function(obj) {
            for (var item in obj) {
                li = document.createElement('li');
                li.className = 'repeat-item';

                $(li).append(obj[item]);
                $(ul).append(li);
                $(el).append(ul);
            }
        });
    }

    /*
     * List items if return Object
     * */
    function listItemsInObject(object, el) {

        $(el).find('.repeat-block').remove();  // clear list
        ul = document.createElement('ul');
        ul.className = 'repeat-block';

        for (var obj in object) {
            li = document.createElement('li');
            li.className = 'repeat-item';

            $(li).append(object[obj]);
            $(ul).append(li);
            $(el).append(ul);
        }
    }

})(jQuery);