/* ===================== Illustrations (built-in, no internet needed) ===================== */
const PHOTOS = {};
const POS = { jollof:'50% 55%', burger:'50% 62%', pizza:'50% 40%', cake:'50% 48%', chicken:'50% 50%', salad:'50% 50%', noodles:'50% 45%', smoothie:'50% 28%' };
const svgURI = s => 'data:image/svg+xml;utf8,' + encodeURIComponent(s);
const scene = (bg, art) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150" preserveAspectRatio="xMidYMid slice"><rect width="200" height="150" fill="${bg}"/>${art}</svg>`;

const ART = {
  jollof: ['#FFE0C2', `<ellipse cx="100" cy="112" rx="72" ry="20" fill="#fff"/><ellipse cx="100" cy="108" rx="60" ry="14" fill="#f0e6dc"/><path d="M50 106q8-56 50-56t50 56q-50 20-100 0z" fill="#E4572E"/><g fill="#F8A25C"><circle cx="82" cy="84" r="3"/><circle cx="104" cy="72" r="3"/><circle cx="118" cy="92" r="3"/><circle cx="92" cy="98" r="3"/></g><g fill="#F5C518" stroke="#C8901A" stroke-width="2"><ellipse cx="150" cy="104" rx="14" ry="8" transform="rotate(-20 150 104)"/><ellipse cx="165" cy="112" rx="13" ry="7" transform="rotate(-10 165 112)"/></g><path d="M70 60q-8-16 6-24 8 12-6 24z" fill="#4CAF50"/>`],
  burger: ['#FFE3A3', `<ellipse cx="100" cy="128" rx="62" ry="8" fill="#0002"/><path d="M45 70a55 38 0 0 1 110 0z" fill="#E59A3B"/><g fill="#FFF3C9"><circle cx="80" cy="52" r="2.5"/><circle cx="105" cy="45" r="2.5"/><circle cx="125" cy="56" r="2.5"/></g><path d="M42 74q8 10 16 0t16 0 16 0 16 0 16 0 16 0 16 0v5H42z" fill="#7BC043"/><path d="M45 79h110l-6 9H51z" fill="#F7C531"/><rect x="45" y="87" width="110" height="14" rx="7" fill="#6B3A22"/><path d="M45 105h110a12 12 0 0 1-12 14H57a12 12 0 0 1-12-14z" fill="#E59A3B"/>`],
  pizza: ['#FFD8D0', `<path d="M100 128L42 38Q100 8 158 38Z" fill="#F4B63F"/><path d="M42 38Q100 8 158 38" fill="none" stroke="#D98A2B" stroke-width="12" stroke-linecap="round"/><g fill="#C8312B"><circle cx="85" cy="55" r="9"/><circle cx="118" cy="58" r="9"/><circle cx="100" cy="88" r="9"/></g><g fill="#4CAF50"><circle cx="102" cy="62" r="3"/><circle cx="90" cy="76" r="3"/><circle cx="112" cy="104" r="3"/></g>`],
  cake: ['#E8D5FF', `<ellipse cx="100" cy="128" rx="60" ry="8" fill="#0002"/><path d="M50 72h100v46q-50 12-100 0z" fill="#5A3020"/><rect x="50" y="90" width="100" height="9" fill="#F6DDB8"/><path d="M44 72q8-24 56-24t56 24q-10 10-20 2t-18 2-18-2-18 2-18-2z" fill="#8A4B2C"/><circle cx="100" cy="42" r="9" fill="#D7263D"/><path d="M100 34q6-14 14-14" stroke="#3a7d2c" stroke-width="3" fill="none"/>`],
  chicken: ['#FFE8C8', `<ellipse cx="100" cy="132" rx="55" ry="7" fill="#0002"/><g transform="rotate(-28 100 80)"><ellipse cx="100" cy="58" rx="46" ry="34" fill="#C8691F"/><path d="M70 50q10-10 24-8M110 40q12 2 20 12" stroke="#E69A4A" stroke-width="5" fill="none" stroke-linecap="round"/><rect x="95" y="86" width="12" height="38" fill="#F5E6CF"/><circle cx="94" cy="128" r="8" fill="#F5E6CF"/><circle cx="108" cy="128" r="8" fill="#F5E6CF"/></g>`],
  salad: ['#DFF3D2', `<g><circle cx="80" cy="64" r="20" fill="#4CAF50"/><circle cx="108" cy="56" r="22" fill="#7BC043"/><circle cx="130" cy="70" r="17" fill="#4CAF50"/><circle cx="96" cy="72" r="9" fill="#E4572E"/><circle cx="122" cy="78" r="8" fill="#E4572E"/><ellipse cx="78" cy="82" rx="10" ry="6" fill="#C9E265"/></g><path d="M40 82h120a60 46 0 0 1-120 0z" fill="#fff" stroke="#d8d8d8" stroke-width="3"/>`],
  noodles: ['#FFD9D4', `<path d="M60 36l60 60M72 30l60 60" stroke="#8a5a2b" stroke-width="5" stroke-linecap="round"/><path d="M50 78q20-18 40 0t40 0 30 0" stroke="#F5C518" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M52 90q20-18 40 0t40 0 28 0" stroke="#E6A800" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M40 84h120a60 44 0 0 1-120 0z" fill="#D7263D"/><path d="M52 104h96" stroke="#fff" stroke-width="4" opacity=".6"/>`],
  smoothie: ['#FFE0EC', `<path d="M118 20L104 70" stroke="#A24BE0" stroke-width="7" stroke-linecap="round"/><path d="M62 52h76l-10 74q-28 8-56 0z" fill="#FFB347"/><path d="M66 78h68l-6 48q-28 8-56 0z" fill="#EE8B94"/><path d="M62 52h76" stroke="#fff" stroke-width="6" stroke-linecap="round"/><circle cx="142" cy="52" r="14" fill="#F5C518"/><circle cx="142" cy="52" r="8" fill="#FFE27A"/>`],
  all: ['#F2A71B', `<circle cx="100" cy="76" r="48" fill="#fff"/><circle cx="100" cy="76" r="34" fill="#f3efe6"/><path d="M36 30v40M30 30v14a6 6 0 0 0 12 0V30M164 30c-12 8-12 40 0 44v46" stroke="#0d0d0d" stroke-width="5" fill="none" stroke-linecap="round"/>`]
};
const ill = key => svgURI(scene(...ART[key]));

