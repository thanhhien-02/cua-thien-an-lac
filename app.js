/**
 * CỬA THIỀN AN LẠC - ĐI CHÙA & TĨNH TÂM ONLINE (V3)
 * Hệ thống Đồ họa 2.5D Isometric Chùa Việt Bắc - Trung - Nam
 * - Trực quan hóa 7 đại danh lam cổ tự bằng đồ họa vector 2.5D
 * - Bản đồ 3 miền tương tác & chọn chùa 1-chạm
 * - Khắc phục 100% lỗi phông chữ tiếng Việt
 * - Tự động tối ưu CPU/RAM bằng Page Visibility API
 */

// ====================================================================
// 1. DỮ LIỆU ĐỒ HỌA 2.5D ISOMETRIC VÀ LỊCH SỬ 7 CHÙA VIỆT NAM
// ====================================================================
const TEMPLES_DATA = [
  {
    id: "tran-quoc",
    name: "Chùa Trấn Quốc",
    location: "Tây Hồ, Hà Nội",
    region: "Miền Bắc",
    icon: "🛕",
    quote: "Đóa sen ngàn năm bên sóng nước Tây Hồ",
    history: "Ngôi chùa cổ nhất Thăng Long - Hà Nội với lịch sử hơn 1.500 năm thời Tiền Lý. Nổi tiếng với Bảo tháp lục độ đài sen 11 tầng màu đỏ trầm và cây bồ đề sum suê.",
    meaning: "Cầu quốc thái dân an, gia đạo thuận hòa, tâm trí sáng suốt.",
    svgArt: `
      <svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="tq-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#141e30" />
            <stop offset="60%" stop-color="#243b55" />
            <stop offset="100%" stop-color="#3d261a" />
          </linearGradient>
          <linearGradient id="tq-water" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#1b2a47" />
            <stop offset="100%" stop-color="#0e1726" />
          </linearGradient>
          <radialGradient id="tq-moon" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#fff8e7" />
            <stop offset="60%" stop-color="#f5d77f" stop-opacity="0.8" />
            <stop offset="100%" stop-color="#f5d77f" stop-opacity="0" />
          </radialGradient>
        </defs>
        <!-- Bầu trời đêm Tây Hồ & Trăng thanh -->
        <rect width="600" height="320" fill="url(#tq-sky)" />
        <circle cx="480" cy="70" r="50" fill="url(#tq-moon)" />
        <circle cx="480" cy="70" r="24" fill="#fffdfa" />

        <!-- Mặt nước Hồ Tây phẳng lặng -->
        <path d="M0,200 L600,200 L600,320 L0,320 Z" fill="url(#tq-water)" />
        <ellipse cx="300" cy="225" rx="280" ry="8" fill="rgba(245,215,127,0.12)" />
        <ellipse cx="320" cy="245" rx="220" ry="6" fill="rgba(245,215,127,0.08)" />

        <!-- Đảo Kim Ngư & Lũy tre bờ hồ -->
        <path d="M40,210 Q200,185 380,205 Q520,215 580,210 L600,320 L0,320 Z" fill="#1b120c" />
        <path d="M20,195 Q90,150 160,190 Q220,165 290,195" stroke="#233d26" stroke-width="12" stroke-linecap="round" fill="none" opacity="0.6"/>

        <!-- Bảo Tháp Lục Độ Đài Sen (11 tầng 2.5D Isometric) -->
        <g transform="translate(250, 20)">
          <!-- Đế tháp bát giác -->
          <polygon points="50,200 10,215 50,225 90,215" fill="#5c261e" />
          <polygon points="10,215 50,225 50,235 10,225" fill="#3f1a14" />
          <polygon points="50,225 90,215 90,225 50,235" fill="#783429" />

          <!-- Tầng 1 đến tầng 11 tháp đỏ -->
          <polygon points="50,175 20,188 50,196 80,188" fill="#8b3224" />
          <polygon points="20,188 50,196 50,206 20,198" fill="#5c261e" />
          <polygon points="50,196 80,188 80,198 50,206" fill="#a84332" />

          <polygon points="50,155 24,166 50,174 76,166" fill="#8b3224" />
          <polygon points="24,166 50,174 50,182 24,174" fill="#5c261e" />
          <polygon points="50,174 76,166 76,174 50,182" fill="#a84332" />

          <polygon points="50,135 28,145 50,153 72,145" fill="#8b3224" />
          <polygon points="50,117 31,126 50,133 69,126" fill="#8b3224" />
          <polygon points="50,100 34,108 50,115 66,108" fill="#8b3224" />
          <polygon points="50,84 37,91 50,97 63,91" fill="#8b3224" />
          <polygon points="50,70 40,76 50,81 60,76" fill="#8b3224" />
          <polygon points="50,57 42,62 50,66 58,62" fill="#8b3224" />
          <polygon points="50,45 44,49 50,53 56,49" fill="#8b3224" />
          <polygon points="50,34 46,37 50,40 54,37" fill="#8b3224" />
          <!-- Đỉnh tháp búp sen vàng hồ quang -->
          <polygon points="50,20 48,30 50,33 52,30" fill="#fcd37c" />
          <circle cx="50" cy="18" r="4" fill="#ffeaa7" />
          <!-- Hốc tượng Phật màu trắng mỗi tầng -->
          <circle cx="50" cy="188" r="2.5" fill="#fff" />
          <circle cx="50" cy="166" r="2.2" fill="#fff" />
          <circle cx="50" cy="146" r="2" fill="#fff" />
          <circle cx="50" cy="127" r="1.8" fill="#fff" />
        </g>

        <!-- Hoa sen nổi trên mặt nước phía trước -->
        <g transform="translate(130, 240)">
          <ellipse cx="20" cy="10" rx="18" ry="6" fill="#1b4d3e" />
          <path d="M15,8 Q20,0 25,8 Q30,12 20,14 Q10,12 15,8 Z" fill="#e28da4" />
        </g>
        <g transform="translate(420, 250)">
          <ellipse cx="20" cy="10" rx="22" ry="7" fill="#1b4d3e" />
          <path d="M14,6 Q20,-3 26,6 Q32,11 20,13 Q8,11 14,6 Z" fill="#f4a6b8" />
        </g>
      </svg>
    `
  },
  {
    id: "mot-cot",
    name: "Chùa Một Cột",
    location: "Ba Đình, Hà Nội",
    region: "Miền Bắc",
    icon: "🏛️",
    quote: "Đài hoa sen ngát hương giữa lòng Thăng Long",
    history: "Xây dựng năm 1049 thời vua Lý Thái Tông từ giấc mộng thấy Phật Bà Quan Âm ngự trên tòa sen. Kiến trúc đài Liên Hoa đài sen vươn lên từ mặt hồ Linh Chiểu vuông vức.",
    meaning: "Cầu bình an, phước đức trường thọ và cầu tự (con cái thuận hòa).",
    svgArt: `
      <svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="mc-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#2c1a1d" />
            <stop offset="60%" stop-color="#542c2e" />
            <stop offset="100%" stop-color="#7a4437" />
          </linearGradient>
          <linearGradient id="mc-pond" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#16382c" />
            <stop offset="100%" stop-color="#0c211a" />
          </linearGradient>
        </defs>
        <rect width="600" height="320" fill="url(#mc-sky)" />
        <circle cx="300" cy="110" r="140" fill="rgba(245,215,127,0.12)" />

        <!-- Hồ sen Linh Chiểu 2.5D Isometric -->
        <polygon points="300,160 540,215 300,270 60,215" fill="#4d3324" />
        <polygon points="300,165 530,215 300,265 70,215" fill="url(#mc-pond)" stroke="#634533" stroke-width="4" />

        <!-- Trụ đá đơn (Một Cột) vươn lên từ hồ nước -->
        <g transform="translate(260, 110)">
          <!-- Cột đá hình trụ tròn đứng sừng sững -->
          <rect x="30" y="55" width="20" height="75" fill="#7a6e65" />
          <rect x="35" y="55" width="10" height="75" fill="#9e9187" />

          <!-- Hệ thống thanh xà gỗ đỡ đài sen (gông đòn tay) -->
          <polygon points="10,50 40,55 70,50 80,40 40,43 0,40" fill="#8b3a2b" />
          <polygon points="40,55 0,40 10,65 40,55" fill="#5e2419" />
          <polygon points="40,55 80,40 70,65 40,55" fill="#a84836" />

          <!-- Ngôi chùa Liên Hoa Đài bằng gỗ mít (mái cong 4 góc) -->
          <!-- Thân chùa gỗ -->
          <rect x="15" y="15" width="50" height="28" fill="#6d2b1f" />
          <rect x="35" y="15" width="10" height="28" fill="#913b2c" />
          <!-- Khung cửa sổ song tiện -->
          <rect x="25" y="20" width="12" height="15" fill="#2d100b" />
          <rect x="43" y="20" width="12" height="15" fill="#2d100b" />

          <!-- Mái ngói cong 2.5D Isometric -->
          <polygon points="40,-10 -5,16 40,22 85,16" fill="#b84533" />
          <polygon points="-5,16 40,22 40,26 -5,20" fill="#6d2b1f" />
          <polygon points="40,22 85,16 85,20 40,26" fill="#cf533f" />

          <!-- Đỉnh mái hồ lô ngọc -->
          <circle cx="40" cy="-12" r="4" fill="#fcd37c" />
        </g>

        <!-- Hoa sen và lá sen trong hồ Linh Chiểu -->
        <ellipse cx="160" cy="225" rx="18" ry="7" fill="#1b4d3e" />
        <ellipse cx="440" cy="220" rx="20" ry="8" fill="#1b4d3e" />
        <ellipse cx="230" cy="245" rx="24" ry="9" fill="#1b4d3e" />
        <circle cx="165" cy="220" r="4" fill="#e28da4" />
        <circle cx="435" cy="214" r="5" fill="#f4a6b8" />
        <circle cx="235" cy="240" r="6" fill="#e28da4" />
      </svg>
    `
  },
  {
    id: "yen-tu",
    name: "Chùa Đồng Yên Tử",
    location: "Uông Bí, Quảng Ninh",
    region: "Miền Bắc",
    icon: "⛰️",
    quote: "Cội nguồn Thiền phái Trúc Lâm - Non thiêng đất Việt",
    history: "Nơi Phật hoàng Trần Nhân Tông sáng lập Thiền phái Trúc Lâm. Đỉnh chùa Đồng ngự tại độ cao 1.068m, đúc hoàn toàn bằng đồng nguyên khối giữa ngàn mây trắng cuộn bay.",
    meaning: "Rèn luyện ý chí, buông bỏ tham sân si, tìm về bản tâm thanh tịnh.",
    svgArt: `
      <svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="yt-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#0a192f" />
            <stop offset="50%" stop-color="#1e3a5f" />
            <stop offset="100%" stop-color="#3b5978" />
          </linearGradient>
          <linearGradient id="yt-cloud" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="rgba(255,255,255,0.7)" />
            <stop offset="100%" stop-color="rgba(200,220,240,0.1)" />
          </linearGradient>
        </defs>
        <rect width="600" height="320" fill="url(#yt-sky)" />

        <!-- Dãy núi Yên Tử điệp trùng phía xa -->
        <polygon points="0,220 120,110 260,200 380,90 520,180 600,120 600,320 0,320" fill="#132337" opacity="0.7" />
        <polygon points="40,240 180,140 320,230 460,130 600,210 600,320 0,320" fill="#1a2e44" />

        <!-- Biển mây cuồn cuộn quanh đỉnh núi (Sea of clouds) -->
        <ellipse cx="150" cy="190" rx="140" ry="25" fill="url(#yt-cloud)" />
        <ellipse cx="450" cy="180" rx="160" ry="30" fill="url(#yt-cloud)" />
        <ellipse cx="300" cy="220" rx="220" ry="35" fill="url(#yt-cloud)" />

        <!-- Đỉnh núi đá Yên Tử cheo leo -->
        <polygon points="200,320 270,160 360,165 430,320" fill="#2d2d30" />
        <polygon points="270,160 360,165 340,320 290,320" fill="#424246" />

        <!-- Ngôi Chùa Đồng (Đúc nguyên khối bằng đồng vàng đồng cổ) -->
        <g transform="translate(285, 115)">
          <!-- Bệ đá hoa sen đỡ chùa -->
          <polygon points="30,50 5,56 30,62 55,56" fill="#5c5c60" />
          <!-- Thân chùa đồng -->
          <polygon points="30,30 10,36 30,42 50,36" fill="#8c6d3b" />
          <polygon points="10,36 30,42 30,52 10,46" fill="#5a4522" />
          <polygon points="30,42 50,36 50,46 30,52" fill="#b59050" />
          <!-- Mái Chùa Đồng 2 tầng mái cong -->
          <polygon points="30,12 -2,25 30,32 62,25" fill="#c9a25b" />
          <polygon points="30,0 6,14 30,19 54,14" fill="#dfb86c" />
          <circle cx="30" cy="-2" r="3" fill="#ffeaa7" />
        </g>
        
        <!-- Khói mây Trúc Lâm bồng bềnh phía trước -->
        <ellipse cx="290" cy="275" rx="180" ry="35" fill="rgba(255,255,255,0.4)" />
      </svg>
    `
  },
  {
    id: "thien-mu",
    name: "Chùa Thiên Mụ",
    location: "Đồi Hà Khê, Huế",
    region: "Miền Trung",
    icon: "⛩️",
    quote: "Tiếng chuông Thiên Mụ ngân vang dòng Hương Giang",
    history: "Khởi lập năm 1601 bởi chúa Nguyễn Hoàng bên dòng sông Hương thơ mộng. Tháp Phước Duyên hình bát giác 7 tầng cao 21m sừng sững in bóng nước trầm mặc xứ Huế.",
    meaning: "Hóa giải âu lo, cầu cho tâm hồn lắng đọng, thanh thoát nhẹ nhàng.",
    svgArt: `
      <svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="tm-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#3a1c28" />
            <stop offset="60%" stop-color="#6b353f" />
            <stop offset="100%" stop-color="#b86b55" />
          </linearGradient>
          <linearGradient id="tm-river" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#214252" />
            <stop offset="100%" stop-color="#102530" />
          </linearGradient>
        </defs>
        <rect width="600" height="320" fill="url(#tm-sky)" />
        <circle cx="300" cy="130" r="90" fill="rgba(252,211,124,0.18)" />

        <!-- Dòng Sông Hương êm đềm lượn quanh đồi Hà Khê -->
        <path d="M0,210 Q250,170 600,225 L600,320 L0,320 Z" fill="url(#tm-river)" />
        <path d="M0,195 Q220,165 420,210 L600,240" stroke="#fcd37c" stroke-width="2" fill="none" opacity="0.3" />

        <!-- Đồi Hà Khê xanh mát với rặng thông già xứ Huế -->
        <polygon points="120,210 260,175 480,215 320,240" fill="#2d3b2a" />
        <polygon points="200,185 220,135 240,185" fill="#1c2b1a" />
        <polygon points="380,195 400,145 420,195" fill="#1c2b1a" />

        <!-- Tháp Phước Duyên (Bát giác 7 tầng 2.5D Isometric) -->
        <g transform="translate(270, 35)">
          <!-- Tầng 1 -->
          <polygon points="30,160 0,170 30,178 60,170" fill="#a04435" />
          <polygon points="0,170 30,178 30,192 0,184" fill="#6e2d22" />
          <polygon points="30,178 60,170 60,184 30,192" fill="#c55846" />
          <!-- Cửa vòm cuốn tầng 1 -->
          <ellipse cx="30" cy="184" rx="4" ry="6" fill="#2d100b" />

          <!-- Tầng 2 -->
          <polygon points="30,135 3,144 30,151 57,144" fill="#a04435" />
          <polygon points="3,144 30,151 30,161 3,154" fill="#6e2d22" />
          <polygon points="30,151 57,144 57,154 30,161" fill="#c55846" />
          <ellipse cx="30" cy="154" rx="3.5" ry="5" fill="#2d100b" />

          <!-- Tầng 3 -->
          <polygon points="30,112 6,120 30,126 54,120" fill="#a04435" />
          <polygon points="6,120 30,126 30,136 6,130" fill="#6e2d22" />
          <polygon points="30,126 54,120 54,130 30,136" fill="#c55846" />

          <!-- Tầng 4 -->
          <polygon points="30,90 9,97 30,103 51,97" fill="#a04435" />
          <polygon points="9,97 30,103 30,113 9,107" fill="#6e2d22" />
          <polygon points="30,103 51,97 51,107 30,113" fill="#c55846" />

          <!-- Tầng 5 -->
          <polygon points="30,70 12,76 30,81 48,76" fill="#a04435" />
          <polygon points="12,76 30,81 30,90 12,85" fill="#6e2d22" />
          <polygon points="30,81 48,76 48,85 30,90" fill="#c55846" />

          <!-- Tầng 6 -->
          <polygon points="30,52 15,57 30,62 45,57" fill="#a04435" />
          <polygon points="15,57 30,62 30,70 15,65" fill="#6e2d22" />
          <polygon points="30,62 45,57 45,65 30,70" fill="#c55846" />

          <!-- Tầng 7 -->
          <polygon points="30,36 18,40 30,44 42,40" fill="#a04435" />
          <polygon points="18,40 30,44 30,52 18,48" fill="#6e2d22" />
          <polygon points="30,44 42,40 42,48 30,52" fill="#c55846" />

          <!-- Đỉnh tháp hồ lô đồng vàng -->
          <polygon points="30,22 26,34 30,36 34,34" fill="#fcd37c" />
          <circle cx="30" cy="20" r="3" fill="#fff" />
        </g>
      </svg>
    `
  },
  {
    id: "linh-ung",
    name: "Chùa Linh Ứng",
    location: "Sơn Trà, Đà Nẵng",
    region: "Miền Trung",
    icon: "🌊",
    quote: "Tượng Quán Thế Âm tựa núi hướng nhìn Biển Đông",
    history: "Tọa lạc trên bán đảo Sơn Trà nhìn ra đại dương bao la. Nổi tiếng với tượng Bồ Tát Quán Thế Âm cao 67m ngự trên tòa sen thanh tịnh, tay cầm bình cam lộ ban phước lành.",
    meaning: "Cầu che chở sóng gió cuộc đời, cầu may mắn, công việc hanh thông.",
    svgArt: `
      <svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lu-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#0f2027" />
            <stop offset="50%" stop-color="#203a43" />
            <stop offset="100%" stop-color="#2c5364" />
          </linearGradient>
          <linearGradient id="lu-sea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#1f618d" />
            <stop offset="100%" stop-color="#154360" />
          </linearGradient>
        </defs>
        <rect width="600" height="320" fill="url(#lu-sky)" />

        <!-- Biển Đông xanh thẳm & sóng vỗ bán đảo Sơn Trà -->
        <rect x="0" y="190" width="600" height="130" fill="url(#lu-sea)" />
        <path d="M0,220 Q150,210 300,225 Q450,235 600,220" stroke="rgba(255,255,255,0.3)" stroke-width="3" fill="none" />
        <path d="M0,250 Q200,240 400,255 Q500,260 600,248" stroke="rgba(255,255,255,0.2)" stroke-width="2" fill="none" />

        <!-- Mũi đá Sơn Trà vươn ra biển -->
        <polygon points="160,320 280,180 520,240 600,320" fill="#1b2a1a" />
        <polygon points="280,180 380,140 520,240" fill="#2d422a" />

        <!-- Tượng Bồ Tát Quán Thế Âm áo trắng ngự tòa sen 2.5D -->
        <g transform="translate(350, 45)">
          <!-- Vầng hào quang sáng rực -->
          <circle cx="30" cy="30" r="35" fill="rgba(252,211,124,0.25)" />
          <circle cx="30" cy="30" r="20" fill="rgba(255,255,255,0.4)" />

          <!-- Tòa đài sen trắng ngọc ngự tượng -->
          <polygon points="30,120 5,130 30,138 55,130" fill="#d5dbdb" />
          <polygon points="5,130 30,138 30,146 5,138" fill="#a6acaf" />
          <polygon points="30,138 55,130 55,138 30,146" fill="#eaeded" />

          <!-- Thân tượng Bồ Tát áo trắng thanh thoát -->
          <polygon points="30,35 15,120 45,120" fill="#f8f9f9" />
          <polygon points="30,35 15,120 28,122" fill="#d5dbdb" />
          <polygon points="30,35 45,120 32,122" fill="#ffffff" />

          <!-- Bình nước Cam Lộ cầm tay trái -->
          <ellipse cx="23" cy="75" rx="3" ry="7" fill="#fcf3cf" />
          <line x1="23" y1="70" x2="21" y2="60" stroke="#7dcea0" stroke-width="2" />

          <!-- Đầu tượng từ bi hướng nhìn Biển Đông -->
          <circle cx="30" cy="28" r="9" fill="#fdfefe" />
          <!-- Mão Phật Quan Âm -->
          <polygon points="30,14 24,24 36,24" fill="#fcd37c" />
        </g>
      </svg>
    `
  },
  {
    id: "nui-ba-den",
    name: "Chùa Núi Bà Đen",
    location: "Núi Bà Đen, Tây Ninh",
    region: "Miền Nam",
    icon: "🏔️",
    quote: "Nóc nhà Nam Bộ - Cõi thiêng mây vờn Tây Bổ Đà Sơn",
    history: "Ngọn núi cao nhất miền Nam (986m) linh thiêng huyền thoại. Đỉnh núi ngự đại tượng Phật Bà Tây Bổ Đà Sơn bằng đồng đỏ uy nghiêm tọa lạc giữa biển mây trắng bồng bềnh.",
    meaning: "Cầu phước lành, tai qua nạn khỏi, năng lượng tích cực cho cuộc sống.",
    svgArt: `
      <svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="nb-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#1f1124" />
            <stop offset="50%" stop-color="#4d2446" />
            <stop offset="100%" stop-color="#c05c46" />
          </linearGradient>
        </defs>
        <rect width="600" height="320" fill="url(#nb-sky)" />
        <circle cx="300" cy="140" r="120" fill="rgba(252,211,124,0.18)" />

        <!-- Đỉnh núi Bà Đen vươn cao trên mây -->
        <polygon points="100,320 300,120 500,320" fill="#2d1720" />
        <polygon points="300,120 400,200 500,320 360,320" fill="#462534" />

        <!-- Biển mây trắng xóa bồng bềnh Tây Ninh -->
        <ellipse cx="140" cy="240" rx="140" ry="28" fill="rgba(255,255,255,0.7)" />
        <ellipse cx="460" cy="250" rx="150" ry="32" fill="rgba(255,255,255,0.65)" />
        <ellipse cx="300" cy="270" rx="240" ry="38" fill="rgba(255,255,255,0.85)" />

        <!-- Tượng Phật Bà Tây Bổ Đà Sơn bằng đồng đỏ uy nghiêm -->
        <g transform="translate(270, 50)">
          <!-- Hào quang Phật -->
          <circle cx="30" cy="35" r="30" fill="rgba(245,215,127,0.3)" />

          <!-- Tòa sen bằng đồng đỏ trên đỉnh núi -->
          <polygon points="30,85 5,95 30,103 55,95" fill="#8c3826" />
          <polygon points="5,95 30,103 30,111 5,103" fill="#5c2418" />
          <polygon points="30,103 55,95 55,103 30,111" fill="#b84b33" />

          <!-- Tượng đồng đứng uy nghi ngắm giang sơn -->
          <polygon points="30,20 18,85 42,85" fill="#a8432c" />
          <polygon points="30,20 18,85 30,88" fill="#7d301f" />
          <polygon points="30,20 42,85 30,88" fill="#c9563c" />
          <!-- Vương miện và gậy như ý -->
          <circle cx="30" cy="18" r="7" fill="#df7a60" />
          <polygon points="30,8 26,15 34,15" fill="#fcd37c" />
        </g>
      </svg>
    `
  },
  {
    id: "vinh-trang",
    name: "Chùa Vĩnh Tràng",
    location: "Mỹ Tho, Tiền Giang",
    region: "Miền Nam",
    icon: "🏯",
    quote: "Cổ tự tráng lệ miền sông nước Cửu Long",
    history: "Ngôi chùa lớn nhất Tiền Giang xây từ đầu thế kỷ 19, giao thoa tráng lệ giữa kiến trúc cung đình Huế, Pháp, La Mã và Khmer. Nổi tiếng với tượng Phật Di Lặc hoan hỷ khổng lồ.",
    meaning: "Cầu tài lộc chân chính, hoan hỷ, an vui như nụ cười Phật Di Lặc.",
    svgArt: `
      <svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="vt-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#141c2b" />
            <stop offset="50%" stop-color="#2a3f5f" />
            <stop offset="100%" stop-color="#604b39" />
          </linearGradient>
        </defs>
        <rect width="600" height="320" fill="url(#vt-sky)" />
        <circle cx="300" cy="120" r="100" fill="rgba(252,211,124,0.15)" />

        <!-- Sân chùa Nam Bộ & Vườn cây ăn trái Tiền Giang -->
        <polygon points="300,180 580,230 300,285 20,230" fill="#3d2a1e" />
        <polygon points="300,185 560,230 300,280 40,230" fill="#523929" />

        <!-- Kiến trúc cổ lầu giao thoa Á - Âu của Chùa Vĩnh Tràng -->
        <g transform="translate(180, 70)">
          <!-- Khối kiến trúc chính màu vàng hoàng gia -->
          <polygon points="120,40 20,65 120,80 220,65" fill="#c49a45" />
          <polygon points="20,65 120,80 120,135 20,120" fill="#8e6c27" />
          <polygon points="120,80 220,65 220,120 120,135" fill="#deb458" />

          <!-- Hệ thống vòm cuốn La Mã kết hợp phù điêu rồng phượng -->
          <path d="M45,95 Q60,78 75,95 L75,125 L45,120 Z" fill="#2d1c0c" />
          <path d="M105,102 Q120,85 135,102 L135,130 L105,128 Z" fill="#2d1c0c" />
          <path d="M165,95 Q180,78 195,95 L195,120 L165,125 Z" fill="#2d1c0c" />

          <!-- Mái ngói cong 2.5D nhiều tầng vút cong kiểu Nam Bộ -->
          <polygon points="120,15 5,42 120,55 235,42" fill="#b84533" />
          <polygon points="120,-5 25,22 120,32 215,22" fill="#d45743" />
          <circle cx="120" cy="-8" r="5" fill="#fcd37c" />
        </g>

        <!-- Hàng dừa nước và cau kiểng Nam Bộ hai bên sân -->
        <g transform="translate(60, 160)">
          <line x1="20" y1="90" x2="20" y2="20" stroke="#4a3728" stroke-width="5" />
          <circle cx="20" cy="15" r="22" fill="#1b4d2e" opacity="0.8" />
        </g>
        <g transform="translate(480, 160)">
          <line x1="20" y1="90" x2="20" y2="20" stroke="#4a3728" stroke-width="5" />
          <circle cx="20" cy="15" r="24" fill="#1b4d2e" opacity="0.8" />
        </g>
      </svg>
    `
  }
];

