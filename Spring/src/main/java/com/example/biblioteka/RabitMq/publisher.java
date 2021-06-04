package com.example.biblioteka.RabitMq;

import com.example.biblioteka.model.Books;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.awt.print.Book;
import java.util.Random;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/rabbit")
public class publisher {


    @Autowired
    private RabbitTemplate rabbitTemplate;
    @Autowired
    private RabbitMenager rabbitMenager;

    @GetMapping("/message")
    public String get(@RequestParam String message){
        Random random = new Random();
        String queueName = "Queue1" + random.nextInt(10);
        rabbitMenager.putQueue(queueName);
        rabbitTemplate.convertAndSend(queueName,message);
        return message;
    }



}
