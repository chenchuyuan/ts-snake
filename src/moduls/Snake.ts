class Snake{
    // 蛇头
    head:HTMLElement;
    // 蛇的身体，包括蛇头；HTMLCollection是变的
    body:HTMLCollection;
    // 蛇的容器
    element:HTMLElement;

    constructor() {
        this.element = document.getElementById("snake")!

        //querySelector 只取第一个值
        this.head = document.querySelector("#snake > div") as HTMLElement;

        this.body = this.element.getElementsByTagName("div")
    }

    // 获取蛇头的x坐标
    get X(){
        return this.head.offsetLeft;
    }

    // 获取蛇头的y坐标
    get Y(){
        return this.head.offsetTop;
    }

    // 设置蛇头的x坐标
    set X(value){
        this.head.style.left = value + 'px';
    }
    // 设置蛇头的y坐标
    set Y(value){
        this.head.style.top = value + 'px';
    }

    // 蛇身体增加的方法
    addBody(){
        this.element.insertAdjacentHTML("beforeend","<div></div>")
    }
}

export default Snake;