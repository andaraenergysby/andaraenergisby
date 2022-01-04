const today = new Date()
        const year = document.querySelector('#year')
        year.textContent = today.getFullYear()

        const navbar = document.querySelector('header')
        window.onscroll = function(e) {
            let isUp = this.oldScroll < this.scrollY;
            if(isUp){
                navbar.classList.add('-translate-y-16')
            }else{
                navbar.classList.remove('-translate-y-16')
            }
            this.oldScroll = this.scrollY;
        }

        const sections = document.querySelectorAll("section")
        const leftNavbar = document.querySelector("#left-navbar")
    
        const option = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2
        }
        const sectionObserver = new IntersectionObserver(
            (entries, observer) => {
                const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
                entries.forEach(entry => {
                    console.log(entry)
                    if(entry.target.id === 'hero-section' && !entry.isIntersecting){
                        navbar.classList.add('bg-white')
                        navbar.classList.add('shadow')
                    }else if(entry.target.id === 'hero-section' && entry.isIntersecting){
                        if(vw > 768){
                            navbar.classList.remove('bg-white')
                            navbar.classList.remove('shadow')
                        }
                    }
                })
        }, option)

        sections.forEach(section => {
            sectionObserver.observe(section)
            // console.log(section)
        })