---
title: Common Sort Algorithm Practice I -- Heap Sort
date: 2016-09-29 09:55:07
tags:
- Algorithm
- Java
categories: Code
---
The algorithm including three class, method heapSort class, randomGenerater class and unit test.
<!--more-->
![](http://i.imgur.com/vw1QIWw.png heapsort)

## heapSort.java
```java
/*****************************************************************************
 * Author: Lineng Cao
 * Title: heapSort in Java
 * Statement:
 *   This is a Heap Sort algorithm demo for 0~999 in Java. The findMax() is the
 *   original method and findMaxPlus() is an upgrade one.
 *
 * Sample Output:
 * 		The unsorted array is: ------------------------------
 * 		615	554	521	677	780	584	940	373	5	277
 *
 * 		The HeapSort answer is: ------------------------------
 * 		5	277	373	521	554	584	615	677	780	940
 * 		The HeapSort time is: 0
 *
 ****************************************************************************/

//getting the tree layer index number(e.g. 0,1,2,3...)
public int getLayerNumber(int index){
	return (int) (Math.log(index) / Math.log(2));
}

//getting the Horizontal index of number in each layer(e.g. 0,1,2,3...)
public int gethorLayerNumber(int index){
	return (index - (int)(Math.pow(2,getLayerNumber(index))));
}

//Comparing each layer left child node with right child node, and judge if need to exchange
public void compareChild(int leftIndex, int layerIndex, int[] array){
	int index = (int) (Math.pow(2,layerIndex) - 1 + leftIndex);
	if (array[index] < array[index + 1]){
		Exchange(index, index + 1, array);
	}
}

//Comparing each layer child node with its parent node, and judge if need to exchange
public void compareChildParent(int ChildIndex, int layerChildIndex, int[] array){
	int index = (int) (Math.pow(2,layerChildIndex) - 1 + ChildIndex);
	if (array[(int)(index/2)] < array[index]){
		Exchange(index, (int)(index/2), array);
	}
}

public void Exchange(int a, int b, int[] array){
	int temp = array[a];
	array[a] = array[b];
	array[b] = temp;
}

//original method to find max and push into the array[0]
public void findMax(int[] array, int n){
	//last layer
	int lastIndex = gethorLayerNumber(array.length-n);
	int lastLayer = getLayerNumber(array.length-n);

	for(int j=0;j < lastIndex;j+=2){
		compareChild(j,lastLayer, array);
		//System.out.println("j ="+ j);
	}
	for(int j=0;j < lastIndex;j+=2){
		compareChildParent(j,lastLayer, array);
	}

	if(lastIndex%2!=0){
		//hor_index is ODD
	}else{
		//hor_index is EVEN
		compareChildParent(lastIndex,lastLayer, array);
	}


	//except last layer
	for(int i=lastLayer-1; i > 0 ;i--){
		for(int j=0;j < Math.pow(2, i)-1;j+=2){
			compareChild(j, i, array);
		}
		for(int j=0;j < Math.pow(2, i)-1;j+=2){
			compareChildParent(j, i, array);
		}		
	}
}

//upgrade method to find max and push into the array[0]
public void findMaxPlus(int[] array, int n){
	//last layer
	int lastIndex = gethorLayerNumber(array.length-n);
	int lastLayer = getLayerNumber(array.length-n);

	for(int i=lastLayer; i >= 0 ;i--){

		if (i==lastLayer){//for the last layer
			for(int j=0;j < lastIndex+1;j++){
				compareChildParent(j, lastLayer, array);
			}

		}else{//except last layer
			for(int j=0;j < Math.pow(2, i)+1;j++){
				compareChildParent(j, i, array);
			}
		}			
	}
}

//a loop to continously loop findMax() method and sort
public void heapSorting(int[] array){
	for(int i = 0; i < array.length; i++){
		findMaxPlus(array,i);
		Exchange(0, array.length-i-1, array);
		/*here to see the details in processing

		randomGenerater ran = new randomGenerater();
		ran.outPutArray(array);
		*/
	}
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
	//int[] wholeArray = {5,4,3,2,1,6,5,4,3,1,56,76,565,68,78,7,9,79,8,9,80,4,5,6,7};
	System.out.print("\nThe unsorted array is: ----------");
	ran.outPutArray(wholeArray);


	//Heap Sort
	newArray = wholeArray;
	heapSort heap = new heapSort();

	start = System.currentTimeMillis();
	heap.heapSorting(newArray);
	end = System.currentTimeMillis();

	System.out.println();
	System.out.print("\nThe HeapSort answer is: ---------");
	ran.outPutArray(newArray);
	System.out.print("\nThe HeapSort time is: ");
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
