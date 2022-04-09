let slider = $(document).ready(function () {
  $(".hero__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    infinite: true,
  });
});

let slider_logo = $(document).ready(function () {
  $(".partners__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: true,
    variableWidth: true,
    focusOnSelect: true,
    autoplay: true,
    centerMode: true,
    autoplaySpeed: 3500,
  });
});

let slider_team = $(document).ready(function () {
  $(".team__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    centerMode: true,
    arrows: false,
    variableWidth: true,
    infinite: true,
  });
});

$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger, .dropdown_menu, .header").toggleClass("toggled");
  });
});

if ($(window).width() < 998) {
  $(".first_level_1").click(function () {
    $(".sub1").toggleClass("clicked");
  });
  $(".first_level_2").click(function () {
    $(".sub2").toggleClass("clicked");
  });
  $(".first_level_3").click(function () {
    $(".sub3").toggleClass("clicked");
  });
  $(".first_level_4").click(function () {
    $(".sub4").toggleClass("clicked");
  });
  $(".first_level_5").click(function () {
    $(".sub5").toggleClass("clicked");
  });
  $(".first_level_6").click(function () {
    $(".sub6").toggleClass("clicked");
  });
}

// доктор фільтр
let all_doctors = [
  {
    name: "Мицько Мар’яна",
    position: "Лікар-невропатолог",
    department: 0,
    department_name: "Хірургія",

    photo_url: "../img/likar1.png",
    declaration: true,
  },

  {
    name: "Саковець  Оксана",
    position: "Лікар-гастроентероло",
    department: 1,
    department_name: "Травматологоія",
    photo_url: "../img/likar3.png",
    declaration: false,
  },
  {
    name: "Проценко Олексій",
    position: "Лікар-уролог",
    department: 1,
    department_name: "Хірургія",
    photo_url: "../img/likar2.png",
    declaration: false,
  },
  {
    name: "Ігорко",
    position: "Сексолог-гинеколог",
    department: 0,
    department_name: "Травматологоія",
    photo_url: "../img/doc5.png",
    declaration: true,
  },
];

let filter = {
  department: -1,
  can_declarate: false,
  query: "",
};
filterDoctors();
// 1 фільтруємо відділення
$("#filter-department").on("change", function () {
  filter.department = Number($(this).val());
  filterDoctors();
});

// 2 фільтруємо декларування
$("#filter-declaration input").on("change", function () {
  filter.can_declarate = $(this).val();
  console.log(JSON.stringify(filter));
  filterDoctors();
});

$("#filter-query").on("keyup", function () {
  filter.query = $(this).val().toLowerCase();
  filterDoctors();
});

function filterDoctors() {
  let filtered_doctors = [];
  let all_html = "";
  //Відсіюємо по відділенню
  if (filter.department >= 0) {
    filtered_doctors = all_doctors.filter((el) => {
      return el.department == filter.department;
    });
  } else {
    filtered_doctors = all_doctors;
  }

  console.log(filtered_doctors);

  //Відсіюємо по декларації
  if (filter.can_declarate == "true") {
    filtered_doctors = filtered_doctors.filter((el) => {
      return el.declaration == true;
    });
  } else {
    filtered_doctors = filtered_doctors.filter((el) => {
      return el.declaration == true || el.declaration == false;
    });
  }

  //Відсіюємо по запиту

  if (filter.query.length > 2) {
    filtered_doctors = filtered_doctors.filter((el) => {
      return el.name.toLowerCase().indexOf(filter.query) > -1;
    });
  }

  filtered_doctors.forEach((doc) => {
    let doc_html = `
                <div class="col-12 col-md-3">
                 <div class="doctor__card">
                <a href="${doc.url}">
                <div class="doctor__photo" style="background-image:url('${doc.photo_url}')"></div> 
        
                  <div class="doctor__info">
                      <div class="doctor__header">
                        <strong>${doc.name}</strong>
                        <p> ${doc.position}</p> 
                      </div> 
                    </div>  
                  </a>       
            </div> 
            </div>
    `;
    all_html = all_html + doc_html;
  });
  console.log(all_html);
  $("#doctors").html(all_html);
}

filterDoctors();
