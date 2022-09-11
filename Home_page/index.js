const listLastMinuteTour = [
    {
        img:"last-minute-tour-1.webp",
        title:"Du lịch Ý [Rome - Pisa - Florence - Venice - Milan]",
        vehicles: [
            {
                titleImg: "Di chuyển bằng Ô tô",
                imgVehicle: "coach.svg"
            },
            {
                titleImg: "Di chuyển bằng máy bay",
                imgVehicle: "plane.svg"
            },
        ],
        imgDS: "tag_icon_4.svg",
        departureSchedule: "Thứ 2 hằng tuần",
        imgTime: "tag_icon_5.svg",
        time: "6 ngày 5 đêm",
        price: 46900000,
        promotionalPrice: 46900000,
    },
    {
        img:"last-minute-tour-2.webp",
        title:"Du lịch Nam Phi [Johannesburg - Pretoria - Soweto - Cape Town]",
        vehicles: [
            {
                titleImg: "Di chuyển bằng Ô tô",
                imgVehicle: "coach.svg"
            },
            {
                titleImg: "Di chuyển bằng máy bay",
                imgVehicle: "plane.svg"
            },
        ],
        imgDS: "tag_icon_4.svg",
        departureSchedule: "Thứ 7 hằng tuần",
        imgTime: "tag_icon_5.svg",
        time: "5 ngày 4 đêm",
        price: 75000000,
        promotionalPrice: 61990000,
    },
    {
        img:"last-minute-tour-3.webp",
        title:"Du lịch Huế - Hồ Truồi - Đà Nẵng - Suối Khoáng Nóng Núi Thần Tài - KDL Bà Nà",
        vehicles: [
            {
                titleImg: "Di chuyển bằng Ô tô",
                imgVehicle: "coach.svg"
            },
            {
                titleImg: "Di chuyển bằng máy bay",
                imgVehicle: "plane.svg"
            },
        ],
        imgDS: "tag_icon_4.svg",
        departureSchedule: "Thứ 7 hằng tuần",
        imgTime: "tag_icon_5.svg",
        time: "4 ngày 3 đêm",
        price: 6200000,
        promotionalPrice: 5900000,
    },
    {
        img:"last-minute-tour-4.webp",
        title:"Du lịch Đà Nẵng - KDL Bà Nà - Hội An - Cố Đô Huế",
        vehicles: [
            {
                titleImg: "Di chuyển bằng Ô tô",
                imgVehicle: "coach.svg"
            },
            {
                titleImg: "Di chuyển bằng máy bay",
                imgVehicle: "plane.svg"
            },
        ],
        imgDS: "tag_icon_4.svg",
        departureSchedule: "Thứ 7 hằng tuần",
        imgTime: "tag_icon_5.svg",
        time: "3 ngày 2 đêm",
        price: 6500000,
        promotionalPrice: 6300000,
    },
]

const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});

function renderVehicle(vehicles) {
    let str = "";
    vehicles.forEach((item) => {
      str += `
        <li title="${item.titleImg}">
            <img src="image/${item.imgVehicle}" alt="${item.titleImg}">
        </li>
        `;
    });
    return str;
}

function init2(list) {
    let str = "";
    list.forEach((item) => {
      str += `
      <div class="card-description4">
      <div class="last-minute-tour-item">
          <div class="img-tour">
              <a href="#">
                  <img src="image/${item.img}" alt="">
              </a>
          </div>
          <div class="info-tour">
              <h3>
                  <a href="#" title="${item.title}">${item.title}</a>
              </h3>
              <div class="vote-box">
                  <ul class="vehicle">
                      ${renderVehicle(item.vehicles)}
                  </ul>
                  <div class="saleoff">
                        ${formatter.format(item.price)}
                  </div>
              </div>
              <ul class="date-go">
                  <li>
                      <img src="image/${item.imgDS}" alt="">
                      Lịch khởi hành: <span>${item.departureSchedule}</span>
                  </li>
                  <li>
                      <img src="image/${item.imgTime}" alt="">
                      Thời gian: <span>${item.time}</span>
                  </li>
              </ul>
              <div class="action-box">
                  <div class="price-box">${formatter.format(item.promotionalPrice)}</div>
                  <a href="#">Đặt tour</a>
              </div>
          </div>
      </div>
  </div>
        `;
    });
    return str
}