// ====================================================================
// 2. DỮ LIỆU KINH PHÁP CÚ (DHAMMAPADA)
// ====================================================================
const DHAMMAPADA_CARDS = [
  {
    number: "Kinh Pháp Cú - Kệ Số 1",
    verse: "Ý dẫn đầu các pháp,\nÝ làm chủ, ý tạo;\nNếu với ý ô nhiễm,\nNói năng hay hành động,\nKhổ não bước theo sau,\nNhư xe chân vật kéo.",
    meaning: "Mọi buồn vui, sướng khổ trong cuộc đời đều bắt nguồn từ suy nghĩ (tâm ý) của chính bạn. Giữ tâm trong sạch thì khổ đau không còn chỗ nương tựa.",
    advice: "Hôm nay, hãy để ý từng ý nghĩ khởi lên. Thay vì phán xét hay giận dữ, hãy gửi đi một niệm bao dung."
  },
  {
    number: "Kinh Pháp Cú - Kệ Số 2",
    verse: "Ý dẫn đầu các pháp,\nÝ làm chủ, ý tạo;\nNếu với ý thanh tịnh,\nNói năng hay hành động,\nAn lạc bước theo sau,\nNhư bóng không rời hình.",
    meaning: "Khi tâm bạn an định và từ ái, từng lời nói và việc làm sẽ lan tỏa niềm vui đến mọi người, và hạnh phúc sẽ luôn đi theo bạn.",
    advice: "Hãy mỉm cười và nói một lời cảm ơn chân thành với người đầu tiên bạn gặp hôm nay."
  },
  {
    number: "Kinh Pháp Cú - Kệ Số 5",
    verse: "Hận thù diệt hận thù,\nĐời này không thể có;\nTừ bi diệt hận thù,\nLà định luật ngàn thu.",
    meaning: "Oán thù không thể hóa giải bằng oán hận hay tranh cãi. Chỉ có lòng bao dung, thấu hiểu mới dập tắt được ngọn lửa hận thù.",
    advice: "Nếu ai đó làm bạn phật ý, hãy im lặng hít thở thật sâu trong 3 nhịp và tha thứ cho họ trong tâm."
  },
  {
    number: "Kinh Pháp Cú - Kệ Số 103",
    verse: "Dầu tại bãi chiến trường,\nThắng ngàn muôn quân địch,\nChẳng bằng tự thắng mình,\nChiến công ấy oanh liệt nhất.",
    meaning: "Chiến thắng vĩ đại nhất của đời người không phải là hơn thua ngoài xã hội, mà là làm chủ được thói quen xấu và cơn nóng giận của bản thân.",
    advice: "Hôm nay, hãy vượt qua sự lười biếng hoặc một thói quen chưa tốt mà bạn muốn từ bỏ."
  },
  {
    number: "Kinh Pháp Cú - Kệ Số 204",
    verse: "Không bệnh - lợi tối thượng,\nBiết đủ - tiền tối cao,\nThành tín - bạn tối thượng,\nNiết-bàn - lạc tối cao.",
    meaning: "Sức khỏe là tài sản lớn nhất, và biết đủ (tri túc) chính là sự giàu có đích thực. Người biết đủ thì sống ở đâu cũng an vui.",
    advice: "Hãy biết ơn chén cơm, giọt nước và mái nhà bạn đang có. Đơn giản hóa cuộc sống để tâm hồn được nhẹ nhàng."
  },
  {
    number: "Kinh Pháp Cú - Kệ Số 223",
    verse: "Lấy không giận thắng giận,\nLấy thiện thắng bất thiện;\nLấy thí thắng xan tham,\nLấy chân thật thắng dối.",
    meaning: "Ứng xử mềm mỏng hóa giải sự hung dữ; sự rộng lượng làm tan biến lòng keo kiệt; sự trung thực đẩy lùi thói dối gian.",
    advice: "Khi đối mặt với sự bất công, hãy giữ sự bình tĩnh và hành xử bằng đạo đức, không bị cuốn vào năng lượng xấu."
  }
];

