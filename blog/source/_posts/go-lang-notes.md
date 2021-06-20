---
title: Go language Notes
date: 2021-06-19 22:30:17
tags:
- Go
categories: Notes
---

### func, Package

```go
package main

import "fmt"

func main() {
	fmt.Println("Hello, ninjas!")
}

```

### strings

```go
// strings
var nameOne string = "first name"
var nameTwo = "second name"
var nameThree string

fmt.Println(nameOne, nameTwo, nameThree)

nameThree = "third name"
nameFour := "fourth name"
fmt.Println(nameOne, nameTwo, nameThree, nameFour)
```

### int, uint, float, etc

```go
// ints, int8, int16, uint8, float32, etc
intOne := 1
var intTwo int = 2
var intThree = 3

fmt.Println(intOne, intTwo, intThree)
```

### print, printf, sprintf

```go
// print, printf, sprintf
age := 10
ageString := "10"
name := "John"
fmt.Printf("my age is %v and my name is %v \n", age, name)
fmt.Printf("my age is %q and my name is %q \n", ageString, name)
fmt.Printf("age type is %T \n", age)

fmt.Printf("this number is %f \n", 255.5)
fmt.Printf("this number is %0.2f \n", 255.5)

str := fmt.Sprintf("this number is %0.4f \n", 255.5)
fmt.Printf("Saved: %v", str)
```

## Ref:
- [Package builtin](https://golang.org/pkg/builtin/)
- [Package fmt](https://golang.org/pkg/fmt/)
