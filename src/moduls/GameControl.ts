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
    }

    // 创建按键按下的时候响应的函数
    keydownHandler(event:KeyboardEvent){
        this.direction = event.key
        /*
        * ArrowUp
          ArrowDown
          ArrowLeft
          ArrowRight
        * */
    }
}

export default GameControl;