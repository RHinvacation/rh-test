/*将带有nav-current类的a标签的herf设置为不可点击*/
const navCurrent = document.querySelector('.nav-current')
navCurrent.setAttribute('href', 'javascript:void(0)')

/*进入页面时，检查min-width是否大于645px，
如果是，则增加导航栏a标签的active类，
如果不是，则删除导航栏a标签的active类，
在拖动窗口的时候，对header部分实时刷新*/
function adjustNavCurrent() {
    const width = window.innerWidth
    const navCurrent = document.querySelector('.nav-current')
    if (width > 645) {
        navCurrent.classList.add('active')
    } else {
        navCurrent.classList.remove('active')
    }
}
/* 往下滑动页面的时候，保持页面头部部分一直出现*/
function fixedHeader() {
    const header = document.querySelector('.header')
    // const banner = document.querySelector('.banner')
    const lrArea = document.querySelector('.lr-btn')
    const menuArea = document.querySelector('.menu-btn')

    const headerHeight = header.offsetHeight
    // const bannerHeight = banner.offsetHeight
    window.addEventListener('scroll', function () {
        // if (window.scrollY >= headerHeight + bannerHeight)
        if (window.scrollY >= headerHeight) {
            header.classList.remove('header')
            header.classList.add('header-fixed')
            lrArea.classList.add('lrbtn-area')
            menuArea.classList.add('menubtn-area')
        } else {
            header.classList.add('header')
            header.classList.remove('header-fixed')
            lrArea.classList.remove('lrbtn-area')
            menuArea.classList.remove('menubtn-area')
        }
    })
}
window.addEventListener('load', function () {
    adjustNavCurrent()
    fixedHeader()
    window.addEventListener('resize', adjustNavCurrent)
})

document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-btn')
    const nav = document.querySelector('nav')
    const lrBtn = document.querySelector('.lr-btn')
    const loginBtn = lrBtn.querySelector('button:nth-child(1)')
    const registerBtn = lrBtn.querySelector('button:nth-child(2)')
    const downloadBtns = document.querySelectorAll('.download-btn')

    //菜单按钮的点击事件
    menuBtn.addEventListener('click', function () {
        nav.classList.toggle('nav-active')
        if (nav.classList.contains('nav-active')) {
            menuBtn.innerHTML = '×' // 修改菜单按钮内容为"×"
            nav.appendChild(loginBtn)
            nav.appendChild(registerBtn)
        } else {
            menuBtn.innerHTML = '☰' // 修改菜单按钮内容为"☰"
            lrBtn.appendChild(loginBtn)
            lrBtn.appendChild(registerBtn)
        }
    })
    //登录按钮的点击事件
    loginBtn.addEventListener('click', function () {
        menuBtn.innerHTML = '☰'
        alert('登录按钮被点击了')
    })
    //注册按钮的点击事件
    registerBtn.addEventListener('click', function () {
        menuBtn.innerHTML = '☰'
        alert('注册按钮被点击了')
    })
    //点击其他位置时，菜单栏和登录注册按钮会消失
    window.addEventListener('click', function (e) {
        if (!e.target.matches('.menu-btn') && !e.target.matches('.lr-btn')) {
            menuBtn.innerHTML = '☰'
            nav.classList.remove('nav-active')
            lrBtn.classList.remove('lr-active')
        }
    })
    //各个系统下载按钮的点击事件
    //这里假设每个下载按钮都有一个id属性，用于区分不同的下载按钮
    for (let i = 0; i < downloadBtns.length; i++) {
        downloadBtns[i].addEventListener('click', function () {
            alert(this.id + '下载按钮被点击了')
        })
    }
})
