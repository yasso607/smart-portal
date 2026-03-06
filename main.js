// ربط العناصر
const searchBtn = document.getElementById('execSearch');
const mainInput = document.getElementById('mainInput');

// وظيفة البحث الحقيقي
function startSearch() {
    const query = mainInput.value.trim();
    if (query !== "") {
        // هيفتح لك نتايج البحث في صفحة جديدة
        window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
    } else {
        alert("اكتب حاجة الأول عشان أقدر أدور لك عليها!");
    }
}

// تشغيل البحث عند الضغط على الزر أو Enter
searchBtn.addEventListener('click', startSearch);
mainInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') startSearch();
});

// وظيفة تشغيل الخدمات (خرائط، ترجمة، إلخ)
function openService(name) {
    let url = "";
    if (name === 'Maps') url = "https://www.google.com/maps";
    if (name === 'News') url = "https://news.google.com";
    if (name === 'Translate') url = "https://translate.google.com";
    if (name === 'Drive') url = "https://drive.google.com";
    
    window.open(url, '_blank');
}
// إظهار نافذة تسجيل الدخول
function showLoginModal() {
    document.getElementById('loginModal').style.display = 'flex';
}

// إغلاق النافذة
function closeLogin() {
    document.getElementById('loginModal').style.display = 'none';
}

// وظيفة الدخول
function loginUser() {
    const user = document.getElementById('username').value;
    if (user.trim() !== "") {
        const userSection = document.getElementById('userSection');
        userSection.innerHTML = `
            <div class="user-profile">
                <span style="margin-left:10px">أهلاً، ${user}</span>
                <div class="avatar" style="width:30px; height:30px; background:var(--primary); border-radius:50%; display:inline-block; vertical-align:middle"></div>
                <button onclick="location.reload()" style="background:none; color:red; border:none; cursor:pointer; margin-right:10px">خروج</button>
            </div>
        `;
        closeLogin();
    } else {
        alert("من فضلك اكتب اسمك!");
    }
 }
function startSearch() {
    const query = mainInput.value.trim();
    
    if (query !== "") {
        // الطريقة دي بتخلي المتصفح يفتح صفحة نتايج بحث شاملة
        // "duckduckgo" أو "bing" بيسمحوا بعرض النتايج بشكل أسرع وأخف
        const searchUrl = `https://www.bing.com/search?q=${encodeURIComponent(query)}`;
        
        // لو عايز تفتحها في نفس الصفحة:
        window.location.href = searchUrl; 
        
        // لو عايز تفتحها في صفحة جديدة (الخيار الأفضل):
        // window.open(searchUrl, '_blank');
    } else {
        alert("اكتب حاجة الأول عشان أقدر أدور لك عليها!");
    }
}

// تشغيل البحث
searchBtn.addEventListener('click', startSearch);
mainInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') startSearch();
});
// تأكد إنك ضفت onclick="openService('Maps')" في الـ HTML لكل كارت