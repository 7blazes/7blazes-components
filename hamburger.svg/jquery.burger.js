;(function ( $, window, document, undefined ) {
  'use strict';

  // Create the defaults once
  var pluginName = 'hamburger',
  defaults = {
    propertyName: 'selector'
  };

  // The actual plugin constructor
  function Plugin ( element, options ) {
    this.element = element;
    this.$e = $(element);
    this.isClosed = false;

    this.options = $.extend( {}, defaults, options );
    this._defaults = defaults;
    this._name = pluginName;
    this.init();
  }

  Plugin.prototype = {
    init: function(){

      var thiz = this;
      this.$e.click(function(){
        thiz.burgerTime();
      });
    },
    burgerTime: function () {
      if (this.isClosed === true) {
        this.$e.removeClass('is-open');
        this.$e.addClass('is-closed');
        this.isClosed = false;
      } else {
        this.$e.removeClass('is-closed');
        this.$e.addClass('is-open');
        this.isClosed = true;
      }
    }
  };

  // A really lightweight plugin wrapper around the constructor,
  // preventing against multiple instantiations
  $.fn[ pluginName ] = function ( options ) {
    return this.each(function() {
      if ( !$.data( this, 'plugin_' + pluginName ) ) {
        $.data( this, 'plugin_' + pluginName, new Plugin( this, options ) );
      }
    });
  };

})( jQuery, window, document );
