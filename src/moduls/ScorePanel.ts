// 定义积分牌的类
class ScorePanel{
    // score 和 level 用来记录分数和等级
    // 可以使用直接赋值的方式
    score = 0;
    level = 1;

    // 设置一个变量限制等级
    maxLevel:number

    // 设置一个变量表示多少分的时候升级
    upScore:number;

    // 分数和等级所在的元素，在构造函数中进行初始化
    scoreEle:HTMLElement;
    levelEle:HTMLElement;
    // 表示如果不传参，maxLevel 的默认值为 10
    constructor(maxLevel = 10,upScore = 10) {
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }

    //设置一个加分的方法
    addScore(){
        // 使分数自增
        this.scoreEle.innerHTML = ++this.score + '';
        // 判断分数，以此来决定升不升级
        if(this.score % this.upScore === 0){
            this.levelUp();
        }
    }

    //等级提升的方法
    levelUp(){
        // 限制最高等级
        if(this.level < this.maxLevel){
            // 使等级提升
            this.levelEle.innerHTML = ++this.level + '';
        }
    }
}

//测试代码
// const sc = new ScorePanel(100,2);
// for (let i = 0;i < 200;i++){
//     sc.addScore();
// }

export default ScorePanel;