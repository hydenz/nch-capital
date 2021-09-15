$(document).ready(function () {
  function onChanged(ev) {
    switch (ev.item.index) {
      case 0:
        $('.arrow-previous').addClass('arrow-hidden');
        break;
      case 4:
        $('.arrow-next').addClass('arrow-hidden');
        break;
      default:
        Array.from($('.arrow-btn')).forEach((btn) =>
          $(btn).removeClass('arrow-hidden')
        );
    }
  }

  const owl = $('.owl-carousel').owlCarousel({
    items: 1,
    mouseDrag: false,
    onChanged,
  });

  $('.arrow-previous').click(function () {
    owl.trigger('prev.owl.carousel');
  });

  $('.arrow-next').click(function () {
    owl.trigger('next.owl.carousel');
  });
});
