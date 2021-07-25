
const div1 = `
<div class="header">
    <div class="header--left">
        <h1>Xin chào</h1>
        <h2>Đây là mọi điều cần biết về Trần Hải Nam</h2>
    </div>
</div>
<div class="cover"></div>
<div class="content2">
    <div class="content2__info">
        <p class="content2__info--headline">Thông tin cơ bản</p>
    <table> 
        <tr>
            <th class="content2__info--tag">Name</th>
            <th class="content2__info--display">Trần Hải Nam</th>
        </tr>
        <tr>
            <th class="content2__info--tag">Age</th>
            <th class="content2__info--display">22</th>
        </tr>
        <tr>
            <th class="content2__info--tag">Gender</th>
            <th class="content2__info--display">Male</th>
        </tr>
        <tr>
            <th class="content2__info--tag">Date of Birth</th>
            <th class="content2__info--display">12/07/1999</th>
        </tr>
        <tr>
            <th class="content2__info--tag">Occupation</th>
            <th class="content2__info--display">College Student</th>
        </tr>
        <tr>
            <th class="content2__info--tag">Status</th>
            <th class="content2__info--display">Single</th>
        </tr>
        <tr>
            <th class="content2__info--tag">University</th>
            <th class="content2__info--display">University of Engineer and Technology</th>
        </tr>
    </table>
    </div>
    <div class="content2__univer">
        <h1 class="content2__univer--name">UET</h1>
        <ul>
            <li>Đại học Quốc gia Hà Nội (ĐHQGHN - tên giao dịch bằng tiếng Anh: Vietnam National University, Hanoi; viết tắt là VNU) là một trong hai hệ thống Đại học Quốc gia của Việt Nam, được đặt dưới sự chỉ đạo trực tiếp của Chính phủ, giữ vai trò quan trọng trong hệ thống giáo dục của Việt Nam.</li>
            <li>ĐHQGHN là trung tâm đào tạo, nghiên cứu khoa học, chuyển giao tri thức và công nghệ đa ngành, đa lĩnh vực, chất lượng cao; ngang tầm khu vực, dần đạt trình độ quốc tế; đáp ứng yêu cầu phát triển của đất nước, phù hợp với xu hướng phát triển giáo dục đại học tiên tiến.</li>
        </ul>
    </div>
</div>
`

function changeBtn(){
    
    let container = document.getElementById("container");
    container.innerHTML = div1;

    // div1.innerHTML = ""
}