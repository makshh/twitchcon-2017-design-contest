// Vanilla JS version (4986 bytes minified), jQuery version - see below

(function() {

  'use strict';

  // Page loader

  window.addEventListener('load', function() {

    var loader = document.getElementsByClassName('loader-wrapper')[0],
      loaderCircle = document.getElementsByClassName('loader')[0];

    setTimeout(function() {

      if (loader.classList) {
        loader.classList.add('active');
      } else {
        loader.className += ' ' + 'active';
      }

      loaderCircle.style.opacity = 0;
      loaderCircle.style.visibility = 'hidden';

      if (window.outerWidth >= 992) {
        loader.style.webkitTransform = 'translateX(350px)';
        loader.style.transform = 'translateX(350px)';
      } else {
        loader.style.webkitTransform = 'translateY(100%)';
        loader.style.transform = 'translateY(100%)';
      }
    }, 500);

    setTimeout(function() {
      if (window.outerWidth >= 992) {
        loader.style.webkitTransform = 'translateX(350px) translateY(100%)';
        loader.style.transform = 'translateX(350px) translateY(100%)';
      }
    }, 1200);

    setTimeout(function() {
      loader.style.opacity = 0;
      loader.style.visibility = 'hidden';
    }, 1700);

  });

  // On DOM ready

  document.addEventListener('DOMContentLoaded', function() {

    // Variables

    var body = document.getElementsByTagName('body')[0],
      sidebar = body.getElementsByClassName('sidebar')[0],
      sidebarToggle = body.getElementsByClassName('sidebar-toggle')[0],
      menu = sidebar.getElementsByTagName('ul')[0],
      menuElements = menu.getElementsByTagName('li'),
      menuElementLine = menu.getElementsByClassName('sidebar-link-line')[0],
      menuActiveElement = menu.getElementsByClassName('active')[0],
      socialButtons = body.querySelectorAll('.social > a'),
      form = body.getElementsByTagName('form')[0],
      input = form.querySelectorAll('input[type="email"]')[0],
      submit = form.querySelectorAll('input[type="submit"]')[0];

    // Close sidebar on resize (if browser width > 992px)

    window.addEventListener('resize', function() {

      if (window.outerWidth > 992) {
        if (body.classList) {
          body.classList.remove('sidebar-opened');
        } else {
          body.className = body.className.replace(new RegExp('(^|\\b)' + 'sidebar-opened'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
      }

    }, false);

    // Mobile menu toggle

    sidebarToggle.addEventListener('click', function() {

      if (sidebar.classList) {
        sidebar.classList.add('active');
      } else {
        sidebar.className += ' ' + 'active';
      }

      var className = 'sidebar-opened';

      if(body.classList) {
        body.classList.toggle(className);
      } else {
        var classes = body.className.split(' ');
        var existingIndex = classes.indexOf(className);

        if (existingIndex >= 0) {
          classes.splice(existingIndex, 1);
        }
        else {
          classes.push(className);
        }
        body.className = classes.join(' ');
      }

    }, false);

    var removeActiveClassAfterTransition = function() {

      if (this.classList) {
        this.classList.remove('active');
      } else {
        this.className = this.className.replace(new RegExp('(^|\\b)' + 'active'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      }

    };

    sidebar.addEventListener('webkitTransitionEnd', removeActiveClassAfterTransition, false);
    sidebar.addEventListener('transitionEnd', removeActiveClassAfterTransition, false);

    // Close mobile menu on clicking/tapping outside

    function closeSidebarOutside() {

      if(event.target.classList.contains('sidebar-overlay')) {

        if (sidebar.classList) {
          sidebar.classList.add('active');
        } else {
          sidebar.className += ' ' + 'active';
        }

        var className = 'sidebar-opened';

        if((' ' + body.className + ' ').replace(/[\n\t]/g, ' ').indexOf(className) > -1) {
          if (body.classList) {
            body.classList.remove(className);
          } else {
            body.className = body.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
          }
        }

      }

    }

    document.addEventListener('mouseup', closeSidebarOutside, false);
    document.addEventListener('touchend', closeSidebarOutside, false);

    // Close mobile menu on ESC

    document.addEventListener('keydown', function(event) {

      event = event || window.event;
      var isEscape = false;
      if ('key' in event) {
        isEscape = (event.key === 'Escape' || event.key === 'Esc');
      } else {
        isEscape = (event.keyCode === 27);
      }
      if (isEscape) {

        if (sidebar.classList) {
          sidebar.classList.add('active');
        } else {
          sidebar.className += ' ' + 'active';
        }

        var className = 'sidebar-opened';

        if((' ' + body.className + ' ').replace(/[\n\t]/g, ' ').indexOf(className) > -1) {
          if (body.classList) {
            body.classList.remove(className);
          } else {
            body.className = body.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
          }
        }

      }

    }, false);

    // Menu link hover/focus effect

    Array.prototype.forEach.call(menuElements, function(el) {
      el.addEventListener('mouseover', function() {
        menuElementLine.style.top = this.offsetTop + 'px';
      }, false);
      el.getElementsByTagName('a')[0].addEventListener('focus', function() {
        menuElementLine.style.top = this.offsetTop + 'px';
      }, false);
      el.addEventListener('mouseout', function() {
        menuElementLine.style.top = menuActiveElement.offsetTop + 'px';
      }, false);
      el.getElementsByTagName('a')[0].addEventListener('focusout', function() {
        menuElementLine.style.top = menuActiveElement.offsetTop + 'px';
      }, false);
    });

    // Social button hover/focus effect

    Array.prototype.forEach.call(socialButtons, function(el) {

      var textWidth = el.getElementsByClassName('text')[0].offsetWidth;

      el.setAttribute('data-width', textWidth + 41);

      el.addEventListener('mouseover', function() {
        this.style.width = this.getAttribute('data-width') + 'px';
      }, false);
      el.addEventListener('focus', function() {
        this.style.width = this.getAttribute('data-width') + 'px';
      }, false);
      el.addEventListener('mouseout', function() {
        this.style.width = '';
      }, false);
      el.addEventListener('focusout', function() {
        this.style.width = '';
      }, false);
    });

    // Form

    input.addEventListener('keyup', function() {
      this.setAttribute('data-val', this.value);
    }, false);

    submit.addEventListener('click', function() {
      var invalid = document.querySelectorAll('input[type="email"]:invalid')[0];
      if(invalid) {
        invalid.style.animationName = 'shake';
        invalid.style.animationDuration = '.3s';
      } else {
        var logo = document.querySelectorAll('.logo + svg')[0];
        logo.style.animationName = 'logo';
        logo.style.animationDuration = '1.5s';
        input.style.pointerEvents = 'none';
        input.tabIndex = -1;
        submit.style.opacity = 0.5;
        submit.style.pointerEvents = 'none';
        submit.style.backgroundColor = '#6441a5';
        submit.tabIndex = -1;
        submit.value = 'Sending request...';
        submit.blur();
        setTimeout(function() {
          submit.value = 'Thanks for subscribing';
          submit.style.opacity = 1;
          form.style.cursor = 'not-allowed';
        }, 3000);
        setTimeout(function() {
          form.style.opacity = 0.5;
        }, 5000);
      }
    }, false);

    submit.addEventListener('mousedown', function() {
      if (form.classList) {
        form.classList.add('active');
      } else {
        form.className += ' ' + 'active';
      }
    }, false);

    submit.addEventListener('mouseup', function() {
      if (form.classList) {
        form.classList.remove('active');
      } else {
        form.className = form.className.replace(new RegExp('(^|\\b)' + 'active'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      }
    }, false);

    input.addEventListener('animationend', function() {
      this.style.animationName = '';
      this.style.animationDuration = '';
    }, false);

    input.addEventListener('webkitAnimationEnd', function() {
      this.style.animationName = '';
      this.style.animationDuration = '';
    }, false);

  });

}());

/* jQuery version (2498 bytes minified + ~100KB library ;))

(function($, window, document) {

  'use strict';

  // Page loader

  $(window).load(function() {

    var $loader = $('.loader-wrapper'),
      $loaderCircle = $('.loader');

    setTimeout(function() {

      $loader.addClass('active');

      $loaderCircle.css({
        opacity: 0,
        visibility: 'hidden'
      });

      if ($(window).width() >= 992) {
        $loader.css({
          webkitTransform: 'translateX(350px)',
          transform: 'translateX(350px)'
        });
      } else {
        $loader.css({
          webkitTransform: 'translateY(100%)',
          transform: 'translateY(100%)'
        });
      }

    }, 500);

    setTimeout(function() {
      if ($(window).width() >= 992) {
        $loader.css({
          webkitTransform: 'translateX(350px) translateY(100%)',
          transform: 'translateX(350px) translateY(100%)'
        });
      }
    }, 1200);

    setTimeout(function() {
      $loader.css({
        opacity: 0,
        visibility: 'hidden'
      });
    }, 1700);

  });

  // On DOM ready

  $(function() {

    // Variables

    var $body = $('body'),
      $sidebar = $body.find('.sidebar'),
      $sidebarToggle = $body.find('.sidebar-toggle'),
      $menu = $body.find('.sidebar ul'),
      $menuElements = $menu.find('li'),
      $menuElementLine = $body.find('.sidebar-link-line'),
      $menuActiveElement = $menu.find('.active'),
      $socialButtons = $body.find('.social > a'),
      $form = $body.find('form'),
      $input = $form.find('input[type="email"]'),
      $submit = $form.find('input[type="submit"]');


    // Close sidebar on resize (if browser width > 992px)

    $(window).resize(function() {

      if ($(window).width() > 992) {
        $body.removeClass('sidebar-opened');
      }

    });

    // Mobile menu toggle

    $sidebarToggle.click(function() {

      $body.toggleClass('sidebar-opened');
      $sidebar.addClass('active');

    });

    $sidebar.on('webkitTransitionEnd transitionend', function() {
      $(this).removeClass('active');
    });

    // Close mobile menu on clicking/tapping outside and on ESC

    $(document).on('mouseup touchend keyup', function(event) {

      if (event.keyCode === 27) {
        $sidebar.addClass('active');
        $body.removeClass('sidebar-opened');
      }

      if($('.sidebar-overlay').is(event.target)) {
        $sidebar.addClass('active');
        $body.removeClass('sidebar-opened');
      }

    });

    // Menu link hover/focus effect

    $menuElements.on('mouseenter focusin', function() {
      $menuElementLine.css('top', $(this).position().top);
    });
    $menuElements.on('mouseleave focusout', function() {
      $menuElementLine.css('top', $menuActiveElement.position().top);
    });

    // Social button hover/focus effect

    $socialButtons.each(function() {
      var $textWidth = $(this).find('.text').outerWidth();
      $(this).attr('data-width', $textWidth + 41);
    });

    $socialButtons.on('mouseover focusin', function() {
      $(this).css('width', $(this).attr('data-width'));
    });

    $socialButtons.on('mouseleave focusout', function() {
      $(this).css('width', '');
    });

    // Form

    $input.keyup(function() {
      $(this).attr('data-val', $(this).val());
    });

    $submit.click(function() {

      if($input.is(':invalid')) {
        $input.css({
          animationName: 'shake',
          animationDuration: '.3s'
        });
      } else {
        var $logo = $('.logo + svg');
        $logo.css({
          animationName: 'logo',
          animationDuration: '1.5s'
        });
        $input.css('pointer-events', 'none')
          .attr('tabindex', -1);
        $submit.css({
          opacity: 0.5,
          pointerEvents: 'none',
          backgroundColor: '#6441a5'
        }).attr('tabindex', -1)
          .val('Sending request...')
          .blur();
        setTimeout(function() {
          $submit.css('opacity', 1)
            .attr('tabindex', -1)
            .val('Thanks for subscribing');
          $form.css('cursor', 'not-allowed');
        }, 3000);
        setTimeout(function() {
          $form.css('opacity', '.5');
        }, 5000);
      }

    });

    $submit.mousedown(function() {
      $form.addClass('active');
    });

    $submit.mouseup(function() {
      $form.removeClass('active');
    });

    $input.on('webkitAnimationEnd animationend', function() {
      $(this).css({
        animationName: '',
        animationDuration: ''
      });
    });

  });

}(window.jQuery, window, document));

*/