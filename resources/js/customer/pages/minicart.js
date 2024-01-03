$(document).ready(function() {
    $("body .support-cart").hover(
        function() {
            $("body #menu-overlay").addClass('reveal');
        },
        function() {
            $("body #menu-overlay").removeClass("reveal");
        }
    );
    $("#menu-overlay").hover(
        function() {
            $(this).removeClass('reveal');
        }
    );
});

$(".btn-minus" ).each(function(index) {
    $(this).on("click", function() {
        var qty = $(this).parent().children('#qty').val();
        if (qty > 1) {
            $(this).parent().children('#qty').val(qty - 1);
        }
        var form = $(this).parent('form');
        var url = $(this).attr('data-url');
        $.ajax({
            url: url,
            type: 'POST',
            data: form.serialize(),
            success: function(data) {
                $('.total-item-price-' + data.key).html(data.total_price_item.toLocaleString('it-IT', {style : 'currency', currency : 'VND'}));
                $('.totalPrice').html(data.totalPrice.toLocaleString('it-IT', {style : 'currency', currency : 'VND'}));
                $('.count_item_pr').html(data.totalQty);
            },
            error: function(data) {
                var errors = data.responseJSON;
                Swal.fire({
                    title: errors.error,
                    text: errors.msg,
                    type: 'error',
                })
            }
        });
    });
});

$( ".btn-plus" ).each(function(index) {
    $(this).on("click", function() {
        var qty = parseInt($(this).parent().children('#qty').val()) + 1;
        if (qty <= $(this).parent().children('#qty').attr('max')) {
            $(this).parent().children('#qty').val(qty);
        }
        var form = $(this).parent('form');
        var url = $(this).attr('data-url');
        $.ajax({
            url: url,
            type: 'POST',
            data: form.serialize(),
            success: function(data) {
                $('.total-item-price-' + data.key).html(data.total_price_item.toLocaleString('it-IT', {style : 'currency', currency : 'VND'}));
                $('.totalPrice').html(data.totalPrice.toLocaleString('it-IT', {style : 'currency', currency : 'VND'}));
                $('.count_item_pr').html(data.totalQty);
            },
            error: function(data) {
                var errors = data.responseJSON;
                Swal.fire({
                    title: errors.error,
                    text: errors.msg,
                    type: 'error',
                })
            }
        });
    });
});

$( ".remove-item-cart" ).each(function(index) {
    $(this).on("click", function() {
        var url = $(this).attr('data-url');
        var url2 = $(this).attr('data-url2');
        var form = $(this).parent('form');
        $.ajax({
            url: url,
            type: 'POST',
            data: form.serialize(),
            success: function(data) {
                $('.support-cart').remove();
                $('.cart').load(url2);
                Swal.fire({
                    title: data.success,
                    text: data.msg,
                    type: 'success',
                })
            },
            error: function(data) {
                var errors = data.responseJSON;
                Swal.fire({
                    title: errors.error,
                    text: errors.msg,
                    type: 'error',
                })
            }
        });
    });
});
