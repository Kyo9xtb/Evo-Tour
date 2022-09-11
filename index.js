const listLocationVietNam = [
    {
        linkTitle:"",
        title: 'Miền Bắc',
        sites: [
            {
                link:"",
                address: 'Sapa'
            },
            {
                link:"",
                address: 'Hà Giang'
            },
            {
                link:"",
                address: 'Cao Bằng - Bắc Bạn'
            },
            {
                link:"",
                address: 'Mai Châu - Mộc Châu'
            },
            {
                link:"",
                address: 'Yên Bái'
            },
            {
                link:"",
                address: 'Ninh Bình'
            },
            {
                link:"",
                address: 'Hạ Long'
            },
            {
                link:"",
                address: 'Cát Bà'
            },
        ]
    },
    {
        linkTitle:"",
        title: 'Miền trung',
        sites: [
            {
                link:"",
                address: 'Cửa lò'
            },
            {
                link:"",
                address: 'Sầm Sơn'
            },
            {
                link:"",
                address: 'Nghệ An'
            },
            {
                link:"",
                address: 'Thiên Cầm'
            },
            {
                link:"",
                address: 'Quảng Bình'
            },
            {
                link:"",
                address: 'Huế'
            },
            {
                link:"",
                address: 'Đà Nẵng'
            },
            {
                link:"",
                address: 'Hội An'
            },
            {
                link:"",
                address: 'Nha Trang'
            },
            {
                link:"",
                address: 'Phú Yên'
            },
            {
                link:"",
                address: 'Quy nhơn'
            },
            {
                link:"",
                address: 'Đà Lạt'
            },
            {
                link:"",
                address: 'Tây Nguyên'
            },
            {
                link:"",
                address: 'Phan Thiết - Mũi Né'
            },
        ]
    },
    {
        linkTitle:"",
        title: 'Miền Nam',
        sites: [
            {
                link:"",
                address: 'Phú Quốc'
            },
            {
                link:"",
                address: 'Côn Đảo'
            },
            {
                link:"",
                address: 'Bên Tre'
            },
            {
                link:"",
                address: 'Cần Thơ'
            },
            {
                link:"",
                address: 'Cà Mau'
            },
            {
                link:"",
                address: 'Hà Tiên'
            },
            {
                link:"",
                address: 'Kiên Giang'
            },
            {
                link:"",
                address: 'Nam Du'
            },
        ]
    }
];
const listLocationInternational = [
    {
        linkTitle:"",
        title:'Đông Nam Á',
        sites:[
            {
                link:"",
                address:'Singapore'
            },
            {
                link:"",
                address:'Malaysia'
            },
            {
                link:"",
                address:'Thái Lan'
            },
            {
                link:"",
                address:'Campuchia'
            },
            {
                link:"",
                address:'Lào'
            },
            {
                link:"",
                address:'Indonesia'
            },
            {
                link:"",
                address:'Philipines'
            },
        ]
    },
    {
        linkTitle:"",
        title:'Đông Bắc Á',
        sites:[
            {
                link:"",
                address:'Hàn Quốc'
            },
            {
                link:"",
                address:'Đài Loan'
            },
            {
                link:"",
                address:'Hồng Kông'
            },
            {
                link:"",
                address:'Nhật Bản'
            },
            {
                link:"",
                address:'Trung Quốc'
            },
        ]
    },
    {
        linkTitle:"",
        title:'Ấn Độ - Nam Á',
        sites:[
            {
                link:"",
                address:'Ấn Độ'
            },
            {
                link:"",
                address:'Maldives'
            },
            {
                link:"",
                address:'Tây Tạng'
            },
            {
                link:"",
                address:'Nhật Bản'
            },
            {
                link:"",
                address:'Trung Quốc'
            },
        ]
    },
    {
        linkTitle:"",
        title: 'Châu Âu',
        sites: []
    },
    {
        linkTitle:"",
        title: 'Châu Úc',
        sites: []
    },
    {
        linkTitle:"",
        title: 'Châu Phi',
        sites: []
    },
    {
        linkTitle:"",
        title: 'Châu Mỹ',
        sites: []
    },
];
const listLocationFreeAndEasy = [
    {
        linkTitle:"",
        title: 'Free and Easy Miền Bắc',
        sites: []
    },
    {   
        linkTitle:"",
        title: 'Free and Easy Miền Trung',
        sites: []
    },
    {
        linkTitle:"",
        title: 'Free and Easy Miền Nam',
        sites: []
    },
]
function renderListSites(sites) {
    let str = "";
    sites.forEach((item) => {
      str += `
        <li>
            <a href="${item.link}" title="${item.address}" >${item.address}</a>
        </li>
        `;
    });
    return str;
}
/* menu */
function init(list) {
    let str = "";
    list.forEach((item) => {
      str += `
          <li class ="sub-list-tour">
            <a class ="title-tour-list" href="${item.linkTitle}" title="${item.title}" >${item.title}</a>
            <ul>
                ${renderListSites(item.sites)}
            </ul>
          </li>
        `;
    });
    return str
}


