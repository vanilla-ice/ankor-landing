$(window).load ->
  $('.preloader').removeClass('hide')
  $('.slider').slick(
    arrows: false
    pauseOnHover: false
    initialSlide: 2
    autoplay: true
    vertical: true
    speed: 1000
    )
$(document).ready ->
  $('#head').find('.logo').removeClass('logo-green')
  $('#head').find('.logo').addClass('logo-blue')
  $('#head').find('.text-blue').addClass('move-blue')
  $('#head').find('.txt').removeClass('move')
  $('#head').find('.text-green').removeClass('move-green')
  Parse.initialize('WD4SCqCV1MsggPivlA2FvNuwHym2lIWxNhpAmQxu','bgN3ACqo9x6mmfPdtaKUoSvBVw5PFSeMucjiNx8H')
  $('.slider-two').slick(
    itinitalSlide: 0
    )
  
  $('.slider').on 'beforeChange', (event, slick, direction) ->
    if direction is 0
      $('#head').find('.logo').removeClass('logo-green')
      $('#head').find('.logo').addClass('logo-blue')
      $('#head').find('.text-blue').addClass('move-blue')
      $('#head').find('.txt').removeClass('move')
      $('#head').find('.text-green').removeClass('move-green')

    else if direction is 1
      $('#head').find('.logo').removeClass('logo-blue')
      $('#head').find('.logo').addClass('logo-green')
      $('#head').find('.text-green').addClass('move-green')
      $('#head').find('.txt').removeClass('move')
      $('#head').find('.text-blue').removeClass('move-blue')
    else if direction is 2
      $('#head').find('.logo').removeClass('logo-green')
      $('#head').find('.logo').removeClass('logo-blue')
      $('#head').find('.txt').addClass('move')
      $('#head').find('.text-blue').removeClass('move-blue')
      $('#head').find('.text-green').removeClass('move-green')
  
  $('.flex-inner').find('.program').click ->
    $('.program').removeClass('active')
    $(this).addClass('active')
  $('#programs').find('#rule').click ->
    $('.grid').find('.flex-item').addClass('deactive')
    $('.grid').find('.green').removeClass('deactive')
  $('#programs').find('#finan').click ->
    $('.grid').find('.flex-item').addClass('deactive')
    $('.grid').find('.blue').removeClass('deactive')
  $('#programs').find('#edu').click ->
    $('.grid').find('.flex-item').addClass('deactive')
    $('.grid').find('.yellow').removeClass('deactive')
    
  inlineSVG.init()

  
  
  window.initMap = ->
    cairo = 
      lat: 55.745569
      lng: 37.662330
    map = new (google.maps.Map)(document.getElementById('map'),
      scaleControl: true
      center: cairo
      zoom: 16

      )
    marker = new (google.maps.Marker)(
      position: cairo
      map: map
      icon: 'images/map_pin.svg')
    
    styles = 
      [
        {
          'featureType': 'water'
          'elementType': 'geometry'
          'stylers': [ { 'color': '#017DC5' } ]
        }
        {
          'featureType': 'landscape'
          'elementType': 'geometry'
          'stylers': [ { 'color': '#015C99' } ]
        }
        {
          'featureType': 'road'
          'elementType': 'geometry'
          'stylers': [
            { 'color': '#017DC5' }
            { 'lightness': -37 }
          ]
        }
        {
          'featureType': 'poi'
          'elementType': 'geometry'
          'stylers': [ { 'color': '#017DC5' } ]
        }
        {
          'featureType': 'transit'
          'elementType': 'geometry'
          'stylers': [ { 'color': '#406d80' } ]
        }
        {
          'elementType': 'labels.text.stroke'
          'stylers': [
            { 'visibility': 'on' }
            { 'color': '#3e606f' }
            { 'weight': 2 }
            { 'gamma': 0.84 }
          ]
        }
        {
          'elementType': 'labels.text.fill'
          'stylers': [ { 'color': '#ffffff' } ]
        }
        {
          'featureType': 'administrative'
          'elementType': 'geometry'
          'stylers': [
            { 'weight': 0.6 }
            { 'color': '#1a3541' }
          ]
        }
        {
          'elementType': 'labels.icon'
          'stylers': [ { 'visibility': 'off' } ]
        }
        {
          'featureType': 'poi.park'
          'elementType': 'geometry'
          'stylers': [ { 'color': '#017DC5' } ]
        }
      ]
    map.setOptions(
      styles: styles 
      scrollwheel: false)




  
  $('.button').click ->

    swal {
      title: 'Подписка на новости'
      text: 'Введите ваш e-mail:'
      type: 'input'
      showCancelButton: true
      closeOnConfirm: false
      animation: 'slide-from-top'
      inputPlaceholder: 'ваша@почта.ру'
    }, (inputValue) ->
      if inputValue == false
        return false
      if inputValue == '' or inputValue.search(/@/) is -1
        swal.showInputError 'Введите e-mail'
        return false
      Parse.Cloud.run 'sendmail',{
        target: 'yuriyurchenko@me.com'
        originator: 'ancor-landing@gmail.com'
        subject: 'e-mail'
        text: "Email: #{inputValue}"},
        success: (success) -> 
          swal 'Отправлено!', 'Спасибо за подписку' , 'success'
        error: (error) ->
          swal "Ошибка!", "Email не отправлен!", "error"
    $('.cancel').empty().append('Отмена')
  $('.button-prog').click ->

    swal {
      title: 'Подписка на новости'
      text: 'Введите ваш e-mail:'
      type: 'input'
      showCancelButton: true
      closeOnConfirm: false
      animation: 'slide-from-top'
      inputPlaceholder: 'ваша@почта.ру'
    }, (inputValue) ->
      if inputValue == false
        return false
      if inputValue == '' or inputValue.search(/@/) is -1
        swal.showInputError 'Введите e-mail'
        return false
      Parse.Cloud.run 'sendmail',{
        target: 'yuriyurchenko@me.com'
        originator: 'ancor-landing@gmail.com'
        subject: 'e-mail'
        text: "Email: #{inputValue}"},
        success: (success) -> 
          swal 'Отправлено!', 'Спасибо за подписку' , 'success'
        error: (error) ->
          swal "Ошибка!", "Email не отправлен!", "error"
    $('.cancel').empty().append('Отмена')
  options = 
    offset: 700
  header = new Headhesive('.header', options)

  $('a[href*=#]').bind('click',  (e) ->
    e.preventDefault()
    target = $(this).attr("href")
    $('html,body').stop().animate(
      scrollTop: $(target).offset().top, 900, ->
        location.hash=target     
      )
    false
    )