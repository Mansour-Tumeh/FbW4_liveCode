class Header{
    static create(){
        const header = document.createElement('header')
        header.className = "Header"
        const a = document.createElement('a')
        a.setAttribute('href','#')
        a.innerHTML = `Home Page`
        header.append(a)
        return header
    }
}

export default Header;