const listLastMinuteTourComponentsElement = document.getElementById("list-last-minute-tour");
listLastMinuteTourComponentsElement.innerHTML = init2(listLastMinuteTour);

const listTourCountry = [
    {
        img:"tour-in-country-1.webp",
        title:"Du lịch Hà Nội - Ninh Bình - Cát Bà - Hạ Long - Hải Dương",
        vehicles: [
            {
                titleImg: "Di chuyển bằng Ô tô",
                imgVehicle: "coach.svg"
            },
        ],
        imgDS: "tag_icon_4.svg",
        departureSchedule: "Thứ 2 hằng tuần",
        imgTime: "tag_icon_5.svg",
        time: "4 ngày 3 đêm",
        price: 7500000,
        promotionalPrice: 6400000,
    },
    {
        img:"tour-in-country-2.webp",
        title:"Tour Phan Thiết Mũi Né Resort 3,4* - 3 ngày 2 đêm",
        vehicles: [
            {
                titleImg: "Di chuyển bằng Ô tô",
                imgVehicle: "coach.svg"
            },
        ],
        imgDS: "tag_icon_4.svg",
        departureSchedule: "Thứ 2 hằng tuần",
        imgTime: "tag_icon_5.svg",
        time: "3 ngày 2 đêm",
        price: 2000000,
        promotionalPrice: 2000000,
    },
    {
        img:"tour-in-country-3.webp",
        title:"Du lịch Nha Trang - Hòn Tằm - KDL Vinpearl",
        vehicles: [
            {
                titleImg: "Di chuyển bằng Ô tô",
                imgVehicle: "coach.svg"
            },
            {
                titleImg: "Di chuyển bằng tàu thủy",
                imgVehicle: "ship.svg"
            },
        ],
        imgDS: "tag_icon_4.svg",
        departureSchedule: "Thứ 2 hằng tuần",
        imgTime: "tag_icon_5.svg",
        time: "3 ngày 2 đêm",
        price: 6500000,
        promotionalPrice: 6500000,
    },
    {
        img:"tour-in-country-4.webp",
        title:"Du lịch Đà Lạt - Kdl Trang Trại Rau & Hoa - Đường Hầm Đất Sét",
        vehicles: [
            {
                titleImg: "Di chuyển bằng Ô tô",
                imgVehicle: "coach.svg"
            },
            {
                titleImg: "Di chuyển bằng máy bay",
                imgVehicle: "plane.svg"
            },
        ],
        imgDS: "tag_icon_4.svg",
        departureSchedule: "Thứ 2 hằng tuần",
        imgTime: "tag_icon_5.svg",
        time: "2 ngày 1 đêm",
        price: 5000000,
        promotionalPrice: 4000000,
    },
    {
        img:"tour-in-country-5.webp",
        title:"Du lịch Hồ Phú Ninh - Tam Thanh - Rừng Dừa Bảy Mẫu - Đà Nẵng - Hội An - Bà Nà - Huế",
        vehicles: [
            {
                titleImg: "Di chuyển bằng Ô tô",
                imgVehicle: "coach.svg"
            },
            {
                titleImg: "Di chuyển bằng máy bay",
                imgVehicle: "plane.svg"
            },
        ],
        imgDS: "tag_icon_4.svg",
        departureSchedule: "Thứ 7 hằng tuần",
        imgTime: "tag_icon_5.svg",
        time: "4 ngày 3 đêm",
        price: 6000000,
        promotionalPrice: 6000000,
    },
    {
        img:"tour-in-country-6.webp",
        title:"Du lịch Mỹ Tho - Cần Thơ - Cà Mau - Bạc Liêu - Sóc Trăng",
        vehicles: [
            {
                titleImg: "Di chuyển bằng Ô tô",
                imgVehicle: "coach.svg"
            },
            {
                titleImg: "Di chuyển bằng tàu thủy",
                imgVehicle: "ship.svg"
            },
        ],
        imgDS: "tag_icon_4.svg",
        departureSchedule: "Thứ 4 hằng tuần",
        imgTime: "tag_icon_5.svg",
        time: "4 ngày 3 đêm",
        price: 2000000,
        promotionalPrice: 2000000,
    },
    {
        img:"tour-in-country-7.webp",
        title:"Du lịch Ninh Chữ - Vịnh Vĩnh Hy",
        vehicles: [
            {
                titleImg: "Di chuyển bằng Ô tô",
                imgVehicle: "coach.svg"
            },
        ],
        imgDS: "tag_icon_4.svg",
        departureSchedule: "Thứ 6 hằng tuần",
        imgTime: "tag_icon_5.svg",
        time: "2 ngày 1 đêm",
        price: 4300000,
        promotionalPrice: 3200000,
    },
    {
        img:"tour-in-country-8.webp",
        title:"Du lịch Phú Quốc Câu cá - Ngắm san hô",
        vehicles: [
            {
                titleImg: "Di chuyển bằng Ô tô",
                imgVehicle: "coach.svg"
            },
            {
                titleImg: "Di chuyển bằng tàu thủy",
                imgVehicle: "ship.svg"
            },
            {
                titleImg: "Di chuyển bằng máy bay",
                imgVehicle: "plane.svg"
            },
        ],
        imgDS: "tag_icon_4.svg",
        departureSchedule: "Thứ 5 hằng tuần",
        imgTime: "tag_icon_5.svg",
        time: "4 ngày 3 đêm",
        price: 4000000,
        promotionalPrice: 4000000,
    },
]

