let year = parseInt(prompt("Nhập năm bạn muốn kiểm tra:"));
let right = false;
if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0)
            right = true;
    }
    else right = true;
}

if(right)
    alert(year + " là năm nhuận!");
else alert(year + " không là năm nhuận!");