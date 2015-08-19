/**
 * Created by sony on 2015/8/19.
 */
/*
function createStudent(id,name,age)
{
    var oStudent=new Object;//创建一个对象变量
    oStudent.id=id;//定义id属性
    oStudent.name=name;//定义name属性
    oStudent.age=age;//定义age属性
    //定义study方法
    oStudent.study=function()
    {
        alert(this.name+ "开始学习");
    }
    return oStudent;
}
*/
//第二种方式
function study()
{
    alert(this.name+"开始学习");
}
function createStudent(id,name,age)
{
    var oStudent=new Object;//创建一个对象变量；
    oStudent.id=id;
    oStudent.name=name;
    oStudent.age=age;
    oStudent.study=study;
    return oStudent;
}
//构造函数方式
function study2()
{
    alert(this.name+"开始学习");

}
//Student类的构造方法
function Student(id,name,age)
{
    this.id=id;
    this.name=name;
    this.age=age;
    this.study=study2;
}
//原型方式处理
//建立一个空的构造方法
function Student()
{

}
//使用prototype 为Student类添加属性
Student.prototype.id='12';
Student.prototype.name='bill';
Student.prototype.name='bill';
Student.prototype.age=21;
Student.prototype.study=function(){
    alert(this.name+'开始学习');
};
String .prototype.Len=function()
{
  //将每一个中文替换成##;
    return this.replace(/[^\x00-\xff]/g,"##").length;
};