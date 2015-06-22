/**
 * 読み込み完了
 */
$(document).ready(function () {
    reloadMessages();
});

/**
 * 投稿
 */
$(".post-message").bind("click", function() {
    $("#myModal").modal("hide");
    var username = $(".message-username").val();
    var body = $(".message-body").val();
    sendMessage(username, body);
});

/**
 * 削除
 */
$(".delete-message").on("click", function() {
    //var id = $(this).val();
    //removeMessage(id);
    console.log("error");
});

/**
 * 画像選択
 */
$("#image-form").change(function () {
    if (!this.files.length) {
        return;
    }

    var file = this.files[0];
    var fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = function() {
        var image = new Image();
        image.src = this.result;
        insertImage(image);
    }
});

/**
 * 画像挿入
 */
function insertImage(image) {
    $(".image-result").html('<img src="' + image.src + '" width="60">');
}