/* Rider on a yellow scooter, like the reference hero */
const RIDER = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 440" preserveAspectRatio="xMidYMax slice"><defs><linearGradient id="rg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#a24be0"/><stop offset="1" stop-color="#ee8b94"/></linearGradient></defs><rect width="360" height="440" fill="url(#rg)"/><path d="M240 195L302 122" stroke="#E8B48A" stroke-width="24" stroke-linecap="round"/><circle cx="306" cy="114" r="16" fill="#E8B48A"/><path d="M105 272Q100 176 150 166H210Q260 176 255 272Z" fill="#F5C518"/><path d="M150 166L145 272M210 166L215 272" stroke="#111" stroke-width="9"/><path d="M118 205L92 264" stroke="#E8B48A" stroke-width="22" stroke-linecap="round"/><circle cx="180" cy="112" r="44" fill="#E8B48A"/><path d="M134 108Q136 54 180 52Q224 54 226 108Z" fill="#F5C518"/><rect x="128" y="100" width="104" height="10" rx="5" fill="#d9a90f"/><circle cx="164" cy="120" r="4" fill="#222"/><circle cx="196" cy="120" r="4" fill="#222"/><path d="M158 134Q180 162 202 134Z" fill="#7a2230"/><path d="M162 135Q180 147 198 135L196 140Q180 149 164 140Z" fill="#fff"/><rect x="70" y="262" width="220" height="14" rx="7" fill="#222"/><path d="M92 262L84 206M268 262L276 206" stroke="#777" stroke-width="5"/><circle cx="84" cy="196" r="16" fill="#cfd4d8" stroke="#555" stroke-width="4"/><circle cx="276" cy="196" r="16" fill="#cfd4d8" stroke="#555" stroke-width="4"/><path d="M100 276Q180 250 260 276L282 402Q180 452 78 402Z" fill="#F5C518"/><circle cx="180" cy="320" r="30" fill="#e8ecef" stroke="#555" stroke-width="6"/><circle cx="180" cy="320" r="14" fill="#fff"/><rect x="150" y="372" width="60" height="28" rx="14" fill="#d9a90f"/><path d="M158 381h44M158 391h44" stroke="#8a6c05" stroke-width="3"/></svg>`;

