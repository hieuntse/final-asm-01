//json data mẫu, xóa phần data này, fetch mock API để thao tác
const items = [
  {
    id: "1",
    title: "Ăn trưa",
    category: "Ăn uống",
    amount: 35000,
    date: "25-10-2026",
    note: "Cơm trưa tại căn tin",
  },
  {
    id: "2",
    title: "Mua giáo trình JavaScript",
    category: "Học tập",
    amount: 120000,
    date: "26-10-2026",
    note: "Giáo trình học kỳ mới",
  },
];

const list = document.getElementById("items");

//innerHTML render mẫu, có thể sử dụng lại cho bài làm
const renderItems = (items) => {
  list.innerHTML = items.length
    ? items
        .map(
          (item) => `
          <div class="item-card">
            <h3>${item.title}</h3>
            <p><span class="tag">${item.category}</span></p>
            <p class="amount">${new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(item.amount)}</p>
            <p>Ngày chi: <span>${item.date}</span></p>
            <p>Ghi chú: <span>${item.note || "Không có"}</span></p>
            <button type="button" class="secondary" data-action="edit" data-id="${item.id}">Sửa</button>
          </div>
        `,
        )
        .join("")
    : "Không có dữ liệu phù hợp.";
};

renderItems(items);
