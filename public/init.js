$(function() {
  // Generic selector to be used anywhere
  $(".aside-menu li a").click(function(e) {

    // Get the href dynamically
    var destination = $(this).attr('href');
    //console.log($(destination));
    // Prevent href=“#” link from changing the URL hash (optional)
    e.preventDefault();

    $(".aside-menu li").removeClass('active');
    $(this).parent().addClass('active');
    
    // Animate scroll to destination
    $('html, body').animate({
      scrollTop: $(destination).offset().top-135
    }, 'fast');
    
  });
  
  $('[data-fancybox]').fancybox({
    /* Стрелки влево и вправо */
    btnTpl: {
        arrowLeft:
        '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
        '<svg viewBox="0 0 154 109"><symbol id="Arrow" viewBox="-73.9 -55.3 135.9 85.4"><g><polygon points="-73.9,29.1 -6,-9.2 61.9,30.1 61.9,14.2 -6,-25.1 -73.9,14.2 "/></g><g><polygon points="-73.9,-1 -6,-39.3 61.9,0 61.9,-16 -6,-55.3 -73.9,-16 "/></g></symbol><use xlink:href="#Arrow" width="135.9" height="85.4" id="XMLID_1_" x="-73.9" y="-55.3" transform="matrix(1.007 0 0 -1.007 83.0005 42)" /></svg>' +
        "</button>",
        arrowRight:
        '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
        '<svg viewBox="0 0 154 109"><symbol id="Arrow" viewBox="-73.9 -55.3 135.9 85.4"><g><polygon points="-73.9,29.1 -6,-9.2 61.9,30.1 61.9,14.2 -6,-25.1 -73.9,14.2 "/></g><g><polygon points="-73.9,-1 -6,-39.3 61.9,0 61.9,-16 -6,-55.3 -73.9,-16 "/></g></symbol><use xlink:href="#Arrow" width="135.9" height="85.4" id="XMLID_1_" x="-73.9" y="-55.3" transform="matrix(1.007 0 0 -1.007 83.0005 42)" /></svg>' +
        "</button>"
    },    
    /* Руссификация */
    lang: "ru",
    i18n: {
        ru: {
            CLOSE: "Закрыть",
            NEXT: "Следующий",
            PREV: "Предыдущий",
            ERROR: "Контент не может быть загружен. <br/> Попробуйте позже.",
            PLAY_START: "Начать слайдшоу",
            PLAY_STOP: "Остановить слайдшоу",
            FULL_SCREEN: "Полный экран",
            THUMBS: "Эскизы",
            DOWNLOAD: "Скачать",
            SHARE: "Поделиться",
            ZOOM: "Увеличить"
        }
    }
    });
});

