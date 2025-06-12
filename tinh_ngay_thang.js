// sử dụng bằng câu lệnh điều khiển if và else if

// function Check(){
//     let thang30 = document.getElementById("number").value;
//     // let thang31 = document.getElementById("number").value;
//     if (thang30 == 4 || thang30 == 6 || thang30 == 9 || thang30 == 11)
//         document.getElementById("result").innerHTML = ("tháng "+thang30+" có 30 ngày");
//     else if (thang30 == 1 || thang30 == 3 || thang30 == 5 || thang30 == 7 || thang30 == 8 || thang30 == 10 || thang30 == 12)
//         document.getElementById("result").innerHTML = ("tháng "+thang30+" có 31 ngày");
//     else if(thang30 == 2)
//         document.getElementById("result").innerHTML = ("tháng "+thang30+" có 28 hoặc 29 ngày");
//     else
//         document.getElementById("result").innerHTML = ("tháng bạn nhập không có trong lịch");
//
// }
let thang1="1";
let thang2="2";
let thang3="3";
let thang4="4";
let thang5="5";
let thang6="6";
let thang7="7";
let thang8="8";
let thang9="9";
let thang10="10";
let thang11="11";
let thang12="12";
function Check(){
    let month = document.getElementById('number').value;
    switch (month) {
        case thang1:
        case thang3:
        case thang5:
        case thang7:
        case thang8:
        case thang10:
        case thang12:
            document.getElementById("result").innerHTML = "Tháng " + month + " có 31 ngày"
            break;
        case thang4:
        case thang6:
        case thang9:
        case thang11:
            document.getElementById("result").innerHTML = "Tháng " + month + " có 31 ngày"
            break;
        case thang2:
            document.getElementById("result").innerHTML = "Tháng "+month+" có 29 hoặc 28 ngày"
            break;
        default:
            document.getElementById("result").innerHTML = "Yêu cầu nhập lại tháng"
    }
}