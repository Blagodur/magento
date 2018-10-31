define([
    'jquery',
    'slick',
    '!domReady'
], function ($) {
    'use strict';

    $.widget('e_logic.slickSlider',{


    _create: function () {
           this.element.slick({
                arrows:false,
                slidesToShow: 5,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 4,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 370,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            });
        }

    });
    return $.e_logic.slickSlider;

});

