function redirectToIndex() {
    sessionStorage.setItem('scrollTo', '900'); 
    window.location.href = "index.html"; 
} 
window.onload = function() { 
    const scrollTo = sessionStorage.getItem('scrollTo'); if (scrollTo) { window.scrollTo({
         top: parseInt(scrollTo),
          behavior: 'smooth' 
    }); 
    sessionStorage.removeItem('scrollTo'); } 
}; // блок кода, перессылающий пользователя на вкладку "О платформе"



document.addEventListener('DOMContentLoaded', function() {
    const savedOpacity = localStorage.getItem('mathOpacity');
    if (savedOpacity) {
        document.getElementById('math').style.opacity = savedOpacity;
    }
});

function addMath() {
    document.getElementById('math').style.opacity = '1';
    localStorage.setItem('mathOpacity', '1');
    window.location.href = "page3.html";
}




document.addEventListener('DOMContentLoaded', function() {
    const savedOpacity = localStorage.getItem('physOpacity');
    if (savedOpacity) {
        document.getElementById('physics').style.opacity = savedOpacity;
    }
});

function addPhysics() {
    document.getElementById('physics').style.opacity = '1';
    localStorage.setItem('physOpacity', '1');
    window.location.href = "pagephys.html";
}




document.addEventListener('DOMContentLoaded', function() {
    const savedOpacity = localStorage.getItem('csOpacity');
    if (savedOpacity) {
        document.getElementById('cs').style.opacity = savedOpacity;
    }
});

function addCs() {
    document.getElementById('cs').style.opacity = '1';
    localStorage.setItem('csOpacity', '1');
    window.location.href = "pageinf.html";
}

// функции, которые засчитывают(меняют прозрачность) достижения



/*
window.addEventListener('beforeunload', function() { localStorage.removeItem('mathOpacity');});
window.addEventListener('beforeunload', function() { localStorage.removeItem('physOpacity');});
window.addEventListener('beforeunload', function() { localStorage.removeItem('csOpacity');});
*/
