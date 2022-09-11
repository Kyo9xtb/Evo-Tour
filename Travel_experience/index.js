const listFavoritePosts = [
    {
        img: "news-1.webp",
        title: "Cẩm nang du lịch Đà Nẵng một ngày cho hội bạn vui chơi “sập” Đà thành"
    },
    {
        img: "news-2.webp",
        title: "Bí quyết du lịch Đà Lạt tự túc giá rẻ để xách túi và đi ngay không cần suy nghĩ"
    },
    {
        img: "favorite-posts-3.webp",
        title: "Vui chơi thả ga cùng bạn bè tại Phan Thiết với cẩm nang du lịch chi tiết này"
    },
    {
        img: "favorite-posts-4.webp",
        title: "Bỏ túi ngay 8 ứng dụng du lịch không thể thiếu này nếu bạn là kẻ hay “xê dịch”"
    },
    {
        img: "favorite-posts-5.webp",
        title: "Vạn vật phía Bắc sắp bừng tỉnh trong xuân mới, đi đâu để “mở hàng” năm mới thật may mắn đây?"
    },
]

function init5(list) {
    let str = "";
    list.forEach((item) => {
      str += `
        <div class="card-item" title="${item.title}">
            <div>
                <a class="thumb" href="#">
                    <img src="image/${item.img}" alt="">
                </a>
            </div>
            <h4 class="title-favorite-posts">
                <a href="#" title="${item.title}">${item.title}</a>
            </h4>
        </div>
        `;
    });
    return str
}

const listFavoritePostsElement = document.getElementById("list-favorite-posts");
listFavoritePostsElement.innerHTML = init5(listFavoritePosts);

$(".svg-menu-1").click(function() {
    $(this).toggleClass("rotate-nav")
    $(".nav-menul2").toggleClass("show-nav");
});

$(".svg-menu-2").click(function() {
    $(this).toggleClass("rotate-nav")
    $(this).parents(".nav-menul2 li").find(".nav-menul3").toggleClass("show-nav");
});

$(".btn").click(function() {
    $(".notification").toggleClass("btn-close")
});