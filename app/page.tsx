"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="min-h-screen bg-[#f5f5f3] text-black">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 py-5">
          <button
  className="md:hidden text-3xl leading-none"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? "✕" : "☰"}
</button>
          <h1 className="text-2xl font-bold tracking-tight">
  CC<span className="text-orange-500">3D</span>
</h1>

          <div className="hidden md:flex gap-10 text-sm font-medium text-zinc-700 flex-1 justify-center">
                                  <a href="#home" className="hover:text-orange-500 transition">
              Trang chủ
            </a>

            <a href="#projects" className="hover:text-orange-500 transition">
              Dự án
            </a>

            <a href="#services" className="hover:text-orange-500 transition">
              Dịch vụ
            </a>

            <a href="#upload" className="hover:text-orange-500 transition">
              Upload file
            </a>

            <a href="#contact" className="hover:text-orange-500 transition">
  Liên hệ
</a>
          </div>

          <a
  href="#upload"
  className="bg-orange-500 hover:bg-orange-600 transition text-white px-5 py-2 rounded-full text-sm shadow-lg shadow-orange-200"
>
  Báo giá ngay
</a>
        </div>
                {menuOpen && (
          <div className="md:hidden border-t border-zinc-200 bg-white px-8 py-5">
            <div className="flex flex-col gap-4 text-zinc-700 font-medium">
              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="hover:text-orange-500 transition"
              >
                Trang chủ
              </a>

              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="hover:text-orange-500 transition"
              >
                Dự án
              </a>

              <a
                href="#services"
                onClick={() => setMenuOpen(false)}
                className="hover:text-orange-500 transition"
              >
                Dịch vụ
              </a>

              <a
                href="#upload"
                onClick={() => setMenuOpen(false)}
                className="hover:text-orange-500 transition"
              >
                Upload file
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-orange-500 transition"
              >
                Liên hệ
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden flex flex-col items-center justify-center text-center px-6 pt-52 pb-40 bg-gradient-to-b from-[#f7f4ef] via-white to-[#f5f5f3]">
        <div className="absolute w-[500px] h-[500px] bg-orange-200 blur-3xl opacity-30 rounded-full top-[-150px]"></div>

        <p className="text-sm uppercase tracking-[0.4em] text-orange-500 mb-6 z-10">
          Dịch vụ in 3D FDM
        </p>

        <motion.h2
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="text-4xl sm:text-5xl md:text-6xl font-bold max-w-5xl leading-tight tracking-tight z-10"
>
  Kỹ thuật hiện đại
  <br />
  kết hợp sáng tạo
</motion.h2>

        <p className="text-zinc-600 text-lg max-w-2xl mt-8 leading-8 z-10">
          Nhận in mô hình, chi tiết cơ khí, prototype và sản phẩm theo yêu cầu
          với độ chính xác cao.
        </p>

        <div className="flex gap-4 mt-10 z-10">
          <a
  href="#upload"
  className="bg-orange-500 hover:bg-orange-600 transition text-white px-7 py-3 rounded-full shadow-lg shadow-orange-200"
>
  Tải File In
</a>
          <a
  href="#projects"
  className="border border-zinc-300 hover:bg-zinc-100 transition px-7 py-3 rounded-full text-black"
>
  Xem Dự Án
</a>
        </div>
      </section>

      {/* SHOWCASE */}
      <section id="projects" className="px-8 pb-24 bg-[#f5f5f3]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.3em] text-orange-500 mb-3">
              Dự án nổi bật
            </p>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Từ ý tưởng đến sản phẩm thật
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="group bg-white rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-500 shadow-sm hover:shadow-2xl">
              <div className="h-56 overflow-hidden bg-zinc-200">
                <img
                  src="/images/ironman.jpg"
                  alt="Mô hình Iron Man in 3D"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3">
                  Mô hình Iron Man
                </h3>

                <p className="text-zinc-600 leading-7">
                  In mô hình cosplay, mặt nạ, chi tiết trang trí và sản phẩm sáng tạo.
                </p>
              </div>
            </div>

            <div className="group bg-white rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-500 shadow-sm hover:shadow-2xl">
              <div className="h-56 overflow-hidden bg-zinc-200">
                <img
                  src="/images/engine.jpg"
                  alt="Chi tiết cơ khí in 3D"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3">
                  Chi tiết kỹ thuật
                </h3>

                <p className="text-zinc-600 leading-7">
                  In mẫu thử, chi tiết cơ khí, đồ gá nhỏ và prototype phục vụ học tập.
                </p>
              </div>
            </div>

            <div className="group bg-white rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-500 shadow-sm hover:shadow-2xl">
              <div className="h-56 overflow-hidden bg-zinc-200">
                <img
                  src="/images/lamp.png"
                  alt="Sản phẩm in 3D theo yêu cầu"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3">
                  Sản phẩm theo yêu cầu
                </h3>

                <p className="text-zinc-600 leading-7">
                  Biến bản vẽ, ý tưởng hoặc file 3D thành sản phẩm cầm nắm được.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
                {/* SERVICES */}
      <section id="services" className="px-8 py-24 bg-[#f5f5f3]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-orange-500 mb-4">
              Dịch vụ
            </p>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Nhận in 3D theo nhu cầu thực tế
            </h2>

            <p className="text-zinc-600 text-lg leading-8">
              CC3D tập trung vào các sản phẩm phục vụ học tập, đồ án, mô hình,
              prototype và các chi tiết kỹ thuật nhỏ cần in nhanh, linh hoạt.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white rounded-3xl p-4 md:p-7 shadow-sm hover:-translate-y-2 hover:shadow-xl transition duration-300">
              <div className="mb-5 flex h-12 w-12 items-center justify-center text-4xl leading-none">
  🧩
</div>
              <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-3 leading-snug">Mô hình & decor</h3>
              <p className="text-sm md:text-base text-zinc-600 leading-6 md:leading-7">
                In mô hình trang trí, figure, vật phẩm cá nhân và sản phẩm sáng tạo.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-7 shadow-sm hover:-translate-y-2 hover:shadow-xl transition duration-300">
            <div className="mb-5 flex h-12 w-12 items-center justify-center text-4xl leading-none">
  ⚙️
</div>
              <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-3 leading-snug">Chi tiết cơ khí</h3>
              <p className="text-sm md:text-base text-zinc-600 leading-6 md:leading-7">
                In mẫu thử, chi tiết lắp ghép, đồ gá nhỏ và chi tiết kiểm tra thiết kế.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-7 shadow-sm hover:-translate-y-2 hover:shadow-xl transition duration-300">
              <div className="mb-5 flex h-12 w-12 items-center justify-center text-4xl leading-none">
  🎓
</div>
              <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-3 leading-snug">Đồ án sinh viên</h3>
              <p className="text-sm md:text-base text-zinc-600 leading-6 md:leading-7">
                Hỗ trợ in mô hình đồ án, sản phẩm học tập, mô phỏng và prototype.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-7 shadow-sm hover:-translate-y-2 hover:shadow-xl transition duration-300">
              <div className="mb-5 flex h-12 w-12 items-center justify-center text-4xl leading-none">
  🦾
</div>
              <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-3 leading-snug">Cosplay & mô hình</h3>
              <p className="text-sm md:text-base text-zinc-600 leading-6 md:leading-7">
                In mặt nạ, giáp, phụ kiện cosplay và các chi tiết kích thước lớn.
              </p>
            </div>
          </div>
        </div>
      </section>
            {/* PROCESS */}
      <section className="px-8 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-orange-500 mb-4">
              Quy trình
            </p>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Đặt in đơn giản, rõ ràng
            </h2>

            <p className="text-zinc-600 text-lg leading-8">
              Quy trình được tối giản để khách hàng dễ gửi yêu cầu,
              dễ trao đổi và dễ theo dõi trước khi tiến hành in.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            <div className="bg-[#f5f5f3] rounded-3xl p-6">
              <p className="text-3xl font-bold text-orange-500 mb-5">01</p>
              <h3 className="font-semibold text-lg mb-3">Gửi file</h3>
              <p className="text-zinc-600 leading-7">
                Gửi file STL, STEP, OBJ, 3MF hoặc hình ảnh mô tả sản phẩm.
              </p>
            </div>

            <div className="bg-[#f5f5f3] rounded-3xl p-6">
              <p className="text-3xl font-bold text-orange-500 mb-5">02</p>
              <h3 className="font-semibold text-lg mb-3">Kiểm tra mẫu</h3>
              <p className="text-zinc-600 leading-7">
                Kiểm tra khả năng in, kích thước, độ dày và hướng in phù hợp.
              </p>
            </div>

            <div className="bg-[#f5f5f3] rounded-3xl p-6">
              <p className="text-3xl font-bold text-orange-500 mb-5">03</p>
              <h3 className="font-semibold text-lg mb-3">Báo giá</h3>
              <p className="text-zinc-600 leading-7">
                Tư vấn vật liệu, màu sắc, thời gian in và chi phí dự kiến.
              </p>
            </div>

            <div className="bg-[#f5f5f3] rounded-3xl p-6">
              <p className="text-3xl font-bold text-orange-500 mb-5">04</p>
              <h3 className="font-semibold text-lg mb-3">Tiến hành in</h3>
              <p className="text-zinc-600 leading-7">
                In sản phẩm theo thông số đã thống nhất với khách hàng.
              </p>
            </div>

            <div className="bg-[#f5f5f3] rounded-3xl p-6">
              <p className="text-3xl font-bold text-orange-500 mb-5">05</p>
              <h3 className="font-semibold text-lg mb-3">Giao sản phẩm</h3>
              <p className="text-zinc-600 leading-7">
                Hoàn thiện, kiểm tra và bàn giao sản phẩm sau khi in xong.
              </p>
            </div>
          </div>
        </div>
      </section>
                      {/* ORDER / UPLOAD REQUEST */}
      <section id="upload" className="px-8 py-24 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-orange-500 mb-4">
              Gửi yêu cầu in 3D
            </p>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Gửi file, nhận báo giá nhanh
            </h2>

            <p className="text-zinc-600 text-lg leading-8 max-w-xl">
              Khách hàng có thể gửi thông tin chi tiết về sản phẩm cần in.
              Sau khi nhận file 3D hoặc hình ảnh mô tả, CC3D sẽ kiểm tra mẫu,
              tư vấn vật liệu và báo giá phù hợp.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mt-10">
              <div className="bg-[#f5f5f3] rounded-2xl p-5">
                <p className="text-3xl font-bold text-orange-500">01</p>
                <p className="mt-3 font-medium">Gửi file</p>
              </div>

              <div className="bg-[#f5f5f3] rounded-2xl p-5">
                <p className="text-3xl font-bold text-orange-500">02</p>
                <p className="mt-3 font-medium">Kiểm tra mẫu</p>
              </div>

              <div className="bg-[#f5f5f3] rounded-2xl p-5">
                <p className="text-3xl font-bold text-orange-500">03</p>
                <p className="mt-3 font-medium">Báo giá & in</p>
              </div>
            </div>
          </div>

          <div className="bg-[#f5f5f3] rounded-3xl p-8 shadow-sm">
            <div className="grid gap-5">
              
              <div>
                <label className="text-sm font-medium text-zinc-700">
                  Họ và tên
                </label>
                <input
                  type="text"
                  placeholder="Ví dụ: Nguyễn Văn A"
                  className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-zinc-700">
                  Số điện thoại / Zalo
                </label>
                <input
                  type="text"
                  placeholder="Ví dụ: 0394 318 361"
                  className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-zinc-700">
                  Loại sản phẩm cần in
                </label>
                <select className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 outline-none focus:border-orange-500">
                  <option>Mô hình / decor</option>
                  <option>Chi tiết cơ khí</option>
                  <option>Đồ án / prototype</option>
                  <option>Cosplay / mô hình nhân vật</option>
                  <option>Khác</option>
                </select>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-zinc-700">
                    Vật liệu mong muốn
                  </label>
                  <select className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 outline-none focus:border-orange-500">
                    <option>Chưa rõ, cần tư vấn</option>
                    <option>PLA - dễ in, tiết kiệm</option>
                    <option>PETG - bền hơn, chịu lực tốt hơn</option>
                    <option>ABS/ASA - chịu nhiệt tốt hơn</option>
                    <option>TPU - dẻo</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-zinc-700">
                    Màu sắc
                  </label>
                  <input
                    type="text"
                    placeholder="Ví dụ: đen, trắng, xám, cam..."
                    className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-zinc-700">
                    Số lượng
                  </label>
                  <input
                    type="number"
                    placeholder="Ví dụ: 1"
                    className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-zinc-700">
                    Thời gian cần nhận
                  </label>
                  <input
                    type="text"
                    placeholder="Ví dụ: trong tuần này"
                    className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-zinc-700">
                  Ưu tiên khi in
                </label>
                <select className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 outline-none focus:border-orange-500">
                  <option>Cân bằng giữa đẹp và giá</option>
                  <option>Tiết kiệm chi phí nhất</option>
                  <option>Bề mặt đẹp hơn</option>
                  <option>Độ bền cao hơn</option>
                  <option>Cần in gấp</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-zinc-700">
                  File thiết kế
                </label>

                <div className="mt-2 flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-zinc-300 bg-white px-6 py-10 text-center hover:border-orange-500 transition">
                  <p className="font-medium">Kéo thả file vào đây</p>
                  <p className="text-sm text-zinc-500 mt-2">
                    Hỗ trợ STL, STEP, OBJ, 3MF hoặc ảnh mô tả
                  </p>

                  <label className="mt-5 cursor-pointer rounded-full bg-black text-white px-5 py-2 text-sm hover:bg-orange-500 transition">
  Chọn file
  <input
    type="file"
    className="hidden"
    accept=".stl,.step,.stp,.obj,.3mf,.jpg,.jpeg,.png"
  />
</label>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-zinc-700">
                  Ghi chú thêm
                </label>
                <textarea
                  placeholder="Ví dụ: muốn in màu đen, cần bề mặt đẹp, dùng cho đồ án..."
                  rows={4}
                  className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 outline-none focus:border-orange-500"
                ></textarea>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
  <a
    href="tel:0394318361"
    className="block text-center w-full rounded-full bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-4 font-medium shadow-lg shadow-orange-200"
  >
    Gọi báo giá ngay
  </a>

  <a
    href="https://zalo.me/0394318361"
    target="_blank"
    className="block text-center w-full rounded-full bg-black hover:bg-orange-500 transition text-white px-6 py-4 font-medium"
  >
    Nhắn Zalo
  </a>
</div>
<p className="text-center text-sm text-zinc-500">
  Hoặc liên hệ trực tiếp:{" "}
  <span className="font-medium text-zinc-800">0394 318 361</span>
</p>

              <p className="text-center text-sm text-zinc-500">
                Giai đoạn đầu, form này là giao diện mẫu. Sau này sẽ kết nối để gửi file thật.
              </p>
            </div>
          </div>

        </div>
      </section>
            {/* FOOTER */}
      <footer id="contact" className="bg-[#111111] text-white px-8 py-14">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              CC<span className="text-orange-500">3D</span>
            </h2>

            <p className="text-zinc-400 mt-4 leading-7">
              Dịch vụ in 3D theo yêu cầu, hỗ trợ mô hình, đồ án, prototype,
              chi tiết cơ khí nhỏ và sản phẩm sáng tạo.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Liên hệ</h3>

            <div className="space-y-3 text-zinc-400">
              <p>Số điện thoại / Zalo: 0394 318 361</p>
              <p>Khu vực: Nghệ An - Hà Tĩnh</p>
              <p>Nhận tư vấn file STL, STEP, OBJ, 3MF</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Dịch vụ chính</h3>

            <div className="space-y-3 text-zinc-400">
              <p>In mô hình & decor</p>
              <p>In chi tiết kỹ thuật</p>
              <p>In đồ án sinh viên</p>
              <p>In cosplay & mô hình nhân vật</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-zinc-800 mt-10 pt-6 text-sm text-zinc-500 flex flex-col md:flex-row justify-between gap-4">
          <p>© 2026 CC3D. All rights reserved.</p>
          <p>Built for modern 3D printing workflow.</p>
        </div>
      </footer>
    </main>
  );
}