const SAMPLE_WISHES = [
  "Cầu chúc cha mẹ hai bên mạnh khỏe, sống đời bình an cùng con cháu 🪷",
  "Nguyện cho gia đình luôn hòa thuận, tai qua nạn khỏi, tâm an trí sáng ✨",
  "Cầu cho thế giới hòa bình, mưa thuận gió hòa, không còn đói nghèo 🕊️",
  "Nguyện buông xả hết muộn phiền quá khứ, sống trọn vẹn từng phút giây hiện tại 🍃",
  "Cầu cho việc học hành, thi cử của con trẻ được hanh thông thuận lợi 📜",
  "Nguyện hồi hướng phước lành này cho cửu huyền thất tổ và muôn loài chúng sinh 🕯️"
];

// ====================================================================
// 3. BỘ MÃ HÓA ÂM THANH PHẬT GIÁO (WEB AUDIO API TỐI ƯU CAO)
// ====================================================================
class TempleAudioEngine {
  constructor() {
    this.ctx = null;
    this.ambientPlaying = false;
    this.ambientSource = null;
    this.ambientGain = null;
    this.idleTimer = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }
    this.resetIdleTimer();
  }

  resetIdleTimer() {
    if (this.idleTimer) clearTimeout(this.idleTimer);
    if (!this.ambientPlaying) {
      this.idleTimer = setTimeout(() => {
        if (this.ctx && this.ctx.state === "running" && !this.ambientPlaying) {
          this.ctx.suspend();
        }
      }, 30000);
    }
  }

  playMo() {
    this.init();
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    filter.type = "bandpass";
    filter.frequency.setValueAtTime(480, now);
    filter.Q.setValueAtTime(6.0, now);

    osc.type = "triangle";
    osc.frequency.setValueAtTime(650, now);
    osc.frequency.exponentialRampToValueAtTime(320, now + 0.08);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.85, now + 0.004);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.18);

    osc.onended = () => {
      osc.disconnect();
      filter.disconnect();
      gain.disconnect();
    };

    const clickOsc = this.ctx.createOscillator();
    const clickGain = this.ctx.createGain();
    clickOsc.type = "sine";
    clickOsc.frequency.setValueAtTime(1100, now);
    clickOsc.frequency.exponentialRampToValueAtTime(150, now + 0.03);

    clickGain.gain.setValueAtTime(0.35, now);
    clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

    clickOsc.connect(clickGain);
    clickGain.connect(this.ctx.destination);

    clickOsc.start(now);
    clickOsc.stop(now + 0.05);

    clickOsc.onended = () => {
      clickOsc.disconnect();
      clickGain.disconnect();
    };
  }

  // Tiếng gõ mõ đệm êm dịu của các đồng tu trong đạo tràng
  playSoftMo() {
    if (!this.ctx || this.ctx.state !== "running") return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    filter.type = "bandpass";
    filter.frequency.setValueAtTime(450, now);
    filter.Q.setValueAtTime(5.0, now);

    osc.type = "triangle";
    osc.frequency.setValueAtTime(580, now);
    osc.frequency.exponentialRampToValueAtTime(300, now + 0.07);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.18, now + 0.004);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.14);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.16);

    osc.onended = () => {
      osc.disconnect();
      filter.disconnect();
      gain.disconnect();
    };
  }

  playBell() {
    this.init();
    const now = this.ctx.currentTime;
    const duration = 8.5;

    const harmonics = [
      { freq: 174, gain: 0.55, decay: 8.0 },
      { freq: 348, gain: 0.40, decay: 6.5 },
      { freq: 522, gain: 0.30, decay: 5.0 },
      { freq: 790, gain: 0.20, decay: 3.5 },
      { freq: 1220, gain: 0.12, decay: 2.2 }
    ];

    harmonics.forEach(h => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(h.freq, now);
      osc.frequency.linearRampToValueAtTime(h.freq - 1.2, now + duration);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(h.gain, now + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + h.decay);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + h.decay + 0.1);

      osc.onended = () => {
        osc.disconnect();
        gain.disconnect();
      };
    });

    const strike = this.ctx.createOscillator();
    const strikeGain = this.ctx.createGain();
    strike.type = "triangle";
    strike.frequency.setValueAtTime(95, now);
    strike.frequency.exponentialRampToValueAtTime(40, now + 0.2);

    strikeGain.gain.setValueAtTime(0.6, now);
    strikeGain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    strike.connect(strikeGain);
    strikeGain.connect(this.ctx.destination);

    strike.start(now);
    strike.stop(now + 0.3);

    strike.onended = () => {
      strike.disconnect();
      strikeGain.disconnect();
    };
  }

  toggleAmbient() {
    this.init();
    if (this.ambientPlaying) {
      if (this.ambientGain) {
        this.ambientGain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.8);
        setTimeout(() => {
          if (this.ambientSource) {
            this.ambientSource.stop();
            this.ambientSource.disconnect();
            this.ambientSource = null;
          }
          this.ambientPlaying = false;
        }, 800);
      }
      return false;
    } else {
      this.startAmbient();
      this.ambientPlaying = true;
      return true;
    }
  }

  startAmbient() {
    const bufferSize = 2 * this.ctx.sampleRate;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    
    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      output[i] = (lastOut + 0.02 * white) / 1.02;
      lastOut = output[i];
      output[i] *= 3.0;
    }

    this.ambientSource = this.ctx.createBufferSource();
    this.ambientSource.buffer = noiseBuffer;
    this.ambientSource.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(420, this.ctx.currentTime);

    this.ambientGain = this.ctx.createGain();
    this.ambientGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
    this.ambientGain.gain.linearRampToValueAtTime(0.15, this.ctx.currentTime + 1.2);

    this.ambientSource.connect(filter);
    filter.connect(this.ambientGain);
    this.ambientGain.connect(this.ctx.destination);

    this.ambientSource.start();
  }
}

