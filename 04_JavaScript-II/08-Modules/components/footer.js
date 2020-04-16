class Footer{
    static create(){
        const f = document.createElement('footer')
        f.className= "Footer"
        f.innerHTML = `<p>Modules Testing Application</p>`
    return f
    }
}

export default Footer