const listNews = [
    {
        img:"news-3.webp",
        title:"Nắm trong tay cách di chuyển từ sân bay Narita và trung tâm thủ đô Tokyo như người bản xứ",
        subTitle: "Hệ thống giao thông tại Nhật Bản phát triển rất đa dạng và khá phức tạp. Với những người lần đầu đến xứ sở mặt trời mọc cũng sẽ gặp nh..."
    },
    {
        img:"news-4.webp",
        title:"Trekking săn mây và 4 trải nghiệm hấp dẫn chỉ có ở Philippines",
        subTitle: " Phiêu lưu vào hang động Sumaguing: Nếu bạn từng muốn cùng Nicolas Cage truy tìm “Kho báu Quốc gia”, cuộc phiêu lưu vào hang động S... "
    },
    {
        img:"news-5.webp",
        title:"Top 15 món ngon Phú Quốc bạn nhất định phải thử",
        subTitle: " Ghẹ Hàm Ninh Du lịch Phú Quốc bạn không thể bỏ qua món ghẹ Hàm Ninh tươi ngon. Ghẹ Hàm Ninh khá nhỏ nhưng thịt chắc, ăn rất thơm, vị... "
    },
    {
        img:"news-6.jpg",
        title:"Khám phá Bình Biên – Cổ trấn bình yên ở Trung Quốc",
        subTitle: " Bình Biên là một huyện dân tộc tự trị người Miêu, cách Hà Khẩu khoảng 100km thuộc Châu Hồng Hà, huyện Vân Nam, Trung Quốc. Đến đây ngo... "
    },
    {
        img:"news-7.jpg",
        title:"Vẻ đẹp nơi đồng quê làm bối cảnh phim ‘Mắt biếc’",
        subTitle: " Những sào mía xanh tươi đang vào vụ xen lẫn là những thửa đã thu hoạch ở làng Hà Cảng, xã Quảng Phú, huyện Quảng Điền. Đây là vựa mí... "
    },
    {
        img:"news-8.jpg",
        title:"Băng qua ngọn núi lửa thiêng ở Nhật Bản vào mùa thu",
        subTitle: " Đoạn đường Hakusan Shirakawa-go chạy qua núi Hakusan, nối liền thành phố Hakusan và làng cổ Shirakawa (tỉnh Gifu). Đây là cung đườ... "
    },
    {
        img:"news-9.jpg",
        title:"6 hành trình đường sắt vĩ đại nhất thế giới",
        subTitle: " Từ Australia đến Mỹ, 6 hành trình đường sắt vĩ đại nhất thế giới đã được giới thiệu trong cuốn sách “Slow Trains To Venice”. 6 hàn... "
    },
    {
        img:"news-10.jpg",
        title:"Nhà thờ Ka Đơn – linh hồn Churu giữa rừng Lâm Viên",
        subTitle: " Mọi kế cấu bên trong của nhà thờ – từ trần nhà, tường, vách ngăn, bàn ghế – đều bằng gỗ thông, nguồn nguyên liệu sẵn có từ địa phươn... "
    },
    {
        img:"news-11.jpg",
        title:"Bụi kim cương huyền ảo ở nơi lạnh nhất Nhật Bản",
        subTitle: " Tới du lịch Hokkaido (Nhật Bản) mùa tuyết, du khách nào cũng ao ước được chiêm ngưỡng khung cảnh trắng tinh khôi cùng những bông t... "
    },
]
function init4(list) {
    let str = "";
    list.forEach((item) => {
      str += `
        <div class="card-description3 list-new">
            <div class="temp-imgae" title="${item.title}">
                <a href="#">
                    <img src="image/${item.img}" alt="${item.title}">
                </a>
            </div>
            <h3>
                <a href="#" title="${item.title}">${item.title}</a>
            </h3>
            <p>${item.subTitle}</p>
        </div>
        `;
    });
    return str
}

const listNewsElement = document.getElementById("list-new");
listNewsElement.innerHTML = init4(listNews);

$(".svg-menu-1").click(function() {
    $(this).toggleClass("rotate-nav")
    $(".nav-menul2").toggleClass("show-nav");
});

$(".svg-menu-2").click(function() {
    $(this).toggleClass("rotate-nav")
    $(this).parents(".nav-menul2 li").find(".nav-menul3").toggleClass("show-nav");
});

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