// ====================================================================
// 4. QUẢN LÝ DỮ LIỆU & ZERO-PII
// ====================================================================
const STORAGE_KEY = "cua_thien_an_lac_data";

const DHARMA_FIRST_NAMES = [
  "An Nhiên", "Thiện Tâm", "Tuệ Chi", "Bồ Đề", "Phúc Điền", 
  "Minh Triết", "Tĩnh Không", "Chân Như", "Diệu Âm", "Vạn Hạnh", 
  "Từ Bi", "Thanh Tịnh", "Hỷ Lạc", "Trí Tuệ"
];

const SECRET_WORDS = [
  "sen", "tam", "an", "tue", "tri", "lac", "tinh", "huong", 
  "ngoc", "phuc", "duc", "thien", "hoa", "chieu"
];

function generateDharmaName() {
  const name = DHARMA_FIRST_NAMES[Math.floor(Math.random() * DHARMA_FIRST_NAMES.length)];
  const num = Math.floor(100 + Math.random() * 900);
  return `${name} #${num}`;
}

function generatePasscode() {
  const chosen = [];
  for (let i = 0; i < 6; i++) {
    chosen.push(SECRET_WORDS[Math.floor(Math.random() * SECRET_WORDS.length)]);
  }
  return chosen.join("-");
}

