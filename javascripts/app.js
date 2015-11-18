(function() {
  'use strict';

  var globals = typeof window === 'undefined' ? global : window;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};
  var has = ({}).hasOwnProperty;

  var aliases = {};

  var endsWith = function(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
  };

  var unalias = function(alias, loaderPath) {
    var start = 0;
    if (loaderPath) {
      if (loaderPath.indexOf('components/' === 0)) {
        start = 'components/'.length;
      }
      if (loaderPath.indexOf('/', start) > 0) {
        loaderPath = loaderPath.substring(start, loaderPath.indexOf('/', start));
      }
    }
    var result = aliases[alias + '/index.js'] || aliases[loaderPath + '/deps/' + alias + '/index.js'];
    if (result) {
      return 'components/' + result.substring(0, result.length - '.js'.length);
    }
    return alias;
  };

  var expand = (function() {
    var reg = /^\.\.?(\/|$)/;
    return function(root, name) {
      var results = [], parts, part;
      parts = (reg.test(name) ? root + '/' + name : name).split('/');
      for (var i = 0, length = parts.length; i < length; i++) {
        part = parts[i];
        if (part === '..') {
          results.pop();
        } else if (part !== '.' && part !== '') {
          results.push(part);
        }
      }
      return results.join('/');
    };
  })();
  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function(name) {
      var absolute = expand(dirname(path), name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var require = function(name, loaderPath) {
    var path = expand(name, '.');
    if (loaderPath == null) loaderPath = '/';
    path = unalias(name, loaderPath);

    if (has.call(cache, path)) return cache[path].exports;
    if (has.call(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has.call(cache, dirIndex)) return cache[dirIndex].exports;
    if (has.call(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '" from '+ '"' + loaderPath + '"');
  };

  require.alias = function(from, to) {
    aliases[to] = from;
  };

  require.register = require.define = function(bundle, fn) {
    if (typeof bundle === 'object') {
      for (var key in bundle) {
        if (has.call(bundle, key)) {
          modules[key] = bundle[key];
        }
      }
    } else {
      modules[bundle] = fn;
    }
  };

  require.list = function() {
    var result = [];
    for (var item in modules) {
      if (has.call(modules, item)) {
        result.push(item);
      }
    }
    return result;
  };

  require.brunch = true;
  globals.require = require;
})();
require.register("initialize", function(exports, require, module) {
$(document).ready(function() {
  Parse.initialize('WD4SCqCV1MsggPivlA2FvNuwHym2lIWxNhpAmQxu', 'bgN3ACqo9x6mmfPdtaKUoSvBVw5PFSeMucjiNx8H');
  $('.slider').slick({
    arrows: false,
    dots: true,
    vertical: true
  });
  $('#slick-slide01').click(function() {
    $('#head').find('.logo').removeClass('logo-green');
    $('#head').find('.logo').addClass('logo-blue');
    $('#head').find('.text-blue').addClass('move-blue');
    $('#head').find('.txt').removeClass('move');
    return $('#head').find('.text-green').removeClass('move-green');
  });
  $('#slick-slide02').click(function() {
    $('#head').find('.logo').removeClass('logo-blue');
    $('#head').find('.logo').addClass('logo-green');
    $('#head').find('.text-green').addClass('move-green');
    $('#head').find('.txt').removeClass('move');
    return $('#head').find('.text-blue').removeClass('move-blue');
  });
  $('#slick-slide00').click(function() {
    $('#head').find('.logo').removeClass('logo-green');
    $('#head').find('.logo').removeClass('logo-blue');
    $('#head').find('.txt').addClass('move');
    $('#head').find('.text-blue').removeClass('move-blue');
    return $('#head').find('.text-green').removeClass('move-green');
  });
  $('.flex-inner').find('.program').click(function() {
    $('.program').removeClass('active');
    return $(this).addClass('active');
  });
  $('#programs').find('#rule').click(function() {
    $('.grid').find('.flex-item').addClass('deactive');
    return $('.grid').find('.green').removeClass('deactive');
  });
  $('#programs').find('#finan').click(function() {
    $('.grid').find('.flex-item').addClass('deactive');
    return $('.grid').find('.blue').removeClass('deactive');
  });
  $('#programs').find('#edu').click(function() {
    $('.grid').find('.flex-item').addClass('deactive');
    return $('.grid').find('.yellow').removeClass('deactive');
  });
  inlineSVG.init();
  $('a[href*=#]').bind('click', function(e) {
    var target;
    e.preventDefault();
    target = $(this).attr("href");
    $('html,body').stop().animate({
      scrollTop: $(target).offset().top
    }, 900, function() {
      return location.hash = target;
    });
    return false;
  });
  window.initMap = function() {
    var cairo, map, marker, styles;
    cairo = {
      lat: 55.745569,
      lng: 37.662330
    };
    map = new google.maps.Map(document.getElementById('map'), {
      scaleControl: true,
      center: cairo,
      zoom: 16
    });
    marker = new google.maps.Marker({
      position: cairo,
      map: map,
      icon: 'images/map_pin.svg'
    });
    styles = [
      {
        'featureType': 'water',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#007C84'
          }
        ]
      }, {
        'featureType': 'landscape',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#0099A1'
          }
        ]
      }, {
        'featureType': 'road',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#00AAB4'
          }, {
            'lightness': -37
          }
        ]
      }, {
        'featureType': 'poi',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#007C84'
          }
        ]
      }, {
        'featureType': 'transit',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#406d80'
          }
        ]
      }, {
        'elementType': 'labels.text.stroke',
        'stylers': [
          {
            'visibility': 'on'
          }, {
            'color': '#3e606f'
          }, {
            'weight': 2
          }, {
            'gamma': 0.84
          }
        ]
      }, {
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#ffffff'
          }
        ]
      }, {
        'featureType': 'administrative',
        'elementType': 'geometry',
        'stylers': [
          {
            'weight': 0.6
          }, {
            'color': '#1a3541'
          }
        ]
      }, {
        'elementType': 'labels.icon',
        'stylers': [
          {
            'visibility': 'off'
          }
        ]
      }, {
        'featureType': 'poi.park',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#007284'
          }
        ]
      }
    ];
    return map.setOptions({
      styles: styles,
      scrollwheel: false
    });
  };
  window.sr = new scrollReveal();
  return $('.button').click(function() {
    return swal({
      title: 'Подписка на новости',
      text: 'Введите ваш e-mail:',
      type: 'input',
      showCancelButton: true,
      closeOnConfirm: false,
      animation: 'slide-from-top',
      inputPlaceholder: 'Write something'
    }, function(inputValue) {
      if (inputValue === false) {
        return false;
      }
      if (inputValue === '' || inputValue.search(/@/) === -1) {
        swal.showInputError('Введите e-mail');
        return false;
      }
      return Parse.Cloud.run('sendmail', {
        target: 'yuriyurchenko@me.com',
        originator: 'ancor-landing@gmail.com',
        subject: 'e-mail',
        text: "Email: " + inputValue
      }, {
        success: function(success) {
          return swal('Отправлено!', 'Спасибо за подписку', 'success');
        },
        error: function(error) {
          return swal("Ошибка!", "Email не отправлен!", "error");
        }
      });
    });
  });
});
});

;
//# sourceMappingURL=app.js.map