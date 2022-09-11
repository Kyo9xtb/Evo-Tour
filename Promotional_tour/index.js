const listTourPromotional = [
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
        img:"tour-8.jpg",
        title:"Du lịch khám phá Cái Bè - Cần Thơ - Châu Đốc - Hà Tiên",
        vehicles: [
            {
                titleImg: "Di chuyển bằng Ô tô",
                imgVehicle: "coach.svg"
            },
        ],
        imgDS: "tag_icon_4.svg",
        departureSchedule: "Thứ 2 - 7 hằng tuần",
        imgTime: "tag_icon_5.svg",
        time: "4 ngày 3 đêm",
        price: 3579000,
        promotionalPrice: 3579000,
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

function initTour(list) {
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

const listTourElement = document.getElementById("list-tour-promotional");
listTourElement.innerHTML = initTour(listTourPromotional);

const btn1 = document.getElementById("btn-a-z");
btn1.addEventListener("click", function (event) {
    const result = _.sortBy(listTourPromotional, function(item) {
    return item.title;
    })
    const listTourElement = document.getElementById("list-tour-promotional");
    listTourElement.innerHTML = initTour(result);
});

const btn2 = document.getElementById("btn-z-a");
btn2.addEventListener("click", function (event) {
    const result = _.reverse(_.sortBy(listTourPromotional, function(item) {
    return item.title;
    }))
    const listTourElement = document.getElementById("list-tour-promotional");
    listTourElement.innerHTML = initTour(result);
});

const btn3 = document.getElementById("price-increase");
btn3.addEventListener("click", function (event) {
    const result = _.sortBy(listTourPromotional, function(item) {
        return item.promotionalPrice;
    })
    const listTourElement = document.getElementById("list-tour-promotional");
    listTourElement.innerHTML = initTour(result);
});

const btn4 = document.getElementById("reduced-price");
btn4.addEventListener("click", function (event) {
    const result = _.reverse(_.sortBy(listTourPromotional, function(item) {
        return item.promotionalPrice;
    }))
    const listTourElement = document.getElementById("list-tour-promotional");
    listTourElement.innerHTML = initTour(result);
});

const listBtn = document.getElementsByClassName("select-button");
function handleClick(event) {
    for (let i = 0; i < listBtn.length; i++) {
        listBtn[i].classList.remove('active');
    }
    event.target.classList.add('active');
}
for (let i = 0; i < listBtn.length; i++) {
    const element = listBtn[i];
    element.addEventListener("click", handleClick);
}