class RightSide{
    static create(){
        const right = document.createElement('div')
        right.className = "RightSide"
        const ul = document.createElement('ul')
        ul.innerHTML = `  <li>Olli</li>
        <li>Isaac</li>
        <li>Ruth</li>
        <li>Sascha</li>`

        right.append(ul)

        return right
    }
}

export default RightSide;