class AppState {
  constructor() {
    this.loadState();
  }

  loadState() {
    const defaultData = {
      dharmaName: generateDharmaName(),
      passcode: generatePasscode(),
      activeTempleId: "tran-quoc",
      moCount: 0,
      bellCount: 0,
      malaCount: 0,
      streakDays: 1,
      lastActiveDate: new Date().toISOString().split("T")[0],
      customWishes: [],
      dailyQuests: { q1: false, q2: false, q3: false }
    };

    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      this.data = saved ? { ...defaultData, ...JSON.parse(saved) } : defaultData;
      
      const today = new Date().toISOString().split("T")[0];
      if (this.data.lastActiveDate !== today) {
        this.data.lastActiveDate = today;
        this.data.streakDays = (this.data.streakDays || 1) + 1;
        this.data.dailyQuests = { q1: false, q2: false, q3: false };
        this.save();
      }
    } catch (e) {
      this.data = defaultData;
    }
  }

  save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
    } catch (e) {}
  }
}

// Bộ lọc PII
function sanitizeAndCheckPII(text) {
  const cleaned = text.replace(/[\x00-\x1F\x7F]/g, "").trim();

  const phoneRegex = /(\+84|0)(3[2-9]|5[689]|7[06-9]|8[1-689]|9[0-46-9])[0-9]{7}/g;
  if (phoneRegex.test(cleaned.replace(/[\s.-]+/g, ''))) {
    return { safe: false, reason: "Phát hiện số điện thoại! Để bảo vệ quyền riêng tư, vui lòng không chia sẻ SĐT." };
  }

  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
  if (emailRegex.test(cleaned)) {
    return { safe: false, reason: "Phát hiện địa chỉ email! Vui lòng không chia sẻ thông tin cá nhân." };
  }

  const idRegex = /\b\d{9,12}\b/g;
  if (idRegex.test(cleaned.replace(/[\s.-]+/g, ''))) {
    return { safe: false, reason: "Phát hiện dãy số định danh cá nhân (CCCD/CMND). Vui lòng xóa trước khi gửi." };
  }

  return { safe: true, cleaned: cleaned };
}