const listTourCountryComponentsElement = document.getElementById("list-tour-in-country");
listTourCountryComponentsElement.innerHTML = init2(listTourCountry);

const listTourOverseas = [
    {
        img:"tour-overseas-1.webp",
        title:"Tour Campuchia 4N3Đ: Bokor - Shihanouk Ville - Kohrong - Phnôm Pênh",
        vehicles: [
            {
                titleImg: "Di chuyển bằng Ô tô",
                imgVehicle: "coach.svg"
            },
            {
                titleImg: "Di chuyển bằng máy bay",
                imgVehicle: "plane.svg"
            }
        ],
        imgDS: "tag_icon_4.svg",
        departureSchedule: "Chủ nhật hằng tuần",
        imgTime: "tag_icon_5.svg",
        time: "4 ngày 3 đêm",
        price: 6000000,
        promotionalPrice: 3979000,
    },
    {
        img:"tour-overseas-2.webp",
        title:"Du thuyền 5 Sao Voyager Of The Seas",
        vehicles: [
            {
                titleImg: "Di chuyển bằng Ô tô",
                imgVehicle: "coach.svg"
            },
            {
                titleImg: "Di chuyển bằng tàu thủy",
                imgVehicle: "ship.svg"
            },
            {
                titleImg: "Di chuyển bằng máy bay",
                imgVehicle: "plane.svg"
            },
        ],
        imgDS: "tag_icon_4.svg",
        departureSchedule: "Thứ 4 hằng tuần",
        imgTime: "tag_icon_5.svg",
        time: "4 ngày 3 đêm",
        price: 25900000,
        promotionalPrice: 25900000,
    },
    {
        img:"tour-overseas-3.webp",
        title:"Du lịch Malaysia - Singapore [Thủy cung S.E.A AQUARIUM]",
        vehicles: [
            {
                titleImg: "Di chuyển bằng Ô tô",
                imgVehicle: "coach.svg"
            },
            {
                titleImg: "Di chuyển bằng tàu thủy",
                imgVehicle: "ship.svg"
            },
            {
                titleImg: "Di chuyển bằng máy bay",
                imgVehicle: "plane.svg"
            },
        ],
        imgDS: "tag_icon_4.svg",
        departureSchedule: "Thứ 2 - 7 hằng tuần",
        imgTime: "tag_icon_5.svg",
        time: "4 ngày 3 đêm",
        price: 12990000,
        promotionalPrice: 12990000,
    },
    {
        img:"tour-overseas-4.webp",
        title:"Du lịch Anh - Scotland [Lễ hội hoa Chelsea]",
        vehicles: [
            {
                titleImg: "Di chuyển bằng Ô tô",
                imgVehicle: "coach.svg"
            },
            {
                titleImg: "Di chuyển bằng máy bay",
                imgVehicle: "plane.svg"
            },
        ],
        imgDS: "tag_icon_4.svg",
        departureSchedule: "Thứ 7 hằng tuần",
        imgTime: "tag_icon_5.svg",
        time: "7 ngày 6 đêm",
        price: 89990000,
        promotionalPrice: 89990000,
    },
    {
        img:"last-minute-tour-1.webp",
        title:"Du lịch Ý [Rome - Pisa - Florence - Venice - Milan]",
        vehicles: [
            {
                titleImg: "Di chuyển bằng Ô tô",
                imgVehicle: "coach.svg"
            },
            {
                titleImg: "Di chuyển bằng máy bay",
                imgVehicle: "plane.svg"
            },
        ],
        imgDS: "tag_icon_4.svg",
        departureSchedule: "Thứ 2 hằng tuần",
        imgTime: "tag_icon_5.svg",
        time: "6 ngày 5 đêm",
        price: 46900000,
        promotionalPrice: 46900000,
    },
    {
        img:"last-minute-tour-2.webp",
        title:"Du lịch Nam Phi [Johannesburg - Pretoria - Soweto - Cape Town]",
        vehicles: [
            {
                titleImg: "Di chuyển bằng Ô tô",
                imgVehicle: "coach.svg"
            },
            {
                titleImg: "Di chuyển bằng máy bay",
                imgVehicle: "plane.svg"
            },
        ],
        imgDS: "tag_icon_4.svg",
        departureSchedule: "Thứ 7 hằng tuần",
        imgTime: "tag_icon_5.svg",
        time: "5 ngày 4 đêm",
        price: 75000000,
        promotionalPrice: 61990000,
    },
    {
        img:"tour-overseas-7.webp",
        title:"Du lịch Pháp - Bỉ - Hà Lan [Hội Hoa Tulip Keukenhof]",
        vehicles: [
            {
                titleImg: "Di chuyển bằng Ô tô",
                imgVehicle: "coach.svg"
            },
            {
                titleImg: "Di chuyển bằng tàu thủy",
                imgVehicle: "ship.svg"
            },
            {
                titleImg: "Di chuyển bằng máy bay",
                imgVehicle: "plane.svg"
            },
        ],
        imgDS: "tag_icon_4.svg",
        departureSchedule: "Thứ 4 hằng tuần",
        imgTime: "tag_icon_5.svg",
        time: "5 ngày 4 đêm",
        price: 55000000,
        promotionalPrice: 49900000,
    },
    {
        img:"tour-overseas-8.webp",
        title:"Du lịch Châu Âu Pháp - Thụy Sỹ - Núi Jungfrau - Ý",
        vehicles: [
            {
                titleImg: "Di chuyển bằng Ô tô",
                imgVehicle: "coach.svg"
            },
            {
                titleImg: "Di chuyển bằng tàu thủy",
                imgVehicle: "ship.svg"
            },
            {
                titleImg: "Di chuyển bằng máy bay",
                imgVehicle: "plane.svg"
            },
        ],
        imgDS: "tag_icon_4.svg",
        departureSchedule: "Thứ 4 hằng tuần",
        imgTime: "tag_icon_5.svg",
        time: "10 ngày 9 đêm",
        price: 85990000,
        promotionalPrice: 85990000,
    },
]

