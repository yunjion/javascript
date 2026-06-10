const menuList = [
  { name: '아메리카노', price: 3000, category: 'coffee' },
  { name: '카페라떼', price: 4000, category: 'coffee' },
  { name: '바닐라라떼', price: 4500, category: 'coffee' },
  { name: '초코라떼', price: 4200, category: 'nonCoffee' },
  { name: '레몬에이드', price: 5000, category: 'ade' },
  { name: '자몽에이드', price: 5200, category: 'ade' }
];

const orderList = [];

function loadMenu() {
  const selectMenu = document.getElementById('menuSelect');
  if (!selectMenu) return;

  selectMenu.innerHTML = '';

  menuList.forEach((item) => {
    const option = document.createElement('option');
    option.value = item.name;
    option.textContent = `${item.name} : ${item.price.toLocaleString()}원`;
    selectMenu.appendChild(option);
  });
}

function addOrder() {
  const selectMenu = document.getElementById('menuSelect');
  const qtyInput = document.getElementById('qtyInput');

  if (!selectMenu || !qtyInput) return;

  const menuName = selectMenu.value;
  const quantity = Number(qtyInput.value);

  if (!menuName) return;
  if (!Number.isInteger(quantity) || quantity < 1) {
    alert('수량은 1 이상 입력하세요.');
    return;
  }

  const menu = menuList.find((item) => item.name === menuName);
  if (!menu) return;

  orderList.push({
    orderNo: `ORDER-${String(orderList.length + 1).padStart(3, '0')}`,
    name: menu.name,
    price: menu.price,
    quantity,
    total: menu.price * quantity
  });

  renderOrderTable();
  updateTotalInfo();
  qtyInput.value = 1;
}

function renderOrderTable() {
  const tbody = document.getElementById('orderBody');
  if (!tbody) return;

  if (orderList.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5" class="empty">주문 내역이 없습니다.</td></tr>';
    return;
  }

  tbody.innerHTML = orderList
    .map((item) => `
      <tr>
        <td>${item.orderNo}</td>
        <td>${item.name}</td>
        <td>${item.price.toLocaleString()}원</td>
        <td>${item.quantity}개</td>
        <td>${item.total.toLocaleString()}원</td>
      </tr>
    `)
    .join('');
}

function updateTotalInfo() {
  const totalQty = orderList.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = orderList.reduce((sum, item) => sum + item.total, 0);

  const totalQtyEl = document.getElementById('totalQty');
  const totalAmountEl = document.getElementById('totalAmount');

  if (totalQtyEl) totalQtyEl.textContent = `${totalQty}개`;
  if (totalAmountEl) totalAmountEl.textContent = `${totalAmount.toLocaleString()}원`;
}

function searchMenu() {
  const keyword = document.getElementById('searchInput').value.trim().toLowerCase();
  const resultBox = document.getElementById('searchResult');

  if (!resultBox) return;

  if (!keyword) {
    resultBox.textContent = '검색어를 입력하세요.';
    return;
  }

  const filteredMenu = menuList.filter((item) => item.name.toLowerCase().includes(keyword));

  if (filteredMenu.length === 0) {
    resultBox.textContent = '검색 결과가 없습니다.';
    return;
  }

  resultBox.innerHTML = filteredMenu
    .map((item) => `${item.name} - ${item.price.toLocaleString()}원`)
    .join('<br>');
}

window.addEventListener('DOMContentLoaded', () => {
  loadMenu();
  renderOrderTable();
  updateTotalInfo();
});
