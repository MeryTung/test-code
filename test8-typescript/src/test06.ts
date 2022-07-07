

//接口继承类

//extends继承某个类或接口，继承之后可以使用父级方法，也可以重写父级方法
//extends只能实现一个继承 class a extends b
//implements是类实现接口，接口的方法一般为空，必须要重写才能使用
//implements 可以实现多个接口   class a implements b,c,d
class Control {
    private state: any 
}

interface SelectableControl extends Control {
    select(): void
}



class Button extends Control implements SelectableControl{
    //继承Control， state属性可写可不写
    //类实现接口SelectableControl,select()必须重写，否则报错
     select(){}
     
}


class clickBtn implements SelectableControl {
    private state: any;
      select(){}
}

class TextBox extends Control {
    foo():void {}
}