const listProductElement = document.getElementById("tour-vietnam");
listProductElement.innerHTML = init(listLocationVietNam);

const listProductElement2 = document.getElementById("tour-international");
listProductElement2.innerHTML = init(listLocationInternational);

const listProductElement3 = document.getElementById("tour-free");
listProductElement3.innerHTML = init(listLocationFreeAndEasy);

$( ".menu-item" ).hover(
    function() {
      $(this).find(".menu-link").addClass( "link-hover" );
      $(this).find(".tour-selection").addClass("show")
      $(this).find(".tour-item:first-child .selection-link").addClass("selection-active")
      $(this).find(".tour-item:first-child .show-tour").addClass("show")
    }, function() {
      $(this).find(".menu-link").removeClass( "link-hover" );
      $(this).find(".tour-selection").removeClass("show")
    }
);

$( ".tour-item" ).hover(
    function() {
      $(this).find(".selection-link").addClass( "selection-active" );
      $(this).find(".show-tour").addClass("show")

    }, function() {
      $(this).find(".selection-link").removeClass( "selection-active" );
      $(this).find(".show-tour").removeClass("show")
    }
);

$(".btn-mobile").click(function() {
    $(".mobile").toggleClass("show");
});

$(".contact").click(function() {
    $(".contact-content").toggleClass("show");
});

$(".svg1").click(function() {
    $(this).toggleClass("rotate")
    $(".sub-mobilel1").toggleClass("show");
});

$(".svg2").click(function() {
    $(this).toggleClass("rotate")
    $(this).parents(".sub-mobilel1 li").find(".sub-mobilel2").toggleClass("show");
});


/* Footer */
const listFooter =[
    {
        title: 'Evo Tour',
        sites:[
            {
                link:"../Home_page/index.html",
                address:'Trang chủ'
            },
            {
                link:"../Introduce/index.html",
                address:'Giới thiệu'
            },
            {
                link:"../Tour/index.html",
                address:'Tour du lịch'
            },
            {
                link:"../Promotional_tour/index.html",
                address:'Tour khuyến mãi'
            },
            {
                link:"../News/index.html",
                address:'Tin tức'
            },
            {
                link:"../Travel_experience/index.html",
                address:'Kinh nghiệm du lịch'
            },
            {
                link:"../FAQ/index.html",
                address:'Faq'
            },
            {
                link:"../Contact/index.html",
                address:'Liên hệ'
            },
        ]
    },
    {
        title: 'Tour Miền Bắc',
        sites: [
            {
                link:"",
                address: 'Sapa'
            },
            {
                link:"",
                address: 'Hà Giang'
            },
            {
                link:"",
                address: 'Cao Bằng - Bắc Bạn'
            },
            {
                link:"",
                address: 'Mai Châu - Mộc Châu'
            },
            {
                link:"",
                address: 'Yên Bái'
            },
            {
                link:"",
                address: 'Ninh Bình'
            },
            {
                link:"",
                address: 'Hạ Long'
            },
            {
                link:"",
                address: 'Cát Bà'
            },
        ]
    },
    {
        title: 'Tour Miền Nam',
        sites: [
            {
                link:"",
                address: 'Phú Quốc'
            },
            {
                link:"",
                address: 'Côn Đảo'
            },
            {
                link:"",
                address: 'Bên Tre'
            },
            {
                link:"",
                address: 'Cần Thơ'
            },
            {
                link:"",
                address: 'Cà Mau'
            },
            {
                link:"",
                address: 'Hà Tiên'
            },
            {
                link:"",
                address: 'Kiên Giang'
            },
            {
                link:"",
                address: 'Nam Du'
            },
        ]
    },
    {
        title:'Tour Quốc tế',
        sites: [
            {
                link:"",
                address:'Đông Nam Á'
            },
            {
                link:"",
                address:'Đông Bắc Á'
            },
            {
                link:"",
                address:'Ấn Độ - Nam Á'
            },
            {
                link:"",
                address:'Châu Âu'
            },
            {
                address:'Châu Úc'
            },
            {
                link:"",
                address:'Châu Phi'
            },
            {
                link:"",
                address:'Châu Mỹ'
            },
        ]
    },
]

function init2(list) {
    let str = "";
    list.forEach((item) => {
      str += `
          <li class ="sub-list-footer">
            <h3>${item.title}</h3>
            <ul>
                ${renderListSites(item.sites)}
            </ul>
          </li>
        `;
    });
    return str
}

const listProductElement4 = document.getElementById("list-footer");
listProductElement4.innerHTML = init2(listFooter);