/* Illustrated customer faces */
const FACES = [['#F6C9A8','#2B2118','#FFD166'],['#8D5A3B','#111111','#EE8B94'],['#C68642','#3A2415','#7BC8F6'],['#E0AC84','#6B3E1E','#C08BF0'],['#5C3A21','#0b0b0b','#9BDB9B']];
const avatar = i => {
  const [skin, hair, bg] = FACES[i % FACES.length];
  return svgURI(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><rect width="80" height="80" fill="${bg}"/><path d="M14 80c2-20 14-26 26-26s24 6 26 26z" fill="#fff"/><circle cx="40" cy="36" r="16" fill="${skin}"/><path d="M23 34c0-14 8-20 17-20s17 6 17 20c-4-7-10-9-17-9s-13 2-17 9z" fill="${hair}"/><circle cx="34" cy="37" r="1.8" fill="#222"/><circle cx="46" cy="37" r="1.8" fill="#222"/><path d="M34 44q6 5 12 0" stroke="#222" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`);
};

/* ===================== Content ===================== */
/* Photos load on top of the illustrations. Swap any photo URL below. If a photo fails, the illustration shows instead. */
const FOODS = [
  { name: 'Smoky Jollof Rice', cat: 'Rice',     key: 'jollof',   price: 3500, desc: 'Party-style jollof with fried plantain.' },
  { name: 'Beef Burger',       cat: 'Burgers',  key: 'burger',   price: 4200, desc: 'Double patty, cheese and house sauce.' },
  { name: 'Pepperoni Pizza',   cat: 'Pizza',    key: 'pizza',    price: 6800, desc: 'Stone-baked with mozzarella.' },
  { name: 'Chocolate Cake',    cat: 'Desserts', key: 'cake',     price: 2800, desc: 'Rich, moist, slice-sized.' },
  { name: 'Grilled Chicken',   cat: 'Grill',    key: 'chicken',  price: 5200, desc: 'Charcoal grilled, pepper sauce on the side.' },
  { name: 'Veggie Salad Bowl', cat: 'Healthy',  key: 'salad',    price: 3000, desc: 'Fresh greens, avocado and seeds.' },
  { name: 'Spicy Noodles',     cat: 'Noodles',  key: 'noodles',  price: 3200, desc: 'Stir-fried with egg and vegetables.' },
  { name: 'Fruit Smoothie',    cat: 'Drinks',   key: 'smoothie', price: 1800, desc: 'Blended mango, pineapple and ginger.' }
];

const REVIEWS = [
  { name: 'Amaka O.', text: 'My jollof arrived hot and the rider even called to find my gate. Easy.' },
  { name: 'Tunde B.', text: 'Pickup was ready the second I walked in. No waiting around at all.' },
  { name: 'Ngozi E.', text: 'The live tracking is my favourite part. I knew exactly when to step out.' }
];

const naira = n => '₦' + n.toLocaleString('en-NG');
const BLANK = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

/* Photo loader: tries your own file in the images folder first, then the online link,
   then falls back to the illustration (no broken-image icon) */
function setSrc(img, sources) {
  img._q = sources.slice(1);
  img.src = sources[0];
}
document.addEventListener('error', e => {
  const img = e.target;
  if (img.tagName !== 'IMG') return;
  if (img._q && img._q.length) img.src = img._q.shift();
  else if (img.src !== BLANK) img.src = BLANK;
}, true);
const photoFor = f => [PHOTOS[f.key], 'images/' + f.key + '.jpg'].filter(Boolean);

/* Paint illustrations behind any element with data-key */
function paint(root = document) {
  root.querySelectorAll('[data-key]').forEach(el => {
    const k = el.dataset.key, drawing = `url("${ill(k)}")`;
    const photo = k === 'all' ? null : (PHOTOS[k] || 'images/' + k + '.jpg');
    el.style.backgroundImage = photo ? `url("${photo}"), ${drawing}` : drawing;
    el.style.backgroundSize = 'cover';
    el.style.backgroundPosition = 'center';
  });
}

/* ===================== Hero ===================== */
const arch = document.getElementById('arch');
arch.style.backgroundImage = `url("${svgURI(RIDER)}")`;
arch.style.backgroundSize = 'cover';
arch.style.backgroundPosition = 'center bottom';
const riderImg = document.createElement('img');
riderImg.alt = 'Chowlink delivery man on a scooter';
setSrc(riderImg, [PHOTOS.rider, 'images/rider.jpg'].filter(Boolean));
arch.appendChild(riderImg);
document.getElementById('heroAvatars').innerHTML = [0, 1, 2].map(i => `<img src="${avatar(i)}" alt="">`).join('');
document.getElementById('connectAvatars').innerHTML = [1, 2, 3, 4].map(i => `<img src="${avatar(i)}" alt="">`).join('');

document.querySelectorAll('.float').forEach(card => {
  const img = card.querySelector('img');
  const food = FOODS[+img.dataset.food];
  img.dataset.key = food.key;
  setSrc(img, photoFor(food));
  img.style.objectPosition = POS[food.key];
  card.querySelector('h4').textContent = food.name;
  card.querySelector('.price').textContent = naira(food.price);
});

/* Count-up for the people number */
const counter = document.querySelector('.count');
const fmt = n => n.toLocaleString('en-IN');
if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
  counter.textContent = fmt(+counter.dataset.target);
} else {
  const target = +counter.dataset.target, start = performance.now(), dur = 1600;
  const tick = t => {
    const p = Math.min((t - start) / dur, 1);
    counter.textContent = fmt(Math.round(target * (1 - Math.pow(1 - p, 3))));
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/* ===================== Menu: category tiles + grid ===================== */
const grid = document.getElementById('grid');
const cats = document.getElementById('cats');
const filterBar = document.getElementById('filterBar');
const catList = [{ cat: 'All', key: 'all' }, ...FOODS.map(f => ({ cat: f.cat, key: f.key }))];
let active = 'All';

cats.innerHTML = catList.map(c =>
  `<button class="cat" data-cat="${c.cat}" aria-pressed="${c.cat === 'All'}"><span data-key="${c.key}"></span>${c.cat}</button>`).join('');
paint(cats);

function renderGrid() {
  grid.innerHTML = FOODS.map((f, i) => ({ f, i })).filter(({ f }) => active === 'All' || f.cat === active).map(({ f, i }) => `
    <article class="card">
      <img alt="${f.name}" data-key="${f.key}" data-i="${i}">
      <div class="body">
        <h3>${f.name}</h3><p>${f.desc}</p>
        <div class="row"><span class="price">${naira(f.price)}</span>
        <button class="add" data-i="${i}">Add to cart</button></div>
      </div>
    </article>`).join('');
  paint(grid);
  grid.querySelectorAll('img').forEach(img => { const f = FOODS[+img.dataset.i]; setSrc(img, photoFor(f)); img.style.objectPosition = POS[f.key]; });
}
function renderFilterBar() {
  const shown = FOODS.filter(f => active === 'All' || f.cat === active).length;
  filterBar.innerHTML = active === 'All'
    ? `Showing all ${shown} foods`
    : `Showing <strong>${active}</strong> (${shown}) <button class="show-all" id="showAll">&larr; Show all foods</button>`;
}
function setFilter(cat) {
  active = cat;
  cats.querySelectorAll('.cat').forEach(b => b.setAttribute('aria-pressed', b.dataset.cat === active));
  renderGrid(); renderFilterBar();
}
/* Tap a tile to filter. Tap the same tile again, the All tile, or "Show all foods" to go back */
cats.addEventListener('click', e => {
  const b = e.target.closest('.cat'); if (!b) return;
  setFilter(b.dataset.cat === active ? 'All' : b.dataset.cat);
});
filterBar.addEventListener('click', e => { if (e.target.closest('#showAll')) setFilter('All'); });

/* ===================== Cart (view, change quantity, remove, checkout) ===================== */
const cart = {};   // food index -> quantity
const badge = document.getElementById('cartCount');
const toast = document.getElementById('toast');
const drawer = document.getElementById('drawer');
const scrim = document.getElementById('scrim');
const cartItems = document.getElementById('cartItems');
const cartFooter = document.getElementById('cartFooter');
const cartTotal = document.getElementById('cartTotal');
let toastTimer;

const cartCount = () => Object.values(cart).reduce((a, b) => a + b, 0);
const cartSum = () => Object.entries(cart).reduce((t, [i, q]) => t + FOODS[i].price * q, 0);
const clearCart = () => Object.keys(cart).forEach(k => delete cart[k]);

function renderCart() {
  const ids = Object.keys(cart);
  badge.textContent = cartCount();
  cartTotal.textContent = naira(cartSum());
  cartFooter.hidden = !ids.length;
  if (!ids.length) {
    cartItems.innerHTML = `<div class="empty"><p>Your order is empty.</p><button class="add" id="browse">Browse foods</button></div>`;
    return;
  }
  cartItems.innerHTML = ids.map(i => {
    const f = FOODS[i], q = cart[i];
    return `<div class="ci">
      <span class="thumb" data-key="${f.key}"></span>
      <div class="ci-info"><strong>${f.name}</strong><span>${naira(f.price * q)}</span>
        <div class="qty">
          <button data-act="dec" data-i="${i}" aria-label="Remove one ${f.name}">&minus;</button>
          <b>${q}</b>
          <button data-act="inc" data-i="${i}" aria-label="Add one ${f.name}">+</button>
        </div></div>
      <button class="rm" data-act="rm" data-i="${i}" aria-label="Remove ${f.name} from order">&times;</button>
    </div>`;
  }).join('');
  paint(cartItems);
}
function openCart() {
  drawer.classList.add('open'); scrim.classList.add('show');
  drawer.setAttribute('aria-hidden', 'false');
  document.getElementById('closeCart').focus();
}
function closeCart() {
  drawer.classList.remove('open'); scrim.classList.remove('show');
  drawer.setAttribute('aria-hidden', 'true');
}

grid.addEventListener('click', e => {
  const b = e.target.closest('.add'); if (!b) return;
  cart[b.dataset.i] = (cart[b.dataset.i] || 0) + 1;
  renderCart();
  toast.textContent = `${FOODS[b.dataset.i].name} added. Tap "Order now" to review.`;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
});

cartItems.addEventListener('click', e => {
  if (e.target.id === 'browse') { closeCart(); document.getElementById('foods').scrollIntoView(); return; }
  const b = e.target.closest('[data-act]'); if (!b) return;
  const i = b.dataset.i;
  if (b.dataset.act === 'inc') cart[i]++;
  else if (b.dataset.act === 'dec') { if (--cart[i] <= 0) delete cart[i]; }
  else delete cart[i];
  renderCart();
});
document.getElementById('clearCart').addEventListener('click', () => { clearCart(); renderCart(); });
document.getElementById('checkout').addEventListener('click', () => {
  const total = naira(cartSum());
  clearCart(); renderCart();
  cartItems.innerHTML = `<div class="empty"><p><strong>Order placed!</strong></p><p>${total}. A rider is on the way.</p><button class="add" id="browse">Back to foods</button></div>`;
});
document.getElementById('orderBtn').addEventListener('click', e => { e.preventDefault(); openCart(); });
document.getElementById('closeCart').addEventListener('click', closeCart);
scrim.addEventListener('click', closeCart);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeCart(); });

/* ===================== Reviews ===================== */
document.getElementById('reviews').innerHTML = REVIEWS.map((r, i) => `
  <article class="rv">
    <header><img src="${avatar(i + 1)}" alt=""><div><strong>${r.name}</strong><span class="stars" aria-label="5 out of 5 stars">★★★★★</span></div></header>
    <p>${r.text}</p>
  </article>`).join('');

/* ===================== Mobile nav ===================== */
const burger = document.getElementById('burger');
const links = document.getElementById('links');
burger.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
links.addEventListener('click', () => { links.classList.remove('open'); burger.setAttribute('aria-expanded', false); });

document.getElementById('yr').textContent = new Date().getFullYear();
paint();
renderGrid(); renderFilterBar(); renderCart(); renderCart();
