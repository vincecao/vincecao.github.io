---
title: Common Sort Algorithm Practice II -- Radix Sort
date: 2016-09-29 09:56:29
tags:
- Algorithm
- Java
categories: Code
---
The Radix algorithm including three class, method RadixSort class, randomGenerater class and unit test.
<!--more-->
![](http://i.imgur.com/b8dQ8Hc.png counting_sort)
![](http://i.imgur.com/8zmwcqz.png radix)
![](http://i.imgur.com/UNwCGc9.gif)

## radixSort.java
```java
/*****************************************************************************
 * Author: Lineng Cao
 * Title: radixSort in Java
 * Statement:
 *   This is a Bucket Sort algorithm demo for 0~999 in Java, integer r can be 10,
 *   2^3(8) or other number for faster sorting.
 *
 * Sample Output:
 * 		The unsorted array is: ------------------------------
 *		900	181	410	212	246	281	912	701	647	890
 *		
 *		The RadixSort answer is: ------------------------------
 *		181	212	246	281	410	647	701	890	900	912
 *		The RadixSort time is: 0
 *
 ****************************************************************************/

int flag = 0; //flag for mark loop
//get the count array
public int[] getCounts(int[] array, int r){
	int[] countsArray = new int[10];
	for(int i=0; i<array.length; i++){
		countsArray[getNumber(array[i], flag, r)]+=1;
	}
	return countsArray;
}

//get the offset array
public int[] getOffsets(int[] array, int r){
	int[] offsetArray = new int[10];
	offsetArray[0]=getCounts(array, r)[0];
	for(int i=1; i < getCounts(array, r).length; i++){
		offsetArray[i] = getCounts(array, r)[i] + offsetArray[i-1];
	}
	return offsetArray;
}

//counting sort and loopinto radixsort
public int[] sort(int[] array, int r){
	int[] newArray = new int[array.length];
	int[] offsetArray = getOffsets(array, r);
	for(int i=array.length-1; i >= 0; i--){
		newArray[offsetArray[getNumber(array[i],flag, r)]-1] = array[i];
		offsetArray[getNumber(array[i],flag, r)]-=1;
	}
	flag++;
	if(flag<3){ //loop 3 times for 3 units digit		
		newArray = sort(newArray, r);
	}

	return newArray;
}

//to decide on digit or others(2 and so on)
public int getNumber(int n, int flag, int r){
	if (flag==0){
		return (n % r);
	}else if(flag==1){
		return ((n/r)%r);
	}else if(flag==2){
		return ((n/r/r)%r);
	}
	return (Integer) null;
}
```
<!--more-->
## Test.java
```java
public static void main(String[] args) {
	randomGenerater ran = new randomGenerater();
	int[] newArray;
	int[] wholeArray = ran.generate(1000);
	long end,start;
	//int[] wholeArray =
		{5,4,3,2,1,6,5,4,3,1,56,76,565,68,78,7,9,79,8,9,80,4,5,6,7};
	System.out.print("\nThe unsorted array is: -------------");
	ran.outPutArray(wholeArray);


	//Radix Sort
	radixSort con = new radixSort();

	start = System.currentTimeMillis();
	newArray = con.sort(wholeArray, 10);
	end = System.currentTimeMillis();

	System.out.print("\nThe RadixSort answer is: -------------");
	ran.outPutArray(newArray);
	System.out.print("\nThe RadixSort time is: ");
	System.out.println(end-start);
}
```

## randomGenerater.java
```java
public int[] generate(int n){
	int[] numberArray = new int[n];
	for(int i=0;i<n;i++){
		int ran = (int) (Math.random()*1000);
		numberArray[i] = ran;
		//System.out.print(numberArray[i]);
	}
	return numberArray;
}

public void outPutArray(int[] array){
	System.out.println();
	for(int i = 0; i < array.length; i++){
		System.out.print(array[i] + "\t");
	}
}

public double[] generateDouble (int n){
	double[] numberArray = new double[n];

	for (int i = 0; i < n; i++){
		//BigDecimal b = new BigDecimal(Math.random());  
		//double ran = b.setScale(1,BigDecimal.ROUND_HALF_UP).doubleValue();
		double ran = Math.random();
		numberArray[i] = ran;
	}
	return numberArray;
}

public void outPutArray(double[] array){
	System.out.println();
	for(int i = 0; i < array.length; i++){
		System.out.print(array[i] + "\t");
	}
}
```