// ====================================================================
// 5. KHỞI TẠO ỨNG DỤNG VÀ QUẢN LÝ GIAO DIỆN
// ====================================================================
document.addEventListener("DOMContentLoaded", () => {
  const state = new AppState();
  const audio = new TempleAudioEngine();

  // Profile elements
  const userDharmaEl = document.getElementById("user-dharma-name");
  const modalPasscodeEl = document.getElementById("modal-passcode");
  const inputCustomName = document.getElementById("input-custom-name");
  const btnSaveCustomName = document.getElementById("btn-save-custom-name");
  const nameError = document.getElementById("name-error");

  // Inline User Name (Hiện ngay trên trang chính)
  const inlineUserName = document.getElementById("inline-user-name");
  const btnSaveInlineName = document.getElementById("btn-save-inline-name");
  const btnDiceName = document.getElementById("btn-dice-name");

  function renderProfile() {
    if (userDharmaEl) userDharmaEl.textContent = state.data.dharmaName;
    if (modalPasscodeEl) modalPasscodeEl.textContent = state.data.passcode;
    if (inputCustomName) inputCustomName.value = state.data.dharmaName;
    if (inlineUserName) inlineUserName.value = state.data.dharmaName;
    updateUserAvatarInSangha();
  }
  renderProfile();

  // Điều hướng Tabs
  const navTabs = document.querySelectorAll(".nav-tab");
  const tabContents = document.querySelectorAll(".tab-content");

  function switchTab(tabKey) {
    const targetId = `tab-${tabKey}`;
    navTabs.forEach(t => t.classList.toggle("active", t.dataset.tab === tabKey));
    tabContents.forEach(c => c.classList.toggle("active", c.id === targetId));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  navTabs.forEach(tab => {
    tab.addEventListener("click", () => switchTab(tab.dataset.tab));
  });

  const btnOpenMapTab = document.getElementById("btn-open-map-tab");
  if (btnOpenMapTab) {
    btnOpenMapTab.addEventListener("click", () => switchTab("danh-lam"));
  }

  // Ambient sound toggle
  const btnAmbient = document.getElementById("btn-ambient");
  const ambientIcon = document.getElementById("ambient-icon");
  if (btnAmbient) {
    btnAmbient.addEventListener("click", () => {
      const isPlaying = audio.toggleAmbient();
      ambientIcon.textContent = isPlaying ? "🔊" : "🍃";
      btnAmbient.style.borderColor = isPlaying ? "var(--accent-gold)" : "var(--border-color)";
    });
  }

  function triggerHaptic(duration = 20) {
    if ("vibrate" in navigator && typeof navigator.vibrate === "function") {
      try { navigator.vibrate(duration); } catch (e) {}
    }
  }

  // ====================================================================
  // 6. QUẢN LÝ CHỌN CHÙA & CẬP NHẬT ĐIỆN THỜ 2.5D (CORE FEATURE)
  // ====================================================================
  const activeTempleName = document.getElementById("active-temple-name");
  const activeTempleQuote = document.getElementById("active-temple-quote");
  const templeScenicBackdrop = document.getElementById("temple-scenic-backdrop");
  const templeQuickChips = document.getElementById("temple-quick-chips");
  const templeListEl = document.getElementById("temple-list");
  const templePickerContainer = document.getElementById("temple-picker-container");
  const modalTemples = document.getElementById("modal-temples");
  const btnQuickChange = document.getElementById("btn-quick-change-temple");
  const btnCloseTemples = document.getElementById("btn-close-temples");

  let currentRegionFilter = "all";

  // Hàm chuyển chùa chính thức
  function setActiveTemple(templeId, notify = false) {
    const temple = TEMPLES_DATA.find(t => t.id === templeId) || TEMPLES_DATA[0];
    state.data.activeTempleId = temple.id;

    // 1. Cập nhật Banner thông tin
    if (activeTempleName) activeTempleName.textContent = `${temple.name} (${temple.location.split(',')[1]?.trim() || temple.location})`;
    if (activeTempleQuote) activeTempleQuote.textContent = `"${temple.quote}"`;

    // 2. Cập nhật bức họa 2.5D Isometric phía sau bàn thờ Tam Bảo
    if (templeScenicBackdrop) {
      templeScenicBackdrop.innerHTML = temple.svgArt;
    }

    state.save();

    // 3. Render lại danh sách để highlight đúng chùa đang chọn
    renderQuickChips();
    renderTemplesCatalog();
    renderTempleModalPicker();

    if (notify) {
      triggerHaptic(30);
      audio.playBell();
    }
  }

  // Render dải chọn chùa nhanh 1-chạm (Quick Chips)
  function renderQuickChips() {
    if (!templeQuickChips) return;
    templeQuickChips.innerHTML = "";

    TEMPLES_DATA.forEach(t => {
      const isCurrent = t.id === state.data.activeTempleId;
      const chip = document.createElement("button");
      chip.className = `temple-chip ${isCurrent ? 'active' : ''}`;
      chip.innerHTML = `<span>${t.icon}</span> <span>${t.name}</span>`;
      chip.addEventListener("click", () => {
        setActiveTemple(t.id, true);
      });
      templeQuickChips.appendChild(chip);
    });
  }

  // Render danh sách 2.5D trong Tab "Bản Đồ 3 Miền"
  function renderTemplesCatalog() {
    if (!templeListEl) return;
    templeListEl.innerHTML = "";

    const filtered = TEMPLES_DATA.filter(t => {
      if (currentRegionFilter === "all") return true;
      if (currentRegionFilter === "bac") return t.region === "Miền Bắc";
      if (currentRegionFilter === "trung") return t.region === "Miền Trung";
      if (currentRegionFilter === "nam") return t.region === "Miền Nam";
      return true;
    });

    filtered.forEach(t => {
      const isCurrent = t.id === state.data.activeTempleId;
      const card = document.createElement("div");
      card.className = `temple-item-card ${isCurrent ? 'active' : ''}`;

      card.innerHTML = `
        <div class="temple-art-canvas">
          <span class="temple-region-tag">${t.region}</span>
          ${t.svgArt}
        </div>
        <div class="temple-body">
          <div>
            <h3>${t.name}</h3>
            <p class="temple-location">📍 ${t.location}</p>
            <p class="temple-desc">${t.history}</p>
            <div class="temple-meaning-box">
              <strong>✨ Ý nghĩa tâm linh:</strong> ${t.meaning}
            </div>
          </div>
          <button class="btn-visit-temple">
            ${isCurrent ? '✓ Đang Chiêm Bái' : 'Đến Ngôi Chùa Này Chiêm Bái 🪷'}
          </button>
        </div>
      `;

      card.querySelector(".btn-visit-temple").addEventListener("click", () => {
        setActiveTemple(t.id, true);
        switchTab("le-bai");
      });

      templeListEl.appendChild(card);
    });
  }

  // Filter vùng miền Bắc - Trung - Nam
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentRegionFilter = btn.dataset.region;
      renderTemplesCatalog();
    });
  });

  // Render trong Modal Chọn Chùa
  function renderTempleModalPicker() {
    if (!templePickerContainer) return;
    templePickerContainer.innerHTML = "";

    TEMPLES_DATA.forEach(t => {
      const isCurrent = t.id === state.data.activeTempleId;
      const row = document.createElement("div");
      row.className = `picker-temple-row ${isCurrent ? 'active' : ''}`;
      row.innerHTML = `
        <span class="picker-icon">${t.icon}</span>
        <div class="picker-info">
          <h4>${t.name} ${isCurrent ? '✓' : ''}</h4>
          <p>${t.location} • ${t.region}</p>
        </div>
      `;
      row.addEventListener("click", () => {
        setActiveTemple(t.id, true);
        if (modalTemples) modalTemples.classList.add("hidden");
      });
      templePickerContainer.appendChild(row);
    });
  }

  if (btnQuickChange) btnQuickChange.addEventListener("click", () => modalTemples.classList.remove("hidden"));
  if (btnCloseTemples) btnCloseTemples.addEventListener("click", () => modalTemples.classList.add("hidden"));
  if (modalTemples) {
    modalTemples.addEventListener("click", (e) => {
      if (e.target === modalTemples) modalTemples.classList.add("hidden");
    });
  }

  // Khởi động hiển thị ngôi chùa đầu tiên
  setActiveTemple(state.data.activeTempleId, false);

  // ==========================================
  // RITUAL: GÕ MÕ
  // ==========================================
  const moButton = document.getElementById("mo-button");
  const moWave = document.getElementById("mo-wave");
  const moCountBadge = document.getElementById("mo-count-badge");
  const chantText = document.getElementById("chant-text");
  const btnAutoMo = document.getElementById("btn-auto-mo");
  const btnResetMo = document.getElementById("btn-reset-mo");
  const malaFill = document.getElementById("mala-fill");
  const malaProgressText = document.getElementById("mala-progress-text");
  const statChants = document.getElementById("stat-chants");

  const CHANT_PHRASES = [
    "Nam Mô A Di Đà Phật",
    "Nam Mô Bổn Sư Thích Ca Mâu Ni Phật",
    "Nam Mô Quán Thế Âm Bồ Tát",
    "Tâm An Vạn Sự An",
    "Thanh Tịnh & Từ Bi"
  ];

  let lastMoTime = 0;
  function strikeMo() {
    const now = Date.now();
    if (now - lastMoTime < 110) return;
    lastMoTime = now;

    audio.playMo();
    triggerHaptic(18);
    triggerUserChant();

    if (moWave) {
      moWave.classList.remove("active");
      void moWave.offsetWidth;
      moWave.classList.add("active");
    }

    state.data.moCount += 1;
    state.data.malaCount = (state.data.malaCount + 1) % 109;
    if (state.data.malaCount === 0) state.data.malaCount = 1;

    if (moCountBadge) moCountBadge.textContent = `${state.data.moCount} lần`;
    if (statChants) statChants.textContent = state.data.moCount;
    if (malaProgressText) malaProgressText.textContent = `${state.data.malaCount} / 108`;
    if (malaFill) malaFill.style.width = `${(state.data.malaCount / 108) * 100}%`;

    if (state.data.moCount % 4 === 0 && chantText) {
      chantText.textContent = `"${CHANT_PHRASES[Math.floor(Math.random() * CHANT_PHRASES.length)]}"`;
    }

    state.save();
  }

  if (moButton) moButton.addEventListener("click", strikeMo);

  let autoMoInterval = null;
  if (btnAutoMo) {
    btnAutoMo.addEventListener("click", () => {
      if (autoMoInterval) {
        clearInterval(autoMoInterval);
        autoMoInterval = null;
        btnAutoMo.textContent = "🔄 Tự động gõ (1.5s)";
        btnAutoMo.style.background = "var(--bg-surface)";
      } else {
        strikeMo();
        autoMoInterval = setInterval(strikeMo, 1500);
        btnAutoMo.textContent = "⏹️ Dừng tự động";
        btnAutoMo.style.background = "var(--accent-gold)";
        btnAutoMo.style.color = "var(--bg-primary)";
      }
    });
  }

  if (btnResetMo) {
    btnResetMo.addEventListener("click", () => {
      state.data.moCount = 0;
      state.data.malaCount = 0;
      if (moCountBadge) moCountBadge.textContent = "0 lần";
      if (malaProgressText) malaProgressText.textContent = "0 / 108";
      if (malaFill) malaFill.style.width = "0%";
      if (statChants) statChants.textContent = "0";
      state.save();
    });
  }

  window.addEventListener("keydown", (e) => {
    if (e.target.tagName === "TEXTAREA" || e.target.tagName === "INPUT") return;
    if (e.code === "Space") {
      e.preventDefault();
      strikeMo();
    } else if (e.code === "KeyC") {
      e.preventDefault();
      strikeBell();
    }
  });

  // ==========================================
  // RITUAL: THỈNH CHUÔNG
  // ==========================================
  const bellButton = document.getElementById("bell-button");
  const bellWave = document.getElementById("bell-wave");
  const bellCountBadge = document.getElementById("bell-count-badge");
  const bellStatus = document.getElementById("bell-status");
  const statBells = document.getElementById("stat-bells");

  let lastBellTime = 0;
  function strikeBell() {
    const now = Date.now();
    if (now - lastBellTime < 1200) return;
    lastBellTime = now;

    audio.playBell();
    triggerHaptic(40);

    if (bellWave) {
      bellWave.classList.remove("active");
      void bellWave.offsetWidth;
      bellWave.classList.add("active");
    }

    if (bellButton) {
      bellButton.classList.add("ringing");
      setTimeout(() => bellButton.classList.remove("ringing"), 1000);
    }

    state.data.bellCount += 1;
    if (bellCountBadge) bellCountBadge.textContent = `${state.data.bellCount} hồi`;
    if (statBells) statBells.textContent = state.data.bellCount;

    if (bellStatus) {
      bellStatus.textContent = "Tiếng chuông ngân vang... Hãy thở sâu và buông bỏ";
      setTimeout(() => {
        if (bellStatus) bellStatus.textContent = "Chuông ngân xoa dịu muôn vạn tâm hồn";
      }, 5000);
    }

    state.save();
  }

  if (bellButton) bellButton.addEventListener("click", strikeBell);

  // ==========================================
  // RITUAL: CANVAS SMOKE
  // ==========================================
  const smokeCanvas = document.getElementById("smoke-canvas");
  const smokeCtx = smokeCanvas ? smokeCanvas.getContext("2d") : null;
  const sticksContainer = document.getElementById("incense-sticks");
  const btnLightIncense = document.getElementById("btn-light-incense");
  const btnLight3Incense = document.getElementById("btn-light-3-incense");
  const incenseTimer = document.getElementById("incense-timer");

  let smokeParticles = [];
  let isBurning = true;
  let animFrameId = null;

  function addIncenseSticks(count) {
    if (!sticksContainer) return;
    sticksContainer.innerHTML = "";
    for (let i = 0; i < count; i++) {
      const stick = document.createElement("div");
      stick.className = "incense-stick";
      sticksContainer.appendChild(stick);
    }
    isBurning = true;
  }

  if (btnLightIncense) {
    btnLightIncense.addEventListener("click", () => {
      addIncenseSticks(1);
      if (incenseTimer) incenseTimer.textContent = "🔥 Đang thắp 1 nén Tâm Hương - Lòng thành kính hướng về Tam Bảo";
    });
  }

  if (btnLight3Incense) {
    btnLight3Incense.addEventListener("click", () => {
      addIncenseSticks(3);
      if (incenseTimer) incenseTimer.textContent = "✨ Đang thắp 3 nén hương: Giới Hương, Định Hương, Tuệ Hương";
    });
  }

  function animateSmoke() {
    if (document.hidden) {
      animFrameId = null;
      return;
    }

    if (!smokeCtx || !smokeCanvas) return;
    smokeCtx.clearRect(0, 0, smokeCanvas.width, smokeCanvas.height);

    if (isBurning && Math.random() < 0.45 && smokeParticles.length < 25) {
      smokeParticles.push({
        x: smokeCanvas.width / 2 + (Math.random() * 16 - 8),
        y: smokeCanvas.height - 10,
        radius: 2 + Math.random() * 2.5,
        alpha: 0.6,
        vx: (Math.random() - 0.5) * 0.6,
        vy: -1.0 - Math.random() * 0.8
      });
    }

    for (let i = smokeParticles.length - 1; i >= 0; i--) {
      const p = smokeParticles[i];
      p.x += p.vx + Math.sin(p.y * 0.05) * 0.4;
      p.y += p.vy;
      p.radius += 0.12;
      p.alpha -= 0.008;

      if (p.alpha <= 0 || p.y <= 0) {
        smokeParticles.splice(i, 1);
        continue;
      }

      smokeCtx.beginPath();
      smokeCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      smokeCtx.fillStyle = `rgba(230, 220, 210, ${p.alpha})`;
      smokeCtx.fill();
    }

    animFrameId = requestAnimationFrame(animateSmoke);
  }

  addIncenseSticks(1);
  animFrameId = requestAnimationFrame(animateSmoke);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      if (animFrameId) {
        cancelAnimationFrame(animFrameId);
        animFrameId = null;
      }
      if (autoMoInterval) {
        clearInterval(autoMoInterval);
        autoMoInterval = null;
        if (btnAutoMo) btnAutoMo.textContent = "🔄 Tự động gõ (1.5s)";
      }
    } else {
      if (!animFrameId) {
        animFrameId = requestAnimationFrame(animateSmoke);
      }
    }
  });

  // ==========================================
  // RÚT QUẺ PHÁP CÚ
  // ==========================================
  const btnDrawCard = document.getElementById("btn-draw-card");
  const cardResultBox = document.getElementById("card-result-box");
  const cardNum = document.getElementById("card-num");
  const cardVerse = document.getElementById("card-verse");
  const cardMeaning = document.getElementById("card-meaning");
  const cardAdvice = document.getElementById("card-advice");

  if (btnDrawCard) {
    btnDrawCard.addEventListener("click", () => {
      btnDrawCard.classList.add("shaking");
      btnDrawCard.disabled = true;

      setTimeout(() => {
        btnDrawCard.classList.remove("shaking");
        btnDrawCard.disabled = false;

        const card = DHAMMAPADA_CARDS[Math.floor(Math.random() * DHAMMAPADA_CARDS.length)];
        if (cardNum) cardNum.textContent = card.number;
        if (cardVerse) cardVerse.textContent = card.verse;
        if (cardMeaning) cardMeaning.textContent = card.meaning;
        if (cardAdvice) cardAdvice.textContent = `💡 ${card.advice}`;

        if (cardResultBox) {
          cardResultBox.classList.remove("hidden");
          cardResultBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
        triggerHaptic(25);
      }, 650);
    });
  }

  // ==========================================
  // THẢ HOA ĐĂNG
  // ==========================================
  const wishTextarea = document.getElementById("wish-textarea");
  const wishCharCount = document.getElementById("wish-char-count");
  const btnSendWish = document.getElementById("btn-send-wish");
  const wishError = document.getElementById("wish-error");
  const riverSurface = document.getElementById("river-surface");

  if (wishTextarea && wishCharCount) {
    wishTextarea.addEventListener("input", () => {
      wishCharCount.textContent = `${wishTextarea.value.length}/150`;
      if (wishError) wishError.classList.add("hidden");
    });
  }

  function addLanternToRiver(text, isUser = false) {
    if (!riverSurface) return;

    if (riverSurface.children.length > 12) {
      riverSurface.removeChild(riverSurface.firstElementChild);
    }

    const lantern = document.createElement("div");
    lantern.className = "floating-lantern";
    const topPercent = 10 + Math.random() * 65;
    const duration = 15 + Math.random() * 8;
    const delay = Math.random() * 3;

    lantern.style.top = `${topPercent}%`;
    lantern.style.animationDuration = `${duration}s`;
    lantern.style.animationDelay = `-${delay}s`;

    if (isUser) {
      lantern.style.borderColor = "var(--accent-gold)";
      lantern.style.background = "rgba(45, 25, 15, 0.95)";
    }

    const flame = document.createElement("span");
    flame.className = "lantern-flame";
    flame.textContent = "🪷";

    const content = document.createElement("span");
    content.textContent = text;

    lantern.appendChild(flame);
    lantern.appendChild(content);
    riverSurface.appendChild(lantern);
  }

  SAMPLE_WISHES.forEach(w => addLanternToRiver(w));

  if (btnSendWish && wishTextarea) {
    btnSendWish.addEventListener("click", () => {
      const rawText = wishTextarea.value;
      if (!rawText.trim()) {
        if (wishError) {
          wishError.textContent = "Vui lòng viết đôi dòng ước nguyện lành trước khi thả.";
          wishError.classList.remove("hidden");
        }
        return;
      }

      const check = sanitizeAndCheckPII(rawText);
      if (!check.safe) {
        if (wishError) {
          wishError.textContent = check.reason;
          wishError.classList.remove("hidden");
        }
        return;
      }

      addLanternToRiver(check.cleaned, true);
      state.data.customWishes.push(check.cleaned);
      state.save();

      wishTextarea.value = "";
      if (wishCharCount) wishCharCount.textContent = "0/150";
      if (wishError) wishError.classList.add("hidden");
      triggerHaptic(30);

      alert("🪷 Lời nguyện lành của bạn đã hòa vào dòng nước hoa đăng. Chúc tâm an vạn sự lành!");
    });
  }

  // ==========================================
  // VƯỜN SEN TÂM THỨC
  // ==========================================
  const statDays = document.getElementById("stat-days");
  const quest1 = document.getElementById("quest-1");
  const quest2 = document.getElementById("quest-2");
  const quest3 = document.getElementById("quest-3");
  const btnSaveQuests = document.getElementById("btn-save-quests");
  const pondLotus = document.getElementById("pond-lotus");
  const lotusStageTitle = document.getElementById("lotus-stage-title");
  const lotusStageDesc = document.getElementById("lotus-stage-desc");

  function updateLotusPondUI() {
    if (statDays) statDays.textContent = state.data.streakDays || 1;
    if (statChants) statChants.textContent = state.data.moCount;
    if (statBells) statBells.textContent = state.data.bellCount;

    if (quest1) quest1.checked = state.data.dailyQuests.q1 || false;
    if (quest2) quest2.checked = state.data.dailyQuests.q2 || false;
    if (quest3) quest3.checked = state.data.dailyQuests.q3 || false;

    const completed = [quest1?.checked, quest2?.checked, quest3?.checked].filter(Boolean).length;
    if (pondLotus && lotusStageTitle && lotusStageDesc) {
      if (completed === 3) {
        pondLotus.textContent = "🪷";
        lotusStageTitle.textContent = "Đóa Sen Nở Rộ Viên Mãn";
        lotusStageDesc.textContent = "Tâm hồn bạn hôm nay tràn đầy ánh sáng tĩnh tại và thiện lành.";
        pondLotus.style.filter = "drop-shadow(0 0 30px rgba(226, 141, 164, 0.9))";
      } else if (completed >= 1) {
        pondLotus.textContent = "🌷";
        lotusStageTitle.textContent = "Đóa Sen Đang Hé Nụ";
        lotusStageDesc.textContent = "Hạt giống chánh niệm đang từng ngày đâm chồi nảy lộc.";
      } else {
        pondLotus.textContent = "🌱";
        lotusStageTitle.textContent = "Hạt Mầm Bồ Đề";
        lotusStageDesc.textContent = "Hãy hoàn thành các hạt mầm bên dưới để tưới mát tâm hồn.";
      }
    }
  }

  if (btnSaveQuests) {
    btnSaveQuests.addEventListener("click", () => {
      state.data.dailyQuests = {
        q1: quest1 ? quest1.checked : false,
        q2: quest2 ? quest2.checked : false,
        q3: quest3 ? quest3.checked : false
      };
      state.save();
      updateLotusPondUI();
      triggerHaptic(25);
      alert("💧 Bạn đã tưới nước cho vườn sen tâm thức thành công!");
    });
  }

  updateLotusPondUI();

  // ==========================================
  // MODAL BẢO MẬT & ĐẶT TÊN HIỂN THỊ TÙY Ý
  // ==========================================
  const modalPrivacy = document.getElementById("modal-privacy");
  const btnProfile = document.getElementById("btn-profile");
  const btnCloseModal = document.getElementById("btn-close-modal");
  const btnCopyCode = document.getElementById("btn-copy-code");
  const btnRegenName = document.getElementById("btn-regen-name");

  if (btnProfile && modalPrivacy) btnProfile.addEventListener("click", () => modalPrivacy.classList.remove("hidden"));
  if (btnCloseModal && modalPrivacy) btnCloseModal.addEventListener("click", () => modalPrivacy.classList.add("hidden"));
  if (modalPrivacy) {
    modalPrivacy.addEventListener("click", (e) => {
      if (e.target === modalPrivacy) modalPrivacy.classList.add("hidden");
    });
  }

  if (btnCopyCode) {
    btnCopyCode.addEventListener("click", () => {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(state.data.passcode).then(() => {
          btnCopyCode.textContent = "✓ Đã sao chép";
          setTimeout(() => btnCopyCode.textContent = "📋 Sao chép mã", 2000);
        });
      }
    });
  }

  if (btnRegenName) {
    btnRegenName.addEventListener("click", () => {
      state.data.dharmaName = generateDharmaName();
      state.save();
      renderProfile();
      if (nameError) nameError.classList.add("hidden");
    });
  }

  if (btnSaveCustomName && inputCustomName) {
    const handleSaveCustomName = () => {
      const entered = inputCustomName.value.trim();
      if (!entered) {
        if (nameError) {
          nameError.textContent = "Vui lòng nhập tên hoặc pháp danh mong muốn.";
          nameError.classList.remove("hidden");
        }
        return;
      }

      const check = sanitizeAndCheckPII(entered);
      if (!check.safe) {
        if (nameError) {
          nameError.textContent = check.reason;
          nameError.classList.remove("hidden");
        }
        return;
      }

      state.data.dharmaName = check.cleaned;
      state.save();
      renderProfile();

      if (nameError) nameError.classList.add("hidden");
      btnSaveCustomName.textContent = "✓ Đã Lưu";
      setTimeout(() => {
        btnSaveCustomName.textContent = "Lưu Tên";
      }, 1500);
      triggerHaptic(20);
    };

    btnSaveCustomName.addEventListener("click", handleSaveCustomName);
    inputCustomName.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleSaveCustomName();
      }
    });
  }

  // ====================================================================
  // 7. XỬ LÝ ĐẶT TÊN TRỰC TIẾP (INLINE USER NAME)
  // ====================================================================
  if (btnSaveInlineName && inlineUserName) {
    const handleSaveInline = () => {
      const entered = inlineUserName.value.trim();
      if (!entered) return;

      const check = sanitizeAndCheckPII(entered);
      if (!check.safe) {
        alert(check.reason);
        return;
      }

      state.data.dharmaName = check.cleaned;
      state.save();
      renderProfile();

      btnSaveInlineName.textContent = "✓ Đã Lưu";
      setTimeout(() => {
        btnSaveInlineName.textContent = "Lưu Tên 💾";
      }, 1500);
      triggerHaptic(20);
    };

    btnSaveInlineName.addEventListener("click", handleSaveInline);
    inlineUserName.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleSaveInline();
      }
    });
  }

  if (btnDiceName) {
    btnDiceName.addEventListener("click", () => {
      state.data.dharmaName = generateDharmaName();
      state.save();
      renderProfile();
      triggerHaptic(15);
    });
  }

  // ====================================================================
  // 8. ĐẠO TRÀNG ĐỒNG TU (SANGHA PRACTITIONERS - CÙNG NHAU GÕ MÕ)
  // ====================================================================
  const sanghaAvatarsContainer = document.getElementById("sangha-avatars-container");
  const sanghaFeedTicker = document.getElementById("sangha-feed-ticker");
  const toggleSanghaSound = document.getElementById("toggle-sangha-sound");
  const liveOnlineCountEl = document.getElementById("live-online-count");

  const SANGHA_PRACTITIONERS = [
    { id: "user", name: "(Bạn)", avatar: "🧘", status: "Đang niệm Phật", isUser: true },
    { id: "p1", name: "ĐH Diệu Âm", avatar: "🧘‍♀️", status: "Niệm 108 hạt" },
    { id: "p2", name: "ĐH Chân Tâm", avatar: "🧘‍♂️", status: "Tọa thiền" },
    { id: "p3", name: "ĐH Tuệ Minh", avatar: "🧘‍♂️", status: "Thỉnh chuông" },
    { id: "p4", name: "ĐH An Lạc", avatar: "🧘‍♀️", status: "Dâng hoa sen" },
    { id: "p5", name: "ĐH Thiện Trí", avatar: "🧘‍♂️", status: "Thả hoa đăng" }
  ];

  const SANGHA_FEEDS = [
    "Đạo hữu Diệu Âm vừa hoàn thành 108 hạt niệm Bồ Đề 📿",
    "Đạo hữu Tuệ Minh vừa thỉnh một hồi Đại Hồng Chung xua tan phiền não 🔔",
    "Đạo hữu Chân Tâm vừa dâng mâm quả thơm cầu bình an gia đạo ✨",
    "Đạo hữu Thiện Trí vừa thả một đóa hoa đăng trên dòng Hương Giang 🕯️",
    "Đạo hữu An Lạc vừa hoàn thành 15 phút tọa thiền chánh niệm 🪷",
    "Đạo hữu Vạn Hạnh vừa chiêm bái Đỉnh Đồng Yên Tử mây vờn ⛰️"
  ];

  function renderSanghaHall() {
    if (!sanghaAvatarsContainer) return;
    sanghaAvatarsContainer.innerHTML = "";

    SANGHA_PRACTITIONERS.forEach(p => {
      const card = document.createElement("div");
      card.className = `sangha-member ${p.isUser ? 'is-user' : ''}`;
      card.id = `member-${p.id}`;

      const displayName = p.isUser ? `(Bạn) ${state.data.dharmaName}` : p.name;

      card.innerHTML = `
        <div class="member-avatar">
          <div class="member-halo"></div>
          <span>${p.avatar}</span>
        </div>
        <div class="member-name" title="${displayName}">${displayName}</div>
        <div class="member-status">${p.status}</div>
      `;
      sanghaAvatarsContainer.appendChild(card);
    });
  }

  function updateUserAvatarInSangha() {
    const userCard = document.getElementById("member-user");
    if (userCard) {
      const nameEl = userCard.querySelector(".member-name");
      if (nameEl) nameEl.textContent = `(Bạn) ${state.data.dharmaName}`;
    }
  }

  // Khi BẠN gõ mõ -> Avatar của bạn phát sáng hào quang
  window.triggerUserChant = function() {
    const userCard = document.getElementById("member-user");
    if (!userCard) return;
    userCard.classList.remove("chanting");
    void userCard.offsetWidth;
    userCard.classList.add("chanting");
    setTimeout(() => userCard.classList.remove("chanting"), 600);

    // Cập nhật dòng ticker
    if (sanghaFeedTicker) {
      sanghaFeedTicker.innerHTML = `<span class="feed-item">✨ Bạn (${state.data.dharmaName}) vừa gõ mõ trợ niệm cùng đạo tràng 🙏</span>`;
    }
  };

  // Vòng lặp mô phỏng các đồng tu trong đạo tràng cùng gõ mõ nhịp nhàng
  let sanghaInterval = null;
  function startSanghaSimulation() {
    if (sanghaInterval) clearInterval(sanghaInterval);

    sanghaInterval = setInterval(() => {
      if (document.hidden) return;

      // Chọn ngẫu nhiên 1 đạo hữu (trừ bạn)
      const peers = SANGHA_PRACTITIONERS.filter(p => !p.isUser);
      const chosen = peers[Math.floor(Math.random() * peers.length)];
      const memberCard = document.getElementById(`member-${chosen.id}`);

      if (memberCard) {
        memberCard.classList.remove("chanting");
        void memberCard.offsetWidth;
        memberCard.classList.add("chanting");
        setTimeout(() => memberCard.classList.remove("chanting"), 600);

        // Nếu bật hòa âm thì phát tiếng gõ mõ đệm êm dịu
        if (toggleSanghaSound && toggleSanghaSound.checked) {
          audio.playSoftMo();
        }

        // Đổi câu feed ngẫu nhiên
        if (sanghaFeedTicker && Math.random() < 0.6) {
          const feed = SANGHA_FEEDS[Math.floor(Math.random() * SANGHA_FEEDS.length)];
          sanghaFeedTicker.innerHTML = `<span class="feed-item">${feed}</span>`;
        }

        // Số lượng người online dao động tự nhiên quanh 125-145
        if (liveOnlineCountEl && Math.random() < 0.3) {
          const count = 120 + Math.floor(Math.random() * 25);
          liveOnlineCountEl.textContent = count;
        }
      }
    }, 3200);
  }

  renderSanghaHall();
  startSanghaSimulation();
});
