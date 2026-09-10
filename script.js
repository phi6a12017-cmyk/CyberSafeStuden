const questions = [
  ['Mã QR nhận voucher miễn phí', 'Trang đích yêu cầu email và mật khẩu trường. Bạn làm gì?', 'Không quét, xác minh nguồn poster và không nhập mật khẩu.', ['Quét ngay vì có thời hạn.', 'Không quét, xác minh nguồn poster và không nhập mật khẩu.', 'Gửi cho bạn bè cùng thử.'], 'b'],
  ['Email cảnh báo tài khoản', 'Email nói tài khoản bị khóa trong 10 phút. Dấu hiệu đáng ngờ?', 'Người gửi: security-update@micr0soft-help.com', ['Logo thương hiệu nên an toàn.', 'Gửi buổi tối nên giả mạo.', 'Tên miền lạ và tạo áp lực bấm link.'], 'c'],
  ['Ứng dụng yêu cầu mật khẩu', 'Ứng dụng học tập mới yêu cầu dùng lại mật khẩu email trường.', 'Ứng dụng chưa rõ nguồn và xin quyền danh bạ.', ['Dùng mật khẩu cũ.', 'Tạo mật khẩu riêng và kiểm tra ứng dụng.', 'Gửi mật khẩu cho bạn đăng ký.'], 'b'],
  ['Tài khoản bạn bè nhờ chuyển tiền', 'Tài khoản giống tên bạn thân nhờ chuyển tiền gấp.', '“Chuyển giúp 500.000đ ngay nhé!”', ['Chuyển ngay.', 'Gọi trực tiếp bằng kênh đã biết để xác minh.', 'Đăng tin nhắn lên mạng.'], 'b'],
  ['Wi-Fi miễn phí', 'Bạn cần truy cập tài khoản ngân hàng ở quán cà phê.', 'Mạng có tên gần giống quán nhưng chưa được xác nhận.', ['Đăng nhập ngay.', 'Tắt cập nhật rồi dùng.', 'Dùng dữ liệu di động/VPN, tránh giao dịch nhạy cảm.'], 'c'],
  ['Khảo sát nhận quà học bổng', 'Biểu mẫu yêu cầu ảnh CCCD, OTP và mật khẩu.', 'Đơn vị tổ chức không rõ, thúc giục hoàn thành trong 5 phút.', ['Dừng lại, không cung cấp dữ liệu và xác minh đơn vị.', 'Điền trước rồi đổi mật khẩu.', 'Chỉ gửi OTP.'], 'a'],
  ['Cuộc gọi giả danh ngân hàng', 'Người gọi yêu cầu OTP để hủy giao dịch.', 'Người gọi dọa khóa tài khoản nếu không cung cấp ngay.', ['Đọc OTP.', 'Từ chối, ngắt máy và gọi số chính thức ngân hàng.', 'Gửi OTP để được hỗ trợ.'], 'b'],
  ['File điểm thi đính kèm', 'File “Danh_sach_diem_moi.exe” được gửi từ địa chỉ lạ.', 'Email yêu cầu tắt phần mềm bảo mật nếu có cảnh báo.', ['Mở trên máy cá nhân.', 'Đổi tên thành .pdf.', 'Không mở, xác minh và báo cáo email.'], 'c'],
  ['Chia sẻ vị trí cá nhân', 'Tài khoản lạ xin vị trí để gửi quà đến tận nơi.', 'Người này không xác minh danh tính nhưng hỏi lịch trình.', ['Không chia sẻ, chặn và báo cáo nếu cần.', 'Chia sẻ 5 phút.', 'Gửi địa chỉ trường.'], 'a'],
  ['Thông báo đăng nhập lạ', 'Bạn nhận yêu cầu xác thực hai lớp dù không đăng nhập.', 'Thông báo xuất hiện liên tục với nút Chấp thuận/Từ chối.', ['Chấp thuận cho biến mất.', 'Từ chối, đổi mật khẩu và kiểm tra hoạt động đăng nhập.', 'Gửi ảnh cho người lạ.'], 'b'],
  ['Tin nhắn từ “trợ giảng”', 'Một tài khoản dùng đúng tên và ảnh của trợ giảng nhắn bạn nộp lệ phí qua link rút gọn.', 'Tin nhắn có mã lớp và lịch học chính xác, nhưng tài khoản mới tạo, link rút gọn không cho biết đích đến và nhóm lớp chưa có thông báo.', ['Mở link bằng chế độ ẩn danh vì không nhập mật khẩu.', 'Dùng một kênh độc lập đã biết để xác minh, không mở link và báo cáo tài khoản nếu giả mạo.', 'Chuyển khoản số tiền nhỏ trước để kiểm tra người nhận.'], 'b'],
  ['Lời mời cấp quyền ứng dụng', 'Bạn đăng nhập cổng học tập bằng đúng địa chỉ trường và thấy ứng dụng “Điểm danh thông minh” yêu cầu quyền đọc email, danh bạ và gửi thư.', 'Trang đăng nhập có chứng chỉ HTTPS và giao diện chính thức, nhưng ứng dụng là của nhà phát triển không có trong thông báo của trường.', ['Chấp nhận vì bạn đã đăng nhập đúng website.', 'Chỉ chấp nhận quyền đọc email, bỏ qua các quyền khác.', 'Hủy cấp quyền, chụp lại tên ứng dụng và xác minh với đơn vị quản trị trước khi dùng.'], 'c'],
  ['Tài khoản bạn cùng nhóm bị chiếm', 'Bạn nhận file thuyết trình từ tài khoản bạn cùng nhóm, kèm lời nhắn dùng mật khẩu nhóm để mở.', 'Nội dung nhắn có cách nói quen thuộc và file đúng tên dự án, nhưng bạn ấy đang ở ngoài mạng và không trả lời cuộc gọi.', ['Tải file, tắt phần mềm bảo vệ nếu file yêu cầu.', 'Xác minh qua một kênh khác trước; nếu chưa xác minh thì không tải file và báo quản trị nhóm.', 'Dùng máy ảo cá nhân để mở thử.'], 'b'],
  ['Thanh toán bằng mã QR', 'Bạn quét QR để đóng học phí và ứng dụng ngân hàng hiển thị tên người nhận khác tên trường.', 'Số tiền đúng và người gửi QR nói ngân hàng cập nhật tên tài khoản chậm; hạn đóng phí chỉ còn 15 phút.', ['Thanh toán vì số tiền và thời hạn đều chính xác.', 'Sửa tên người nhận bằng tay rồi thanh toán.', 'Hủy giao dịch, tự vào cổng học phí chính thức và xác minh thông tin người nhận.'], 'c'],
  ['Trang đăng nhập gần giống', 'Trình duyệt hỏi có muốn tự động điền mật khẩu vào trang có tên miền gần giống cổng trường.', 'Trang dùng logo thật và HTTPS, nhưng có thêm một ký tự trong tên miền; trình quản lý mật khẩu không nhận diện đây là website đã lưu.', ['Tự gõ mật khẩu thay vì tự động điền.', 'Không đăng nhập; đóng trang và tự nhập địa chỉ cổng trường từ nguồn chính thức.', 'Dùng mật khẩu cũ ít quan trọng để kiểm tra.'], 'b'],
  ['Cuộc gọi từ “ngân hàng”', 'Người gọi đọc đúng bốn số cuối thẻ và một giao dịch bạn vừa thực hiện, rồi yêu cầu OTP để hủy giao dịch.', 'Ứng dụng ngân hàng đang hiện giao dịch chờ xử lý, nhưng số gọi đến không phải số hỗ trợ chính thức.', ['Đọc OTP vì người gọi biết thông tin giao dịch.', 'Yêu cầu họ gửi email xác nhận rồi đọc OTP.', 'Ngắt máy, tự gọi số trên mặt sau thẻ hoặc ứng dụng và không cung cấp OTP.'], 'c'],
  ['Tài liệu có tính năng tự động', 'Giảng viên gửi tài liệu qua nền tảng lớp học quen thuộc; file yêu cầu bật tính năng tự động để hiển thị đáp án.', 'Tên người gửi đúng, nhưng tài liệu chỉ là bảng điểm đơn giản và cảnh báo bảo mật nói tính năng tự động có thể chạy mã.', ['Bật tính năng tự động khi đã ngắt Wi-Fi.', 'Không bật tính năng tự động; xác minh nội dung với giảng viên qua nền tảng lớp học và báo cáo file đáng ngờ.', 'Lưu thành PDF rồi bật tính năng tự động để xem đủ nội dung.'], 'b'],
  ['Học bổng có thời hạn gấp', 'Bạn nhận email từ một địa chỉ cá nhân nói là giáo sư giới thiệu học bổng, yêu cầu nộp hồ sơ qua biểu mẫu trước nửa đêm.', 'Email có chữ ký, logo và thông tin ngành học chính xác, nhưng không có mã thông báo trên website trường và biểu mẫu yêu cầu ảnh giấy tờ cùng tài khoản ngân hàng.', ['Gửi hồ sơ đã che một phần số giấy tờ.', 'Tự xác minh chương trình qua phòng công tác sinh viên/website chính thức trước khi cung cấp dữ liệu.', 'Hỏi người gửi có phải giáo sư thật không bằng cách trả lời email.'], 'b'],
  ['Cảnh báo đăng nhập sau khi đổi mật khẩu', 'Bạn vừa đổi mật khẩu trên ứng dụng chính thức rồi nhận email nói có phiên đăng nhập mới và nút “Bảo vệ tài khoản”.', 'Thông báo có thể là thật, nhưng email đến chậm và nút dẫn qua tên miền trung gian; ứng dụng vẫn cho phép bạn xem phiên đăng nhập.', ['Bấm nút trong email để khóa nhanh.', 'Tự mở ứng dụng, đăng xuất phiên lạ và kiểm tra hoạt động; không dùng link email.', 'Xóa email vì bạn vừa đổi mật khẩu.'], 'b'],
  ['Giọng nói khẩn cấp bằng AI', 'Bạn nhận cuộc gọi bằng giọng rất giống người thân, nói đang gặp sự cố và nhờ chuyển tiền cho “bạn đi cùng”.', 'Người gọi biết tên bạn và một chi tiết gia đình công khai trên mạng, nhưng từ chối video và yêu cầu giữ bí mật trong 5 phút.', ['Gọi lại đúng số quen thuộc hoặc hỏi một câu bí mật qua kênh khác trước khi chuyển tiền.', 'Chuyển một phần trước để giúp kịp thời.', 'Gửi ảnh giao dịch để người thân xác nhận sau.'], 'a']
];

