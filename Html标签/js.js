/**
 * Created by sony on 2015/8/18.
 */
//定义并实现一个JavaScript函数
function greet(sName)
{
    alert("你好 "+sName);
}
//实现两个数的和
function sum(n1,n2)
{
    return n1+ n2;
}
//实现多个数目的Number类型值的和
/*
在使用arguments对象实现动态参数，也就是在声明函数时并不需要定义参数,而在
函数体内使用arguments对象来获得当前函数的参数值。
*/
function sum1()
{
    var sum=0;
    for(var i=0;i<arguments.length;i++)
    {
        sum +=arguments[i];
    }
    return sum;
}
//动态显示一个数组的个数情况
function GetArray()
{
     //定义一个数组变量
    var aValues=new Array();
    for(var i=1;i<=arguments.length;i++)
    {
        aValues[i]="v"+i+"";
    }
    return aValues;
}