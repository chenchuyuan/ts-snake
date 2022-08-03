// 面对对象开发的思想，要使用类
// 食物类
class Food{
    // 定义一个属性表示食物所对应的元素
    element:HTMLElement;

    constructor() {
        // 获取页面中的元素，并且将其赋值给 element
        // 加上 ！ 表示food id 是一定有的，让其亭子报错
        this.element = document.getElementById("food")!
    }

    // 定义一个获取食物 x 坐标的方法
    get X(){
        return this.element.offsetLeft;
    }

    // 定义一个获取食物 y 坐标的方法
    get Y(){
        return this.element.offsetTop;
    }

    // 修改食物的位置
    change(){
        // 1.位置的范围是 0-290（300 - 10）
        // 2.生成一个随机的位置
        // 3.蛇移动一格是 10px，所以要求食物的位置是10的倍数
        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29 ) * 10;

        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}

// 测试代码
// const food = new Food();
// console.log(food.X,food.Y);
// food.change()
// console.log(food.X,food.Y);

export default Food;