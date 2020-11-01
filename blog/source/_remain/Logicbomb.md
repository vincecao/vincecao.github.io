---
title: Made one simple Logic Bomb and 吐了点槽
date: 2016-06-15 21:32:40
tags: 
- Java
categories: Code
---

One of questons from Midterm 。。。It is just a simple Logic Bomb。。
<!--more-->

```java

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

/*
 * @Author: Vince Cao
 */

public class logicBomb {

 public static void main(String[] args) {
  bomb();
 };
 private static void bomb() {
  int counter = 0;
  double r;
  int d, r1;
  do{
   r = 90000000*Math.random()+10000000;
   DateFormat dateFormat = new SimpleDateFormat("yyyyMMdd");
   Date date = new Date();
   d = Integer.parseInt(dateFormat.format(date));
   r1 = Integer.parseInt(String.format("%.0f",r));
   counter++;
   System.out.println(d);
   System.out.println(r1);
  }while(d != r1);
  System.out.println("It is your lucky day!");
  System.out.println("The count is: " + counter);
 }

}

```

虽然我编程能力不怎么样，但我还是要贴来鼓励自己！
虽然我现在还太菜，但我还是把美剧《硅谷》看完了！
虽然最近真的是背的可以，但我还是健健康康活着嘛！
虽然最近给家里花了好多钱，但我以后肯定要赚回来！
虽然签证都被拒了，花了1w多的行程现在在悬崖边缘，
我就是这么让人可怜让人心疼的为申研成功不停奋斗！
我就是就是就是就是就是就是就是要成为 Gilfoyle!

![](http://i.imgur.com/CfsyNuP.jpg "我就是就是就是就是就是就是就是要成为 Gilfoyle!")
