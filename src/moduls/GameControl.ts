import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

class GameControl{
    // 属性
    snake:Snake;
    food:Food;
    scorepanel:ScorePanel;

    // 属性，用来记录方向
    direction:string = '';
    // 用来记录蛇是否存活
    isLive = true;
    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorepanel = new ScorePanel();

        // 游戏初始化
        this.init();
    }

    // 游戏初始化函数
    init(){
        // 绑定键盘按键按下的事件
        // 这里要使用bind绑定第一个this（也就是GameControl），如果不绑定keydownHandler是被document调用，指向的是document
        document.addEventListener('keydown',this.keydownHandler.bind(this));

        // 调用蛇移动的函数
        this.run();
    }

    // 创建按键按下的时候响应的函数
    keydownHandler(event:KeyboardEvent){
        this.direction = event.key
        /*
        * ArrowUp Up
          ArrowDown Down
          ArrowLeft Left
          ArrowRight Right
        * */
    }

    // 创建蛇移动的方法
    run(){
        // 获取蛇现在的坐标
        let x = this.snake.X;
        let y = this.snake.Y;

        // 根据按键的方向修改x和y的值
        switch (this.direction){
            case "ArrowUp":
            case "Up":
                y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                x -= 10;
                break;
            case "ArrowRight":
            case "Right":
                x += 10;
                break;
        }
        // 修改蛇的坐标
        this.snake.X = x;
        this.snake.Y = y;

        // 调用定时，,因为递归的关系,所以能让蛇一直动
        // 要注意不是 this.run().bind(this);
        // this.run.bind(this) 相当于 this.run(),这个this是参数的this
        this.isLive && setTimeout(this.run.bind(this),300 - (this.scorepanel.level) * 30)
    }
}

export default GameControl;