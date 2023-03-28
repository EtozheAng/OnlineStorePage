//бургер
const burger = document.querySelector('.burger')
const menuNav = document.querySelector('.menu-mobile')
burger.addEventListener('click', () => {
  if (menuNav.style.transform == 'translateX(0px)') {
    menuNav.style.transform = 'translateX(-200%)';
    burger.innerHTML = `<svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1.62768 2.87494L20.3708 2.87494C20.7157 2.87494 20.9954 2.45491 20.9952 1.93747C20.995 1.41995 20.7149 1 20.3701 1L1.62695 1C1.28207 1 1.00236 1.42003 1.00256 1.93747C1.00276 2.45491 1.28285 2.87494 1.62768 2.87494Z"
      fill="black" stroke="white" stroke-width="0.2" />
    <path
      d="M20.3706 7.5625L1.62744 7.5625C1.28255 7.5625 1.00285 7.98253 1.00305 8.49997C1.00325 9.0174 1.28333 9.43743 1.62817 9.43743L20.3713 9.43743C20.7162 9.43743 20.9959 9.01741 20.9957 8.49997C20.9955 7.98253 20.7155 7.5625 20.3706 7.5625Z"
      fill="black" stroke="white" stroke-width="0.2" />
    <path
      d="M20.3702 14.125L7.87499 14.125C7.53011 14.125 7.2504 14.545 7.25059 15.0625C7.25078 15.58 7.53085 15.9999 7.87568 15.9999L20.3709 15.9999C20.7158 15.9999 20.9955 15.5799 20.9953 15.0625C20.9952 14.545 20.7151 14.125 20.3702 14.125Z"
      fill="black" stroke="white" stroke-width="0.2" />
      </svg>`
    document.body.style.overflow = ''
  } else {
    burger.innerHTML = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1.24459L16.7554 17M1 16.7554L16.7554 1" stroke="black" stroke-width="1.5"/>
    </svg>`
    menuNav.style.transform = 'translateX(0)';
    document.body.style.overflow = 'hidden'
  }
})