const listTourOverseasComponentsElement = document.getElementById("list-tour-overseas");
listTourOverseasComponentsElement.innerHTML = init2(listTourOverseas);

const listDomesticLocation = [
    {
        img: "evo_tour_destination_image_1.webp",
        title: "Vịnh Hạ Long",
        passengers: "1,600+"
    },
    {
        img: "evo_tour_destination_image_2.webp",
        title: "Sapa",
        passengers: "1,200+"
    },
    {
        img: "evo_tour_destination_image_3.webp",
        title: "Đà Nẵng",
        passengers: "1,100+"
    },
    {
        img: "evo_tour_destination_image_4.webp",
        title: "Nha Trang",
        passengers: "6,600+"
    },
]

function init3(list) {
    let str = "";
    list.forEach((item) => {
      str += `
        <div class="card-description4">
            <div class="box">
                <a href="#" title= "${item.title}">
                    <img src="image/${item.img}" alt="${item.title}">
                    <div class="content-box">
                        <h3>${item.title}</h3>
                        <p> 
                            Đã có <span>${item.passengers}</span>  lượt khách
                        </p>
                    </div>
                </a>
            </div>
        </div>
        `;
    });
    return str
}

const listDomesticLocationElementElement = document.getElementById("list-domestic-location");
listDomesticLocationElementElement.innerHTML = init3(listDomesticLocation);