const qBox = document.querySelector('#questions');
const result = document.querySelector('#result');
const search = document.querySelector('#search');
let saved = Number(localStorage.getItem('cyberScore') || 0);

function renderQuestions() {
  qBox.innerHTML = questions.map((question, index) => {
    const [title, prompt, scene, options] = question;
    const choices = options.map((option, optionIndex) => `
      <label class="option">
        <input type="radio" name="q${index}" value="${String.fromCharCode(97 + optionIndex)}">
        <span>${option}</span>
      </label>`).join('');

    return `<article class="card challenge">
      <div class="eyebrow">TÌNH HUỐNG ${String(index + 1).padStart(2, '0')}</div>
      <h2>${title}</h2>
      <p class="muted">${prompt}</p>
      <div class="scene">${scene}</div>
      <div class="options">${choices}</div>
      <div class="feedback" aria-live="polite"></div>
    </article>`;
  }).join('');
}

function updateScore() {
  const totalScore = Math.min(100, 65 + saved * 2);
  document.querySelector('#liveScore').textContent = saved;
  document.querySelector('#totalScore').textContent = totalScore;
  document.querySelector('#scoreBar').style.width = `${totalScore}%`;
  document.querySelector('#latest').textContent = `+${saved * 2}`;
}

function checkAnswers() {
  let score = 0;

  questions.forEach((question, index) => {
    const card = qBox.children[index];
    const selected = card.querySelector('input:checked');
    const feedback = card.querySelector('.feedback');
    const options = card.querySelectorAll('.option');

    options.forEach(option => option.classList.remove('correct', 'wrong'));

    if (!selected) {
      feedback.textContent = 'Bạn chưa chọn đáp án.';
      feedback.className = 'feedback bad';
      return;
    }

    const isCorrect = selected.value === question[4];
    if (isCorrect) score++;
    selected.closest('.option').classList.add(isCorrect ? 'correct' : 'wrong');
    feedback.textContent = isCorrect
      ? 'Chính xác! Bạn đã nhận diện đúng rủi ro.'
      : 'Chưa đúng. Hãy kiểm tra nguồn, tên miền và yêu cầu bất thường.';
    feedback.className = `feedback ${isCorrect ? 'good' : 'bad'}`;
  });

  saved = score;
  localStorage.setItem('cyberScore', saved);
  updateScore();
  document.querySelector('#resultScore').textContent = `${score}/20`;
  document.querySelector('#resultText').textContent = score >= 16
    ? 'Tuyệt vời! Bạn có phản xạ an toàn tốt.'
    : score >= 10
      ? 'Khá tốt! Hãy tiếp tục kiểm tra trước khi thao tác.'
      : 'Hãy nhớ dừng lại, xác minh nguồn và bảo vệ dữ liệu nhạy cảm.';
  result.classList.add('show');
  result.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function resetQuiz() {
  qBox.querySelectorAll('input').forEach(input => { input.checked = false; });
  qBox.querySelectorAll('.option').forEach(option => option.classList.remove('correct', 'wrong'));
  qBox.querySelectorAll('.feedback').forEach(feedback => {
    feedback.textContent = '';
    feedback.className = 'feedback';
  });
  saved = 0;
  localStorage.removeItem('cyberScore');
  updateScore();
  result.classList.remove('show');
}

function showPage(id) {
  const page = document.getElementById(id) ? id : 'home';
  document.querySelectorAll('.page').forEach(section => {
    section.classList.toggle('active', section.id === page);
  });
  document.querySelectorAll('.navlinks button').forEach(button => {
    button.classList.toggle('active', button.dataset.page === page);
  });
  if (page === 'score') updateScore();
  history.replaceState(null, '', `#${page}`);
  window.scrollTo(0, 0);
}

function filterTopics(query) {
  const topics = document.querySelectorAll('.topic');
  let visibleTopics = 0;

  topics.forEach(topic => {
    const isVisible = topic.textContent.toLowerCase().includes(query);
    topic.style.display = isVisible ? 'block' : 'none';
    if (isVisible) visibleTopics++;
  });

  let emptyState = document.querySelector('.no-results');
  if (!visibleTopics && query) {
    if (!emptyState) {
      emptyState = document.createElement('p');
      emptyState.className = 'no-results muted';
      document.querySelector('.knowledge-grid').append(emptyState);
    }
    emptyState.textContent = `Không tìm thấy nội dung cho “${query}”.`;
  } else if (emptyState) {
    emptyState.remove();
  }
}

renderQuestions();
document.querySelector('#check').onclick = checkAnswers;
document.querySelector('#reset').onclick = resetQuiz;
document.querySelectorAll('[data-page]').forEach(button => {
  button.onclick = event => {
    event.preventDefault();
    showPage(button.dataset.page);
  };
});
search.oninput = event => filterTopics(event.target.value.trim().toLowerCase());
showPage(location.hash.slice(1) || 'home');
updateScore();
