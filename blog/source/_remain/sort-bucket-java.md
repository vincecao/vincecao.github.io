---
title: Common Sort Algorithm Practice III -- Bucket Sort
date: 2016-09-29 10:55:29
tags:
- Algorithm
- Java
categories: Code
---
The Bucket algorithm including three class, method bucketSort class, randomGenerater class and unit test. The insertion sort is changed based on [Click](http://courses.cs.washington.edu/courses/cse373/01wi/slides/Measurement/sld010.htm 'insertion sort')
<!--more-->
## bucketSort.java
```java
/*****************************************************************************
* Author: Lineng Cao
* Title: bucketSort in Java
* Statement:
*   This is a Bucket Sort algorithm demo for 0~1.0 in Java, the insertion sort
*   in the code is referenced and changed based on http://courses.cs.washington.
*   edu/courses/cse373/01wi/slides/Measurement/sld010.htm
*
*
****************************************************************************/

public List[] makeBucket(double[] array){
	List[] bucket = new List[array.length];
	//ArrayList<Double> bucketList = new ArrayList<Double>();
	for(int i=0;i < array.length;i++){
		bucket[i] = new ArrayList<Double>();
	}
	return bucket;
}

public void addBucket(List[] bucket, double[] array){
	for(int i=0;i < array.length;i++){
		//int bucketIndex = 99;
		int bucketIndex = (int) (array[i]*100);
		int size = bucket[bucketIndex].size();
		bucket[bucketIndex].add(array[i]);
	}

	ArrayList<Double> arrayList;
	System.out.println();
	for(int i=0;i < bucket.length;i++){
		for(int j=0;j < bucket[i].size();j++){
			arrayList = (ArrayList<Double>) bucket[i];
			doubleIsertionSort(arrayList);
			System.out.print(arrayList.get(j)+"\t");
		}
	}
}

public static void doubleIsertionSort(ArrayList<Double> a){
	for (int i = 1; i < a.size();i++){
		double temp = a.get(i);
		int j;
		for (j=i-1;j >= 0 && temp < a.get(j);j--)
			a.set(j+1, a.get(j));
		a.set(j+1, temp);
	}
}
```
<!--more-->
## Test.java
```java
public static void main(String[] args) {
	double[] wholeArray = new randomGenerater().generateDouble(100);
	long end,start;
	System.out.print("\nThe unsorted array is: ---------");
	new randomGenerater().outPutArray(wholeArray);
	System.out.println();

	bucketSort bu = new bucketSort();
	System.out.println();
	System.out.print("\nThe BucketSort answer is: ---------");

	start = System.currentTimeMillis();
	bu.addBucket(bu.makeBucket(wholeArray), wholeArray);
	end = System.currentTimeMillis();

	System.out.println();
	System.out.print("\nThe BucketSort time is: ");
	System.out.println(end-start);
	System.out.println();
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
