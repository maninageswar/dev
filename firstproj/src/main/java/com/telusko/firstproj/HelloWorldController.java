package com.telusko.firstproj;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class HelloWorldController {
    @GetMapping("/hello-world")
    public String Helloworld(){
        return "Hello world";
    }
    // get student
    @GetMapping("/student")
    public Student getStudent(){
        System.out.println("hello");
        return  new Student("sai",23);
    }

    // get students
    @GetMapping("/students")
    public List<Student> getStudents(){
        List<Student> Students = new ArrayList<>();
        Students.add(new Student("ravi",23));
        Students.add(new Student("sai",23));
        Students.add(new Student("kumar",23));
        Students.add(new Student("cris",23));
        Students.add(new Student("dale",23));
        return  Students;
    }

    //path variables
    @GetMapping("/cstudent/{name}/{age}")
    public Student CustomStudent(
            @PathVariable("name") String name,
            @PathVariable("age") String age
    ){
        int Age=Integer.parseInt(age);
        return  new Student(name,Age);
    }

    //query variables
    @GetMapping("/student/query")
    public Student studentquery(
            @RequestParam(name="name") String name,
            @RequestParam(name = "age") String age
    ){
        int Age=Integer.parseInt(age);
        return  new Student(name,Age);
    }
    Student s1;

    //create student
    @PostMapping("createStudent")
    public String CreateStudent(@RequestBody Student student){
    this.s1=student;
    return "Student has been created";
    }
}
