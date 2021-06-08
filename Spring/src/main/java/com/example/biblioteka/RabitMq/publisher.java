package com.example.biblioteka.RabitMq;


import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
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
