![image-20220803092149393](https://vip2.loli.io/2022/08/03/wdHjUA9ZemOYIQb.png)

## 快捷键

V Select Tool

Q 　 Transform Tool Graduebt Transform Tool 　可以调整颜色渐变方向

![image-20220803105600365](https://vip2.loli.io/2022/08/03/jmdEMIkBewLrhZ8.png)

ctrl G Group 把图形组成一组

ctrl shift G UnGroup

双击 进入 所选 Group

bitmap to vector

![image-20220803160548867](https://vip2.loli.io/2022/08/03/MdWFB2w9nkLoSzC.png)

down up

hit 是真正的区域

import png file error

## SetTimeout function

```javascript
this.btn1.addEventListener("click",hideShapes);
let root = this;

function hideShapes(){
	root.blue1.visible = false;
	setTimeout(function(){root.red1.visible = false;},3000);
}
```

## gotoAndPlay

因为animate 会自动播放动画

所以在一开始要停止播放动画

```javascript
this.stop();
this.red.gotoAndPlay("label")
```

![image-20220807150756579](https://vip2.loli.io/2022/08/07/6cQNb92SgaCIDps.png)