const listForeignLocation = [
    {
        img:"evo_tour_destination_image_6.webp",
        title:"Châu Âu",
    },
    {
        img:"evo_tour_destination_image_7.webp",
        title:"Châu Âu",
    },
    {
        img:"evo_tour_destination_image_8.webp",
        title:"Châu Âu",
    },
    {
        img:"evo_tour_destination_image_9.webp",
        title:"Châu Âu",
    },
    {
        img:"evo_tour_destination_image_10.webp",
        title:"Châu Âu",
    },
]

function init4(list) {
    let str = "";
    list.forEach((item) => {
      str += `
        <div class="card-description5">
            <div class="box box2">
                <a href="#" title="${item.title}">
                    <img src="image/${item.img}" alt="${item.title}">
                    <div class="content-box content-box2">
                        <h3>${item.title}</h3>
                        <p>
                            Khám phá ngay
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                <path
                                    d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                            </svg>
                        </p>
                    </div>
                </a>
            </div>
        </div>
        `;
    });
    return str
}

const listForeignLocationElement = document.getElementById("list-foreign-location");
listForeignLocationElement.innerHTML = init4(listForeignLocation);

const listTravelInspiration = [
    {
        img: "travel-inspiration-1.webp",
        title: "Cẩm nang du lịch Đà Nẵng một ngày cho hội bạn vui chơi “sập” Đà thành",
        content:"Đà Nẵng có cả núi, đồng bằng và biển, chỉ nằm cách Hội An 30 km. Bao quanh bởi hàng loạt điểm tham quan ...",
    },
    {
        img: "travel-inspiration-2.webp",
        title: "Bí quyết du lịch Đà Lạt tự túc giá rẻ để xách túi và đi ngay không cần suy nghĩ",
        content:" 1. Thời tiết, khí hậu mát mẻ Đa phần các thành phố du lịch khác đều có các mùa nóng – lạnh đặc biệt và...",
    },
    {
        img: "travel-inspiration-3.webp",
        title: "Vui chơi thả ga cùng bạn bè tại Phan Thiết với cẩm nang du lịch chi tiết này",
        content:" Phan Thiết là một thành phố thuộc tỉnh Bình Thuận, nằm trên quốc lộ 1A cách TP Hồ Chí Minh 183 km về hướ...",
    },
    {
        img: "travel-inspiration-4.webp",
        title: 'Bỏ túi ngay 8 ứng dụng du lịch không thể thiếu này nếu bạn là kẻ hay “xê dịch”',
        content:" Trong thời đại 4.0 thì tất nhiên chúng ta cũng phải “upgrade” danh sách hành trang du lịch của mình đúng...",
    },
    {
        img: "travel-inspiration-5.webp",
        title: 'Vạn vật phía Bắc sắp bừng tỉnh trong xuân mới, đi đâu để “mở hàng” năm mới thật may mắn đây?',
        content:" Tiết trời đông giá chuyển dần sang sắc xuân bừng tỉnh, tươi non trong nắng ấm báo hiệu một năm mới lại san...",
    },
    {
        img: "travel-inspiration-6.webp",
        title: "Nắm trong tay cách di chuyển từ sân bay Narita và trung tâm thủ đô Tokyo như người bản xứ",
        content:" Hệ thống giao thông tại Nhật Bản phát triển rất đa dạng và khá phức tạp. Với những người lần đầu đến xứ ...",
    },
]

function init5(list) {
    let str = "";
    list.forEach((item) => {
      str += `
        <div class="card-description3 travel">
            <div class="travel-img">
                <a href="#">
                    <img src="image/${item.img}" alt="${item.title}">
                </a>
            </div>
            <h3>
                <a href="#" title="${item.title}">${item.title}</a>
            </h3>
            <p>${item.content}</p>
        </div>
        `;
    });
    return str
}

const listTravelInspirationElement = document.getElementById("list-travel-inspirations");
listTravelInspirationElement.innerHTML = init5(listTravelInspiration);
